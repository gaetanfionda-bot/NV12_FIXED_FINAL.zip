import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "NIGHT VISION",
  description: "NV12 e-commerce"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <div style={{ padding: "40px" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
