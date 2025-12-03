import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Smartphone, Building2, CreditCard, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Donate() {
  const { toast } = useToast();
  const [amount, setAmount] = useState("5000");
  const [paymentMethod, setPaymentMethod] = useState("orange");

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Merci pour votre générosité !",
      description: "Ceci est une simulation. Aucun paiement n'a été effectué.",
      duration: 5000,
    });
  };

  return (
    <Layout>
      <div className="bg-background min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-accent text-white mb-4 px-4 py-1 text-sm tracking-widest uppercase">
                Soutenir l'EFK
              </Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Contribuez à l'Excellence
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Vos dons permettent de financer la rénovation des salles de classe, l'achat de matériel pédagogique et les bourses pour les élèves méritants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-primary mb-2">Rénovations</h3>
                  <p className="text-sm text-muted-foreground">Réhabilitation des bâtiments historiques de 1925</p>
                </CardContent>
              </Card>
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-accent mb-2">Bourses</h3>
                  <p className="text-sm text-muted-foreground">Soutien scolaire aux élèves issus de familles modestes</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary/20 border-secondary/40">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-primary mb-2">Numérique</h3>
                  <p className="text-sm text-muted-foreground">Équipement de la nouvelle salle informatique</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border shadow-xl overflow-hidden">
              <div className="bg-primary p-6 text-white text-center">
                <h2 className="text-2xl font-serif font-bold flex items-center justify-center gap-2">
                  <Heart className="fill-accent text-accent w-6 h-6 animate-pulse" />
                  Faire un Don
                </h2>
              </div>
              <CardContent className="p-8">
                <form onSubmit={handleDonate} className="space-y-8">
                  
                  {/* Amount Selection */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Je souhaite donner :</Label>
                    <RadioGroup value={amount} onValueChange={setAmount} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {["1000", "2000", "5000", "10000"].map((val) => (
                        <div key={val}>
                          <RadioGroupItem value={val} id={`amount-${val}`} className="peer sr-only" />
                          <Label
                            htmlFor={`amount-${val}`}
                            className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-transparent p-4 hover:bg-accent/5 hover:text-accent-foreground peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/10 peer-data-[state=checked]:text-accent cursor-pointer transition-all"
                          >
                            <span className="text-xl font-bold">{val}</span>
                            <span className="text-xs uppercase">FCFA</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <div className="pt-2">
                      <Label htmlFor="custom-amount" className="text-sm text-muted-foreground mb-2 block">Autre montant (FCFA)</Label>
                      <Input 
                        id="custom-amount" 
                        placeholder="Entrez un montant" 
                        type="number" 
                        className="max-w-xs"
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Moyen de paiement :</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative">
                        <RadioGroupItem value="orange" id="orange" className="peer sr-only" />
                        <Label
                          htmlFor="orange"
                          className="flex items-center justify-center rounded-lg border-2 border-muted bg-transparent p-4 hover:bg-orange-50 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-50 peer-data-[state=checked]:text-orange-700 cursor-pointer transition-all h-full"
                        >
                          <div className="text-center">
                            <div className="font-bold text-lg">Orange Money</div>
                            <div className="text-xs text-muted-foreground">#144#</div>
                          </div>
                          {paymentMethod === 'orange' && <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-orange-500" />}
                        </Label>
                      </div>

                      <div className="relative">
                        <RadioGroupItem value="moov" id="moov" className="peer sr-only" />
                        <Label
                          htmlFor="moov"
                          className="flex items-center justify-center rounded-lg border-2 border-muted bg-transparent p-4 hover:bg-blue-50 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 peer-data-[state=checked]:text-blue-700 cursor-pointer transition-all h-full"
                        >
                          <div className="text-center">
                            <div className="font-bold text-lg">Moov Money</div>
                            <div className="text-xs text-muted-foreground">*166#</div>
                          </div>
                          {paymentMethod === 'moov' && <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-blue-500" />}
                        </Label>
                      </div>

                      <div className="relative">
                        <RadioGroupItem value="card" id="card" className="peer sr-only" />
                        <Label
                          htmlFor="card"
                          className="flex items-center justify-center rounded-lg border-2 border-muted bg-transparent p-4 hover:bg-primary/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary cursor-pointer transition-all h-full"
                        >
                          <div className="text-center">
                            <div className="font-bold text-lg">Carte Bancaire</div>
                            <div className="text-xs text-muted-foreground">Visa / Mastercard</div>
                          </div>
                          {paymentMethod === 'card' && <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-primary" />}
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input id="name" placeholder="Votre nom" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" type="tel" placeholder="+223 ..." required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville</Label>
                      <Input id="city" placeholder="Bamako, Paris..." />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6">
                    Faire un don de {amount} FCFA
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Paiement 100% sécurisé. Un reçu fiscal vous sera envoyé par email.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}