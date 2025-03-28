import Flag from "../components/Flag";

function YourHunter() {
  return (
    <>
      <h1 className="m-5 text-center text-[2.5em] text-stone-800 font-bold mb-5">
        Votre chasseur immobilier
      </h1>
      <Flag />
      <div className="flex  justify-center m-5">
        <div className="flex flex-col lg:flex-row max-w-[1048px]">
          <div>
            <img
              className="w-[500px]"
              src="/images/hunter/1.jpg"
              alt="chasseur immobilier"
            />
          </div>
          <div className="ml-5 max-w-[500px]">
            <p className="lg:text-[em] text-[4em]">&ldquo;</p>
            <p className=" italic lg:text-[2em] text-[1.5em] text-stone-600">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              occaecat cupidatat non proident, sunt in culpa qui occaecat
              cupidatat non proident, sunt in culpa qui sunt in culpa qui
              occaecat cupidatat non proident, sunt in culpa qui
            </p>
            <p className="lg:text-[5em] text-[4em] text-right">&rdquo;</p>
            <p className="text-[1.2em] text-stone-700 text-right">
              - Adeline, votre chasseur immobilier
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourHunter;
