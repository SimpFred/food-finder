"use client";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Button from "../button";
import styles from "./index.module.css";

interface AuthNavProps {
  session: Session | null;
  status: "authenticated" | "unauthenticated";
}

const Nav = ({ session, status }: AuthNavProps) => {
  return (
    <nav className={styles.root}>
      {status === "authenticated" && (
        <>
          <Button variant="outline">
            <Link href={`/list/${session?.user.fdlst_private_userId}`}>
              Your wish list
            </Link>
          </Button>

          <Button variant="green" clickHandler={() => signOut()}>
            Sign out
          </Button>
        </>
      )}
      {status === "unauthenticated" && (
        <Button variant="green" clickHandler={() => signIn()}>
          Sign in
        </Button>
      )}
    </nav>
  );
};

export default Nav;
