import ProcessItem from "./ProcessItem";

function Process() {
  return (
    <div className="flex justify-center bg-indigo-50 ">
      <div className="py-7 w-[1048px]">
        <h2 className="text-center text-[1.5em] text-stone-700">
          Comment ça marche ?
        </h2>
        <div className="flex flex-col xl:flex-row justify-between align-middle">
          <ProcessItem
            file="partner-handshake-icon"
            title="Etape 1 : Rencontre"
            desc="          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum."
          />
          <ProcessItem
            file="home-icon"
            title="Etape 2 : Recherche"
            desc="          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum."
          />
          <ProcessItem
            file="speaking-bubbles-line-icon"
            title="Etape 3 : Conseils"
            desc="          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum."
          />
        </div>
      </div>
    </div>
  );
}

export default Process;
