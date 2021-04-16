import React, { CSSProperties, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { tuple } from '../utils/type';
import { getPrefixClass } from '../utils/getPrefixClass';
import clsx from 'clsx';
import RowContext from './RowContext';
import ResponsiveObserve, { Breakpoint, ScreenMap, responsiveArray } from '../utils/responsiveObserve';

const RowAligns = tuple('top', 'middle', 'bottom');
const RowJustify = tuple('start', 'end', 'center', 'space-around', 'space-between');

export type Gutter = number | Partial<Record<Breakpoint, number>>

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  gutter?: Gutter
  align?: typeof RowAligns[number]
  justify?: typeof RowJustify[number]
}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { gutter = 0, align, justify, className, children, style, ...rest } = props;
  const [ screens, setScreens ] = useState<ScreenMap>({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
  });
  const gutterRef = useRef<Gutter | undefined>(gutter);
  useEffect(() => {
    const token = ResponsiveObserve.subscribe(screen => {
      const currentGutter = gutterRef.current || 0;
      if (typeof currentGutter === 'object') {
        setScreens(screen);
      }
    });
    return () => ResponsiveObserve.unsubscribe(token);
  }, []);
  const getGutter = () => {
    if (typeof gutter === 'object') {
      for (const breakPoint of responsiveArray) {
        if (screens[breakPoint] && gutter[breakPoint] !== undefined) {
          return gutter[breakPoint];
        }
      }
    } else {
      return gutter || 0;
    }
  };
  const currentGutter = getGutter();
  let mergedStyle: CSSProperties = {};
  if (currentGutter) {
    mergedStyle.marginLeft = -currentGutter / 2;
    mergedStyle.marginRight = -currentGutter / 2;
  }
  const prefixClass = getPrefixClass('row');
  const classes = clsx(
    prefixClass,
    {
      [`${prefixClass}-${justify}`]: justify,
      [`${prefixClass}-${align}`]: align,
    },
    className,
  );
  return (
    <RowContext.Provider value={{ gutter: currentGutter }}>
      <div className={classes} style={{ ...mergedStyle, ...style }} ref={ref} {...rest}>{children}</div>
    </RowContext.Provider>
  );
});

Row.displayName = 'Rol';
export default Row;
