import React, { ForwardRefRenderFunction, useContext, useEffect, useRef } from 'react';
import { CheckboxProps } from './interface';
import { getPrefixClass } from '../utils/getPrefixClass';
import { GroupContext } from './CheckboxGroupContext';
import clsx from 'clsx';
import CheckboxBase from './CheckboxBase';
import { CheckboxSquare, CheckboxCheck, CheckboxIndeterminate } from '@kite-design/icons-react';

const InternalCheckbox: ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (props, ref) => {
  const {
    className,
    children,
    indeterminate = false,
    style,
    onMouseEnter,
    onMouseLeave,
    skipGroup = false,
    ...rest
  } = props;
  const context = useContext(GroupContext);
  const prevValue = useRef(rest.value);
  const prefixClass = getPrefixClass('checkbox');
  useEffect(() => {
    context?.registerValue(rest.value);
  }, []);
  useEffect(() => {
    if (skipGroup) return;
    if (rest.value !== prevValue.current) {
      context?.cancelValue(prevValue.current);
      context?.registerValue(rest.value);
    }
    return () => context?.cancelValue(rest.value);
  }, [ rest.value ]);
  const checkboxProps: CheckboxProps = { ...rest };
  if (context && !skipGroup) {
    checkboxProps.name = context.name;
    checkboxProps.checked = context.value.indexOf(rest.value) !== -1;
    checkboxProps.disabled = rest.disabled || context.disabled;
    checkboxProps.color =  rest.color|| context.color || '#1976d2' ;
    checkboxProps.onChange = (...args) => {
      rest.onChange?.(...args);
      context.toggleOption?.({ label: children, value: rest.value });
    };
  }
  const classes = clsx(
    {
      [`${prefixClass}-wrapper`]: true,
      [`${prefixClass}-wrapper-checked`]: checkboxProps.checked,
      [`${prefixClass}-wrapper-disabled`]: checkboxProps.disabled,
    },
    className,
  );
  const checkboxColor = checkboxProps.disabled ? '#a6a6a6' : checkboxProps.color;
  const renderCheckBoxIcon = () => {
    return <>
      <CheckboxSquare className={`${prefixClass}-icon-square`} />
      <CheckboxCheck className={`${prefixClass}-icon-check`} style={{ color: checkboxColor }} />
      {indeterminate &&
      <CheckboxIndeterminate className={`${prefixClass}-icon-indeterminate`} style={{ color: checkboxColor }} />}
    </>;
  };
  const checkboxClass = clsx({
    [`${prefixClass}-indeterminate`]: indeterminate,
  });
  return (
    <label className={classes} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <CheckboxBase {...checkboxProps} color={checkboxProps.color} prefixCls={prefixClass} className={checkboxClass}
                    renderIcon={renderCheckBoxIcon}
                    ref={ref} />
      {children !== undefined && <span>{children}</span>}
    </label>
  );
};
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(InternalCheckbox);
Checkbox.displayName = 'CheckBox';
export default Checkbox;
