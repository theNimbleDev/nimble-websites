import React from 'react';
import Button from './Button';
import Image from 'next/image';

interface ServiceCardProps {
  logo: string;
  subsidiary: string;
  description: string;
  color: string;
  ButtonColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ logo, subsidiary, description, ButtonColor, color }) => {

  // Split subsidiary string to highlight "Nimble"
  const highlights = subsidiary.split('Nimble');

  return (
    <div className={`border-2 border-${color} p-12 rounded-lg flex-col items-center`}>

      <Image src={logo} alt={`${subsidiary} logo`} className="mb-4 " width={217} height={78} />
      <h3 className="text-5xl font-bold mb-5 mt-11">{subsidiary}</h3>
      <p className="text-base font-light mb-6">{description}</p>
      <Button cta='Learn More' borderColor={ButtonColor} />
    </div>
  );
};

export default ServiceCard;