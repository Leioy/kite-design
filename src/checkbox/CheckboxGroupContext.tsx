import { createContext } from 'react';
import { CheckboxGroupContext } from '@/checkbox/interface';

export const GroupContext = createContext<CheckboxGroupContext | null>(null);
