const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            Tech Innovation
          </h3>
          <p className="text-muted-foreground">
            Transformando pessoas em profissionais tech desde 2020
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contato
            </a>
          </div>
          <p className="text-sm text-muted-foreground pt-8">
            © 2024 Tech Innovation. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
