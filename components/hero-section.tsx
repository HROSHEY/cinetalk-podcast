"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Youtube } from "lucide-react"

export function HeroSection() {
  const [activeHost, setActiveHost] = useState<number | null>(null)

  const hosts = [
    {
      name: "Nuno",
      image: "/images/nuno.jpg",
      bio: "Jornalista e cinéfilo",
      social: {
        instagram: "@nunots16",
        letterboxd: "@Critical01",
      },
    },
    {
      name: "Lucas Peraro",
      image: "/images/lucas.jpg",
      bio: "Crítico de cinema e apresentador",
      social: {
        instagram: "@Lucas.peraro",
        letterboxd: "@lucas peraro/klapa",
      },
    },
    {
      name: "Vitor",
      image: "/images/victor.jpg",
      bio: "Roteirista e produtor",
      social: {
        instagram: "@vitor_gatsby",
        letterboxd: "@vitor gatsby",
        tiktok: "@vitinho dos filmes",
        threads: "@vitor_gatsby",
      },
    },
  ]

  const toggleHost = (index: number) => {
    if (activeHost === index) {
      setActiveHost(null)
    } else {
      setActiveHost(index)
    }
  }

  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 py-16">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-anton mb-10 tracking-wider">CINETALK PODCAST</h1>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {hosts.map((host, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="host-circle mb-2 cursor-pointer" onClick={() => toggleHost(index)}>
                <Image
                  src={host.image || "/placeholder.svg"}
                  alt={host.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className="font-medium text-sm cursor-pointer hover:text-red-500 transition-colors"
                onClick={() => toggleHost(index)}
              >
                {host.name}
              </p>

              {/* Social Media Popup */}
              {activeHost === index && (
                <div className="mt-2 bg-gray-800 rounded-lg p-4 shadow-lg z-10 min-w-[200px]">
                  <h4 className="font-bold mb-3 text-center">{host.name}</h4>
                  <div className="flex flex-col gap-3">
                    {host.social.instagram && (
                      <a
                        href={`https://instagram.com/${host.social.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-pink-500 transition-colors"
                      >
                        <Image src="/images/instagram.png" alt="Instagram" width={20} height={20} />
                        <span>{host.social.instagram}</span>
                      </a>
                    )}
                    {host.social.letterboxd && (
                      <a
                        href={`https://letterboxd.com/${host.social.letterboxd.replace("@", "").split("/")[0]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-green-500 transition-colors"
                      >
                        <Image src="/images/letterboxd.png" alt="Letterboxd" width={20} height={20} />
                        <span>{host.social.letterboxd}</span>
                      </a>
                    )}
                    {host.social.tiktok && (
                      <a
                        href={`https://tiktok.com/${host.social.tiktok.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                      >
                        <Image src="/images/tiktok.png" alt="TikTok" width={20} height={20} />
                        <span>{host.social.tiktok}</span>
                      </a>
                    )}
                    {host.social.threads && (
                      <a
                        href={`https://threads.net/${host.social.threads.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-purple-500 transition-colors"
                      >
                        <Image src="/images/threads.png" alt="Threads" width={20} height={20} />
                        <span>{host.social.threads}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          O Cinetalk Podcast traz análises aprofundadas e debates descontraídos sobre cinema, séries e cultura pop.
          Nossos hosts compartilham opiniões sinceras sobre os últimos lançamentos e clássicos atemporais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://open.spotify.com/show/1g3w0T9ILa4jla69tJ7wXd"
            target="_blank"
            className="bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-3 px-6 rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5917 16.5917C16.2931 16.8903 15.8162 16.8903 15.5176 16.5917C14.3868 15.4609 12.7395 14.8579 11.0534 14.9869C9.36728 15.1158 7.82425 15.9576 6.87868 17.3033C6.58579 17.6826 6.05051 17.7532 5.67157 17.4598C5.29264 17.1669 5.22198 16.6316 5.51487 16.2527C6.73528 14.5751 8.69919 13.5143 10.8326 13.3494C12.966 13.1846 15.0826 13.9365 16.5917 15.4457C16.8903 15.7443 16.8903 16.2212 16.5917 16.5198V16.5917ZM17.906 13.7803C17.5254 14.1609 16.9125 14.1609 16.5319 13.7803C15.1182 12.3665 13.1548 11.6139 11.1214 11.7745C9.08807 11.9351 7.25376 12.9935 6.09099 14.6777C5.71206 15.2099 4.99875 15.3099 4.46655 14.931C3.93434 14.5521 3.83401 13.8388 4.21294 13.3066C5.69198 11.1732 8.01183 9.83949 10.5786 9.63602C13.1453 9.43256 15.6734 10.3879 17.5254 12.2399C17.906 12.6205 17.906 13.2334 17.5254 13.614L17.906 13.7803ZM19.3197 10.7685C18.8391 11.2491 18.0551 11.2491 17.5745 10.7685C15.8162 9.01015 13.4257 8.08807 10.9683 8.28807C8.51081 8.48807 6.27411 9.78782 4.82173 11.8505C4.36599 12.4534 3.51487 12.5827 2.91193 12.127C2.30899 11.6712 2.17965 10.8201 2.63538 10.2172C4.44919 7.61421 7.27716 5.96599 10.3879 5.70965C13.4986 5.45332 16.5612 6.61599 18.8685 8.92335C19.3491 9.40396 19.3491 10.188 18.8685 10.6686L19.3197 10.7685Z" />
            </svg>
            Spotify
          </Link>
          <Link
            href="https://www.youtube.com/@Cinetalkpodcast1"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Youtube size={24} />
            YouTube
          </Link>
        </div>
      </div>
    </section>
  )
}
