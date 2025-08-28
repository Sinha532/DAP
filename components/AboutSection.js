export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-heritage-gold font-medium text-lg mb-4">Our Heritage</h3>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown">
            Discover the{" "}
            <span className="text-heritage-gold">Flavors</span>{" "}
            of <span className="text-heritage-gold">Putharekulu</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-village-brown text-lg leading-relaxed">
                మా గోదావరి పల్లెటూరి రుచి, మీ కోసం!
              </p>

              <p className="text-village-brown text-lg leading-relaxed">
                ఇదేనండి అసలైన పూతరేకులు, మా చేతులతో ప్రేమగా చుట్టినవి.
                పాతకాలం పద్ధతిలో, అమ్మమ్మలు నేర్పినట్టుగా చేస్తాం.
                పల్చటి పొరల్లో బెల్లం, నెయ్యి వేసి అందిస్తాం.
                ఈ పేపర్ స్వీట్ నోట్లో వేస్తే కరిగిపోద్ది.
                మా ఆంధ్రా సంప్రదాయాన్ని ప్రపంచానికి పంచుతున్నాం, ఒక్కసారి రుచి చూడండి!
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-village-brown font-medium">with💗</div>
                  <div className="text-4xl font-bold text-heritage-gold font-playfair">Love</div>
                </div>
                <div className="text-center">
                  <div className="text-village-brown font-medium">with😋</div>
                  <div className="text-4xl font-bold text-heritage-gold font-playfair">Taste</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Container - Fixed to match text height */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-heritage-gold rounded-2xl opacity-20"></div>

              {/* Main image container - matches content height */}
              <div className="relative bg-white rounded-2xl village-shadow overflow-hidden h-96">
                <img
                  src="/about.png"
                  alt="Traditional Putharekulu preparation"
                  className="w-full h-full object-cover"
                />

                {/* Overlay with traditional pattern */}
                <div className="absolute inset-0 bg-village-pattern opacity-10"></div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-brown/80 to-transparent p-6">
                  <h4 className="text-white font-playfair text-xl font-semibold mb-2">
                    Handcrafted Excellence
                  </h4>
                  <p className="text-cream text-sm">
                    Traditional methods preserved through generations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
