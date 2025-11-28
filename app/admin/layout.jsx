export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-10 text-red-600">Admin</h1>
      <div className="max-w-4xl">{children}</div>
    </div>
  );
}
