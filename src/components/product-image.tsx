import { CookingPot } from 'lucide-react';

export default function ProductImage({ image, alt, detail = false }: { image: string; alt: string; detail?: boolean }) {
  if (!image) return <div className={'made-to-order-image ' + (detail ? 'detail-photo' : '')}><CookingPot size={46} strokeWidth={1} aria-hidden="true" /><span>Aile mutfağından</span><strong>Siz isteyin,<br />biz hazırlayalım.</strong><small>Ev yoğurdu · Sipariş üzerine</small></div>;
  return <img className={detail ? 'detail-photo' : undefined} src={image} alt={alt} width="1024" height="1024" loading={detail ? 'eager' : 'lazy'} />;
}
