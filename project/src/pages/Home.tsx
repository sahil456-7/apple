import React from 'react';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
  return (
    <>
      <Hero />
      
      <ProductSection
        title="MacBook Pro"
        subtitle="Mind-blowing. Head-turning."
        description="Experience the ultimate performance with the new MacBook Pro featuring the M3 chip. Designed for professionals who demand the best in speed, efficiency, and stunning display quality."
        image="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200"
        bgColor="bg-white"
        textColor="text-black"
      />
      
      <ProductSection
        title="iPad Air"
        subtitle="Light. Bright. Full of might."
        description="The new iPad Air is more versatile than ever. With the powerful M1 chip, it delivers incredible performance for work and play, all in a gorgeously thin and light design."
        image="https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1200"
        bgColor="bg-gray-900"
        textColor="text-white"
        reverse={true}
      />
      
      <ProductGrid />
      
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">
            Apple Vision Pro
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 font-light max-w-3xl mx-auto">
            Welcome to the era of spatial computing. Apple Vision Pro seamlessly blends digital content with the physical world.
          </p>
          
          <div className="relative mb-12">
            <img
              src="https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Apple Vision Pro"
              className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Learn more
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Book a demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;