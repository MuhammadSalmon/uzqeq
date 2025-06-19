'use client';

import Image from 'next/image';
import Lightning from './animations/BackgroundElectrical';

export default function Welcome() {
  return (
    <>
    <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
  <Lightning
    hue={220}
    xOffset={0}
    speed={1}
    intensity={1}
    size={1}
  />
</div>
    <section className="py-20 relative" >
      
      <div className="container text-white mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left side: Images */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div>
              <Image
                src="/welcome/first.png"
                alt="Thumb 1"
                width={500}
                height={500}
                className=" w-full h-auto object-cover"
              />
            </div>
            <div>
              <Image
                src="/welcome/first.png"
                alt="Thumb 2"
                width={500}
                height={500}
                className=" w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right side: Text content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <h3 className="text-3xl text-white">Welcome to Ottrali</h3>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
                A construction company
              </h2>
              <p className="text-white mt-4 leading-relaxed">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is songface. Do greatest at in learning steepest.
              </p>
            </div>

            <div className="relative pb-8">
  <div className="flex items-center space-x-4 mt-6">
    <div className="text-7xl font-extrabold text-yellow-500">8</div>
    <div className="text-white">
      <h4 className="text-2xl font-semibold">Years</h4>
      <p className="text-2xl leading-tight text-white">Experience Working</p>
    </div>
  </div>
  <div className="absolute  left-0 w-64 h-1.5 bg-black rounded-full"></div>
</div>
          </div>
        </div>
      </div>
    </section>
    </>

  );
}
