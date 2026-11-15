"use client";

import { KeyboardEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Foi a primeira vez que viajei sem ficar com vinte abas abertas. Resolveram tudo e ainda me avisaram cada próximo passo.",
    name: "Mariana & Caio",
    trip: "Lua de mel • Maceió",
  },
  {
    text: "O atendimento foi rápido, mas nunca apressado. Sentimos que o roteiro realmente foi pensado para a nossa família.",
    name: "Família Oliveira",
    trip: "Férias • Gramado",
  },
  {
    text: "Quando o voo mudou, eu já estava nervosa. A equipe assumiu a situação e me orientou até tudo estar resolvido.",
    name: "Bianca R.",
    trip: "Viagem internacional • Lisboa",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  const total = String(testimonials.length).padStart(2, "0");

  const move = (n: number) =>
    setIndex((prev) => (prev + n + testimonials.length) % testimonials.length);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  }

  return (
    <div
      className="testimonial-card"
      aria-live="polite"
      onKeyDown={onKeyDown}
    >
      <Quote className="quote-icon" aria-hidden="true" />
      <blockquote>“{item.text}”</blockquote>
      <div className="testimonial-meta">
        <div>
          <strong>{item.name}</strong>
          <span>{item.trip}</span>
        </div>
        <div className="carousel-right">
          <div className="carousel-dots" role="tablist" aria-label="Selecionar relato">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ver relato ${i + 1}: ${t.name}`}
                className={i === index ? "dot active" : "dot"}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="carousel-controls">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Relato anterior"
            >
              <ArrowLeft />
            </button>
            <span>
              {String(index + 1).padStart(2, "0")} / {total}
            </span>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Próximo relato"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
