import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="gradient-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Últimas vagas disponíveis</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Pronto Para Transformar
              <br />
              Sua Carreira?
            </h2>

            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto">
              Junte-se a centenas de alunos que já estão construindo o futuro da tecnologia
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                variant="cta"
                className="text-lg px-12 py-7 bg-background text-foreground hover:bg-background/90"
                onClick={() =>
                  document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Garantir Minha Vaga Agora
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Certificado incluso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Garantia de 30 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
