/**
 * Input component with consistent styling and validation
 */
import React from 'react';
import { FormFieldComponentProps } from './FormField';
export interface InputProps extends Omit<FormFieldComponentProps, 'children'> {
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    autoComplete?: string;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
}
export declare const Input: React.FC<InputProps>;
//# sourceMappingURL=Input.d.ts.map