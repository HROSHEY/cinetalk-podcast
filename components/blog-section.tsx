import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Os 10 Melhores Filmes de Ficção Científica da Década",
      excerpt:
        "Uma análise profunda dos filmes que definiram o gênero nos últimos dez anos e como eles influenciaram a cultura pop.",
      image: "/placeholder.svg?height=300&width=500",
      date: "28/04/2025",
    },
    {
      id: 2,
      title: "Entrevista Exclusiva: Diretor Revela Segredos do Novo Blockbuster",
      excerpt: "Conversamos com o diretor sobre os bastidores da produção, desafios e expectativas para o lançamento.",
      image: "/placeholder.svg?height=300&width=500",
      date: "20/04/2025",
    },
    {
      id: 3,
      title: "A Evolução dos Efeitos Especiais no Cinema",
      excerpt:
        "Do stop-motion aos efeitos digitais: como a tecnologia transformou a experiência cinematográfica ao longo das décadas.",
      image: "/placeholder.svg?height=300&width=500",
      date: "15/04/2025",
    },
  ]

  return (
    <section className="py-16 bg-gray-950">
      <div className="container-custom">
        <h2 className="section-title">Últimas do Blog</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="blog-card">
              <div className="relative aspect-video">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h3 className="font-bold text-xl mb-2 line-clamp-2 tracking-normal">{post.title}</h3>
                <p className="text-gray-300 line-clamp-3 mb-4">{post.excerpt}</p>
                <span className="text-red-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Leia mais <ArrowRight size={16} className="transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="btn-primary inline-flex items-center gap-2">
            Ver mais no blog <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
