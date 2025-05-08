"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Loader2 } from "lucide-react"

type Episode = {
  id: string
  name: string
  imageUrl: string
  spotifyUrl: string
  releaseDate: string
}

export function EpisodesCarousel() {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [usingFallback, setUsingFallback] = useState(false)

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        console.log("Tentando buscar episódios da API principal...")
        const response = await fetch("/api/spotify")

        if (!response.ok) {
          console.error("Resposta da API principal não ok:", response.status, response.statusText)
          throw new Error(`Falha ao buscar episódios: ${response.status}`)
        }

        const data = await response.json()
        console.log("Dados recebidos da API principal:", data)

        if (data.episodes && Array.isArray(data.episodes)) {
          setEpisodes(data.episodes)
        } else {
          console.error("Formato de dados inválido da API principal:", data)
          throw new Error("Formato de dados inválido")
        }
      } catch (err) {
        console.error("Erro ao buscar da API principal, tentando API alternativa:", err)

        try {
          // Tentar a API alternativa
          console.log("Buscando da API alternativa...")
          const altResponse = await fetch("/api/spotify-alt")

          if (!altResponse.ok) {
            throw new Error(`API alternativa também falhou: ${altResponse.status}`)
          }

          const altData = await altResponse.json()
          console.log("Dados recebidos da API alternativa:", altData)

          if (altData.episodes && Array.isArray(altData.episodes)) {
            setEpisodes(altData.episodes)
            setUsingFallback(true)
          } else {
            throw new Error("Formato de dados inválido da API alternativa")
          }
        } catch (altErr) {
          console.error("Ambas as APIs falharam:", altErr)
          setError(true)

          // Usar dados de fallback hardcoded como último recurso
          setEpisodes([
            {
              id: "fallback1",
              name: "O Cinema De Ryan Coogler (Fallback)",
              imageUrl: "/placeholder.svg?height=500&width=500",
              spotifyUrl: "https://open.spotify.com/show/1g3w0T9ILa4jla69tJ7wXd",
              releaseDate: "2024-05-02",
            },
            {
              id: "fallback2",
              name: "O universo de Star Wars (Fallback)",
              imageUrl: "/placeholder.svg?height=500&width=500",
              spotifyUrl: "https://open.spotify.com/show/1g3w0T9ILa4jla69tJ7wXd",
              releaseDate: "2024-04-25",
            },
            {
              id: "fallback3",
              name: "Cinetalk #40 - Twisters e Deadpool & Wolverine (Fallback)",
              imageUrl: "/placeholder.svg?height=500&width=500",
              spotifyUrl: "https://open.spotify.com/show/1g3w0T9ILa4jla69tJ7wXd",
              releaseDate: "2024-04-17",
            },
            {
              id: "fallback4",
              name: "Cinetalk #39 - Planeta dos Macacos: O Reinado (Fallback)",
              imageUrl: "/placeholder.svg?height=500&width=500",
              spotifyUrl: "https://open.spotify.com/show/1g3w0T9ILa4jla69tJ7wXd",
              releaseDate: "2024-04-10",
            },
            {
              id: "fallback5",
              name: "Cinetalk #38 - Furiosa: Uma Saga Mad Max (Fallback)",
              imageUrl: "/placeholder.svg?height=500&width=500",
              spotifyUrl: "https://open.spotify.com/show/1g3w0T9ILa4jla69tJ7wXd",
              releaseDate: "2024-04-03",
            },
          ])
          setUsingFallback(true)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchEpisodes()
  }, [])

  // Fallback para quando a API não responde - usando o ID correto
  const fallbackUrl = "https://open.spotify.com/show/1g3w0T9ILa4jla69tJ7wXd"

  if (loading) {
    return (
      <section className="py-16 bg-gray-950">
        <div className="container-custom">
          <h2 className="section-title">Últimos Episódios</h2>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-green-600" />
            <span className="ml-2 text-lg">Carregando episódios...</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-950">
      <div className="container-custom">
        <h2 className="section-title">Últimos Episódios</h2>

        {usingFallback && (
          <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-300">
              Usando dados de demonstração. Os episódios reais estarão disponíveis em breve.
            </p>
          </div>
        )}

        <ScrollArea className="w-full mt-8">
          <div className="flex space-x-6 pb-4">
            {episodes.map((episode) => (
              <div key={episode.id} className="flex-none w-[280px]">
                <Link href={episode.spotifyUrl} target="_blank" className="block group">
                  <div className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-600/20 group-hover:scale-105">
                    <div className="relative aspect-square">
                      <Image
                        src={episode.imageUrl || "/placeholder.svg?height=500&width=500"}
                        alt={episode.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center">
                          <Image src="/images/spotify.png" alt="Spotify" width={24} height={24} />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg line-clamp-2 h-14">{episode.name}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="mt-6 text-center">
          <Link
            href={fallbackUrl}
            target="_blank"
            className="bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-2 px-4 rounded-full transition-all hover:scale-105 inline-flex items-center"
          >
            <Image src="/images/spotify.png" alt="Spotify" width={20} height={20} className="mr-2" />
            Ver todos os episódios no Spotify
          </Link>
        </div>
      </div>
    </section>
  )
}
