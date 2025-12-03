import { Users, Award } from "lucide-react";
import presidentImg from "@assets/generated_images/portrait_of_president_mamounou_touré.png";

export function Committee() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Comité d'Organisation
            </h2>
            <p className="text-muted-foreground text-lg">
              Une équipe dévouée pour célébrer le centenaire de notre école
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* President's Message */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Award className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-primary">Mot du Président</h3>
                    <p className="text-sm text-muted-foreground">Mamounou Touré</p>
                  </div>
                </div>

                <div className="flex gap-8 items-start mb-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={presidentImg}
                      alt="Mamounou Touré, Président du Comité"
                      className="w-32 h-40 object-cover rounded-lg shadow-lg border-2 border-primary/20"
                    />
                  </div>
                  
                  <blockquote className="text-lg text-foreground leading-relaxed space-y-4 font-light italic flex-1">
                  <p>
                    "Chères amies, chers amis, anciens et futures élèves,
                  </p>
                  <p>
                    C'est avec un honneur immense et une profonde émotion que je m'adresse à vous en tant que président du comité d'organisation du centenaire de notre chère École Fondamentale de Kourouninkoto. Cet anniversaire marque bien plus qu'une simple succession de cent années – c'est la célébration d'un héritage vivant, d'une mission transformatrice et d'une vision collective pour l'avenir.
                  </p>
                  <p>
                    Depuis 1925, notre école a été le cœur battant de Kourouninkoto, transmettant non seulement le savoir académique, mais aussi les valeurs d'intégrité, de persévérance et de solidarité qui définissent notre communauté. Chaque génération d'élèves qui a franchi nos portes a emporté avec elle les graines d'une éducation de qualité et d'une fierté communautaire inébranlable.
                  </p>
                  <p>
                    Ces quatre jours de décembre seront l'occasion de nous réunir pour honorer ce passé magnifique, célébrer nos accomplissements collectifs et esquisser ensemble les contours d'un avenir plus prometteur. Nous accueillons chaleureusement tous les anciens élèves, les parents, les amis de l'école et tous ceux qui partagent notre conviction que l'éducation est le fondement du progrès.
                  </p>
                  <p>
                    Ensemble, nous écrirons le prochain chapitre de cette belle histoire.
                  </p>
                  <p className="text-right">
                    <strong>Respectueusement,</strong><br/>
                    <strong>Mamounou Touré</strong><br/>
                    <span className="text-sm">Président du Comité d'Organisation</span>
                  </p>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Committee Info */}
            <div className="space-y-6">
              <div className="bg-white border-2 border-primary rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-7 w-7 text-accent" />
                  <h4 className="font-serif font-bold text-xl text-primary">Notre Mission</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Organiser une célébration mémorable qui unit tous les anciens, actuels et futurs membres de la famille de l'École Fondamentale de Kourouninkoto.
                </p>
              </div>

              <div className="bg-primary text-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-serif font-bold text-lg mb-4 text-secondary">Domaines d'Action</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Programme des festivités</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Logistique & hébergement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Communication & marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Collecte de fonds & partenariats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Protocole & cérémonies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background border-2 border-secondary/30 rounded-2xl p-6">
                <p className="text-xs text-center text-muted-foreground">
                  <strong>Avoir des questions ?</strong><br/>
                  <a href="/contact" className="text-primary hover:underline font-bold">
                    Contactez-nous
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}