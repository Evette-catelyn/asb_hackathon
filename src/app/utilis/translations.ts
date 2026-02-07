import { Language } from '../context/LanguageContext';

export interface Translations {
  // Homepage
  homeTitle: string;
  homeDescription: string;
  loginButton: string;
  registerButton: string;
  
  // Navigation
  dashboard: string;
  schemes: string;
  profile: string;
  cooperativeNetwork: string;
  logout: string;
  
  // Dashboard
  welcomeBack: string;
  quickAccess: string;
  cropAdvisories: string;
  cropAdvisoriesDesc: string;
  schemeApplication: string;
  schemeApplicationDesc: string;
  weatherSoil: string;
  weatherSoilDesc: string;
  latestTrends: string;
  latestTrendsDesc: string;
  cooperativeConnections: string;
  cooperativeConnectionsDesc: string;
  marketPrice: string;
  marketPriceDesc: string;
  
  // Login/Register
  registerTitle: string;
  loginTitle: string;
  name: string;
  email: string;
  emailOptional: string;
  phone: string;
  sendOTP: string;
  verifyOTP: string;
  enterOTP: string;
  address: string;
  farmerType: string;
  selectFarmerType: string;
  whatYouHave: string;
  whatYouNeed: string;
  submit: string;
  backToHome: string;
  alreadyHaveAccount: string;
  dontHaveAccount: string;
  
  // Farmer Types
  cropFarmer: string;
  dairyFarmer: string;
  poultryFarmer: string;
  mixedFarmer: string;
  organicFarmer: string;
  
  // Products
  cowDung: string;
  paddyStraw: string;
  wheat: string;
  rice: string;
  vegetables: string;
  fruits: string;
  milk: string;
  eggs: string;
  fertilizer: string;
  seeds: string;
  
  // Profile
  myProfile: string;
  editProfile: string;
  saveChanges: string;
  
  // Schemes
  schemesTitle: string;
  schemesDescription: string;
  applyNow: string;
  
  // Cooperative Network
  cooperativeTitle: string;
  findFarmers: string;
  searchProduct: string;
  distance: string;
  quantity: string;
  price: string;
  contactFarmer: string;
  filterByProduct: string;
  allProducts: string;
  
  // Common
  loading: string;
  error: string;
  success: string;
  cancel: string;
  confirm: string;
  undo: string;
  redo: string;
}

