export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 60,
        padding: 20,
        textAlign: "center",
        borderTop: "1px solid #222",
        color: "#888",
      }}
    >
      © {new Date().getFullYear()} NIGHT VISION — Tous droits réservés.
    </footer>
  );
}
