import React, { CSSProperties, forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';
import Ripple from '@/utils/Ripple';
import useControlledValue from '@/switch/hooks/useControlledValue';
import { tuple } from '@/utils/type';

const SwitchColors = tuple('default', 'primary', 'secondary', 'success', 'warning', 'danger');
export type SwitchColor = typeof SwitchColors[number]
export type SwitchSize = 'default' | 'small'
export type SwitchChangeHandler = (checked: boolean, event: React.MouseEvent) => void
export type SwitchClickHandler = SwitchChangeHandler
interface SwitchBaseProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange'> {
  prefixClass?: string
  disabled?: boolean;
  defaultChecked?: boolean;
  checked?: boolean;
  autoFocus?: boolean;
  loading?: boolean;
  size?: SwitchSize;
  style?: CSSProperties;
  color?: SwitchColor
  onChange?: SwitchChangeHandler
  onClick?: SwitchClickHandler
  loadingIcon?: React.ReactNode
}

const SwitchBase = forwardRef<HTMLButtonElement, SwitchBaseProps>((props, ref) => {
  const {
    prefixClass,
    className,
    checked,
    color = 'default',
    size='default',
    defaultChecked,
    disabled,
    loadingIcon,
    onClick,
    onChange,
    ...rest
  } = props;
  const [ innerChecked, setInnerChecked ] = useControlledValue<boolean>(false, {
    value: !!checked,
    defaultValue: !!defaultChecked,
  });
  const switchClasses = clsx(
    prefixClass,
    className,
    `${prefixClass}-${color}`,
    `${prefixClass}-${size}`,
    {
      [`${prefixClass}-checked`]: innerChecked,
      [`${prefixClass}-disabled`]: disabled,
    },
  );
  const rippleColorMap = {
    default: '#fff',
    primary: '#1976d2',
    secondary: '#dc004e',
    success: '#18821c',
    warning: '#d27e15',
    danger: '#cc2b2b',
  };

  const triggerChange = (newChecked: boolean, e: React.MouseEvent) => {
    let mergedChecked = innerChecked;
    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange?.(mergedChecked, e);
    }
    return mergedChecked;
  };
  const onInternalClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = triggerChange(!innerChecked, e);
    onClick?.(result, e);
  };
  return (
    <button ref={ref} className={switchClasses} {...rest} onClick={onInternalClick}>
      <span className={`${prefixClass}-track`} />
      <span className={`${prefixClass}-button`}>
        <span className={`${prefixClass}-circle`} >
          {loadingIcon}
        </span>
        {!disabled && <Ripple color={innerChecked ? rippleColorMap[color] : '#fff'} />}
      </span>
    </button>
  );
});
SwitchBase.displayName = 'SwitchBase';
export default SwitchBase;
