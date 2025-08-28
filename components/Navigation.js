import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed w-full z-50 border-b transition-all duration-300 ${
        isScrolled ? 'bg-cream/95 backdrop-blur-sm' : 'bg-cream/95 backdrop-blur-sm'
      }`} style={{ borderColor: 'rgba(212, 165, 116, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-playfair font-bold text-deep-brown">
                <i className="fas fa-lotus text-heritage-gold mr-2"></i>
                <span className="text-heritage-gold">Delicious Aathreyapuram </span>
                <span className="text-deep-brown">Putharekulu</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-deep-brown hover:text-heritage-gold transition-colors duration-200 font-medium"
                  data-testid="nav-home"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-deep-brown hover:text-heritage-gold transition-colors duration-200 font-medium"
                  data-testid="nav-about"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-deep-brown hover:text-heritage-gold transition-colors duration-200 font-medium"
                  data-testid="nav-products"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-deep-brown hover:text-heritage-gold transition-colors duration-200 font-medium"
                  data-testid="nav-gallery"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-deep-brown hover:text-heritage-gold transition-colors duration-200 font-medium"
                  data-testid="nav-contact"
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button 
                type="button" 
                className="text-deep-brown hover:text-heritage-gold"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-deep-brown/50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed top-16 right-0 h-full w-64 bg-cream shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-deep-brown hover:text-heritage-gold transition-colors duration-200 font-medium text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-deep-brown hover:text-heritage-gold transition-colors duration-200 font-medium text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-deep-brown hover:text-heritage-gold transition-colors duration-200 font-medium text-left"
                data-testid="mobile-nav-products"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-deep-brown hover:text-heritage-gold transition-colors duration-200 font-medium text-left"
                data-testid="mobile-nav-gallery"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-deep-brown hover:text-heritage-gold transition-colors duration-200 font-medium text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}