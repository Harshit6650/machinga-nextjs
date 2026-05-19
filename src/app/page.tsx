"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeClientLogic from '@/components/HomeClientLogic';

export default function Home() {
  // Add state/refs for dropdowns and animations
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(prev => prev === id ? null : id);
  };
  const pathname = usePathname();

  useEffect(() => {
    // Force all videos to play. Next.js router cache sometimes suspends videos on navigation.
    const videos = document.querySelectorAll('video');
    videos.forEach((vid) => {
      // Re-trigger play safely
      vid.play().catch(err => console.log('Autoplay prevented:', err));
    });
  }, [pathname]);

  return (
    <main>
      {/* Inject the logic component without wrapping */}
      <HomeClientLogic />

      <div id="loader-screen" className="loader-screen">
        <video className="loader-video" src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/PencilBomb_GreenPulse_Loop_Landscape_TrueWhite_4K.mp4`} preload="auto"
            autoPlay loop muted playsInline disablePictureInPicture></video>
    </div>



    {/*  ═══════════════════════════════════════
         CANVAS SCROLL SECTION
         ═══════════════════════════════════════  */}
    <section id="video-section" className="video-section">

        {/*  Image sequence canvas  */}
        <canvas id="hero-canvas"></canvas>

        {/*  Wind overlay canvas  */}
        <canvas id="wind-canvas"></canvas>

        {/*  Progress rail (right) — dots are clickable  */}
        <div id="progress-rail"></div>

        {/*  Green pulse dots (left — shown during loop/pause)  */}
        <div id="dwell-indicator">
            <div className="dwell-dot"></div>
            <div className="dwell-dot"></div>
            <div className="dwell-dot"></div>
        </div>

        {/*  Scroll progress bar (bottom)  */}
        <div id="continue-wrap">
            <div id="continue-inner">
                <span id="continue-label">Scroll to continue</span>
                <div id="continue-track">
                    <div id="continue-fill"></div>
                </div>
                <span id="continue-arrow">↓</span>
            </div>
        </div>

        {/*  Tracking elements required for animation script (Hidden)  */}
        <div id="chapter-label" style={{ display: 'none' }}></div>
        <div id="transition-label" style={{ display: 'none' }}></div>
        <div id="progress-bar-wrap" style={{ display: 'none' }}>
            <div id="progress-bar-fill"></div>
        </div>

    </section>


    {/*  Work Section  */}
    <section className="fs-cards-section" id="work">
        <div className="fs-card">
            <video className="fs-card-bg" src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/Appreciate.MP4`} loop muted playsInline preload="none"></video>
            <div className="fs-card-content">
                <h2 className="fs-card-title">APPRECIATE</h2>
                <p className="fs-card-sub">How a fintech compounds interest</p>
                <p className="fs-card-text">0 &rarr; 124K followers in 18 months</p>
                <div className="fs-card-tags">
                    <span className="fs-tag">Content Engine</span>
                    <span className="fs-tag">Always - On</span>
                    <span className="fs-tag">Fintech</span>
                </div>
            </div>
            <div className="scroll-down-indicator">
                <button 
                    onClick={(e) => toggleDropdown('details-1', e)} 
                    className="toggle-details"
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        fontFamily: 'inherit'
                    }}
                >
                    <span>Details</span>
                    <span className="arrow">&darr;</span>
                </button>
            </div>
        </div>

        <div id="details-1" className={`card-details-dropdown ${activeDropdown === 'details-1' ? 'open' : ''}`}>
            <div className="card-details-container">
                <div className="details-left-side">
                    <h4 className="details-section-title">The Insight</h4>
                    <p className="details-section-text">Finance content doesn't have to be boring. Everyone was educating. Nobody was entertaining. The insight: make finance feel like culture, not curriculum.</p>
                    <h4 className="details-section-title">The Work</h4>
                    <p className="details-section-text">We built a content engine from scratch. Multi-format, high-frequency, relentlessly consistent. An animal podcast explaining IPOs. Investigative deep-dives. Creator collabs before creators blew up. 6–8 pieces per week, every week, for 18 months.</p>
                    <Link href="/appreciate" className="details-btn">View Full Case Study</Link>
                </div>
                <div className="details-right-side">
                    <div className="stats-grid">
                        <div className="stat-box">
                            <div className="stat-number">124K+</div>
                            <div className="stat-label">Followers From Zero</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">68%</div>
                            <div className="stat-label">Lower CPL</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">1M+</div>
                            <div className="stat-label">Views Twice Monthly</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">1.5L+</div>
                            <div className="stat-label">App Installs</div>
                        </div>
                    </div>
                    <h4 className="details-section-title">Engagement Model</h4>
                    <p className="details-section-text">Content Engine — Full-service retainer, embedded team, ongoing production</p>
                </div>
            </div>
        </div>

        <div className="fs-card">
            <video className="fs-card-bg" src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/Contraband.MP4`} loop muted playsInline preload="none"></video>
            <div className="fs-card-content">
                <h2 className="fs-card-title">CONTRABAND</h2>
                <p className="fs-card-sub">How a stain launched a luxury fragrance to 88 million people</p>
                <p className="fs-card-text">88M views &middot; 2 weeks &middot; No celebrity</p>
                <div className="fs-card-tags">
                    <span className="fs-tag">Campaign</span>
                    <span className="fs-tag">Film Production</span>
                    <span className="fs-tag">Luxury</span>
                </div>
            </div>
            <div className="scroll-down-indicator">
                <button 
                    onClick={(e) => toggleDropdown('details-2', e)} 
                    className="toggle-details"
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        fontFamily: 'inherit'
                    }}
                >
                    <span>Details</span>
                    <span className="arrow">&darr;</span>
                </button>
            </div>
        </div>

        <div id="details-2" className={`card-details-dropdown ${activeDropdown === 'details-2' ? 'open' : ''}`}>
            <div className="card-details-container">
                <div className="details-left-side">
                    <h4 className="details-section-title">The Insight</h4>
                    <p className="details-section-text">You can&apos;t show a smell through a screen. So don&apos;t show the evening show what it left behind. A stain is sillage made visible. Each ruined object is a fragrance note. The mess is the recipe.</p>
                    <h4 className="details-section-title">The Work</h4>
                    <p className="details-section-text">Two films. Let It Stain: stained white bedsheets, five stacked curiosity loops, product at 17 seconds. &quot;LET IT STAIN&quot; description, emotional territory, and philosophy in three words. The snackable cut: a luxury bottle dropped into a teapot. Five seconds. 26.4M views on its own.</p>
                    <Link href="/contraband" className="details-btn">View Full Case Study</Link>
                </div>
                <div className="details-right-side">
                    <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <div className="stat-box">
                            <div className="stat-number">88M+</div>
                            <div className="stat-label">Combined views</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">1.1M</div>
                            <div className="stat-label">Likes on hero film</div>
                        </div>
                    </div>
                    <h4 className="details-section-title">Engagement Model</h4>
                    <p className="details-section-text">Campaign Concept, Script, Production</p>
                </div>
            </div>
        </div>

        <div className="fs-card">
            <video className="fs-card-bg" src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/aava.mp4`} loop muted playsInline preload="none"></video>
            <div className="fs-card-content">
                <h2 className="fs-card-title">AAVA</h2>
                <p className="fs-card-sub">How two words made a 20-year-old water brand uncopyable</p>
                <p className="fs-card-text">6.5M views &middot; Born Alkaline</p>
                <div className="fs-card-tags">
                    <span className="fs-tag">Brand Strategy</span>
                    <span className="fs-tag">Campaign</span>
                    <span className="fs-tag">FMGC</span>
                </div>
            </div>
            <div className="scroll-down-indicator">
                <button 
                    onClick={(e) => toggleDropdown('details-3', e)} 
                    className="toggle-details"
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        fontFamily: 'inherit'
                    }}
                >
                    <span>Details</span>
                    <span className="arrow">&darr;</span>
                </button>
            </div>
        </div>

        <div id="details-3" className={`card-details-dropdown ${activeDropdown === 'details-3' ? 'open' : ''}`}>
            <div className="card-details-container">
                <div className="details-left-side">
                    <h4 className="details-section-title">The Insight</h4>
                    <p className="details-section-text">Every brand claimed &quot;alkaline&quot; — including those stripping water with RO and re ionising it. The word was diluted into meaninglessness. Aava&apos;s water has been naturally alkaline for 20 years. The goal: a line that&apos;s not just true, but structurally uncopyable.</p>
                    <h4 className="details-section-title">The Work</h4>
                    <p className="details-section-text">Three films, three registers. An earnest brand launch with deliberate understatement. A deadpan anti-ad where every RTB lands as a negative that&apos;s actually a positive. A viral comedy where a fake brand called Generic enacts exactly what competitors do — nothing exaggerated. Reposted by Zepto and Instamart.</p>
                    <Link href="/aava" className="details-btn">View Full Case Study</Link>
                </div>
                <div className="details-right-side">
                    <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <div className="stat-box">
                            <div className="stat-number">6.5M</div>
                            <div className="stat-label">Views across films</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">0</div>
                            <div className="stat-label">Competitors copied the line</div>
                        </div>
                    </div>
                    <h4 className="details-section-title">Engagement Model</h4>
                    <p className="details-section-text">Brand Strategy, Positioning, Campaign Concept, Film Production</p>
                </div>
            </div>
        </div>

        <div className="fs-card">
            <video className="fs-card-bg" src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/hamleys.mp4`} loop muted playsInline preload="none"></video>
            <div className="fs-card-content">
                <h2 className="fs-card-title">HAMLEYS</h2>
                <p className="fs-card-sub">How a 250-year-old toy store helped Gen Z defuse a time bomb on Valentine's Day
                </p>
                <p className="fs-card-text">2.5M organic views</p>
                <div className="fs-card-tags">
                    <span className="fs-tag">Campaign Strategy</span>
                    <span className="fs-tag">On-Ground Activation</span>
                    <span className="fs-tag">Retail</span>
                </div>
            </div>
            <div className="scroll-down-indicator">
                <button 
                    onClick={(e) => toggleDropdown('details-4', e)} 
                    className="toggle-details"
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        fontFamily: 'inherit'
                    }}
                >
                    <span>Details</span>
                    <span className="arrow">&darr;</span>
                </button>
            </div>
        </div>

        <div id="details-4" className={`card-details-dropdown ${activeDropdown === 'details-4' ? 'open' : ''}`}>
            <div className="card-details-container">
                <div className="details-left-side">
                    <h4 className="details-section-title">The Insight</h4>
                    <p className="details-section-text">Valentine&apos;s Day is an anxiety event for Gen Z — every gift makes a statement you didn&apos;t intend. The Plush Bear is the only gift where the receiver supplies the meaning. It lets you say everything and nothing. Skip the awkward.</p>
                    <h4 className="details-section-title">The Work</h4>
                    <p className="details-section-text">Social content naming Gen Z relationship anxiety — deadpan, accurate, unfiltered. Visual identity: black, white, red while everyone else screamed pink. On-ground: a life-sized bear in mall atriums Feb 12–14, hugs with no labels required.</p>
                    <Link href="/hamleys" className="details-btn">View Full Case Study</Link>
                </div>
                <div className="details-right-side">
                    <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <div className="stat-box">
                            <div className="stat-number">5M+</div>
                            <div className="stat-label">Organic views in 1 week</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">Year 2</div>
                            <div className="stat-label">Campaign recommissioned</div>
                        </div>
                    </div>
                    <h4 className="details-section-title">Engagement Model</h4>
                    <p className="details-section-text">Campaign Strategy, Creative Ideation, Content Production, On-Ground Activation</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Services Marquee  */}
    <section className="marquee-section" id="home">
        <div className="marquee-content">
            <span>
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> Content Strategy
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> Creative Direction
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> Video Production
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> Social Media
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> Campaign Development
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> Brand Strategy
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> AI Filmmaking
            </span>
            <span>
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> Content Strategy
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> Creative Direction
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> Video Production
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> Social Media
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> Campaign Development
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> Brand Strategy
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/machinga_logos.png`} alt="logo" className="marquee-logo" /> AI Filmmaking
            </span>
        </div>
    </section>

    {/*  Statement  */}
    <section className="statement-section reveal-on-scroll" id="statement">
        <div className="container">
            <span className="statement-label">HOW WE WORK</span>
            <h2>EARN ATTENTION WITH COMPOUND INTEREST.</h2>
        </div>
    </section>

    {/*  Pricing  */}
    <section className="pricing-section reveal-on-scroll" id="pricing">
        <div className="container pricing-grid">
            <div className="pricing-card">
                <h3>CONTENT<br />ENGINE</h3>
                <h4>Think. Make. Run. All of it.</h4>
                <p className="desc">Full-service creative partnership. We develop your content strategy, embed a dedicated
                    team, and run your content operation. You get an in-house creative department without building one.
                </p>
                <ul className="features">
                    <li>Dedicated team & strategy</li>
                    <li>Ongoing production</li>
                    <li>Performance optimisation</li>
                </ul>
                <Link href="/appreciate" className="pricing-case-link">LIKE APPRECIATE →</Link>
                <div className="price-box">
                    <span className="label">Starting at</span>
                    <span className="price">₹4L<span>/month</span></span>
                </div>
            </div>
            <div className="pricing-card">
                <h3>CREATIVE<br />STRATEGY</h3>
                <h4>We Think. You make. We guide</h4>
                <p className="desc">Strategic direction without full execution. We develop your content strategy, create
                    concepts and scripts, and provide creative oversight—you or your team handles production. Get our
                    thinking without our production costs.</p>
                <ul className="features">
                    <li>Content strategy & concept</li>
                    <li>Scripts & briefs</li>
                    <li>Ongoing strategic counsel</li>
                </ul>
                <Link href="/aava" className="pricing-case-link">LIKE AAVA →</Link>
                <div className="price-box">
                    <span className="label">Starting at</span>
                    <span className="price">₹1.5L<span>/month</span></span>
                </div>
            </div>
            <div className="pricing-card highlight-card">
                <h3>CAMPAIGN /<br />PROJECT</h3>
                <h4>Think. Make. Ship.</h4>
                <p className="desc">One-off creative work. Campaign concepts, brand films, launch content,
                    repositioning—defined scope, clear deliverables, fixed timeline. When you need something specific
                    done well.</p>
                <ul className="features">
                    <li>Defined scope & timeline</li>
                    <li>Creative development</li>
                    <li>Full production</li>
                </ul>
                <Link href="/contraband" className="pricing-case-link">LIKE CONTRABAND →</Link>
                <div className="price-box">
                    <span className="label">Starting at</span>
                    <span className="price">₹5L<span>/month</span></span>
                </div>
            </div>
        </div>
    </section>

    {/*  Testimonials  */}
    <section className="testimonials-section reveal-on-scroll" id="testimonials">
        <div className="container">

            {/* Quote image — 205×180 from assets */}
            <img
                src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/testimonialsimg/Qotes.png`}
                alt=""
                width={205}
                height={180}
                className="testimonials-quote-img"
                aria-hidden="true"
            />

            {/* Carousel wrapper — relative so arrows can be absolutely placed on sides */}
            <div className="testimonials-carousel-wrapper">

                {/* LEFT arrow */}
                <button className="t-arrow t-arrow--prev" id="tPrev" aria-label="Previous testimonial">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"/>
                    </svg>
                </button>

                {/* Carousel track — padding lets shadows breathe on all sides */}
                <div className="testimonials-carousel" id="testimonialsCarousel">

                    {/* Card 1 */}
                    <div className="testimonial-card">
                        <div className="testimonial-author">
                            <div className="testimonial-avatar">
                                <img
                                    src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/testimonialsimg/person1.jpg`}
                                    alt="Esther Hills"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div className="testimonial-meta">
                                <span className="testimonial-name">Esther Hills</span>
                                <span className="testimonial-role">Lead Intranet Technician</span>
                            </div>
                        </div>
                        <p className="testimonial-text">
                            Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="testimonial-card">
                        <div className="testimonial-author">
                            <div className="testimonial-avatar">
                                <img
                                    src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/testimonialsimg/person2.jpg`}
                                    alt="Ethel Johnston"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div className="testimonial-meta">
                                <span className="testimonial-name">Ethel Johnston</span>
                                <span className="testimonial-role">Human Directives Director</span>
                            </div>
                        </div>
                        <p className="testimonial-text">
                            Fuga et debitis numquam omnis sed explicabo rem. Temporibus aut earum harum sint enim quia sit. Odit blanditiis illum amet doloribus adipisci corrupti explicabo. Qui non omnis eum consequatur voluptas aut ut dolor aut.
                        </p>
                    </div>

                </div>

                {/* RIGHT arrow */}
                <button className="t-arrow t-arrow--next" id="tNext" aria-label="Next testimonial">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                    </svg>
                </button>

            </div>
        </div>
    </section>

    {/*  Beliefs  */}
    <section className="beliefs-section reveal-on-scroll">
        <div className="container">
            <span className="statement-label">THINGS WE BELIEVE TO BE TRUE</span>

            <div className="beliefs-scroll-layout" style={{'display': 'flex', 'position': 'relative', 'marginTop': '3rem'}}>
                {/*  Left Sticky Column  */}
                <div className="beliefs-left"
                    style={{'width': '350px', 'position': 'sticky', 'top': '50vh', 'height': '60px', 'transform': 'translateY(-50%)', 'display': 'flex', 'alignItems': 'flex-start', 'gap': '12px', 'overflow': 'hidden', 'fontSize': '40px', 'fontWeight': '800', 'color': '#999999', 'textTransform': 'uppercase'}}>
                    <span style={{'height': '60px', 'lineHeight': '60px'}}>ON</span>
                    <div id="dynamic-belief-words"
                        style={{'display': 'flex', 'flexDirection': 'column', 'transition': 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)', 'marginTop': '0'}}>
                        <span style={{'height': '60px', 'lineHeight': '60px', 'color': '#1a1a1a'}}>Strategy</span>
                        <span style={{'height': '60px', 'lineHeight': '60px', 'color': '#1a1a1a'}}>Content</span>
                        <span style={{'height': '60px', 'lineHeight': '60px', 'color': '#1a1a1a'}}>Briefs</span>
                        <span style={{'height': '60px', 'lineHeight': '60px', 'color': '#1a1a1a'}}>Creative</span>
                        <span style={{'height': '60px', 'lineHeight': '60px', 'color': '#1a1a1a'}}>Attention</span>
                        <span style={{'height': '60px', 'lineHeight': '60px', 'color': '#1a1a1a'}}>Reality</span>
                    </div>
                </div>

                {/*  Right Scrolling Column  */}
                <div className="beliefs-right" style={{'flex': '1'}}>
                    <div className="belief-scroll-item" data-index="0" data-tag="On Strategy"
                        style={{'padding': '3vh 0', 'opacity': '0.2', 'transition': 'opacity 0.5s ease'}}>
                        <h4 style={{'fontSize': '20px', 'fontWeight': '800', 'color': '#1a1a1a', 'marginBottom': '8px'}}>Strategy
                            isn't a phase you rush through.</h4>
                        <p style={{'fontSize': '14px', 'color': '#888888'}}>It's the reason everything else works.</p>
                    </div>
                    <div className="belief-scroll-item" data-index="1" data-tag="On Content"
                        style={{'padding': '3vh 0', 'opacity': '0.2', 'transition': 'opacity 0.5s ease'}}>
                        <h4 style={{'fontSize': '20px', 'fontWeight': '800', 'color': '#1a1a1a', 'marginBottom': '8px'}}>Content
                            should be an engine, not a slot machine.</h4>
                        <p style={{'fontSize': '14px', 'color': '#888888'}}>Systems beat one-offs. Every time.</p>
                    </div>
                    <div className="belief-scroll-item" data-index="2" data-tag="On Briefs"
                        style={{'padding': '3vh 0', 'opacity': '0.2', 'transition': 'opacity 0.5s ease'}}>
                        <h4 style={{'fontSize': '20px', 'fontWeight': '800', 'color': '#1a1a1a', 'marginBottom': '8px'}}>The brief is
                            rarely about what the brief says it's about.</h4>
                        <p style={{'fontSize': '14px', 'color': '#888888'}}>Dig until you hit the real question.</p>
                    </div>
                    <div className="belief-scroll-item" data-index="3" data-tag="On Creative"
                        style={{'padding': '3vh 0', 'opacity': '0.2', 'transition': 'opacity 0.5s ease'}}>
                        <h4 style={{'fontSize': '20px', 'fontWeight': '800', 'color': '#1a1a1a', 'marginBottom': '8px'}}>The best
                            creative comes from understanding, not guessing.</h4>
                        <p style={{'fontSize': '14px', 'color': '#888888'}}>Do the homework. Then do the fun part.</p>
                    </div>
                    <div className="belief-scroll-item" data-index="4" data-tag="On Attention"
                        style={{'padding': '3vh 0', 'opacity': '0.2', 'transition': 'opacity 0.5s ease'}}>
                        <h4 style={{'fontSize': '20px', 'fontWeight': '800', 'color': '#1a1a1a', 'marginBottom': '8px'}}>Compound
                            interest works for attention too.</h4>
                        <p style={{'fontSize': '14px', 'color': '#888888'}}>Show up consistently, or don't bother showing up.
                        </p>
                    </div>
                    <div className="belief-scroll-item" data-index="5" data-tag="On Reality"
                        style={{'padding': '3vh 0', 'opacity': '0.2', 'transition': 'opacity 0.5s ease'}}>
                        <h4 style={{'fontSize': '20px', 'fontWeight': '800', 'color': '#1a1a1a', 'marginBottom': '8px'}}>Virality
                            isn't luck.</h4>
                        <p style={{'fontSize': '14px', 'color': '#888888'}}>It's research dressed up as spontaneity.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  About  */}
    <section className="about-section reveal-on-scroll" id="about">
        <div className="container" style={{ paddingTop: "80px" }}>
            <div className="about-header">
                <img src={`${process.env.NODE_ENV === 'production' ? '/machinga-nextjs' : ''}/assets/coconut.png`} alt="Coconut" className="about-coconut-img" />
                <h2 className="name-title">MACHINGA</h2>
            </div>
            <div className="about-text-grid">
                <div className="about-left-col">
                    <p className="pronunciation">/MUH - CHIN - GAH/</p>
                    <p className="definition">A palm-sized coconut fruit used to make innovative handmade toys for kids of all
                        ages. Crudely translated from Malayalam.</p>
                </div>
                <div className="about-right-col">
                    <p className="explanation">We liked the word. It's playful. It's crafted. It's distinctly Indian. It makes
                        people ask. "What does that mean?" And then we get to tell them.</p>
                </div>
            </div>
        </div>
    </section>


    {/*  Contact  */}
    <section className="contact-section reveal-on-scroll" id="contact">
        <div className="container">
            <div className="contact-card">
                <div className="contact-info-side">
                    <h2 className="huge-text">LET'S MAKE<br />SOMETHING</h2>
                    <p className="prompt-text">Got a challenge? A budget? A vague idea you want to explore? We're in.</p>
                    <a href="mailto:hello@studiomachinga.com" className="email-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0FC823" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                            </path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        hello@studiomachinga.com
                    </a>
                </div>
                <div className="contact-form-side">
                    <form className="contact-form" id="contact-us-form">
                        <div className="form-field">
                            <input type="text" name="name" placeholder="Name" required />
                        </div>
                        <div className="form-field">
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-field">
                            <input type="text" name="looking_for" placeholder="What are you looking for" required />
                        </div>
                        <div className="form-field form-field--textarea">
                            <textarea name="message" placeholder="Tell us more" rows={4} required></textarea>
                        </div>
                        <button type="submit" className="btn-gradient">Send It</button>
                    </form>
                    <div id="contact-success-message" className="success-message" style={{'display': 'none'}}>
                        <h3>Thank you!</h3>
                        <p>Your message has been received. We'll be in touch soon.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    </main>
  );
}
