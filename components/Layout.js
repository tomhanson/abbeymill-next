import Header from './Header/Header';

type Props = {
  children: string,
};

const Layout = ({ children }: Props) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
