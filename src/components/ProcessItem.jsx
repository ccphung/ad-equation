function ProcessItem({ file, title, desc }) {
  return (
    <div className="m-8 flex justify-center align-middle">
      <img className="w-16" src={`/images/icons/${file}.svg`} alt="handshake" />
      <div className="ml-4">
        <h5 className="font-bold text-stone-600">{title}</h5>
        <p className="text-stone-500">{desc}</p>
      </div>
    </div>
  );
}

export default ProcessItem;
