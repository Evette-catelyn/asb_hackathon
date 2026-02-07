import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center justify-end gap-3">
      <Languages className="w-5 h-5 text-gray-600" />
      <button
        onClick={() => setLanguage('malayalam')}
        className={`px-5 py-2 text-sm font-medium rounded-lg transition-all ${
          language === 'malayalam'
            ? 'bg-green-600 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        മലയാളം
      </button>
      <button
        onClick={() => setLanguage('hindi')}
        className={`px-5 py-2 text-sm font-medium rounded-lg transition-all ${
          language === 'hindi'
            ? 'bg-green-600 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        हिन्दी
      </button>
      <button
        onClick={() => setLanguage('english')}
        className={`px-5 py-2 text-sm font-medium rounded-lg transition-all ${
          language === 'english'
            ? 'bg-green-600 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        English
      </button>
    </div>
  );
}
