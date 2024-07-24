import Image from 'next/image'
import React from 'react';

interface ClientscountProps {
  count: number;
  images: string[];
}

const Clientscount: React.FC<ClientscountProps> = ({ count, images }) => {
  return (
    <div>
      <div className='client-image flex items-center gap-2'>
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Client ${index + 1}`} width='92' height='43' className='client-image' />
        ))}

        <div>
          <span>{count}+</span>
          <h2 className='text-sm text-gray-400'>Satisfied Clients</h2>
        </div>
      </div>
    </div>
  );
};

export default Clientscount;
