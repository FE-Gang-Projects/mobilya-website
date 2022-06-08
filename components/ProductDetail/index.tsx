import React from 'react';
import { ProductFlat } from '../../types';
import ReactMarkdown from 'react-markdown';
import { getCategoryUrl } from '../../helpers/helpers';
import Link from 'next/link';
import ProductImages from './ProductImages';

export default function ProductDetail({ product }: { product: ProductFlat }) {
  const attributes = Object.entries(product.ozellikler).map(([key, value]) => (
    <div key={key} className="single-product__info__detail">
      <h4>{key}:</h4>
      <span>{value}</span>
    </div>
  ));

  return (
    <>
      <div className="single-product__container">
        <ProductImages images={product.medya} />
        <div className="single-product__info">
          <h1 className="single-product__info__title">{product.ad}</h1>
          {product.kisaAciklama && (
            <h2 className="single-product__info__desc">{product.kisaAciklama}</h2>
          )}
          <Link href={getCategoryUrl(product.kategori)}>
            <div className="single-product__info__tags">
              <span>{product.kategori}</span>
            </div>
          </Link>
          <hr className="light" />
          {product.marka && (
            <div className="single-product__info__detail">
              <h4>Marka:</h4>
              <span>{product.marka}</span>
            </div>
          )}
          {attributes}
          {product.aciklama && (
            <>
              <hr className="light" />
              <div className="markdown">
                <ReactMarkdown>{product.aciklama}</ReactMarkdown>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
