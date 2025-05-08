import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="Cinetalk Podcast" width={50} height={50} />
              <span className="text-2xl font-anton tracking-wider">CINETALK</span>
            </Link>
            <p className="text-gray-400 text-center md:text-left">Seu Podcast Favorito Sobre Cinema.</p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <nav className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Início</Link>
              <Link href="/episodios" className="text-gray-400 hover:text-white transition-colors">Episódios</Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</Link>
              <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</Link>
            </nav>
          </div>

          {/* Social media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
            <div className="flex gap-6">
              <Link href="https://www.instagram.com/cinetalkpodcast1/" className="social-icon">
                <Instagram size={24} />
              </Link>
              <Link href="https://www.youtube.com/@Cinetalkpodcast1" className="social-icon">
                <Youtube size={24} />
              </Link>
              <Link href="https://open.spotify.com/show/1g3w0T9ILa4jla69tJ7wXd?si=6f6a49a2d2344a40" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5917 16.5917C16.2931 16.8903 15.8162 16.8903 15.5176 16.5917C14.3868 15.4609 12.7395 14.8579 11.0534 14.9869C9.36728 15.1158 7.82425 15.9576 6.87868 17.3033C6.58579 17.6826 6.05051 17.7532 5.67157 17.4598C5.29264 17.1669 5.22198 16.6316 5.51487 16.2527C6.73528 14.5751 8.69919 13.5143 10.8326 13.3494C12.966 13.1846 15.0826 13.9365 16.5917 15.4457C16.8903 15.7443 16.8903 16.2212 16.5917 16.5198V16.5917Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
