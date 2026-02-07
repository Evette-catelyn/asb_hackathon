import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { translations } from '../utils/translations';
import { LanguageSelector } from '../components/LanguageSelector';
import { OTPInput } from '../components/OTPInput';

export function RegisterPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { login } = useAuth();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    farmerType: '',
    hasToGive: [] as string[],
    needsFromOthers: [] as string[],
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState('');

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

  const handleSendOTP = () => {
    if (formData.phone.length === 10) {
      // Simulate OTP sending
      setOtpSent(true);
      console.log('OTP sent to:', formData.phone);
    }
  };

  const handleVerifyOTP = () => {
    // Simulate OTP verification (in real app, verify with backend)
    if (otp.length === 6) {
      setOtpVerified(true);
      console.log('OTP verified:', otp);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpVerified) {
      alert(language === 'malayalam' ? 'ദയവായി OTP സ്ഥിരീകരിക്കുക' : 
            language === 'hindi' ? 'कृपया OTP सत्यापित करें' : 
            'Please verify OTP');
      return;
    }
    
    login(formData);
    navigate('/dashboard');
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
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">{t.backToHome}</span>
          </button>
          <LanguageSelector />
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            {t.registerTitle}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.name} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Phone with OTP */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.phone} *
              </label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                  disabled={otpVerified}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
                />
                {!otpVerified && (
                  <button
                    type="button"
                    onClick={handleSendOTP}
                    disabled={formData.phone.length !== 10}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    {t.sendOTP}
                  </button>
                )}
                {otpVerified && (
                  <div className="px-6 py-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {language === 'malayalam' ? 'സ്ഥിരീകരിച്ചു' :
                     language === 'hindi' ? 'सत्यापित' : 'Verified'}
                  </div>
                )}
              </div>
            </div>

            {/* OTP Input */}
            {otpSent && !otpVerified && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t.enterOTP}
                </label>
                <div className="flex items-center gap-4">
                  <OTPInput length={6} value={otp} onChange={setOtp} />
                  <button
                    type="button"
                    onClick={handleVerifyOTP}
                    disabled={otp.length !== 6}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {t.verifyOTP}
                  </button>
                </div>
              </div>
            )}

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.address} *
              </label>
              <textarea
                required
                rows={3}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Farmer Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.farmerType} *
              </label>
              <select
                required
                value={formData.farmerType}
                onChange={(e) => setFormData({ ...formData, farmerType: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">{t.selectFarmerType}</option>
                {farmerTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.label}</option>
                ))}
              </select>
            </div>

            {/* What You Have */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.whatYouHave} *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {products.map(product => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => toggleProduct(product.id, 'hasToGive')}
                    className={`px-4 py-3 text-sm rounded-lg border transition-all ${
                      formData.hasToGive.includes(product.id)
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {product.label}
                  </button>
                ))}
              </div>
            </div>

            {/* What You Need */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.whatYouNeed} *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {products.map(product => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => toggleProduct(product.id, 'needsFromOthers')}
                    className={`px-4 py-3 text-sm rounded-lg border transition-all ${
                      formData.needsFromOthers.includes(product.id)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                    }`}
                  >
                    {product.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg transition-all font-medium"
            >
              {t.submit}
            </button>

            {/* Login Link */}
            <div className="text-center text-sm text-gray-600">
              {t.alreadyHaveAccount}{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                {t.loginButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}