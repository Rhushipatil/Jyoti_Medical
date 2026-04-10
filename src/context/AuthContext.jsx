import { createContext, useState, useContext } from 'react';
import { api } from '../services/api.mock';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const data = await api.login(email, password);
      setUser(data.user);
      return true;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const googleLogin = async ({ credential, profile }) => {
    setIsLoading(true);
    try {
      let googleUser;
      if (profile) {
        // Access token flow: profile from /userinfo endpoint
        googleUser = {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          avatar: profile.picture,
          role: 'customer',
        };
      } else {
        // Credential flow: decode JWT
        const base64Payload = credential.split('.')[1];
        const payload = JSON.parse(atob(base64Payload));
        googleUser = {
          id: payload.sub,
          name: payload.name,
          email: payload.email,
          avatar: payload.picture,
          role: 'customer',
        };
      }
      setUser(googleUser);
      return true;
    } catch (error) {
      throw new Error('Google login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, googleLogin, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
