"use server";

import ClientSession from "@/components/ClientSession";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <ClientSession />
      <ConnectButton />
    </main>
  );
}
