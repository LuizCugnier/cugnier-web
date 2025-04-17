import Button from "./Button";

export default function HeroSection() {
    return (
        <div className="bg-gradient-to-br from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <h1>
                            <span className="block text-sm font-semibold uppercase tracking-wide text-green-600">
                                Confiança e Qualidade
                            </span>
                            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                                <span className="block text-gray-900">Estabelecendo o Padrão</span>
                                <span className="block text-green-600">Teste, Inspeção e Certificação</span>
                            </span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg lg:text-xl">
                            Oferecemos serviços completos de teste, inspeção e certificação para garantir que seus produtos e processos atendam aos mais altos padrões de qualidade e segurança.
                        </p>
                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                            <ul className="mt-3 space-y-2">
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        algo aqui
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">
                                        Fully accredited testing facilities
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        algo aqui
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">
                                        Global certification expertise
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        algo aqui
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">
                                        Industry-leading inspection protocols
                                    </p>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2">
                                    Request a Service
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                                <div className="aspect-w-16 aspect-h-9">
                                    <div className="flex items-center justify-center h-64 bg-green-100 text-green-800">
                                        <span className="text-lg font-medium">Quality Assurance Image</span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                                    <div className="bg-green-600 bg-opacity-75 rounded-full h-16 w-16 flex items-center justify-center">
                                        <span className="sr-only">Play Video</span>
                                        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}