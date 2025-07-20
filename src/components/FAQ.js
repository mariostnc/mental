import React, { useState } from 'react';

function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const faqData = [
    // General Mental Health
    {
      category: "general",
      question: "Ce este sănătatea mentală?",
      answer: "Sănătatea mentală se referă la starea de bunăstare psihologică, emoțională și socială. Include capacitatea de a gestiona stresul, de a avea relații sănătoase, de a lua decizii și de a contribui la comunitate. Sănătatea mentală este la fel de importantă ca sănătatea fizică și afectează toate aspectele vieții."
    },
    {
      category: "general",
      question: "Cum știu dacă am nevoie de ajutor profesional?",
      answer: "Ar trebui să cauți ajutor profesional dacă simptomele persistă mai mult de 2 săptămâni și afectează viața de zi cu zi. Semnele includ: schimbări în somn, apetit, dispoziție, retragere socială, dificultăți în funcționarea normală, gânduri negative persistente, sau sentimente de deznădejde. Nu ezita să cauți ajutor - este un semn de putere, nu de slăbiciune."
    },
    {
      category: "general",
      question: "Este normal să simt anxietate?",
      answer: "Anxietatea este o emoție normală și utilă în situații stresante. Devine problematică când este excesivă, persistentă și interferează cu viața de zi cu zi. Anxietatea normală ajută la protejarea noastră, dar anxietatea patologică poate fi debilitantă și necesită tratament."
    },
    {
      category: "general",
      question: "Care este diferența între tristețe și depresie?",
      answer: "Tristețea este o emoție normală și temporară, în timp ce depresia este o tulburare medicală care durează cel puțin 2 săptămâni și include multiple simptome: pierderea interesului, probleme de somn, modificări în apetit, sentimente de deznădejde, și dificultăți de concentrare. Depresia afectează toate aspectele vieții și necesită tratament profesional."
    },

    // Treatment and Therapy
    {
      category: "treatment",
      question: "Cum pot ajuta pe cineva cu probleme de sănătate mentală?",
      answer: "Ascultă fără să judeci, oferă suport emoțional, încurajează să caute ajutor profesional, rămâi conectat și educă-te despre condiția respectivă. Evită să minimizezi problemele lor sau să le spui să 'se ridice din pat'. Fii pacient și suportiv, dar nu încerca să fii terapeutul lor."
    },
    {
      category: "treatment",
      question: "Medicamentele pentru sănătate mentală sunt adictive?",
      answer: "Majoritatea medicamentelor pentru sănătate mentală nu sunt adictive când sunt luate conform prescripției. Antidepresivele și stabilizatorii de dispoziție nu creează dependență. Benzodiazepinele pot fi adictive și sunt prescrise pe termen scurt. Este important să nu oprești medicamentele fără consultarea medicului."
    },
    {
      category: "treatment",
      question: "Cât durează terapia să fie eficientă?",
      answer: "Timpul variază în funcție de individ și tipul de problemă. Mulți oameni observă îmbunătățiri în 6-12 săptămâni de terapie regulată. Unele probleme pot necesita ani de terapie, în timp ce altele pot fi rezolvate în câteva luni. Consistența și angajamentul sunt cheia succesului."
    },
    {
      category: "treatment",
      question: "Care sunt tipurile de terapie disponibile?",
      answer: "Principalele tipuri includ: Terapia Cognitiv-Comportamentală (CBT), Terapia Dialectică Comportamentală (DBT), Terapia Psihodinamică, Terapia Interpersonală, EMDR pentru traume, și Terapia de Grup. Fiecare tip este eficient pentru probleme specifice. Un terapeut poate recomanda cel mai potrivit tip pentru situația ta."
    },
    {
      category: "treatment",
      question: "Pot să mă vindec singur de depresie?",
      answer: "Deși auto-ajutorul poate fi util, depresia este o condiție medicală serioasă care de obicei necesită tratament profesional. Strategiile de auto-ajutor (exerciții, somn, nutriție) sunt complementare, nu înlocuiesc tratamentul profesional. Nu ezita să cauți ajutor."
    },

    // Specific Disorders
    {
      category: "disorders",
      question: "Ce este tulburarea bipolară?",
      answer: "Tulburarea bipolară este o condiție care cauzează schimbări extreme ale dispoziției, de la episoade maniacale (energie excesivă, vorbire rapidă, comportament impulsiv) la episoade depresive (tristețe profundă, pierderea interesului). Aceste episoade pot dura zile, săptămâni sau luni și afectează semnificativ viața."
    },
    {
      category: "disorders",
      question: "Ce sunt atacurile de panică?",
      answer: "Atacurile de panică sunt episoade intense de frică care apar brusc și ating intensitatea maximă în câteva minute. Simptomele includ palpitații, transpirație, tremururi, senzații de sufocare, și frică de a pierde controlul. Deși înfricoșătoare, nu sunt periculoase și pot fi tratate eficient."
    },
    {
      category: "disorders",
      question: "Ce este TSPT (Tulburarea de Stres Post-Traumatic)?",
      answer: "TSPT este o tulburare care se dezvoltă după expunerea la un eveniment traumatic. Simptomele includ flashback-uri, coșmaruri, evitarea situațiilor care amintesc trauma, hipervigilență, și sentimente de detașare. Poate afecta oricine care a experimentat un eveniment traumatizant."
    },
    {
      category: "disorders",
      question: "Ce este TOC (Tulburarea Obsesiv-Compulsivă)?",
      answer: "TOC este caracterizată prin gânduri intrusive nedorite (obsesii) și comportamente repetitive (compulsii) pentru a reduce anxietatea. Exemple includ verificări repetate, ritualuri de curățenie, și gânduri despre simetrie. Poate fi foarte debilitantă dar este tratabilă."
    },

    // Prevention and Wellness
    {
      category: "prevention",
      question: "Cum pot preveni problemele de sănătate mentală?",
      answer: "Strategii de prevenire includ: exerciții fizice regulate, somn sănătos (7-9 ore), nutriție echilibrată, conectare socială, tehnici de management al stresului, și limitarea consumului de alcool și droguri. Este important să cauți ajutor când observi semne de avertizare."
    },
    {
      category: "prevention",
      question: "Ce rol joacă exercițiile fizice în sănătatea mentală?",
      answer: "Exercițiile fizice eliberează endorfine, reduc hormonii de stres, îmbunătățesc somnul, și cresc autoestima. 30 de minute de activitate fizică zilnică pot reduce simptomele de anxietate și depresie cu până la 30%. Orice tip de mișcare ajută - de la plimbări la sporturi."
    },
    {
      category: "prevention",
      question: "Cum afectează somnul sănătatea mentală?",
      answer: "Somnul este esențial pentru sănătatea mentală. Privarea de somn poate agrava anxietatea, depresia, și alte tulburări mentale. Somnul de calitate ajută la procesarea emoțiilor, consolidarea memoriei, și regenerarea creierului. 7-9 ore de somn pe noapte sunt recomandate."
    },
    {
      category: "prevention",
      question: "Ce rol joacă nutriția în sănătatea mentală?",
      answer: "Nutriția afectează direct funcționarea cerebrală. Diete bogate în omega-3, vitamine B, antioxidanți, și probiotice suportă sănătatea mentală. Evitarea zahărului excesiv, cafeinei, și alimentelor procesate poate ajuta la stabilizarea dispoziției."
    },

    // Crisis and Emergency
    {
      category: "crisis",
      question: "Ce să fac dacă cineva amenință să se sinucidă?",
      answer: "Ia orice amenințare în serios. Rămâi calm, ascultă fără să judeci, și încurajează persoana să cauți ajutor profesional imediat. Contactează serviciile de urgență (112) dacă persoana este în pericol imediat. Nu promite confidențialitate în situații de urgență."
    },
    {
      category: "crisis",
      question: "Cum să gestionez o criză de anxietate?",
      answer: "Tehnici de respirație (respirație 4-7-8), grounding (identificarea a 5 lucruri pe care le vezi, auzi, simți), și mindfulness pot ajuta. Respirați adânc, concentrează-te pe momentul prezent, și amintește-ți că atacul va trece. Dacă sunt frecvente, caută ajutor profesional."
    },
    {
      category: "crisis",
      question: "Ce să fac dacă am gânduri suicidare?",
      answer: "Nu ești singur și ajutorul este disponibil. Contactează imediat o linie de ajutor pentru prevenirea suicidului, un terapeut, sau serviciile de urgență. Gândurile suicidare sunt temporare și tratabile. Nu acționa pe aceste gânduri - vor trece cu ajutorul potrivit."
    },
    {
      category: "crisis",
      question: "Cum să ajut pe cineva în criză psihotică?",
      answer: "Rămâi calm și nu te certa cu persoana. Vorbește cu voce liniștită, oferă reasigurări, și încurajează să caute ajutor medical. Dacă persoana este agresivă sau în pericol, contactează serviciile de urgență. Nu încerca să gestionezi singur o criză psihotică."
    },

    // Stigma and Support
    {
      category: "stigma",
      question: "Cum să depășesc stigma asociată sănătății mentale?",
      answer: "Educă-te despre sănătatea mentală, vorbește deschis despre experiențele tale, și înconjoară-te de oameni suportivi. Stigma se bazează pe ignoranță și frică. Când ești deschis despre problemele tale, ajuti pe alții să înțeleagă că sănătatea mentală este normală și tratabilă."
    },
    {
      category: "stigma",
      question: "Cum să vorbesc cu familia despre problemele mele de sănătate mentală?",
      answer: "Alege un moment calm, folosește exemple concrete pentru a explica simptomele, și oferă resurse educaționale. Fii pregătit pentru reacții diferite - unii pot fi suportivi imediat, alții pot avea nevoie de timp să înțeleagă. Nu te descuraja dacă prima conversație nu merge perfect."
    },
    {
      category: "stigma",
      question: "Cum să găsesc un terapeut bun?",
      answer: "Începe prin a cere recomandări de la medicul de familie, prieteni, sau asigurător. Verifică specializarea terapeutului pentru problema ta, programul, și costurile. Mulți terapeuți oferă consultații gratuite pentru a vedea dacă vă potriviți. Este normal să încerci mai mulți terapeuți."
    },
    {
      category: "stigma",
      question: "Cum să sprijin pe cineva care nu vrea ajutor?",
      answer: "Fii suportiv dar nu forțează. Exprimă îngrijorarea ta cu dragoste, oferă informații despre opțiunile de tratament, și sugerează să încerce doar o singură sesiune. Uneori oamenii au nevoie de timp să fie gata pentru ajutor. Continuă să fii acolo pentru ei."
    },

    // Children and Youth
    {
      category: "youth",
      question: "Cum să recunosc probleme de sănătate mentală la copii?",
      answer: "Semnele includ: schimbări în comportament, probleme de somn, modificări în apetit, retragere socială, probleme la școală, și comportament regresiv. Copiii pot exprima problemele diferit decât adulții. Dacă observi schimbări persistente, consultă un specialist în sănătate mentală pentru copii."
    },
    {
      category: "youth",
      question: "Este normal ca adolescenții să fie deprimați?",
      answer: "Schimbările de dispoziție sunt normale în adolescență, dar depresia nu este. Dacă tristețea persistă mai mult de 2 săptămâni și afectează funcționarea, poate fi depresie. Adolescenții pot avea nevoie de ajutor pentru a distinge între tristețea normală și depresia clinică."
    },
    {
      category: "youth",
      question: "Cum să vorbesc cu copilul despre sănătatea mentală?",
      answer: "Folosește un limbaj simplu și potrivit vârstei. Normalizează emoțiile și explică că este OK să simtă tristețe, anxietate, sau frică. Încurajează să vorbească despre sentimente și asigură-l că îl iubești indiferent de cum se simte. Modelează comportamente sănătoase."
    },
    {
      category: "youth",
      question: "Ce să fac dacă copilul meu are gânduri suicidare?",
      answer: "Ia orice mențiune despre suicid în serios, indiferent de vârstă. Contactează imediat un specialist în sănătate mentală pentru copii sau serviciile de urgență. Asigură-te că nu există acces la obiecte periculoase în casă. Fii suportiv și nu judeca - copiii pot avea gânduri suicidare din cauza problemelor reale."
    },

    // Workplace and Career
    {
      category: "workplace",
      question: "Cum să gestionez anxietatea la locul de muncă?",
      answer: "Practică tehnici de respirație, ia pauze regulate, organizează-ți timpul eficient, și comunică cu managerul despre nevoile tale. Multe companii oferă programe de asistență pentru angajați (EAP) care includ suport pentru sănătatea mentală. Nu ezita să cauți ajutor profesional."
    },
    {
      category: "workplace",
      question: "Să îmi spun angajatorului despre problemele mele de sănătate mentală?",
      answer: "Nu ești obligat să împărtășești informații medicale. Dacă ai nevoie de acomodări, poți discuta cu HR despre nevoile tale fără să dai detalii specifice. Mulți angajatori sunt suportivi și oferă resurse pentru sănătatea mentală. Decizia este personală și depinde de cultura companiei."
    },
    {
      category: "workplace",
      question: "Cum să sprijin un coleg cu probleme de sănătate mentală?",
      answer: "Fii suportiv și nu judeca. Ascultă când vrea să vorbească, oferă încurajări, și încurajează să caute ajutor profesional dacă este necesar. Nu încerca să fii terapeutul lor. Dacă observi comportament îngrijorător, contactează HR sau managerul conform politicilor companiei."
    },
    {
      category: "workplace",
      question: "Cum să mențin sănătatea mentală în timpul stresului profesional?",
      answer: "Stabilește limite clare între muncă și viața personală, practică tehnici de management al stresului, menține o rutină sănătoasă, și nu ezita să cauți ajutor profesional când este necesar. Amintește-ți că sănătatea ta mentală este mai importantă decât orice job."
    }
  ];

  const categories = [
    { id: 'all', name: 'Toate Întrebările' },
    { id: 'general', name: 'Sănătate Mentală Generală' },
    { id: 'treatment', name: 'Tratament și Terapie' },
    { id: 'disorders', name: 'Tulburări Specifice' },
    { id: 'prevention', name: 'Prevenire și Bunăstare' },
    { id: 'crisis', name: 'Crizelor și Urgențe' },
    { id: 'stigma', name: 'Stigmatizare și Suport' },
    { id: 'youth', name: 'Copii și Adolescenți' },
    { id: 'workplace', name: 'Locul de Muncă' }
  ];

  const filteredFAQ = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="faq-page">
      <div className="page-header">
        <h1>Întrebări Frecvente (FAQ)</h1>
        <p className="page-description">
          Răspunsuri la cele mai comune întrebări despre sănătatea mentală, tratament, 
          prevenire și suport. Această secțiune oferă informații clare și practice 
          pentru înțelegerea problemelor de sănătate mentală.
        </p>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <h3>Filtrează după Categorie:</h3>
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="faq-container">
        {filteredFAQ.map((faq, index) => (
          <div key={index} className="faq-item-expanded">
            <button
              className={`faq-question-expanded ${expandedItems.has(index) ? 'expanded' : ''}`}
              onClick={() => toggleItem(index)}
            >
              <span className="question-text">{faq.question}</span>
              <span className="expand-icon">{expandedItems.has(index) ? '−' : '+'}</span>
            </button>
            {expandedItems.has(index) && (
              <div className="faq-answer-expanded">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="faq-resources">
        <h2>Resurse Suplimentare</h2>
        
        <div className="resources-grid">
          <div className="resource-section">
            <h3>📚 Cărți Recomandate</h3>
            <ul>
              <li>"The Body Keeps the Score" - Bessel van der Kolk</li>
              <li>"Lost Connections" - Johann Hari</li>
              <li>"The Noonday Demon" - Andrew Solomon</li>
              <li>"An Unquiet Mind" - Kay Redfield Jamison</li>
              <li>"Feeling Good" - David D. Burns</li>
              <li>"The Happiness Trap" - Russ Harris</li>
            </ul>
          </div>
          
          <div className="resource-section">
            <h3>🌐 Site-uri Web Utile</h3>
            <ul>
              <li>World Health Organization - Mental Health</li>
              <li>National Institute of Mental Health</li>
              <li>Mental Health Foundation</li>
              <li>Psychology Today</li>
              <li>Mayo Clinic - Mental Health</li>
              <li>Mind.org.uk</li>
            </ul>
          </div>
          
          <div className="resource-section">
            <h3>📱 Aplicații Mobile</h3>
            <ul>
              <li>Headspace - Meditație și mindfulness</li>
              <li>Calm - Relaxare și somn</li>
              <li>MoodTools - Depresie</li>
              <li>PTSD Coach - TSPT</li>
              <li>Woebot - Asistent AI</li>
              <li>7 Cups - Suport emoțional</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-section">
        <h2>Ai Întrebări Suplimentare?</h2>
        <p>
          Dacă nu ai găsit răspunsul la întrebarea ta sau ai nevoie de suport personalizat, 
          nu ezita să contactezi liniile de ajutor disponibile.
        </p>
        <div className="contact-options">
          <div className="contact-option">
            <h3>📞 Linii de Ajutor</h3>
            <p>Contactează o linie de ajutor pentru suport imediat și confidențial.</p>
            <a href="/helplines" className="contact-link">Vezi Linii de Ajutor</a>
          </div>
          <div className="contact-option">
            <h3>👨‍⚕️ Consultație Profesională</h3>
            <p>Găsește un terapeut sau psihiatru pentru consultație personalizată.</p>
            <a href="/conditions" className="contact-link">Află Mai Multe</a>
          </div>
          <div className="contact-option">
            <h3>📧 Contactează-ne</h3>
            <p>Trimite-ne un mesaj pentru întrebări generale despre site.</p>
            <a href="mailto:info@mentalhealth.ro" className="contact-link">info@mentalhealth.ro</a>
          </div>
        </div>
      </div>

      {/* Important Disclaimer */}
      <div className="disclaimer-section">
        <h3>⚠️ Disclaimer Important</h3>
        <p>
          Informațiile din această secțiune sunt educaționale și nu înlocuiesc consultul medical profesional. 
          Pentru diagnostic, tratament și sfaturi personalizate, consultă întotdeauna un specialist în sănătate mentală. 
          În caz de urgență, contactează serviciile de urgență locale.
        </p>
      </div>
    </div>
  );
}

export default FAQ; 