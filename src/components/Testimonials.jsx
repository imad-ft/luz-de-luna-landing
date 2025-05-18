// Testimonials.jsx
import React from 'react';

import { 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/solid';  // أيقونة تناسب علامات الاقتباس

const testimonials = [
  { text: "Great quality and fast shipping!", author: "Sarah H." },
  { text: "Amazing variety for both men and women.", author: "Omar B." },
  { text: "Excellent customer service and returns policy.", author: "Lina K." },
  { text: "The site is so easy to use, I love it!", author: "Youssef M." }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            {/* استبدال أيقونة SVG ب Heroicon */}
            <ChatBubbleLeftRightIcon className="quote-icon" />
            <p className="testimonial-text">“{t.text}”</p>
            <span className="testimonial-author">— {t.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


