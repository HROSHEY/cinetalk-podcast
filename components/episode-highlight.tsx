import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

export function EpisodeHighlight() {
  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <h2 className="section-title">Episódio em Destaque</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=700"
              alt="Episódio em destaque"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center">
              <div className="bg-red-600 rounded-full p-2 mr-3">
                <Play size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Episódio #42</p>
                <h4 className="text-lg font-bold text-white">Os Melhores Filmes de 2025</h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-anton mb-4">Episódio #42: Os Melhores Filmes de 2025</h3>

            <p className="text-gray-300 mb-8">
              Neste episódio, discutimos os filmes mais impactantes do ano, analisamos as tendências do cinema atual e
              fazemos nossas apostas para o Oscar. Uma conversa imperdível para os amantes da sétima arte!
            </p>

            <div className="mb-8">
              <audio controls className="w-full" src="/sample-audio.mp3">
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>

            <Link href="/episodios/42" className="btn-primary self-start">
              <Play size={16} />
              Ouça o episódio completo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
