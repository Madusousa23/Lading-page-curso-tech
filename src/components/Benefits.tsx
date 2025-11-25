import { Code, Rocket, Shield, Users, Zap, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Code,
    title: "Projetos Reais",
    description: "Construa aplicações completas do zero, com código profissional e boas práticas",
  },
  {
    icon: Rocket,
    title: "Aceleração de Carreira",
    description: "Saia do zero ao profissional em tempo recorde, dominando as tecnologias mais requisitadas",
  },
  {
    icon: Shield,
    title: "Metodologia Validada",
    description: "Aprenda com quem já formou centenas de desenvolvedores bem-sucedidos",
  },
  {
    icon: Users,
    title: "Networking Poderoso",
    description: "Conecte-se com outros profissionais e expanda suas oportunidades no mercado",
  },
  {
    icon: Zap,
    title: "Aprendizado Acelerado",
    description: "Método otimizado que elimina o desnecessário e foca no que realmente importa",
  },
  {
    icon: Trophy,
    title: "Certificado Profissional",
    description: "Comprove suas habilidades com certificado reconhecido pelo mercado",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Por Que Este Curso é Diferente?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Benefícios exclusivos que vão turbinar sua evolução profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <benefit.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
