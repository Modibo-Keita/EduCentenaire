import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Car, Navigation } from "lucide-react";
import mapImage from "@assets/generated_images/illustrated_map_journey_bamako_to_kourouninkoto.png";

export default function Travel() {
  const steps = [
    { city: "Bamako", distance: "0 km", type: "start", description: "Départ de la capitale" },
    { city: "Kati", distance: "15 km", type: "step", description: "Ville garnison" },
    { city: "Kassaro", distance: "120 km", type: "step", description: "Escale traditionnelle" },
    { city: "Badinko", distance: "160 km", type: "step", description: "Paysage de savane" },
    { city: "Kita", distance: "185 km", type: "major", description: "Capitale de l'arachide" },
    { city: "Djidian", distance: "230 km", type: "step", description: "Zone forestière" },
    { city: "Mambiri", distance: "270 km", type: "step", description: "Dernière étape" },
    { city: "Kourouninkoto", distance: "300 km", type: "end", description: "Bienvenue à l'EFK !" },
  ];

  return (
    <Layout>
      <div className="bg-background min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary tracking-widest uppercase">
              Infos Pratiques
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Sur la Route du Centenaire
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Le voyage vers Kourouninkoto est une aventure à travers les paysages magnifiques du Mali. 
              Préparez votre trajet pour rejoindre les festivités en toute sérénité.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Map Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-secondary/10 group">
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg z-10 flex items-center gap-2">
                <Car className="w-5 h-5 text-primary" />
                <span className="font-bold text-primary">~7h de route</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg z-10 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-accent" />
                <span className="font-bold text-accent">~300 km</span>
              </div>
              <img 
                src={mapImage} 
                alt="Carte du trajet Bamako - Kourouninkoto" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Timeline/Steps */}
            <div className="space-y-6">
               <Card className="border-none shadow-lg bg-card">
                 <CardHeader>
                   <CardTitle className="font-serif text-2xl text-primary flex items-center gap-2">
                     <MapPin className="w-6 h-6 text-accent" /> Itinéraire Détaillé
                   </CardTitle>
                 </CardHeader>
                 <CardContent>
                   <div className="relative border-l-2 border-secondary/50 ml-3 pl-8 space-y-8 py-2">
                     {steps.map((step, index) => (
                       <div key={index} className="relative group">
                         {/* Dot on the line */}
                         <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background transition-colors duration-300 z-10 ${
                           step.type === 'start' || step.type === 'end' 
                             ? 'bg-accent scale-125' 
                             : step.type === 'major' 
                               ? 'bg-primary scale-110' 
                               : 'bg-secondary'
                         }`} />
                         
                         <div className="flex items-start justify-between group-hover:translate-x-2 transition-transform duration-300">
                           <div>
                             <h4 className={`font-bold ${
                               step.type === 'start' || step.type === 'end' ? 'text-xl text-accent' : 
                               step.type === 'major' ? 'text-lg text-primary' : 'text-base text-foreground'
                             }`}>
                               {step.city}
                             </h4>
                             <p className="text-sm text-muted-foreground">{step.description}</p>
                           </div>
                           <Badge variant="secondary" className="bg-secondary/20 text-primary font-mono">
                             {step.distance}
                           </Badge>
                         </div>
                       </div>
                     ))}
                   </div>
                 </CardContent>
               </Card>

               <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                 <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                   <Clock className="w-5 h-5" /> Conseils de Voyage
                 </h3>
                 <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                   <li>Prévoir un départ tôt le matin (vers 6h00) pour éviter la chaleur.</li>
                   <li>L'état de la route est goudronné jusqu'à Kita, puis piste aménagée.</li>
                   <li>Véhicule 4x4 recommandé pour la dernière portion du trajet.</li>
                   <li>Points de restauration recommandés à Kassaro et Kita.</li>
                 </ul>
               </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}