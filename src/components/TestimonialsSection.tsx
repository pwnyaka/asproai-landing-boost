import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Место для отзыва",
    position: "Генеральный директор",
    company: "Компания-партнер",
    content: "Здесь будет отзыв первого клиента о том, как Aspro.AI помог трансформировать их бизнес-процессы.",
    rating: 5,
    image: "👤"
  },
  {
    name: "Место для отзыва",
    position: "Руководитель отдела маркетинга",
    company: "Технологическая компания",
    content: "Отзыв о том, как платформа упростила внедрение ИИ и повысила эффективность команды.",
    rating: 5,
    image: "👤"
  },
  {
    name: "Место для отзыва",
    position: "Владелец бизнеса",
    company: "Малый бизнес",
    content: "История успеха малого бизнеса, который смог автоматизировать ключевые процессы с помощью Aspro.AI.",
    rating: 5,
    image: "👤"
  }
];

const stats = [
  { number: "300+", label: "Компаний в листе ожидания", subtext: "уже зарегистрировались" },
  { number: "95%", label: "Удовлетворенность", subtext: "среди тестировщиков" },
  { number: "40%", label: "Рост продуктивности", subtext: "в среднем у клиентов" },
  { number: "15 мин", label: "Время внедрения", subtext: "от регистрации до результата" }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Что говорят наши
            <span className="block text-transparent bg-clip-text bg-gradient-primary">
              первые пользователи
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Отзывы компаний, которые уже тестируют Aspro.AI
          </p>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-primary mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-primary">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-3xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Станьте одним из первых!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Присоединяйтесь к листу ожидания и получите возможность протестировать Aspro.AI до официального запуска
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Присоединиться к бета-тестированию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;