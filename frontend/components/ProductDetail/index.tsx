import React from 'react';
import { ProductFlat } from '../../types';
import Container from '../Container';

export default function ProductDetail({ product }: { product: ProductFlat }) {
  return (
    <Container>
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
          <h1 className="single-product__info__title">{product.ad}</h1>
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
            <span>{product.kategori}</span>
          </div>
          <div className="single-product__info__detail">
            <h4>Marka:</h4>
            <span>{product.marka}</span>
          </div>
          <div className="single-product__info__detail">
            <h4>Kampanya:</h4>
            <span>Hemen Teslim Fiyatı</span>
          </div>
          {/* <div className="single-product__info__detail">
          <h4>Title:</h4>
          <span>Özellik</span>
        </div> */}
        </div>
      </div>
    </Container>
  );
}
