import { useState } from 'react';
import { photos, categories } from '../data/photos';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Photo Gallery</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === 'all'
              ? 'bg-blue text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-yellow-300'
              }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.slug)}
              className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === category.slug
                ? 'bg-blue-500 text-white' // Use a proper Tailwind color
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}

            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative group">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                    <p className="text-sm">{photo.description}</p>
                    <p className="text-sm mt-2">{photo.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery; 