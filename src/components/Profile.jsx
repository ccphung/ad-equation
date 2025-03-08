function Profile() {
  return (
    <div className="flex justify-center mt-5">
      <div className="max-w-[1048px] w-full">
        <div className="flex xl:flex-nowrap flex-wrap justify-around items-center">
          <img
            className="rounded-full w-[200px] border border-indigo-100 border-4 p-2"
            src="/images/profile/profile.jpg"
            alt="adeline"
          />
          <p className="ml-5 text-[1.5em] italic">
            &ldquo;Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
