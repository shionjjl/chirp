import { type AppType } from "next/app";
import { Geist } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={geist.className}>
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
      {/*
       * If you want to use Clerk without SSR, you can remove the <ClerkProvider> above
       * and uncomment the <Component> below.
       */}
      {/*
      <Component {...pageProps} />
      */}
    </div>
  );
};

export default api.withTRPC(MyApp);
