import { BookOpen, Code2, Database, Layout, Server, Sparkles } from "lucide-react";

const modules = [
  {
    icon: Layout,
    number: "01",
    title: "Fundamentos Modernos",
    description: "HTML5, CSS3, JavaScript ES6+ e TypeScript. Base sólida para sua jornada tech.",
    duration: "4 semanas",
  },
  {
    icon: Code2,
    title: "React & Ecossistema",
    number: "02",
    description: "React, Hooks, Context API, React Router e as melhores bibliotecas do ecossistema.",
    duration: "3 semanas",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    number: "03",
    description: "Node.js, Express, RESTful APIs, autenticação e segurança de aplicações.",
    duration: "2 semanas",
  },
  {
    icon: Database,
    title: "Bancos de Dados",
    number: "04",
    description: "SQL, PostgreSQL, MongoDB e estratégias de modelagem de dados.",
    duration: "2 semanas",
  },
  {
    icon: Sparkles,
    title: "DevOps & Deploy",
    number: "05",
    description: "Git, GitHub, CI/CD, Docker e deploy profissional em cloud.",
    duration: "1 semana",
  },
  {
    icon: BookOpen,
    title: "Projeto Final",
    number: "06",
    description: "Desenvolva uma aplicação completa e robusta para seu portfólio profissional.",
    duration: "2 semanas",
  },
];

const Modules = () => {
  return (
    <section id="modules" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
            Conteúdo Programático
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            6 módulos completos que vão te levar do iniciante ao profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <module.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                    {module.number}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <span>📚</span>
                    {module.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
