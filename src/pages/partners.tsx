import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, GraduationCap, Scale, Heart } from "lucide-react";
import { Link } from "wouter";
import emblem from "@assets/generated_images/malian_official_seal_emblem.png";
import lawyer from "@assets/generated_images/portrait_of_malian_lawyer_professional.png";
import marraine from "@assets/generated_images/portrait_of_malian_female_leader_professional.png";

export default function Partners() {
  return (
    <Layout>
      <div className="bg-background min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary tracking-widest uppercase">
              Ils nous soutiennent
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Partenaires & Sponsors
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La réussite du centenaire repose sur l'engagement de nos institutions et le soutien indéfectible de nos parrains. 
              Merci à tous ceux qui rendent cet événement possible.
            </p>
          </div>

          {/* Parrain & Marraine Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
            {/* Parrain */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
              <Card className="relative bg-card border-border shadow-xl rounded-3xl overflow-hidden h-full">
                <div className="h-32 bg-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>
                <div className="px-8 pb-8 -mt-16 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full border-4 border-background shadow-xl overflow-hidden mb-6 bg-gray-200">
                    <img src={lawyer} alt="Koto Traore" className="w-full h-full object-cover" />
                  </div>
                  <Badge className="bg-accent text-white mb-3">Parrain du Centenaire</Badge>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-1">Maître Koto Traore</h2>
                  <p className="text-muted-foreground font-medium mb-4 flex items-center justify-center gap-2">
                    <Scale className="w-4 h-4" /> Avocat au Barreau Malien
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "Originaire de Kourouninkoto, je dois mon parcours aux bases solides reçues dans cette école. C'est un honneur de parrainer ce centenaire."
                  </p>
                </div>
              </Card>
            </div>

            {/* Marraine */}
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform -rotate-3 transition-transform group-hover:-rotate-6"></div>
              <Card className="relative bg-card border-border shadow-xl rounded-3xl overflow-hidden h-full">
                <div className="h-32 bg-secondary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>
                <div className="px-8 pb-8 -mt-16 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full border-4 border-background shadow-xl overflow-hidden mb-6 bg-gray-200">
                    <img src={marraine} alt="Dado Bassy" className="w-full h-full object-cover" />
                  </div>
                  <Badge className="bg-secondary text-primary mb-3">Marraine du Centenaire</Badge>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-1">Mme Dado Bassy</h2>
                  <p className="text-muted-foreground font-medium mb-4 flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4" /> Figure Communautaire
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "L'éducation de nos enfants est la clé de notre avenir. Je m'engage pour que l'EFK continue de briller pour les 100 prochaines années."
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Institutional Partners */}
          <div className="mb-24">
            <h3 className="text-2xl font-serif font-bold text-center text-primary mb-12 relative">
              <span className="bg-background px-4 relative z-10">Partenaires Institutionnels</span>
              <span className="absolute top-1/2 left-0 right-0 h-px bg-border -z-0"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Ministère de l'Éducation Nationale",
                "Académie d'Enseignement de Kita",
                "CAP de Toukoto"
              ].map((name, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
                  <div className="w-24 h-24 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    <img src={emblem} alt="Emblème officiel" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-bold text-foreground">{name}</h4>
                  <Badge variant="outline" className="mt-3 border-gray-200 text-gray-500 text-xs">Partenaire Officiel</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Donation */}
          <div className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Devenez Partenaire du Centenaire
              </h2>
              <p className="text-primary-foreground/80 mb-8 text-lg">
                Vous souhaitez associer votre image à cet événement historique ou soutenir nos actions éducatives ?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/don">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold py-6 px-8 text-lg shadow-xl">
                    Faire un Don <Heart className="ml-2 w-5 h-5 fill-current" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary font-bold py-6 px-8 text-lg">
                    Nous Contacter <Handshake className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}