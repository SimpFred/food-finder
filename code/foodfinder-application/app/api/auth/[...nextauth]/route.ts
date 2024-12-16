import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { createHash } from "crypto";

const createUserId = (base: string): string => {
  return createHash("sha256").update(base).digest("hex");
};

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      try {
        if (token?.email && !token.fdlst_private_userId) {
          token.fdlst_private_userId = createUserId(token.email);
        }
        return token;
      } catch (error) {
        console.error("JWT callback error:", error);
        return token;
      }
    },
    async session({ session, token }) {
      try {
        if (session?.user?.email && token?.fdlst_private_userId) {
          session.user.fdlst_private_userId = createUserId(
            session?.user?.email
          );
        }
        return session;
      } catch (error) {
        console.error("Session callback error:", error);
        return session;
      }
    },
  },
});

export { handler as GET, handler as POST };
