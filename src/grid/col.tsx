import React, { CSSProperties, useContext } from 'react';
import RowContext from '@/grid/RowContext';
import { getPrefixClass } from '@/utils/getPrefixClass';
import clsx from 'clsx';

type ColSpanType = number | string
type FlexType = number | 'none' | 'auto' | string

export interface ColSize {
  flex?: FlexType
  span?: ColSpanType
  order?: ColSpanType
  offset?: ColSpanType
  push?: ColSpanType
  pull?: ColSpanType
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  flex?: FlexType
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
  xs?: ColSpanType | ColSize;
  sm?: ColSpanType | ColSize;
  md?: ColSpanType | ColSize;
  lg?: ColSpanType | ColSize;
  xl?: ColSpanType | ColSize;
  xxl?: ColSpanType | ColSize;
}

const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const { flex, span, order, offset, push, pull, className, style, children, ...rest } = props;
  const { gutter } = useContext(RowContext);
  const prefixClass = getPrefixClass('col');
  const sizes = [ 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' ] as const;
  let sizeClasses = {};
  sizes.forEach(size => {
    let sizeProps: ColSize = {};
    const propsSize = props[size];
    if (typeof propsSize === 'number') {
      sizeProps.span = propsSize;
    } else if (typeof propsSize === 'object') {
      sizeProps = propsSize;
    }
    delete rest[size];
    sizeClasses = {
      ...sizeClasses,
      [`${prefixClass}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixClass}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefixClass}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
      [`${prefixClass}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefixClass}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
    };
  });
  const classes = clsx(
    prefixClass,
    {
      [`${prefixClass}-${span}`]: span !== undefined,
      [`${prefixClass}-order-${order}`]: order,
      [`${prefixClass}-offset-${offset}`]: offset,
      [`${prefixClass}-push-${push}`]: push,
      [`${prefixClass}-pull-${pull}`]: pull,
    },
    sizeClasses,
    className,
  );
  let mergedStyle: CSSProperties = {};
  if (gutter && gutter > 0) {
    mergedStyle.paddingLeft = gutter / 2;
    mergedStyle.paddingRight = gutter / 2;
  }
  const parseFlex = (flex: FlexType) => {
    if (typeof flex === 'number') {
      return `${flex} ${flex} auto`;
    }
    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
      return `0 0 ${flex}`;
    }
    return flex;
  };
  if (flex) {
    mergedStyle.flex = parseFlex(flex);
  }
  return <div className={classes} style={{ ...mergedStyle, ...style }} ref={ref}>{children}</div>;
});
Col.displayName = 'Col';
export default Col;
