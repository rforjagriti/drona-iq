
import data from '../app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

export function getPlaceholderById(id: string): string {
  const img = PlaceHolderImages.find(i => i.id === id);
  return img ? img.imageUrl : '/images/placeholder.jpg';
}
