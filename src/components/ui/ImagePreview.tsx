import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { getImagePath } from "@/lib/utils";

interface ImagePreviewProps {
  image: string;
  title?: string;
  description?: string;
  category?: string;
  price?: string;
  isOpen: boolean;
  onClose: () => void;
}

// Lightweight accessible lightbox replacement
const ImagePreview: React.FC<ImagePreviewProps> = ({ image, title, description, category, price, isOpen, onClose }) => {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // focus the close button when opened
    const timer = setTimeout(() => closeRef.current?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(timer);
      document.body.style.overflow = original;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center backdrop-blur-sm transition-all duration-500 ease-in-out"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Dark overlay with blur effect */}
      <div className="absolute inset-0 bg-black/90 transition-opacity duration-300 ease-in-out" />

      {/* Main content container */}
      <div
        className="relative max-w-7xl w-full max-h-[95vh] p-4 sm:p-6 animate-in fade-in zoom-in-95 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={closeRef}
          aria-label="Close preview"
          className="absolute -top-2 -right-2 z-20 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white shadow-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 ease-in-out group"
          onClick={onClose}
        >
          <X size={24} className="transform group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Image container with subtle border and shadow */}
        <div className="bg-transparent flex items-center justify-center overflow-hidden rounded-lg border border-white/10 shadow-2xl">
          <img
            src={getImagePath(image)}
            alt={title || "Preview image"}
            className="w-full max-h-[80vh] object-contain transform transition-transform duration-500 ease-out hover:scale-105"
            draggable={false}
          />
        </div>

        {/* Title and description with improved typography and spacing */}
        {(title || description || category || price) && (
          <div className="mt-6 text-center text-white space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200">
            {title && (
              <h3 className="text-2xl font-display font-bold tracking-tight">
                {title}
              </h3>
            )}
            {category && (
              <p className="text-sm font-medium text-white/80">
                {category}
              </p>
            )}
            {price && (
              <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {price}
              </div>
            )}
            {description && (
              <p className="text-base text-white/90 max-w-2xl mx-auto leading-relaxed mt-3">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Navigation hint */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm animate-in fade-in slide-in-from-bottom-1 duration-300 delay-200">
          Press ESC to close
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ImagePreview;