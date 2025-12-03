import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import tribute1 from "@assets/generated_images/portrait_of_old_malian_teacher_1950s.png";
import tribute2 from "@assets/generated_images/portrait_of_first_female_student_1940s.png";
import tribute3 from "@assets/generated_images/portrait_of_strict_headmaster_1960s.png";
import tribute4 from "@assets/generated_images/portrait_of_legendary_teacher_1980s.png";

const tributes = [
  {
    name: "Mamadou Sissoko",
    role: "Instituteur (1952-1985)",
    image: tribute1,
    quote: "L'éducation est l'arme la plus puissante pour changer le monde. J'ai consacré ma vie à affûter l'esprit de la jeunesse de Kourouninkoto."
  },
  {
    name: "Aminata Diallo",
    role: "Première Bachelière (Promo 1948)",
    image: tribute2,
    quote: "Être la première fille à obtenir mon certificat fut une fierté immense. J'ai ouvert la voie pour mes sœurs, et aujourd'hui, elles sont médecins, ingénieures, enseignantes."
  },
  {
    name: "Directeur Koné",
    role: "Directeur d'École (1960-1975)",
    image: tribute3,
    quote: "La discipline et le respect sont les fondations du savoir. Sous mon arbre à palabres, nous avons réglé bien des conflits et construit bien des avenirs."
  },
  {
    name: "Moussa Traoré",
    role: "Professeur de Mathématiques (1980-2010)",
    image: tribute4,
    quote: "Les mathématiques ne sont pas que des chiffres, c'est un langage universel. J'ai voulu montrer à mes élèves que la logique pouvait les mener partout."
  }
];

export default function Tributes() {
  return (
    <Layout>
      <div className="bg-background min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm tracking-widest uppercase bg-accent/10 text-accent border-accent/20">
              In Memoriam
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Hommages aux Pionniers
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ils ont bâti l'âme de l'École Fondamentale de Kourouninkoto. Enseignants dévoués, élèves brillants, directeurs visionnaires... 
              Nous honorons leur mémoire et leur contribution inestimable.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent className="-ml-4">
                {tributes.map((item, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full border-none shadow-none bg-transparent">
                        <CardContent className="flex flex-col items-center p-0 h-full">
                          <div className="relative w-full aspect-square mb-6 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl max-w-[280px]">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover filter grayscale contrast-110 hover:filter-none transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          <div className="text-center bg-card p-8 rounded-xl border border-border shadow-sm w-full flex-1 flex flex-col relative">
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                              <Quote className="w-5 h-5 fill-current" />
                            </div>
                            
                            <h3 className="mt-4 text-xl font-serif font-bold text-primary">{item.name}</h3>
                            <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">{item.role}</p>
                            
                            <p className="text-muted-foreground italic leading-relaxed flex-1">
                              "{item.quote}"
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-12 border-primary text-primary hover:bg-primary hover:text-white" />
                <CarouselNext className="-right-12 border-primary text-primary hover:bg-primary hover:text-white" />
              </div>
              
              {/* Mobile Controls */}
              <div className="flex justify-center gap-4 mt-8 md:hidden">
                <CarouselPrevious className="static translate-y-0 border-primary text-primary hover:bg-primary hover:text-white" />
                <CarouselNext className="static translate-y-0 border-primary text-primary hover:bg-primary hover:text-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </Layout>
  );
}