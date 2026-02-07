import { LogIn, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { LanguageSelector } from '../components/LanguageSelector';
import backgroundImage from 'figma:asset/41f810786f7ffe6d994e49bf1281ff84a3828331.png';

export function Homepage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language Selection Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <LanguageSelector />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-73px)]">
        {/* Left Side - Login/Register (3/8th) */}
        <div className="w-full md:w-[37.5%] bg-white border-r flex items-center justify-center p-8 relative overflow-hidden">
          {/* Background Image with Translucent Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: 'center 20%'
            }}
          />
          <div className="absolute inset-0 bg-white/40" />
          
          {/* Content */}
          <div className="w-full max-w-md space-y-6 relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                {t.homeTitle}
              </h1>
              <p className="text-sm text-gray-600">
                {t.homeDescription}
              </p>
            </div>
            
            <button 
              onClick={() => navigate('/login')}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-3"
            >
              <LogIn className="w-5 h-5" />
              <span className="text-base font-medium">{t.loginButton}</span>
            </button>
            
            <button 
              onClick={() => navigate('/register')}
              className="w-full bg-white hover:bg-gray-50 text-gray-700 py-4 px-6 rounded-lg border border-gray-300 transition-all flex items-center justify-center gap-3"
            >
              <UserPlus className="w-5 h-5" />
              <span className="text-base font-medium">{t.registerButton}</span>
            </button>
          </div>
        </div>

        {/* Right Side - Features (5/8th) */}
        <div className="w-full md:w-[62.5%] p-8 overflow-y-auto bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {language === 'malayalam' ? 'ഞങ്ങളുടെ സേവനങ്ങൾ' : 
               language === 'hindi' ? 'हमारी सेवाएं' : 'Our Services'}
            </h2>
            
            <div className="grid gap-4">
              <FeatureCard
                icon="🌱"
                title={t.cropAdvisories}
                description={t.cropAdvisoriesDesc}
              />
              <FeatureCard
                icon="📄"
                title={t.schemeApplication}
                description={t.schemeApplicationDesc}
              />
              <FeatureCard
                icon="☁️"
                title={t.weatherSoil}
                description={t.weatherSoilDesc}
              />
              <FeatureCard
                icon="📈"
                title={t.latestTrends}
                description={t.latestTrendsDesc}
              />
              <FeatureCard
                icon="🔄"
                title={t.cooperativeConnections}
                description={t.cooperativeConnectionsDesc}
              />
              <FeatureCard
                icon="💰"
                title={t.marketPrice}
                description={t.marketPriceDesc}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:border-green-500 transition-colors hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="text-3xl flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
