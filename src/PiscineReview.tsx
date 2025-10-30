import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, CheckCircle, AlertCircle, Target, TrendingUp, Terminal, Cpu, Zap, Database, GitBranch, Award } from 'lucide-react';

const PiscineReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Review Piscine Partie 2",
      subtitle: "My_printf",
      content: (
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="relative">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Review Piscine Partie 2
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-600 blur-3xl opacity-20 animate-pulse"></div>
          </div>
          <h2 className="text-4xl text-gray-300 animate-slideInUp">Reproduction complète de printf en C</h2>
          <div className="mt-16 space-y-4 animate-slideInUp" style={{animationDelay: '0.2s'}}>
            <p className="text-3xl text-blue-400 font-semibold">ROUVIERE William</p>
            <p className="text-2xl text-gray-400">Epitech Montpellier - 1ère année</p>
            <div className="flex justify-center gap-4 mt-8">
              <Code className="w-12 h-12 text-blue-400 animate-bounce" />
              <Terminal className="w-12 h-12 text-purple-400 animate-bounce" style={{animationDelay: '0.1s'}} />
              <Cpu className="w-12 h-12 text-pink-400 animate-bounce" style={{animationDelay: '0.2s'}} />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Qui suis-je ?",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-5xl font-bold text-blue-400 mb-8 animate-slideInLeft">Présentation personnelle</h2>
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-xl border-2 border-blue-500/50 backdrop-blur-sm animate-slideInRight">
            <p className="text-2xl text-gray-300 leading-relaxed mb-6">
              Étudiant en première année à Epitech Montpellier, passionné par l'informatique et le numérique 
              depuis l'enfance. Cette piscine représente une étape charnière dans ma formation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="space-y-4 animate-slideInUp" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start space-x-4 bg-green-500/10 p-5 rounded-lg border border-green-500/30 transform hover:scale-105 transition-all">
                <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-green-300 mb-2">Points forts</h3>
                  <p className="text-gray-300">Gestion du temps réussie, projet rendu dans les délais</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 animate-slideInUp" style={{animationDelay: '0.3s'}}>
              <div className="flex items-start space-x-4 bg-yellow-500/10 p-5 rounded-lg border border-yellow-500/30 transform hover:scale-105 transition-all">
                <AlertCircle className="w-8 h-8 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Axes d'amélioration</h3>
                  <p className="text-gray-300">Optimisation du temps de travail et meilleure anticipation</p>
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
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-5xl font-bold text-blue-400 mb-8 animate-slideInLeft">La Piscine d'Epitech</h2>
          <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 p-8 rounded-xl border-2 border-indigo-500/50 mb-6 animate-scaleIn">
            <p className="text-2xl text-gray-300 leading-relaxed">
              <span className="text-indigo-400 font-bold">2 semaines intensives</span> de programmation C pour renforcer 
              rapidement les compétences. Un environnement pédagogique immersif avec de nombreux projets en groupe 
              favorisant la coopération et l'entraide.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { icon: <Code className="w-12 h-12 text-blue-400" />, title: "Rush 1-7", desc: "Formes ASCII" },
              { icon: <Database className="w-12 h-12 text-purple-400" />, title: "Rush 2-7", desc: "Fréquences" },
              { icon: <Terminal className="w-12 h-12 text-green-400" />, title: "My_printf", desc: "Projet final" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 text-center transform hover:scale-110 transition-all animate-slideInUp" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Évolution du projet",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-5xl font-bold text-blue-400 mb-8 animate-slideInLeft">Progression du projet my_printf</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="space-y-8 ml-20">
              {[
                { phase: "Phase 1", title: "bsminiprintf", desc: "Exercices préparatoires avec stdarg.h", formats: "sum_numbers, sum_strings_length, disp_stdarg", color: "blue" },
                { phase: "Phase 2", title: "miniprintf", desc: "Version simplifiée de printf", formats: "%c, %s, %i, %d, %%", color: "purple" },
                { phase: "Phase 3", title: "my_printf COMPLET", desc: "Implémentation complète avec 11 formats", formats: "%c, %s, %i, %d, %f, %e, %E, %x, %X, %o, %u, %p, %%", color: "pink" }
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/10 p-6 rounded-xl border-2 border-${item.color}-500/50 transform hover:scale-105 transition-all animate-slideInRight`} style={{animationDelay: `${idx * 0.15}s`}}>
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 rounded-full bg-${item.color}-500 flex items-center justify-center mr-4 text-white font-bold`}>
                      {idx + 1}
                    </div>
                    <div>
                      <p className={`text-sm text-${item.color}-400 font-semibold`}>{item.phase}</p>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">{item.desc}</p>
                  <p className="text-sm text-gray-400 font-mono bg-gray-900/50 p-2 rounded">{item.formats}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Architecture modulaire",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-5xl font-bold text-blue-400 mb-8 animate-slideInLeft">Organisation du code</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4 animate-slideInUp">📁 Structure</h3>
              {[
                { file: "my_printf.c", desc: "Point d'entrée principal" },
                { file: "my_putchar.c", desc: "Affichage caractères" },
                { file: "my_putstr.c", desc: "Affichage chaînes" },
                { file: "my_put_nbr.c", desc: "Affichage entiers" }
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30 animate-slideInUp" style={{animationDelay: `${idx * 0.1}s`}}>
                  <p className="text-green-400 font-mono text-lg mb-1">{item.file}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4 animate-slideInUp">⚙️ Conversions</h3>
              {[
                { file: "my_dec_to_hex_lowercase.c", desc: "Conversion hexadécimal" },
                { file: "my_dec_to_oct.c", desc: "Conversion octale" },
                { file: "pourcent_f.c", desc: "Nombres flottants" },
                { file: "my_science_number.c", desc: "Notation scientifique" }
              ].map((item, idx) => (
                <div key={idx} className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30 animate-slideInUp" style={{animationDelay: `${idx * 0.1}s`}}>
                  <p className="text-yellow-400 font-mono text-lg mb-1">{item.file}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-xl border-2 border-green-500/50 mt-6 animate-scaleIn">
            <p className="text-xl text-gray-300">
              <span className="text-green-400 font-bold">17 fichiers C</span> organisés en modules réutilisables + 
              <span className="text-blue-400 font-bold"> Makefile</span> avec tests Criterion
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Formats implémentés",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-5xl font-bold text-blue-400 mb-8 animate-slideInLeft">Les 11 formats de my_printf</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { format: "%c", desc: "Caractère", example: "'A'", color: "blue" },
              { format: "%s", desc: "Chaîne", example: '"Epitech"', color: "purple" },
              { format: "%i / %d", desc: "Entier", example: "42", color: "green" },
              { format: "%u", desc: "Unsigned", example: "4294967295", color: "yellow" },
              { format: "%f", desc: "Flottant", example: "3.141593", color: "orange" },
              { format: "%e / %E", desc: "Scientifique", example: "1.23e+02", color: "red" },
              { format: "%x / %X", desc: "Hexadécimal", example: "0xff / 0xFF", color: "pink" },
              { format: "%o", desc: "Octal", example: "755", color: "indigo" },
              { format: "%p", desc: "Pointeur", example: "0x7fff5...", color: "cyan" },
              { format: "%%", desc: "Pourcent", example: "'%'", color: "gray" }
            ].map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/10 p-5 rounded-xl border-2 border-${item.color}-500/50 transform hover:scale-110 hover:rotate-2 transition-all animate-slideInUp`} style={{animationDelay: `${idx * 0.05}s`}}>
                <h3 className={`text-2xl font-bold text-${item.color}-400 mb-2 font-mono`}>{item.format}</h3>
                <p className="text-gray-300 mb-2">{item.desc}</p>
                <p className="text-sm text-gray-400 font-mono bg-gray-900/50 p-2 rounded">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Défis techniques",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-5xl font-bold text-blue-400 mb-8 animate-slideInLeft">Difficultés rencontrées</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                { 
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Gestion mémoire",
                  desc: "Allocation dynamique avec malloc/free pour les conversions",
                  solution: "Libération systématique après utilisation"
                },
                {
                  icon: <Code className="w-8 h-8 text-blue-400" />,
                  title: "Notation scientifique",
                  desc: "Calcul complexe de l'exposant et gestion des cas limites",
                  solution: "Fonctions dédiées pour %e et %E"
                },
                {
                  icon: <Database className="w-8 h-8 text-purple-400" />,
                  title: "Précision des flottants",
                  desc: "Affichage correct avec 6 décimales pour %f",
                  solution: "Arrondi à 0.0000005 avant conversion"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-6 rounded-xl border-2 border-red-500/50 animate-slideInLeft" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <h3 className="text-xl font-bold text-white ml-3">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-3">{item.desc}</p>
                  <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/30">
                    <p className="text-sm text-green-400"><strong>Solution:</strong> {item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: <Terminal className="w-8 h-8 text-green-400" />,
                  title: "Conversions de bases",
                  desc: "Hex (base 16) et Octal (base 8) avec gestion des zéros",
                  solution: "Algorithme de division successive"
                },
                {
                  icon: <GitBranch className="w-8 h-8 text-pink-400" />,
                  title: "Gestion des pointeurs",
                  desc: "Affichage d'adresses mémoire avec format 0x",
                  solution: "Cast en unsigned long long"
                },
                {
                  icon: <Cpu className="w-8 h-8 text-cyan-400" />,
                  title: "Valeur de retour",
                  desc: "Compter précisément tous les caractères affichés",
                  solution: "Système de compteur incrémental"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-6 rounded-xl border-2 border-orange-500/50 animate-slideInRight" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <h3 className="text-xl font-bold text-white ml-3">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-3">{item.desc}</p>
                  <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/30">
                    <p className="text-sm text-green-400"><strong>Solution:</strong> {item.solution}</p>
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
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-5xl font-bold text-blue-400 mb-8 animate-slideInLeft">Réussites techniques et organisation</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                num: "1",
                title: "Code modulaire",
                desc: "Chaque fonction dans un fichier séparé pour une maintenance facile",
                icon: <Code className="w-10 h-10 text-blue-400" />,
                color: "blue"
              },
              {
                num: "2",
                title: "Tests Criterion",
                desc: "Validation automatisée de tous les formats avec tests unitaires",
                icon: <CheckCircle className="w-10 h-10 text-green-400" />,
                color: "green"
              },
              {
                num: "3",
                title: "Makefile optimisé",
                desc: "Compilation automatique avec targets tests_run et gcovr",
                icon: <Terminal className="w-10 h-10 text-purple-400" />,
                color: "purple"
              },
              {
                num: "4",
                title: "Gestion d'erreurs",
                desc: "Cas limites gérés (NULL, 0, valeurs négatives)",
                icon: <AlertCircle className="w-10 h-10 text-orange-400" />,
                color: "orange"
              }
            ].map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/10 p-6 rounded-xl border-2 border-${item.color}-500/50 transform hover:scale-105 transition-all animate-slideInUp`} style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-${item.color}-500 flex items-center justify-center mr-4 text-white font-bold text-xl`}>
                    {item.num}
                  </div>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Points d'amélioration",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-5xl font-bold text-blue-400 mb-8 animate-slideInLeft">Ce que je peux améliorer</h2>
          <div className="space-y-6">
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
              <div key={idx} className={`bg-gradient-to-r from-${section.color}-500/20 to-${section.color}-600/10 p-6 rounded-xl border-2 border-${section.color}-500/50 animate-slideInRight`} style={{animationDelay: `${idx * 0.15}s`}}>
                <h3 className="text-2xl font-bold text-white mb-4">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-${section.color}-400 mt-2`}></div>
                      <p className="text-gray-300 text-lg">{item}</p>
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
        <div className="space-y-8 animate-fadeIn">
          <h2 className="text-5xl font-bold text-blue-400 mb-8 animate-slideInLeft">Bilan et perspectives</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                icon: <Award className="w-16 h-16 text-blue-400 mb-4" />,
                title: "Apprentissage approfondi",
                desc: "Maîtrise complète de printf, stdarg.h et gestion mémoire en C"
              },
              {
                icon: <CheckCircle className="w-16 h-16 text-green-400 mb-4" />,
                title: "Projet fonctionnel",
                desc: "11 formats implémentés avec tests validés et code modulaire"
              },
              {
                icon: <TrendingUp className="w-16 h-16 text-purple-400 mb-4" />,
                title: "Base solide",
                desc: "Fondations techniques pour les futurs projets à Epitech"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border-2 border-gray-700/50 text-center transform hover:scale-110 transition-all animate-slideInUp" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-8 rounded-xl border-2 border-green-500/50 mt-8 animate-scaleIn">
            <p className="text-2xl text-gray-300 leading-relaxed text-center">
              <span className="text-green-400 font-bold text-3xl">✨ Satisfaction personnelle</span>
              <br/><br/>
              Malgré les défis rencontrés, j'ai réussi à créer un <span className="text-blue-400 font-semibold">code fonctionnel et bien organisé</span>.
              <br/>
              Cette piscine m'a appris l'importance de la <span className="text-purple-400 font-semibold">rigueur</span>, 
              de l'<span className="text-pink-400 font-semibold">organisation</span> et de la <span className="text-yellow-400 font-semibold">persévérance</span>.
              <br/><br/>
              <span className="text-2xl">🚀 Prêt pour les prochains défis ! 🚀</span>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Slide Container */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-12 mb-8 min-h-[650px] border border-gray-700/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          {slides[currentSlide].content}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg ${
              currentSlide === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transform hover:scale-110 hover:-translate-x-2'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="text-lg">Précédent</span>
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-4'
                    : 'bg-gray-600 hover:bg-gray-500 w-4 h-4'
                }`}
                title={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg ${
              currentSlide === slides.length - 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-110 hover:translate-x-2'
            }`}
          >
            <span className="text-lg">Suivant</span>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-3 px-2">
            <p className="text-gray-400 text-sm font-semibold">
              Slide {currentSlide + 1} / {slides.length}
            </p>
            <p className="text-gray-400 text-sm">
              {slides[currentSlide].title}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          '}
        <style>}
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PiscineReview;
