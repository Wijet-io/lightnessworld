
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Clock, BookOpen } from "lucide-react";

const About = () => {
  return <section className="section-wrapper bg-gradient-to-b from-white/80 to-secondary/50 relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Plus qu'une simple application
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              LightNess est née d'une vision profonde : créer un espace où spiritualité et technologie se rencontrent harmonieusement pour vous accompagner dans votre cheminement personnel.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="feature-card">
                <Sparkles className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-lg font-semibold mb-2">Innovation Spirituelle</h3>
                <p className="text-sm text-muted-foreground">Un pont entre tradition et modernité</p>
              </div>
              
              <div className="feature-card">
                <Heart className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-lg font-semibold mb-2">Accompagnement</h3>
                <p className="text-sm text-muted-foreground">Un soutien constant dans votre parcours</p>
              </div>
              
              <div className="feature-card">
                <Clock className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-lg font-semibold mb-2">Simplicité</h3>
                <p className="text-sm text-muted-foreground">Une interface intuitive et accessible</p>
              </div>
              
              <div className="feature-card">
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-lg font-semibold mb-2">Sagesse</h3>
                <p className="text-sm text-muted-foreground">Des ressources riches et pertinentes</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative w-full mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden bg-background relative">
                <img 
                  src="/assets/images/bg_about.png" 
                  alt="LightNess Aperçu" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/100 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-between p-8">
                  <img 
                    src="/assets/images/logo.svg" 
                    alt="LightNess Logo" 
                    className="w-36 h-36"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-24 pb-8 px-8"
                  >
                    <h4 className="text-lg font-semibold mb-3 text-white">
                      Notre Mission
                    </h4>
                    <p className="text-sm text-white/90 leading-relaxed">
                      Faciliter votre voyage spirituel à travers une technologie bienveillante et intuitive
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default About;
