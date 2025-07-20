import React, { useState } from 'react';

function Conditions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Funcție pentru deschiderea modalului
  const openModal = (condition) => {
    setSelectedCondition(condition);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Previne scroll pe background
  };

  // Funcție pentru închiderea modalului
  const closeModal = () => {
    setShowModal(false);
    setSelectedCondition(null);
    document.body.style.overflow = 'unset'; // Restaurează scroll
  };

  // Funcție pentru închiderea modalului la click în afara conținutului
  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Funcție pentru închiderea modalului cu ESC
  React.useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [showModal]);

  // Funcție pentru obținerea imaginii SVG în funcție de categorie
  const getCategoryImage = (category) => {
    const imageMap = {
      'mood': '/images/depression.svg',
      'anxiety': '/images/anxiety.svg',
      'psychotic': '/images/psychologist.svg',
      'personality': '/images/psychologist.svg',
      'trauma': '/images/crisis.svg',
      'eating': '/images/anxiety.svg'
    };
    return imageMap[category] || '/images/psychologist.svg';
  };

  // Date pentru resurse recomandate
  const recommendedResources = {
    books: [
      {
        title: "The Body Keeps the Score",
        author: "Bessel van der Kolk",
        description: "Cum trauma afectează creierul, mintea și corpul",
        category: "trauma",
        link: "https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748"
      },
      {
        title: "Lost Connections",
        author: "Johann Hari",
        description: "Cauzele reale ale depresiei și soluțiile neașteptate",
        category: "mood",
        link: "https://www.amazon.com/Lost-Connections-Uncovering-Depression-Unexpected/dp/1632868318"
      },
      {
        title: "The Noonday Demon",
        author: "Andrew Solomon",
        description: "Un atlas al depresiei",
        category: "mood",
        link: "https://www.amazon.com/Noonday-Demon-Atlas-Depression/dp/1501123881"
      },
      {
        title: "An Unquiet Mind",
        author: "Kay Redfield Jamison",
        description: "Memoriile unui psihiatru cu tulburare bipolară",
        category: "mood",
        link: "https://www.amazon.com/Unquiet-Mind-Memoir-Moods-Madness/dp/0679763309"
      },
      {
        title: "The Anxiety and Phobia Workbook",
        author: "Edmund J. Bourne",
        description: "Exerciții practice pentru anxietate",
        category: "anxiety",
        link: "https://www.amazon.com/Anxiety-Phobia-Workbook-Edmund-Bourne/dp/1626252158"
      }
    ],
    apps: [
      {
        name: "Headspace",
        description: "Meditație și mindfulness",
        category: "anxiety",
        platform: "iOS/Android",
        link: "https://www.headspace.com/",
        icon: "🧘"
      },
      {
        name: "Calm",
        description: "Relaxare și îmbunătățirea somnului",
        category: "anxiety",
        platform: "iOS/Android",
        link: "https://www.calm.com/",
        icon: "😌"
      },
      {
        name: "MoodTools",
        description: "Suport pentru depresie",
        category: "mood",
        platform: "iOS/Android",
        link: "https://moodtools.org/",
        icon: "📊"
      },
      {
        name: "PTSD Coach",
        description: "Suport pentru TSPT",
        category: "trauma",
        platform: "iOS/Android",
        link: "https://www.ptsd.va.gov/appvid/mobile/ptsdcoach_app.asp",
        icon: "🛡️"
      },
      {
        name: "Woebot",
        description: "Terapie cognitiv-comportamentală",
        category: "mood",
        platform: "iOS/Android",
        link: "https://woebot.io/",
        icon: "🤖"
      },
      {
        name: "Sanvello",
        description: "Managementul stresului și anxietății",
        category: "anxiety",
        platform: "iOS/Android",
        link: "https://www.sanvello.com/",
        icon: "🌿"
      }
    ],
    organizations: [
      {
        name: "World Health Organization",
        description: "Resurse globale pentru sănătate mentală",
        link: "https://www.who.int/health-topics/mental-health",
        icon: "🌍"
      },
      {
        name: "National Institute of Mental Health",
        description: "Informații științifice și resurse",
        link: "https://www.nimh.nih.gov/",
        icon: "🔬"
      },
      {
        name: "Mental Health Foundation",
        description: "Suport și educație",
        link: "https://www.mentalhealth.org.uk/",
        icon: "💙"
      },
      {
        name: "Psychology Today",
        description: "Articole și ghiduri",
        link: "https://www.psychologytoday.com/",
        icon: "📚"
      },
      {
        name: "Befrienders Worldwide",
        description: "Suport pentru prevenirea suicidului",
        link: "https://www.befrienders.org/",
        icon: "🤝"
      }
    ],
    supportGroups: [
      {
        name: "Depression and Bipolar Support Alliance",
        description: "Grupuri de sprijin pentru tulburări de dispoziție",
        category: "mood",
        link: "https://www.dbsalliance.org/",
        icon: "💙"
      },
      {
        name: "Anxiety and Depression Association",
        description: "Suport pentru anxietate și depresie",
        category: "anxiety",
        link: "https://adaa.org/",
        icon: "😰"
      },
      {
        name: "National Alliance on Mental Illness",
        description: "Suport pentru familii și persoane cu boli mentale",
        category: "all",
        link: "https://www.nami.org/",
        icon: "🏠"
      },
      {
        name: "Mental Health America",
        description: "Resurse și suport comunitate",
        category: "all",
        link: "https://www.mhanational.org/",
        icon: "🌟"
      }
    ]
  };

  // Funcție pentru deschiderea link-urilor
  const openResourceLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Funcție pentru copierea link-ului în clipboard
  const copyResourceLink = async (url, resourceName) => {
    try {
      await navigator.clipboard.writeText(url);
      alert(`Link-ul pentru ${resourceName} a fost copiat în clipboard!`);
    } catch (err) {
      console.error('Eroare la copierea link-ului:', err);
      alert('Nu s-a putut copia link-ul. Încearcă să îl deschizi manual.');
    }
  };

  // Funcție pentru obținerea resurselor relevante pentru categoria bolii
  const getRelevantResources = (category) => {
    return {
      books: recommendedResources.books.filter(book => 
        book.category === category || book.category === 'all'
      ).slice(0, 3),
      apps: recommendedResources.apps.filter(app => 
        app.category === category || app.category === 'all'
      ).slice(0, 3),
      organizations: recommendedResources.organizations.slice(0, 3),
      supportGroups: recommendedResources.supportGroups.filter(group => 
        group.category === category || group.category === 'all'
      ).slice(0, 2)
    };
  };

  const mentalHealthConditions = [
    {
      name: "Depresia Majoră",
      category: "mood",
      description: "O tulburare de dispoziție care cauzează o stare persistentă de tristețe și pierderea interesului pentru activitățile normale.",
      symptoms: [
        "Tristețe persistentă mai mult de 2 săptămâni",
        "Pierderea interesului pentru activități plăcute",
        "Probleme de somn (insomnie sau somn excesiv)",
        "Modificări în apetit și greutate",
        "Sentimente de deznădejde și inutilitate",
        "Dificultăți de concentrare și luarea deciziilor",
        "Gânduri despre moarte sau sinucidere",
        "Pierderea energiei și oboseala excesivă"
      ],
      causes: [
        "Factori genetici și biologici",
        "Dezechilibre chimice în creier",
        "Traume și evenimente stresante",
        "Condiții medicale cronice",
        "Consum de alcool sau droguri",
        "Izolare socială"
      ],
      treatment: [
        "Terapie cognitiv-comportamentală (CBT)",
        "Medicamente antidepresive (SSRI, SNRI)",
        "Terapie interpersonală",
        "Terapie prin activitate",
        "Suport social și familial",
        "Modificări ale stilului de viață"
      ],
      statistics: "Afectează aproximativ 264 milioane de oameni global, fiind cauza principală de dizabilitate în lume.",
      severity: "Moderată - Severă"
    },
    {
      name: "Tulburarea de Anxietate Generalizată (TAG)",
      category: "anxiety",
      description: "O tulburare caracterizată prin neliniște și îngrijorare excesivă despre evenimente și activități zilnice.",
      symptoms: [
        "Neliniște excesivă și îngrijorare persistentă",
        "Tensiune musculară și dureri",
        "Probleme de concentrare și memorie",
        "Palpitații și transpirație excesivă",
        "Tremururi și senzații de amețeală",
        "Probleme de somn",
        "Iritabilitate",
        "Senzații de sufocare"
      ],
      causes: [
        "Predispoziție genetică",
        "Dezechilibre în neurotransmițători",
        "Experiențe traumatice din copilărie",
        "Stres cronic",
        "Condiții medicale",
        "Consum de cafeină și stimulente"
      ],
      treatment: [
        "Terapie cognitiv-comportamentală",
        "Medicamente anxiolitice (benzodiazepine)",
        "Antidepresive (SSRI)",
        "Tehnici de relaxare și respirație",
        "Meditație și mindfulness",
        "Exerciții fizice regulate"
      ],
      statistics: "Afectează 6-7% din populația adultă la un moment dat în viață.",
      severity: "Moderată"
    },
    {
      name: "Tulburarea Bipolară",
      category: "mood",
      description: "O tulburare care cauzează schimbări extreme ale dispoziției, de la episoade maniacale la episoade depresive.",
      symptoms: [
        "Episoade maniacale: energie excesivă, vorbire rapidă, gânduri accelerate",
        "Episoade depresive: tristețe profundă, pierderea interesului",
        "Schimbări rapide ale dispoziției",
        "Comportament impulsiv și riscant",
        "Probleme de somn",
        "Delirii de măreție (în manie)",
        "Gânduri suicidare (în depresie)",
        "Dificultăți în relații și muncă"
      ],
      causes: [
        "Factori genetici puternici",
        "Dezechilibre chimice în creier",
        "Traume și stres major",
        "Consum de droguri",
        "Probleme de somn",
        "Evenimente de viață stresante"
      ],
      treatment: [
        "Stabilizatori de dispoziție (litiu, valproat)",
        "Antipsihotice atipice",
        "Terapie cognitiv-comportamentală",
        "Terapie familială",
        "Educație despre boală",
        "Suport social și grupurile de sprijin"
      ],
      statistics: "Afectează aproximativ 1-3% din populația adultă global.",
      severity: "Severă"
    },
    {
      name: "Schizofrenia",
      category: "psychotic",
      description: "O tulburare psihotică care afectează modul în care o persoană gândește, simte și se comportă.",
      symptoms: [
        "Halucinații (auditive, vizuale, tactil)",
        "Delirii (crezuri false persistente)",
        "Gândire dezorganizată și vorbire confuză",
        "Comportament anormal și imprevizibil",
        "Retragere socială și izolare",
        "Afectivitate împănjenită",
        "Pierderea motivației",
        "Probleme cognitive (memorie, atenție)"
      ],
      causes: [
        "Factori genetici complexi",
        "Dezechilibre în dopamină și glutamat",
        "Complicații în timpul sarcinii și nașterii",
        "Traume cerebrale",
        "Consum de droguri (marijuana, LSD)",
        "Stres social și economic"
      ],
      treatment: [
        "Medicamente antipsihotice (tipice și atipice)",
        "Terapie psihosocială",
        "Reabilitare cognitivă",
        "Suport familial și educație",
        "Servicii de suport comunitare",
        "Tratament pentru comorbidități"
      ],
      statistics: "Afectează aproximativ 20 milioane de oameni global (0.3-0.7% din populație).",
      severity: "Foarte Severă"
    },
    {
      name: "Tulburarea Obsesiv-Compulsivă (TOC)",
      category: "anxiety",
      description: "O tulburare caracterizată prin gânduri intrusive (obsesii) și comportamente repetitive (compulsii).",
      symptoms: [
        "Gânduri obsedante intrusive și nedorite",
        "Comportamente compulsive repetitive",
        "Anxietate intensă dacă ritualurile nu sunt efectuate",
        "Perfecționism excesiv",
        "Verificări repetate",
        "Ritualuri de curățenie",
        "Gânduri despre simetrie și ordine",
        "Timp excesiv petrecut cu ritualuri"
      ],
      causes: [
        "Dezechilibre în serotonina",
        "Anomalii în funcționarea cerebrală",
        "Factori genetici",
        "Traume și stres",
        "Infecții (PANDAS)",
        "Dezvoltare anormală a creierului"
      ],
      treatment: [
        "Terapie cognitiv-comportamentală cu expunere",
        "Medicamente antidepresive (SSRI)",
        "Terapie de acceptare și angajament",
        "Tehnici de management al anxietății",
        "Suport familial",
        "Grupuri de sprijin"
      ],
      statistics: "Afectează 1-2% din populația adultă global.",
      severity: "Moderată - Severă"
    },
    {
      name: "Tulburarea de Stres Post-Traumatic (TSPT)",
      category: "trauma",
      description: "O tulburare care se dezvoltă după expunerea la un eveniment traumatic sau înfricoșător.",
      symptoms: [
        "Flashback-uri și amintiri intrusive",
        "Coșmaruri și probleme de somn",
        "Evitarea situațiilor care amintesc trauma",
        "Hipervigilență și reacții exagerate",
        "Sentimente de detașare și insensibilitate",
        "Iritabilitate și agresivitate",
        "Probleme de concentrare",
        "Senzații fizice de stres"
      ],
      causes: [
        "Expunerea la evenimente traumatice",
        "Traume din copilărie",
        "Război și conflict armat",
        "Accidente și dezastre naturale",
        "Violență și abuz",
        "Predispoziție genetică"
      ],
      treatment: [
        "Terapie cognitiv-comportamentală focalizată pe traumă",
        "Terapie de procesare cognitivă",
        "EMDR (Eye Movement Desensitization and Reprocessing)",
        "Medicamente antidepresive",
        "Terapie de grup",
        "Tehnici de grounding și mindfulness"
      ],
      statistics: "Afectează 3.5% din populația adultă din SUA și similar global.",
      severity: "Moderată - Severă"
    },
    {
      name: "Tulburarea de Panică",
      category: "anxiety",
      description: "O tulburare caracterizată prin atacuri de panică recurente și neașteptate.",
      symptoms: [
        "Atacuri de panică intense și neașteptate",
        "Palpitații și bătăi de inimă rapide",
        "Senzații de sufocare și dispnee",
        "Tremururi și transpirație",
        "Senzații de amețeală și instabilitate",
        "Frică de a pierde controlul sau de a înnebuni",
        "Senzații de derealizare",
        "Frică de moarte iminentă"
      ],
      causes: [
        "Dezechilibre în sistemul nervos autonom",
        "Predispoziție genetică",
        "Stres major și traume",
        "Consum de stimulente",
        "Condiții medicale",
        "Abuz de substanțe"
      ],
      treatment: [
        "Terapie cognitiv-comportamentală",
        "Medicamente antidepresive (SSRI)",
        "Benzodiazepine pentru cazuri acute",
        "Tehnici de respirație",
        "Expoziție graduală",
        "Managementul stresului"
      ],
      statistics: "Afectează 2-3% din populația adultă la un moment dat în viață.",
      severity: "Moderată"
    },
    {
      name: "Tulburarea de Personalitate Borderline",
      category: "personality",
      description: "O tulburare de personalitate caracterizată prin instabilitate emoțională, relații intense și comportament impulsiv.",
      symptoms: [
        "Instabilitate emoțională intensă",
        "Relații instabile și intense",
        "Comportament impulsiv și riscant",
        "Auto-vătămare și amenințări suicidare",
        "Sentimente de vid și plictiseală",
        "Ira intensă și dificultăți în gestionarea ei",
        "Senzații de paranoia temporară",
        "Schimbări rapide ale identității"
      ],
      causes: [
        "Factori genetici",
        "Traume din copilărie (abuz, neglijare)",
        "Dezvoltare anormală a creierului",
        "Probleme în atașamentul timpuriu",
        "Stres familial",
        "Factori de mediu"
      ],
      treatment: [
        "Terapie dialectică comportamentală (DBT)",
        "Terapie cognitiv-comportamentală",
        "Terapie focalizată pe mentalizare",
        "Medicamente pentru simptome specifice",
        "Suport familial",
        "Grupuri de sprijin"
      ],
      statistics: "Afectează 1.6% din populația adultă din SUA.",
      severity: "Severă"
    },
    {
      name: "Tulburarea de Personalitate Narcisistică",
      category: "personality",
      description: "O tulburare caracterizată prin sentimente exagerate de importanță personală și nevoia de admirație.",
      symptoms: [
        "Sentimente exagerate de importanță personală",
        "Fantezii despre succes, putere și frumusețe",
        "Credința că este special și unic",
        "Nevoia excesivă de admirație",
        "Sentimente de îndreptățire",
        "Exploatarea altora",
        "Lipsa empatiei",
        "Envie față de alții"
      ],
      causes: [
        "Dezvoltare anormală în copilărie",
        "Părinți care exagerează realizările copilului",
        "Traume și abuz",
        "Factori genetici",
        "Influențe culturale",
        "Experiențe de viață"
      ],
      treatment: [
        "Psihoterapie pe termen lung",
        "Terapie cognitiv-comportamentală",
        "Terapie de grup",
        "Medicamente pentru comorbidități",
        "Suport familial",
        "Educație despre boală"
      ],
      statistics: "Afectează 0.5-1% din populația generală.",
      severity: "Moderată - Severă"
    },
    {
      name: "Tulburarea de Personalitate Antisocială",
      category: "personality",
      description: "O tulburare caracterizată prin lipsa respectului pentru drepturile altora și comportament antisocial persistent.",
      symptoms: [
        "Lipsa respectului pentru drepturile altora",
        "Comportament antisocial persistent",
        "Lipsa remușcărilor",
        "Comportament impulsiv",
        "Agresivitate și violență",
        "Lipsa responsabilității",
        "Minciuni și manipulare",
        "Probleme legale recurente"
      ],
      causes: [
        "Factori genetici puternici",
        "Traume din copilărie",
        "Abuz și neglijare",
        "Dezvoltare anormală a creierului",
        "Factori de mediu",
        "Probleme de atașament"
      ],
      treatment: [
        "Terapie cognitiv-comportamentală",
        "Programe de reabilitare",
        "Managementul comportamentului",
        "Suport familial",
        "Intervenții timpurii",
        "Programe de prevenție"
      ],
      statistics: "Afectează 1-4% din populația generală, mai frecvent la bărbați.",
      severity: "Severă"
    },
    {
      name: "Tulburarea de Alimentație Anorexică",
      category: "eating",
      description: "O tulburare caracterizată prin restricționarea severă a alimentației și frica intensă de a câștiga greutate.",
      symptoms: [
        "Restricționarea severă a alimentației",
        "Frica intensă de a câștiga greutate",
        "Percepția distorsionată a corpului",
        "Pierderea excesivă de greutate",
        "Amenoreea (lipsa menstruației)",
        "Exerciții fizice excesive",
        "Comportamente compulsive legate de mâncare",
        "Izolare socială"
      ],
      causes: [
        "Factori genetici",
        "Presiuni culturale și sociale",
        "Traume și abuz",
        "Perfecționism și control",
        "Probleme de atașament",
        "Factori biologici"
      ],
      treatment: [
        "Terapie cognitiv-comportamentală",
        "Terapie familială",
        "Suport nutrițional",
        "Monitorizare medicală",
        "Medicamente pentru comorbidități",
        "Grupuri de sprijin"
      ],
      statistics: "Afectează 0.3-1% din femeile tinere și adolescenți.",
      severity: "Foarte Severă"
    },
    {
      name: "Tulburarea de Alimentație Bulimică",
      category: "eating",
      description: "O tulburare caracterizată prin episoade de mâncat excesiv urmate de comportamente compensatorii.",
      symptoms: [
        "Episoade de mâncat excesiv",
        "Comportamente compensatorii (vărsături, laxative)",
        "Preocuparea excesivă cu greutatea și forma corpului",
        "Sentimente de pierdere controlului",
        "Comportament secretiv",
        "Fluctuații în greutate",
        "Probleme dentare",
        "Dezechilibre electrolitici"
      ],
      causes: [
        "Factori genetici",
        "Presiuni sociale și culturale",
        "Traume și abuz",
        "Probleme de autoestima",
        "Factori biologici",
        "Influențe familiale"
      ],
      treatment: [
        "Terapie cognitiv-comportamentală",
        "Terapie interpersonală",
        "Suport nutrițional",
        "Monitorizare medicală",
        "Medicamente antidepresive",
        "Grupuri de sprijin"
      ],
      statistics: "Afectează 1-2% din femeile tinere și adolescenți.",
      severity: "Severă"
    }
  ];

  const categories = [
    { id: 'all', name: 'Toate Categoriile', icon: '🏥' },
    { id: 'mood', name: 'Tulburări de Dispoziție', icon: '😔' },
    { id: 'anxiety', name: 'Tulburări de Anxietate', icon: '😰' },
    { id: 'psychotic', name: 'Tulburări Psihotice', icon: '🧠' },
    { id: 'personality', name: 'Tulburări de Personalitate', icon: '👤' },
    { id: 'trauma', name: 'Tulburări Post-Traumatice', icon: '💔' },
    { id: 'eating', name: 'Tulburări de Alimentație', icon: '🍽️' }
  ];

  const severityLevels = [
    { id: 'all', name: 'Toate Severitățile', color: '#666' },
    { id: 'mild', name: 'Ușoară', color: '#4caf50' },
    { id: 'moderate', name: 'Moderată', color: '#ff9800' },
    { id: 'severe', name: 'Severă', color: '#f44336' }
  ];

  // Funcție de filtrare avansată
  const filteredConditions = mentalHealthConditions.filter(condition => {
    const matchesSearch = condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         condition.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         condition.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || condition.category === selectedCategory;
    const matchesSeverity = selectedSeverity === 'all' || 
                           condition.severity.toLowerCase().includes(selectedSeverity);
    
    return matchesSearch && matchesCategory && matchesSeverity;
  });

  const getSeverityColor = (severity) => {
    if (severity.toLowerCase().includes('ușoară') || severity.toLowerCase().includes('mild')) return '#4caf50';
    if (severity.toLowerCase().includes('moderată') || severity.toLowerCase().includes('moderate')) return '#ff9800';
    if (severity.toLowerCase().includes('severă') || severity.toLowerCase().includes('severe')) return '#f44336';
    return '#666';
  };

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : '🏥';
  };

  return (
    <div className="conditions-page">
      {/* Hero Section */}
      <section className="conditions-hero">
        <div className="hero-content">
          <h1>🔬 Tulburări de Sănătate Mentală</h1>
          <p>Informații științifice complete despre tulburările de sănătate mentală, simptome, cauze și opțiuni de tratament</p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="search-filter-section">
        <div className="search-container">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Caută după nume, simptome sau descriere..."
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
            
            <div className="filter-group">
              <label className="filter-label">⚠️ Severitate:</label>
              <select 
                value={selectedSeverity} 
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="filter-select"
              >
                {severityLevels.map(level => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="search-results-info">
          <span className="results-count">
            {filteredConditions.length} din {mentalHealthConditions.length} tulburări găsite
          </span>
          {(searchTerm || selectedCategory !== 'all' || selectedSeverity !== 'all') && (
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedSeverity('all');
              }}
              className="clear-filters"
            >
              🗑️ Șterge Filtrele
            </button>
          )}
        </div>
      </section>

      {/* Disorders Section */}
      <section className="disorders-section">
        {filteredConditions.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>Nu s-au găsit rezultate</h3>
            <p>Încearcă să modifici criteriile de căutare sau să ștergi filtrele</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedSeverity('all');
              }}
              className="reset-search"
            >
              Resetează Căutarea
            </button>
          </div>
        ) : (
          <div className="disorders-grid">
            {filteredConditions.map((condition, index) => (
              <div 
                key={index} 
                className="disorder-card clickable"
                onClick={() => openModal(condition)}
              >
                <div className="disorder-header">
                  <div className="disorder-image">
                    <img 
                      src={getCategoryImage(condition.category)} 
                      alt={condition.name}
                      className="category-image"
                    />
                  </div>
                  <div className="disorder-info">
                    <h3 className="disorder-name">{condition.name}</h3>
                    <div className="disorder-meta">
                      <span className="category-badge">
                        {categories.find(c => c.id === condition.category)?.name}
                      </span>
                      <span 
                        className="severity-badge"
                        style={{backgroundColor: getSeverityColor(condition.severity)}}
                      >
                        {condition.severity}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="disorder-description">{condition.description}</p>
                
                <div className="disorder-preview">
                  <div className="preview-section">
                    <h4>🩺 Simptome principale:</h4>
                    <ul className="preview-list">
                      {condition.symptoms.slice(0, 3).map((symptom, idx) => (
                        <li key={idx}>{symptom}</li>
                      ))}
                      {condition.symptoms.length > 3 && (
                        <li className="more-indicator">... și {condition.symptoms.length - 3} mai multe</li>
                      )}
                    </ul>
                  </div>
                </div>
                
                <div className="disorder-footer">
                  <div className="statistics">
                    <span className="stats-icon">📊</span>
                    <span>{condition.statistics}</span>
                  </div>
                  <button className="view-details-btn">
                    Vezi Detalii Complete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal pentru detalii complete */}
      {showModal && selectedCondition && (
        <div className="modal-overlay" onClick={handleModalBackdropClick}>
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title-section">
                <img 
                  src={getCategoryImage(selectedCondition.category)} 
                  alt={selectedCondition.name}
                  className="modal-image"
                />
                <div className="modal-title-info">
                  <h2 className="modal-title">{selectedCondition.name}</h2>
                  <div className="modal-meta">
                    <span className="modal-category">
                      {categories.find(c => c.id === selectedCondition.category)?.name}
                    </span>
                    <span 
                      className="modal-severity"
                      style={{backgroundColor: getSeverityColor(selectedCondition.severity)}}
                    >
                      {selectedCondition.severity}
                    </span>
                  </div>
                </div>
              </div>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-description">
                <h3>📋 Descriere</h3>
                <p>{selectedCondition.description}</p>
              </div>

              <div className="modal-sections">
                <div className="modal-section">
                  <h3>🩺 Simptome</h3>
                  <ul className="modal-list">
                    {selectedCondition.symptoms.map((symptom, idx) => (
                      <li key={idx}>{symptom}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>🔍 Cauze</h3>
                  <ul className="modal-list">
                    {selectedCondition.causes.map((cause, idx) => (
                      <li key={idx}>{cause}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>💊 Tratament</h3>
                  <ul className="modal-list">
                    {selectedCondition.treatment.map((treatment, idx) => (
                      <li key={idx}>{treatment}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>📊 Statistici</h3>
                  <p className="modal-statistics">{selectedCondition.statistics}</p>
                </div>
              </div>

                                <div className="modal-resources">
                    <h3>🔗 Resurse Utile</h3>
                    
                    {/* Cărți Recomandate */}
                    <div className="resource-section">
                      <h4>📚 Cărți Recomandate</h4>
                      <div className="resource-items">
                        {getRelevantResources(selectedCondition.category).books.map((book, index) => (
                          <div key={index} className="resource-item">
                            <div className="resource-info">
                              <h5>{book.title}</h5>
                              <p className="resource-author">de {book.author}</p>
                              <p className="resource-description">{book.description}</p>
                            </div>
                            <div className="resource-actions">
                              <button 
                                className="resource-btn primary"
                                onClick={() => openResourceLink(book.link)}
                              >
                                📖 Vezi pe Amazon
                              </button>
                              <button 
                                className="resource-btn secondary"
                                onClick={() => copyResourceLink(book.link, book.title)}
                              >
                                📋 Copiază Link
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Aplicații Mobile */}
                    <div className="resource-section">
                      <h4>📱 Aplicații Mobile</h4>
                      <div className="resource-items">
                        {getRelevantResources(selectedCondition.category).apps.map((app, index) => (
                          <div key={index} className="resource-item">
                            <div className="resource-info">
                              <h5>{app.icon} {app.name}</h5>
                              <p className="resource-platform">{app.platform}</p>
                              <p className="resource-description">{app.description}</p>
                            </div>
                            <div className="resource-actions">
                              <button 
                                className="resource-btn primary"
                                onClick={() => openResourceLink(app.link)}
                              >
                                📱 Descarcă
                              </button>
                              <button 
                                className="resource-btn secondary"
                                onClick={() => copyResourceLink(app.link, app.name)}
                              >
                                📋 Copiază Link
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Organizații de Suport */}
                    <div className="resource-section">
                      <h4>🌐 Organizații de Suport</h4>
                      <div className="resource-items">
                        {getRelevantResources(selectedCondition.category).organizations.map((org, index) => (
                          <div key={index} className="resource-item">
                            <div className="resource-info">
                              <h5>{org.icon} {org.name}</h5>
                              <p className="resource-description">{org.description}</p>
                            </div>
                            <div className="resource-actions">
                              <button 
                                className="resource-btn primary"
                                onClick={() => openResourceLink(org.link)}
                              >
                                🌐 Vizitează Site-ul
                              </button>
                              <button 
                                className="resource-btn secondary"
                                onClick={() => copyResourceLink(org.link, org.name)}
                              >
                                📋 Copiază Link
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Grupuri de Sprijin */}
                    <div className="resource-section">
                      <h4>👥 Grupuri de Sprijin</h4>
                      <div className="resource-items">
                        {getRelevantResources(selectedCondition.category).supportGroups.map((group, index) => (
                          <div key={index} className="resource-item">
                            <div className="resource-info">
                              <h5>{group.icon} {group.name}</h5>
                              <p className="resource-description">{group.description}</p>
                            </div>
                            <div className="resource-actions">
                              <button 
                                className="resource-btn primary"
                                onClick={() => openResourceLink(group.link)}
                              >
                                🤝 Alătură-te
                              </button>
                              <button 
                                className="resource-btn secondary"
                                onClick={() => copyResourceLink(group.link, group.name)}
                              >
                                📋 Copiază Link
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
            </div>

            <div className="modal-footer">
              <button className="modal-btn secondary" onClick={closeModal}>
                Închide
              </button>
              <button className="modal-btn primary">
                📞 Contactează un Specialist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Additional Resources */}
      <div className="additional-resources">
        <h2>Resurse Suplimentare</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>📚 Cărți Recomandate</h3>
            <ul>
              <li>"The Body Keeps the Score" - Bessel van der Kolk</li>
              <li>"Lost Connections" - Johann Hari</li>
              <li>"The Noonday Demon" - Andrew Solomon</li>
              <li>"An Unquiet Mind" - Kay Redfield Jamison</li>
            </ul>
          </div>
          <div className="resource-card">
            <h3>🌐 Site-uri Web</h3>
            <ul>
              <li>World Health Organization - Mental Health</li>
              <li>National Institute of Mental Health</li>
              <li>Mental Health Foundation</li>
              <li>Psychology Today</li>
            </ul>
          </div>
          <div className="resource-card">
            <h3>📱 Aplicații Mobile</h3>
            <ul>
              <li>Headspace - Meditație și mindfulness</li>
              <li>Calm - Relaxare și somn</li>
              <li>MoodTools - Depresie</li>
              <li>PTSD Coach - TSPT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conditions; 