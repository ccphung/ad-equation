import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import MissionItem from "../components/MissionItem";

function Mission() {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false);
  const [isReferencesModalOpen, setIsReferencesModalOpen] = useState(false);

  function handleServiceClick() {
    setIsServiceModalOpen((prev) => !prev);
  }
  function handleWorkClick() {
    setIsWorkModalOpen((prev) => !prev);
  }
  function handleReferencesClick() {
    setIsReferencesModalOpen((prev) => !prev);
  }

  return (
    <div className="relative">
      <div
        className={`${
          isServiceModalOpen || isWorkModalOpen || isReferencesModalOpen
            ? "blur-md"
            : ""
        } m-5 flex flex-col items-center`}
      >
        <div className="max-w-[1048px]">
          <div className="flex flex-col justify-center items-center m-3">
            <h1 className=" text-[2.5em] text-stone-800 font-bold ">
              Découvrez ma mission
            </h1>
            <h2 className=" text-lg text-stone-600 font-semibold max-w-[500px] mb-5">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            </h2>

            <div className="xl:flex items-center justify-center">
              <div className="xl:mb-0 mb-5">
                <button onClick={handleServiceClick}>
                  <div className="xl:w-[600px] xl:mr-5 w-full h-full p-5 border-2 border-stone-300 rounded-lg hover:border-[#5F66AC] cursor-pointer group relative">
                    <img
                      className="rounded-lg "
                      src="/images/missions/1.jpg"
                      alt="appartment"
                    />

                    <h3 className="xl:text-[1.5em] text-lg font-semibold text-[#EF7970] my-2">
                      Services proposés
                    </h3>
                    <p>Excepteur sint occaecat cupidatat non proident</p>

                    <ArrowRightIcon className="h-6 w-6 group-hover:text-stone-100 group-hover:border-2 group-hover:border-[#5F66AC] group-hover:rounded-full absolute group-hover:bg-[#5F66AC] right-3 bottom-3 transition-all duration-200" />
                  </div>
                </button>
              </div>

              <div className="flex flex-col items-center gap-[20px]">
                <button onClick={handleWorkClick}>
                  <div className="xl:w-[220px]  p-5 border b-2 border-stone-300 rounded-lg hover:border-[#5F66AC] cursor-pointer group relative">
                    <img
                      className="rounded-lg object-cover"
                      src="/images/missions/2.jpg"
                      alt="computer"
                    />
                    <h3 className="xl:text-base my-1 font-semibold text-[#EF7970] text-lg">
                      Métier
                    </h3>
                    <p className="break-words whitespace-normal xl:text-sm">
                      Excepteur sint occaecat cupidatat non proident
                    </p>
                    <ArrowRightIcon className="h-6 w-6 xl:h-5 xl:w-5 group-hover:text-stone-100 group-hover:border-2  group-hover:border-[#5F66AC] group-hover:rounded-full absolute group-hover:bg-[#5F66AC] right-3 bottom-3 transition-all duration-200" />
                  </div>
                </button>

                <button onClick={handleReferencesClick}>
                  <div className="xl:w-[220px] p-5 border b-2 border-stone-300 rounded-lg xl:max-w-[250px] hover:border-[#5F66AC] pointercursor- group relative">
                    <img
                      className="w-[100%] h-[100%] rounded-lg "
                      src="/images/missions/3.jpg"
                      alt="computer"
                    />
                    <h3 className="xl:text-base mt-1 font-semibold text-[#EF7970] text-lg">
                      Références
                    </h3>
                    <p className="break-words whitespace-normal xl:text-sm">
                      Excepteur sint occaecat cupidatat non proident
                    </p>
                    <ArrowRightIcon className="h-6 w-6 xl:h-5 xl:w-5 group-hover:text-stone-100 group-hover:border-2  group-hover:border-[#5F66AC] group-hover:rounded-full absolute group-hover:bg-[#5F66AC] right-3 bottom-3 transition-all duration-200" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isServiceModalOpen && (
        <div className="absolute inset-0 flex justify-center items-center">
          <MissionItem
            onClick={handleServiceClick}
            isServiceModalOpen={isServiceModalOpen}
          />
        </div>
      )}

      {isWorkModalOpen && (
        <div className="absolute inset-0 flex justify-center items-center">
          <MissionItem
            onClick={handleWorkClick}
            isWorkModalOpen={isWorkModalOpen}
          />
        </div>
      )}

      {isReferencesModalOpen && (
        <div className="absolute inset-0 flex justify-center items-center">
          <MissionItem
            onClick={handleReferencesClick}
            isReferencesModalOpen={isReferencesModalOpen}
          />
        </div>
      )}
    </div>
  );
}

export default Mission;
