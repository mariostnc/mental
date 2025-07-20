import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      {/* Professional Hero Section with Unsplash Images */}
      <section className="hero-section-professional">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Mental Health Professional"
            className="hero-background-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content-professional">
          <div className="hero-text-section">
            <div className="hero-badge">
              <span className="badge-icon">🧠</span>
              <span className="badge-text">Sănătate Mentală Profesională</span>
            </div>
            
            <h1 className="hero-title-professional">
              Sănătatea Mentală este <span className="highlight">Fundamentală</span> pentru O Viață Împlinită
            </h1>
            
            <p className="hero-subtitle-professional">
              Informații științifice, resurse profesionale și suport pentru o sănătate mentală optimă. 
              Înțelegerea și gestionarea sănătății mentale este esențială pentru bunăstarea generală.
            </p>
            
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">✅</span>
                <span>Informații științifice actualizate</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✅</span>
                <span>Resurse profesionale de suport</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✅</span>
                <span>Ghiduri practice și accesibile</span>
              </div>
            </div>
            
            <div className="hero-buttons-professional">
              <Link to="/conditions" className="cta-button-primary">
                <span className="button-icon">🔬</span>
                Explorează Tulburările
              </Link>
              <Link to="/helplines" className="cta-button-secondary">
                <span className="button-icon">📞</span>
                Linii de Ajutor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section with Professional Image */}
      <section className="stats-section-professional">
        <div className="section-header-professional">
          <h2 className="section-title-professional">
            <span className="title-icon">📊</span>
            Impactul Sănătății Mentale în Cifre
          </h2>
          <p className="section-subtitle-professional">
            Statistici globale care evidențiază importanța sănătății mentale în societatea modernă
          </p>
        </div>
        
        <div className="stats-container">
          <div className="stats-chart">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Mental Health Statistics"
              className="chart-image"
            />
          </div>
          
          <div className="stats-grid-professional">
            <div className="stat-card-professional">
              <div className="stat-icon">😔</div>
              <div className="stat-content">
                <div className="stat-number-professional">264M</div>
                <div className="stat-description-professional">
                  Oameni afectați de <span className="stat-accent">depresie</span> global
                </div>
              </div>
            </div>
            
            <div className="stat-card-professional">
              <div className="stat-icon">😰</div>
              <div className="stat-content">
                <div className="stat-number-professional">284M</div>
                <div className="stat-description-professional">
                  Persoane cu <span className="stat-accent">tulburări de anxietate</span>
                </div>
              </div>
            </div>
            
            <div className="stat-card-professional">
              <div className="stat-icon">🧠</div>
              <div className="stat-content">
                <div className="stat-number-professional">20M</div>
                <div className="stat-description-professional">
                  Cazuri de <span className="stat-accent">schizofrenie</span> în lume
                </div>
              </div>
            </div>
            
            <div className="stat-card-professional">
              <div className="stat-icon">💔</div>
              <div className="stat-content">
                <div className="stat-number-professional">800K</div>
                <div className="stat-description-professional">
                  Decese prin <span className="stat-accent">sinucidere</span> anual
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Professional Images */}
      <section className="features-section-professional">
        <div className="section-header-professional">
          <h2 className="section-title-professional">
            <span className="title-icon">🌟</span>
            Serviciile Noastre
          </h2>
          <p className="section-subtitle-professional">
            Oferim resurse complete și informații actualizate pentru sănătatea mentală
          </p>
        </div>
        
        <div className="features-grid-professional">
          <div className="feature-card-professional">
            <div className="feature-image">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Mental Health Disorders"
                className="feature-img"
              />
            </div>
            <div className="feature-icon-professional">🔬</div>
            <h3>Informații Complete despre Tulburări</h3>
            <p>Ghiduri detaliate despre simptome, cauze și opțiuni de tratament pentru diverse tulburări de sănătate mentală.</p>
            <div className="feature-accent"></div>
          </div>
          
          <div className="feature-card-professional">
            <div className="feature-image">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Helpline Support"
                className="feature-img"
              />
            </div>
            <div className="feature-icon-professional">📞</div>
            <h3>Linii de Ajutor și Suport</h3>
            <p>Acces rapid la linii de ajutor, organizații de suport și resurse pentru situații de criză.</p>
            <div className="feature-accent"></div>
          </div>
          
          <div className="feature-card-professional">
            <div className="feature-image">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Professional Resources"
                className="feature-img"
              />
            </div>
            <div className="feature-icon-professional">📚</div>
            <h3>Resurse Educaționale</h3>
            <p>Materiale educaționale, cărți recomandate și aplicații mobile pentru managementul sănătății mentale.</p>
            <div className="feature-accent"></div>
          </div>
        </div>
      </section>

      {/* Prevention Section with Professional Image */}
      <section className="prevention-section-professional">
        <div className="section-header-professional">
          <h2 className="section-title-professional">
            <span className="title-icon">🛡️</span>
            Prevenirea și Managementul
          </h2>
          <p className="section-subtitle-professional">
            Strategii practice pentru menținerea sănătății mentale și prevenirea tulburărilor
          </p>
        </div>
        
        <div className="prevention-grid-professional">
          <div className="prevention-card-professional">
            <div className="prevention-image">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80" 
                alt="Meditation and Mindfulness"
                className="prevention-img"
              />
            </div>
            <div className="prevention-header">
              <div className="prevention-icon-professional">🧘</div>
              <h3>Meditație și Mindfulness</h3>
            </div>
            <div className="prevention-description">
              <p>Tehnici de meditație și mindfulness pentru reducerea stresului și îmbunătățirea concentrării.</p>
              <div className="benefits-list">
                <h4>Beneficii:</h4>
                <ul>
                  <li>Reducerea nivelului de stres</li>
                  <li>Îmbunătățirea concentrării</li>
                  <li>Reglarea emoțiilor</li>
                  <li>Îmbunătățirea calității somnului</li>
                </ul>
              </div>
            </div>
            <div className="prevention-accent"></div>
          </div>
          
          <div className="prevention-card-professional">
            <div className="prevention-image">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Professional Therapy"
                className="prevention-img"
              />
            </div>
            <div className="prevention-header">
              <div className="prevention-icon-professional">👨‍⚕️</div>
              <h3>Terapie Profesională</h3>
            </div>
            <div className="prevention-description">
              <p>Importanța terapiei profesionale și a consilierii pentru sănătatea mentală.</p>
              <div className="benefits-list">
                <h4>Beneficii:</h4>
                <ul>
                  <li>Suport profesional specializat</li>
                  <li>Strategii personalizate de coping</li>
                  <li>Înțelegerea cauzelor profunde</li>
                  <li>Monitorizarea progresului</li>
                </ul>
              </div>
            </div>
            <div className="prevention-accent"></div>
          </div>
          
          <div className="prevention-card-professional">
            <div className="prevention-image">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Healthy Lifestyle"
                className="prevention-img"
              />
            </div>
            <div className="prevention-header">
              <div className="prevention-icon-professional">🏃</div>
              <h3>Stil de Viață Sănătos</h3>
            </div>
            <div className="prevention-description">
              <p>Impactul stilului de viață asupra sănătății mentale și strategii de îmbunătățire.</p>
              <div className="benefits-list">
                <h4>Beneficii:</h4>
                <ul>
                  <li>Exerciții fizice regulate</li>
                  <li>Nutriție echilibrată</li>
                  <li>Somn de calitate</li>
                  <li>Conectare socială</li>
                </ul>
              </div>
            </div>
            <div className="prevention-accent"></div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section with Professional Image */}
      <section className="warning-signs-section-professional">
        <div className="section-header-professional">
          <h2 className="section-title-professional">
            <span className="title-icon">⚠️</span>
            Semne de Avertizare
          </h2>
          <p className="section-subtitle-professional">
            Recunoașterea semnelor de avertizare este esențială pentru intervenția timpurie
          </p>
        </div>
        
        <div className="warning-signs-grid-professional">
          <div className="warning-category-professional">
            <div className="warning-image">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Emotional Changes"
                className="warning-img"
              />
            </div>
            <div className="warning-header">
              <div className="warning-icon">😔</div>
              <h3>Schimbări Emoționale</h3>
            </div>
            <ul className="warning-signs-list">
              <li><span className="sign-bullet">•</span> Tristețe persistentă</li>
              <li><span className="sign-bullet">•</span> Irascibilitate neobișnuită</li>
              <li><span className="sign-bullet">•</span> Pierderea interesului</li>
              <li><span className="sign-bullet">•</span> Sentimente de deznădejde</li>
            </ul>
          </div>
          
          <div className="warning-category-professional">
            <div className="warning-image">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Behavioral Changes"
                className="warning-img"
              />
            </div>
            <div className="warning-header">
              <div className="warning-icon">🔄</div>
              <h3>Schimbări Comportamentale</h3>
            </div>
            <ul className="warning-signs-list">
              <li><span className="sign-bullet">•</span> Retragerea socială</li>
              <li><span className="sign-bullet">•</span> Modificări în somn</li>
              <li><span className="sign-bullet">•</span> Schimbări în apetit</li>
              <li><span className="sign-bullet">•</span> Comportament riscant</li>
            </ul>
          </div>
          
          <div className="warning-category-professional">
            <div className="warning-image">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Physical Symptoms"
                className="warning-img"
              />
            </div>
            <div className="warning-header">
              <div className="warning-icon">💊</div>
              <h3>Simptome Fizice</h3>
            </div>
            <ul className="warning-signs-list">
              <li><span className="sign-bullet">•</span> Oboseală excesivă</li>
              <li><span className="sign-bullet">•</span> Dureri inexplicabile</li>
              <li><span className="sign-bullet">•</span> Probleme digestive</li>
              <li><span className="sign-bullet">•</span> Modificări în greutate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Emergency Notice with Professional Image */}
      <div className="emergency-notice-professional">
        <div className="emergency-image">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Emergency Support"
            className="emergency-img"
          />
        </div>
        <div className="emergency-content">
          <div className="emergency-header">
            <div className="emergency-icon">🚨</div>
            <h3>Situații de Urgență</h3>
          </div>
          <p>Dacă tu sau cineva apropiat experimentează gânduri suicidare sau este într-o criză de sănătate mentală, contactează imediat serviciile de urgență.</p>
          <a href="tel:112" className="emergency-button-professional">
            📞 112 - Servicii de Urgență
          </a>
        </div>
      </div>

      {/* Resources Section with Professional Image */}
      <section className="resources-section-professional">
        <div className="section-header-professional">
          <h2 className="section-title-professional">
            <span className="title-icon">📚</span>
            Resurse și Suport
          </h2>
          <p className="section-subtitle-professional">
            Acces la resurse profesionale și organizații de suport pentru sănătatea mentală
          </p>
        </div>
        
        <div className="resources-grid-professional">
          <div className="resource-card-professional">
            <div className="resource-image">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Professional Organizations"
                className="resource-img"
              />
            </div>
            <div className="resource-icon">🏢</div>
            <h3>Organizații Profesionale</h3>
            <p>Conectare cu organizații recunoscute în domeniul sănătății mentale pentru suport și resurse.</p>
            <Link to="/helplines" className="resource-link-professional">
              Explorează Organizațiile
              <span className="link-arrow">→</span>
            </Link>
          </div>
          
          <div className="resource-card-professional">
            <div className="resource-image">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Educational Materials"
                className="resource-img"
              />
            </div>
            <div className="resource-icon">📖</div>
            <h3>Materiale Educaționale</h3>
            <p>Cărți, articole și resurse educaționale pentru înțelegerea sănătății mentale.</p>
            <Link to="/faq" className="resource-link-professional">
              Accesează Materialele
              <span className="link-arrow">→</span>
            </Link>
          </div>
          
          <div className="resource-card-professional">
            <div className="resource-image">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Support Groups"
                className="resource-img"
              />
            </div>
            <div className="resource-icon">👥</div>
            <h3>Grupuri de Sprijin</h3>
            <p>Conectare cu grupuri de sprijin și comunități pentru persoane cu experiențe similare.</p>
            <Link to="/helplines" className="resource-link-professional">
              Găsește Grupuri
              <span className="link-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Professional Image */}
      <section className="cta-section-professional">
        <div className="cta-background">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Take Action"
            className="cta-background-image"
          />
          <div className="cta-overlay"></div>
        </div>
        
        <div className="cta-content-professional">
          <div className="cta-icon">🌟</div>
          <h2>Fă Primul Pas Spre Sănătatea Mentală</h2>
          <p>Informația este primul pas către înțelegere și acțiune. Explorează resursele noastre și găsește suportul de care ai nevoie.</p>
          <div className="cta-buttons-professional">
            <Link to="/conditions" className="cta-button-primary-large">
              <span className="button-icon">🔬</span>
              Explorează Tulburările
            </Link>
            <Link to="/helplines" className="cta-button-secondary-large">
              <span className="button-icon">📞</span>
              Găsește Suport
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 