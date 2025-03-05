import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Mission() {
  return (
    <div className="m-5 flex flex-col items-center">
      <div className="max-w-[1048px] ">
        <div className="max-w-[800px]">
          <h1 className=" text-[2.5em] text-stone-800 font-bold ">
            Découvrez ma mission
          </h1>
          <h2 className=" text-lg text-stone-600 font-smibold">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            sint occaecat cupidatat non proident, sunt in culpa qui
          </h2>
        </div>

        <div className="flex xl:flex-row flex-col justify-center align-middle items-center m-3">
          <div className="xl:w-[600px] w-[80%] h-[80%] p-5 border b-2 border-stone-300 rounded-lg hover:border-red-500 cursor-pointer group relative ">
            <img
              className="rounded-lg"
              src="/images/missions/1.jpg"
              alt="appartment"
            />
            <h3 className="xl:text-[1.5em] text-lg font-semibold text-red-500">
              Services proposés
            </h3>
            <p>Excepteur sint occaecat cupidatat non proident</p>
            <ArrowRightIcon className="h-6 w-6 group-hover:text-red-500 absolute right-3 bottom-3 hidden lg:block" />
          </div>
          <div className="flex flex-col items-center ">
            <div className="m-5 p-5 border b-2 border-stone-300 rounded-lg max-w-[250px] hover:border-red-500 cursor-pointer group relative">
              <img
                className="xl:w-[220px] xl:h-[220px] w-[100%] h-[100%] rounded-lg"
                src="/images/missions/2.jpg"
                alt="computer"
              />
              <h3 className="mt-2 font-semibold text-red-500">Métier</h3>
              <p className="break-words whitespace-normal text-lg ">
                Excepteur sint occaecat cupidatat non proident
              </p>
              <ArrowRightIcon className="h-6 w-6 group-hover:text-red-500 absolute right-3 bottom-3 hidden lg:block" />
            </div>
            <div className="p-5 border b-2 border-stone-300 rounded-lg max-w-[250px] hover:border-red-500 cursor-pointer group relative">
              <img
                className="xl:w-[220px] xl:h-[220px] w-[100%] h-[100%] rounded-lg "
                src="/images/missions/3.jpg"
                alt="computer"
              />
              <h3 className="mt-2 font-semibold text-red-500">Références</h3>
              <p className="break-words whitespace-normal text-lg">
                Excepteur sint occaecat cupidatat non proident
              </p>
              <ArrowRightIcon className="h-6 w-6 group-hover:text-red-500 absolute right-3 bottom-3 hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
