import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@nexus-studio/ui/lib/utils";

export const BaseNode = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "relative rounded-[0.7rem] border border-border bg-card text-card-foreground ring-secondary/20 transition-colors",
      "hover:ring-1",
      "[.selected_&]:border-secondary",
      className,
    )}
    ref={ref}
    // biome-ignore lint/a11y/noNoninteractiveTabindex: safe
    tabIndex={0}
    {...props}
  />
));

BaseNode.displayName = "BaseNode";
