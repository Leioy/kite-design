import InternalLayout, { IBasicProps, Header, Content, Footer } from './layout';
import Sider from './sider';

export type { ISiderProps } from './sider';
export type { IBasicProps as LayoutProps } from './layout';

interface ILayoutType extends React.ForwardRefExoticComponent<IBasicProps> {
  Header: typeof Header
  Content: typeof Content
  Footer: typeof Footer
  Sider: typeof Sider
}

const Layout = InternalLayout as ILayoutType;

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;
export default Layout
