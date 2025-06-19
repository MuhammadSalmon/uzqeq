import { FiHome, FiTool, FiLayers, FiPackage } from 'react-icons/fi';
import { ReactElement } from 'react';

interface ServiceItem {
  icon: ReactElement;
  title: string;
  description: string;
}

export default function WeDo() {
  const services: ServiceItem[] = [
    {
      icon: <FiLayers />,
      title: "Construction",
      description: "Contented attending smallness it oh ye unwilling. Turned favour man two but lovers. Suffer should"
    },
    {
      icon: <FiTool />,
      title: "Renovation",
      description: "Contented attending smallness it oh ye unwilling. Turned favour man two but lovers. Suffer should"
    },
    {
      icon: <FiHome />,
      title: "Home Maintenance",
      description: "Contented attending smallness it oh ye unwilling. Turned favour man two but lovers. Suffer should"
    },
    {
      icon: <FiPackage />,
      title: "Architecture",
      description: "Contented attending smallness it oh ye unwilling. Turned favour man two but lovers. Suffer should"
    }
  ];

  return (
    <section className="w-full about-area  text-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left side: video background */}
          <div 
            className="lg:w-1/2 h-64 md:h-96 my-auto w-full bg-cover bg-center rounded-lg relative"
            style={{ backgroundImage: 'url(/2349.jpg)' }}
            role="img"
            aria-label="Construction site background"
          ></div>

          {/* Right side: info content */}
          <div className="lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <div className="content max-w-xl mx-auto lg:mx-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 leading-snug">
                We Offer <br className="hidden sm:block" />
                Best Construction Services & Solutions
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {services.map((service, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="icon text-yellow-400 text-3xl md:text-4xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="info">
                      <h4 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h4>
                      <p className="text-gray-900 text-sm md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}