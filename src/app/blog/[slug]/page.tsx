import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts, siteUrl, readingMinutes } from '@/lib/data';
import { Breadcrumb, ContactButtons } from '@/components/ui';

export const dynamicParams = false;
export function generateStaticParams() { return posts.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find(p => p.slug === slug);
  if (!p) return { title: 'Yazı bulunamadı' };
  return { alternates: { canonical: siteUrl ? siteUrl + '/blog/' + slug : undefined }, title: p.title, description: p.intro, openGraph: { type: 'article', title: p.title, description: p.intro, images: [{ url: p.image, alt: p.imageAlt, width: 1024, height: 1024 }], ...(p.publishedAt ? { publishedTime: p.publishedAt } : {}) } };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = posts.find(p => p.slug === slug);
  if (!p) notFound();
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.intro, inLanguage: 'tr-TR', author: { '@type': 'Organization', name: 'Yıldız Organik Ürünler', ...(siteUrl ? { url: siteUrl + '/#hikayemiz' } : {}) }, ...(p.publishedAt ? { datePublished: p.publishedAt } : {}), ...(siteUrl ? { image: siteUrl + p.image, mainEntityOfPage: siteUrl + '/blog/' + p.slug } : {}) };
  return <article className="container section article"><Breadcrumb items={[{ label: 'Çiftlik günlüğü', href: '/blog' }, { label: p.title }]} /><span className="eyebrow">{p.category} · {readingMinutes(p)} DK OKUMA</span><h1 className="page-title">{p.title}</h1><p className="lead">{p.intro}</p><p className="article-byline">Yıldız Organik Ürünler{p.publishedAt && <> · <time dateTime={p.publishedAt}>{new Date(p.publishedAt + 'T12:00:00+03:00').toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Istanbul' })}</time></>}</p><figure><img className="article-image" src={p.image} alt={p.imageAlt} width="1024" height="1024" /><figcaption>{p.imageCaption}</figcaption></figure>{p.sections.map(([h, t], i) => <section key={h}><h2>{h}</h2><p>{t}</p>{p.sectionLinks?.[String(i)] && <p className="inline-reading"><Link href={p.sectionLinks[String(i)]!.href}>{p.sectionLinks[String(i)]!.label} ↗</Link></p>}</section>)}{p.sources && <aside className="article-sources" aria-label="Kaynaklar"><h2>İlgili resmî bilgi</h2>{p.sources.map(s => <p key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label} ↗</a></p>)}</aside>}<nav className="related-links" aria-label="Yazıyla ilgili sayfalar"><h2>Sıradaki adımınızı seçin</h2>{p.related.map(link => <Link key={link.href} href={link.href}>{link.label} ↗</Link>)}</nav><ContactButtons text={p.contactText} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /></article>;
}
