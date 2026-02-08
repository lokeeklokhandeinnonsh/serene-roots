import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hoverable = false,
    padding = 'md'
}) => {
    return (
        <div
            className={`
        ${styles.card} 
        ${hoverable ? styles.hoverable : ''} 
        ${styles[padding]} 
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default Card;
