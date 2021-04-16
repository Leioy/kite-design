import React, {
  ChangeEvent,
  InputHTMLAttributes, useEffect,
  useState,
} from 'react';
import clsx from 'clsx';
import { RadioChangeEvent } from './interface';
import Ripple from '../utils/Ripple';

export interface RadioBase extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  prefixCls?: string,
  type?: string,
  color?: string
  checked?: boolean
  defaultChecked?: boolean,
  onChange?: (e: RadioChangeEvent) => void
}

const RadioBase = React.forwardRef<HTMLInputElement, RadioBase>((props, ref) => {
  const {
    prefixCls = 'base-radio',
    className,
    disabled,
    checked,
    color = '#1976d2',
    type = 'radio',
    defaultChecked,
    style,
    onChange,
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
          <span className={`${prefixCls}-border`} style={innerChecked ? { borderColor: color } : {}} />
          <span className={`${prefixCls}-circle`} style={{ background: color }} />
          {!disabled && <Ripple color={color} />}
        </span>
      </span>
  );
});
RadioBase.displayName = 'RadioBase';
export default RadioBase;
