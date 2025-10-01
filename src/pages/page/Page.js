import React, {useState, useRef} from "react";
import Landing from "../landing/Landing";
import About from "../about/About";
import Projects from "../projects/Projects";
import Resume from "../resume/Resume";
import Contact from "../contact/Contact";
import Navigation from "../../components/navigation/Navigation";
import "./Page.scss";
import ComingSoon from "../comingsoon/ComingSoon";
import Games from "../games/Games";

export const pages = [
    // {
    //     name: "Coming Soon",
    //     component: <ComingSoon/>,
    // },
    {
        name: "Landing",
        component: <Landing/>,
    },
    // {
    //     name: "Games",
    //     component: <Games />
    // },
    // {
    //     name: "Projects",
    //     component: <Projects/>,
    // },
    // {
    //     name: "Resume",
    //     component: <Resume/>,
    // },
    // {
    //     name: "Contact",
    //     component: <Contact/>,
    // },
];

const fadeIn = (seconds) => `animation: fadeIn ${seconds}s ease-in forwards;`;
const fadeOut = (seconds) => `animation: fadeOut ${seconds}s ease-in forwards;`;

const Page = () => {
    const [activePage, setActivePage] = useState(0);
    const pageRef = useRef(null);

    const handlePageChange = (pageName) => {
        const pageIndex = pages.findIndex((page) => page.name === pageName);
        if (pageIndex !== -1) {
            if (pageRef.current) {
                pageRef.current.style = fadeOut(1);
                setTimeout(() => {
                    setActivePage(pageIndex);
                    pageRef.current.style = fadeIn(1);
                }, 1000);
            }
        }
    };

    return (
        <div ref={pageRef} className="page">
            {pages[activePage].name !== "Landing" && (
                <Navigation
                    handlePageChange={handlePageChange}
                    landing={false}
                    currentPage={pages[activePage].name}
                />
            )}
            {React.cloneElement(pages[activePage].component, {handlePageChange})}
        </div>
    );
};

export default Page;
