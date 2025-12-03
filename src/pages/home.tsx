import { Layout } from "@/components/layout";
import heroBg from "@assets/generated_images/landscape_of_kita_mali_at_golden_hour.png";
import villageImg from "@assets/generated_images/traditional_malian_village_kourouninkoto.png";
import { Countdown } from "@/components/countdown";
import { Committee } from "@/components/committee";
import { JourneyMap } from "@/components/journey-map";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Paysage de Kourouninkoto" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/95" />
        </div>

        <div className="container relative z-10 px-4 text-center max-w-5xl mx-auto py-20">
          <span className="inline-block px-6 py-2 mb-8 text-sm md:text-base font-bold tracking-widest text-secondary-foreground bg-secondary rounded-full uppercase shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 border border-white/20">
            1925 - 2025
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            100 Ans d'Histoire <br/>
            <span className="text-secondary">d'Éducation & d'Avenir</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Bienvenue au Centenaire de l'École Fondamentale de Kourouninkoto.
            Un siècle de savoir transmis au cœur du Mali.
          </p>
          
          <Countdown />

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link href="/programme">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-serif px-10 py-7 text-lg h-auto shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 rounded-full border-2 border-transparent">
                Voir le Programme
                <Calendar className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/histoire">
              <Button size="lg" variant="outline" className="bg-white/5 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-primary font-serif px-10 py-7 text-lg h-auto rounded-full hover:border-white transition-all">
                Notre Histoire
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 hidden md:block">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </div>
      </section>

      {/* Village Presentation Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform rotate-3"></div>
              <img 
                src={villageImg} 
                alt="Village de Kourouninkoto" 
                className="relative rounded-xl shadow-2xl w-full aspect-[4/3] object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl max-w-[200px] hidden md:block">
                <p className="font-serif font-bold text-primary text-lg">Kourouninkoto</p>
                <p className="text-xs text-muted-foreground">Région de Kita, Mali</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Le Berceau de l'École</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
                Kourouninkoto, <br/>
                <span className="text-primary">Terre d'Accueil et de Tradition</span>
              </h3>
              
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  Niché au cœur de la région de Kita, le village de Kourouninkoto est un joyau de culture et d'hospitalité malienne. 
                  Fondée sur des terres rouges fertiles et entourée de baobabs centenaires, notre communauté incarne l'harmonie 
                  entre tradition et ouverture vers l'avenir.
                </p>
                <p>
                  Depuis 1925, notre village est le gardien de l'École Fondamentale, véritable institution qui a vu grandir 
                  des générations d'élèves. Kourouninkoto n'est pas seulement un lieu géographique, c'est une mémoire vivante, 
                  un espace où l'éducation est célébrée comme le pilier de notre développement commun.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
                  <MapPin className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-bold text-foreground mb-1">Localisation</h4>
                  <p className="text-sm text-muted-foreground">Région de Kita, Ouest du Mali</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-bold text-foreground mb-1">Communauté</h4>
                  <p className="text-sm text-muted-foreground">Accueillante & Historique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <Committee />

      {/* Journey Map Section */}
      <JourneyMap />

      {/* Key Info Grid */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
              {
                icon: Calendar,
                title: "Date Historique",
                desc: "27 - 30 Décembre 2025",
                sub: "4 jours de célébration intense"
              },
              {
                icon: MapPin,
                title: "Lieu de Rassemblement",
                desc: "École Fondamentale",
                sub: "Au cœur du village de Kourouninkoto"
              },
              {
                icon: Users,
                title: "Tous Invités",
                desc: "Anciens, Parents, Amis",
                sub: "Un moment de retrouvailles unique"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors text-center group">
                <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-lg font-medium text-secondary mb-1">{item.desc}</p>
                <p className="text-sm text-white/60">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}