import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-[#8ecae6] text-neutral-950 border-[#8ecae6]",
            secondary: "border-white text-white bg-transparent",
        },
        size: {
            sm: 'h-10',
        },
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: 'sm';
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const {variant, size, className, ...otherProps} = props
    return (
        <button
            className={classes({
                variant,
                size, 
                className,
            })}
            {...otherProps}
        />
    );
}
