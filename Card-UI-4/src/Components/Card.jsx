const Card = (props) => {
  return (
    <div
      className="h-100 w-60 rounded-2xl p-1 flex flex-col justify-end items-center bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${props.dp})` }}
    >
      <div
        className="w-full h-35 rounded-b-2xl bottom-0 backdrop-blur-sm absolute px-1"
        style={{
          maskImage: "linear-gradient(to top, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 70%, transparent 100%)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      ></div>
      <div className="px-1 z-10 relative">
        <h1 className="font-bold text-lg mb-1 text-white">
          {props.username}
          <span>
            <i className="ri-verified-badge-fill font-light pl-3"></i>
          </span>
        </h1>
        <p className="text-gray text-white text-sm">{props.profession}</p>
      </div>

      <div className="w-full h-15 flex justify-between items-center px-1 z-10 relative">
        <div className="flex gap-1 justify-center items-center">
          <i className="ri-user-line text-white text-xl"></i>
          <h1 className="text-white font-bold text-sm">{props.likesCount}</h1>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <i className="ri-checkbox-multiple-line text-xl text-white"></i>
          <h1 className="text-white font-bold text-sm">{props.postsCount}</h1>
        </div>
        <h1 className="text-sm text-black bg-white font-medium px-4 py-1 rounded-2xl">
          Follow
          <span>
            <i className="ri-add-line text-sm font-medium text-black pl-1"></i>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Card;
