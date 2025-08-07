import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-card-foreground">Aspro.AI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Корпоративное ИИ-решение для малого и среднего бизнеса от экосистемы Aspro.Cloud. 
              Простое внедрение, гибкая оплата, мгновенные результаты.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://aspro.cloud/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Aspro.Cloud
              </a>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">Часть экосистемы Aspro</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  Как работает
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-muted-foreground hover:text-primary transition-colors">
                  Примеры
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>ai@aspro.cloud</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Aspro.AI. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Политика конфиденциальности
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;