import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Smartphone, 
  Brain, 
  DollarSign, 
  Lightbulb, 
  CheckCircle, 
  ArrowRight,
  Sun,
  Home,
  BarChart3,
  Sparkles,
  Shield,
  Repeat,
  Award
} from "lucide-react";
import solarHouseImg from "@/assets/solar-house.jpg";
import appMockupImg from "@/assets/app-mockup.jpg";

const slides = [
  {
    id: 1,
    type: "cover",
    title: "SOLO ENERGIA",
    subtitle: "Você no controle da sua energia",
    description: "Energytech que transforma energia solar em uma experiência digital através de uma solução completa em geração, monitoramento inteligente e atendimento automatizado"
  },
  {
    id: 2,
    type: "problem",
    title: "O PROBLEMA",
    subtitle: "O mercado de energia solar ainda é complexo e fragmentado",
    items: [
      {
        icon: DollarSign,
        title: "Alto custo energético",
        description: "85% dos brasileiros pagam até R$800 mensais de energia elétrica"
      },
      {
        icon: Target,
        title: "Processo complexo",
        description: "Instalação solar é burocrática e demorada"
      },
      {
        icon: BarChart3,
        title: "Falta de transparência",
        description: "Ausência de monitoramento e controle em tempo real"
      },
      {
        icon: Shield,
        title: "Suporte deficiente",
        description: "Pouco acompanhamento técnico pós-instalação"
      }
    ]
  },
  {
    id: 3,
    type: "solution",
    title: "A SOLUÇÃO",
    subtitle: "Controle total sobre a própria energia",
    features: [
      {
        icon: Smartphone,
        title: "Sistema sob medida + App exclusivo",
        description: "Acompanhe tudo: geração, economia e consumo direto no celular"
      },
      {
        icon: Brain,
        title: "Jornada digital com IA",
        description: "Processo simples com automações e agentes inteligentes"
      },
      {
        icon: Zap,
        title: "Monitoramento inteligente",
        description: "Suporte automático e manutenção preventiva"
      },
      {
        icon: Award,
        title: "Clube Solo",
        description: "Cashback, vantagens e benefícios contínuos"
      }
    ]
  },
  {
    id: 4,
    type: "market",
    title: "MERCADO & OPORTUNIDADE",
    subtitle: "Um setor em crescimento exponencial",
    stats: [
      { 
        icon: DollarSign,
        value: "R$ 25 Bi", 
        label: "Mercado de energia solar no Brasil",
        growth: "+300% ao ano"
      },
      { 
        icon: TrendingUp,
        value: "2M+", 
        label: "Residências com potencial para solar",
        growth: "Mercado inexplorado"
      },
      { 
        icon: Home,
        value: "R$ 800+", 
        label: "Gasto médio mensal do nosso público-alvo",
        growth: "Alto potencial de economia"
      },
      { 
        icon: Sun,
        value: "85%", 
        label: "dos brasileiros querem energia limpa",
        growth: "Demanda crescente"
      }
    ]
  },
  {
    id: 5,
    type: "product",
    title: "PRODUTO & TECNOLOGIA",
    subtitle: "Inovação que transforma a experiência solar",
    features: [
      {
        icon: Smartphone,
        title: "App Solo",
        description: "Monitoramento em tempo real, controle total e clube de benefícios integrado",
        highlight: "Interface intuitiva"
      },
      {
        icon: Brain,
        title: "Agente Solon (IA)",
        description: "Atendimento automatizado, propostas inteligentes e follow-up personalizado",
        highlight: "IA proprietária"
      },
      {
        icon: Zap,
        title: "Sistema Completo",
        description: "Projeto, instalação, homologação e manutenção em uma única jornada",
        highlight: "End-to-end"
      }
    ]
  },
  {
    id: 6,
    type: "business-model",
    title: "MODELO DE NEGÓCIO",
    subtitle: "Múltiplas fontes de receita para sustentabilidade",
    streams: [
      { 
        name: "Projetos Solares", 
        value: "60%", 
        description: "Venda e instalação completa de sistemas fotovoltaicos",
        color: "bg-gradient-to-r from-solo-orange to-solo-yellow"
      },
      { 
        name: "SaaS + Clube Solo", 
        value: "20%", 
        description: "Monitoramento premium, benefícios e cashback",
        color: "bg-gradient-to-r from-solo-yellow to-solo-orange"
      },
      { 
        name: "O&M", 
        value: "10%", 
        description: "Operação e manutenção preventiva/corretiva",
        color: "bg-gradient-to-r from-orange-400 to-yellow-400"
      },
      { 
        name: "PPA + Produtos", 
        value: "10%", 
        description: "Energia por assinatura e venda de equipamentos",
        color: "bg-gradient-to-r from-yellow-400 to-orange-400"
      }
    ]
  },
  {
    id: 7,
    type: "target",
    title: "CLIENTES-ALVO",
    subtitle: "Segmentos estratégicos com alto potencial de conversão",
    segments: [
      { 
        icon: Home,
        name: "Residências Premium", 
        criteria: "Conta > R$800/mês", 
        potential: "Alto retorno financeiro e conversão digital",
        size: "2M+ residências"
      },
      { 
        icon: BarChart3,
        name: "Pequenos Negócios", 
        criteria: "Conta > R$1.500/mês", 
        potential: "Redução significativa de custos operacionais",
        size: "500K+ empresas"
      },
      { 
        icon: TrendingUp,
        name: "Investidores", 
        criteria: "Capital disponível", 
        potential: "Retorno mensal estável e previsível",
        size: "50K+ investidores"
      },
      { 
        icon: Users,
        name: "Condomínios", 
        criteria: "Áreas livres para instalação", 
        potential: "Economia coletiva e sustentabilidade",
        size: "200K+ condomínios"
      }
    ]
  },
  {
    id: 8,
    type: "traction",
    title: "TRAÇÃO & VALIDAÇÃO",
    subtitle: "Resultados que comprovam o potencial do negócio",
    metrics: [
      { 
        icon: DollarSign,
        label: "Pipeline de Projetos", 
        value: "R$ 2,5M",
        description: "Vendas em andamento"
      },
      { 
        icon: TrendingUp,
        label: "Conversão de Leads", 
        value: "35%",
        description: "Acima da média do setor"
      },
      { 
        icon: Target,
        label: "Ticket Médio", 
        value: "R$ 45.000",
        description: "Por projeto residencial"
      },
      { 
        icon: BarChart3,
        label: "Margem Bruta", 
        value: "30%",
        description: "Rentabilidade saudável"
      }
    ]
  },
  {
    id: 9,
    type: "competition",
    title: "VANTAGEM COMPETITIVA",
    subtitle: "Diferenciais únicos que nos posicionam à frente",
    advantages: [
      {
        icon: Sparkles,
        title: "Experiência 100% Digital",
        description: "Única energytech com jornada completamente digitalizada end-to-end"
      },
      {
        icon: Brain,
        title: "IA Proprietária",
        description: "Agente Solon para automação de vendas e relacionamento personalizado"
      },
      {
        icon: Repeat,
        title: "Economia de Rede",
        description: "Clube Solo cria recorrência e aumenta o lifetime value dos clientes"
      },
      {
        icon: Award,
        title: "Parcerias Estratégicas",
        description: "Ecossistema robusto com Unifor HUB, Ramp Up Business e parceiros certificados"
      }
    ]
  },
  {
    id: 10,
    type: "financials",
    title: "PROJEÇÕES FINANCEIRAS",
    subtitle: "Crescimento sustentável e escalável",
    projections: [
      { 
        year: "2024", 
        revenue: "R$ 500K", 
        margin: "25%",
        projects: "12 projetos"
      },
      { 
        year: "2025", 
        revenue: "R$ 2,5M", 
        margin: "30%",
        projects: "55 projetos"
      },
      { 
        year: "2026", 
        revenue: "R$ 8M", 
        margin: "35%",
        projects: "180 projetos"
      },
      { 
        year: "2027", 
        revenue: "R$ 20M", 
        margin: "40%",
        projects: "440 projetos"
      }
    ]
  },
  {
    id: 11,
    type: "funding",
    title: "INVESTIMENTO",
    subtitle: "Aceleração do crescimento com capital estratégico",
    ask: "R$ 1,5M",
    timeline: "18-24 meses",
    use: [
      { 
        item: "Marketing e Aquisição", 
        percentage: "40%", 
        amount: "R$ 600K",
        icon: Target,
        description: "Escalabilidade das campanhas digitais"
      },
      { 
        item: "Desenvolvimento Tecnológico", 
        percentage: "30%", 
        amount: "R$ 450K",
        icon: Brain,
        description: "Evolução do App Solo e IA Solon"
      },
      { 
        item: "Operações e Equipe", 
        percentage: "20%", 
        amount: "R$ 300K",
        icon: Users,
        description: "Expansão do time técnico e comercial"
      },
      { 
        item: "Capital de Giro", 
        percentage: "10%", 
        amount: "R$ 150K",
        icon: DollarSign,
        description: "Estoque e fluxo operacional"
      }
    ]
  },
  {
    id: 12,
    type: "closing",
    title: "JUNTOS, VAMOS TRANSFORMAR",
    subtitle: "O futuro da energia no Brasil",
    cta: "Vamos conversar sobre essa oportunidade?",
    highlights: [
      "Mercado de R$ 25 bilhões em crescimento",
      "Tecnologia diferenciada e proprietária",
      "Tração comprovada e time experiente",
      "Modelo de negócio escalável"
    ]
  }
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000);
    }
    return () => clearInterval(interval);
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
      case "cover":
        return (
          <div className="h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-solo-orange/5 via-solo-yellow/5 to-background"></div>
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-solo-orange/20 to-solo-yellow/20 blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-solo-yellow/20 to-solo-orange/20 blur-3xl"></div>
            
            <div className="relative z-10 max-w-6xl mx-auto px-8 animate-fade-in">
              {/* Logo Section */}
              <div className="mb-12">
                <img 
                  src="/lovable-uploads/ab08f680-2b12-4026-ab88-82b80df78f57.png" 
                  alt="Solo Energia" 
                  className="h-32 mx-auto mb-8 animate-glow"
                />
              </div>
              
              {/* Title */}
              <h1 className="font-display text-8xl font-bold mb-8 bg-gradient-to-r from-solo-orange to-solo-yellow bg-clip-text text-transparent">
                {slide.title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-4xl font-medium text-foreground/80 mb-12 font-display">{slide.subtitle}</p>
              
              {/* Description */}
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">{slide.description}</p>
            </div>
          </div>
        );

      case "problem":
        return (
          <div className="h-full flex flex-col justify-center px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="font-display text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-2xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {slide.items?.map((item, index) => (
                  <Card 
                    key={index} 
                    className="p-8 border border-red-200/50 bg-gradient-to-br from-red-50/50 to-background hover:shadow-lg transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "solution":
        return (
          <div className="h-full flex flex-col justify-center px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="font-display text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-3xl font-semibold bg-gradient-to-r from-solo-orange to-solo-yellow bg-clip-text text-transparent">
                  {slide.subtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {slide.features?.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="p-8 border border-solo-orange/20 bg-gradient-to-br from-solo-orange/5 to-solo-yellow/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-solo-orange to-solo-yellow flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "market":
        return (
          <div className="h-full flex flex-col justify-center px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="font-display text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-2xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {slide.stats?.map((stat, index) => (
                  <Card 
                    key={index} 
                    className="p-8 text-center border-solo-orange/20 bg-gradient-to-br from-background to-solo-orange/5 hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-6">
                      <stat.icon className="w-16 h-16 mx-auto text-solo-orange mb-4" />
                    </div>
                    <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-solo-orange to-solo-yellow bg-clip-text text-transparent">
                      {stat.value}
                    </h3>
                    <p className="text-xl text-foreground mb-2 font-medium">{stat.label}</p>
                    <p className="text-lg text-solo-orange font-medium">{stat.growth}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "product":
        return (
          <div className="h-full flex flex-col justify-center px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="font-display text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-2xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-8">
                {slide.features?.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="p-8 text-center border-solo-orange/20 bg-gradient-to-b from-background to-solo-orange/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-6">
                      <feature.icon className="w-20 h-20 mx-auto text-solo-orange mb-4" />
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-solo-orange to-solo-yellow text-white rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 font-display">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "business-model":
        return (
          <div className="h-full flex flex-col justify-center px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="font-display text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-2xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="grid gap-6">
                {slide.streams?.map((stream, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-8 p-8 rounded-xl bg-card border border-solo-orange/20 hover:shadow-lg transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-6 flex-1">
                      <div className={`text-5xl font-bold text-white px-8 py-4 rounded-xl ${stream.color} min-w-32 text-center`}>
                        {stream.value}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 font-display">{stream.name}</h3>
                        <p className="text-lg text-muted-foreground">{stream.description}</p>
                      </div>
                    </div>
                    <div className="w-48">
                      <Progress value={parseInt(stream.value)} className="h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "target":
        return (
          <div className="h-full flex flex-col justify-center px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="font-display text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-2xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {slide.segments?.map((segment, index) => (
                  <Card 
                    key={index} 
                    className="p-8 border-solo-orange/20 bg-gradient-to-br from-background to-solo-orange/5 hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-solo-orange to-solo-yellow flex items-center justify-center flex-shrink-0">
                        <segment.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-solo-orange font-display">{segment.name}</h3>
                        <p className="text-lg mb-2"><strong>Critério:</strong> {segment.criteria}</p>
                        <p className="text-lg mb-3 text-muted-foreground">{segment.potential}</p>
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-solo-orange/10 text-solo-orange rounded-full">
                          {segment.size}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "traction":
        return (
          <div className="h-full flex flex-col justify-center px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="font-display text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-2xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {slide.metrics?.map((metric, index) => (
                  <Card 
                    key={index} 
                    className="p-8 text-center border-solo-orange/20 bg-gradient-to-b from-background to-solo-orange/5 hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <metric.icon className="w-16 h-16 mx-auto text-solo-orange mb-6" />
                    <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-solo-orange to-solo-yellow bg-clip-text text-transparent">
                      {metric.value}
                    </h3>
                    <p className="text-xl text-foreground font-medium mb-2">{metric.label}</p>
                    <p className="text-lg text-muted-foreground">{metric.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "competition":
        return (
          <div className="h-full flex flex-col justify-center px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="font-display text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-2xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {slide.advantages?.map((advantage, index) => (
                  <Card 
                    key={index} 
                    className="p-8 border-solo-orange/20 bg-gradient-to-br from-background to-solo-orange/5 hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-solo-orange to-solo-yellow flex items-center justify-center flex-shrink-0">
                        <advantage.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 font-display">{advantage.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{advantage.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "financials":
        return (
          <div className="h-full flex flex-col justify-center px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="font-display text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-2xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-4 gap-6">
                {slide.projections?.map((projection, index) => (
                  <Card 
                    key={index} 
                    className="p-6 text-center border-solo-orange/20 bg-gradient-to-b from-background to-solo-orange/5 hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-solo-orange font-display">{projection.year}</h3>
                    <p className="text-4xl font-bold mb-3 bg-gradient-to-r from-solo-orange to-solo-yellow bg-clip-text text-transparent">
                      {projection.revenue}
                    </p>
                    <p className="text-lg text-muted-foreground mb-2">Margem: {projection.margin}</p>
                    <p className="text-sm text-solo-orange font-medium">{projection.projects}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "funding":
        return (
          <div className="h-full flex flex-col justify-center px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="font-display text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-2xl text-muted-foreground">{slide.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-12 items-start">
                <div className="text-center">
                  <h2 className="text-9xl font-bold bg-gradient-to-r from-solo-orange to-solo-yellow bg-clip-text text-transparent mb-4 font-display">
                    {slide.ask}
                  </h2>
                  <p className="text-2xl text-muted-foreground">Investimento solicitado</p>
                  <p className="text-lg text-solo-orange font-medium mt-2">{slide.timeline}</p>
                </div>
                
                <div className="col-span-2">
                  <div className="grid gap-4">
                    {slide.use?.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-6 rounded-xl bg-card border border-solo-orange/20 hover:shadow-lg transition-all duration-300"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-solo-orange to-solo-yellow flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <span className="text-xl font-medium">{item.item}</span>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-solo-orange">{item.percentage}</div>
                          <div className="text-lg text-muted-foreground">{item.amount}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "closing":
        return (
          <div className="h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-solo-orange/10 via-solo-yellow/10 to-background"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <img 
                src={solarHouseImg} 
                alt="Casa com energia solar" 
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            
            <div className="relative z-10 max-w-6xl mx-auto px-8 animate-fade-in">
              <h1 className="font-display text-8xl font-bold mb-8 bg-gradient-to-r from-solo-orange to-solo-yellow bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-5xl text-foreground mb-12 font-display">{slide.subtitle}</p>
              
              <div className="grid grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                {slide.highlights?.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/80 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-solo-orange" />
                    <span className="text-lg font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-2xl text-muted-foreground mb-12">{slide.cta}</p>
              
              <Button 
                size="xl" 
                className="bg-gradient-to-r from-solo-orange to-solo-yellow hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Falar com a Solo Energia
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        );

      default:
        return <div>Slide não encontrado</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* Slide Content */}
      <div className="flex-1 relative">
        {renderSlide()}
      </div>

      {/* Navigation */}
      <div className="border-t bg-card/80 backdrop-blur-sm p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 hover:border-solo-orange hover:text-solo-orange transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>
            
            <Button
              variant={isAutoplay ? "default" : "outline"}
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="text-sm"
            >
              {isAutoplay ? "Pausar" : "Auto"}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-solo-orange scale-125' 
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          <Button 
            variant="outline" 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 hover:border-solo-orange hover:text-solo-orange transition-colors"
          >
            Próximo
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="text-center mt-4 text-sm text-muted-foreground">
          <span className="font-medium">{currentSlide + 1}</span> de {slides.length} - {slide.title}
        </div>
      </div>
    </div>
  );
}