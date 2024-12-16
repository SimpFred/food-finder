import "./styles/globals.css";
import "./styles/layout.css";
import Layout from "./components/layout";
import { Session } from "next-auth";
import SessionProviderWrapper from "./providers/sessionProviderWrapper";

export default function RootLayout({
  session,
  children,
}: Readonly<{
  session: Session | null;
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <SessionProviderWrapper session={session}>
          <Layout>{children}</Layout>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
