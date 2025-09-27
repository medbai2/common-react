/**
 * MedBai React Common Library
 * Shared components, utilities, and styles for MedBai projects
 */

// Export all components
export { Button } from './components/Button';
export { FormField } from './components/FormField';
export { Input } from './components/Input';
export { StatusBanner } from './components/StatusBanner';
export { Table } from './components/Table';

// Export specialized components
export { GreetingForm, type GreetingFormData } from './components/GreetingForm';
export { StatsTable, type UserStats } from './components/StatsTable';

// Export all utilities
export { default as logger } from './utils/logger';
export * from './utils/sanitizer';

// Export all types
export * from './types/common';

// Export styles
import './styles/index.css';
