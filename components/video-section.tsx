"use client"

import { useEffect, useState } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Youtube, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Short = {
  id: string
  title: string
  thumbnailUrl: string
  videoUrl: string
}

export function VideoSection() {
  const [shorts, setShorts] = useState<Short[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchShorts() {
      try {
        console.log("Iniciando busca de shorts...")
        const response = await fetch("/api/youtube")

        if (!response.ok) {
          console.error("Resposta da API não ok:", response.status, response.statusText)
          throw new Error(`Falha ao buscar shorts: ${response.status}`)
        }

        const data = await response.json()
        console.log("Dados recebidos da API:", data)

        if (data.shorts && Array.isArray(data.shorts)) {
          setShorts(data.shorts)
        } else {
          console.error("Formato de dados inválido:", data)
          throw new Error("Formato de dados inválido")
        }
      } catch (err) {
        console.error("Erro ao buscar shorts:", err)
        setError(true)

        // Usar dados de fallback em caso de erro
        setShorts([
          {
            id: "fallback1",
            title: "Nosferatu é bom? (Fallback)",
            thumbnailUrl: "/placeholder.svg?height=720&width=1280",
            videoUrl: "https://www.youtube.com/@Cinetalkpodcast1/shorts",
          },
          {
            id: "fallback2",
            title: "Alien Romulus vale a pena? (Fallback)",
            thumbnailUrl: "/placeholder.svg?height=720&width=1280",
            videoUrl: "https://www.youtube.com/@Cinetalkpodcast1/shorts",
          },
          {
            id: "fallback3",
            title: "Deadpool & Wolverine - Reação (Fallback)",
            thumbnailUrl: "/placeholder.svg?height=720&width=1280",
            videoUrl: "https://www.youtube.com/@Cinetalkpodcast1/shorts",
          },
          {
            id: "fallback4",
            title: "Twisters é melhor que o original? (Fallback)",
            thumbnailUrl: "/placeholder.svg?height=720&width=1280",
            videoUrl: "https://www.youtube.com/@Cinetalkpodcast1/shorts",
          },
          {
            id: "fallback5",
            title: "Planeta dos Macacos: O Reinado - Análise (Fallback)",
            thumbnailUrl: "/placeholder.svg?height=720&width=1280",
            videoUrl: "https://www.youtube.com/@Cinetalkpodcast1/shorts",
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchShorts()
  }, [])

  // Fallback para quando a API não responde
  const fallbackUrl = "https://www.youtube.com/@Cinetalkpodcast1/shorts"

  if (loading) {
    return (
      <section className="py-16 bg-black">
        <div className="container-custom">
          <h2 className="section-title flex items-center gap-2">
            Cortes e Trailers
            <Youtube size={24} className="text-red-600 ml-2" />
          </h2>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-red-600" />
            <span className="ml-2 text-lg">Carregando shorts...</span>
          </div>
        </div>
      </section>
    )
  }

  // Se temos shorts (seja da API ou do fallback), exibimos eles
  return (
    <section className="py-16 bg-black">
      <div className="container-custom">
        <h2 className="section-title flex items-center gap-2">
          Cortes e Trailers
          <Youtube size={24} className="text-red-600 ml-2" />
        </h2>

        {error && (
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-red-300">
              Houve um problema ao carregar os dados do YouTube. Exibindo conteúdo de fallback.
            </p>
          </div>
        )}

        <ScrollArea className="w-full mt-8">
          <div className="flex space-x-4 pb-4">
            {shorts.map((short) => (
              <div key={short.id} className="flex-none w-[250px] md:w-[300px]">
                <Link href={short.videoUrl} target="_blank" className="block group">
                  <div className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-600/20 group-hover:scale-105">
                    <div className="relative aspect-[9/16]">
                      <Image
                        src={short.thumbnailUrl || "/placeholder.svg?height=720&width=1280"}
                        alt={short.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                          <Youtube size={20} className="text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg line-clamp-2 h-14">{short.title}</h3>
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
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-all hover:scale-105 inline-flex items-center"
          >
            <Youtube size={20} className="mr-2" />
            Ver todos os shorts no YouTube
          </Link>
        </div>
      </div>
    </section>
  )
}
