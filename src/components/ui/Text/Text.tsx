import { Text as ChakraText, TextProps } from "@chakra-ui/react";

export const Text = ({ children, ...rest }: TextProps) => (
  <ChakraText {...rest}>{children}</ChakraText>
);
