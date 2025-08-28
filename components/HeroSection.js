export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-background min-h-screen flex items-center relative bg-village-pattern">
      <div
        className="absolute inset-0 bg-gradient-to-r from-soft-blue/30 to-sage/20"
        style={{
          backgroundImage: "url('/bg-image.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="hero-content container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="font-mono text-2xl md:text-6xl lg:text-7xl font-bold text-village-brown leading-tight mb-6">
              గోదారోళ్ల మర్యాదల{" "}
              <span className="text-heritage-gold bg-gradient-to-r from-heritage-gold to-golden bg-clip-text text-transparent">
                మధూర్యమే
              </span>
              <br />
              <span className="text-heritage-gold bg-gradient-to-r from-heritage-gold to-golden bg-clip-text text-transparent">
                మా ఈ పూతరేకులు
              </span>
            </h2>

            {/* <p className="text-village-brown text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Experience the authentic flavors of traditional Indian sweets, 
              handcrafted with love and generations of heritage. Each bite 
              tells a story of our rich cultural legacy.
            </p> */}
            <br />
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.open('https://wa.me/919951735997', '_blank', 'noopener,noreferrer')}
                className="btn-gradient-primary text-white px-8 py-4 rounded-lg font-medium village-shadow transition-all duration-300 transform hover:scale-105"
                data-testid="button-order-now"
              >
                🛒 Order Now
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="border-2 border-deep-brown text-deep-brown px-8 py-4 rounded-lg font-medium hover:bg-deep-brown hover:text-white transition-all duration-300"
                data-testid="button-learn-story"
              >
                ▶️ Learn Our Story
              </button>
            </div>
          </div>

          <div className="animate-fade-in lg:flex justify-center hidden">
            <div className="relative">

              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-heritage-gold to-saffron opacity-20 absolute -top-8 -right-8"></div>
              <div className="relative z-10 animate-float">
                {/* Image placeholder or your actual image */}

                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-cream to-warm-beige flex items-center justify-center village-shadow">
                  <img
                    src="/owner.jpg"
                    alt="Traditional Putharekulu sweet on decorative plate"
                    className="rounded-3xl village-shadow w-full max-w-lg mx-auto"
                    data-testid="img-hero-sweet"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
