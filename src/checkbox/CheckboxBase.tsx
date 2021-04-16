import React, {
  ChangeEvent,
  InputHTMLAttributes, ReactNode, useEffect,
  useState,
} from 'react';
import clsx from 'clsx';
import { CheckboxChangeEvent } from './interface';
import Ripple from '../utils/Ripple';

export interface CheckBoxBase extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  prefixCls?: string,
  type?: string,
  color?: string
  checked?: boolean
  defaultChecked?: boolean,
  onChange?: (e: CheckboxChangeEvent) => void
  renderIcon?: () => ReactNode
}

const CheckBoxBase = React.forwardRef<HTMLInputElement, CheckBoxBase>((props, ref) => {
  const {
    prefixCls = 'base-checkbox',
    className,
    disabled,
    checked,
    color = '#1976d2',
    type = 'checkbox',
    defaultChecked,
    style,
    onChange,
    renderIcon,
    ...rest
  } = props;
  const [ innerChecked, setInnerChecked ] = useState(!!checked || !!defaultChecked);
  const classes = clsx(prefixCls,
    {
      [`${prefixCls}-checked`]: innerChecked,
      [`${prefixCls}-disabled`]: disabled,
    },
    className,
  );
  useEffect(() => {
    if ('checked' in props) {
      setInnerChecked(!!checked);
    }
  }, [ checked ]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (!('checked' in props)) {
      setInnerChecked(e.target.checked);
    }
    onChange?.({
      target: {
        ...props,
        checked: e.target.checked,
      },
      stopPropagation () {
        e.stopPropagation();
      },
      preventDefault () {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent,
    });
  };
  return (
    <span className={classes}>
        <input type={type} className={`${prefixCls}-input`} ref={ref} checked={!!innerChecked} {...rest}
               onChange={handleChange} />
        <span className={`${prefixCls}-inner`}>
          {renderIcon?.()}
          {!disabled && <Ripple color={color} />}
        </span>
      </span>
  );
});
CheckBoxBase.displayName = 'CheckBoxBase';
export default CheckBoxBase;
