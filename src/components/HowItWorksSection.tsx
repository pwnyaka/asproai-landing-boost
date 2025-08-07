import { ArrowRight, UserPlus, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Регистрация",
    description: "Простая регистрация без сложных настроек",
    details: "Создайте аккаунт за 2 минуты"
  },
  {
    icon: Settings,
    title: "Настройка",
    description: "Выберите нужные ИИ-инструменты для вашего бизнеса",
    details: "Готовые шаблоны для разных отраслей"
  },
  {
    icon: Rocket,
    title: "Запуск",
    description: "Начните автоматизировать процессы и повышать эффективность",
    details: "Результат с первого дня использования"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Как это работает
            <span className="block text-transparent bg-clip-text bg-gradient-primary">
              всего за 3 шага
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Простой процесс внедрения ИИ в ваш бизнес
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border text-center h-full">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="bg-gradient-card rounded-lg p-3 border border-primary/20">
                      <p className="text-sm font-medium text-primary">
                        {step.details}
                      </p>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Среднее время внедрения
              </h3>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">
                15 мин
              </div>
              <p className="text-muted-foreground">
                От регистрации до первых автоматизированных процессов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;