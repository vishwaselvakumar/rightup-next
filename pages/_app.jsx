import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const excludedPages = ["/rr", "/another-page"]; // Add other pages that should NOT have Header & Footer

  const shouldShowHeaderFooter = !excludedPages.includes(router.pathname);

  return (
    <ThemeProvider enableSystem={false} defaultTheme="light" attribute="class">
  <main className="land relative z-10">
    {shouldShowHeaderFooter && <Header />}
    <Component {...pageProps} />
    {shouldShowHeaderFooter && <Footer />}
  </main>
</ThemeProvider>

  );
}
