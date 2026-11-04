'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight, MessageCircle, Pause, Play } from 'lucide-react';
import { whatsapp } from '@/lib/data';

const slides = [
  { image: '/images/real/ciftlik-banner-1', alt: 'Yıldız Organik Ürünler: tavuklar ve yumurtalarla hazırlanan çiftlik tanıtım bannerı' },
  { image: '/images/real/ciftlik-banner-2', alt: 'Yıldız Organik Ürünler: domates ve yumurta görselleriyle tavuk, horoz ve yumurta satışı tanıtım bannerı' },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion(); updateVisibility();
    preference.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => { preference.removeEventListener('change', updateMotion); document.removeEventListener('visibilitychange', updateVisibility); };
  }, []);
  const rotating = !paused && !focused && visible && !reducedMotion;
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % slides.length), 5000);
    return () => window.clearTimeout(timer);
  }, [active, rotating]);

  return <section className="farm-hero" aria-label="Yıldız çiftliğinden" aria-roledescription="slayt gösterisi">
    <div className="farm-banner" onFocusCapture={event => { if ((event.target as HTMLElement).matches(':focus-visible')) setFocused(true); }} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false); }}>
      {slides.map((slide, i) => <img key={slide.image} src={slide.image + '.webp'} srcSet={`${slide.image}-small.webp 900w, ${slide.image}.webp 1774w`} sizes="100vw" width="1774" height="887" alt={slide.alt} hidden={i !== active} loading="eager" fetchPriority={i === 0 ? 'high' : 'low'} />)}
      <div className="banner-controls">
        {!reducedMotion && <button type="button" aria-label={paused ? 'Otomatik geçişi başlat' : 'Otomatik geçişi duraklat'} onClick={() => { setPaused(value => !value); setFocused(false); }}>{paused ? <Play size={17} /> : <Pause size={17} />}</button>}
        <button type="button" aria-label="Önceki banner" onClick={() => setActive(index => (index + slides.length - 1) % slides.length)}><ChevronLeft size={20} /></button>
        <span aria-live={rotating ? 'off' : 'polite'} aria-atomic="true">{active + 1} / {slides.length}</span>
        <button type="button" aria-label="Sonraki banner" onClick={() => setActive(index => (index + 1) % slides.length)}><ChevronRight size={20} /></button>
      </div>
    </div>
    <div className="container banner-intro"><div><span className="eyebrow">AFŞİN · ARISTIL / BAKRAÇ</span><h1>Kahramanmaraş’ta gezen tavuk yumurtası <em>ve tavuk satışı.</em></h1><p>Arıstıl / Bakraç’taki gezen tavuklarımızın yumurtaları için doğrudan aile çiftliğimizle görüşün. Adedi ve teslim alma saatinizi birlikte planlayalım.</p></div><div className="banner-actions"><a href={whatsapp('Merhaba, gezen tavuk yumurtası ve tavuk satışı hakkında bilgi almak istiyorum.')} className="button yellow" target="_blank" rel="noopener noreferrer"><MessageCircle size={19} /> Sipariş için bize yazın</a><Link href="/#fotograflar" className="text-link">Çiftliğe yakından bakın <ArrowUpRight size={18} /></Link></div></div>
  </section>;
}
