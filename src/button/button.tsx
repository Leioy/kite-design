import React, {
  ButtonHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import { tuple } from '@/utils/type';
import { getPrefixClass } from '@/utils/getPrefixClass';
import clsx from 'clsx';
import Ripple from '@/utils/Ripple';
import LoadingIcon from '@/button/LoadingIcon';

const ButtonColors = tuple(
  'default',
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
);

const rippleColor = {
  contained: {
    default: '#525050',
    primary: '#fff',
    secondary: '#fff',
    success: '#fff',
    warning: '#fff',
    danger: '#fff',
  },
  outlined: {
    default: '#525050',
    primary: '#1976d2',
    secondary: '#dc004e',
    success: '#18821c',
    warning: '#d27e15',
    danger: '#cc2b2b',
  },
  text: {
    default: '#525050',
    primary: '#1976d2',
    secondary: '#dc004e',
    success: '#18821c',
    warning: '#d27e15',
    danger: '#cc2b2b',
  },
};

export type ButtonColor = typeof ButtonColors[number];
const ButtonVariants = tuple('text', 'outlined', 'contained');
export type ButtonVariant = typeof ButtonVariants[number];
const ButtonShapes = tuple('circle', 'round');
export type ButtonShape = typeof ButtonShapes[number];
const ButtonHtmlTypes = tuple('submit', 'button', 'reset');
export type ButtonHtmlType = typeof ButtonHtmlTypes[number];

const ButtonSizes = tuple('small', 'middle', 'large');
export type ButtonSize = typeof ButtonSizes[number];

export interface BaseButtonProps {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  icon?: React.ReactNode;
  loading?: boolean | { delay: number };
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type NativeButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

type Loading = boolean | number;
const Button = React.forwardRef<HTMLButtonElement, NativeButtonProps>(
  (props, ref) => {
    const {
      color = 'default',
      variant = 'contained',
      shape,
      icon,
      loading = false,
      className,
      children,
      type = 'button',
      size,
      onClick,
      ...rest
    } = props;
    const [ innerLoading, setLoading ] = useState<Loading>(Boolean(loading));
    const delayRef = useRef<number>();
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
        [`${prefixClass}-${color}`]: color,
        [`${prefixClass}-${variant}`]: variant,
        [`${prefixClass}-${sizeClass}`]: sizeClass,
        [`${prefixClass}-${shape}`]: shape,
        [`${prefixClass}-loading`]: innerLoading,
      },
      className,
    );
    let loadingOrDelay: Loading;
    if (typeof loading === 'object' && loading.delay) {
      loadingOrDelay = loading.delay || true;
    } else {
      loadingOrDelay = loading as boolean;
    }
    useEffect(() => {
      if (delayRef.current) {
        window.clearTimeout(delayRef.current);
      }
      if (typeof loadingOrDelay === 'number') {
        delayRef.current = window.setTimeout(() => {
          setLoading(loadingOrDelay);
        }, loadingOrDelay);
      } else {
        setLoading(loadingOrDelay);
      }
    }, [ loadingOrDelay ]);

    const iconNode =
      icon && !innerLoading ? (
        icon
      ) : (
        <LoadingIcon loading={!!innerLoading} prefix={prefixClass} />
      );
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (innerLoading) return;
      onClick?.(e);
    };
    return (
      <button
        type={type}
        className={classes}
        onClick={handleClick}
        ref={ref}
        {...rest}
      >
        {iconNode}
        {children && <span>{children}</span>}
        {!props.disabled && <Ripple color={rippleColor[variant][color]} />}
      </button>
    );
  },
);
Button.displayName = 'Button';
export default Button;
