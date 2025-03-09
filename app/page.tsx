import type { NextPage } from "next";
// import { ToastContainer } from "react-toastify";
import { HomePageLayout } from "@/layouts";
import { apolloClient, GraphqlQuery } from "@/utils/lib/apolloClient";

// Next.js will invalidate the cache when a
// request comes in, at most once every 10 seconds.
export const revalidate = 10;

const Home: NextPage = async () => {
  const { data, error, loading } = await apolloClient.query({
    query: GraphqlQuery,
    fetchPolicy: "network-only", // Ensure fresh data for ISR
  });

  return <HomePageLayout cmsApiResponse={data} error={error} loading={loading} />;
};

export default Home;
