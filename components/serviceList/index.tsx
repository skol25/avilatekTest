import React from 'react';
import Service from '../service';

interface ServiceItem {
  image: string;
  title: string;
  subtitle: string;
}

interface ServiceListProps {
  services: ServiceItem[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  // Función para dividir el array en grupos de tres
  const chunkArray = (array: ServiceItem[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  // Dividir el array en grupos de tres
  const groupedServices = chunkArray(services, 3);

  return (
    <div>
      {groupedServices.map((row, rowIndex) => (
        <div key={rowIndex} className="flex mb-4 gap-4 justify-between">
          {/* Aplicar justify-between aquí */}
          {row.map((service, serviceIndex) => (
            <div key={serviceIndex} className="w-1/3 pr-4">
              <Service
                image={service.image}
                title={service.title}
                subtitle={service.subtitle}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
