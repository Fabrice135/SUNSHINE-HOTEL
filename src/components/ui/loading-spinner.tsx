import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        {/* Outer rotating ring with sunshine colors */}
        <div 
          className={cn(
            "animate-spin rounded-full border-4 border-secondary/20 border-t-secondary",
            sizeClasses[size]
          )}
        />
        {/* Inner pulsing dot */}
        <div 
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "bg-primary rounded-full animate-pulse",
            size === "sm" ? "w-1 h-1" : size === "md" ? "w-2 h-2" : "w-3 h-3"
          )}
        />
      </div>
    </div>
  );
}

export function FullPageSpinner() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="text-muted-foreground font-medium">Loading...</p>
      </div>
    </div>
  );
}