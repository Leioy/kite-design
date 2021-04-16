import React, { useEffect, useState } from 'react';
import Checkbox from './checkbox';
import { CheckboxGroupProps, CheckboxOptionType, CheckboxValueType } from './interface';
import { getPrefixClass } from '../utils/getPrefixClass';
import omit from '../utils/omit';
import clsx from 'clsx';
import { GroupContext } from './CheckboxGroupContext';

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const { defaultValue, children, options = [], className, style, onChange, ...rest } = props;
  const [ value, setValue ] = useState<CheckboxValueType[]>(rest.value || defaultValue || []);
  const [ registeredValues, setRegisteredValues ] = useState<CheckboxValueType[]>([]);
  useEffect(() => {
    if ('value' in rest) {
      setValue(rest.value || []);
    }
  }, [ rest.value ]);
  const getOptions = () => {
    return options.map(option => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });
  };
  const cancelValue = (val: string) => {
    setRegisteredValues(prevValues => prevValues.filter(v => v !== val));
  };
  const registerValue = (val: string) => {
    setRegisteredValues(prevValues => [ ...prevValues, val ]);
  };
  const toggleOption = (option: CheckboxOptionType) => {
    const optionIndex = value.indexOf(option.value);
    const newValue = [ ...value ];
    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }
    if (!('value' in rest)) {
      setValue(newValue);
    }
    const options = getOptions();
    onChange?.(
      newValue.filter(val => registeredValues.indexOf(val) !== -1)
        .sort((a, b) => {
          const indexA = options.findIndex(option => option.value === a);
          const indexB = options.findIndex(option => option.value === b);
          return indexA - indexB;
        }),
    );
  };
  const prefixCls = getPrefixClass('');
  const groupPrefixCls = `${prefixCls}-group`;
  const domProps = omit(rest, [ 'value', 'disabled', 'color' ]);
  const renderOptions = getOptions().map(option => (
    <Checkbox
      prefixCls={prefixCls}
      key={option.value.toString()}
      disabled={'disabled' in option ? option.disabled : rest.disabled}
      color={'color' in option ? option.color : rest.color}
      value={option.value}
      checked={value.indexOf(option.value) !== -1}
      onChange={option.onChange}
      className={`${groupPrefixCls}-item`}
      style={option.style}
    >
      {option.label}
    </Checkbox>
  ));
  const classes = clsx(groupPrefixCls, className);
  return <div className={classes} style={style} {...domProps}>
    <GroupContext.Provider value={{
      toggleOption,
      value,
      disabled: rest.disabled,
      color: rest.color,
      name: rest.name,
      registerValue,
      cancelValue,
    }}>
      {options && options.length ? renderOptions : children}
    </GroupContext.Provider>
  </div>;
};

CheckboxGroup.displayName = 'CheckboxGroup';
export default CheckboxGroup;
