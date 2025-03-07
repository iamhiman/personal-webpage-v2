import { Navbar } from "@/components";
import client, { QUERY } from "@/utils/lib/apolloClient";
import React from "react";

const HomePageLayout = async () => {
  const { data, error, loading } = await client.query({
    query: QUERY,
    context: { fetchOptions: { next: { revalidate: 30 } } }, // ISR: Revalidate every 30s
  });

  const { skills, jobs, projects } = data;
  return (
    <>
      <Navbar />
    </>
  );
};

export default HomePageLayout;
