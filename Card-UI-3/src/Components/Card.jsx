const Card = (props) => {
  return (
    <div className="h-100 w-60 bg-gray-500 rounded-2xl p-1">
      <div className="h-30 w-full relative rounded-2xl pl-18 pt-20 bg-[url('/public/images/main2.png')] bg-center bg-no-repeat bg-cover">
        <i className="ri-add-line border border-[#e3e3e38f] bg-[#ffffff] rounded-full cursor-pointer text-xl absolute top-2 right-2"></i>
        <div
          className="h-22 w-22 bg-top bg-no-repeat bg-cover border-3 [border-image:linear-gradient(to_left,red,orange,yellow,green,blue,indigo,violet)_1] p-4"
          style={{ backgroundImage: `url(${props.dp})` }}
        ></div>
      </div>
      <div className="pt-15 mb-5">
        <h1 className="text-center font-bold text-lg mb-1 text-white">
          {props.username}
        </h1>
        <p className="text-center text-gray text-white">{props.profession}</p>
      </div>
      <div className="w-full h-20 rounded-2xl bg-gray-300 flex justify-around items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black font-bold">{props.likesCount}</h1>
          <p className="text-sm font-light">Likes</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black font-bold">{props.postsCount}</h1>
          <p className="text-sm font-light">Posts</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black font-bold">{props.viewsCount}</h1>
          <p className="text-sm font-light">Views</p>
        </div>
      </div>
      <div className="flex gap-10 items-center justify-center p-5">
        <i class="ri-instagram-line"></i>
        <i class="ri-twitter-x-line"></i>
        <i class="ri-threads-fill"></i>
      </div>
    </div>
  );
};

export default Card;
