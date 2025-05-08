import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container-custom">
        <h2 className="section-title">Sobre o Cinetalk Podcast</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-8 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-4">
              O Cinetalk Podcast nasceu da paixão pelo cinema e pela cultura pop. Desde 2022, trazemos semanalmente
              análises, críticas e debates sobre os principais lançamentos do cinema, séries e todo o universo
              audiovisual.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Nossa missão é proporcionar conteúdo de qualidade, com um olhar crítico e bem-humorado sobre as produções
              que movimentam a indústria do entretenimento, sempre valorizando o cinema nacional e internacional.
            </p>
            <p className="text-lg text-gray-300">
              Com uma equipe de apresentadores apaixonados e especialistas em diferentes áreas do audiovisual, o
              Cinetalk se tornou referência para cinéfilos e entusiastas que buscam aprofundar seus conhecimentos sobre
              a sétima arte.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Host 1"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Host 2"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Host 3"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
