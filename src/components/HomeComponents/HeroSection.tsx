import { Button } from "../ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-primary">
                Confiança e Qualidade
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-dark-neutral">
                  Estabelecendo o Padrão
                </span>
                <span className="block text-primary">
                  Teste, Inspeção e Certificação
                </span>
              </span>
            </h1>
            <p className="mt-3 text-base text-small-text sm:mt-5 sm:text-lg lg:text-xl">
              Oferecemos serviços completos de teste, inspeção e certificação
              para garantir que seus produtos e processos atendam aos mais altos
              padrões de qualidade e segurança.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <ul className="mt-3 space-y-2">
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <CheckCircledIcon className="text-primary-light" />
                  </div>
                  <p className="ml-3 text-sm text-small-text">
                    Fully accredited testing facilities
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <CheckCircledIcon className="text-primary-light" />
                  </div>
                  <p className="ml-3 text-sm text-small-text">
                    Global certification expertise
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <CheckCircledIcon className="text-primary-light" />
                  </div>
                  <p className="ml-3 text-sm text-small-text">
                    Industry-leading inspection protocols
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="bg-primary hover:bg-primary-dark text-white px-4 py-2">
                  Solicitar um Serviço
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full min-h-[285px]"
                    src="https://www.youtube.com/embed/_bXsQfIFesk?si=m57VREB62jnpqchc"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
