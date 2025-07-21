import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Zap, Target, TrendingUp, Users, Smartphone, Brain, DollarSign, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    type: "cover",
    title: "SOLO ENERGIA",
    subtitle: "Você no controle da sua energia",
    description: "Energytech que transforma energia solar em uma experiência digital através de uma solução completa"
  },
  {
    id: 2,
    type: "problem",
    title: "O PROBLEMA",
    items: [
      "85% dos brasileiros pagam até R$800 mensais de energia elétrica",
      "Processo de instalação solar é complexo e burocrático",
      "Falta de transparência no monitoramento e controle",
      "Ausência de suporte técnico proativo",
      "Pouco aproveitamento dos benefícios pós-instalação"
    ]
  },
  {
    id: 3,
    type: "solution",
    title: "A SOLUÇÃO",
    subtitle: "Controle total sobre a própria energia",
    items: [
      "Sistema solar sob medida + App exclusivo para acompanhar tudo",
      "Jornada digital fluída com IA e automações",
      "Monitoramento inteligente com suporte automático",
      "Clube Solo: cashback e benefícios contínuos"
    ]
  },
  {
    id: 4,
    type: "market",
    title: "MERCADO & OPORTUNIDADE",
    stats: [
      { value: "R$ 25 Bi", label: "Mercado de energia solar no Brasil" },
      { value: "300%", label: "Crescimento anual do setor" },
      { value: "2M+", label: "Residências com potencial para solar" },
      { value: "R$ 800+", label: "Gasto médio mensal em energia do nosso público-alvo" }
    ]
  },
  {
    id: 5,
    type: "product",
    title: "PRODUTO & TECNOLOGIA",
    features: [
      {
        icon: Smartphone,
        title: "App Solo",
        description: "Monitoramento em tempo real, controle total e clube de benefícios"
      },
      {
        icon: Brain,
        title: "Agente Solon (IA)",
        description: "Atendimento automatizado, propostas inteligentes e follow-up personalizado"
      },
      {
        icon: Zap,
        title: "Sistema Completo",
        description: "Projeto, instalação, homologação e manutenção em uma única jornada"
      }
    ]
  },
  {
    id: 6,
    type: "business-model",
    title: "MODELO DE NEGÓCIO",
    streams: [
      { name: "Projetos Solares", value: "60%", description: "Venda e instalação completa" },
      { name: "SaaS + Clube Solo", value: "20%", description: "Monitoramento premium e benefícios" },
      { name: "O&M", value: "10%", description: "Operação e manutenção" },
      { name: "PPA + Produtos", value: "10%", description: "Energia por assinatura e equipamentos" }
    ]
  },
  {
    id: 7,
    type: "target",
    title: "CLIENTES-ALVO",
    segments: [
      { name: "Residências", criteria: "Conta > R$800/mês", potential: "Alto retorno financeiro" },
      { name: "Pequenos Negócios", criteria: "Conta > R$1.500/mês", potential: "Redução de custos fixos" },
      { name: "Investidores", criteria: "Capital disponível", potential: "Retorno mensal estável" },
      { name: "Condomínios", criteria: "Áreas livres", potential: "Economia coletiva" }
    ]
  },
  {
    id: 8,
    type: "traction",
    title: "TRAÇÃO & VALIDAÇÃO",
    metrics: [
      { label: "Projetos em Pipeline", value: "R$ 2,5M" },
      { label: "Conversão de Leads", value: "35%" },
      { label: "Ticket Médio", value: "R$ 45.000" },
      { label: "Margem Bruta", value: "30%" }
    ]
  },
  {
    id: 9,
    type: "competition",
    title: "VANTAGEM COMPETITIVA",
    advantages: [
      "Única energytech com experiência 100% digital end-to-end",
      "IA proprietária para automação de vendas e relacionamento",
      "Clube Solo cria economia de rede e recorrência",
      "Parcerias estratégicas (Unifor HUB, Ramp Up Business)"
    ]
  },
  {
    id: 10,
    type: "financials",
    title: "PROJEÇÕES FINANCEIRAS",
    projections: [
      { year: "2024", revenue: "R$ 500K", margin: "25%" },
      { year: "2025", revenue: "R$ 2,5M", margin: "30%" },
      { year: "2026", revenue: "R$ 8M", margin: "35%" },
      { year: "2027", revenue: "R$ 20M", margin: "40%" }
    ]
  },
  {
    id: 11,
    type: "funding",
    title: "INVESTIMENTO",
    ask: "R$ 1,5M",
    use: [
      { item: "Marketing e Aquisição", percentage: "40%", amount: "R$ 600K" },
      { item: "Desenvolvimento Tecnológico", percentage: "30%", amount: "R$ 450K" },
      { item: "Operações e Equipe", percentage: "20%", amount: "R$ 300K" },
      { item: "Capital de Giro", percentage: "10%", amount: "R$ 150K" }
    ]
  },
  {
    id: 12,
    type: "closing",
    title: "JUNTOS, VAMOS TRANSFORMAR",
    subtitle: "O futuro da energia no Brasil",
    cta: "Vamos conversar sobre essa oportunidade?"
  }
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
            <div className="absolute inset-0 bg-[var(--solo-gradient)] opacity-10"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-8">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-8 bg-[var(--solo-gradient)] rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">S</span>
                </div>
              </div>
              <h1 className="text-7xl font-bold mb-6 bg-[var(--solo-gradient)] bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-3xl text-muted-foreground mb-8">{slide.subtitle}</p>
              <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">{slide.description}</p>
            </div>
          </div>
        );

      case "problem":
        return (
          <div className="h-full flex flex-col justify-center px-8">
            <h1 className="text-6xl font-bold mb-12 text-center">{slide.title}</h1>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {slide.items?.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-red-200">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">{index + 1}</span>
                    </div>
                    <p className="text-xl text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "solution":
        return (
          <div className="h-full flex flex-col justify-center px-8">
            <h1 className="text-6xl font-bold mb-6 text-center">{slide.title}</h1>
            <p className="text-3xl text-center mb-12 bg-[var(--solo-gradient)] bg-clip-text text-transparent font-semibold">{slide.subtitle}</p>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {slide.items?.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-solo-orange/20">
                    <CheckCircle className="w-8 h-8 text-solo-orange flex-shrink-0 mt-1" />
                    <p className="text-xl text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "market":
        return (
          <div className="h-full flex flex-col justify-center px-8">
            <h1 className="text-6xl font-bold mb-12 text-center">{slide.title}</h1>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 gap-8">
                {slide.stats?.map((stat, index) => (
                  <Card key={index} className="p-8 text-center border-solo-orange/20">
                    <h3 className="text-5xl font-bold mb-4 bg-[var(--solo-gradient)] bg-clip-text text-transparent">{stat.value}</h3>
                    <p className="text-xl text-foreground">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "product":
        return (
          <div className="h-full flex flex-col justify-center px-8">
            <h1 className="text-6xl font-bold mb-12 text-center">{slide.title}</h1>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                {slide.features?.map((feature, index) => (
                  <Card key={index} className="p-8 text-center border-solo-orange/20">
                    <feature.icon className="w-16 h-16 mx-auto mb-6 text-solo-orange" />
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "business-model":
        return (
          <div className="h-full flex flex-col justify-center px-8">
            <h1 className="text-6xl font-bold mb-12 text-center">{slide.title}</h1>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {slide.streams?.map((stream, index) => (
                  <div key={index} className="flex items-center gap-6 p-6 rounded-lg bg-card border border-solo-orange/20">
                    <div className="text-4xl font-bold bg-[var(--solo-gradient)] bg-clip-text text-transparent min-w-20">
                      {stream.value}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{stream.name}</h3>
                      <p className="text-muted-foreground">{stream.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "target":
        return (
          <div className="h-full flex flex-col justify-center px-8">
            <h1 className="text-6xl font-bold mb-12 text-center">{slide.title}</h1>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 gap-8">
                {slide.segments?.map((segment, index) => (
                  <Card key={index} className="p-8 border-solo-orange/20">
                    <h3 className="text-2xl font-bold mb-4 text-solo-orange">{segment.name}</h3>
                    <p className="text-lg mb-3"><strong>Critério:</strong> {segment.criteria}</p>
                    <p className="text-lg text-muted-foreground">{segment.potential}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "traction":
        return (
          <div className="h-full flex flex-col justify-center px-8">
            <h1 className="text-6xl font-bold mb-12 text-center">{slide.title}</h1>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 gap-8">
                {slide.metrics?.map((metric, index) => (
                  <Card key={index} className="p-8 text-center border-solo-orange/20">
                    <h3 className="text-4xl font-bold mb-4 bg-[var(--solo-gradient)] bg-clip-text text-transparent">{metric.value}</h3>
                    <p className="text-xl text-foreground">{metric.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "competition":
        return (
          <div className="h-full flex flex-col justify-center px-8">
            <h1 className="text-6xl font-bold mb-12 text-center">{slide.title}</h1>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {slide.advantages?.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-solo-orange/20">
                    <Target className="w-8 h-8 text-solo-orange flex-shrink-0 mt-1" />
                    <p className="text-xl text-foreground">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "financials":
        return (
          <div className="h-full flex flex-col justify-center px-8">
            <h1 className="text-6xl font-bold mb-12 text-center">{slide.title}</h1>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-4 gap-6">
                {slide.projections?.map((projection, index) => (
                  <Card key={index} className="p-6 text-center border-solo-orange/20">
                    <h3 className="text-2xl font-bold mb-3 text-solo-orange">{projection.year}</h3>
                    <p className="text-3xl font-bold mb-2 bg-[var(--solo-gradient)] bg-clip-text text-transparent">{projection.revenue}</p>
                    <p className="text-lg text-muted-foreground">Margem: {projection.margin}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "funding":
        return (
          <div className="h-full flex flex-col justify-center px-8">
            <h1 className="text-6xl font-bold mb-12 text-center">{slide.title}</h1>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-8xl font-bold bg-[var(--solo-gradient)] bg-clip-text text-transparent mb-4">{slide.ask}</h2>
                <p className="text-2xl text-muted-foreground">para acelerar o crescimento</p>
              </div>
              <div className="grid gap-4">
                {slide.use?.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-6 rounded-lg bg-card border border-solo-orange/20">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-8 bg-[var(--solo-gradient)] rounded"></div>
                      <span className="text-xl font-medium">{item.item}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-solo-orange">{item.percentage}</div>
                      <div className="text-lg text-muted-foreground">{item.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "closing":
        return (
          <div className="h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[var(--solo-gradient)] opacity-10"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-8">
              <h1 className="text-7xl font-bold mb-6 bg-[var(--solo-gradient)] bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-4xl text-foreground mb-12">{slide.subtitle}</p>
              <p className="text-2xl text-muted-foreground mb-12">{slide.cta}</p>
              <Button size="lg" className="text-xl px-12 py-6 bg-[var(--solo-gradient)] hover:opacity-90 transition-opacity">
                Falar com a Solo Energia
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        );

      default:
        return <div>Slide not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 relative">
        {renderSlide()}
      </div>

      {/* Navigation */}
      <div className="border-t bg-card p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-solo-orange' 
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>

          <Button 
            variant="outline" 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2"
          >
            Próximo
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="text-center mt-4 text-sm text-muted-foreground">
          {currentSlide + 1} de {slides.length} - {slide.title}
        </div>
      </div>
    </div>
  );
}