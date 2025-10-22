import type { PropsWithChildren } from "react";

export const PatternWrapper = (props: PropsWithChildren) => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Dashed Top Fade Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
  linear-gradient(to right, #e7e5e4 1px, transparent 1px),
  linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
`,
          backgroundPosition: "0 0, 0 0",
          backgroundSize: "20px 20px",
          maskComposite: "intersect",
          maskImage: `
  repeating-linear-gradient(
        to right,
        black 0px,
        black 3px,
        transparent 3px,
        transparent 8px
      ),
      repeating-linear-gradient(
        to bottom,
        black 0px,
        black 3px,
        transparent 3px,
        transparent 8px
      ),
      radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
`,
          // biome-ignore lint/style/useNamingConvention: safe
          WebkitMaskComposite: "source-in",
          // biome-ignore lint/style/useNamingConvention: safe
          WebkitMaskImage: `
repeating-linear-gradient(
        to right,
        black 0px,
        black 3px,
        transparent 3px,
        transparent 8px
      ),
      repeating-linear-gradient(
        to bottom,
        black 0px,
        black 3px,
        transparent 3px,
        transparent 8px
      ),
      radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
`,
        }}
      />
      {props.children}
    </div>
  );
};
