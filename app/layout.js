import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import Header from './components/Header/Header';
import TopInfo from './components/TopInfo/TopInfo';
import Footer from './components/Footer/Footer';
export const nunitosans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'Pet Shop',
  description: 'Nepal best online pet shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitosans.className}>
        <TopInfo />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
