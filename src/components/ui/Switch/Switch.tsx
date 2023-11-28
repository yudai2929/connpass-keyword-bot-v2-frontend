import { Switch as ChakraSwitch, SwitchProps } from "@chakra-ui/react";

export const Switch = ({ children, ...rest }: SwitchProps) => (
  <ChakraSwitch {...rest} colorScheme="orange">
    {children}
  </ChakraSwitch>
);
