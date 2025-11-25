import { Button } from "@/components/ui/button";
import { Check, Clock, TrendingUp } from "lucide-react";

const Offer = () => {
  return (
    <section id="offer" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Oferta Especial de Lançamento
          </h2>
          <p className="text-xl text-muted-foreground">
            Condições exclusivas para os primeiros alunos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="glass-card p-8 rounded-2xl border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Acesso Vitalício</h3>
                  <p className="text-muted-foreground">
                    Assista quantas vezes quiser, para sempre
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border-accent/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Atualizações Gratuitas</h3>
                  <p className="text-muted-foreground">
                    Receba todo o conteúdo novo sem pagar nada a mais
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg">Certificado de Conclusão</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg">Suporte Direto com Especialistas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg">Comunidade Exclusiva de Alunos</span>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="glass-card p-10 rounded-3xl border-2 border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-6 py-2 rounded-bl-2xl font-bold">
                50% OFF
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground mb-2 line-through text-xl">
                    De R$ 3.997
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-6xl font-black gradient-primary bg-clip-text text-transparent">
                      R$ 1.997
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    ou 12x de R$ 197 sem juros
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    variant="hero"
                    className="w-full text-lg py-7"
                    onClick={() => window.open("#checkout", "_self")}
                  >
                    Quero Garantir Minha Vaga Agora
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    🔒 Pagamento 100% seguro
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-center text-accent font-semibold animate-glow">
                    ⚡ Oferta válida por tempo limitado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
