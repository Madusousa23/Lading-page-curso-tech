import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tech innovation workspace"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Zap className="w-4 h-4 text-accent animate-glow" />
            <span className="text-sm font-medium text-muted-foreground">
              Vagas Limitadas - Turma Exclusiva
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in-delay bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary leading-tight">
          Domine as Tecnologias
          <br />
          do Futuro
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-delay">
          Transforme sua carreira com o curso mais completo de tecnologia do
          mercado. Do zero ao profissional em 12 semanas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button
            size="lg"
            variant="hero"
            className="text-lg px-8 py-6 h-auto"
            onClick={scrollToOffer}
          >
            Garantir Minha Vaga
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 h-auto glass-card border-border/50"
            onClick={() =>
              document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver Conteúdo
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-xl animate-fade-in-delay">
            <div className="text-4xl font-black gradient-primary bg-clip-text text-transparent mb-2">
              12
            </div>
            <p className="text-muted-foreground">Semanas Intensivas</p>
          </div>
          <div className="glass-card p-6 rounded-xl animate-fade-in-delay" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl font-black gradient-primary bg-clip-text text-transparent mb-2">
              +150
            </div>
            <p className="text-muted-foreground">Horas de Conteúdo</p>
          </div>
          <div className="glass-card p-6 rounded-xl animate-fade-in-delay" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-black gradient-primary bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-muted-foreground">Online e Prático</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
