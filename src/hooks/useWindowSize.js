import { useState, useEffect } from "react"

export default function useWindowSize() {
  const isClient = typeof window === "object"
  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }
    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}

// import { useState, useEffect } from "react";

// export default function useWindowSize() {
//   function getSize() {
//     return {
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }

//   const [windowSize, setWindowSize] = useState(getSize);

//   useEffect(() => {
//     function handleResize() {
//       setWindowSize(getSize());
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowSize;
// }