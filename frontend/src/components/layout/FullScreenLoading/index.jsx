import { useEffect, useRef, useState } from "react";

const FullScreenLoading = () => {
    const [height, setHeight] = useState(0);
    const ref = useRef(null);
    useEffect(()=> {
        setHeight(ref.current.clientHeight * 0.8);
    }, [ref.current.clientHeight])
  return (
    <div className="text-6xl md:text-9xl h-screen w-full flex items-center justify-center z-50 fixed top-0 left-0">
      <div  className="h-fit flex items-center justify-center gap-2 md:gap-5">
        <p ref={ref}>L</p>
        <div className="aspect-square border-8 border-dotted border-green-500 rounded-full animate-spin md:-mb-3 -mb-1" style={{height}}></div>
        <p>A</p>
        <span className="bg-green-500 flex items-center justify-center gap-2 md:gap-5 rounded-3xl p-2 animate-pulse rounded-l-none">
        <p className="text-white">D</p>
        <p className="text-white">I</p>
        <p className="text-white">N</p>
        <p className="text-white">G</p>
        </span>
      </div>
    </div>
  );
};

export default FullScreenLoading;
