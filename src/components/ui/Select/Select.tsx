import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";

export type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
} & ChakraSelectProps;

export const Select = ({ options, ...rest }: SelectProps) => {
  return (
    <ChakraSelect
      {...rest}
      sx={{
        ":focus": {
          borderColor: "primary",
          boxShadow: "0 0 0 0px var(--chakra-colors-primary)",
        },
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </ChakraSelect>
  );
};
