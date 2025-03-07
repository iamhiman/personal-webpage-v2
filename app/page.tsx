import type { NextPage } from "next";
// import { ToastContainer } from "react-toastify";
import { HomePageLayout } from "@/layouts";
import client, { QUERY } from "@/utils/lib/apolloClient";

// interface IHomeProps {
//   jobs: IJobs[];
//   projects: IProjects[];
//   skills: ISkills[];
// }

const Home: NextPage = async () => {
  const { data, error, loading } = await client.query({
    query: QUERY,
    context: { fetchOptions: { next: { revalidate: 30 } } }, // ISR: Revalidate every 30s
  });

  console.log(data)

  //const { skills, jobs, projects } = data;

  // console.log(skills, jobs, projects);

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

  return <HomePageLayout apiResponse={data} error={error} loading={loading} />;
};

export default Home;

//         <Footer />

//         {isVisible && <img src={ScrollUp.src} alt="" className="scroll-up" onClick={scrollToTop} />}

//         <ToastContainer
//           position="top-right"
//           autoClose={3500}
//           hideProgressBar={false}
//           closeOnClick={true}
//           pauseOnFocusLoss={false}
//           pauseOnHover={false}
//         />
