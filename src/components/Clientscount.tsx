import React from 'react';

interface ClientscountProps {
  count: number;
  images: string[];
}

const Clientscount: React.FC<ClientscountProps> = ({ count, images }) => {
  return (
    <div className="clientscount">
      <div className='client-image flex items-center gap-2'>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Client ${index + 1}`} className='client-image' />
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
