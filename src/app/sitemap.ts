import type {MetadataRoute} from 'next';
import {siteUrl,products,posts} from '@/lib/data';
import districts from '@/lib/districts.json';
import photos from '@/lib/photos.json';
export default function sitemap():MetadataRoute.Sitemap {
 if(!siteUrl)return [];
 return ['','/galeri','/bolgeler','/blog','/gizlilik',...products.map(p=>'/urunler/'+p.slug),...posts.map(p=>'/blog/'+p.slug),...districts.map(d=>'/bolgeler/'+d.slug)].map(p=>({url:siteUrl+p,changeFrequency:p===''?'weekly':'monthly',priority:p===''?1:p.startsWith('/urunler')?0.8:0.6,...(p==='/galeri'?{images:photos.map(photo=>siteUrl+photo.full)}:{}),...(posts.find(post=>p==='/blog/'+post.slug)?.publishedAt?{lastModified:posts.find(post=>p==='/blog/'+post.slug)!.publishedAt}:{})}));
}
