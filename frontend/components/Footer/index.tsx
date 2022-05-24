import React from 'react';

export default function Footer() {
  const categories = [
    'Yatak Odası',
    'Yemek Odası',
    'Koltuk Takımı',
    'Tv Ünitesi',
    'Oturma Grubu',
    'Düğün Paketleri1',
    'Yatak Odası2',
    'Yemek Odası',
    'Koltuk Takımı',
    'Tv Ünitesi',
    'Oturma Grubu',
    'Düğün Paketleri2',
  ];
  return (
    <div className="footer">
      <div className="footer__cols">
        <div className="footer__cols__cats">
          <h2 className="footer-title">KATEGORİLER</h2>
          <div className="footer__category-container">
            <div>
              {categories.slice(0, categories.length / 2).map((category, i) => (
                <a key={i} href="#">
                  {category}
                </a>
              ))}
            </div>
            <div>
              {categories.slice(categories.length / 2, categories.length).map((category, i) => (
                <a key={i} href="#">
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__cols__contact">
          <h2 className="footer-title">İLETİŞİM</h2>
          <p>Lapseki / Çanakkale 0 850 833 33 01 0 532 067 19 17 info@sezerlermobilya.com.tr</p>
        </div>
        <div className="footer__cols__map">
          <h2 className="footer-title">HARİTA</h2>
        </div>
      </div>
      <div className="footer__copyright">
        Copyright © 2022 Çalışkan Mobilya Dayanıklı Tüketim Malları Ltd. Şti.
      </div>
    </div>
  );
}
