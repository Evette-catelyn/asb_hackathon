import { createContext, useContext, useState, ReactNode } from 'react';

export interface FarmerProfile {
  name: string;
  email?: string;
  phone: string;
  address: string;
  farmerType: string;
  hasToGive: string[];
  needsFromOthers: string[];
}

interface AuthContextType {
  isAuthenticated: boolean;
  farmerProfile: FarmerProfile | null;
  login: (profile: FarmerProfile) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [farmerProfile, setFarmerProfile] = useState<FarmerProfile | null>(null);

  const login = (profile: FarmerProfile) => {
    setFarmerProfile(profile);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setFarmerProfile(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, farmerProfile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
