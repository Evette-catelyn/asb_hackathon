import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { translations } from '../utils/translations';
import { LanguageSelector } from '../components/LanguageSelector';
import { OTPInput } from '../components/OTPInput';

export function LoginPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { login } = useAuth();
  const t = translations[language];

  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    if (phone.length === 10) {
      setOtpSent(true);
      console.log('OTP sent to:', phone);
    }
  };

  const handleLogin = () => {
    if (otp.length === 6) {
      // Simulate login with mock data
      login({
        name: 'Demo Farmer',
        phone,
        email: 'demo@farmer.com',
        address: 'Demo Address, Kerala',
        farmerType: 'crop',
        hasToGive: ['cowDung', 'paddyStraw'],
        needsFromOthers: ['fertilizer', 'seeds'],
      });
      navigate('/dashboard');
    }
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

      {/* Login Content */}
      <div className="container mx-auto px-6 py-8 flex items-center justify-center min-h-[calc(100vh-73px)]">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            {t.loginTitle}
          </h1>

          <div className="space-y-6">
            {/* Phone Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.phone}
              </label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  disabled={otpSent}
                  placeholder="10 digit mobile number"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
                />
                {!otpSent && (
                  <button
                    onClick={handleSendOTP}
                    disabled={phone.length !== 10}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" />
                    {t.sendOTP}
                  </button>
                )}
              </div>
            </div>

            {/* OTP Input */}
            {otpSent && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                  {t.enterOTP}
                </label>
                <div className="flex flex-col items-center gap-4">
                  <OTPInput length={6} value={otp} onChange={setOtp} />
                  <button
                    onClick={handleLogin}
                    disabled={otp.length !== 6}
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
                  >
                    {t.verifyOTP}
                  </button>
                  <button
                    onClick={() => {
                      setOtpSent(false);
                      setOtp('');
                    }}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {language === 'malayalam' ? 'നമ്പർ മാറ്റുക' :
                     language === 'hindi' ? 'नंबर बदलें' : 'Change Number'}
                  </button>
                </div>
              </div>
            )}

            {/* Register Link */}
            <div className="text-center text-sm text-gray-600 pt-4 border-t">
              {t.dontHaveAccount}{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                {t.registerButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}