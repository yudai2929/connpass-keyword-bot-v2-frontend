"use client";
import React from "react";
import { Header } from "../ui/Header/Header";
import { useLiff } from "@/hooks/useLiff";

type HeaderLayoutProps = {
  children: React.ReactNode;
};
export const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  const { profile } = useLiff();
  return (
    <>
      <Header
        name={profile?.displayName ?? ""}
        avatarUrl={profile?.pictureUrl ?? ""}
      />
      {children}
    </>
  );
};
