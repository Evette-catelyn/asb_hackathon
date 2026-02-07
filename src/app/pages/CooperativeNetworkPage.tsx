import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, MapPin, Phone, Package, IndianRupee, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { translations } from '../utils/translations';
import { LanguageSelector } from '../components/LanguageSelector';

interface Farmer {
  id: string;
  name: string;
  phone: string;
  address: string;
  distance: number; // in km
  products: Array<{
    id: string;
    name: string;
    quantity: string;
    price: string;
  }>;
}

export function CooperativeNetworkPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { farmerProfile } = useAuth();
  const t = translations[language];

  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Mock data - in real app, this would come from backend based on user's needs
  const nearbyFarmers: Farmer[] = [
    {
      id: '1',
      name: language === 'malayalam' ? 'രാജേഷ് കുമാർ' : 
            language === 'hindi' ? 'राजेश कुमार' : 'Rajesh Kumar',
      phone: '9876543210',
      address: language === 'malayalam' ? 'കോട്ടയം' :
               language === 'hindi' ? 'कोट्टायम' : 'Kottayam',
      distance: 2.5,
      products: [
        {
          id: 'cowDung',
          name: t.cowDung,
          quantity: language === 'malayalam' ? '500 കിലോ' :
                    language === 'hindi' ? '500 किलो' : '500 kg',
          price: '₹5/kg',
        },
        {
          id: 'milk',
          name: t.milk,
          quantity: language === 'malayalam' ? '50 ലിറ്റർ/ദിവസം' :
                    language === 'hindi' ? '50 लीटर/दिन' : '50 L/day',
          price: '₹45/L',
        },
      ],
    },
    {
      id: '2',
      name: language === 'malayalam' ? 'സുരേഷ് നായർ' :
            language === 'hindi' ? 'सुरेश नायर' : 'Suresh Nair',
      phone: '9876543211',
      address: language === 'malayalam' ? 'ആലപ്പുഴ' :
               language === 'hindi' ? 'अलप्पुझा' : 'Alappuzha',
      distance: 4.8,
      products: [
        {
          id: 'paddyStraw',
          name: t.paddyStraw,
          quantity: language === 'malayalam' ? '1 ടൺ' :
                    language === 'hindi' ? '1 टन' : '1 ton',
          price: '₹8/kg',
        },
        {
          id: 'rice',
          name: t.rice,
          quantity: language === 'malayalam' ? '100 കിലോ' :
                    language === 'hindi' ? '100 किलो' : '100 kg',
          price: '₹40/kg',
        },
      ],
    },
    {
      id: '3',
      name: language === 'malayalam' ? 'മീന കുമാരി' :
            language === 'hindi' ? 'मीना कुमारी' : 'Meena Kumari',
      phone: '9876543212',
      address: language === 'malayalam' ? 'തൃശ്ശൂർ' :
               language === 'hindi' ? 'त्रिशूर' : 'Thrissur',
      distance: 7.2,
      products: [
        {
          id: 'vegetables',
          name: t.vegetables,
          quantity: language === 'malayalam' ? 'വ്യത്യസ്തം' :
                    language === 'hindi' ? 'विभिन्न' : 'Various',
          price: language === 'malayalam' ? 'വിപണി വില' :
                 language === 'hindi' ? 'बाजार मूल्य' : 'Market rate',
        },
        {
          id: 'fruits',
          name: t.fruits,
          quantity: language === 'malayalam' ? 'സീസണൽ' :
                    language === 'hindi' ? 'मौसमी' : 'Seasonal',
          price: language === 'malayalam' ? 'വിപണി വില' :
                 language === 'hindi' ? 'बाजार मूल्य' : 'Market rate',
        },
      ],
    },
    {
      id: '4',
      name: language === 'malayalam' ? 'അനിൽ വർഗീസ്' :
            language === 'hindi' ? 'अनिल वर्गीस' : 'Anil Varghese',
      phone: '9876543213',
      address: language === 'malayalam' ? 'ഇടുക്കി' :
               language === 'hindi' ? 'इडुक्की' : 'Idukki',
      distance: 12.5,
      products: [
        {
          id: 'fertilizer',
          name: t.fertilizer,
          quantity: language === 'malayalam' ? '200 കിലോ' :
                    language === 'hindi' ? '200 किलो' : '200 kg',
          price: '₹15/kg',
        },
      ],
    },
    {
      id: '5',
      name: language === 'malayalam' ? 'പ്രിയ ശർമ്മ' :
            language === 'hindi' ? 'प्रिया शर्मा' : 'Priya Sharma',
      phone: '9876543214',
      address: language === 'malayalam' ? 'പാലക്കാട്' :
               language === 'hindi' ? 'पालक्काड़' : 'Palakkad',
      distance: 15.0,
      products: [
        {
          id: 'seeds',
          name: t.seeds,
          quantity: language === 'malayalam' ? 'വ്യത്യസ്ത ഇനം' :
                    language === 'hindi' ? 'विभिन्न किस्में' : 'Various varieties',
          price: language === 'malayalam' ? 'ഇനം അനുസരിച്ച്' :
                 language === 'hindi' ? 'किस्म के अनुसार' : 'As per variety',
        },
        {
          id: 'eggs',
          name: t.eggs,
          quantity: language === 'malayalam' ? '100/ദിവസം' :
                    language === 'hindi' ? '100/दिन' : '100/day',
          price: '₹6/piece',
        },
      ],
    },
  ];

  // Get unique products from farmer's needs
  const neededProducts = farmerProfile?.needsFromOthers || [];

  // Filter farmers based on selected product
  const filteredFarmers = selectedFilter === 'all'
    ? nearbyFarmers
    : nearbyFarmers.filter(farmer =>
        farmer.products.some(product => product.id === selectedFilter)
      );

  // Sort by distance
  const sortedFarmers = [...filteredFarmers].sort((a, b) => a.distance - b.distance);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              {t.cooperativeTitle}
            </h1>
          </div>
          <LanguageSelector />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t.filterByProduct}
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedFilter === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.allProducts}
            </button>
            {neededProducts.map(productId => {
              const productName = {
                cowDung: t.cowDung,
                paddyStraw: t.paddyStraw,
                wheat: t.wheat,
                rice: t.rice,
                vegetables: t.vegetables,
                fruits: t.fruits,
                milk: t.milk,
                eggs: t.eggs,
                fertilizer: t.fertilizer,
                seeds: t.seeds,
              }[productId];
              
              return (
                <button
                  key={productId}
                  onClick={() => setSelectedFilter(productId)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedFilter === productId
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  {productName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <Navigation className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-blue-900">
                {language === 'malayalam' ? 
                  'നിങ്ങളുടെ ആവശ്യങ്ങൾക്കനുസരിച്ച് ദൂരം അടിസ്ഥാനമാക്കി കർഷകരെ കാണിക്കുന്നു' :
                 language === 'hindi' ?
                  'आपकी आवश्यकताओं के अनुसार दूरी के आधार पर किसान दिखाए जा रहे हैं' :
                  'Showing farmers based on distance who have what you need'}
              </p>
            </div>
          </div>
        </div>

        {/* Farmers List */}
        <div className="space-y-4">
          {sortedFarmers.map(farmer => (
            <div
              key={farmer.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {farmer.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-red-500" />
                      {farmer.address}
                    </div>
                    <div className="flex items-center gap-1">
                      <Navigation className="w-4 h-4 text-blue-500" />
                      {farmer.distance} {language === 'malayalam' ? 'കി.മീ' :
                                         language === 'hindi' ? 'कि.मी' : 'km'}
                      {language === 'malayalam' ? ' അകലെ' :
                       language === 'hindi' ? ' दूर' : ' away'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  {language === 'malayalam' ? 'ലഭ്യമായ ഉൽപ്പന്നങ്ങൾ:' :
                   language === 'hindi' ? 'उपलब्ध उत्पाद:' : 'Available Products:'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {farmer.products.map(product => (
                    <div
                      key={product.id}
                      className={`p-3 rounded-lg border-2 ${
                        neededProducts.includes(product.id)
                          ? 'bg-green-50 border-green-300'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {product.name}
                            {neededProducts.includes(product.id) && (
                              <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                                {language === 'malayalam' ? 'നിങ്ങൾക്ക് വേണം' :
                                 language === 'hindi' ? 'आपको चाहिए' : 'You need'}
                              </span>
                            )}
                          </p>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Package className="w-3 h-3" />
                              {product.quantity}
                            </div>
                            <div className="flex items-center gap-1">
                              <IndianRupee className="w-3 h-3" />
                              {product.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <button className="w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all flex items-center justify-center gap-2 font-medium">
                <Phone className="w-4 h-4" />
                {t.contactFarmer}
              </button>
            </div>
          ))}
        </div>

        {filteredFarmers.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">
              {language === 'malayalam' ? 'ഈ ഉൽപ്പന്നം ഉള്ള കർഷകരെ കണ്ടെത്തിയില്ല' :
               language === 'hindi' ? 'इस उत्पाद वाले किसान नहीं मिले' :
               'No farmers found with this product'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
