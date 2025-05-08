import { NextResponse } from "next/server"

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!
const SHOW_ID = process.env.SPOTIFY_SHOW_ID || "1g3w0T9ILa4jla69tJ7wXd"

export async function GET() {
  try {
    console.log("Iniciando requisição para a API do Spotify...")

    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
      cache: "no-store",
    })

    if (!tokenResponse.ok) {
      const tokenError = await tokenResponse.text().catch(() => "Erro desconhecido")
      console.error("Falha ao obter token do Spotify:", tokenResponse.status, tokenResponse.statusText, tokenError)
      throw new Error(`Falha ao obter token do Spotify: ${tokenResponse.status} ${tokenResponse.statusText}`)
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token
    console.log("Token obtido com sucesso")

    const episodesUrl = `https://api.spotify.com/v1/shows/${SHOW_ID}/episodes?limit=5&market=BR`
    console.log("Buscando episódios em:", episodesUrl)

    const episodesResponse = await fetch(episodesUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    })

    if (!episodesResponse.ok) {
      const episodesError = await episodesResponse.text().catch(() => "Erro desconhecido")
      console.error(
        "Falha ao buscar episódios do Spotify:",
        episodesResponse.status,
        episodesResponse.statusText,
        episodesError,
      )
      throw new Error(`Falha ao buscar episódios do Spotify: ${episodesResponse.status} ${episodesResponse.statusText}`)
    }

    const episodesData = await episodesResponse.json()
    console.log("Dados de episódios obtidos com sucesso:", episodesData.items?.length || 0, "episódios")

    if (!episodesData.items || !Array.isArray(episodesData.items) || episodesData.items.length === 0) {
      console.log("Resposta da API sem itens:", episodesData)
      throw new Error("Nenhum episódio encontrado")
    }

    const episodes = episodesData.items.map((episode: any) => ({
      id: episode.id,
      name: episode.name,
      imageUrl: episode.images?.[0]?.url || "/placeholder.svg?height=500&width=500",
      spotifyUrl: episode.external_urls?.spotify || `https://open.spotify.com/episode/${episode.id}`,
      releaseDate: episode.release_date || "Data desconhecida",
    }))

    return NextResponse.json({ episodes })
  } catch (error: any) {
    console.error("Erro na API do Spotify:", error.message)

    const fallbackEpisodes = [
      {
        id: "fallback1",
        name: "O Cinema De Ryan Coogler",
        imageUrl: "/placeholder.svg?height=500&width=500",
        spotifyUrl: `https://open.spotify.com/show/${SHOW_ID}`,
        releaseDate: "2024-05-02",
      },
      {
        id: "fallback2",
        name: "O universo de Star Wars",
        imageUrl: "/placeholder.svg?height=500&width=500",
        spotifyUrl: `https://open.spotify.com/show/${SHOW_ID}`,
        releaseDate: "2024-04-25",
      },
      {
        id: "fallback3",
        name: "Cinetalk #40 - Twisters e Deadpool & Wolverine",
        imageUrl: "/placeholder.svg?height=500&width=500",
        spotifyUrl: `https://open.spotify.com/show/${SHOW_ID}`,
        releaseDate: "2024-04-17",
      },
      {
        id: "fallback4",
        name: "Cinetalk #39 - Planeta dos Macacos: O Reinado",
        imageUrl: "/placeholder.svg?height=500&width=500",
        spotifyUrl: `https://open.spotify.com/show/${SHOW_ID}`,
        releaseDate: "2024-04-10",
      },
      {
        id: "fallback5",
        name: "Cinetalk #38 - Furiosa: Uma Saga Mad Max",
        imageUrl: "/placeholder.svg?height=500&width=500",
        spotifyUrl: `https://open.spotify.com/show/${SHOW_ID}`,
        releaseDate: "2024-04-03",
      },
    ]

    return NextResponse.json({ episodes: fallbackEpisodes, error: error.message })
  }
}
  