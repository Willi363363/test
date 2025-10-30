import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Code,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Terminal,
  Cpu,
  Zap,
  Database,
  GitBranch,
  Award
} from 'lucide-react';
import './piscinereview.css';

const PiscineReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Review Piscine Partie 2",
      subtitle: "My_printf",
      content: (
        <div className="slide-center">
          <h1 className="title-main">Review Piscine Partie 2</h1>
          <h2 className="subtitle">Reproduction complète de printf en C</h2>
          <div className="author-block">
            <p className="author-name">ROUVIERE William</p>
            <p className="author-school">Epitech Montpellier - 1ère année</p>
          </div>
        </div>
      )
    },
    {
      title: "Qui suis-je ?",
      content: (
        <div className="section animate-fadeIn">
          <h2 className="section-title text-blue animate-slideInLeft">Présentation personnelle</h2>

          <div className="panel panel-indigo animate-slideInRight">
            <p className="paragraph-lg text-muted mt-0 mb-md">
              Étudiant en première année à Epitech Montpellier, passionné par l'informatique et le numérique
              depuis l'enfance. Cette piscine représente une étape charnière dans ma formation.
            </p>
          </div>

          <div className="grid grid-2 mt-lg">
            <div className="animate-slideInUp" style={{ animationDelay: '0.2s' }}>
              <div className="card card-green hover-zoom">
                <CheckCircle className="icon-lg icon-green" />
                <div>
                  <h3 className="card-heading text-green">Points forts</h3>
                  <p className="text-muted">Gestion du temps réussie, projet rendu dans les délais</p>
                </div>
              </div>
            </div>

            <div className="animate-slideInUp" style={{ animationDelay: '0.3s' }}>
              <div className="card card-yellow hover-zoom">
                <AlertCircle className="icon-lg icon-yellow" />
                <div>
                  <h3 className="card-heading text-yellow">Axes d'amélioration</h3>
                  <p className="text-muted">Optimisation du temps de travail et meilleure anticipation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "La Piscine d'Epitech",
      content: (
        <div className="section animate-fadeIn">
          <h2 className="section-title text-blue animate-slideInLeft">La Piscine d'Epitech</h2>

          <div className="panel panel-blue animate-scaleIn mb-md">
            <p className="paragraph-lg text-muted">
              <span className="text-indigo bold">2 semaines intensives</span> de programmation C pour renforcer
              rapidement les compétences. Un environnement pédagogique immersif avec de nombreux projets en groupe
              favorisant la coopération et l'entraide.
            </p>
          </div>

          <div className="grid grid-3 mt-lg">
            {[
              { icon: <Code className="icon-xl icon-blue" />, title: "Rush 1-7", desc: "Formes ASCII" },
              { icon: <Database className="icon-xl icon-purple" />, title: "Rush 2-7", desc: "Fréquences" },
              { icon: <Terminal className="icon-xl icon-green" />, title: "My_printf", desc: "Projet final" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="tile hover-zoom rotate-none animate-slideInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="tile-icon">{item.icon}</div>
                <h3 className="tile-title">{item.title}</h3>
                <p className="text-faint">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Évolution du projet",
      content: (
        <div className="section animate-fadeIn">
          <h2 className="section-title text-blue animate-slideInLeft">Progression du projet my_printf</h2>
          <div className="timeline">
            <div className="timeline-bar" />
            {[
              {
                phase: "Phase 1",
                title: "bsminiprintf",
                desc: "Exercices préparatoires avec stdarg.h",
                formats: "sum_numbers, sum_strings_length, disp_stdarg"
              },
              {
                phase: "Phase 2",
                title: "miniprintf",
                desc: "Version simplifiée de printf",
                formats: "%c, %s, %i, %d, %%"
              },
              {
                phase: "Phase 3",
                title: "my_printf COMPLET",
                desc: "Implémentation complète avec 11 formats",
                formats: "%c, %s, %i, %d, %f, %e, %E, %x, %X, %o, %u, %p, %%"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="timeline-card animate-slideInRight"
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                <div className="timeline-header">
                  <div className="timeline-index">{idx + 1}</div>
                  <div>
                    <p className="timeline-phase">{item.phase}</p>
                    <h3 className="timeline-title">{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted">{item.desc}</p>
                <p className="code-chip">{item.formats}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Architecture modulaire",
      content: (
        <div className="section animate-fadeIn">
          <h2 className="section-title text-blue animate-slideInLeft">Organisation du code</h2>

          <div className="grid grid-2">
            <div>
              <h3 className="section-subtitle text-purple animate-slideInUp">📁 Structure</h3>
              {[
                { file: "my_printf.c", desc: "Point d'entrée principal" },
                { file: "my_putchar.c", desc: "Affichage caractères" },
                { file: "my_putstr.c", desc: "Affichage chaînes" },
                { file: "my_put_nbr.c", desc: "Affichage entiers" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="list-item list-blue animate-slideInUp"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <p className="code-label text-green">{item.file}</p>
                  <p className="text-faint">{item.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="section-subtitle text-purple animate-slideInUp">⚙️ Conversions</h3>
              {[
                { file: "my_dec_to_hex_lowercase.c", desc: "Conversion hexadécimal" },
                { file: "my_dec_to_oct.c", desc: "Conversion octale" },
                { file: "pourcent_f.c", desc: "Nombres flottants" },
                { file: "my_science_number.c", desc: "Notation scientifique" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="list-item list-purple animate-slideInUp"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <p className="code-label text-yellow">{item.file}</p>
                  <p className="text-faint">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel panel-green animate-scaleIn mt-md">
            <p className="paragraph text-muted">
              <span className="text-green bold">17 fichiers C</span> organisés en modules réutilisables +
              <span className="text-blue bold"> Makefile</span> avec tests Criterion
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Formats implémentés",
      content: (
        <div className="section animate-fadeIn">
          <h2 className="section-title">Les 11 formats de my_printf</h2>
          <div className="format-grid">
            {[
              { format: "%c", desc: "Caractère", example: "'A'" },
              { format: "%s", desc: "Chaîne", example: '"Hello"' },
              { format: "%d", desc: "Entier", example: "-42" },
              { format: "%i", desc: "Entier", example: "42" },
              { format: "%u", desc: "Unsigned", example: "4294967295" },
              { format: "%f", desc: "Flottant", example: "3.141593" },
              { format: "%e", desc: "Scientifique", example: "1.23e+02" },
              { format: "%E", desc: "Scientifique", example: "1.23E+02" },
              { format: "%x", desc: "Hexadécimal", example: "0xff" },
              { format: "%X", desc: "Hexadécimal", example: "0xFF" },
              { format: "%o", desc: "Octal", example: "0755" },
              { format: "%p", desc: "Pointeur", example: "0x7fff5..." },
              { format: "%%", desc: "Pourcent", example: "%" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="format-card animate-slideInUp"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <h3 className="format-title">{item.format}</h3>
                <p className="format-desc">{item.desc}</p>
                <code className="format-example">{item.example}</code>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Défis techniques",
      content: (
        <div className="section animate-fadeIn">
          <h2 className="section-title text-blue animate-slideInLeft">Difficultés rencontrées</h2>

          <div className="grid grid-2">
            <div>
              {[
                {
                  icon: <Zap className="icon-lg icon-yellow" />,
                  title: "Gestion mémoire",
                  desc: "Allocation dynamique avec malloc/free pour les conversions",
                  solution: "Libération systématique après utilisation"
                },
                {
                  icon: <Code className="icon-lg icon-blue" />,
                  title: "Notation scientifique",
                  desc: "Calcul complexe de l'exposant et gestion des cas limites",
                  solution: "Fonctions dédiées pour %e et %E"
                },
                {
                  icon: <Database className="icon-lg icon-purple" />,
                  title: "Précision des flottants",
                  desc: "Affichage correct avec 6 décimales pour %f",
                  solution: "Arrondi à 0.0000005 avant conversion"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="challenge-card challenge-warm animate-slideInLeft"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="challenge-header">
                    {item.icon}
                    <h3 className="challenge-title">{item.title}</h3>
                  </div>
                  <p className="text-muted mb-xs">{item.desc}</p>
                  <div className="solution-chip">
                    <p className="text-green"><strong>Solution:</strong> {item.solution}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              {[
                {
                  icon: <Terminal className="icon-lg icon-green" />,
                  title: "Conversions de bases",
                  desc: "Hex (base 16) et Octal (base 8) avec gestion des zéros",
                  solution: "Algorithme de division successive"
                },
                {
                  icon: <GitBranch className="icon-lg icon-pink" />,
                  title: "Gestion des pointeurs",
                  desc: "Affichage d'adresses mémoire avec format 0x",
                  solution: "Cast en unsigned long long"
                },
                {
                  icon: <Cpu className="icon-lg icon-cyan" />,
                  title: "Valeur de retour",
                  desc: "Compter précisément tous les caractères affichés",
                  solution: "Système de compteur incrémental"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="challenge-card challenge-sunny animate-slideInRight"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="challenge-header">
                    {item.icon}
                    <h3 className="challenge-title">{item.title}</h3>
                  </div>
                  <p className="text-muted mb-xs">{item.desc}</p>
                  <div className="solution-chip">
                    <p className="text-green"><strong>Solution:</strong> {item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Méthodologie",
      content: (
        <div className="section animate-fadeIn">
          <h2 className="section-title text-blue animate-slideInLeft">Réussites techniques et organisation</h2>

          <div className="grid grid-2">
            {[
              {
                num: "1",
                title: "Code modulaire",
                desc: "Chaque fonction dans un fichier séparé pour une maintenance facile",
                icon: <Code className="icon-xl icon-blue" />,
                color: "blue"
              },
              {
                num: "2",
                title: "Tests Criterion",
                desc: "Validation automatisée de tous les formats avec tests unitaires",
                icon: <CheckCircle className="icon-xl icon-green" />,
                color: "green"
              },
              {
                num: "3",
                title: "Makefile optimisé",
                desc: "Compilation automatique avec targets tests_run et gcovr",
                icon: <Terminal className="icon-xl icon-purple" />,
                color: "purple"
              },
              {
                num: "4",
                title: "Gestion d'erreurs",
                desc: "Cas limites gérés (NULL, 0, valeurs négatives)",
                icon: <AlertCircle className="icon-xl icon-orange" />,
                color: "orange"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`method-card method-${item.color} animate-slideInUp hover-zoom`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="method-header">
                  <div className={`method-index bg-${item.color}`}>{item.num}</div>
                  {item.icon}
                </div>
                <h3 className="method-title">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Points d'amélioration",
      content: (
        <div className="section animate-fadeIn">
          <h2 className="section-title text-blue animate-slideInLeft">Ce que je peux améliorer</h2>

          <div className="stack">
            {[
              {
                category: "⏰ Organisation",
                items: [
                  "Anticiper davantage la charge de travail",
                  "Mieux répartir le temps entre les différents projets",
                  "Commencer plus tôt pour éviter le stress de dernière minute"
                ],
                color: "yellow"
              },
              {
                category: "💻 Code",
                items: [
                  "Optimiser certaines fonctions pour réduire la complexité",
                  "Ajouter plus de commentaires pour faciliter la relecture",
                  "Réduire les allocations mémoire multiples"
                ],
                color: "blue"
              },
              {
                category: "🧪 Tests",
                items: [
                  "Augmenter la couverture de code avec plus de tests",
                  "Tester les cas extrêmes plus systématiquement",
                  "Automatiser davantage les validations"
                ],
                color: "green"
              }
            ].map((section, idx) => (
              <div
                key={idx}
                className={`improve-card improve-${section.color} animate-slideInRight`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <h3 className="improve-title">{section.category}</h3>
                <ul className="bullet-list">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="bullet-item">
                      <span className={`bullet-dot bg-${section.color}`} />
                      <p className="text-muted text-md">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Conclusion",
      content: (
        <div className="section animate-fadeIn">
          <h2 className="section-title text-blue animate-slideInLeft">Bilan et perspectives</h2>

          <div className="grid grid-3">
            {[
              {
                icon: <Award className="icon-xxl icon-blue" />,
                title: "Apprentissage approfondi",
                desc: "Maîtrise complète de printf, stdarg.h et gestion mémoire en C"
              },
              {
                icon: <CheckCircle className="icon-xxl icon-green" />,
                title: "Projet fonctionnel",
                desc: "11 formats implémentés avec tests validés et code modulaire"
              },
              {
                icon: <TrendingUp className="icon-xxl icon-purple" />,
                title: "Base solide",
                desc: "Fondations techniques pour les futurs projets à Epitech"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="tile tile-dark animate-slideInUp hover-zoom"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="tile-icon">{item.icon}</div>
                <h3 className="tile-title">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="panel panel-green-blue animate-scaleIn mt-lg">
            <p className="paragraph-xl text-muted text-center">
              <span className="text-green bold text-xl">✨ Satisfaction personnelle</span>
              <br /><br />
              Malgré les défis rencontrés, j'ai réussi à créer un <span className="text-blue semibold">code fonctionnel et bien organisé</span>.
              <br />
              Cette piscine m'a appris l'importance de la <span className="text-purple semibold">rigueur</span>,
              de l'<span className="text-pink semibold">organisation</span> et de la <span className="text-yellow semibold">persévérance</span>.
              <br /><br />
              <span className="text-lg">🚀 Prêt pour les prochains défis ! 🚀</span>
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="app-root">
      <div className="app-container">
        <div className="slide-container">
          <div className="top-gradient-bar" />
          {slides[currentSlide].content}
        </div>

        <div className="nav-bar">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`btn ${currentSlide === 0 ? 'btn-disabled' : 'btn-primary btn-left'}`}
          >
            <ChevronLeft className="btn-icon" />
            <span className="btn-label">Précédent</span>
          </button>

          <div className="indicator-row">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`indicator ${index === currentSlide ? 'indicator-active' : ''}`}
                title={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`btn ${currentSlide === slides.length - 1 ? 'btn-disabled' : 'btn-secondary btn-right'}`}
          >
            <span className="btn-label">Suivant</span>
            <ChevronRight className="btn-icon" />
          </button>
        </div>

        <div className="progress-wrapper">
          <div className="progress-rail">
            <div
              className="progress-bar"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
          <div className="progress-meta">
            <p className="meta-text">Slide {currentSlide + 1} / {slides.length}</p>
            <p className="meta-text">{slides[currentSlide].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PiscineReview;

