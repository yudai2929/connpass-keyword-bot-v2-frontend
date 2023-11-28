"use client";
import { useLiff } from "@/hooks/useLiff";

export const HomePage = () => {
  const { initialized, isLoggedIn, profile, accessToken, logout, login } =
    useLiff();

  return (
    <div>
      <h1>Next.js + LIFF</h1>

      <h2>LIFF Status</h2>
      <ul>
        <li>Initialized: {initialized ? "true" : "false"}</li>
        <li>LoggedIn: {isLoggedIn ? "true" : "false"}</li>
        <li>Profile: {profile ? JSON.stringify(profile) : "null"}</li>
        <li>AccessToken: {accessToken ?? "null"}</li>
      </ul>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
