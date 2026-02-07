import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Edit2, Save } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth, FarmerProfile } from '../context/AuthContext';
import { translations } from '../utils/translations';
import { LanguageSelector } from '../components/LanguageSelector';

export function ProfilePage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { farmerProfile, login } = useAuth();
  const t = translations[language];

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<FarmerProfile>(farmerProfile!);

  const products = [
    { id: 'cowDung', label: t.cowDung },
    { id: 'paddyStraw', label: t.paddyStraw },
    { id: 'wheat', label: t.wheat },
    { id: 'rice', label: t.rice },
    { id: 'vegetables', label: t.vegetables },
    { id: 'fruits', label: t.fruits },
    { id: 'milk', label: t.milk },
    { id: 'eggs', label: t.eggs },
    { id: 'fertilizer', label: t.fertilizer },
    { id: 'seeds', label: t.seeds },
  ];

  const farmerTypes = [
    { id: 'crop', label: t.cropFarmer },
    { id: 'dairy', label: t.dairyFarmer },
    { id: 'poultry', label: t.poultryFarmer },
    { id: 'mixed', label: t.mixedFarmer },
    { id: 'organic', label: t.organicFarmer },
  ];

  const handleSave = () => {
    login(formData);
    setIsEditing(false);
  };

  const toggleProduct = (productId: string, listType: 'hasToGive' | 'needsFromOthers') => {
    setFormData(prev => ({
      ...prev,
      [listType]: prev[listType].includes(productId)
        ? prev[listType].filter(id => id !== productId)
        : [...prev[listType], productId]
    }));
  };

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
              {t.myProfile}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
              >
                <Edit2 className="w-4 h-4" />
                {t.editProfile}
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
              >
                <Save className="w-4 h-4" />
                {t.saveChanges}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.name}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.emailOptional}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.phone}
              </label>
              <input
                type="tel"
                value={formData.phone}
                disabled
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
              />
              <p className="text-xs text-gray-500 mt-1">
                {language === 'malayalam' ? 'ഫോൺ നമ്പർ മാറ്റാൻ കഴിയില്ല' :
                 language === 'hindi' ? 'फोन नंबर नहीं बदला जा सकता' :
                 'Phone number cannot be changed'}
              </p>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.address}
              </label>
              <textarea
                rows={3}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>

            {/* Farmer Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.farmerType}
              </label>
              <select
                value={formData.farmerType}
                onChange={(e) => setFormData({ ...formData, farmerType: e.target.value })}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
              >
                {farmerTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.label}</option>
                ))}
              </select>
            </div>

            {/* What You Have */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.whatYouHave}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {products.map(product => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => isEditing && toggleProduct(product.id, 'hasToGive')}
                    disabled={!isEditing}
                    className={`px-4 py-3 text-sm rounded-lg border transition-all ${
                      formData.hasToGive.includes(product.id)
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-green-500'
                    } ${!isEditing ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    {product.label}
                  </button>
                ))}
              </div>
            </div>

            {/* What You Need */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.whatYouNeed}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {products.map(product => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => isEditing && toggleProduct(product.id, 'needsFromOthers')}
                    disabled={!isEditing}
                    className={`px-4 py-3 text-sm rounded-lg border transition-all ${
                      formData.needsFromOthers.includes(product.id)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                    } ${!isEditing ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    {product.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
