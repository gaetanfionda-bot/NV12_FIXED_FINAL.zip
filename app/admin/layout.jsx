// app/admin/layout.jsx
export default function AdminLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: "#000" }}>
      {children}
    </div>
  );
}
