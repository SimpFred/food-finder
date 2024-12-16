"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./index.module.css";
import { JSX } from "react";
import Button from "../../button";
import Loading from "../../loading";

const AuthElement = (): JSX.Element => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <>
      {status === "authenticated" && (
        <span className={styles.name}>
          Hi <b>{session?.user?.name}</b>
        </span>
      )}

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
        {status == "unauthenticated" && (
          <>
            <Button variant="green" clickHandler={() => signIn()}>
              Sign in
            </Button>
          </>
        )}
      </nav>
    </>
  );
};
export default AuthElement;
