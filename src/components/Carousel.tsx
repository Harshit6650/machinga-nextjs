"use client";

import Link from 'next/link';
import Image from 'next/image';

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

  const scrollByAmount = (amount: number) => {
    const el = document.getElementById('work-carousel');
    if (el) el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="cs-carousel-section" style={{ padding: '2rem 0 8rem', backgroundColor: '#ffffff', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'relative', width: '100%' }}>
        <button className="carousel-nav-btn carousel-prev" onClick={() => scrollByAmount(-400)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div id="work-carousel" className="carousel-track" style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '0 max(2rem, calc(50vw - 570px)) 2rem', scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}>
          {displayProjects.map((p) => (
            <div key={p.id} className="carousel-item">
              <img src={p.img} alt={p.title} />
              <div className="carousel-text-overlay">
                <h3 className="carousel-glass-text">{p.title}</h3>
                <p className="carousel-subtext">{p.subtext}</p>
              </div>
              <Link href={`/${p.id}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3 }}></Link>
            </div>
          ))}
        </div>

        <button className="carousel-nav-btn carousel-next" onClick={() => scrollByAmount(400)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </section>
  );
}
