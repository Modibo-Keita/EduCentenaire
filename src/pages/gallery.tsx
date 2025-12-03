import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ZoomIn } from "lucide-react";
import archive1 from "@assets/generated_images/vintage_1930s_malian_classroom_black_and_white.png";
import archive2 from "@assets/generated_images/vintage_1950s_school_courtyard_mali.png";
import archive3 from "@assets/generated_images/vintage_1970s_class_photo_mali.png";
import archive4 from "@assets/generated_images/old_library_books_mali_school.png";

// Mock data for gallery categories
const archives = [
  { src: archive1, title: "La première classe (1930)", category: "1925-1950" },
  { src: archive2, title: "Récréation dans la cour (1955)", category: "1950-1975" },
  { src: archive3, title: "Promotion 'Indépendance' (1970)", category: "1950-1975" },
  { src: archive4, title: "L'ancienne bibliothèque", category: "1925-1950" },
];

export default function Gallery() {
  return (
    <Layout>
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary tracking-widest uppercase">
              Patrimoine Visuel
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Archives Historiques
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Plongez dans le passé de l'École Fondamentale de Kourouninkoto. 
              Ces clichés rares témoignent de la vie quotidienne, des visages et des lieux qui ont marqué notre histoire.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="h-auto p-1 bg-secondary/30 rounded-full">
                <TabsTrigger value="all" className="rounded-full px-6 py-2 font-serif data-[state=active]:bg-primary data-[state=active]:text-white">Tout voir</TabsTrigger>
                <TabsTrigger value="1925-1950" className="rounded-full px-6 py-2 font-serif data-[state=active]:bg-primary data-[state=active]:text-white">1925-1950</TabsTrigger>
                <TabsTrigger value="1950-1975" className="rounded-full px-6 py-2 font-serif data-[state=active]:bg-primary data-[state=active]:text-white">1950-1975</TabsTrigger>
                <TabsTrigger value="video" className="rounded-full px-6 py-2 font-serif data-[state=active]:bg-primary data-[state=active]:text-white">Vidéos</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {archives.map((item, index) => (
                  <GalleryItem key={index} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="1925-1950" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {archives.filter(a => a.category === "1925-1950").map((item, index) => (
                  <GalleryItem key={index} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="1950-1975" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {archives.filter(a => a.category === "1950-1975").map((item, index) => (
                  <GalleryItem key={index} item={item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="video" className="mt-0">
              <div className="flex flex-col items-center justify-center py-20 bg-secondary/10 rounded-3xl border border-dashed border-secondary">
                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                   <ZoomIn className="w-8 h-8 text-primary opacity-50" />
                 </div>
                 <p className="text-xl font-serif font-bold text-primary mb-2">Bientôt disponible</p>
                 <p className="text-muted-foreground max-w-md text-center">
                   Nous numérisons actuellement des bobines d'archives exceptionnelles qui seront dévoilées lors du centenaire.
                 </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

function GalleryItem({ item }: { item: { src: string; title: string; category: string } }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer bg-black/5 shadow-md hover:shadow-xl transition-all duration-500">
          <img 
            src={item.src} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter sepia-[0.3] group-hover:sepia-0"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ZoomIn className="text-white w-10 h-10 opacity-80" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-serif font-bold text-lg">{item.title}</p>
            <span className="text-white/70 text-xs uppercase tracking-wider">{item.category}</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-transparent border-none p-0 shadow-none">
        <div className="relative w-full h-auto rounded-lg overflow-hidden bg-background/95 backdrop-blur p-1 shadow-2xl">
          <img 
            src={item.src} 
            alt={item.title} 
            className="w-full h-auto rounded-sm"
          />
          <div className="p-4 bg-white absolute bottom-0 w-full">
            <h3 className="font-serif font-bold text-xl text-primary">{item.title}</h3>
            <p className="text-sm text-muted-foreground">Archives EFK • Collection Historique</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}