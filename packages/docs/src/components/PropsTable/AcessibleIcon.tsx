import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Info } from "phosphor-react";
import { styled } from "../../styles/stitches";

const AccessibleIconContent = styled(AccessibleIcon, { color: "$gray500" });

export const AccessibleIconComponent = ({ label }: { label: string }) => {
  return (
    <AccessibleIconContent label={label}>
      <Info size={16} />
    </AccessibleIconContent>
  );
};
