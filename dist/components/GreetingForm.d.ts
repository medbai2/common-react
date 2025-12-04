/**
 * GreetingForm component for collecting user input
 * Specialized component for the Hello project
 */
import React from 'react';
export interface GreetingFormData {
    name?: string;
    title?: string;
}
export interface GreetingFormProps {
    onSubmit: (data: GreetingFormData) => void;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const GreetingForm: React.FC<GreetingFormProps>;
//# sourceMappingURL=GreetingForm.d.ts.map