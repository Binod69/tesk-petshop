import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import Header from './components/Header/Header';

const nunitosans = Nunito_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Pet Shop',
  description: 'Nepal best online pet shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitosans.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
