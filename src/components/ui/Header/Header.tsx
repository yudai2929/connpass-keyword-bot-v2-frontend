import React from "react";
import { Avatar } from "@/components/ui/Avatar";
import { HStack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

type HeaderProps = {
  name: string;
  avatarUrl: string;
};
export const Header = ({ name, avatarUrl }: HeaderProps) => {
  return (
    <HStack
      justify={"space-between"}
      align={"center"}
      p={4}
      borderBottom={"1px solid"}
      borderColor={"gray.200"}
      shadow={"sm"}
    >
      <Text as="h1" fontWeight={"bold"} fontSize={"xl"} color={"primary"}>
        Connpass Bot
      </Text>
      <HStack>
        <Text fontWeight={"bold"}>{name}</Text>
        <Avatar src={avatarUrl} size={"sm"} />
      </HStack>
    </HStack>
  );
};
