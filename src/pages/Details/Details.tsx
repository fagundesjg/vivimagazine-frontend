import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './styles';
import { Navbar } from 'components';
import { IProduct } from 'services/products/types';
import { ProductServices } from 'services';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();
  const [selectedPhoto, setSelectedPhoto] = useState<string>();
  const [photos, setPhotos] = useState<string[]>([]);

  const openImage = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
  };

  const fetchProduct = useCallback(async () => {
    const data = await ProductServices.show(id);
    setProduct(data);
    let photosData: string[] = [];
    Array.from({ length: 3 }).forEach((_, i) => {
      const key = `image${i + 1}`;
      console.log(`i = ${i}, value = ${data[key]}`);
      if (data[key]) {
        photosData.push(data[key]);
      }
    });
    setPhotos(photosData);
    setSelectedPhoto(photosData[0]);
    console.log({ photosData });
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <S.Container>
      <Navbar />
      <S.Content>
        <S.PhotosContainer>
          <S.PhotoPreviewContainer>
            {photos.map((p, index) => (
              <S.PhotoPreview
                key={index}
                selected={p === selectedPhoto}
                onClick={() => setSelectedPhoto(p)}
                src={p}
              />
            ))}
          </S.PhotoPreviewContainer>
          <S.PhotoView
            src={selectedPhoto}
            onClick={() => openImage(selectedPhoto ?? '')}
          />
        </S.PhotosContainer>
        <S.DetailsContainer>
          <S.Brand>{product?.category.name}</S.Brand>
          <S.Title>{product?.name}</S.Title>
          {product && product.discount && product.discount > 0 ? (
            <>
              <S.OldPrice>{`de R$ ${product.price
                .toFixed(2)
                .replace('.', ',')}`}</S.OldPrice>
              <S.Row>
                <S.Price>{`por R$ ${(
                  product.price *
                  ((100 - product.discount) / 100)
                )
                  .toFixed(2)
                  .replace('.', ',')}`}</S.Price>
                <S.Discount>- {product.discount}%</S.Discount>
              </S.Row>
            </>
          ) : (
            <S.Price style={{ marginTop: 16 }}>{`R$ ${product?.price
              .toFixed(2)
              .replace('.', ',')}`}</S.Price>
          )}
          {/* <S.Description>{productInfo?.description}</S.Description> */}
        </S.DetailsContainer>
      </S.Content>
    </S.Container>
  );
};

export { Details };
