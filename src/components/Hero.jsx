import HeroImage from "../assets/hero.png";
import Hero1 from "../assets/hero-img1.png";
import { useState, useEffect } from "react";

function Hero() {
  const slides = [
    {
      id: 1,
      image: Hero1,
      title: "The Hidden Power of the SMU",
      subtitle: "Source Measure Units Can Automate Dozens of Tests",
      button: "Find Out How",
    },
    {
      id: 2,
      image: HeroImage,
      title: "The Hidden Power of the SMU",
      subtitle: "Source Measure Units Can Automate Dozens of Tests",
      button: "Find Out How",
    },
    {
      id: 3,
      image: Hero1,
      title: "The Hidden Power of the SMU",
      subtitle: "Source Measure Units Can Automate Dozens of Tests",
      button: "Find Out How",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto chuyển slide sau 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="w-full h-[600px] relative overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center h-full px-12 text-white max-w-xl">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg mb-6">{slide.subtitle}</p>
              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 text-white font-semibold">
                {slide.button}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-red-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
