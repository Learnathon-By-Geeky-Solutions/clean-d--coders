
const FullScreenLoading = () => {
    
  return (
    <div className="text-6xl md:text-9xl h-screen w-full flex items-center justify-center z-50 fixed top-0 left-0 bg-white">
      <div  className="h-fit flex items-center justify-center gap-2 md:gap-5">
        <p>L</p>
        <div className="aspect-square border-[20px] border-dashed border-green-500 rounded-full animate-spin md:-mb-3 -mb-1 w-14 md:w-28"></div>
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
