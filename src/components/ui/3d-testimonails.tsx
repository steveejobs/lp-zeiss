"use client";

import React, { ComponentPropsWithoutRef, useMemo, useRef } from "react";
import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  autoFill?: boolean;
  ariaLabel?: string;
  ariaLive?: "off" | "polite" | "assertive";
  ariaRole?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ariaLabel,
  ariaLive = "off",
  ariaRole = "marquee",
  ...props
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      {...props}
      ref={marqueeRef}
      data-slot="marquee"
      data-vertical={vertical ? "true" : "false"}
      className={cn("marquee-root", className)}
      aria-label={ariaLabel}
      aria-live={ariaLive}
      role={ariaRole}
      tabIndex={0}
    >
      {useMemo(
        () => (
          <>
            {Array.from({ length: repeat }, (_, index) => (
              <div
                key={index}
                className={cn(
                  "marquee-content",
                  vertical ? "is-vertical" : "is-horizontal",
                  pauseOnHover && "pause-on-hover",
                  reverse && "is-reverse",
                )}
              >
                {children}
              </div>
            ))}
          </>
        ),
        [repeat, children, vertical, pauseOnHover, reverse],
      )}
    </div>
  );
}

const avatarImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=96&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=96&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=96&q=80",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function splitColumns(items: Testimonial[], count: number) {
  return Array.from({ length: count }, (_, columnIndex) =>
    items.filter((_, itemIndex) => itemIndex % count === columnIndex),
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <Card className="zeiss-3d-testimonial-card">
      <CardContent className="zeiss-3d-testimonial-content">
        <div className="zeiss-3d-testimonial-topline">
          <Avatar className="zeiss-3d-avatar">
            <AvatarImage src={avatarImages[index % avatarImages.length]} alt="" />
            <AvatarFallback>{initials(testimonial.name)}</AvatarFallback>
          </Avatar>
          <div>
            <figcaption>{testimonial.name}</figcaption>
            <span>{testimonial.source} | {testimonial.theme}</span>
          </div>
        </div>
        <span className="zeiss-3d-stars" aria-label="5 de 5 estrelas">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star key={starIndex} size={12} fill="currentColor" aria-hidden="true" />
          ))}
        </span>
        <blockquote>{testimonial.text}</blockquote>
      </CardContent>
    </Card>
  );
}

export function Testimonial3DMarquee({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const desktopColumns = splitColumns(testimonials, 4);
  const mobileRows = splitColumns(testimonials, 2);

  return (
    <div className="zeiss-3d-testimonials" aria-label="Depoimentos em movimento">
      <ul className="sr-only">
        {testimonials.map((testimonial) => (
          <li key={testimonial.name}>
            {testimonial.text} {testimonial.name}. Origem: {testimonial.source}.
          </li>
        ))}
      </ul>

      <div className="zeiss-3d-testimonials-desktop" aria-hidden="true">
        <div className="zeiss-3d-testimonials-tilt">
          {desktopColumns.map((column, columnIndex) => (
            <Marquee
              key={columnIndex}
              vertical
              pauseOnHover
              reverse={columnIndex % 2 === 1}
              repeat={4}
              className="zeiss-3d-column"
            >
              {column.map((testimonial, itemIndex) => (
                <TestimonialCard
                  key={`${testimonial.name}-${columnIndex}`}
                  testimonial={testimonial}
                  index={columnIndex + itemIndex}
                />
              ))}
            </Marquee>
          ))}
        </div>
      </div>

      <div className="zeiss-3d-testimonials-mobile" aria-hidden="true">
        {mobileRows.map((row, rowIndex) => (
          <Marquee
            key={rowIndex}
            pauseOnHover
            reverse={rowIndex % 2 === 1}
            repeat={4}
            className="zeiss-3d-mobile-row"
          >
            {row.map((testimonial, itemIndex) => (
              <TestimonialCard
                key={`${testimonial.name}-mobile-${rowIndex}`}
                testimonial={testimonial}
                index={rowIndex + itemIndex}
              />
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
}
