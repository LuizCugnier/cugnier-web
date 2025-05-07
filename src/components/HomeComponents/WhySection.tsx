import { Lightbulb, ShieldCheck, Target } from "lucide-react";

export default function WhySection() {
  const whyContent = [
    {
      title: "Missão",
      description: `Desenvolver soluções em serviços de inspeção e certificação com elevado padrão de qualidade, proporcionar 
        segurança entre clientes e partes interessadas, contribuir para o desenvolvimento sustentável 
        da sociedade e do negócio`,
      icon: Target,
    },
    {
      title: "Visão",
      description: `Visamos um futuro onde a excelência na certificação converge com o desenvolvimento sustentável. 
        Comprometidos com a segurança, qualidade e práticas sustentáveis para um mundo mais saudável e equilibrado.`,
      icon: Lightbulb,
    },
    {
      title: "Realibility",
      description: `Aos longo dos anos a Cugnier conquistou acreditações, certificações e alianças globais, 
      que permitem confiabilidade, credibilidade e reconhecimento nos serviços prestados`,
      icon: ShieldCheck,
    },
  ];

  return (
    <div id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">
            WHY CHOOSE US
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-dark-neutral sm:text-5xl sm:tracking-tight">
            Nosso compromisso com a excelência
          </p>
        </div>
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
              {whyContent.map((content, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center ${
                    index === 2 ? "sm:col-span-2 md:col-span-1" : ""
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-primary-bg-light flex items-center justify-center mb-4">
                    <content.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-neutral mb-3">
                    {content.title}
                  </h3>
                  <p className="text-small-text">{content.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span></span>
    </div>
  );
}
