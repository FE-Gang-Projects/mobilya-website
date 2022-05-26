import React, { useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
  const categories = [
    'Yatak Odası',
    'Yemek Odası',
    'Koltuk Takımı',
    'Tv Ünitesi',
    'Oturma Grubu',
    'Düğün Paketleri1',
    'Düğün Paketleri1',
    'Yatak Odası2',
    'Yatak Odası2',
    'Yemek Odası',
    'Koltuk Takımı',
    'Tv Ünitesi',
    'Oturma Grubu',
    'Düğün Paketleri2',
  ];

  return (
    <div className="footer">
      <div className="footer__cols__container">
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
            <p>
              Lapseki / Çanakkale <br /> 0 850 833 33 01 <br /> 0 532 067 19 17 <br />
              info@caliskanmobilya.com.tr
            </p>
            <div className="footer-social">
              <Image src="/icons/facebook.svg" width={35} height={35} alt="Favori İkonu" />
              <Image src="/icons/instagram.svg" width={35} height={35} alt="Favori İkonu" />
            </div>
          </div>
          <div className="footer__cols__map">
            <h2 className="footer-title">HARİTA</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d537.5626007279009!2d26.684181237173448!3d40.34426966167531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b16c174e15cd97%3A0xfa28a99a6636dc02!2sGazi%20S%C3%BCleyman%20Pa%C5%9Fa%2C%20Belediye%20Sk.%20No%3A3%2C%2017800%20Lapseki%2F%C3%87anakkale!5e0!3m2!1str!2str!4v1653560222215!5m2!1str!2str"
              width="400"
              height="200"
              // style="border:0;"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        Copyright © 2022 Çalışkan Mobilya Dayanıklı Tüketim Malları Ltd. Şti.
      </div>
    </div>
  );
}
