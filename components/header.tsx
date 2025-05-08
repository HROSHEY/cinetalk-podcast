import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="bg-black sticky top-0 z-50 border-b border-gray-800">
      <div className="container-custom py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Cinetalk Podcast" width={40} height={40} />
          <span className="text-2xl font-anton tracking-wider">CINETALK PODCAST</span>
        </Link>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-gray-800">
              <nav className="flex flex-col gap-6 mt-10">
                <Link href="/" className="text-lg font-bold hover:text-red-600 transition-colors">
                  Início
                </Link>
                <Link href="/episodios" className="text-lg font-bold hover:text-red-600 transition-colors">
                  Episódios
                </Link>
                <Link href="/blog" className="text-lg font-bold hover:text-red-600 transition-colors">
                  Blog
                </Link>
                <Link href="/sobre" className="text-lg font-bold hover:text-red-600 transition-colors">
                  Sobre
                </Link>
                <Link href="/contato" className="text-lg font-bold hover:text-red-600 transition-colors">
                  Contato
                </Link>
              </nav>
              <div className="flex gap-4 mt-8">
                <Link href="https://www.instagram.com/cinetalkpodcast1/" className="social-icon">
                  <Instagram size={24} />
                </Link>
                <Link href="https://www.youtube.com/@Cinetalkpodcast1" className="social-icon">
                  <Youtube size={24} />
                </Link>
                <Link
                  href="https://open.spotify.com/show/1g3w0T9ILa4jla69tJ7wXd?si=6f6a49a2d2344a40"
                  className="social-icon"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5917 16.5917C16.2931 16.8903 15.8162 16.8903 15.5176 16.5917C14.3868 15.4609 12.7395 14.8579 11.0534 14.9869C9.36728 15.1158 7.82425 15.9576 6.87868 17.3033C6.58579 17.6826 6.05051 17.7532 5.67157 17.4598C5.29264 17.1669 5.22198 16.6316 5.51487 16.2527C6.73528 14.5751 8.69919 13.5143 10.8326 13.3494C12.966 13.1846 15.0826 13.9365 16.5917 15.4457C16.8903 15.7443 16.8903 16.2212 16.5917 16.5198V16.5917ZM17.906 13.7803C17.5254 14.1609 16.9125 14.1609 16.5319 13.7803C15.1182 12.3665 13.1548 11.6139 11.1214 11.7745C9.08807 11.9351 7.25376 12.9935 6.09099 14.6777C5.71206 15.2099 4.99875 15.3099 4.46655 14.931C3.93434 14.5521 3.83401 13.8388 4.21294 13.3066C5.69198 11.1732 8.01183 9.83949 10.5786 9.63602C13.1453 9.43256 15.6734 10.3879 17.5254 12.2399C17.906 12.6205 17.906 13.2334 17.5254 13.614L17.906 13.7803ZM19.3197 10.7685C18.8391 11.2491 18.0551 11.2491 17.5745 10.7685C15.8162 9.01015 13.4257 8.08807 10.9683 8.28807C8.51081 8.48807 6.27411 9.78782 4.82173 11.8505C4.36599 12.4534 3.51487 12.5827 2.91193 12.127C2.30899 11.6712 2.17965 10.8201 2.63538 10.2172C4.44919 7.61421 7.27716 5.96599 10.3879 5.70965C13.4986 5.45332 16.5612 6.61599 18.8685 8.92335C19.3491 9.40396 19.3491 10.188 18.8685 10.6686L19.3197 10.7685Z" />
                  </svg>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-bold hover:text-red-600 transition-colors">
            Início
          </Link>
          <Link href="/episodios" className="font-bold hover:text-red-600 transition-colors">
            Episódios
          </Link>
          <Link href="/blog" className="font-bold hover:text-red-600 transition-colors">
            Blog
          </Link>
          <Link href="/sobre" className="font-bold hover:text-red-600 transition-colors">
            Sobre
          </Link>
          <Link href="/contato" className="font-bold hover:text-red-600 transition-colors">
            Contato
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="https://www.instagram.com/cinetalkpodcast1/" className="social-icon">
            <Instagram size={20} />
          </Link>
          <Link href="https://www.youtube.com/@Cinetalkpodcast1" className="social-icon">
            <Youtube size={20} />
          </Link>
          <Link href="https://open.spotify.com/show/1g3w0T9ILa4jla69tJ7wXd?si=6f6a49a2d2344a40" className="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5917 16.5917C16.2931 16.8903 15.8162 16.8903 15.5176 16.5917C14.3868 15.4609 12.7395 14.8579 11.0534 14.9869C9.36728 15.1158 7.82425 15.9576 6.87868 17.3033C6.58579 17.6826 6.05051 17.7532 5.67157 17.4598C5.29264 17.1669 5.22198 16.6316 5.51487 16.2527C6.73528 14.5751 8.69919 13.5143 10.8326 13.3494C12.966 13.1846 15.0826 13.9365 16.5917 15.4457C16.8903 15.7443 16.8903 16.2212 16.5917 16.5198V16.5917ZM17.906 13.7803C17.5254 14.1609 16.9125 14.1609 16.5319 13.7803C15.1182 12.3665 13.1548 11.6139 11.1214 11.7745C9.08807 11.9351 7.25376 12.9935 6.09099 14.6777C5.71206 15.2099 4.99875 15.3099 4.46655 14.931C3.93434 14.5521 3.83401 13.8388 4.21294 13.3066C5.69198 11.1732 8.01183 9.83949 10.5786 9.63602C13.1453 9.43256 15.6734 10.3879 17.5254 12.2399C17.906 12.6205 17.906 13.2334 17.5254 13.614L17.906 13.7803ZM19.3197 10.7685C18.8391 11.2491 18.0551 11.2491 17.5745 10.7685C15.8162 9.01015 13.4257 8.08807 10.9683 8.28807C8.51081 8.48807 6.27411 9.78782 4.82173 11.8505C4.36599 12.4534 3.51487 12.5827 2.91193 12.127C2.30899 11.6712 2.17965 10.8201 2.63538 10.2172C4.44919 7.61421 7.27716 5.96599 10.3879 5.70965C13.4986 5.45332 16.5612 6.61599 18.8685 8.92335C19.3491 9.40396 19.3491 10.188 18.8685 10.6686L19.3197 10.7685Z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}
