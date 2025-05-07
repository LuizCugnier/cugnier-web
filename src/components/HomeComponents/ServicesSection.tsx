import { TestTube2, BadgeCheck, ClipboardCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function ServicesSection() {
  const services = [
    {
      title: "Testes de Qualidade",
      description: `Realizamos testes de qualidade para garantir que os produtos 
                        atendam aos padrões de segurança e conformidade com as normas.`,
      icon: TestTube2,
    },
    {
      title: "Certificação",
      description: `Certificamos produtos e serviços para garantir que atendam aos padrões de qualidade e segurança.`,
      icon: BadgeCheck,
    },
    {
      title: "Inspeção",
      description: `A Cugnier realiza avaliações de conformidade dos produtos para garantir a proteção geral dos consumidores.`,
      icon: ClipboardCheck,
    },
  ];

  return (
    <div id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">
            Serviços
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-dark-neutral sm:text-5xl sm:tracking-tight">
            Soluções TIC Abrangentes
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-small-text">
            Nossa gama de serviços garante qualidade, segurança e conformidade
            em cada etapa.
          </p>
        </div>

        <div className="mt-16">
          <Accordion
            type="single"
            collapsible
            className="max-w-2xl mx-auto space-y-2"
          >
            {services.map((service, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className=""
              >
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-primary-bg-light cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-bg-light flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-dark-neutral">
                      {service.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-small-text text-lg">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
