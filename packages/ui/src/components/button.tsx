import type * as react from "react";

import { cn } from "@nexus-studio/ui/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold outline-none transition-all duration-200 ease-fluid focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[98%] disabled:pointer-events-none disabled:opacity-70 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
    variants: {
      size: {
        default: "h-10 px-4 py-2 text-base has-[>svg]:px-3",
        icon: "size-9",
        sm: "h-8 gap-1.5 px-3 text-sm has-[>svg]:px-2.5",
      },
      variant: {
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive-700 focus-visible:ring-destructive/20",
        "destructive-ghost":
          "bg-destructive-50 text-destructive hover:bg-destructive-100 focus-visible:ring-destructive/20 dark:bg-destructive-500/20 dark:hover:bg-destructive-500/30",
        "destructive-link":
          "text-destructive hover:underline focus-visible:ring-destructive/20",
        "destructive-outline":
          "border border-destructive text-destructive hover:bg-destructive-50 focus-visible:ring-transparent dark:bg-destructive-500/10",
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-gray-600 focus-visible:ring-primary/25 disabled:bg-gray-100 disabled:text-gray-300 dark:disabled:bg-gray-800 dark:disabled:text-gray-500 dark:hover:bg-gray-200",
        "primary-ghost":
          "bg-accent text-accent-foreground hover:bg-gray-100 focus-visible:ring-primary/20 dark:hover:bg-[--alpha(var(--color-primary)/20%)]",
        "primary-link":
          "text-accent-foreground hover:text-gray-800 hover:underline focus-visible:ring-primary/20 dark:hover:text-gray-300",
        "primary-outline":
          "border border-border text-accent-foreground hover:border-gray-600 focus-visible:ring-transparent dark:hover:bg-gray-600/15",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-brand-700 focus-visible:ring-secondary/20",
        "secondary-ghost":
          "bg-brand-50 text-secondary hover:bg-brand-100 focus-visible:ring-secondary/20 dark:bg-brand-500/20 dark:hover:bg-brand-500/30",
        "secondary-link":
          "text-secondary hover:text-brand-700 hover:underline focus-visible:ring-secondary/20",
        "secondary-outline":
          "border border-secondary text-secondary hover:bg-brand-50 focus-visible:ring-transparent dark:hover:bg-brand-500/10",
        success:
          "bg-success text-success-foreground shadow-xs hover:bg-success-700 focus-visible:ring-success/20",
        "success-ghost":
          "bg-success-50 text-success hover:bg-success-100 focus-visible:ring-success/20 dark:bg-success-500/20 dark:hover:bg-success-500/30",
        "success-link":
          "text-success hover:underline focus-visible:ring-success/20",
        "success-outline":
          "border border-success text-success hover:bg-success-50 focus-visible:ring-transparent dark:bg-success-500/10",
        warning:
          "bg-warning text-warning-foreground shadow-xs hover:bg-warning-700 focus-visible:ring-warning/20",
        "warning-ghost":
          "bg-warning-50 text-warning hover:bg-warning-100 focus-visible:ring-warning/20 dark:bg-warning-500/20 dark:hover:bg-warning-500/30",
        "warning-link":
          "text-warning hover:underline focus-visible:ring-warning/20",
        "warning-outline":
          "border border-warning text-warning hover:bg-warning-50 focus-visible:ring-transparent dark:bg-warning-500/10",
      },
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: react.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ className, size, variant }))}
      data-slot="button"
      {...props}
    />
  );
}

export { Button, buttonVariants };
