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
    },
    { 
      name: 'Shell Petroleum', 
      text: 'SHELL PETROLEUM',
      isPlaceholder: true
    },
    { 
      name: 'Chevron Nigeria', 
      text: 'CHEVRON NIGERIA',
      isPlaceholder: true
    },
    { 
      name: 'Total Energies', 
      text: 'TOTAL ENERGIES',
      isPlaceholder: true
    },
    { 
      name: 'Agip Oil Company', 
      text: 'AGIP OIL COMPANY',
      isPlaceholder: true
    },
    { 
      name: 'Oando PLC', 
      text: 'OANDO PLC',
      isPlaceholder: true
    },
    { 
      name: 'Seplat Energy', 
      text: 'SEPLAT ENERGY',
      isPlaceholder: true
    },
    { 
      name: 'First E&P', 
      text: 'FIRST E&P',
      isPlaceholder: true
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
              {client.isPlaceholder ? (
                <span className="client-name">{client.text}</span>
              ) : (
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="client-logo-image"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
