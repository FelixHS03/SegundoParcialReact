import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <main className="container page-content">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
