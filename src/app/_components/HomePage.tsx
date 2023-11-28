"use client";

import { useLiff } from "@/hooks/useLiff";

export const HomePage = () => {
  const { initialized, isLoggedIn, profile, login, logout } = useLiff();

  return (
    <div>
      <h1>Next.js + LIFF</h1>

      <h2>LIFF Status</h2>
      <ul>
        <li>Initialized: {initialized ? "true" : "false"}</li>
        <li>LoggedIn: {isLoggedIn ? "true" : "false"}</li>
        <li>Profile: {profile ? JSON.stringify(profile) : "null"}</li>
      </ul>
    </div>
  );
};
