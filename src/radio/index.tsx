import React from 'react';
import InternalRadio from './radio';

import Group from './group';
import { RadioProps } from './interface';

interface ComputedComponent extends React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLElement>> {
  Group: typeof Group
}

const Radio = InternalRadio as ComputedComponent;
Radio.Group = Group;
export { Group };
export default Radio;
