import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  loadingText?: string;
}

export function LoadingButton({ 
  children, 
  loading = false, 
  loadingText, 
  disabled, 
  className,
  ...props 
}: LoadingButtonProps) {
  return (
    <Button 
      disabled={disabled || loading} 
      className={cn("relative", className)}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" />
        </div>
      )}
      <span className={loading ? "invisible" : ""}>
        {loading && loadingText ? loadingText : children}
      </span>
    </Button>
  );
}