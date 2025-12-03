import { Layout } from "@/components/layout";
import { Quote } from "lucide-react";
import testimonial1 from "@assets/generated_images/malian_elder_portrait_professional.png";
import testimonial2 from "@assets/generated_images/malian_professional_woman_portrait.png";
import testimonial3 from "@assets/generated_images/young_malian_graduate_portrait.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amadou Keïta",
      promotion: "Promotion 1965",
      role: "Ancien Ministre",
      image: testimonial1,
      quote: "L'EFK a été le fondement de tout ce que j'ai accompli. C'est ici que j'ai appris non seulement à lire et écrire, mais aussi les valeurs de rigueur et de service à la communauté qui ne m'ont jamais quitté."
    },
    {
      name: "Fatoumata Traoré",
      promotion: "Promotion 1988",
      role: "Médecin Chef",
      image: testimonial2,
      quote: "Je me souviens encore de Monsieur Diallo, mon instituteur en 4ème année. Sa passion pour les sciences a allumé une étincelle en moi. Aujourd'hui, je soigne des vies grâce à cette première impulsion reçue à Kourouninkoto."
    },
    {
      name: "Moussa Diarra",
      promotion: "Promotion 2010",
      role: "Entrepreneur Tech",
      image: testimonial3,
      quote: "L'école a toujours su évoluer avec son temps. C'est la bibliothèque de l'EFK qui m'a ouvert au monde. Fêter ce centenaire, c'est célébrer un siècle d'opportunités offertes à la jeunesse rurale."
    }
  ];

  return (
    <Layout>
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Ils ont fait l'EFK</h2>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Mémoires Vivantes</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Découvrez les parcours inspirants de ceux qui ont usé leurs fonds de culotte sur les bancs de notre école. 
              Leurs histoires sont notre plus grande fierté.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <div key={i} className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                </div>
                
                <div className="absolute top-6 right-6 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 fill-current" />
                </div>

                <div className="p-8 relative -mt-12 bg-card mx-6 rounded-xl shadow-md border border-border/30">
                  <p className="text-muted-foreground italic mb-6 text-sm leading-relaxed">
                    "{item.quote}"
                  </p>
                  
                  <div className="border-t border-border/50 pt-4">
                    <h3 className="font-serif font-bold text-lg text-primary">{item.name}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs font-bold text-accent uppercase tracking-wide">{item.promotion}</span>
                      <span className="text-xs text-muted-foreground">{item.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action for Testimonials */}
          <div className="mt-24 bg-secondary/10 rounded-3xl p-8 md:p-12 text-center border border-secondary/30">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">Vous êtes un ancien élève ?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Votre histoire fait partie de la nôtre. Partagez vos souvenirs, photos de classe ou anecdotes pour enrichir la mémoire collective du centenaire.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
              Partager mon témoignage
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}