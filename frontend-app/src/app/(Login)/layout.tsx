import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme='cupcake'>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
