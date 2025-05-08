import { NextResponse } from "next/server"

// ID correto do podcast Cinetalk
const SHOW_ID = "1g3w0T9ILa4jla69tJ7wXd"

export async function GET() {
  // Dados de fallback baseados nos episódios reais vistos na screenshot
  const fallbackEpisodes = [
    {
      id: "ep1",
      name: "O Cinema De Ryan Coogler",
      imageUrl: "/placeholder.svg?height=500&width=500",
      spotifyUrl: `https://open.spotify.com/show/${SHOW_ID}`,
      releaseDate: "2024-05-02",
    },
    {
      id: "ep2",
      name: "O universo de Star Wars",
      imageUrl: "/placeholder.svg?height=500&width=500",
      spotifyUrl: `https://open.spotify.com/show/${SHOW_ID}`,
      releaseDate: "2024-04-25",
    },
    {
      id: "ep3",
      name: "Cinetalk #40 - Twisters e Deadpool & Wolverine",
      imageUrl: "/placeholder.svg?height=500&width=500",
      spotifyUrl: `https://open.spotify.com/show/${SHOW_ID}`,
      releaseDate: "2024-04-17",
    },
    {
      id: "ep4",
      name: "Cinetalk #39 - Planeta dos Macacos: O Reinado",
      imageUrl: "/placeholder.svg?height=500&width=500",
      spotifyUrl: `https://open.spotify.com/show/${SHOW_ID}`,
      releaseDate: "2024-04-10",
    },
    {
      id: "ep5",
      name: "Cinetalk #38 - Furiosa: Uma Saga Mad Max",
      imageUrl: "/placeholder.svg?height=500&width=500",
      spotifyUrl: `https://open.spotify.com/show/${SHOW_ID}`,
      releaseDate: "2024-04-03",
    },
  ]

  return NextResponse.json({ episodes: fallbackEpisodes })
}
