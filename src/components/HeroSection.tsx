import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  cta_text: string | null;
  cta_link: string | null;
  background_image: string;
  display_order: number;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch hero sections from your Supabase backend
    // For now, using static data matching the schema
    const staticSlides: HeroSlide[] = [
      {
        id: "1",
        title: "Discover Luxury Fashion",
        subtitle: "Curated Excellence",
        description: "Explore our handpicked selection of premium brands and timeless designs",
        cta_text: "Shop Now",
        cta_link: "/products",
        background_image: "https://images.unsplash.com/photo-1558769132-cb1aea3c0c78?w=1920",
        display_order: 1,
      },
      {
        id: "2",
        title: "New Season Collection",
        subtitle: "Spring/Summer 2025",
        description: "Experience the latest trends in haute couture and contemporary fashion",
        cta_text: "Explore Collection",
        cta_link: "/products",
        background_image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920",
        display_order: 2,
      },
    ];
    
    setSlides(staticSlides);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (isLoading || slides.length === 0) {
    return (
      <div className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 animate-pulse" />
    );
  }

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${currentSlideData.background_image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white max-w-2xl">
          {currentSlideData.subtitle && (
            <p className="text-sm uppercase tracking-wider mb-2 text-gray-200">
              {currentSlideData.subtitle}
            </p>
          )}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {currentSlideData.title}
          </h1>
          {currentSlideData.description && (
            <p className="text-xl mb-8 text-gray-200">
              {currentSlideData.description}
            </p>
          )}
          {currentSlideData.cta_text && currentSlideData.cta_link && (
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
              onClick={() => navigate(currentSlideData.cta_link!)}
            >
              {currentSlideData.cta_text}
            </Button>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
