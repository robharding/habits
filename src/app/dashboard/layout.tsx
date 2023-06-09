import Nav from "@/components/Nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-2">
      <Nav />
      {children}
    </main>
  );
}