export const translations: Record<Language, Translations> = {
  malayalam: {
    // Homepage
    homeTitle: 'കർഷക സഹായ പ്ലാറ്റ്ഫോം',
    homeDescription: 'കർഷകർക്കായി പ്രത്യേകം രൂപകൽപ്പന ചെയ്ത സമ്പൂർണ്ണ പ്ലാറ്റ്ഫോം',
    loginButton: 'പ്രവേശിക്കുക',
    registerButton: 'പുതിയ അംഗം',
    
    // Navigation
    dashboard: 'ഡാഷ്ബോർഡ്',
    schemes: 'സ്കീമുകൾ',
    profile: 'പ്രൊഫൈൽ',
    cooperativeNetwork: 'സഹകരണ ശൃംഖല',
    logout: 'പുറത്തുകടക്കുക',
    
    // Dashboard
    welcomeBack: 'സ്വാഗതം',
    quickAccess: 'വേഗത്തിലുള്ള പ്രവേശനം',
    cropAdvisories: 'വിള ഉപദേശം',
    cropAdvisoriesDesc: 'നിങ്ങളുടെ വിളകൾക്ക് മികച്ച ഉപദേശവും നിർദ്ദേശങ്ങളും നേടുക',
    schemeApplication: 'സ്കീം അപേക്ഷ',
    schemeApplicationDesc: 'സർക്കാർ സ്കീമുകൾക്ക് എളുപ്പത്തിൽ അപേക്ഷിക്കുക',
    weatherSoil: 'കാലാവസ്ഥ & മണ്ണ് വിവരം',
    weatherSoilDesc: 'തത്സമയ കാലാവസ്ഥ പ്രവചനവും മണ്ണ് പരിശോധന വിവരങ്ങളും',
    latestTrends: 'പുതിയ പ്രവണതകൾ',
    latestTrendsDesc: 'കാർഷിക മേഖലയിലെ പുതിയ പ്രവണതകളും സർക്കാർ സ്കീമുകളും',
    cooperativeConnections: 'സഹകരണ ബന്ധങ്ങൾ',
    cooperativeConnectionsDesc: 'മറ്റ് കർഷകരുമായി ബന്ധപ്പെടുകയും ഉൽപ്പന്നങ്ങൾ കൈമാറുകയും ചെയ്യുക',
    marketPrice: 'വിപണി വില',
    marketPriceDesc: 'എല്ലാ ഉൽപ്പന്നങ്ങളുടെയും ഇന്നത്തെ വിപണി വിലകൾ കാണുക',
    
    // Login/Register
    registerTitle: 'പുതിയ അംഗത്വം',
    loginTitle: 'പ്രവേശനം',
    name: 'പേര്',
    email: 'ഇമെയിൽ',
    emailOptional: 'ഇമെയിൽ (ഓപ്ഷണൽ)',
    phone: 'ഫോൺ നമ്പർ',
    sendOTP: 'OTP അയയ്ക്കുക',
    verifyOTP: 'OTP സ്ഥിരീകരിക്കുക',
    enterOTP: 'OTP നൽകുക',
    address: 'വിലാസം',
    farmerType: 'കർഷക തരം',
    selectFarmerType: 'കർഷക തരം തിരഞ്ഞെടുക്കുക',
    whatYouHave: 'നിങ്ങൾക്ക് എന്താണുള്ളത്',
    whatYouNeed: 'നിങ്ങൾക്ക് എന്താണ് വേണ്ടത്',
    submit: 'സമർപ്പിക്കുക',
    backToHome: 'ഹോമിലേക്ക് മടങ്ങുക',
    alreadyHaveAccount: 'അക്കൗണ്ട് ഉണ്ടോ?',
    dontHaveAccount: 'അക്കൗണ്ട് ഇല്ലേ?',
    
    // Farmer Types
    cropFarmer: 'വിള കർഷകൻ',
    dairyFarmer: 'ക്ഷീര കർഷകൻ',
    poultryFarmer: 'കോഴി കർഷകൻ',
    mixedFarmer: 'മിശ്ര കർഷകൻ',
    organicFarmer: 'ഓർഗാനിക് കർഷകൻ',
    
    // Products
    cowDung: 'ചാണകം',
    paddyStraw: 'നെല്ല് വൈക്കോൽ',
    wheat: 'ഗോതമ്പ്',
    rice: 'അരി',
    vegetables: 'പച്ചക്കറികൾ',
    fruits: 'പഴങ്ങൾ',
    milk: 'പാൽ',
    eggs: 'മുട്ടകൾ',
    fertilizer: 'വളം',
    seeds: 'വിത്തുകൾ',
    
    // Profile
    myProfile: 'എന്റെ പ്രൊഫൈൽ',
    editProfile: 'പ്രൊഫൈൽ എഡിറ്റ് ചെയ്യുക',
    saveChanges: 'മാറ്റങ്ങൾ സംരക്ഷിക്കുക',
    
    // Schemes
    schemesTitle: 'സർക്കാർ സ്കീമുകൾ',
    schemesDescription: 'കർഷകർക്കുള്ള സർക്കാർ സ്കീമുകളും പദ്ധതികളും',
    applyNow: 'ഇപ്പോൾ അപേക്ഷിക്കുക',
    
    // Cooperative Network
    cooperativeTitle: 'സഹകരണ ശൃംഖല',
    findFarmers: 'കർഷകരെ കണ്ടെത്തുക',
    searchProduct: 'ഉൽപ്പന്നം തിരയുക',
    distance: 'ദൂരം',
    quantity: 'അളവ്',
    price: 'വില',
    contactFarmer: 'കർഷകനെ ബന്ധപ്പെടുക',
    filterByProduct: 'ഉൽപ്പന്നം അനുസരിച്ച് ഫിൽട്ടർ ചെയ്യുക',
    allProducts: 'എല്ലാ ഉൽപ്പന്നങ്ങളും',
    
    // Common
    loading: 'ലോഡ് ചെയ്യുന്നു...',
    error: 'പിശക്',
    success: 'വിജയം',
    cancel: 'റദ്ദാക്കുക',
    confirm: 'സ്ഥിരീകരിക്കുക',
    undo: 'പഴയപടിയാക്കുക',
    redo: 'വീണ്ടും ചെയ്യുക',
  },
  
  hindi: {
    // Homepage
    homeTitle: 'किसान सहायता मंच',
    homeDescription: 'किसानों के लिए विशेष रूप से डिज़ाइन किया गया संपूर्ण मंच',
    loginButton: 'लॉगिन करें',
    registerButton: 'नया पंजीकरण',
    
    // Navigation
    dashboard: 'डैशबोर्ड',
    schemes: 'योजनाएं',
    profile: 'प्रोफ़ाइल',
    cooperativeNetwork: 'सहकारी नेटवर्क',
    logout: 'लॉगआउट',
    
    // Dashboard
    welcomeBack: 'स्वागत है',
    quickAccess: 'त्वरित पहुंच',
    cropAdvisories: 'फसल सलाह',
    cropAdvisoriesDesc: 'अपनी फसलों के लिए सर्वोत्तम सलाह और सुझाव प्राप्त करें',
    schemeApplication: 'योजना आवेदन',
    schemeApplicationDesc: 'सरकारी योजनाओं के लिए आसानी से आवेदन करें',
    weatherSoil: 'मौसम और मिट्टी',
    weatherSoilDesc: 'लाइव मौसम पूर्वानुमान और मिट्टी परीक्षण जानकारी',
    latestTrends: 'नवीनतम रुझान',
    latestTrendsDesc: 'कृषि क्षेत्र में नए रुझानों और सरकारी योजनाओं को जानें',
    cooperativeConnections: 'सहकारी संबंध',
    cooperativeConnectionsDesc: 'अन्य किसानों से जुड़ें और उत्पादों का आदान-प्रदान करें',
    marketPrice: 'बाजार मूल्य',
    marketPriceDesc: 'सभी उत्पादों की आज की बाजार कीमतें देखें',
    
    // Login/Register
    registerTitle: 'नया पंजीकरण',
    loginTitle: 'लॉगिन',
    name: 'नाम',
    email: 'ईमेल',
    emailOptional: 'ईमेल (वैकल्पिक)',
    phone: 'फोन नंबर',
    sendOTP: 'OTP भेजें',
    verifyOTP: 'OTP सत्यापित करें',
    enterOTP: 'OTP दर्ज करें',
    address: 'पता',
    farmerType: 'किसान प्रकार',
    selectFarmerType: 'किसान प्रकार चुनें',
    whatYouHave: 'आपके पास क्या है',
    whatYouNeed: 'आपको क्या चाहिए',
    submit: 'जमा करें',
    backToHome: 'होम पर वापस जाएं',
    alreadyHaveAccount: 'खाता है?',
    dontHaveAccount: 'खाता नहीं है?',
    
    // Farmer Types
    cropFarmer: 'फसल किसान',
    dairyFarmer: 'डेयरी किसान',
    poultryFarmer: 'मुर्गी पालन किसान',
    mixedFarmer: 'मिश्रित किसान',
    organicFarmer: 'जैविक किसान',
    
    // Products
    cowDung: 'गोबर',
    paddyStraw: 'धान का भूसा',
    wheat: 'गेहूं',
    rice: 'चावल',
    vegetables: 'सब्जियां',
    fruits: 'फल',
    milk: 'दूध',
    eggs: 'अंडे',
    fertilizer: 'खाद',
    seeds: 'बीज',
    
    // Profile
    myProfile: 'मेरी प्रोफ़ाइल',
    editProfile: 'प्रोफ़ाइल संपादित करें',
    saveChanges: 'परिवर्तन सहेजें',
    
    // Schemes
    schemesTitle: 'सरकारी योजनाएं',
    schemesDescription: 'किसानों के लिए सरकारी योजनाएं और कार्यक्रम',
    applyNow: 'अभी आवेदन करें',
    
    // Cooperative Network
    cooperativeTitle: 'सहकारी नेटवर्क',
    findFarmers: 'किसानों को खोजें',
    searchProduct: 'उत्पाद खोजें',
    distance: 'दूरी',
    quantity: 'मात्रा',
    price: 'मूल्य',
    contactFarmer: 'किसान से संपर्क करें',
    filterByProduct: 'उत्पाद द्वारा फ़िल्टर करें',
    allProducts: 'सभी उत्पाद',
    
    // Common
    loading: 'लोड हो रहा है...',
    error: 'त्रुटि',
    success: 'सफलता',
    cancel: 'रद्द करें',
    confirm: 'पुष्टि करें',
    undo: 'पूर्ववत करें',
    redo: 'फिर से करें',
  },
  
  english: {
    // Homepage
    homeTitle: 'Farmer Support Platform',
    homeDescription: 'Complete platform specially designed for farmers',
    loginButton: 'Login',
    registerButton: 'Register',
    
    // Navigation
    dashboard: 'Dashboard',
    schemes: 'Schemes',
    profile: 'Profile',
    cooperativeNetwork: 'Cooperative Network',
    logout: 'Logout',
    
    // Dashboard
    welcomeBack: 'Welcome Back',
    quickAccess: 'Quick Access',
    cropAdvisories: 'Crop Advisories',
    cropAdvisoriesDesc: 'Get best advice and suggestions for your crops',
    schemeApplication: 'Scheme Application',
    schemeApplicationDesc: 'Apply easily for government schemes',
    weatherSoil: 'Weather & Soil',
    weatherSoilDesc: 'Live weather forecast and soil testing information',
    latestTrends: 'Latest Trends',
    latestTrendsDesc: 'Know new trends and government schemes in agriculture',
    cooperativeConnections: 'Cooperative Connections',
    cooperativeConnectionsDesc: 'Connect with other farmers and exchange products',
    marketPrice: 'Market Price',
    marketPriceDesc: 'See today\'s market prices for all products',
    
    // Login/Register
    registerTitle: 'New Registration',
    loginTitle: 'Login',
    name: 'Name',
    email: 'Email',
    emailOptional: 'Email (Optional)',
    phone: 'Phone Number',
    sendOTP: 'Send OTP',
    verifyOTP: 'Verify OTP',
    enterOTP: 'Enter OTP',
    address: 'Address',
    farmerType: 'Farmer Type',
    selectFarmerType: 'Select Farmer Type',
    whatYouHave: 'What You Have',
    whatYouNeed: 'What You Need',
    submit: 'Submit',
    backToHome: 'Back to Home',
    alreadyHaveAccount: 'Have an account?',
    dontHaveAccount: 'Don\'t have an account?',
    
    // Farmer Types
    cropFarmer: 'Crop Farmer',
    dairyFarmer: 'Dairy Farmer',
    poultryFarmer: 'Poultry Farmer',
    mixedFarmer: 'Mixed Farmer',
    organicFarmer: 'Organic Farmer',
    
    // Products
    cowDung: 'Cow Dung',
    paddyStraw: 'Paddy Straw',
    wheat: 'Wheat',
    rice: 'Rice',
    vegetables: 'Vegetables',
    fruits: 'Fruits',
    milk: 'Milk',
    eggs: 'Eggs',
    fertilizer: 'Fertilizer',
    seeds: 'Seeds',
    
    // Profile
    myProfile: 'My Profile',
    editProfile: 'Edit Profile',
    saveChanges: 'Save Changes',
    
    // Schemes
    schemesTitle: 'Government Schemes',
    schemesDescription: 'Government schemes and programs for farmers',
    applyNow: 'Apply Now',
    
    // Cooperative Network
    cooperativeTitle: 'Cooperative Network',
    findFarmers: 'Find Farmers',
    searchProduct: 'Search Product',
    distance: 'Distance',
    quantity: 'Quantity',
    price: 'Price',
    contactFarmer: 'Contact Farmer',
    filterByProduct: 'Filter by Product',
    allProducts: 'All Products',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm',
    undo: 'Undo',
    redo: 'Redo',
  },
};
