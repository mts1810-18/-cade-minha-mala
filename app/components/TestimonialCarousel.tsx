"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  { text: "Foi a primeira vez que viajei sem ficar com vinte abas abertas. Resolveram tudo e ainda me avisaram cada próximo passo.", name: "Mariana & Caio", trip: "Lua de mel • Maceió" },
  { text: "O atendimento foi rápido, mas nunca apressado. Sentimos que o roteiro realmente foi pensado para a nossa família.", name: "Família Oliveira", trip: "Férias • Gramado" },
  { text: "Quando o voo mudou, eu já estava nervosa. A equipe assumiu a situação e me orientou até tudo estar resolvido.", name: "Bianca R.", trip: "Viagem internacional • Lisboa" },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  const move = (n: number) => setIndex((index + n + testimonials.length) % testimonials.length);
  return (
    <div className="testimonial-card" aria-live="polite">
      <Quote className="quote-icon" aria-hidden="true" />
      <blockquote>“{item.text}”</blockquote>
      <div className="testimonial-meta"><div><strong>{item.name}</strong><span>{item.trip}</span></div>
        <div className="carousel-controls"><button onClick={() => move(-1)} aria-label="Depoimento anterior"><ArrowLeft /></button><span>{String(index + 1).padStart(2, "0")} / 03</span><button onClick={() => move(1)} aria-label="Próximo depoimento"><ArrowRight /></button></div>
      </div>
    </div>
  );
}
