import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <Layout>
      <div className="bg-background min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary tracking-widest uppercase">
              Contactez-nous
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Restons en Contact
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vous avez des questions sur le centenaire ? Vous souhaitez proposer un partenariat ou simplement dire bonjour ? 
              L'équipe d'organisation est à votre écoute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-primary text-white border-none shadow-xl">
                <CardHeader>
                  <h3 className="text-2xl font-serif font-bold mb-2">Informations</h3>
                  <p className="text-primary-foreground/80">Retrouvez-nous à Kourouninkoto ou contactez-nous directement.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Adresse</h4>
                      <p className="text-sm text-primary-foreground/80 leading-relaxed">
                        École Fondamentale de Kourouninkoto<br/>
                        Cercle de Kita, Région de Kita<br/>
                        Mali
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-sm text-primary-foreground/80">
                        contact@efk-centenaire.ml<br/>
                        presse@efk-centenaire.ml
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Téléphone</h4>
                      <p className="text-sm text-primary-foreground/80">
                        +223 70 00 00 00<br/>
                        +223 60 00 00 00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="rounded-xl overflow-hidden shadow-lg border border-border h-64 bg-secondary/20 relative">
                {/* Mock Map */}
                <div className="absolute inset-0 flex items-center justify-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mali_relief_location_map.jpg/640px-Mali_relief_location_map.jpg')] bg-cover bg-center opacity-50 grayscale">
                   <div className="bg-primary text-white px-4 py-2 rounded-full shadow-xl font-bold flex items-center gap-2 animate-bounce">
                     <MapPin className="w-4 h-4" /> Nous sommes ici
                   </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Envoyez un message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input id="name" placeholder="Votre nom" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" placeholder="Objet de votre message" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Votre message..." className="min-h-[150px]" required />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6">
                    Envoyer le message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
}