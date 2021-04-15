import { CSSProperties, KeyboardEventHandler, MouseEventHandler, ReactNode } from 'react';

export interface AbstractCheckboxProps<T> {
  prefixCls?: string
  className?: string
  defaultChecked?: boolean;
  checked?: boolean;
  style?: CSSProperties;
  disabled?: boolean;
  onChange?: (e: T) => void;
  onClick?: MouseEventHandler<HTMLElement>;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
  onKeyPress?: KeyboardEventHandler<HTMLElement>;
  onKeyDown?: KeyboardEventHandler<HTMLElement>;
  value?: any;
  tabIndex?: number;
  name?: string;
  children?: ReactNode;
  id?: string;
  autoFocus?: boolean;
  type?: string;
  skipGroup?: boolean;
}

export interface CheckboxProps extends AbstractCheckboxProps<CheckboxChangeEvent> {
  indeterminate?: boolean
  color?: string
}

export interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: Event;
}

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: ReactNode;
  value: CheckboxValueType;
  style?: CSSProperties;
  disabled?: boolean;
  color?: string
  onChange?: (e: CheckboxChangeEvent) => void;
}

export interface CheckboxGroupContext {
  name?: string
  toggleOption?: (option: CheckboxOptionType) => void;
  value?: any;
  disabled?: boolean;
  color?: string
  registerValue: (val: string) => void;
  cancelValue: (val: string) => void;
}

export interface AbstractCheckboxGroupProps {
  prefixCls?: string;
  className?: string;
  options?: Array<CheckboxOptionType | string>;
  disabled?: boolean;
  style?: CSSProperties;
}

export interface CheckboxGroupProps extends AbstractCheckboxGroupProps {
  name?: string;
  defaultValue?: Array<CheckboxValueType>;
  value?: Array<CheckboxValueType>;
  onChange?: (checkedValue: Array<CheckboxValueType>) => void;
  children?: ReactNode;
  color?: string
}
