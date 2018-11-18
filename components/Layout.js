import { Header, Footer } from './';
import './css/base.scss';

type Props = {
  children: string,
  primary: boolean,
};

const Layout = ({ children, primary }: Props) => (
  <div>
    <Header primary={primary} />
    {children}
    <Footer />
  </div>
);

export default Layout;
