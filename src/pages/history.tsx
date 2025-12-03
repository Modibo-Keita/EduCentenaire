import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, Building2, GraduationCap, Trophy, Users } from "lucide-react";

export default function History() {
  const timelineEvents = [
    {
      year: "1925",
      title: "Fondation de l'École",
      description: "Création de l'École Fondamentale de Kourouninkoto avec les premiers 50 élèves et 3 enseignants dévoués.",
      icon: BookOpen,
      align: "left"
    },
    {
      year: "1960",
      title: "Passage sous administration malienne",
      description: "Une étape clé de l'histoire post-indépendance, marquant la prise en main de l'éducation par l'État malien.",
      icon: Trophy,
      align: "right"
    },
    {
      year: "1970",
      title: "Première Expansion",
      description: "Construction de nouveaux bâtiments et augmentation significative des effectifs avec 200 élèves.",
      icon: Building2,
      align: "left"
    },
    {
      year: "1996",
      title: "Deuxième Expansion",
      description: "Construction de nouveaux bâtiments ouvrant ainsi le second cycle, permettant une scolarité prolongée sur place.",
      icon: Building2,
      align: "right"
    },
    {
      year: "2005",
      title: "Modernisation",
      description: "Introduction des nouveaux outils et rénovation complète des infrastructures éducatives.",
      icon: Trophy,
      align: "left"
    },
    {
      year: "2015",
      title: "Troisième Expansion",
      description: "Construction de 3 nouvelles salles au profit du 1er cycle pour répondre à la demande croissante.",
      icon: Users,
      align: "right"
    },
    {
      year: "2023",
      title: "Création d'une Seconde École",
      description: "Face à l'évolution rapide des effectifs, cette création était nécessaire pour maintenir la qualité de l'enseignement.",
      icon: Building2,
      align: "left"
    },
    {
      year: "2025",
      title: "Le Centenaire",
      description: "Célébration de 100 ans d'excellence éducative avec plus de 10,000 anciens élèves formés.",
      icon: GraduationCap,
      align: "right"
    }
  ];

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Header Section */}
        <div className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm tracking-widest uppercase bg-secondary text-secondary-foreground border-none">
              Notre Héritage
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">100 Ans d'Histoire</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
              De 1925 à nos jours, découvrez les grandes étapes qui ont façonné l'École Fondamentale de Kourouninkoto.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="container mx-auto px-4 py-24">
          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block rounded-full" />

            <div className="space-y-12 md:space-y-24">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center group ${
                  event.align === "right" ? "md:flex-row-reverse" : ""
                }`}>
                  
                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 ${
                    event.align === "right" ? "md:pl-12 text-left" : "md:pr-12 md:text-right"
                  } mb-8 md:mb-0 relative z-10`}>
                    <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group-hover:border-primary/30">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-primary mb-4 md:hidden`}>
                        <event.icon className="w-6 h-6" />
                      </div>
                      <span className="text-5xl font-serif font-bold text-primary/10 absolute top-4 right-4 select-none pointer-events-none group-hover:text-primary/5 transition-colors">
                        {event.year}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-2">{event.title}</h3>
                      <span className="inline-block px-3 py-1 bg-primary/5 text-primary font-bold text-sm rounded-full mb-4 md:hidden">
                        {event.year}
                      </span>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                    <div className="w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <event.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Year Side (Desktop) */}
                  <div className={`w-full md:w-1/2 ${
                    event.align === "right" ? "md:pr-12 text-right" : "md:pl-12 text-left"
                  } hidden md:block`}>
                    <span className="text-6xl font-serif font-bold text-primary/80 drop-shadow-sm">
                      {event.year}
                    </span>
                  </div>
                  
                </div>
              ))}
            </div>
            
            {/* End Marker */}
            <div className="flex justify-center mt-24">
              <div className="bg-primary text-white px-8 py-4 rounded-full shadow-xl font-serif font-bold text-lg animate-bounce">
                2025 : Le Centenaire !
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}