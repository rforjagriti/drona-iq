
import data from '../app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

/**
 * Returns the image URL for a given ID.
 */
export function getPlaceholderById(id: string): string {
  const img = PlaceHolderImages.find(i => i.id === id);
  if (img && img.imageUrl) {
    return img.imageUrl;
  }
  // Fallback to a high-quality placeholder if the local image is missing or ID not found
  return `https://picsum.photos/seed/${id}/800/1000`;
}

/**
 * Returns the search hint for AI to find related images.
 */
export function getHintById(id: string): string {
  const img = PlaceHolderImages.find(i => i.id === id);
  return img ? img.imageHint : 'education success';
}
