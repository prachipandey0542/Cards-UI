import Card from "./Components/Card";
const App = () => {
  const users = [
    {
      dp: "./images/dp1.png",
      username: "Doremon",
      profession: "Software Developer and Coder",
      likesCount: "72.9K",
      postsCount: "282",
      viewsCount: "59.5K",
    },
    {
      dp: "./images/dp2.png",
      username: "JaneDoe",
      profession: "Marketing and Brand Strategist",
      likesCount: "45K",
      postsCount: "123",
      viewsCount: "78K",
    },
    {
      dp: "./images/dp3.png",
      username: "BobSmith",
      profession: "Creative Graphic Designer",
      likesCount: "27K",
      postsCount: "90",
      viewsCount: "54K",
    },
    {
      dp: "./images/dp4.png",
      username: "AliceJohnson",
      profession: "Data Analyst and Researcher",
      likesCount: "18K",
      postsCount: "65",
      viewsCount: "60K",
    },
    {
      dp: "./images/dp5.png",
      username: "MikeWilliams",
      profession: "IT Support and Technician",
      likesCount: "72.9K",
      postsCount: "280",
      viewsCount: "89K",
    },
    {
      dp: "./images/dp6.png",
      username: "SaraKhan",
      profession: "Content Writer and Blogger",
      likesCount: "15.2K",
      postsCount: "45",
      viewsCount: "12.3K",
    },
    {
      dp: "./images/dp7.png",
      username: "RaviVerma",
      profession: "Mobile App Developer",
      likesCount: "8.7K",
      postsCount: "78",
      viewsCount: "9.4K",
    },
    {
      dp: "./images/dp8.png",
      username: "NehaSharma",
      profession: "Fashion Designer and Stylist",
      likesCount: "22.1K",
      postsCount: "102",
      viewsCount: "14.8K",
    },
    {
      dp: "./images/dp9.png",
      username: "ArjunDas",
      profession: "Civil Engineer",
      likesCount: "9.8K",
      postsCount: "60",
      viewsCount: "8.1K",
    },
    {
      dp: "./images/dp11.png",
      username: "SnehaGupta",
      profession: "Digital Marketing Specialist",
      likesCount: "13.4K",
      postsCount: "85",
      viewsCount: "11.2K",
    },
    {
      dp: "./images/dp10.png",
      username: "VikramJoshi",
      profession: "Music Composer",
      likesCount: "25.7K",
      postsCount: "150",
      viewsCount: "20.3K",
    },
    {
      dp: "./images/dp12.png",
      username: "KiranRao",
      profession: "Nutritionist and Dietitian",
      likesCount: "7.9K",
      postsCount: "40",
      viewsCount: "5.4K",
    },
    {
      dp: "./images/dp13.png",
      username: "DeepaNair",
      profession: "Film Director",
      likesCount: "18.2K",
      postsCount: "70",
      viewsCount: "12.6K",
    },
    {
      dp: "./images/dp14.png",
      username: "AnilMehta",
      profession: "Financial Advisor",
      likesCount: "11.3K",
      postsCount: "55",
      viewsCount: "9.7K",
    },
    {
      dp: "./images/dp15.png",
      username: "PoojaMalhotra",
      profession: "Interior Designer",
      likesCount: "20.5K",
      postsCount: "95",
      viewsCount: "16.8K",
    },
    {
      dp: "./images/dp16.png",
      username: "RahulSharma",
      profession: "Software Tester",
      likesCount: "6.4K",
      postsCount: "38",
      viewsCount: "4.9K",
    },
    {
      dp: "./images/dp17.png",
      username: "DivyaKumar",
      profession: "Event Planner",
      likesCount: "14.6K",
      postsCount: "88",
      viewsCount: "10.5K",
    },
    {
      dp: "./images/dp18.png",
      username: "ManishVerma",
      profession: "Research Scientist",
      likesCount: "17.8K",
      postsCount: "65",
      viewsCount: "13.2K",
    },
  ];

  return (
    <div className="h-full w-screen bg-gray-800 p-10 flex gap-x-15 gap-y-8 flex-wrap">
      {users.map(function (elem) {
        return (
          <Card
            dp={elem.dp}
            username={elem.username}
            profession={elem.profession}
            likesCount={elem.likesCount}
            postsCount={elem.postsCount}
            viewsCount={elem.viewsCount}
          />
        );
      })}
    </div>
  );
};

export default App;
