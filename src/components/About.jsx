import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-600">Capturing life's beautiful moments through my lens</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-gray-700 leading-relaxed">
                I am a passionate photographer with over 5 years of experience in capturing the world's most beautiful moments. My journey in photography began with a simple point-and-shoot camera and has evolved into a professional pursuit of creating stunning visual stories.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My work spans across various genres including nature, portrait, street, and architectural photography. I believe that every photograph has a story to tell, and I strive to capture those stories in the most authentic and compelling way possible.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">My Approach</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Capturing authentic moments</li>
                  <li>Focusing on natural lighting</li>
                  <li>Creating emotional connections</li>
                  <li>Paying attention to details</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60"
                  alt="Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 