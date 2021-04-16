import React, { CSSProperties, forwardRef } from 'react';
import { getPrefixClass } from '../utils/getPrefixClass';
import SwitchBase, { SwitchChangeHandler, SwitchClickHandler, SwitchColor, SwitchSize } from './SwitchBase';
import clsx from 'clsx';
import { Loading } from '@kite-design/icons-react';

export interface SwitchProps {
  className?: string
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
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const {
    loading,
    disabled,
    className,
    ...rest
  } = props;
  const prefixClass = getPrefixClass('switch');
  const classes = clsx({ [`${prefixClass}-loading`]: loading }, className);
  const LoadingIcon = <div className={`${prefixClass}-loading-wrapper`}>
    {loading && <Loading className={`${prefixClass}-loading-icon`} />}
  </div>;
  return (
    <SwitchBase prefixClass={prefixClass} className={classes} disabled={disabled || loading} ref={ref}
                loadingIcon={LoadingIcon} {...rest} />
  );
});

Switch.displayName = 'Switch';
export default Switch;
