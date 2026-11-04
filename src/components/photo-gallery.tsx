'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import photos from '@/lib/photos.json';

export default function PhotoGallery({ preview = false }: { preview?: boolean }) {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef('');
  const list = preview ? photos.slice(0, 9) : photos;
  const photo = list[active];
  function open(index: number) {
    setActive(index);
    setIsOpen(true);
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.showModal();
  }
  function move(delta: number) { setActive(index => (index + delta + list.length) % list.length); }
  return <>
    <div className={'photo-grid ' + (preview ? 'photo-preview' : '')}>
      {list.map((p, index) => <figure key={p.id}><button type="button" onClick={() => open(index)} aria-label={p.caption + ' — fotoğrafı büyüt'}><img src={p.src} srcSet={`${p.thumbnail} 480w, ${p.src} 1024w`} sizes="(max-width: 760px) 45vw, 33vw" alt={p.alt} width="1024" height="1024" loading="lazy" /><span className="photo-expand" aria-hidden="true"><Expand size={17} /></span></button><figcaption>{p.caption}</figcaption></figure>)}
    </div>
    <dialog ref={dialog} className="photo-dialog" aria-label="Çiftlik fotoğrafı" onClose={() => { setIsOpen(false); document.body.style.overflow = previousOverflow.current; }} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } }}>
      {isOpen && <div className="photo-viewer"><button type="button" autoFocus className="photo-close" onClick={() => dialog.current?.close()} aria-label="Fotoğrafı kapat"><X size={22} /></button><img src={photo.full} alt={photo.alt} width={photo.width} height={photo.height} /><div className="photo-viewer-bottom"><button type="button" aria-label="Önceki fotoğraf" onClick={() => move(-1)}><ChevronLeft /></button><p aria-live="polite">{photo.caption}<small>{active + 1} / {list.length}</small></p><button type="button" aria-label="Sonraki fotoğraf" onClick={() => move(1)}><ChevronRight /></button></div></div>}
    </dialog>
  </>;
}
