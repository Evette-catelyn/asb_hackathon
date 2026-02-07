import { useNavigate } from 'react-router';
import { ArrowLeft, ExternalLink, Calendar, IndianRupee } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { LanguageSelector } from '../components/LanguageSelector';

export function SchemesPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const schemes = [
    {
      title: language === 'malayalam' ? 'പ്രധാനമന്ത്രി കിസാൻ സമ്മാൻ നിധി' :
             language === 'hindi' ? 'प्रधानमंत्री किसान सम्मान निधि' :
             'PM-KISAN Scheme',
      description: language === 'malayalam' ? 'എല്ലാ കർഷകർക്കും വാർഷിക ₹6000 നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക്' :
                   language === 'hindi' ? 'सभी किसानों को सालाना ₹6000 सीधे बैंक खाते में' :
                   'Annual ₹6000 direct benefit transfer to all farmers',
      amount: '₹6,000',
      deadline: language === 'malayalam' ? 'തുടർച്ചയായി തുറന്നത്' :
                language === 'hindi' ? 'लगातार खुला' : 'Rolling',
      eligibility: language === 'malayalam' ? 'എല്ലാ കർഷകർക്കും' :
                   language === 'hindi' ? 'सभी किसानों के लिए' : 'All Farmers',
      category: language === 'malayalam' ? 'വരുമാന പിന്തുണ' :
                language === 'hindi' ? 'आय समर्थन' : 'Income Support',
    },
    {
      title: language === 'malayalam' ? 'കിസാൻ ക്രെഡിറ്റ് കാർഡ്' :
             language === 'hindi' ? 'किसान क्रेडिट कार्ड' :
             'Kisan Credit Card',
      description: language === 'malayalam' ? '3 ലക്ഷം രൂപ വരെയുള്ള എളുപ്പമുള്ള വായ്പ' :
                   language === 'hindi' ? '3 लाख रुपये तक का आसान ऋण' :
                   'Easy credit up to ₹3 lakh for farming needs',
      amount: '₹3,00,000',
      deadline: language === 'malayalam' ? 'തുടർച്ചയായി തുറന്നത്' :
                language === 'hindi' ? 'लगातार खुला' : 'Rolling',
      eligibility: language === 'malayalam' ? 'ഭൂമി ഉള്ള കർഷകർ' :
                   language === 'hindi' ? 'भूमि वाले किसान' : 'Land-holding Farmers',
      category: language === 'malayalam' ? 'വായ്പ' :
                language === 'hindi' ? 'ऋण' : 'Credit',
    },
    {
      title: language === 'malayalam' ? 'മണ്ണ് ആരോഗ്യ കാർഡ് സ്കീം' :
             language === 'hindi' ? 'मृदा स्वास्थ्य कार्ड योजना' :
             'Soil Health Card Scheme',
      description: language === 'malayalam' ? 'സൗജന്യ മണ്ണ് പരിശോധനയും ശുപാർശകളും' :
                   language === 'hindi' ? 'मुफ्त मिट्टी परीक्षण और सिफारिशें' :
                   'Free soil testing and recommendations',
      amount: language === 'malayalam' ? 'സൗജന്യം' :
              language === 'hindi' ? 'मुफ्त' : 'Free',
      deadline: language === 'malayalam' ? 'തുടർച്ചയായി തുറന്നത്' :
                language === 'hindi' ? 'लगातार खुला' : 'Rolling',
      eligibility: language === 'malayalam' ? 'എല്ലാ കർഷകർക്കും' :
                   language === 'hindi' ? 'सभी किसानों के लिए' : 'All Farmers',
      category: language === 'malayalam' ? 'സാങ്കേതിക പിന്തുണ' :
                language === 'hindi' ? 'तकनीकी सहायता' : 'Technical Support',
    },
    {
      title: language === 'malayalam' ? 'പ്രധാനമന്ത്രി ഫസൽ ബീമ യോജന' :
             language === 'hindi' ? 'प्रधानमंत्री फसल बीमा योजना' :
             'PM Fasal Bima Yojana',
      description: language === 'malayalam' ? 'വിള നഷ്ടത്തിനുള്ള ഇൻഷുറൻസ് കവറേജ്' :
                   language === 'hindi' ? 'फसल नुकसान के लिए बीमा कवरेज' :
                   'Insurance coverage for crop loss',
      amount: language === 'malayalam' ? 'വിളയുടെ 2%' :
              language === 'hindi' ? 'फसल का 2%' : '2% of crop value',
      deadline: language === 'malayalam' ? 'വിതയ്ക്കുന്ന സമയത്ത്' :
                language === 'hindi' ? 'बुवाई के समय' : 'At sowing time',
      eligibility: language === 'malayalam' ? 'എല്ലാ കർഷകർക്കും' :
                   language === 'hindi' ? 'सभी किसानों के लिए' : 'All Farmers',
      category: language === 'malayalam' ? 'ഇൻഷുറൻസ്' :
                language === 'hindi' ? 'बीमा' : 'Insurance',
    },
    {
      title: language === 'malayalam' ? 'ഓർഗാനിക് ഫാമിംഗ് സ്കീം' :
             language === 'hindi' ? 'जैविक खेती योजना' :
             'Organic Farming Scheme',
      description: language === 'malayalam' ? 'ഓർഗാനിക് കൃഷിയിലേക്ക് മാറുന്നതിനുള്ള സഹായം' :
                   language === 'hindi' ? 'जैविक खेती में परिवर्तन के लिए सहायता' :
                   'Support for transitioning to organic farming',
      amount: '₹50,000',
      deadline: language === 'malayalam' ? 'മാർച്ച് 31, 2026' :
                language === 'hindi' ? '31 मार्च, 2026' : 'March 31, 2026',
      eligibility: language === 'malayalam' ? 'ഓർഗാനിക് കർഷകർ' :
                   language === 'hindi' ? 'जैविक किसान' : 'Organic Farmers',
      category: language === 'malayalam' ? 'സബ്‌സിഡി' :
                language === 'hindi' ? 'सब्सिडी' : 'Subsidy',
    },
    {
      title: language === 'malayalam' ? 'ഡ്രിപ് ഇറിഗേഷൻ സബ്‌സിഡി' :
             language === 'hindi' ? 'ड्रिप सिंचाई सब्सिडी' :
             'Drip Irrigation Subsidy',
      description: language === 'malayalam' ? 'ഡ്രിപ് ഇറിഗേഷൻ സംവിധാനങ്ങൾക്ക് 90% സബ്‌സിഡി' :
                   language === 'hindi' ? 'ड्रिप सिंचाई प्रणाली पर 90% सब्सिडी' :
                   '90% subsidy on drip irrigation systems',
      amount: language === 'malayalam' ? 'ചെലവിന്റെ 90%' :
              language === 'hindi' ? 'लागत का 90%' : '90% of cost',
      deadline: language === 'malayalam' ? 'ജൂൺ 30, 2026' :
                language === 'hindi' ? '30 जून, 2026' : 'June 30, 2026',
      eligibility: language === 'malayalam' ? 'ചെറുകർഷകർ' :
                   language === 'hindi' ? 'छोटे किसान' : 'Small Farmers',
      category: language === 'malayalam' ? 'സബ്‌സിഡി' :
                language === 'hindi' ? 'सब्सिडी' : 'Subsidy',
    },
  ];

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
              {t.schemesTitle}
            </h1>
          </div>
          <LanguageSelector />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {t.schemesTitle}
          </h2>
          <p className="text-gray-600">
            {t.schemesDescription}
          </p>
        </div>

        {/* Schemes Grid */}
        <div className="grid gap-6">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {scheme.title}
                    </h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {scheme.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {scheme.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <IndianRupee className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="text-gray-500 text-xs">
                          {language === 'malayalam' ? 'തുക' :
                           language === 'hindi' ? 'राशि' : 'Amount'}
                        </p>
                        <p className="font-semibold text-gray-900">{scheme.amount}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-gray-500 text-xs">
                          {language === 'malayalam' ? 'അവസാന തീയതി' :
                           language === 'hindi' ? 'अंतिम तिथि' : 'Deadline'}
                        </p>
                        <p className="font-semibold text-gray-900">{scheme.deadline}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 bg-purple-600 rounded-full" />
                      <div>
                        <p className="text-gray-500 text-xs">
                          {language === 'malayalam' ? 'യോഗ്യത' :
                           language === 'hindi' ? 'पात्रता' : 'Eligibility'}
                        </p>
                        <p className="font-semibold text-gray-900">{scheme.eligibility}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all flex items-center justify-center gap-2 font-medium">
                {t.applyNow}
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
