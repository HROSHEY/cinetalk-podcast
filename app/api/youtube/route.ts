import { NextResponse } from "next/server";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = "UCC0JOYs3KmoQoGWj7uBLfuw";
const MAX_RESULTS = 10;

export async function GET() {
  try {
    const searchRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=id&order=date&maxResults=${MAX_RESULTS}`
    );
    const searchData = await searchRes.json();

    const videoIds = searchData.items
      .filter(item => item.id.kind === "youtube#video" && item.id.videoId)
      .map(item => item.id.videoId)
      .join(",");

    if (!videoIds) {
      return NextResponse.json({ shorts: [] });
    }

    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=snippet,contentDetails`
    );
    const videosData = await videosRes.json();

    const shorts = videosData.items.filter(video => {
      const duration = video.contentDetails.duration;

      // Regex completo para capturar horas, minutos e segundos
      const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

      if (!match) return false;

      const hours = parseInt(match[1] || "0", 10);
      const minutes = parseInt(match[2] || "0", 10);
      const seconds = parseInt(match[3] || "0", 10);

      // Bloqueia vídeos com qualquer hora
      if (hours > 0) return false;

      const totalSeconds = minutes * 60 + seconds;

      // Aceita apenas vídeos de até 2 minutos (120 segundos)
      return totalSeconds <= 120;
    }).map(video => ({
      id: video.id,
      title: video.snippet.title,
      thumbnailUrl: video.snippet.thumbnails.high.url,
      videoUrl: `https://www.youtube.com/shorts/${video.id}`,
    }));

    return NextResponse.json({ shorts });
  } catch (error: any) {
    console.error("Erro na API do YouTube:", error.message);
    return NextResponse.json(
      { error: "Falha ao buscar dados do YouTube", shorts: [] },
      { status: 200 }
    );
  }
}
