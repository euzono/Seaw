import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'Chevron', text: 'CHEVRON' },
    { name: 'Shell', text: 'SHELL' },
    { name: 'ExxonMobil', text: 'EXXONMOBIL' },
    { name: 'TotalEnergies', text: 'TOTALENERGIES' },
    { name: 'Saipem', text: 'SAIPEM' }
  ];

  return (
    <section className="clients-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle">
            Partnering with major oil & gas companies across Nigeria
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.name} className="client-card">
              <span className="client-name">{client.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
