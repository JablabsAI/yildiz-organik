# Yıldız Organik Ürünler

Next.js App Router, TypeScript, React.

## Çalıştırma

npm install
npm run dev

Üretim kontrolü: npm run build; npm start.

## Yayına hazırlık

.env.local içinde NEXT_PUBLIC_SITE_URL değerini gerçek HTTPS alan adına ayarlayın. Alan adı yokken robots noindex ve sitemap boştur. Alan adıyla yeniden build alın. Canonical, reklam/ölçüm ve gerçek işletme bilgilerini yayında doğrulayın.

Adres kullanıcı tarafından Arıstıl / Bakraç, Afşin / Kahramanmaraş olarak netleştirildi. Öncelikli teslim şekli çiftlikten teslim almadır; uygunluk ve saat önceden görüşülür. Kesin harita noktası verilmediği için konum WhatsApp üzerinden istenir. Organik sertifikası beyan edilmemiştir. İndirim oranı ve kampanya tarihleri uydurulmamıştır. Tavuk satışı genel ifadeyle anlatılır; canlı/hazırlanmış ayrımı yapılmaz.

Mahalle verisi: https://www.kahramanmaras.bel.tr/hizmetler/mahalle-ve-muhtarlar (29 Ekim 2026). Yalnız ilçe/mahalle adları alınmıştır; muhtar kişisel verileri kullanılmaz. İlçe bazlı indekslenebilir sayfalar ve mahalle seçimi; yüzlerce tekrarlanan mahalle sayfası yoktur.

4 Kasım 2026: Kullanıcının sağladığı 2 banner ve 11 galeri görseli WebP olarak eklendi. Kullanılmaması istenen Tavuklarla Dolu Kırsal Tarla.png hariç tutuldu. Eski AI çiftlik fotoğrafları public dışına arşivlendi. Logo mevcut marka tasarımıdır. Galeri kartları 1024×1024, küçük sürümleri 480×480, tam kadrajlar en fazla 1600 px. Parlaklık +%2, doygunluk +%6; yeni nesne veya arka plan üretilmedi. /galeri eklendi, blog 5 yazıya çıktı. Güncel SEO ve görsel notları docs/seo-guncelleme-2026-11-04.md dosyasındadır. İçerikler src/lib/data.ts; mahalleler src/lib/districts.json. Arama/WhatsApp numarası +905323506589. Fiyat ve online ödeme yok. Google Ads henüz eklenmedi.

Son revizyon: Slider tam genişlikte ve 5 saniye otomatik geçişlidir. Ana sayfa galerisi 9 fotoğraftır. Gezen tavuk yumurtası kullanıcı beyanıyla vurgulanmıştır. Yoğurt için kullanıcı isteğiyle temsili AI görsel eklenmiştir; galeriye dahil değildir. Ayrıntı: docs/slider-galeri-gezen-tavuk-revizyonu.md.
