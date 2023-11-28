"use client";
import { ReactNode } from "react";
import { Box } from "../ui/Box";
import { Flex } from "../ui/Flex";

type ResponsiveLayoutProps = {
  children: ReactNode;
};

export const ResponsiveLayout = ({ children }: ResponsiveLayoutProps) => {
  return (
    <Flex
      justify="center" // 水平方向の中央寄せ
      h="100vh" // Flexコンテナの高さをビューポートの100%に設定
      bg="subColor"
    >
      <Box
        bg="white"
        width={["100%", "100%", "480px", "480px"]} // 0-48emは100%、48em以上は768px
      >
        {children}
      </Box>
    </Flex>
  );
};
