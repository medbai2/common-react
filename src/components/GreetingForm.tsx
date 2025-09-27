/**
 * GreetingForm component for collecting user input
 * Specialized component for the Hello project
 */

import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { sanitizeName, sanitizeTitle } from '../utils/sanitizer';

export interface GreetingFormData {
  name: string;
  title: string;
}

export interface GreetingFormProps {
  onSubmit: (data: GreetingFormData) => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export const GreetingForm: React.FC<GreetingFormProps> = ({
  onSubmit,
  disabled = false,
  loading = false,
  className = '',
}) => {
  const [formData, setFormData] = useState<GreetingFormData>({
    name: '',
    title: '',
  });
  const [errors, setErrors] = useState<Partial<GreetingFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<GreetingFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Sanitize and trim inputs
    const sanitizedData = {
      name: sanitizeName(formData.name.trim()),
      title: sanitizeTitle(formData.title.trim()),
    };

    onSubmit(sanitizedData);
  };

  const handleInputChange = (field: keyof GreetingFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const isFormValid = formData.name.trim().length > 0;
  const isDisabled = disabled || loading || !isFormValid;

  return (
    <form onSubmit={handleSubmit} className={`medbai-form ${className}`}>
      <Input
        id="name"
        label="Name"
        required
        value={formData.name}
        onChange={handleInputChange('name')}
        placeholder="Enter your name"
        disabled={disabled || loading}
        error={errors.name}
      />

      <Input
        id="title"
        label="Title"
        value={formData.title}
        onChange={handleInputChange('title')}
        placeholder="Enter your title (optional)"
        disabled={disabled || loading}
        help="Optional title or position"
      />

      <Button
        type="submit"
        disabled={isDisabled}
        loading={loading}
        className="medbai-button--primary"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </Button>
      
      {isDisabled && !loading && (
        <div className="medbai-form-help">
          Please enter a name to submit
        </div>
      )}
    </form>
  );
};
