"use client";
import { KeywordForm } from "./KeywordForm";
import { Box } from "@/components/ui/Box";

export const HomePage = () => {
  return (
    <Box px={4} pt={8} bg="white">
      <KeywordForm />
    </Box>
  );
};
