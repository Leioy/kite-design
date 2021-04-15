import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';

export interface RadioChangeEvent {
  target: RadioChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: Event;
}

export interface RadioChangeEventTarget extends RadioProps {
  checked: boolean;
}

export interface RadioProps {
  color?: string
  className?: string
  style?: CSSProperties
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  onChange?: (e: RadioChangeEvent) => void
  onClick?: MouseEventHandler<HTMLElement>
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  value?: any
  tabIndex?: number
  name?: string
  children?: ReactNode
  id?: string
  autoFocus?: boolean;
  type?: string;
}

export interface RadioContextProps {
  onChange: (e: RadioChangeEvent) => void
  value?: any
  disabled?: boolean
  name?: string
  color?: string
}

export interface RadioGroupProps {
  color?: string
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  defaultValue?: any;
  value?: any;
  onChange?: (e: RadioChangeEvent) => void;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  name?: string;
  children?: React.ReactNode;
  id?: string;
}
