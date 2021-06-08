import React from "react"

// Scroll Animations
// import { useInView } from "react-intersection-observer"
// import { useAnimation, motion } from "framer-motion"


const Footer = () => {
    // const animation = useAnimation()
    // const [footerRef, inView] = useInView({
    //   triggerOnce: true,
    //   rootMargin: "-500px",
    // })
    // useEffect(() => {
    //   if (inView) {
    //     animation.start("visible")
    //   }
    // }, [animation, inView])
    return (
        <footer className="footer">
                <div className="content container">
                    <p className="col-1">604-369-6472</p>
                    <p className="col-2">tom@obeliskstudios.ca</p>
                    <p className="col-3">955 E. Hastings Street</p>
                    <p className="col-4">Vancouver, BC</p>
                    <div className="footer__links">

                    </div>
                </div>
        </footer>
    )
}
export default Footer