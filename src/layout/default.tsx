const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">{children}</div>
    </>
  );
};

export default DefaultLayout;
