// About.jsx
import React from 'react';

import {
  CheckCircleIcon,
  AdjustmentsHorizontalIcon,
  UserCircleIcon,
  CreditCardIcon,
  ChartBarIcon,
  CubeIcon,
  PencilSquareIcon,
  BellAlertIcon,
} from '@heroicons/react/24/solid';

const features = [
  {
    title: 'Customizable Pages',
    icon: CubeIcon,
    items: [
      'Home, category & product pages',
      'Brand‑specific layouts',
      'Dynamic content blocks',
    ],
  },
  {
    title: 'Advanced Filtering',
    icon: AdjustmentsHorizontalIcon,
    items: [
      'Filter by color, size & price',
      'Multi‑select categories',
      'Instant results',
    ],
  },
  {
    title: 'User Accounts',
    icon: UserCircleIcon,
    items: [
      'Secure signup & login',
      'Order history & profiles',
      'Wishlists',
    ],
  },
  {
    title: 'Smart Cart & Discounts',
    icon: CreditCardIcon,
    items: [
      'Quantity controls',
      'Apply promo codes',
      'Real‑time total updates',
    ],
  },
];

const adminTools = [
  { title: 'Product Management', icon: PencilSquareIcon },
  { title: 'Order Processing', icon: ChartBarIcon },
  { title: 'Low‑Stock Alerts', icon: BellAlertIcon },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Luz De Luna</h2>

        <div className="features-grid">
          {features.map(({ title, icon: Icon, items }) => (
            <div key={title} className="card">
              <div className="card-header">
                <Icon className="card-icon" />
                <h3 className="card-title">{title}</h3>
              </div>
              <ul className="card-list">
                {items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="dashboard-title">Admin Dashboard</h3>
        <div className="tools-grid">
          {adminTools.map(({ title, icon: Icon }) => (
            <div key={title} className="tool-card">
              <Icon className="tool-icon" />
              <span className="tool-title">{title}</span>
            </div>
          ))}
        </div>

        <div className="tech-footer">
          <p><strong>Backend:</strong> Django for robust data modeling, security, and order processing.</p>
          <p><strong>Frontend:</strong> React + Redux for a fast, dynamic UI.</p>
          <p><strong>Responsive:</strong> Mobile‑first design that adapts to all screen sizes.</p>
        </div>
      </div>
    </section>
);
}

