import React, { forwardRef, useContext } from 'react';
import { RadioChangeEvent, RadioProps } from '@/radio/interface';
import { getPrefixClass } from '@/utils/getPrefixClass';
import RadioGroupContext from '@/radio/RadioGroupContext';
import RadioBase from '@/radio/RadioBase';

const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { className, children, style, ...rest } = props;
  const context = useContext(RadioGroupContext);
  const prefixClass = getPrefixClass('radio');
  const onChange = (e: RadioChangeEvent) => {
    props.onChange?.(e);
    context?.onChange?.(e);
  };
  const radioProps: RadioProps = { ...rest };
  if (context) {
    radioProps.name = context.name;
    radioProps.onChange = onChange
    radioProps.checked = props.value === context.value;
    radioProps.disabled = props.disabled || context.disabled;
    radioProps.color = props.color || context.color
  }
  return (
    <label className={`${prefixClass}-wrapper`}>
      <RadioBase {...radioProps} prefixCls={prefixClass} ref={ref} />
      <span>{children}</span>
    </label>
  );
});
Radio.displayName = 'Radio';
export default Radio;
