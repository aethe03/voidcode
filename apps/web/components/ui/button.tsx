import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps
  extends VariantProps<typeof buttonClasses>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva(
  "rounded-full inline-flex transition-all items-center",
  {
    variants: {
      variant: {
        primary: [
          "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow, text-shadow] duration-300 ease-in",
          "[&_.icon-wrapper]:ml-2",
        ],
        secondary: [
          "text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
          "[&_.icon-wrapper]:bg-transparent-white  [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-2 [&_.icon-wrapper]:ml-2  [&_.icon-wrapper]:-mr-2",
        ],
        tertiary: "",
      },
      size: {
        small: "text-sm px-3 h-7",
        medium: "text-md px-4 h-8",
        large: "text-lg px-6 h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <span className="icon-wrapper">{children}</span>
);

export const Button = ({
  children,
  href,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <Link
      {...props}
      className={classNames(buttonClasses({ variant, size }), props.className)}
      href={href}
    >
      {children}
    </Link>
  );
};
