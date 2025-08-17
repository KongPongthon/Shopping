import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <body className={`antialiased`}>{children}</body> */}
      <div className='relative flex flex-col gap-8 mx-auto p-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl overflow-hidden'>
        <Navbar />
        <div className='flex-1'>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
