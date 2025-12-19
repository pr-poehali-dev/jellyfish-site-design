import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const jellyfishTypes = [
    {
      name: 'Аурелия',
      latin: 'Aurelia aurita',
      description: 'Самая распространенная медуза в мире. Прозрачное тело с четырьмя подковообразными гонадами.',
      size: '25-40 см',
      habitat: 'Все океаны',
      emoji: '🪼'
    },
    {
      name: 'Медуза-компас',
      latin: 'Chrysaora hysoscella',
      description: 'Получила название благодаря темному рисунку на куполе, напоминающему компас.',
      size: '30 см',
      habitat: 'Средиземное море',
      emoji: '🧭'
    },
    {
      name: 'Львиная грива',
      latin: 'Cyanea capillata',
      description: 'Одна из крупнейших медуз в мире с щупальцами до 30 метров длиной.',
      size: 'до 2 м',
      habitat: 'Холодные воды',
      emoji: '🦁'
    },
    {
      name: 'Кристальная медуза',
      latin: 'Aequorea victoria',
      description: 'Биолюминесцентная медуза, светящаяся в темноте зеленым светом.',
      size: '7-10 см',
      habitat: 'Тихий океан',
      emoji: '💎'
    }
  ];

  const facts = [
    {
      icon: 'Brain',
      title: 'Без мозга',
      text: 'У медуз нет мозга, но они чувствуют свет, гравитацию и химические вещества'
    },
    {
      icon: 'Heart',
      title: 'Без сердца',
      text: 'Медузы на 95% состоят из воды и не имеют сердечно-сосудистой системы'
    },
    {
      icon: 'Clock',
      title: 'Древние',
      text: 'Медузы существуют более 500 миллионов лет — старше динозавров'
    },
    {
      icon: 'Sparkles',
      title: 'Биолюминесценция',
      text: 'Многие виды медуз светятся в темноте благодаря химическим реакциям'
    },
    {
      icon: 'Infinity',
      title: 'Бессмертные',
      text: 'Медуза Turritopsis dohrnii может омолаживаться и теоретически жить вечно'
    },
    {
      icon: 'Zap',
      title: 'Ядовитые',
      text: 'Щупальца медуз содержат стрекательные клетки с токсинами для защиты'
    }
  ];

  const gallery = [
    { name: 'Лунная медуза', color: 'from-blue-500 to-cyan-400' },
    { name: 'Огненная медуза', color: 'from-orange-500 to-red-400' },
    { name: 'Фиолетовая медуза', color: 'from-purple-500 to-pink-400' },
    { name: 'Изумрудная медуза', color: 'from-green-500 to-emerald-400' },
    { name: 'Радужная медуза', color: 'from-yellow-500 to-orange-400' },
    { name: 'Призрачная медуза', color: 'from-gray-500 to-slate-400' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-ocean-deep via-[#0f1f3d] to-[#1a2847] -z-10" />
      
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-ocean-deep/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold glow flex items-center gap-2">
              🪼 Мир Медуз
            </h1>
            <div className="flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'gallery', label: 'Галерея', icon: 'Image' },
                { id: 'facts', label: 'Факты', icon: 'Lightbulb' },
                { id: 'types', label: 'Виды', icon: 'Fish' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${
                i % 3 === 0 ? 'animate-float' : i % 3 === 1 ? 'animate-float-slow' : 'animate-float'
              }`}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <div className={`text-6xl opacity-30 ${i % 2 === 0 ? 'scale-75' : ''}`}>
                🪼
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="text-8xl animate-float mb-4">🪼</div>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 glow">
            Таинственный мир медуз
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Погрузитесь в завораживающий подводный мир этих древних существ,
            существующих на Земле более 500 миллионов лет
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform"
            onClick={() => scrollToSection('gallery')}
          >
            <Icon name="ArrowDown" className="mr-2" />
            Начать путешествие
          </Button>
        </div>
      </section>

      <section id="gallery" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4 glow-purple">
            Галерея медуз
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Разнообразие форм и цветов подводного мира
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60 group-hover:opacity-80 transition-opacity`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl animate-float opacity-70 group-hover:scale-110 transition-transform">
                      🪼
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="facts" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4 glow">
            Удивительные факты
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Узнайте невероятные особенности медуз
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facts.map((fact, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-block p-4 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                  <Icon name={fact.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:glow transition-all">
                  {fact.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {fact.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="types" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-6 pb-20">
          <h2 className="text-5xl font-bold text-center mb-4 glow-purple">
            Виды медуз
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Познакомьтесь с самыми интересными представителями
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {jellyfishTypes.map((type, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all hover:scale-105 group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-float">
                  {type.emoji}
                </div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{type.emoji}</div>
                    <div>
                      <h3 className="text-3xl font-bold mb-1 group-hover:glow-purple transition-all">
                        {type.name}
                      </h3>
                      <p className="text-sm text-secondary italic">{type.latin}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                      <Icon name="Ruler" size={16} className="text-primary" />
                      <span className="text-sm">{type.size}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                      <Icon name="Globe" size={16} className="text-accent" />
                      <span className="text-sm">{type.habitat}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative py-12 border-t border-primary/20 bg-ocean-deep/80 backdrop-blur-md">
        <div className="container mx-auto px-6 text-center">
          <div className="text-4xl mb-4 animate-float">🪼</div>
          <p className="text-muted-foreground mb-4">
            Исследуйте удивительный мир медуз
          </p>
          <p className="text-sm text-muted-foreground/60">
            © 2024 Мир Медуз. Создано с любовью к океану
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
