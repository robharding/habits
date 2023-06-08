export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <h1>Dashboard Layout</h1>
      {children}
    </main>
  );
}
