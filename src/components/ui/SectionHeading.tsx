import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  tagline,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 lg:mb-16", alignmentClass, className)}>
      {tagline && (
        <span
          className={cn(
            "text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 inline-flex items-center gap-2",
            light ? "text-[#E6C687]" : "text-[#C59A41]"
          )}
        >
          <span className="w-6 h-[2px] bg-current inline-block rounded-full" />
          {tagline}
          {align === "center" && (
            <span className="w-6 h-[2px] bg-current inline-block rounded-full" />
          )}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
