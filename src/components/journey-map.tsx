export function JourneyMap() {
  const waypoints = [
    { name: "Bamako", distance: "0 km", time: "Départ", description: "Capitale du Mali" },
    { name: "Kati", distance: "15 km", time: "20 min", description: "Ville garnison" },
    { name: "Kassaro", distance: "120 km", time: "1h30", description: "Escale traditionnelle" },
    { name: "Badinko", distance: "160 km", time: "2h30", description: "Paysage de savane" },
    { name: "Kita", distance: "185 km", time: "3h", description: "Capitale de l'arachide" },
    { name: "Djidian", distance: "230 km", time: "4h30", description: "Zone forestière" },
    { name: "Mambiri", distance: "270 km", time: "5h30", description: "Dernière étape" },
    { name: "Kourouninkoto", distance: "300 km", time: "~7h", description: "Destination finale" },
  ];

  return (
    <section className="py-20 bg-secondary/10 border-y border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Tracez votre Itinéraire
            </h2>
            <p className="text-muted-foreground text-lg">
              Route Bamako → Kourouninkoto (300 km, ~7 heures de voyage)
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Route Timeline */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 border border-border">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary"></div>

                {/* Waypoints */}
                <div className="space-y-8">
                  {waypoints.map((point, index) => (
                    <div key={point.name} className="relative pl-24 group">
                      {/* Circle */}
                      <div className={`absolute left-0 top-1 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white border-4 border-background shadow-lg transition-all group-hover:scale-110 ${
                        index === 0 ? 'bg-primary' : index === waypoints.length - 1 ? 'bg-accent' : 'bg-secondary'
                      }`}>
                        {index + 1}
                      </div>

                      {/* Content */}
                      <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/30 group-hover:border-primary/50 transition-all">
                        <h4 className="font-bold text-lg text-primary">{point.name}</h4>
                        <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
                          <div className="flex gap-4 text-sm">
                            <span className="text-muted-foreground"><strong>Distance:</strong> {point.distance}</span>
                            <span className="text-muted-foreground"><strong>Temps:</strong> {point.time}</span>
                          </div>
                          <span className="text-xs text-accent font-medium">{point.description}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Route Summary */}
            <div className="space-y-6">
              <div className="bg-primary text-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-serif font-bold text-xl mb-4">Résumé du Trajet</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="opacity-90">Distance totale</span>
                    <span className="font-bold text-secondary text-lg">~300 km</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="opacity-90">Durée estimée</span>
                    <span className="font-bold text-secondary text-lg">~7 heures</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-90">Villes étapes</span>
                    <span className="font-bold text-secondary text-lg">8</span>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6">
                <h4 className="font-bold text-accent mb-3 flex items-center gap-2">
                  <span className="text-xl">💡</span> Conseils
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ Route goudronné jusqu'à Kita</li>
                  <li>✓ Piste aménagée après Kita</li>
                  <li>✓ Partir tôt (6h00) recommandé</li>
                  <li>✓ Véhicule 4x4 conseillé</li>
                  <li>✓ Points de restauration à Kassaro et Kita</li>
                </ul>
              </div>

              <div className="bg-background rounded-2xl p-6 border-2 border-dashed border-primary/20">
                <p className="text-sm text-center text-muted-foreground">
                  <strong>Plus de détails ?</strong><br/>
                  Consultez notre page <a href="/trajet" className="text-primary hover:underline font-bold">Trajet</a> pour une carte interactive complète.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}