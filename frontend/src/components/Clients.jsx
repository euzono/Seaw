import React from 'react';

const Clients = () => {
  const clients = [
    { 
      name: 'ExxonMobil', 
      logo: 'https://customer-assets.emergentagent.com/job_offshore-support/artifacts/7n1l1563_logo1.jpg'
    },
    { 
      name: 'Addax Petroleum', 
      logo: 'https://customer-assets.emergentagent.com/job_offshore-support/artifacts/32pbh86f_logo2.jpg'
    },
    { 
      name: 'NPDC', 
      logo: 'https://customer-assets.emergentagent.com/job_offshore-support/artifacts/dbfvvv1s_logo3.jpg'
    },
    { 
      name: 'NESOIL PLC', 
      logo: 'https://customer-assets.emergentagent.com/job_offshore-support/artifacts/tq4i9743_logo4.jpg'
    },
    { 
      name: 'West African Gas Pipeline Company', 
      logo: 'https://customer-assets.emergentagent.com/job_offshore-support/artifacts/m7yj2g8p_logo5.jpg'
    }
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
              <img 
                src={client.logo} 
                alt={client.name}
                className="client-logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
