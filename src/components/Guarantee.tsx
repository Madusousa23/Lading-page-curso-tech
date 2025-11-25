import { Button } from "@/components/ui/button";
import { Shield, Clock, CheckCircle2 } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="glass-card p-12 rounded-3xl border-2 border-accent/30 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 mb-6 animate-glow">
                <Shield className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
                Garantia Incondicional
              </h2>
              <p className="text-xl text-muted-foreground">
                Seu investimento está 100% protegido
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4 animate-fade-in">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">30 Dias de Garantia</h3>
                  <p className="text-muted-foreground">
                    Se em até 30 dias você não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Risco Zero</h3>
                  <p className="text-muted-foreground">
                    Teste o curso por completo. Se não for para você, é só pedir o reembolso total.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8 mb-8 animate-scale-in">
              <h4 className="text-2xl font-bold mb-4 text-center">
                Por que oferecemos essa garantia?
              </h4>
              <p className="text-center text-muted-foreground text-lg leading-relaxed">
                Porque acreditamos na qualidade do nosso conteúdo e sabemos que você vai adorar. 
                Mais de <span className="text-accent font-bold">95% dos alunos</span> completam o curso 
                e recomendam para amigos. A sua satisfação é nossa prioridade.
              </p>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="cta"
                className="text-lg px-12 py-7 animate-glow"
                onClick={() => document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" })}
              >
                Começar Agora Sem Riscos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
