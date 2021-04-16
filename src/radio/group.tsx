import React, { forwardRef } from 'react';
import RadioGroupContext from './RadioGroupContext';
import { RadioChangeEvent, RadioGroupProps } from './interface';
import { getPrefixClass } from '../utils/getPrefixClass';
import useControlledValue from '../switch/hooks/useControlledValue';
import clsx from 'clsx';

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const prefixClass = getPrefixClass('radio-group');
  const [ value, setValue ] = useControlledValue<any>(props.defaultValue, {
    value: props.value,
  });
  const onRadioChange = (e: RadioChangeEvent) => {
    const prevValue = value;
    const val = e.target.value;
    if (!('value' in props)) {
      setValue(val);
    }
    const { onChange } = props;
    if (onChange && val !== prevValue) {
      onChange(e);
    }
  };
  const renderGroup = () => {
    const {
      className = '',
      children,
      style,
      id,
      onMouseEnter,
      onMouseLeave,
    } = props;
    const classes = clsx(prefixClass, className);
    return (
      <div className={classes} style={style} id={id} ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </div>
    );
  };
  return <RadioGroupContext.Provider value={{
    onChange: onRadioChange,
    value,
    disabled: props.disabled,
    name: props.name,
    color: props.color,
  }
  }>
    {renderGroup()}
  </RadioGroupContext.Provider>;
});

RadioGroup.displayName = 'RadioGroup';
export default RadioGroup;
