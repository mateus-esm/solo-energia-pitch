import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Sun, 
  Battery, 
  Smartphone, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  BarChart3, 
  Zap, 
  Home, 
  Car, 
  Building, 
  Lightbulb, 
  Shield, 
  Award,
  ArrowRight,
  MapPin,
  Globe,
  Calculator,
  PieChart,
  Trophy,
  Rocket,
  CheckCircle,
  Star,
  Brain
} from 'lucide-react';

// Import das imagens
import solarHouseImage from '@/assets/solar-house.jpg';
import appMockupImage from '@/assets/app-mockup.jpg';
import modernSolarHouse from '@/assets/modern-solar-house.jpg';
import electricCarCharging from '@/assets/electric-car-charging.jpg';
import solarFarm from '@/assets/solar-farm.jpg';
import batteryStorage from '@/assets/battery-storage.jpg';

interface Slide {
  id: number;
  type: string;
  title: string;
  subtitle?: string;
  description?: string;
  items?: string[];
  features?: { icon: React.ReactNode; title: string; description: string }[];
  stats?: { value: string; label: string; icon: React.ReactNode }[];
  streams?: { title: string; description: string; revenue: string }[];
  segments?: { name: string; size: string; growth: string }[];
  metrics?: { metric: string; value: string; period: string }[];
  advantages?: string[];
  projections?: { year: string; revenue: string; users: string; market: string }[];
  competitors?: { name: string; global: boolean; revenue: string; users: string; advantage: string }[];
  use?: string[];
  highlights?: string[];
  cta?: string;
  image?: string;
  backgroundImage?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    type: 'cover',
    title: 'Solo Energia',
    subtitle: 'Você no controle da sua energia',
    description: 'Transformando energia solar em uma experiência digital inteligente através de IA e IoT',
    backgroundImage: modernSolarHouse
  },
  {
    id: 2,
    type: 'problem',
    title: 'O Problema',
    subtitle: 'Complexidade e falta de transparência no setor solar',
    items: [
      'Processo de instalação solar complexo e opaco',
      'Falta de controle e visibilidade sobre o sistema',
      'Dificuldade em otimizar o consumo energético',
      'Ausência de insights inteligentes sobre economia',
      'Experiência fragmentada entre instalação e uso'
    ]
  },
  {
    id: 3,
    type: 'solution',
    title: 'Nossa Solução',
    subtitle: 'Plataforma inteligente end-to-end para energia solar',
    features: [
      {
        icon: <Smartphone className="w-8 h-8" />,
        title: 'App Inteligente',
        description: 'Dashboard completo com IA para otimização energética'
      },
      {
        icon: <Brain className="w-8 h-8" />,
        title: 'Agente Solon',
        description: 'IA conversacional para suporte 24/7 e insights'
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: 'Instalação Premium',
        description: 'Processo simplificado com garantia estendida'
      }
    ],
    image: appMockupImage
  },
  {
    id: 4,
    type: 'market',
    title: 'Oportunidade de Mercado',
    subtitle: 'Crescimento exponencial da energia solar',
    stats: [
      {
        value: 'R$ 50bi',
        label: 'Mercado Solar Brasil 2024',
        icon: <Globe className="w-6 h-6" />
      },
      {
        value: '+180%',
        label: 'Crescimento Nordeste 2023',
        icon: <TrendingUp className="w-6 h-6" />
      },
      {
        value: 'R$ 8,2bi',
        label: 'Potencial Ceará até 2030',
        icon: <MapPin className="w-6 h-6" />
      },
      {
        value: '2,5M',
        label: 'Residências potenciais',
        icon: <Home className="w-6 h-6" />
      }
    ],
    image: solarFarm
  },
  {
    id: 5,
    type: 'product',
    title: 'Produto e Tecnologia',
    subtitle: 'Ecossistema integrado Solo',
    features: [
      {
        icon: <Sun className="w-8 h-8" />,
        title: 'Monitoramento Real-time',
        description: 'Acompanhamento detalhado da geração e consumo'
      },
      {
        icon: <Calculator className="w-8 h-8" />,
        title: 'Análise Inteligente',
        description: 'IA que analisa padrões e sugere otimizações'
      },
      {
        icon: <Battery className="w-8 h-8" />,
        title: 'Gestão de Energia',
        description: 'Controle inteligente de armazenamento e uso'
      },
      {
        icon: <Car className="w-8 h-8" />,
        title: 'Carregamento Veicular',
        description: 'Integração com carros elétricos'
      }
    ],
    backgroundImage: '/lovable-uploads/f2ff5319-5935-4fde-988f-900dc0e1fec6.png'
  },
  {
    id: 6,
    type: 'business_model',
    title: 'Modelo de Negócios',
    subtitle: 'Múltiplas fontes de receita escaláveis',
    streams: [
      {
        title: 'Instalação Premium',
        description: 'Margem superior em instalações com tecnologia',
        revenue: '15-25%'
      },
      {
        title: 'Software as a Service',
        description: 'Assinatura mensal para app e IA',
        revenue: 'R$ 29/mês'
      },
      {
        title: 'Marketplace Energético',
        description: 'Comissão em produtos e serviços',
        revenue: '5-10%'
      },
      {
        title: 'Dados e Analytics',
        description: 'Insights para empresas do setor',
        revenue: 'B2B API'
      }
    ]
  },
  {
    id: 7,
    type: 'target',
    title: 'Mercado-Alvo',
    subtitle: 'Segmentos prioritários no Nordeste',
    segments: [
      {
        name: 'Residencial Classe A/B+',
        size: '450k famílias',
        growth: '+25% a.a.'
      },
      {
        name: 'Pequenos Comércios',
        size: '120k estabelecimentos',
        growth: '+35% a.a.'
      },
      {
        name: 'Indústrias Médias',
        size: '8k empresas',
        growth: '+40% a.a.'
      }
    ],
    image: modernSolarHouse
  },
  {
    id: 8,
    type: 'traction',
    title: 'Tração e Validação',
    subtitle: 'Resultados iniciais promissores',
    metrics: [
      {
        metric: 'MVP lançado',
        value: 'Dezembro 2024',
        period: 'Q4 2024'
      },
      {
        metric: 'Beta users',
        value: '150 usuários',
        period: 'Jan 2025'
      },
      {
        metric: 'NPS Score',
        value: '72 pontos',
        period: 'Jan 2025'
      },
      {
        metric: 'Tempo médio uso',
        value: '8,5 min/dia',
        period: 'Média semanal'
      }
    ]
  },
  {
    id: 9,
    type: 'competition',
    title: 'Análise Competitiva',
    subtitle: 'Posicionamento estratégico no mercado',
    competitors: [
      {
        name: 'SunRun',
        global: true,
        revenue: 'US$ 2.3bi',
        users: '900k',
        advantage: 'Foco apenas em instalação'
      },
      {
        name: 'Sunne',
        global: false,
        revenue: 'R$ 120M',
        users: '45k',
        advantage: 'Modelo de assinatura limitado'
      },
      {
        name: 'Órigo Energia',
        global: false,
        revenue: 'R$ 80M',
        users: '25k',
        advantage: 'Sem tecnologia digital'
      },
      {
        name: 'Solo Energia',
        global: false,
        revenue: 'R$ 0',
        users: '150',
        advantage: 'IA + App + Experiência completa'
      }
    ]
  },
  {
    id: 10,
    type: 'financials',
    title: 'Projeções Financeiras',
    subtitle: 'Crescimento sustentável e escalável',
    projections: [
      {
        year: '2025',
        revenue: 'R$ 2,5M',
        users: '800',
        market: '0,1%'
      },
      {
        year: '2026',
        revenue: 'R$ 12M',
        users: '3.200',
        market: '0,5%'
      },
      {
        year: '2027',
        revenue: 'R$ 35M',
        users: '8.500',
        market: '1,2%'
      },
      {
        year: '2028',
        revenue: 'R$ 85M',
        users: '18k',
        market: '2,8%'
      }
    ]
  },
  {
    id: 11,
    type: 'funding',
    title: 'Investimento',
    subtitle: 'R$ 500K para acelerar crescimento',
    use: [
      'Desenvolvimento tecnológico (40%)',
      'Expansão da equipe comercial (25%)',
      'Marketing e aquisição (20%)',
      'Melhoria operacional (15%)'
    ],
    highlights: [
      '18 meses de runway',
      'Break-even previsto para Q3 2026',
      'ROI esperado de 8x em 3 anos',
      'Expansão para 3 estados nordestinos'
    ]
  },
  {
    id: 12,
    type: 'closing',
    title: 'Juntos pelo Futuro da Energia',
    subtitle: 'Transformando o Nordeste em referência solar',
    cta: 'Vamos revolucionar a energia solar juntos?',
    highlights: [
      'Mercado de R$ 50bi em crescimento',
      'Tecnologia diferenciada com IA',
      'Equipe experiente e apaixonada',
      'Modelo de negócio validado'
    ],
    backgroundImage: electricCarCharging
  }
];

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);

  useEffect(() => {
    if (isAutoplay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isAutoplay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  const renderSlide = () => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="relative h-full flex items-center justify-center overflow-hidden">
            {slide.backgroundImage && (
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
              </div>
            )}
            
            <div className="relative z-10 text-center space-y-8 max-w-4xl px-8">
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/3fa67575-a555-4806-b181-b84cd45b0055.png" 
                  alt="Solo Energia Logo" 
                  className="h-32 mx-auto mb-6"
                />
              </div>
              
              <h1 className="font-brand text-6xl md:text-8xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              
              <p className="font-brand text-xl md:text-2xl text-white/90 mb-8">
                {slide.subtitle}
              </p>
              
              <p className="font-brand text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                {slide.description}
              </p>
              
              <div className="flex justify-center pt-8">
                <Button 
                  size="xl" 
                  className="bg-gradient-to-r from-solo-orange to-solo-yellow text-white font-brand font-semibold px-12 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  Começar Jornada
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="font-brand text-5xl font-bold text-foreground mb-4">{slide.title}</h2>
              <p className="font-brand text-xl text-muted-foreground">{slide.subtitle}</p>
            </div>
            
            <div className="grid gap-6 max-w-4xl mx-auto">
              {slide.items?.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-brand text-destructive font-bold">{index + 1}</span>
                      </div>
                      <p className="font-brand text-lg text-foreground leading-relaxed">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="font-brand text-5xl font-bold text-foreground mb-4">{slide.title}</h2>
              <p className="font-brand text-xl text-muted-foreground">{slide.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {slide.features?.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:border-solo-orange/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-solo-orange to-solo-yellow rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-brand text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                          <p className="font-brand text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {slide.image && (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-solo-orange/20 to-solo-yellow/20 rounded-3xl blur-xl transform scale-105" />
                  <img 
                    src={slide.image} 
                    alt="Solo App" 
                    className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="font-brand text-5xl font-bold text-foreground mb-4">{slide.title}</h2>
              <p className="font-brand text-xl text-muted-foreground">{slide.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-6">
                {slide.stats?.map((stat, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-br from-solo-orange to-solo-yellow rounded-full text-white">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="font-brand text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                      <p className="font-brand text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {slide.image && (
                <div className="relative">
                  <img 
                    src={slide.image} 
                    alt="Solar Market" 
                    className="w-full rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
                </div>
              )}
            </div>
          </div>
        );

      case 'product':
        return (
          <div className="relative space-y-8">
            {slide.backgroundImage && (
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 rounded-3xl"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              />
            )}
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="font-brand text-5xl font-bold text-foreground mb-4">{slide.title}</h2>
                <p className="font-brand text-xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {slide.features?.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="p-4 bg-gradient-to-br from-solo-orange to-solo-yellow rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-brand text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                          <p className="font-brand text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'business_model':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="font-brand text-5xl font-bold text-foreground mb-4">{slide.title}</h2>
              <p className="font-brand text-xl text-muted-foreground">{slide.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {slide.streams?.map((stream, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-solo-orange to-solo-yellow opacity-10 rounded-bl-full" />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="font-brand text-xl font-semibold text-foreground">{stream.title}</CardTitle>
                      <Badge className="bg-gradient-to-r from-solo-orange to-solo-yellow text-white font-brand">
                        {stream.revenue}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-brand text-muted-foreground leading-relaxed">{stream.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'target':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="font-brand text-5xl font-bold text-foreground mb-4">{slide.title}</h2>
              <p className="font-brand text-xl text-muted-foreground">{slide.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {slide.segments?.map((segment, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-brand text-lg font-semibold text-foreground">{segment.name}</h3>
                        <Badge className="bg-gradient-to-r from-solo-orange to-solo-yellow text-white font-brand">
                          {segment.growth}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Users className="w-5 h-5 text-solo-orange" />
                        <span className="font-brand text-muted-foreground">{segment.size}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {slide.image && (
                <div className="relative">
                  <img 
                    src={slide.image} 
                    alt="Target Market" 
                    className="w-full rounded-3xl shadow-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 'traction':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="font-brand text-5xl font-bold text-foreground mb-4">{slide.title}</h2>
              <p className="font-brand text-xl text-muted-foreground">{slide.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {slide.metrics?.map((metric, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <Trophy className="w-8 h-8 text-solo-orange" />
                    </div>
                    <div className="font-brand text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                    <h3 className="font-brand text-lg font-semibold text-foreground mb-2">{metric.metric}</h3>
                    <p className="font-brand text-sm text-muted-foreground">{metric.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'competition':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="font-brand text-5xl font-bold text-foreground mb-4">{slide.title}</h2>
              <p className="font-brand text-xl text-muted-foreground">{slide.subtitle}</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full max-w-6xl mx-auto">
                <thead>
                  <tr className="border-b border-border">
                    <th className="font-brand text-left p-4 font-semibold text-foreground">Empresa</th>
                    <th className="font-brand text-left p-4 font-semibold text-foreground">Escopo</th>
                    <th className="font-brand text-left p-4 font-semibold text-foreground">Receita</th>
                    <th className="font-brand text-left p-4 font-semibold text-foreground">Usuários</th>
                    <th className="font-brand text-left p-4 font-semibold text-foreground">Limitação</th>
                  </tr>
                </thead>
                <tbody>
                  {slide.competitors?.map((competitor, index) => (
                    <tr key={index} className={`border-b border-border/50 hover:bg-accent/50 transition-colors ${
                      competitor.name === 'Solo Energia' ? 'bg-gradient-to-r from-solo-orange/10 to-solo-yellow/10' : ''
                    }`}>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-brand font-semibold text-foreground">{competitor.name}</span>
                          {competitor.name === 'Solo Energia' && <Star className="w-4 h-4 text-solo-orange" />}
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant={competitor.global ? "default" : "secondary"} className="font-brand">
                          {competitor.global ? 'Global' : 'Nacional'}
                        </Badge>
                      </td>
                      <td className="p-4 font-brand text-foreground">{competitor.revenue}</td>
                      <td className="p-4 font-brand text-foreground">{competitor.users}</td>
                      <td className="p-4 font-brand text-muted-foreground text-sm">{competitor.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'financials':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="font-brand text-5xl font-bold text-foreground mb-4">{slide.title}</h2>
              <p className="font-brand text-xl text-muted-foreground">{slide.subtitle}</p>
            </div>
            
            <div className="grid gap-8 max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                {slide.projections?.map((projection, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-solo-orange to-solo-yellow" />
                    <CardHeader className="text-center">
                      <CardTitle className="font-brand text-2xl font-bold text-foreground">{projection.year}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="font-brand text-2xl font-bold text-solo-orange mb-1">{projection.revenue}</div>
                        <p className="font-brand text-sm text-muted-foreground">Receita</p>
                      </div>
                      <div className="text-center">
                        <div className="font-brand text-lg font-semibold text-foreground mb-1">{projection.users}</div>
                        <p className="font-brand text-sm text-muted-foreground">Clientes</p>
                      </div>
                      <div className="text-center">
                        <div className="font-brand text-lg font-semibold text-foreground mb-1">{projection.market}</div>
                        <p className="font-brand text-sm text-muted-foreground">Market Share</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'funding':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="font-brand text-5xl font-bold text-foreground mb-4">{slide.title}</h2>
              <p className="font-brand text-xl text-muted-foreground">{slide.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-brand text-2xl font-bold text-foreground flex items-center">
                    <PieChart className="w-8 h-8 mr-3 text-solo-orange" />
                    Uso do Investimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {slide.use?.map((use, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-accent/20">
                      <span className="font-brand text-foreground">{use}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-brand text-2xl font-bold text-foreground flex items-center">
                    <Rocket className="w-8 h-8 mr-3 text-solo-orange" />
                    Marcos Importantes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {slide.highlights?.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-solo-orange flex-shrink-0" />
                      <span className="font-brand text-foreground">{highlight}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'closing':
        return (
          <div className="relative h-full flex items-center justify-center overflow-hidden">
            {slide.backgroundImage && (
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
              </div>
            )}
            
            <div className="relative z-10 text-center space-y-8 max-w-4xl px-8">
              <h2 className="font-brand text-6xl font-bold text-white mb-6">{slide.title}</h2>
              <p className="font-brand text-2xl text-white/90 mb-8">{slide.subtitle}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {slide.highlights?.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 text-white">
                    <CheckCircle className="w-6 h-6 text-solo-yellow flex-shrink-0" />
                    <span className="font-brand text-lg">{highlight}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <p className="font-brand text-3xl text-white font-semibold">{slide.cta}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="xl" className="bg-gradient-to-r from-solo-orange to-solo-yellow text-white font-brand font-semibold px-8 py-4 rounded-full">
                    Investir na Solo
                  </Button>
                  <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-brand px-8 py-4 rounded-full">
                    Saber Mais
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div className="font-brand text-foreground">Slide não encontrado</div>;
    }
  };

  return (
    <div className="w-full h-screen bg-background text-foreground overflow-hidden relative">
      {/* Slide Content */}
      <div className="h-full p-8 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto h-full flex items-center">
          {renderSlide()}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 bg-black/20 backdrop-blur-md rounded-full px-6 py-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="text-white hover:bg-white/20 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-solo-orange to-solo-yellow scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="text-white hover:bg-white/20 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        <div className="w-px h-6 bg-white/20 mx-2" />

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsAutoplay(!isAutoplay)}
          className="text-white hover:bg-white/20 rounded-full"
        >
          {isAutoplay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black/20">
        <div 
          className="h-full bg-gradient-to-r from-solo-orange to-solo-yellow transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PitchDeck;