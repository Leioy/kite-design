import InternalCheckbox from './checkbox';
import Group from './group';
import React from 'react';
import { CheckboxProps } from './interface';

export type { CheckboxProps, CheckboxChangeEvent, CheckboxGroupProps, CheckboxOptionType } from './interface';

interface ComputedComponent
  extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>> {
  Group: typeof Group
}

const Checkbox = InternalCheckbox as ComputedComponent;
Checkbox.Group = Group;

export default Checkbox;
