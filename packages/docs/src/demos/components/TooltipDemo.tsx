import { Box, Surface, Text, Tooltip } from "@micode-ui/react";
import { useState } from "react";

export const TooltipDemo = () => {
  return (
    <Tooltip content="You can now continue shipping">
      <Text css={{ cursor: "pointer", color: "$white" }}>Hover me</Text>
    </Tooltip>
  );
};
