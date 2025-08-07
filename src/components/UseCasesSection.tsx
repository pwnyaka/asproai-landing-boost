import { FileText, MessageSquare, BarChart, Mail, ShoppingCart, Users } from "lucide-react";

const useCases = [
  {
    icon: FileText,
    title: "Создание контента",
    description: "Генерация маркетинговых текстов, статей, и описаний товаров",
    example: "Автоматическое создание описаний для 100+ товаров за 10 минут",
    industry: "E-commerce, Маркетинг"
  },
  {
    icon: MessageSquare,
    title: "Автоматизация поддержки",
    description: "Умные ответы на частые вопросы клиентов",
    example: "Сокращение времени ответа на 80% при сохранении качества",
    industry: "Сервис, Ритейл"
  },
  {
    icon: BarChart,
    title: "Анализ данных",
    description: "Быстрая обработка и анализ больших объемов информации",
    example: "Анализ продаж и прогнозирование трендов за 5 минут",
    industry: "Аналитика, Финансы"
  },
  {
    icon: Mail,
    title: "Email-маркетинг",
    description: "Персонализированные рассылки и автоматические последовательности",
    example: "Увеличение открываемости писем на 45%",
    industry: "Маркетинг, Продажи"
  },
  {
    icon: ShoppingCart,
    title: "Управление заказами",
    description: "Автоматическая обработка и категоризация заказов",
    example: "Ускорение обработки заказов в 3 раза",
    industry: "Логистика, E-commerce"
  },
  {
    icon: Users,
    title: "HR и рекрутинг",
    description: "Скрининг резюме и генерация вакансий",
    example: "Сокращение времени отбора кандидатов на 60%",
    industry: "HR, Кадры"
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Примеры применения
            <span className="block text-transparent bg-clip-text bg-gradient-primary">
              ИИ в бизнесе
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реальные случаи использования Аспро.ИИ для решения бизнес-задач
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div key={index} className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 border border-border hover:border-primary/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="bg-gradient-card rounded-lg p-3 border border-primary/20">
                    <p className="text-sm font-medium text-primary mb-1">
                      Результат:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {useCase.example}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {useCase.industry}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Не нашли свой случай?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Аспро.ИИ адаптируется под любые бизнес-процессы. Напишите нам, и мы поможем найти оптимальное решение.
            </p>
            <button className="bg-gradient-cta text-white px-8 py-3 rounded-xl font-semibold hover:shadow-button transition-all duration-300 transform hover:scale-105">
              Обсудить ваш случай
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;