import type { NextPage } from "next";
// import { ToastContainer } from "react-toastify";
import { HomePageLayout } from "@/layouts";
import { apolloClient, GraphqlQuery } from "@/utils/lib/apolloClient";

const Home: NextPage = async () => {
  const { data, error, loading } = await apolloClient.query({
    query: GraphqlQuery,
    fetchPolicy: "network-only", // Ensure fresh data for ISR
    
    // context: { fetchOptions: { next: { revalidate: 30 } } }, // ISR: Revalidate every 30s
  });

  // useEffect(() => {
  //   const toggleVisibility = () => {
  //     if (window.pageYOffset > 500) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener("scroll", toggleVisibility);

  //   return () => window.removeEventListener("scroll", toggleVisibility);
  // }, []);

  return <HomePageLayout cmsApiResponse={data} error={error} loading={loading} />;
};

export default Home;

// ✅ ISR: Regenerate this page every 30 seconds
export const revalidate = 5;

//         <Footer />

//         {isVisible && <img src={ScrollUp.src} alt="" className="scroll-up" onClick={scrollToTop} />}
