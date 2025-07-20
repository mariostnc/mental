import React, { useState } from 'react';

function Helplines() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helplines = [
    // Romania
    {
      name: "Telefonul Copilului",
      number: "116 111",
      description: "Linie de ajutor pentru copii și adolescenți în situații de criză",
      hours: "24/7",
      category: "crisis",
      country: "Romania",
      region: "romania"
    },
    {
      name: "Centrul de Prevenire a Suicidului",
      number: "0800 801 200",
      description: "Suport pentru persoane cu gânduri suicidare și familiile lor",
      hours: "24/7",
      category: "suicide",
      country: "Romania",
      region: "romania"
    },
    {
      name: "Asociația pentru Libertățile Civile",
      number: "0800 801 227",
      description: "Suport pentru persoane LGBT+ în criză",
      hours: "Luni-Vineri 9:00-17:00",
      category: "lgbt",
      country: "Romania",
      region: "romania"
    },
    {
      name: "Centrul de Consiliere pentru Victime",
      number: "0800 801 228",
      description: "Suport pentru victimele violenței domestice",
      hours: "24/7",
      category: "domestic-violence",
      country: "Romania",
      region: "romania"
    },
    {
      name: "SOS Amici",
      number: "021 312 22 22",
      description: "Suport emoțional și consiliere pentru toate vârstele",
      hours: "Luni-Vineri 18:00-22:00",
      category: "general",
      country: "Romania",
      region: "romania"
    },

    // Europe
    {
      name: "Samaritans UK",
      number: "116 123",
      description: "Suport emoțional pentru oricine în criză",
      hours: "24/7",
      category: "crisis",
      country: "United Kingdom",
      region: "europe"
    },
    {
      name: "Crisis Text Line UK",
      number: "Text SHOUT to 85258",
      description: "Suport prin mesaje text pentru criză",
      hours: "24/7",
      category: "crisis",
      country: "United Kingdom",
      region: "europe"
    },
    {
      name: "Telefonseelsorge Germany",
      number: "0800 111 0 111",
      description: "Linie de ajutor pentru criză și suicid",
      hours: "24/7",
      category: "suicide",
      country: "Germany",
      region: "europe"
    },
    {
      name: "SOS Amitié France",
      number: "09 72 39 40 50",
      description: "Suport emoțional și prevenirea suicidului",
      hours: "24/7",
      category: "crisis",
      country: "France",
      region: "europe"
    },
    {
      name: "Telefono Azzurro Italy",
      number: "19696",
      description: "Suport pentru copii și adolescenți",
      hours: "24/7",
      category: "youth",
      country: "Italy",
      region: "europe"
    },

    // North America
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "Suport pentru prevenirea suicidului și criză",
      hours: "24/7",
      category: "suicide",
      country: "United States",
      region: "north-america"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Suport prin mesaje text pentru criză",
      hours: "24/7",
      category: "crisis",
      country: "United States",
      region: "north-america"
    },
    {
      name: "Trevor Project",
      number: "1-866-488-7386",
      description: "Suport pentru tinerii LGBT+",
      hours: "24/7",
      category: "lgbt",
      country: "United States",
      region: "north-america"
    },
    {
      name: "Crisis Services Canada",
      number: "1-833-456-4566",
      description: "Suport pentru prevenirea suicidului",
      hours: "24/7",
      category: "suicide",
      country: "Canada",
      region: "north-america"
    },
    {
      name: "Kids Help Phone Canada",
      number: "1-800-668-6868",
      description: "Suport pentru copii și adolescenți",
      hours: "24/7",
      category: "youth",
      country: "Canada",
      region: "north-america"
    },

    // Asia & Oceania
    {
      name: "Lifeline Australia",
      number: "13 11 14",
      description: "Suport pentru criză și prevenirea suicidului",
      hours: "24/7",
      category: "crisis",
      country: "Australia",
      region: "asia-oceania"
    },
    {
      name: "Beyond Blue Australia",
      number: "1300 22 4636",
      description: "Suport pentru depresie și anxietate",
      hours: "24/7",
      category: "mental-health",
      country: "Australia",
      region: "asia-oceania"
    },
    {
      name: "Lifeline New Zealand",
      number: "0800 543 354",
      description: "Suport pentru criză și prevenirea suicidului",
      hours: "24/7",
      category: "crisis",
      country: "New Zealand",
      region: "asia-oceania"
    },
    {
      name: "Befrienders Malaysia",
      number: "03-7956 8144",
      description: "Suport emoțional și prevenirea suicidului",
      hours: "24/7",
      category: "crisis",
      country: "Malaysia",
      region: "asia-oceania"
    },
    {
      name: "Lifeline India",
      number: "91-22-27546669",
      description: "Suport pentru criză și prevenirea suicidului",
      hours: "24/7",
      category: "crisis",
      country: "India",
      region: "asia-oceania"
    },

    // Africa
    {
      name: "SADAG South Africa",
      number: "0800 456 789",
      description: "Suport pentru sănătate mentală",
      hours: "8:00-20:00",
      category: "mental-health",
      country: "South Africa",
      region: "africa"
    },
    {
      name: "Lifeline South Africa",
      number: "0861 322 322",
      description: "Suport pentru criză și prevenirea suicidului",
      hours: "24/7",
      category: "crisis",
      country: "South Africa",
      region: "africa"
    },
    {
      name: "Mental Health Foundation Ghana",
      number: "+233 302 797 000",
      description: "Suport pentru sănătate mentală",
      hours: "8:00-17:00",
      category: "mental-health",
      country: "Ghana",
      region: "africa"
    },
    {
      name: "Befrienders Kenya",
      number: "+254 722 178 177",
      description: "Suport pentru prevenirea suicidului",
      hours: "24/7",
      category: "suicide",
      country: "Kenya",
      region: "africa"
    },
    {
      name: "Lifeline Nigeria",
      number: "+234 809 210 6493",
      description: "Suport pentru criză și prevenirea suicidului",
      hours: "24/7",
      category: "crisis",
      country: "Nigeria",
      region: "africa"
    },

    // South America
    {
      name: "CVV Brazil",
      number: "188",
      description: "Centro de Valorização da Vida - prevenirea suicidului",
      hours: "24/7",
      category: "suicide",
      country: "Brazil",
      region: "south-america"
    },
    {
      name: "Línea de Prevención del Suicidio Argentina",
      number: "135",
      description: "Suport pentru prevenirea suicidului",
      hours: "24/7",
      category: "suicide",
      country: "Argentina",
      region: "south-america"
    },
    {
      name: "Fundación ANAR Colombia",
      number: "01 8000 116 116",
      description: "Suport pentru copii și adolescenți",
      hours: "24/7",
      category: "youth",
      country: "Colombia",
      region: "south-america"
    },
    {
      name: "Línea de Crisis Chile",
      number: "600 360 7777",
      description: "Suport pentru criză și prevenirea suicidului",
      hours: "24/7",
      category: "crisis",
      country: "Chile",
      region: "south-america"
    },
    {
      name: "Línea de Ayuda Perú",
      number: "0800 4 1212",
      description: "Suport pentru sănătate mentală",
      hours: "24/7",
      category: "mental-health",
      country: "Peru",
      region: "south-america"
    }
  ];

  const regions = [
    { id: 'all', name: 'Toate Regiunile', icon: '🌍' },
    { id: 'romania', name: 'România', icon: '🇷🇴' },
    { id: 'europe', name: 'Europa', icon: '🇪🇺' },
    { id: 'north-america', name: 'America de Nord', icon: '🇺🇸' },
    { id: 'asia-oceania', name: 'Asia & Oceania', icon: '🌏' },
    { id: 'africa', name: 'Africa', icon: '🌍' },
    { id: 'south-america', name: 'America de Sud', icon: '🇧🇷' }
  ];

  const categories = [
    { id: 'all', name: 'Toate Categoriile', icon: '📞' },
    { id: 'crisis', name: 'Criză Generală', icon: '🚨' },
    { id: 'suicide', name: 'Prevenirea Suicidului', icon: '💔' },
    { id: 'mental-health', name: 'Sănătate Mentală', icon: '🧠' },
    { id: 'youth', name: 'Copii & Adolescenți', icon: '👶' },
    { id: 'lgbt', name: 'LGBT+', icon: '🏳️‍🌈' },
    { id: 'domestic-violence', name: 'Violență Domestică', icon: '🛡️' },
    { id: 'general', name: 'Suport General', icon: '🤝' }
  ];

  // Funcție de filtrare avansată
  const filteredHelplines = helplines.filter(helpline => {
    const matchesSearch = helpline.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         helpline.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         helpline.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         helpline.number.includes(searchTerm);
    
    const matchesRegion = selectedRegion === 'all' || helpline.region === selectedRegion;
    const matchesCategory = selectedCategory === 'all' || helpline.category === selectedCategory;
    
    return matchesSearch && matchesRegion && matchesCategory;
  });

  const getRegionIcon = (region) => {
    const reg = regions.find(r => r.id === region);
    return reg ? reg.icon : '🌍';
  };

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : '📞';
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'crisis': return '#f44336';
      case 'suicide': return '#d32f2f';
      case 'mental-health': return '#2196f3';
      case 'youth': return '#4caf50';
      case 'lgbt': return '#9c27b0';
      case 'domestic-violence': return '#ff9800';
      case 'general': return '#607d8b';
      default: return '#666';
    }
  };

  return (
    <div className="helplines-page">
      {/* Hero Section */}
      <section className="helplines-hero">
        <div className="hero-content">
          <h1>📞 Linii de Ajutor Globale</h1>
          <p>Găsește suport și ajutor în criză din întreaga lume. Aceste linii de ajutor sunt disponibile 24/7 pentru a te ajuta când ai nevoie.</p>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="emergency-notice">
        <div className="emergency-content">
          <div className="emergency-icon">🚨</div>
          <div className="emergency-text">
            <h3>URGENȚĂ - Ai nevoie de ajutor imediat?</h3>
            <p>Dacă tu sau cineva apropiat este în pericol imediat, contactează serviciile de urgență locale (112) sau mergi la cel mai apropiat spital.</p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="search-filter-section">
        <div className="search-container">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Caută după țară, nume sau număr..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="clear-search"
              >
                ✕
              </button>
            )}
          </div>
          
          <div className="filter-container">
            <div className="filter-group">
              <label className="filter-label">🌍 Regiune:</label>
              <select 
                value={selectedRegion} 
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="filter-select"
              >
                {regions.map(region => (
                  <option key={region.id} value={region.id}>
                    {region.icon} {region.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label className="filter-label">📂 Categorie:</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="search-results-info">
          <span className="results-count">
            {filteredHelplines.length} din {helplines.length} linii de ajutor găsite
          </span>
          {(searchTerm || selectedRegion !== 'all' || selectedCategory !== 'all') && (
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('all');
                setSelectedCategory('all');
              }}
              className="clear-filters"
            >
              🗑️ Șterge Filtrele
            </button>
          )}
        </div>
      </section>

      {/* Helplines Grid */}
      <section className="helplines-section">
        {filteredHelplines.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>Nu s-au găsit rezultate</h3>
            <p>Încearcă să modifici criteriile de căutare sau să ștergi filtrele</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('all');
                setSelectedCategory('all');
              }}
              className="reset-search"
            >
              Resetează Căutarea
            </button>
          </div>
        ) : (
          <div className="helplines-grid">
            {filteredHelplines.map((helpline, index) => (
              <div key={index} className="helpline-card">
                <div className="helpline-header">
                  <div className="helpline-icon">{getCategoryIcon(helpline.category)}</div>
                  <div className="helpline-info">
                    <h3 className="helpline-name">{helpline.name}</h3>
                    <div className="helpline-meta">
                      <span className="country-badge">
                        {getRegionIcon(helpline.region)} {helpline.country}
                      </span>
                      <span 
                        className="category-badge"
                        style={{backgroundColor: getCategoryColor(helpline.category)}}
                      >
                        {categories.find(c => c.id === helpline.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="helpline-number">
                  <span className="number-label">📞 Număr:</span>
                  <span className="number-value">{helpline.number}</span>
                </div>
                
                <p className="helpline-description">{helpline.description}</p>
                
                <div className="helpline-details">
                  <div className="detail-item">
                    <span className="detail-label">🕐 Program:</span>
                    <span className="detail-value">{helpline.hours}</span>
                  </div>
                </div>
                
                <div className="helpline-actions">
                  <button className="call-button" onClick={() => window.open(`tel:${helpline.number}`)}>
                    📞 Sună Acum
                  </button>
                  <button className="copy-button" onClick={() => navigator.clipboard.writeText(helpline.number)}>
                    📋 Copiază Numărul
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Additional Resources */}
      <section className="additional-resources">
        <h2>🌐 Organizații Internaționale</h2>
        <div className="organizations-grid">
          <div className="organization-card">
            <h3>🏥 World Health Organization (WHO)</h3>
            <p>Organizația Mondială a Sănătății oferă resurse și informații despre sănătatea mentală globală.</p>
            <a href="https://www.who.int/health-topics/mental-health" target="_blank" rel="noopener noreferrer" className="org-link">
              Vizitează Site-ul
            </a>
          </div>
          <div className="organization-card">
            <h3>🧠 International Association for Suicide Prevention</h3>
            <p>Organizație dedicată prevenirii suicidului și promovării sănătății mentale.</p>
            <a href="https://www.iasp.info" target="_blank" rel="noopener noreferrer" className="org-link">
              Vizitează Site-ul
            </a>
          </div>
          <div className="organization-card">
            <h3>💙 Befrienders Worldwide</h3>
            <p>Rețea globală de organizații care oferă suport emoțional și prevenirea suicidului.</p>
            <a href="https://www.befrienders.org" target="_blank" rel="noopener noreferrer" className="org-link">
              Vizitează Site-ul
            </a>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="information-section">
        <h2>ℹ️ Informații Importante</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>🔒 Confidențialitate</h3>
            <p>Toate apelurile către liniile de ajutor sunt confidențiale. Informațiile tale personale nu vor fi împărtășite fără consimțământul tău explicit.</p>
          </div>
          <div className="info-card">
            <h3>💰 Cost</h3>
            <p>Majoritatea liniilor de ajutor sunt gratuite. Verifică cu operatorul tău telefonic pentru costuri potențiale de apel.</p>
          </div>
          <div className="info-card">
            <h3>🌍 Limbi</h3>
            <p>Multe linii de ajutor oferă suport în mai multe limbi. Contactează linia pentru a afla ce limbi sunt disponibile.</p>
          </div>
          <div className="info-card">
            <h3>♿ Accesibilitate</h3>
            <p>Multe linii de ajutor oferă servicii pentru persoane cu dizabilități, inclusiv TTY și servicii de interpretare.</p>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="apps-section">
        <h2>📱 Aplicații de Suport</h2>
        <div className="apps-grid">
          <div className="app-card">
            <h3>🧘‍♀️ Headspace</h3>
            <p>Meditație și mindfulness pentru gestionarea stresului și anxietății.</p>
            <span className="app-platform">iOS • Android</span>
          </div>
          <div className="app-card">
            <h3>😌 Calm</h3>
            <p>Relaxare, somn și meditație pentru sănătatea mentală.</p>
            <span className="app-platform">iOS • Android</span>
          </div>
          <div className="app-card">
            <h3>📊 MoodTools</h3>
            <p>Instrumente pentru gestionarea depresiei și îmbunătățirea dispoziției.</p>
            <span className="app-platform">iOS • Android</span>
          </div>
          <div className="app-card">
            <h3>🆘 Crisis Text Line</h3>
            <p>Suport prin mesaje text pentru criză și prevenirea suicidului.</p>
            <span className="app-platform">iOS • Android</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Helplines; 