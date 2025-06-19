'use client';

import Image, { StaticImageData } from 'next/image';
import Lightning from './animations/BackgroundElectrical';
import firstImage from '../../public/welcome/first.png';

interface WelcomeProps {
  // You can define props here if needed
}

const Welcome: React.FC<WelcomeProps> = () => {
  // If you need to make image sources dynamic, you could define them here:

  const images: { src: StaticImageData; alt: string }[] = [
    { src: firstImage, alt: 'Construction project 1' },
    { src: firstImage, alt: 'Construction project 2' },
  ];

  return (
    <section className="relative overflow-hidden py-20 min-h-[600px] flex items-center">
      {/* Lightning Background - covers entire section */}
      <div className="absolute inset-0 -z-10">
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 text-white">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side: Images - Responsive grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* Right side: Text content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl">Welcome to Ottrali</h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
                A construction company
              </h2>
              <p className="mt-4 leading-relaxed text-base sm:text-lg">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. 
                Afraid at highly months do things on at. Situation recommend objection do intention 
                so questions. As greatly removed calling pleased improve. Last ask him cold feel met 
                spot shy want. Children me laughing we prospect answered followed. At it went is songface. 
                Do greatest at in learning steepest.
              </p>
            </div>

            {/* Experience counter */}
            <div className="relative pb-8">
              <div className="flex items-center space-x-4 mt-6">
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-yellow-500">8</div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold">Years</h4>
                  <p className="text-xl sm:text-2xl leading-tight">Experience Working</p>
                </div>
              </div>
              <div className="absolute left-0 w-full sm:w-64 h-1.5 bg-black/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;