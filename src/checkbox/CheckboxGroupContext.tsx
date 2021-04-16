import { createContext } from 'react';
import { CheckboxGroupContext } from './interface';

export const GroupContext = createContext<CheckboxGroupContext | null>(null);
