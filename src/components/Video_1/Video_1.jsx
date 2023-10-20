const Video1 = () => {
  return (
    <>
      <div className="flex items-center justify-center h-200 bg-gray-100 w-auto">
        <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl justify-center w-auto m-5">
          <div className="max-w-md mx-auto space-y-6 justify-center w-auto">
            <img
              src="/imgs/logo_white.jpg"
              className="flex-none text-xs leading-none font-medium uppercase text-white"
            />
          </div>
        </div>
      </div>
      <div className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden m-4 w-auto ">
        <video muted autoPlay loop>
          <source src="/imgs/video_free.mp4"></source>
        </video>
      </div>
    </>
  );
};
export default Video1;
