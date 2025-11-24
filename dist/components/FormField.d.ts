/**
 * FormField component for consistent form input styling
 */
import React from 'react';
import { FormFieldProps } from '../types/common';
export interface FormFieldComponentProps extends FormFieldProps {
    id: string;
    children: React.ReactNode;
    errorId?: string;
    helpId?: string;
}
export declare const FormField: React.FC<FormFieldComponentProps>;
//# sourceMappingURL=FormField.d.ts.map