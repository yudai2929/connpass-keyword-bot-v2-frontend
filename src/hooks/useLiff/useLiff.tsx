"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { Profile } from "@/entities/profile";
import {
  liffGetAccessToken,
  liffGetProfile,
  liffInit,
  liffIsLoggedIn,
  liffLogin,
  liffLogout,
} from "@/libs/liff";

interface LiffContextValue {
  initialized: boolean;
  isLoggedIn: boolean;
  profile: Profile | undefined;
  accessToken?: string;
  login: () => void;
  logout: () => void;
}

const LiffContextInitialValue: LiffContextValue = {
  initialized: false,
  isLoggedIn: false,
  profile: undefined,
  accessToken: undefined,
  login: () => {},
  logout: () => {},
};

const LiffContext = createContext<LiffContextValue>(LiffContextInitialValue);

export const useLiff = (): LiffContextValue => {
  const context = useContext(LiffContext);
  if (!context) {
    throw new Error("useLiff must be used within a LiffProvider");
  }
  return context;
};

interface LiffProviderProps {
  children: ReactNode;
}

export const LiffProvider = ({ children }: LiffProviderProps) => {
  const [initialized, setInitialized] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile>();
  const [accessToken, setAccessToken] = useState<string | undefined>();
  useEffect(() => {
    const init = async () => {
      await liffInit();
      setInitialized(true);

      if (!liffIsLoggedIn()) return;

      setIsLoggedIn(true);
      const profile = await liffGetProfile();
      setProfile(profile);
      const accessToken = liffGetAccessToken();
      setAccessToken(accessToken ?? undefined);
    };

    init();
  }, []);

  const login = useCallback(async () => {
    liffLogin();
    setIsLoggedIn(true);
    const profile = await liffGetProfile();
    setProfile(profile);
    const accessToken = liffGetAccessToken();
    setAccessToken(accessToken ?? undefined);
  }, []);

  const logout = useCallback(async () => {
    liffLogout();
    setIsLoggedIn(false);
    setProfile(undefined);
    setAccessToken(undefined);
  }, []);

  const contextValue = {
    initialized,
    isLoggedIn,
    profile,
    accessToken,
    login,
    logout,
  };

  return (
    <LiffContext.Provider value={contextValue}>{children}</LiffContext.Provider>
  );
};
