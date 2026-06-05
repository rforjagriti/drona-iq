
import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

/**
 * Returns the image URL for a given ID.
 * Maps IDs to the exact .webp files in public/images/ as per screenshot.
 */
export function getPlaceholderById(id: string): string {
  if (id === 'founder-photo' || id === 'faculty-1') {
    return '/images/Amit-Negi.webp';
  }
  if (id === 'faculty-2') {
    return '/images/rahul_pratap.webp';
  }
  if (id === 'faculty-3') {
    return '/images/lokesh_garg.webp';
  }
  if (id === 'faculty-5') {
    return '/images/amita-sharma.webp';
  }
  if (id === 'faculty-6') {
    return '/images/sapna-tiwari.webp';
  }
  if (id === 'faculty-7') {
    return '/images/brijesh_kumar.webp';
  }
  
  const img = PlaceHolderImages.find(i => i.id === id);
  if (img && img.imageUrl) {
    return img.imageUrl;
  }
  
  return `https://picsum.photos/seed/${id}/800/1000`;
}

/**
 * Returns the search hint for AI to find related images.
 */
export function getHintById(id: string): string {
  const img = PlaceHolderImages.find(i => i.id === id);
  return img ? img.imageHint : 'education success';
}
