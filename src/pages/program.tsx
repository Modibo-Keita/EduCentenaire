import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Music, TreePine, Trophy, Mic2, HandHeart } from "lucide-react";
import celebrationImg from "@assets/generated_images/malian_cultural_celebration_ceremony.png";

export default function Program() {
  const days = [
    {
      date: "27 Décembre",
      label: "Jour 1",
      events: [
        {
          time: "09:00",
          title: "Cérémonie d'Ouverture du Centenaire",
          description: "Grande cérémonie officielle marquant le lancement des festivités du centenaire avec la présence de personnalités officielles, discours inauguraux et levée des couleurs.",
          location: "Grande Cour de l'École",
          icon: Trophy,
          type: "Officiel"
        },
        {
          time: "14:00",
          title: "Vernissage Exposition '100 Ans de Mémoire'",
          description: "Inauguration de l'exposition unique présentant photos d'archives, documents historiques et objets retraçant la vie de l'école depuis 1925.",
          location: "Salle Polyvalente",
          icon: Calendar,
          type: "Culture"
        }
      ]
    },
    {
      date: "28 Décembre",
      label: "Jour 2",
      events: [
        {
          time: "10:00",
          title: "Conférence 'L'Éducation au Mali'",
          description: "Table ronde avec d'éminents pédagogues, anciens élèves et décideurs sur les défis et les perspectives de l'avenir de l'éducation au Mali.",
          location: "Amphithéâtre de Plein Air",
          icon: Mic2,
          type: "Conférence"
        },
        {
          time: "16:00",
          title: "Rencontre Inter-Générations",
          description: "Moments d'échanges privilégiés entre les anciens élèves et les élèves actuels. Partage d'expériences et mentorat.",
          location: "Jardins de l'École",
          icon: HandHeart,
          type: "Communauté"
        }
      ]
    },
    {
      date: "29 Décembre",
      label: "Jour 3",
      events: [
        {
          time: "14:00",
          title: "Festival Culturel Inter-Écoles",
          description: "Compétitions artistiques, représentations théâtrales, poésie et concerts mettant en valeur le talent et la créativité des élèves de la région.",
          location: "Podium Central",
          icon: Music,
          type: "Festivités"
        },
        {
          time: "20:00",
          title: "Gala de Charité & Prix d'Excellence",
          description: "Soirée de gala prestigieuse en l'honneur des anciens élèves distingués. Collecte de fonds pour les bourses d'études et rénovations.",
          location: "Espace de Réception Kourouninkoto",
          icon: Trophy,
          type: "Gala"
        }
      ]
    },
    {
      date: "30 Décembre",
      label: "Jour 4",
      events: [
        {
          time: "09:00",
          title: "Cérémonie de Clôture",
          description: "Clôture officielle des festivités, remerciements aux partenaires et lecture du 'Livre d'Or' du centenaire.",
          location: "Grande Cour",
          icon: Calendar,
          type: "Officiel"
        },
        {
          time: "11:00",
          title: "Plantation de l'Arbre du Centenaire",
          description: "Plantation symbolique d'un baobab pour les générations futures, marquant l'enracinement de l'école et sa croissance vers l'avenir.",
          location: "Entrée Principale",
          icon: TreePine,
          type: "Symbole"
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <div className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={celebrationImg} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-accent text-white hover:bg-accent mb-6 px-4 py-1 text-sm font-bold tracking-widest uppercase">
            27 - 30 Décembre 2025
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Programme des Festivités</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Quatre jours de célébration, de mémoire et de partage pour honorer un siècle d'éducation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 -mt-24 relative z-20">
          <Card className="bg-card shadow-lg border-t-4 border-t-accent">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-serif text-primary flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" /> Horaires
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Les activités débutent chaque jour à 9h00. Les soirées culturelles se terminent à 23h00.</p>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-lg border-t-4 border-t-accent">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-serif text-primary flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" /> Accès
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Tous les événements ont lieu dans l'enceinte de l'école ou au village de Kourouninkoto.</p>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-lg border-t-4 border-t-accent">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-serif text-primary flex items-center gap-2">
                <HandHeart className="h-5 w-5 text-accent" /> Participation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">L'accès aux cérémonies est libre. Le Gala de charité nécessite une réservation préalable.</p>
            </CardContent>
          </Card>
        </div>

        {/* Program Tabs */}
        <Tabs defaultValue="Jour 1" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-2xl grid-cols-4 h-auto p-1 bg-secondary/30 rounded-full">
              {days.map((day) => (
                <TabsTrigger 
                  key={day.label} 
                  value={day.label}
                  className="rounded-full py-3 text-sm md:text-base font-serif data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  <span className="hidden md:inline mr-2">{day.date}</span>
                  <span className="md:hidden">{day.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {days.map((day) => (
            <TabsContent key={day.label} value={day.label} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-6">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-serif font-bold text-primary mb-2">{day.date}</h2>
                  <p className="text-muted-foreground italic">Programme du {day.label}</p>
                </div>

                {day.events.map((event, idx) => (
                  <div key={idx} className="group bg-white rounded-xl border border-border p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 hover:shadow-lg transition-shadow hover:border-primary/30 items-start">
                    <div className="flex-shrink-0 w-full md:w-48 bg-secondary/20 rounded-lg p-4 text-center border border-secondary/50 self-stretch flex flex-col justify-center">
                      <span className="text-2xl font-bold text-primary block mb-1">{event.time}</span>
                      <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        <MapPin className="w-3 h-3" /> {event.location}
                      </div>
                    </div>
                    
                    <div className="flex-grow space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <Badge variant="outline" className="border-accent/50 text-accent font-medium">
                          {event.type}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>

                      <div className="pt-2 flex items-center text-sm text-primary font-medium">
                        <event.icon className="w-4 h-4 mr-2" />
                        Activité principale
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
}