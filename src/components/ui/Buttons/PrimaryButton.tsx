import { BaseButton, ButtonProps } from "./BaseButton";

export const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <BaseButton
      bgColor="primary"
      _hover={{ bgColor: "primaryDark" }}
      color="white"
      {...props}
    >
      {children}
    </BaseButton>
  );
};
