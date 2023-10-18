const Video1 = () => {
  return (
    <div
      style={{
        height: 800,
        overflow: "hidden",
        transform: "translateY(100px)",
      }}
      className="relative isolate overflow-hidden my-0 px-4"
    >
      <video
        muted
        autoPlay
        loop
        width="100%"
        style={{ transform: "translateY(-600px)" }}
      >
        <source src="/imgs/swishh.mp4"></source>
      </video>
    </div>
  );
};
export default Video1;
