import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { EpisodeHighlight } from "@/components/episode-highlight"
import { EpisodesCarousel } from "@/components/episodes-carousel"
import { VideoSection } from "@/components/video-section"
import { BlogSection } from "@/components/blog-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <EpisodesCarousel />
      <VideoSection />
      <BlogSection />
      <EpisodeHighlight /> {/* Movido para ficar entre o blog e o about */}
      <AboutSection />
      <Footer />
    </main>
  )
}
