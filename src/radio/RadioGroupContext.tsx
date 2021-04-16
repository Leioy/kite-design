import React from 'react';
import { RadioContextProps } from './interface';

const RadioGroupContext = React.createContext<RadioContextProps | null>(null);

export default RadioGroupContext;
