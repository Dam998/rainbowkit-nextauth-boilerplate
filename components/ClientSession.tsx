"use client";

import { useSession } from "next-auth/react";

const ClientSession = () => {
  const { data, status } = useSession();

  if (status === "loading") return <h3>Loading...</h3>;

  if (status === "unauthenticated") return <h3>Not logged</h3>;

  return (
    <h3>
      Logged in as {data?.user?.name} <br />
    </h3>
  );
};

export default ClientSession;
