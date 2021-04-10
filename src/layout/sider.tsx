import React, { HTMLAttributes, useContext, useEffect, useRef } from 'react';
import { tuple } from '@/utils/type';
import clsx from 'clsx';
import { getPrefixClass } from '@/utils/getPrefixClass';
import { LayoutContext } from '@/layout/layout';

if (typeof window !== undefined) {
  const matchMediaPolyfill = (mediaQuery: string) => {
    return {
      media: mediaQuery,
      matches: false,
      addListener () {},
      removeListener () {},
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

const generateId = (() => {
  let id = 0;
  return (prefix: string) => {
    id += 1;
    return `${prefix}${id}`;
  };
})();

enum Breakpoint {
  xs = '480px',
  sm = '576px',
  md = '768px',
  lg = '992px',
  xl = '1200px',
  xxl = '1600px',
}


const breakpoints = tuple('xs', 'sm', 'md', 'lg', 'xl', 'xxl');
export type TBreakpoint = typeof breakpoints[number]

export interface ISiderProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number
  breakpoint?: TBreakpoint
  onBreakpoint?: (broken: boolean) => void
}

const Sider = React.forwardRef<HTMLDivElement, ISiderProps>((props, ref) => {
  const { children, breakpoint, onBreakpoint, style = {}, className, width, ...rest } = props;
  const { siderHook } = useContext(LayoutContext);
  const responsiveHandlerRef = useRef<(mql: MediaQueryList | MediaQueryListEvent) => void>();
  responsiveHandlerRef.current = (mql) => {
    onBreakpoint?.(mql.matches);
  };
  const prefixClass = getPrefixClass('layout');
  const classes = clsx(`${prefixClass}-sider`, className);
  const siderStyle = { width, ...style };
  useEffect(() => {
    const uniqueId = generateId(`${prefixClass}-sider`);
    siderHook.addSider(uniqueId);
    return () => siderHook.removeSider(uniqueId);
  }, []);
  useEffect(() => {
    function responsiveHandler (mql: MediaQueryListEvent | MediaQueryList) {
      return responsiveHandlerRef.current!(mql);
    }

    let mql: MediaQueryList;
    if (typeof window !== 'undefined') {
      const { matchMedia } = window;
      if (breakpoint && breakpoint in Breakpoint) {
        mql = matchMedia(`(max-width: ${Breakpoint[breakpoint]})`);
        try {
          mql.addEventListener('change', responsiveHandler);
        } catch (e) {
          mql.addListener(responsiveHandler);
        }
      }
    }
    return () => {
      try {
        mql?.removeEventListener('change', responsiveHandler);
      } catch (e) {
        mql?.removeListener(responsiveHandler);
      }
    };
  }, []);
  return (
    <aside style={siderStyle} className={classes} ref={ref} {...rest}>
      {children}
    </aside>
  );
});
Sider.displayName = 'Sider';
export default Sider;
