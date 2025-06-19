import React from 'react';
import { Phone, MessageCircle, Book, PenTool as Tool, Users, Clock } from 'lucide-react';

const Support = () => {
  const supportOptions = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Call Apple Support',
      description: 'Get help from our experts over the phone',
      action: 'Call now',
      available: '24/7'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Chat with Support',
      description: 'Start a conversation with an Apple specialist',
      action: 'Start chat',
      available: 'Available now'
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'User Manuals',
      description: 'Find detailed guides for all Apple products',
      action: 'Browse manuals',
      available: 'Always available'
    },
    {
      icon: <Tool className="w-8 h-8" />,
      title: 'Repair Service',
      description: 'Schedule a repair at an Apple Store or authorized service provider',
      action: 'Schedule repair',
      available: 'Book online'
    }
  ];

  const popularTopics = [
    'How to set up your new iPhone',
    'Troubleshooting Wi-Fi connection issues',
    'Managing your Apple ID and iCloud',
    'Battery and charging help',
    'Software updates and installation',
    'Data backup and recovery',
    'Apple Pay setup and troubleshooting',
    'Screen Time and parental controls'
  ];

  const communityFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Apple Community',
      description: 'Connect with other Apple users and get answers from the community'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'System Status',
      description: 'Check the current status of Apple services and systems'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-gray-900">
            Apple Support
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 font-light max-w-3xl mx-auto">
            Get help with your Apple products. We're here to help you get the most out of your Apple experience.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help topics..."
                className="w-full px-6 py-4 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
              <button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight">
            Get Support
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  {option.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {option.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {option.description}
                </p>
                
                <p className="text-sm text-green-600 mb-4 font-medium">
                  {option.available}
                </p>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 w-full">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight">
            Popular Help Topics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-300"
              >
                <p className="text-gray-800 font-medium">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Resources */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight">
            Community & Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight">
            Need More Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our support team is available 24/7 to help you with any questions or issues you may have.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Schedule a call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;