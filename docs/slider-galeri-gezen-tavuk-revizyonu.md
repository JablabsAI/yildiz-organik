# Slider, galeri ve gezen tavuk yumurtası revizyonu

4 Kasım 2026 · Kullanıcının ekran görüntüsü ve son talebi doğrultusunda uygulanmıştır.

- Slider’ın 1440 px sınırı kaldırıldı; verilen bannerlar 2:1 oranı korunarak ekran genişliğini doldurur. Mobilde kontroller fotoğrafın altına alınır. 5 saniyede otomatik geçiş, duraklat/başlat, önceki/sonraki düğmeleri vardır. Sekme görünmezken ve sistemin azaltılmış hareket tercihinde otomatik geçiş çalışmaz. Klavye odağı geldiğinde hareket durur; başlat düğmesiyle devam ettirilebilir.
- Ana sayfada 9 fotoğraf, masaüstünde 3 sütun × 3 sıra; mobilde 2 sütun. Galeri altındaki “tüm fotoğraflar” düğmesi yerine doğrudan arama/WhatsApp yönlendirmesi vardır. /galeri sayfası menü ve iç bağlantılarla korunur.
- Kullanıcının yeni talebiyle yoğurt görseli, mevcut domates fotoğrafının sade taş/sıva ortamını referans alarak built-in image_gen aracıyla üretildi. Ürün kartı ve detayında temsili AI görsel açıklaması yer alır; çiftlik fotoğraf galerisine eklenmez. 1024×1024 WebP olarak public/images/illustrations/ev-yogurdu-temsili-v2.webp adresine kaydedildi. Tam üretim promptu teslim klasöründeki yogurt-gorsel-uretim-v2.json dosyasındadır.
- Kullanıcı yumurtaların gezen tavuk yumurtası olduğunu doğruladı. Ana sayfa H1/description, ürün kartı, yumurta ürününün title/description/H1, açıklamaları, soruları, ilgili blog ve ilçe içerikleri güncellendi. Mevcut /urunler/koy-yumurtasi URL’si korundu; aynı ürüne kopya URL açılmadı.
- 22 gezen tavuk yumurtası sorgu adayı eklendi. Toplam 190 aday var; hacim veya sıralama ölçümü değildir. Başlıca sorgular: Maraş gezen tavuk yumurtası, maras gezen tavuk yumurtasi, Kahramanmaraş gezen tavuk yumurtası, Afşin gezen tavuk yumurtası, Bakraç/Arıstıl ve fiyat/sipariş varyantları. İlçe sorguları ilgili ilçe sayfasından ürün sayfasına bağlanır.
- [Google SEO başlangıç rehberi](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) doğrultusunda doğru Türkçe ve doğal anlatım kullanıldı; varyantlar görünür metne tekrar listesi olarak eklenmedi. Sertifika, yumurta kodu, yem türü veya besin üstünlüğü iddiası eklenmedi.

Önceki 4 Kasım raporunun dört fotoğraflık galeri, otomatik olmayan slider ve yoğurtta boş kart açıklamalarının yerini bu revizyon alır. Yerel noindex ve gerçek alan adı sonrası yayın düzeni korunur.
