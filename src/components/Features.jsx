
const features = [
  { icon: 'bx bx-filter-alt',       title: 'Advanced Filters',   desc: 'Category, price, color & size sliders.' },
  { icon: 'bx bx-mobile-alt',       title: 'Responsive Design',  desc: 'Perfect experience on all devices.' },
  { icon: 'bx bx-credit-card',      title: 'Secure Payments',    desc: 'Integrated Stripe & PayPal.' },
  { icon: 'bx bx-cog',              title: 'Customizable',       desc: 'Dedicated Men’s & Women’s pages.' },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Key Features</h2>
        <div className="feature-grid">
          {features.map(f => (
            <div key={f.title} className="feature-card">
              <i className={`feature-icon ${f.icon}`}></i>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
