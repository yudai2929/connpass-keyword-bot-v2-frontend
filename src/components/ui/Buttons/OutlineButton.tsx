import { BaseButton, ButtonProps } from "./BaseButton";

export const OutlineButton = ({ children, ...props }: ButtonProps) => {
  return (
    <BaseButton
      color="primary"
      bgColor="white"
      borderWidth={1}
      borderColor="primary"
      _hover={{ bgColor: "primary", color: "white" }}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
