import Head from 'next/head'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProductsSection from '../components/ProductsSection'
import GallerySection from '../components/GallerySection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-warm-beige font-inter">
      <Head>
        <title>Delicious Aathreyapuram Putharekulu - Traditional Indian Sweet Heritage | Authentic Village Sweets</title>
        <meta name="description" content="Experience authentic Putharekulu, a traditional Indian sweet from Andhra Pradesh. Handcrafted with heritage recipes, premium ingredients, and generations of expertise. Order fresh traditional sweets online." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Delicious Aathreyapuram Putharekulu - Traditional Indian Sweet Heritage" />
        <meta property="og:description" content="Authentic traditional Indian sweets handcrafted with heritage recipes and premium ingredients. Experience the taste of generations." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}