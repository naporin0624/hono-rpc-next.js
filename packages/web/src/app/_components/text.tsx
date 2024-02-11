"use client";
import { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"p">;
export const Text: FC<Props> = ({ children, ...props }) => {
  return (
    <p {...props}>
      <span>{children}</span>
    </p>
  );
};
