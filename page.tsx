'use client';

import Hero from "@/sections/Hero";
import Grabdata from "@/sections/grabdata"
export default function Home() {
  return (
    <div className="scroll-smooth">
   

      <section id="Hero">
        <Hero />
        <Grabdata/>
      </section>

    
    </div>
  );
}
