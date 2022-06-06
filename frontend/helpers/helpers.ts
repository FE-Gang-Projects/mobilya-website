import { MediaFlat } from '../types';
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_IMAGE_URL;

export function translateChars(word: string): string {
  return word
    .toLocaleLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ş/g, 's')
    .replace(/i̇/g, 'i')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/ /g, '-');
}

export const getCategoryUrl = (category: string): string => {
  return `/kategoriler/${translateChars(category)}`;
};

export function getBiggestUrl(media: MediaFlat): string {
  if (media.large) return media.large.url;
  if (media.medium) return media.medium.url;
  if (media.small) return media.small.url;
  if (media.thumbnail) return media.thumbnail.url;
  return '';
}

type imageSize = 'thumb' | 'small' | 'medium' | 'large';
export const getImageUrl = (media: MediaFlat, size: imageSize) => {
  if (media.large && size === 'large') {
    return `${BASE_URL}${media.large.url}`;
  } else if (media.medium && (size === 'large' || size === 'medium')) {
    return `${BASE_URL}${media.medium.url}`;
  } else if (media.small && (size === 'large' || size === 'medium' || size === 'small')) {
    return `${BASE_URL}${media.small.url}`;
  } else if (
    media.thumbnail &&
    (size === 'large' || size === 'medium' || size === 'small' || size === 'thumb')
  ) {
    return `${BASE_URL}${media.thumbnail.url}`;
  }
  return '';
};
