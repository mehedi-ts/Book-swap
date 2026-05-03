import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://book-swap-gilt-tau.vercel.app/",
});
export const { signIn, signUp, useSession } = createAuthClient();
