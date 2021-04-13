import { useState } from 'react';

export default function useControlledValue<T> (defaultStateValue: T, options?: { value: T, defaultValue: T }): [ T, (value: T) => void ] {
  const { value, defaultValue } = options || {};
  const [ innerValue, setInnerValue ] = useState<T>(value || defaultValue || defaultStateValue);
  const mergeValue = value ? value : innerValue;
  const triggerChange = (newValue: T) => {
    setInnerValue(newValue);
  };
  return [ mergeValue, triggerChange ];
}
