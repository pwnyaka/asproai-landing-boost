import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Что такое Aspro.AI и как он связан с Aspro.Cloud?",
    answer: "Aspro.AI — это новый продукт в экосистеме Aspro, специально разработанный для предоставления малому и среднему бизнесу простого доступа к ведущим ИИ-моделям. Мы используем надежность и опыт Aspro.Cloud для создания удобной ИИ-платформы."
  },
  {
    question: "Нужно ли использовать VPN для работы с зарубежными ИИ-сервисами?",
    answer: "Нет! Одно из ключевых преимуществ Aspro.AI — это прямой доступ к ведущим мировым ИИ-моделям без необходимости использования VPN или сложных настроек. Мы обеспечиваем стабильное соединение через нашу инфраструктуру."
  },
  {
    question: "Как быстро можно внедрить ИИ для всей команды?",
    answer: "Среднее время внедрения составляет всего 15 минут от регистрации до первых автоматизированных процессов. Наша платформа предназначена для массового развертывания, позволяя добавить всю команду и настроить необходимые инструменты за считанные минуты."
  },
  {
    question: "Какая система оплаты? Есть ли фиксированные тарифы?",
    answer: "Мы предлагаем гибкую систему оплаты 'плати за использование', специально разработанную для нужд МСБ. Никаких жестких фиксированных тарифов — вы платите только за то, что действительно используете, что может сократить расходы на ИИ до 60%."
  },
  {
    question: "Насколько безопасны мои данные?",
    answer: "Безопасность данных — наш приоритет. Мы используем шифрование корпоративного уровня, соблюдаем требования GDPR и не передаем ваши данные третьим лицам. Все обработки происходят в защищенной среде с полным контролем доступа."
  },
  {
    question: "Какие ИИ-модели доступны на платформе?",
    answer: "Мы предоставляем доступ к ведущим мировым ИИ-моделям, включая GPT, Claude, Gemini и другие. Набор доступных моделей постоянно расширяется, и вы всегда имеете доступ к самым современным инструментам."
  },
  {
    question: "Нужны ли технические знания для работы с платформой?",
    answer: "Нет! Aspro.AI разработан для пользователей без технического background. Интуитивный интерфейс, готовые шаблоны и пошаговые инструкции позволяют начать работу сразу. Автоматизация создается без программирования."
  },
  {
    question: "Когда планируется запуск платформы?",
    answer: "Мы активно работаем над MVP и планируем мягкий запуск в ближайшие месяцы. Участники листа ожидания получат приоритетный доступ к бета-версии и смогут влиять на развитие продукта."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Часто задаваемые
            <span className="block text-transparent bg-clip-text bg-gradient-primary">
              вопросы
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о Aspro.AI
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              Не нашли ответ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами, и мы ответим на все ваши вопросы
            </p>
            <button className="bg-gradient-cta text-white px-8 py-3 rounded-xl font-semibold hover:shadow-button transition-all duration-300 transform hover:scale-105">
              Задать вопрос
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;