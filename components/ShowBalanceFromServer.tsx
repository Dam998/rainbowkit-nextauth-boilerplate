"use client";

import { useChainId } from "wagmi";
import { useSession } from "next-auth/react";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  getBalance: (address: string | number) => Promise<string>;
}

const ShowBalanceFromServer: React.FC<ButtonProps> = ({ getBalance }) => {
  const [balance, setBalance] = React.useState<string>("");
  const { status } = useSession();
  const chainId = useChainId();

  if (status !== "authenticated") return null;

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => getBalance(chainId).then(setBalance)}
        className="px-4 py-1 border rounded-lg"
      >
        Get {chainId} Balance from server
      </button>
      {balance && <h3>Balance: {balance}</h3>}
    </div>
  );
};

export default ShowBalanceFromServer;
