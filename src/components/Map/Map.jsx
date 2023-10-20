const Map = () => {
  return (
    <>
      <section
        className="bg-center bg-no-repeat bg-[url('/imgs/before_map.jpg')] bg-gray-700 bg-blend-multiply"
        id="Mappa"
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Vieni a trovarmi
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Via Orlandi 6 - 40068 San Lazzaro Di Savena (BO)
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
        </div>
      </section>
      <div className="m-4">
        <iframe
          width="100%"
          height={500}
          load="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJq_ThmK0rfkcR21yPoHqBkm8&key=AIzaSyCr615g10qiRsLH2zCwfyktvT-phP-5iiY"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
