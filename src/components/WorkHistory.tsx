"use client"
import React, { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  youtubeId: string;
  categories: string[];
}

const WorkHistory: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
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

  const filters = ["all", "development", "design", "photography", "branding", "video"];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categories.includes(activeFilter));

  return (
    <section className="portfolio-area pt-20 pb-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Work History</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            Able an hope of body. Any nay shyness article matters own removal nothing his forming. 
            Gay own additions education satisfied the perpetual. If he cause manor happy. 
            Without farther she exposed saw man led. Along on happy could cease green oh.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          {filters.map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded capitalize transition-colors ${
                activeFilter === filter
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-effect overflow-hidden rounded shadow-lg bg-white">
              <div className="thumb relative aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  title={`YouTube video player for ${item.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.categories.map(category => (
                    <span 
                      key={category} 
                      className="text-xs bg-gray-100 px-2 py-1 rounded capitalize"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;