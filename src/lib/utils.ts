import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(imagePath: string): string {
  if (!imagePath) return "";
  
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // For Vite, we need to use the public directory
  if (imagePath.startsWith('/lovable-uploads/')) {
    return imagePath; // These are in the public directory
  }
  
  // Handle local paths in the src directory
  const cleanPath = imagePath.replace(/^\/+/, '');
  return `/${cleanPath}`;
}
