import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, Users, Clock, Gift } from "lucide-react";

const benefits = [
  {
    icon: Users,
    text: "Приоритетный доступ к платформе"
  },
  {
    icon: Gift,
    text: "Эксклюзивные материалы и гайды"
  },
  {
    icon: Clock,
    text: "Возможность влиять на развитие продукта"
  }
];

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && company) {
      setIsSubmitted(true);
      toast({
        title: "Спасибо за регистрацию!",
        description: "Мы добавили вас в лист ожидания Аспро.ИИ. Ожидайте новости!",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <CheckCircle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Добро пожаловать в лист ожидания!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Мы отправили подтверждение на ваш email. Следите за обновлениями — скоро поделимся эксклюзивными материалами!
            </p>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-lg">
                🎉 Вы среди первых 500 компаний в листе ожидания!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Присоединяйтесь к
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              революции ИИ в бизнесе
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Станьте одной из первых 500 компаний, получивших ранний доступ к Аспро.ИИ
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <Icon className="w-6 h-6 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              );
            })}
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Название компании"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 backdrop-blur-sm text-lg h-12"
                  required
                />
                <Input
                  type="email"
                  placeholder="Корпоративный email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 backdrop-blur-sm text-lg h-12"
                  required
                />
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full text-lg h-12"
                >
                  Получить приоритетный доступ
                </Button>
              </div>
              
              <p className="text-sm text-white/70 mt-4">
                Регистрируясь, вы соглашаетесь получать обновления о развитии Аспро.ИИ
              </p>
            </div>
          </form>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Уже 347 компаний зарегистрировано</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Осталось 153 места</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;