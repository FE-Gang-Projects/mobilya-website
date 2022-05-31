import { MediaFlat } from '../types';

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

export function getBiggestUrl(media: MediaFlat): string {
  if (media.large) return media.large.url;
  if (media.medium) return media.medium.url;
  if (media.small) return media.small.url;
  if (media.thumbnail) return media.thumbnail.url;
  return '';
}
