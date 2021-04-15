import InternalCheckbox from './checkbox';
import Group from './group';
import React from 'react';

interface ComputedComponent extends React.ForwardRefExoticComponent<any> {
  Group: typeof Group
}

const Checkbox = InternalCheckbox as ComputedComponent;
Checkbox.Group = Group;

export default Checkbox;
