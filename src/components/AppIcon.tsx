import React from 'react';
import * as LucideIcons from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import type { LucideProps } from "lucide-react";

type IconProps = {
    name: keyof typeof LucideIcons | string;
    size?: number;
    color?: string;
    className?: string;
    strokeWidth?: number;
} & LucideProps;

const Icon: React.FC<IconProps> = function Icon({
    name,
    size = 24,
    color = "currentColor",
    className = "",
    strokeWidth = 2,
    ...props
}) {
    const IconComponent = (LucideIcons as Record<string, any>)?.[name];

    if (!IconComponent) {
        return <HelpCircle size={size} color="gray" strokeWidth={strokeWidth} className={className} {...props} />;
    }

    return (
        <IconComponent
            size={size}
            color={color}
            strokeWidth={strokeWidth}
            className={className}
            {...props}
        />);
}
export default Icon;