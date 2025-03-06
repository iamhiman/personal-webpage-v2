import type { NextPage, GetStaticProps } from "next";
import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import { api, QUERY } from "../services";
import { ISkills, IJobs, IProjects, Theme, THEME, SECTION } from "../typings";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Jobs } from "../components/Jobs";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import ScrollUp from "../assets/scrollup.webp";

interface IHomeProps {
  jobs: IJobs[];
  projects: IProjects[];
  skills: ISkills[];
}

const Home: NextPage<IHomeProps> = ({ jobs, projects, skills }) => {
  const jobsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<string>(THEME.LIGHT);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("themeValue");
    setTheme(theme === THEME.LIGHT || !theme ? THEME.LIGHT : THEME.DARK);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    localStorage.setItem("themeValue", newTheme);
    setTheme(newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavItemClick = (item: string) => {
    let scrollObject = {};
    switch (item) {
      case SECTION.ABOUT:
        scrollObject = { top: 0, behavior: "smooth" };
        break;

      case SECTION.JOBS:
        scrollObject = { top: jobsRef.current?.offsetTop! - 70, behavior: "smooth" };
        break;

      case SECTION.PROJECTS:
        scrollObject = { top: projectsRef.current?.offsetTop! - 70, behavior: "smooth" };
        break;

      case SECTION.SKILLS:
        scrollObject = { top: skillsRef.current?.offsetTop! - 70, behavior: "smooth" };
        break;

      case SECTION.CONTACT:
        scrollObject = { top: contactRef.current?.offsetTop! - 70, behavior: "smooth" };
        break;

      default:
        break;
    }

    window.scrollTo(scrollObject);
  };

  return (
    <div>
      <main data-theme={theme}>
        <Navbar onNavItemClick={handleNavItemClick} switchTheme={switchTheme} theme={theme} />

        <section className={SECTION.ABOUT}>
          <About />
        </section>

        <section className={SECTION.JOBS} ref={jobsRef}>
          <Jobs jobs={jobs} />
        </section>

        <section className={SECTION.PROJECTS} ref={projectsRef}>
          <Projects projects={projects} />
        </section>

        <section className={SECTION.SKILLS} ref={skillsRef}>
          <Skills skills={skills} />
        </section>

        <section className="contact" ref={contactRef}>
          <Contact theme={theme as Theme} />
        </section>

        <Footer />

        {isVisible && <img src={ScrollUp.src} alt="" className="scroll-up" onClick={scrollToTop} />}

        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
        />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { error, loading, data } = await api.query({ query: QUERY });
  const { skills, jobs, projects } = data;

  return { props: { skills, jobs, projects }, revalidate: 10 };
};
