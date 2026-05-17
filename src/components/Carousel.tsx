"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const isProd = process.env.NODE_ENV === 'production';
const getAssetPath = (path: string) => isProd ? `/machinga-nextjs${path}` : path;

const projects = [
  { id: 'appreciate', title: 'Appreciate', subtext: 'How a fintech compounds interest', img: getAssetPath('/assets/APPRECIATE1.png') },
  { id: 'aava', title: 'Aava', subtext: 'How two words made a 20-year-old water brand uncopyable', img: getAssetPath('/assets/AAVA3.png') },
  { id: 'contraband', title: 'Contraband', subtext: 'How a stain launched a luxury fragrance to 88 million people', img: getAssetPath('/assets/CONTRABAND2.png') },
  { id: 'hamleys', title: 'Hamleys', subtext: "How a 250-year-old toy store helped Gen Z defuse a time bomb on Valentine's Day", img: getAssetPath('/assets/HAMLEYS4.png') },
];

export default function Carousel({ currentProject }: { currentProject: string }) {
  const displayProjects = projects.filter(p => p.id !== currentProject);
  const duplicatedProjects = [...displayProjects, ...displayProjects, ...displayProjects]; // Duplicate for seamless infinite scroll
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    let animationId: number;
    let isPaused = false;
    
    const animate = () => {
      if (!isPaused && track) {
        track.scrollLeft += 1; // Adjust speed here
        // If scrolled past a third (since we tripled it), reset
        if (track.scrollLeft >= track.scrollWidth / 3) {
          track.scrollLeft -= track.scrollWidth / 3;
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    const handleMouseEnter = () => isPaused = true;
    const handleMouseLeave = () => isPaused = false;
    
    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);



  return (
    <section className="cs-carousel-section" style={{ padding: '2rem 0 8rem', backgroundColor: '#ffffff', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'relative', width: '100%' }}>


        <div id="work-carousel" ref={trackRef} className="carousel-track" style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '0 max(2rem, calc(50vw - 570px)) 2rem', scrollbarWidth: 'none' }}>
          {duplicatedProjects.map((p, index) => (
            <div key={`${p.id}-${index}`} className="carousel-item" style={{ flexShrink: 0 }}>
              <img src={p.img} alt={p.title} />
              <div className="carousel-text-overlay">
                <h3 className="carousel-glass-text">{p.title}</h3>
                <p className="carousel-subtext">{p.subtext}</p>
              </div>
              <Link href={`/${p.id}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3 }}></Link>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
