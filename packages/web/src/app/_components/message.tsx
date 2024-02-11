"use client";
import { FC } from "react";
import { Text } from "./text";

type Props = {
  message: string;
};
export const Message: FC<Props> = ({ message }) => {
  return (
    <div>
      <Text>{message}</Text>
    </div>
  );
};
