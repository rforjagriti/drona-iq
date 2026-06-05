
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
 * Directly handles core team photos with rock-solid paths.
 * NOTE: Paths are case-sensitive to match the filesystem.
 */
export function getPlaceholderById(id: string): string {
  if (id === 'founder-photo' || id === 'faculty-1') {
    return '/images/Amit-Negi.webp';
  }
  if (id === 'faculty-2') {
    return '/images/rahul_pratap.webp';
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
