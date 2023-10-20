import { useState, useEffect } from "react";
import { BsArrowUpSquareFill } from 'react-icons/bs'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-5 right-5 h-14 w-14 z-10 mb-10 bg-blue-500 rounded-full hover:bg-blue-700 transition-opacity ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            onClick={scrollToTop}
        >
            <BsArrowUpSquareFill className="w-full h-full rounded-full text-blue-600 bg-white" />
        </button>
    );
};

export default ScrollToTop;
