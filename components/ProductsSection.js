const products = [
  {
    id: 1,
    name: "Bellam Badham Dryfruit Putharekulu",
    description: "బెల్లం, బాదం, డ్రై ఫ్రూట్స్... మా పూతరేకుల్లో సంప్రదాయం, ఆరోగ్యం.",
    price: "₹180/pack",
    image: "/putarekulu.jpg"
  },
  {
    id: 2,
    name: "Dates Pista Dryfruit Putharekulu ",
    description: "ఖర్జూరం, పిస్తా, డ్రై ఫ్రూట్స్... ప్రకృతి అందించిన తియ్యదనంతో మా పూతరేకులు.",
    price: "₹350/pack",
    image: "/dates.png"
  },
  {
    id: 3,
    name: "Horlicks Pista Dryfruit Putharekulu ",
    description: "హార్లిక్స్, పిస్తా, డ్రై ఫ్రూట్స్... శక్తినిచ్చే రుచి, మా పూతరేకుల్లో ప్రత్యేకం.",
    price: "₹300/pack",
    image: "/horlicks.png"
  }
]

export default function ProductsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="products" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-heritage-gold/20 rounded-full text-deep-brown font-medium mb-6">
            <i className="fas fa-cookie-bite text-heritage-gold mr-2"></i>
            Our Varieties
          </div>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-deep-brown mb-6">
            Discover the{" "}
            <span className="text-heritage-gold">Delicacy</span>
          </h2>
          <p className="text-xl text-village-brown max-w-2xl mx-auto" data-testid="text-products-description">
            రుచి, సంప్రదాయాల కథలు చెప్పే, మా చేతితో చేసిన విభిన్న పూతరేకుల ప్రపంచంలోకి అడుగుపెట్టండి.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-cream rounded-2xl p-6 village-shadow hover:transform hover:scale-105 transition-all duration-300"
              data-testid={`card-product-${product.id}`}
            >
              <img 
                src={product.image}
                alt={`${product.name} Putharekulu`}
                className="rounded-xl w-full h-48 object-cover mb-4"
                data-testid={`img-product-${product.id}`}
              />
              <h3 className="text-xl font-playfair font-semibold text-deep-brown mb-2" data-testid={`text-product-name-${product.id}`}>
                {product.name}
              </h3>
              <p className="text-village-brown mb-4" data-testid={`text-product-description-${product.id}`}>
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-heritage-gold" data-testid={`text-product-price-${product.id}`}>
                  {product.price}
                </span>
                <button 
                  onClick={scrollToContact}
                  className="bg-heritage-gold text-white px-4 py-2 rounded-lg hover:bg-golden transition-colors"
                  data-testid={`button-add-cart-${product.id}`}
                >
                  <i className="fas fa-cart-plus mr-1"></i>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}