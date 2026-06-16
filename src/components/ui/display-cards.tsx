"use client";

import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DisplayCardProps {
  className?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles size={16} />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName,
  titleClassName,
}: DisplayCardProps) {
  return (
    <div className={cn("display-card", className)}>
      <div>
        <span className={cn("display-card-icon", iconClassName)}>{icon}</span>
        <p className={cn("display-card-title", titleClassName)}>{title}</p>
      </div>
      <p className="display-card-description">{description}</p>
      <p className="display-card-date">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards: DisplayCardProps[] = [
    { title: "ZEISS", description: "Tecnologia óptica", date: "SmartLife" },
    { title: "Boutique", description: "Curadoria premium", date: "Araguaína" },
    { title: "Google", description: "5,0 • 117 avaliações", date: "Reputação local" },
  ];

  return (
    <div className="display-cards-stage">
      {(cards || defaultCards).map((cardProps, index) => (
        <DisplayCard key={`${cardProps.title || "card"}-${index}`} {...cardProps} className={cn(`display-card-${index + 1}`, cardProps.className)} />
      ))}
    </div>
  );
}
