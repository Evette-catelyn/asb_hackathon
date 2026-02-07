import { useNavigate } from 'react-router';
import { Sprout, FileText, Cloud, TrendingUp, Repeat, DollarSign, User, LogOut, Undo2, Redo2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { translations } from '../utils/translations';
import { LanguageSelector } from '../components/LanguageSelector';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';
import { toast } from 'sonner';

export function Dashboard() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { farmerProfile, logout } = useAuth();
  const t = translations[language];

  const handleUndo = () => {
    toast.info(t.undo);
    // Undo functionality can be implemented based on specific use case
  };

  const handleRedo = () => {
    toast.info(t.redo);
    // Redo functionality can be implemented based on specific use case
  };

  // Enable keyboard shortcuts
  useKeyboardShortcuts({
    onUndo: handleUndo,
    onRedo: handleRedo,
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const features = [
    {
      icon: <Sprout className="w-8 h-8 text-green-600" />,
      title: t.cropAdvisories,
      description: t.cropAdvisoriesDesc,
      color: 'bg-green-50 border-green-200',
      action: () => alert('Coming soon!'),
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: t.schemeApplication,
      description: t.schemeApplicationDesc,
      color: 'bg-blue-50 border-blue-200',
      action: () => navigate('/schemes'),
    },
    {
      icon: <Cloud className="w-8 h-8 text-sky-600" />,
      title: t.weatherSoil,
      description: t.weatherSoilDesc,
      color: 'bg-sky-50 border-sky-200',
      action: () => alert('Coming soon!'),
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: t.latestTrends,
      description: t.latestTrendsDesc,
      color: 'bg-purple-50 border-purple-200',
      action: () => alert('Coming soon!'),
    },
    {
      icon: <Repeat className="w-8 h-8 text-orange-600" />,
      title: t.cooperativeConnections,
      description: t.cooperativeConnectionsDesc,
      color: 'bg-orange-50 border-orange-200',
      action: () => navigate('/cooperative-network'),
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-600" />,
      title: t.marketPrice,
      description: t.marketPriceDesc,
      color: 'bg-emerald-50 border-emerald-200',
      action: () => alert('Coming soon!'),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-gray-900">
                {t.dashboard}
              </h1>
              {/* Undo/Redo Buttons */}
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={handleUndo}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                  title={`${t.undo} (Ctrl+Z)`}
                >
                  <Undo2 className="w-5 h-5" />
                </button>
                <button
                  onClick={handleRedo}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                  title={`${t.redo} (Ctrl+Shift+Z)`}
                >
                  <Redo2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
              >
                <User className="w-5 h-5" />
                <span className="text-sm">{t.profile}</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm">{t.logout}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {t.welcomeBack}, {farmerProfile?.name}! 👋
          </h2>
          <p className="text-gray-600">
            {language === 'malayalam' ? 'നിങ്ങളുടെ കാർഷിക യാത്രയിൽ ഞങ്ങൾ നിങ്ങളോടൊപ്പമുണ്ട്' :
             language === 'hindi' ? 'आपकी कृषि यात्रा में हम आपके साथ हैं' :
             'We are here to support your farming journey'}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  {language === 'malayalam' ? 'നൽകാൻ ഉള്ളവ' :
                   language === 'hindi' ? 'देने के लिए' : 'To Give'}
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {farmerProfile?.hasToGive.length || 0}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Repeat className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  {language === 'malayalam' ? 'ആവശ്യമുള്ളവ' :
                   language === 'hindi' ? 'चाहिए' : 'Needed'}
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {farmerProfile?.needsFromOthers.length || 0}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  {language === 'malayalam' ? 'ബന്ധങ്ങൾ' :
                   language === 'hindi' ? 'कनेक्शन' : 'Connections'}
                </p>
                <p className="text-2xl font-bold text-purple-600">24</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t.quickAccess}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={feature.action}
                className={`${feature.color} border-2 rounded-xl p-6 text-left hover:shadow-lg transition-all duration-200 hover:scale-105`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}