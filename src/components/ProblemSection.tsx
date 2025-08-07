import { AlertTriangle, CreditCard, Users, BookOpen, Zap, DollarSign } from "lucide-react";

const problems = [
  {
    icon: CreditCard,
    title: "Сложности с оплатой и доступом",
    description: "Проблемы с платежами и доступом к зарубежным ИИ-сервисам"
  },
  {
    icon: Users,
    title: "Массовое внедрение для сотрудников",
    description: "Сложности внедрения ИИ-инструментов для всей команды"
  },
  {
    icon: BookOpen,
    title: "Барьеры в обучении",
    description: "Трудности в изучении и начале работы с ИИ-инструментами"
  },
  {
    icon: AlertTriangle,
    title: "Страх отстать от конкурентов",
    description: "FOMO: беспокойство об отставании без новых ИИ-инструментов"
  },
  {
    icon: Zap,
    title: "Недостаток идей и опыта",
    description: "Неопределенность в применении ИИ в бизнес-процессах"
  },
  {
    icon: DollarSign,
    title: "Жесткая монетизация",
    description: "Негибкие фиксированные платежи, неподходящие для МСБ"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Проблемы внедрения ИИ 
            <span className="block text-transparent bg-clip-text bg-gradient-primary">
              в малом и среднем бизнесе
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы понимаем сложности, с которыми сталкиваются компании при попытке внедрить ИИ-решения
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Аспро.ИИ решает все эти проблемы
            </h3>
            <p className="text-lg text-muted-foreground">
              Единая платформа для простого, доступного и эффективного внедрения ИИ в ваш бизнес
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;