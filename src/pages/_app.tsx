import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { createEditorContext } from "../hooks/EditorRefContext";
import { Languages } from "~/utils/StarterCode";

export const { EditorStoreContextProvider, useEditorStore } =
  createEditorContext({
    langCode: Languages[0]!.languageCode,
    code: Languages[0]!.starterCode,
    lang: Languages[0]!.languageName,
    extension: Languages[0]!.extension,
  });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <EditorStoreContextProvider>
        <Component {...pageProps} />
      </EditorStoreContextProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
