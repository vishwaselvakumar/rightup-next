'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import brand1 from '@/public/logos/partner/buddy.png';
import brand2 from '@/public/logos/partner/dhyana.png';
import brand3 from '@/public/logos/partner/dream.png';
import brand4 from '@/public/logos/partner/gameboy.png';
import brand5 from '@/public/logos/partner/loans.png';
import brand6 from '@/public/logos/partner/manvasanai.png';
import brand7 from '@/public/logos/partner/vyooha.png';
import brand8 from '@/public/logos/partner/sn-silk.png';

const brandData = [
  { id: 1, img: brand1, text: 'Buddies Cart', width: 180, height: 70 },
  { id: 2, img: brand2, text: 'Dhyana', width: 140, height: 70 },
  { id: 3, img: brand3, text: 'Dream Wheel Motors', width: 160, height: 80 },
  { id: 4, img: brand4, text: 'Gameboy Menswear', width: 130, height: 65 },
  { id: 5, img: brand5, text: 'Loans', width: 145, height: 72 },
  { id: 6, img: brand6, text: 'Mannvaasanai', width: 155, height: 77 },
  { id: 7, img: brand7, text: 'Vyooha Tatoo Studio', width: 135, height: 68 },
  { id: 8, img: brand8, text: 'SN Silk', width: 125, height: 63 },
];

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brandData.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-[-16px] overflow-hidden" id="partners">
      <section>
        <div>
          <h2 className="text-center text-5xl text-black sm:text-[40px]/[48px] font-extrabold underline decoration-[#3f59ea] underline-offset-8 mt-8">
            Our Partners
          </h2>

          <h1 className='text-center text-4xl font-thin mt-6'>Trusted by great brands</h1>
        </div>
        <div className="p-14 flex flex-col justify-center items-center">
          <div className="relative" style={{ width: `${brandData[currentIndex].width}px`, height: `${brandData[currentIndex].height}px` }}>
            <Image
              src={brandData[currentIndex].img}
              alt={brandData[currentIndex].text}
              width={brandData[currentIndex].width}
              height={brandData[currentIndex].height}
              className="transition-opacity duration-500 ease-in-out"
            />
          </div>
          <p className="text-center text-xl font-medium mt-20">{brandData[currentIndex].text}</p>
        </div>
      </section>
    </div>
  );
};

export default Clients;
