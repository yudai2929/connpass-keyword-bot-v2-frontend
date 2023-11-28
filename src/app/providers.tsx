"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { LiffProvider } from "@/hooks/useLiff";
import { chakraTheme } from "@/libs/chakra";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LiffProvider>
      <CacheProvider>
        <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
      </CacheProvider>
    </LiffProvider>
  );
}
