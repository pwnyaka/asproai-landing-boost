import { Globe, Users, BookOpen, Zap, Shield, Wallet } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Доступ к ведущим ИИ-моделям",
    description: "Без VPN и сложных платежей - просто работайте с лучшими мировыми ИИ-решениями",
    benefit: "Экономия времени и ресурсов"
  },
  {
    icon: Users,
    title: "Быстрое внедрение для команды",
    description: "Массовая интеграция и обучение сотрудников за считанные минуты",
    benefit: "Мгновенный старт для всей команды"
  },
  {
    icon: BookOpen,
    title: "Простая кривая обучения",
    description: "Интуитивный интерфейс и пошаговые инструкции для легкого старта",
    benefit: "Минимальные затраты на обучение"
  },
  {
    icon: Zap,
    title: "Автоматизация за минуты",
    description: "Настройка автоматических процессов для рутинных задач без программирования",
    benefit: "Повышение продуктивности на 40%"
  },
  {
    icon: Shield,
    title: "Оставайтесь конкурентоспособными",
    description: "Избегайте AI FOMO и всегда будьте впереди с новейшими ИИ-инструментами",
    benefit: "Конкурентное преимущество"
  },
  {
    icon: Wallet,
    title: "Гибкая система оплаты",
    description: "Платите только за то, что используете - никаких фиксированных тарифов",
    benefit: "Оптимизация расходов на 60%"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ключевые преимущества
            <span className="block text-transparent bg-clip-text bg-gradient-primary">
              Аспро.ИИ
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Все что нужно вашему бизнесу для успешного внедрения ИИ
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border hover:border-primary/50 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="bg-gradient-card rounded-lg p-3 border border-primary/20">
                  <p className="text-sm font-semibold text-primary">
                    ✨ {feature.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Готовы трансформировать ваш бизнес с ИИ?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к листу ожидания и получите приоритетный доступ к платформе
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Получить ранний доступ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;