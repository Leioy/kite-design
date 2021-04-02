import React, { ButtonHTMLAttributes, FC, useEffect, useRef, useState } from 'react';
import { tuple } from '@/utils/type';
import { getPrefixClass } from '@/utils/getPrefixClass';
import clsx from 'clsx';
import './style/index.less';
import Ripple from '@/utils/Ripple';
import LoadingIcon from '@/Button/LoadingIcon';

const ButtonTypes = tuple('default', 'primary', 'dashed', 'text');
export type ButtonType = typeof ButtonTypes[number]
const ButtonShapes = tuple('circle', 'round');
export type ButtonShape = typeof ButtonShapes[number]
const ButtonHtmlTypes = tuple('submit', 'button', 'reset');
export type ButtonHtmlType = typeof ButtonHtmlTypes[number]

export type ButtonSize = 'small' | 'middle' | 'large'

export interface BaseButtonProps {
  type?: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  icon?: React.ReactNode
  loading?: boolean | { delay: number }
  className?: string
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type NativeButtonProps = {
  htmlType?: ButtonHtmlType
} & BaseButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>

type Loading = boolean | number
const Button: FC<NativeButtonProps> = (props) => {
  const {
    type,
    shape,
    icon,
    loading = false,
    className,
    children,
    htmlType = 'button',
    size,
    onClick,
    ...rest
  } = props;
  const [ innerLoading, setLoading ] = useState<Loading>(!!loading);
  const delayRef = useRef<number>(null);
  const prefixClass = getPrefixClass('btn');
  let sizeClass = '';
  switch (size) {
    case 'large':
      sizeClass = 'lg';
      break;
    case 'small':
      sizeClass = 'sm';
      break;
    default:
      break;
  }
  const classes = clsx(
    prefixClass,
    {
      [`${prefixClass}-${type}`]: type,
      [`${prefixClass}-${sizeClass}`]: sizeClass,
      [`${prefixClass}-${shape}`]: shape,
    },
  );
  let loadingOrDelay: Loading;
  if (typeof loading === 'object' && loading.delay) {
    loadingOrDelay = loading.delay || true;
  } else {
    loadingOrDelay = loading as boolean;
  }
  useEffect(() => {
    if (delayRef.current) {
      window.clearTimeout(delayRef.current!);
    }
    if (typeof loadingOrDelay === 'number') {
      window.setTimeout(() => {
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
  }, [ loadingOrDelay ]);

  const iconNode = icon && !innerLoading ? icon : <LoadingIcon loading={!!innerLoading} />;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (innerLoading) return;
    onClick?.(e);
  };
  return (
    <button
      type={htmlType}
      className={classes}
      onClick={handleClick}
      {...rest}
    >
      {iconNode}
      {children}
      <Ripple />
    </button>
  );
};
export default Button;
