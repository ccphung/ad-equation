import Carousel from "./Carousel";

function FoundProperties() {
  const OPTIONS = {};
  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="bg-stone-100 p-4">
      <h2 className="text-center text-[1.5em] text-stone-700 mb-6 font-semibold">
        Bien trouvés pour
      </h2>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default FoundProperties;
