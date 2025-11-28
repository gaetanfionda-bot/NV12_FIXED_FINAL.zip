export default function Header() {
  return (
    <header
      style={{
        background: "#111",
        padding: "20px 40px",
        borderBottom: "1px solid #222",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <a href="/" style={{ fontSize: "1.5rem", fontWeight: "700" }}>
        NIGHT VISION
      </a>

      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="/shop">Shop</a>
        <a href="/cart">Panier</a>
        <a href="/admin">Admin</a>
      </nav>
    </header>
  );
}
