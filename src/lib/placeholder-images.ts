
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
 * Maps IDs to the exact case-sensitive files in public/images/
 */
export function getPlaceholderById(id: string): string {
  // Direct mapping for reliability (Case-Sensitive)
  if (id === 'hero-student') return '/images/drona-iq.webp';
  if (id === 'founder-photo' || id === 'faculty-1') return '/images/Amit-Negi.webp';
  if (id === 'faculty-2') return '/images/rahul_pratap.webp';
  if (id === 'faculty-3') return '/images/lokesh_garg.webp';
  if (id === 'faculty-5') return '/images/amita-sharma.webp';
  if (id === 'faculty-4' || id === 'faculty-6') return '/images/sapna-tiwari.webp';
  if (id === 'faculty-7') return '/images/brijesh_kumar.webp';
  
  // Success Hall Students
  if (id === 'student-1') return '/images/ishita-negi.png';
  if (id === 'student-2') return '/images/aryan-rawat.png';
  if (id === 'student-3') return '/images/sanya-gupta.png';

  // Academic Programs
  if (id === 'class-5-7') return '/images/class5-7.png';
  if (id === 'class-8-9') return '/images/class8-9.png';
  if (id === 'class-10') return '/images/class-10.png';
  if (id === 'class-11s') return '/images/class11-12.png';
  if (id === 'class-11c') return '/images/class 12-11.png';
  
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
