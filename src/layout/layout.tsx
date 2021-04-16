import React, { createContext, HTMLAttributes, useState } from 'react';
import { tuple } from '../utils/type';
import { getPrefixClass } from '../utils/getPrefixClass';
import clsx from 'clsx';

export interface ILayoutContextProps {
  siderHook: {
    addSider: (id: string) => void
    removeSider: (id: string) => void
  }
}

const TagNames = tuple('header', 'footer', 'main', 'section');
export type TTagName = typeof TagNames[number]

export interface IGeneratorProps {
  suffix?: string
  tagName: TTagName
  displayName: string
}

export interface IBasicProps extends HTMLAttributes<HTMLDivElement> {
  prefixClass?: string
}


export interface IBasicPropsWithTagName extends IBasicProps {
  tagName: TTagName
  ref: React.Ref<HTMLDivElement>
}

export const LayoutContext = createContext<ILayoutContextProps>({
  siderHook: {
    addSider: () => null,
    removeSider: () => null,
  },
});
const generator = ({ suffix, tagName, displayName }: IGeneratorProps) =>
  (BasicComponent: React.FC<IBasicPropsWithTagName>) => {
    const Adapter = React.forwardRef<HTMLDivElement, IBasicProps>((props, ref) => {
      const prefixClass = suffix ? `${getPrefixClass('layout')}-${suffix}` : getPrefixClass('layout');
      return <BasicComponent ref={ref} prefixClass={prefixClass} tagName={tagName} {...props} />;
    });
    Adapter.displayName = displayName;
    return Adapter;
  };

const Basic: React.FC<IBasicPropsWithTagName> = props => {
  const { tagName, className, prefixClass, children, ...rest } = props;
  const classes = clsx(prefixClass, className);
  return React.createElement(tagName, { className: classes, ...rest }, children);
};
const BasicLayout: React.FC<IBasicPropsWithTagName> = props => {
  const [ siders, setSiders ] = useState<string[]>([]);
  const { tagName: Tag, className, prefixClass, children, ...rest } = props;
  const classes = clsx(prefixClass, { [`${prefixClass}-hasSider`]: siders.length > 0 }, className);
  return <LayoutContext.Provider value={{
    siderHook: {
      addSider: (id: string) => setSiders(prev => [ ...prev, id ]),
      removeSider: (id: string) => setSiders(prev => prev.filter(currentId => currentId !== id)),
    },
  }}>
    <Tag className={classes} {...rest} >{children}</Tag>
  </LayoutContext.Provider>;
};

const Layout = generator({
  tagName: 'section',
  displayName: 'Layout',
})(BasicLayout);
const Header = generator({
  suffix: 'header',
  tagName: 'header',
  displayName: 'Header',
})(Basic);
const Content = generator({
  suffix: 'content',
  tagName: 'main',
  displayName: 'Content',
})(Basic);
const Footer = generator({
  suffix: 'footer',
  tagName: 'footer',
  displayName: 'Footer',
})(Basic);
export { Header, Content, Footer };
export default Layout;
