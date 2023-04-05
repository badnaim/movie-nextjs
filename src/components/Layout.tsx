import Head from "next/head";
import React, { ReactNode } from "react";

type PropType = {
  children: ReactNode;
};

export default function Layout({ children }: PropType) {
  return (
    <div>
      <Head>
        <title>Create next app</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}
