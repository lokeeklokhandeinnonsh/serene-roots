import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    error?: string;
    multiline?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    error,
    className = '',
    id,
    multiline = false,
    ...props
}) => {
    const inputId = id || props.name;
    const InputComponent = multiline ? 'textarea' : 'input';

    return (
        <div className={`${styles.container} ${className}`}>
            {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
            {/* @ts-ignore - dynamic component usage with differing props */}
            <InputComponent
                id={inputId}
                className={`${styles.input} ${error ? styles.errorInput : ''}`}
                {...props}
            />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};

export default Input;
