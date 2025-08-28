export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-deep-brown text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <i className="fas fa-lotus text-heritage-gold text-2xl mr-3"></i>
              <div className="text-2xl font-playfair font-bold">
                <span className="text-cream/80">Delicious Aathreyapuram </span>
                <span className="text-heritage-gold">Putharekulu</span>
              </div>
            </div>
            <p className="text-cream/80 mb-6 leading-relaxed" data-testid="text-footer-description">
              మా ప్రేమ, తరతరాల నైపుణ్యంతో, సంప్రదాయ రుచుల వారసత్వాన్ని అందిస్తున్నాము. మీరు ఆస్వాదించే ప్రతి ముద్ద, మన సంస్కృతికి ఒక వేడుక.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-heritage-gold rounded-full flex items-center justify-center hover:bg-golden transition-colors"
                data-testid="link-social-facebook"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <button
                type="button"
                onClick={() => window.open('https://www.instagram.com/atreyapuram.putharekulu_/#', '_blank', 'noopener,noreferrer')}
                className="w-10 h-10 bg-heritage-gold rounded-full flex items-center justify-center hover:bg-golden transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </button>
              <button
                type="button"
                onClick={() => window.open('https://www.youtube.com/@DeliciousatreyapuramPutharekul', '_blank', 'noopener,noreferrer')}
                className="w-10 h-10 bg-heritage-gold rounded-full flex items-center justify-center hover:bg-golden transition-colors"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </button>

              <button
                type="button"
                onClick={() => window.open('https://wa.me/919951735997', '_blank', 'noopener,noreferrer')}
                className="w-10 h-10 bg-heritage-gold rounded-full flex items-center justify-center hover:bg-golden transition-colors"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-cream/80 hover:text-heritage-gold transition-colors text-left"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-cream/80 hover:text-heritage-gold transition-colors text-left"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-cream/80 hover:text-heritage-gold transition-colors text-left"
                  data-testid="footer-link-products"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-cream/80 hover:text-heritage-gold transition-colors text-left"
                  data-testid="footer-link-gallery"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-cream/80 hover:text-heritage-gold transition-colors text-left"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-cream/80">
              <li className="flex items-center">
                <i className="fas fa-phone mr-3 text-heritage-gold"></i>
                <span data-testid="text-footer-phone">+91 9951735997</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-heritage-gold"></i>
                <span data-testid="text-footer-email">dayanidhibujj@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mr-3 text-heritage-gold mt-1"></i>
                <span data-testid="text-footer-address">
                  Ravulapalem, Dr.B.R.Ambedkar Konaseema District<br />Andhra Pradesh, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream/60 text-sm" data-testid="text-copyright">
              © 2024 Putharekulu. All rights reserved. Made with ❤️ for preserving tradition.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-cream/60 hover:text-heritage-gold text-sm transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-cream/60 hover:text-heritage-gold text-sm transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-cream/60 hover:text-heritage-gold text-sm transition-colors"
                data-testid="link-shipping"
              >
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}