import { ReactNode } from "react";
import Button from "./Button";
import { ArrowIcon } from "./Icons";

type Variant = "primary" | "secondary" | "tertiary" | "aux" | "black";

type RenderButtonProps = {
    text: string | ReactNode;
    variant: Variant;
    onClick: () => void;
    withArrow?: boolean;
    arrowFill?: string;
};

export const renderButton = ({
    text,
    variant,
    onClick,
    withArrow = false,
    arrowFill = "",
}: RenderButtonProps) => (
    <Button variant={variant} onClick={onClick}>
        {text}
        {withArrow && <ArrowIcon fillC={arrowFill} width="10" height="10" />}
    </Button>
);

type RenderIconButtonProps = {
    variant: Variant;
    onClick: () => void;
    arrowFill: string;
};

export const renderIconButton = ({
    variant,
    onClick,
    arrowFill,
}: RenderIconButtonProps) => (
    <Button variant={variant} onClick={onClick}>
        <ArrowIcon fillC={arrowFill} width="8" height="10" />
    </Button>
);
