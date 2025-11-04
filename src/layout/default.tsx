import Header from '@/components/Common/Header';
const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="mx-16 min-h-screen  p-4">{children}</div>
    </>
  );
};

export default DefaultLayout;
