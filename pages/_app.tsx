import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { githubAppoloProvider } from "../graphql/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <githubAppoloProvider>
      <Component {...pageProps} />
    </githubAppoloProvider>
  );
}
