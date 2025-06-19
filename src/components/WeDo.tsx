// components/WeDo.jsx
import {
  FiHome,
  FiTool,
  FiLayers,
  FiPackage,
} from 'react-icons/fi';

export default function WeDo() {
  return (
    <section className="w-full about-area bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left side: video background */}
          <div
            className="lg:w-1/2 h-screen w-full px-0 mx-0 bg-cover "
            style={{ backgroundImage: 'url(/2349.jpg)' }}
          ></div>

          {/* Right side: info content */}
          <div className="lg:w-1/2 p-6 flex flex-col justify-center">
            <div className="content max-w-xl mx-auto lg:mx-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
                We Offer <br />
                Best Construction Services & Solutions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="flex space-x-4">
                  <div className="icon text-yellow-400 text-4xl flex-shrink-0">
                    <FiLayers />
                  </div>
                  <div className="info">
                    <h4 className="text-xl font-semibold mb-2">Construction</h4>
                    <p className="text-gray-300">
                      Contented attending smallness it oh ye unwilling. Turned favour man two but lovers. Suffer should
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex space-x-4">
                  <div className="icon text-yellow-400 text-4xl flex-shrink-0">
                    <FiTool />
                  </div>
                  <div className="info">
                    <h4 className="text-xl font-semibold mb-2">Renovation</h4>
                    <p className="text-gray-300">
                      Contented attending smallness it oh ye unwilling. Turned favour man two but lovers. Suffer should
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex space-x-4">
                  <div className="icon text-yellow-400 text-4xl flex-shrink-0">
                    <FiHome />
                  </div>
                  <div className="info">
                    <h4 className="text-xl font-semibold mb-2">Home Maintenance</h4>
                    <p className="text-gray-300">
                      Contented attending smallness it oh ye unwilling. Turned favour man two but lovers. Suffer should
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex space-x-4">
                  <div className="icon text-yellow-400 text-4xl flex-shrink-0">
                    <FiPackage />
                  </div>
                  <div className="info">
                    <h4 className="text-xl font-semibold mb-2">Architecture</h4>
                    <p className="text-gray-300">
                      Contented attending smallness it oh ye unwilling. Turned favour man two but lovers. Suffer should
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
