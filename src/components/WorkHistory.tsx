import React from "react";

interface PortfolioItem {
  id: number;
  title: string;
  youtubeId: string; // e.g., KVzCfWWzGyA
  categories: string[];
}

const WorkHistory: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    { id: 1, title: "Project 1", youtubeId: "KVzCfWWzGyA", categories: ["branding", "photography"] },
    { id: 2, title: "Project 2", youtubeId: "KVzCfWWzGyA", categories: ["video", "development"] },
    { id: 3, title: "Project 3", youtubeId: "KVzCfWWzGyA", categories: ["design", "photography"] },
    { id: 4, title: "Project 4", youtubeId: "KVzCfWWzGyA", categories: ["branding", "video"] },
    { id: 5, title: "Project 5", youtubeId: "KVzCfWWzGyA", categories: ["design", "photography"] },
    { id: 6, title: "Project 6", youtubeId: "KVzCfWWzGyA", categories: ["branding", "design", "development"] },
    { id: 7, title: "Project 7", youtubeId: "KVzCfWWzGyA", categories: ["branding", "photography"] },
    { id: 8, title: "Project 8", youtubeId: "KVzCfWWzGyA", categories: ["video", "development"] },
  ];

  return (
    <section className="portfolio-area pt-20 pb-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Work History</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">All</button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Development</button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Design</button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Photography</button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Branding</button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Video</button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1     sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
              <div className="portfolio-effet overflow-hidden rounded shadow-lg bg-white">
                <div className="thumb relative aspect-video">
                  {/* Embed YouTube iFrame directly */}
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/bJcjJ-yWQhM?si=0grwVluiAUaVetJL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                  {/* Hover overlay */}
                 
                  </div>
                </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;