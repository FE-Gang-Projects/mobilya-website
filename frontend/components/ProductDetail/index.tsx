import React from "react";

export default function ProductDetail() {
  return (
    <div className="single-product__container">
      <div className="single-product__image">
        <img
          className="single-product__image__big-image"
          src="https://st3.myideasoft.com/shop/bo/48/myassets/products/258/avrupa-midi-koltuk-takimi.jpg?revision=1651221530"
          alt="product"
        />
        <div className="single-product__image__mini-images">
          <img
            src="https://st1.myideasoft.com/shop/bo/48/myassets/products/258/avrupa-midi-koltuk-takimi_min.jpg?revision=1651221530"
            alt="product"
          />
          <img
            src="https://st1.myideasoft.com/shop/bo/48/myassets/products/258/avrupa-sari-midi-koltuk-takimi_min.jpg?revision=1651221531"
            alt="product"
            className="active"
          />
          <img
            src="https://st1.myideasoft.com/shop/bo/48/myassets/products/258/avrupa-yesil-midi-koltuk-takimi_min.jpg?revision=1651221531"
            alt="product"
          />
        </div>
      </div>
      <div className="single-product__info">
        <h1 className="single-product__info__title">
          Avrupa Midi Düğün Paketi
        </h1>
        <h2 className="single-product__info__desc">
          Koltuk Takımı + Yatak Odası Takımı + Yemek Odası Takımı
        </h2>
        <div className="single-product__info__tags">
          <span>Koltuk Takımı</span>
          <span>Yatak Odası Takımı</span>
          <span>Yemek Odası Takımı</span>
        </div>
        <hr className="light" />
        <div className="single-product__info__detail">
          <h4>Kategori:</h4>
          <span>Mobilya</span>
        </div>
        <div className="single-product__info__detail">
          <h4>Garanti Süresi:</h4>
          <span>24 ay</span>
        </div>
        <div className="single-product__info__detail">
          <h4>Kampanya:</h4>
          <span>Hemen Teslim Fiyatı</span>
        </div>
        <div className="single-product__info__detail">
          <h4>Marka:</h4>
          <span>Sa</span>
        </div>
        <div className="single-product__info__detail">
          <h4>Title:</h4>
          <span>Özellik</span>
        </div>
      </div>
    </div>
  );
}
