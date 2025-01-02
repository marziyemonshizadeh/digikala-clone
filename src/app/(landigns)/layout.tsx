function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-500">
      Layout
      {children}
    </div>
  );
}

export default Layout;
