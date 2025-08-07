import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
        toast({
          title: "Спасибо за регистрацию!",
          description: "Мы свяжемся с вами, как только Аспро.ИИ будет готов.",
        });
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI-powered business workspace" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            ИИ для вашего бизнеса
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              без сложностей
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Aspro.AI предоставляет малому и среднему бизнесу простой доступ к ведущим 
            мировым ИИ-моделям. Быстрое внедрение для команды и автоматизация рутины за минуты.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="outline_white" size="lg" className="text-lg px-8">
              Как это работает
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8">
              Присоединиться к листу ожидания
            </Button>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Ваш email для раннего доступа"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 backdrop-blur-sm"
                required
              />
              <Button type="submit" variant="hero">
                Отправить
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-white/70 mt-4">
            Приоритетный доступ к платформе и эксклюзивному контенту
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;