"use client";

import type { ComponentPropsWithoutRef, PointerEvent } from "react";

type TiltCardProps = Omit<
  ComponentPropsWithoutRef<"article">,
  "onPointerMove" | "onPointerLeave"
>;

export function TiltCard({ children, ...props }: TiltCardProps) {
  function handleMove(event: PointerEvent<HTMLElement>) {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty("--rx", `${-y * 3}deg`);
    card.style.setProperty("--ry", `${x * 3}deg`);
  }

  function reset(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
  }

  return (
    <article
      {...props}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </article>
  );
}
