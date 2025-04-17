import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
    return (
        <button
            className={`inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
