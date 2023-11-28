import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

export const Input = ({ children: children, ...props }: InputProps) => (
  <ChakraInput
    {...props}
    sx={{
      ":focus": {
        borderColor: "primary",
        boxShadow: "0 0 0 0px var(--chakra-colors-primary)",
      },
    }}
  >
    {children}
  </ChakraInput>
);
