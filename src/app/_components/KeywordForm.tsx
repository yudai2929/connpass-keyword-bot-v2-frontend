import React from "react";
import { OutlineButton, PrimaryButton } from "@/components/ui/Buttons";
import { Form } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { VStack } from "@/components/ui/Stack";
import { Switch } from "@/components/ui/Switch";
import { Text } from "@/components/ui/Text";

export const KeywordForm = () => {
  return (
    <VStack spacing={4}>
      <VStack spacing={0} w="full" alignItems={"start"}>
        <Form.Label fontWeight={"bold"}>キーワード</Form.Label>
        <Form.Control>
          <Input value={""} />
        </Form.Control>
        <Text fontSize={"sm"} color={"textDarkGary"}>
          通知されるキーワード（複数選択可）
        </Text>
      </VStack>

      <OutlineButton onClick={() => {}} w="full">
        キーワード追加
      </OutlineButton>

      <Form.Control alignItems="center">
        <Form.Label fontWeight={"bold"}>開催場所</Form.Label>
        <Select options={[]} />
      </Form.Control>

      <Form.Control alignItems="center">
        <Form.Label fontWeight={"bold"}>通知設定</Form.Label>
        <Switch size={"lg"} />
      </Form.Control>

      <PrimaryButton onClick={() => {}} w="full">
        保存
      </PrimaryButton>
    </VStack>
  );
};
