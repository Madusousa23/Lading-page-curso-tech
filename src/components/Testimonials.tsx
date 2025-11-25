import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Lucas Silva",
    role: "Full Stack Developer na Tech Corp",
    image: testimonial1,
    text: "Estava travado em tutoriais no YouTube há meses. Esse curso mudou tudo! Em 3 meses consegui meu primeiro emprego como dev e já estou ganhando 3x mais.",
    rating: 5,
  },
  {
    name: "Marina Costa",
    role: "Frontend Developer na StartupXYZ",
    image: testimonial2,
    text: "O melhor investimento que fiz na minha carreira. Saí de arquiteta para desenvolvedora e hoje trabalho remotamente ganhando em dólar. Incrível!",
    rating: 5,
  },
  {
    name: "Rafael Santos",
    role: "Software Engineer",
    image: testimonial3,
    text: "Conteúdo direto ao ponto, projetos práticos e suporte excelente. Em 4 meses já estava trabalhando como desenvolvedor. Valeu cada centavo!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas carreiras
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-4 rounded-full">
            <div className="flex -space-x-2">
              <img src={testimonial1} alt="Student" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
              <img src={testimonial2} alt="Student" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
              <img src={testimonial3} alt="Student" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
            </div>
            <span className="text-sm font-medium">
              <span className="text-accent font-bold">+500 alunos</span> já transformaram suas carreiras
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
