import mongoose from "mongoose";
import { DefaultSession } from "next-auth";

declare global {
  // eslint-disable-next-line no-var
  var mongoose: mongoose;
}

declare module "next-auth" {
  interface Session {
    user: {
      fdlst_private_userId: string;
      userId: string;
    } & DefaultSession["user"];
  }
}
