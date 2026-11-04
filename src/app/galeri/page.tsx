import type { Metadata } from 'next';
import Link from 'next/link';
import PhotoGallery from '@/components/photo-gallery';
import { Breadcrumb, ContactButtons } from '@/components/ui';
import photos from '@/lib/photos.json';
import { siteUrl } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Çiftlik Fotoğrafları | Afşin Yumurta ve Tavuk',
  description: 'Arıstıl / Bakraç’taki Yıldız aile çiftliğinden tavuk, yumurta ve bahçe fotoğrafları. Fotoğrafları inceleyin, çiftlikten teslim almak için bize ulaşın.',
  alternates: { canonical: siteUrl ? siteUrl + '/galeri' : undefined },
  openGraph: { title: 'Yıldız çiftliğinden fotoğraflar', images: [{ url: photos[0].src, width: 1024, height: 1024, alt: photos[0].alt }] },
};

export default function GalleryPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ImageGallery', name: 'Yıldız çiftliğinden fotoğraflar', description: metadata.description, ...(siteUrl ? { url: siteUrl + '/galeri', image: photos.map(p => ({ '@type': 'ImageObject', contentUrl: siteUrl + p.full, thumbnailUrl: siteUrl + p.src, caption: p.caption, description: p.alt, width: p.width, height: p.height })) } : {}) };
  return <div className="container section"><Breadcrumb items={[{ label: 'Fotoğraf galerisi' }]} /><span className="eyebrow">ARISTIL / BAKRAÇ’TAN KARELER</span><h1 className="page-title">Çiftliğimize <em>yakından bakın.</em></h1><p className="lead">Tavuklarımız, yumurtalarımız ve köydeki yaşamımızdan kareler. Fotoğraflara dokunarak tamamını büyütebilirsiniz.</p><div className="gallery-top-links"><Link href="/urunler/tavuk">Tavuk satışı hakkında bilgi alın ↗</Link><Link href="/urunler/koy-yumurtasi">Köy yumurtası siparişini planlayın ↗</Link></div><PhotoGallery /><div className="gallery-invitation"><div><span className="eyebrow">FOTOĞRAFTAN SONRA, BİR MERHABA</span><h2>Gördünüz, tanışalım.</h2><p>İstediğiniz ürünü ve adedi yazın. Güncel uygunluğu konuşup Arıstıl / Bakraç’taki çiftliğimizden teslim alma saatinizi belirleyelim.</p></div><ContactButtons text="Merhaba, çiftlik galerinizden geldim. Yumurta veya tavuk için fiyat ve çiftlikten teslim alma bilgisi paylaşabilir misiniz?" /></div><p className="subtle">Fotoğraflar çekildikleri anı gösterir. Güncel satış miktarı ve ürün uygunluğu için lütfen bize ulaşın.</p><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /></div>;
}
