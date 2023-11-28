"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { LiffProvider } from "@/hooks/useLiff";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LiffProvider>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </LiffProvider>
  );
}
