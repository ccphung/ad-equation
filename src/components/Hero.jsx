function Hero() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-col mt-5 max-w-[1048px] m-4">
        <div className="flex flex-row justify-center align-middle">
          <div className="max-w-[500px] flex flex-col justify-center ">
            <h1 className="text-center font-serif text-[2em] ">
              Chasseur immobilier
            </h1>
            <h2 className="text-center">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </h2>
            <div className="flex justify-center mt-3">
              <button className="bg-black text-white px-2 py-1 w-44">
                Prendre RDV
              </button>
            </div>
          </div>

          <img
            className="w-32 sm:w-48 md:w-64 size-96 object-cover hidden xl:block"
            src="/images/hero/hero2.jpg"
            alt="inside appartment"
          />
        </div>

        <div className="justify-center xl:justify-end flex mt-4">
          <div className="flex justify-center ">
            <img
              className="size-72 w-auto mt-[-64px] mr-4 hidden xl:block"
              src="/images/hero/hero3.jpg"
              alt="living room"
            />
            <img
              className="size-56 w-auto"
              src="/images/hero/hero1.jpg"
              alt="planning"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
