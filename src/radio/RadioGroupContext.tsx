import React from 'react';
import { RadioContextProps } from '@/radio/interface';

const RadioGroupContext = React.createContext<RadioContextProps | null>(null);

export default RadioGroupContext;
