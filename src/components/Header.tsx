import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-foreground">Аспро.ИИ</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              Как работает
            </a>
            <a href="#use-cases" className="text-foreground hover:text-primary transition-colors">
              Примеры
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="cta" size="sm">
              Присоединиться к листу ожидания
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;