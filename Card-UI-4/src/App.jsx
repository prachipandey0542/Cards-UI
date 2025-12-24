import Card from "./Components/Card";
const App = () => {
  const users = [
    {
      dp: "https://i.pinimg.com/1200x/e6/92/15/e692151bfc86c7d523697aa0dbd1a5d0.jpg",
      username: "Aakarsh Tiwari",
      profession:
        "Designs, builds, and maintains software applications and systems",
      likesCount: "72.9K",
      postsCount: "282",
    },
    {
      dp: "https://i.pinimg.com/736x/e7/cf/72/e7cf7247554cf19fbdfc777bc869afb5.jpg",
      username: "Ishani Pandey",
      profession:
        "Develops strategies to build, position, and grow strong brands",
      likesCount: "45K",
      postsCount: "28.5K",
    },
    {
      dp: "https://i.pinimg.com/736x/ad/65/97/ad659744154832910cf4ade8901c23ab.jpg",
      username: "Sarthak Dubay",
      profession:
        "Creates visually appealing designs to communicate ideas effectively",
      likesCount: "27K",
      postsCount: "25K",
    },
    {
      dp: "https://i.pinimg.com/1200x/87/cd/de/87cdde1b5522d18f10ede5957b585cbf.jpg",
      username: "Sara Noor Khan",
      profession: "Analyzes data to extract insights and support decisions",
      likesCount: "18K",
      postsCount: "65",
    },
    {
      dp: "https://i.pinimg.com/736x/4b/10/d6/4b10d65cda5f6b38524f38a0205f841a.jpg",
      username: "Yash Gupta",
      profession:
        "Provides technical assistance and maintains IT systems efficiently",
      likesCount: "72.9K",
      postsCount: "280",
    },
    {
      dp: "https://i.pinimg.com/1200x/a4/d8/30/a4d8304c7f7914882dc95939d8a9ce54.jpg",
      username: "Divya Patel",
      profession: "Creates engaging content and insightful blog posts",
      likesCount: "15.2K",
      postsCount: "45",
    },
    {
      dp: "https://i.pinimg.com/1200x/61/8c/94/618c940469f8229c06cab2c1f471fe85.jpg",
      username: "David",
      profession: "Builds user-friendly mobile applications for platforms",
      likesCount: "8.7K",
      postsCount: "78",
    },
    {
      dp: "https://i.pinimg.com/736x/c2/ee/f0/c2eef0778a76bb4949b1dee0b4ba52c7.jpg",
      username: "Nitaniya Sharma",
      profession:
        "Designs stylish outfits and creates personalized fashion looks",
      likesCount: "22.1K",
      postsCount: "102",
    },
    {
      dp: "https://i.pinimg.com/736x/c8/78/89/c878898545e0b79301b56dbac2c88674.jpg",
      username: "siddhi Ahuja",
      profession:
        "Plans, designs, and oversees construction infrastructure projects",
      likesCount: "9.8K",
      postsCount: "60",
    },
    {
      dp: "https://i.pinimg.com/736x/a0/aa/fc/a0aafc1507e4bb3657f9732eb2faf51a.jpg",
      username: "Christopher",
      profession:
        "Develops online strategies to grow brand visibility and engagement",
      likesCount: "13.4K",
      postsCount: "85",
    },
    {
      dp: "https://i.pinimg.com/736x/b6/53/a8/b653a825b6a59bd596eb49542db49e83.jpg",
      username: "Vidhya Tiwari",
      profession:
        "Creates original music compositions for films, media, and artists",
      likesCount: "25.7K",
      postsCount: "150",
    },
    {
      dp: "https://i.pinimg.com/736x/71/80/1c/71801c22a45e3bc0f714705ed49cbc9e.jpg",
      username: "Anthony",
      profession: "Provides personalized nutrition plans to promote health",
      likesCount: "7.9K",
      postsCount: "40",
    },
    {
      dp: "https://i.pinimg.com/736x/22/55/e9/2255e98ff283b45ba0b696d248c1ef67.jpg",
      username: "Anaya Saik",
      profession:
        "Leads creative vision and directs films from concept to screen",
      likesCount: "18.2K",
      postsCount: "70",
    },
    {
      dp: "https://i.pinimg.com/736x/66/88/85/6688853aca217b3a5fc0f56273c280f2.jpg",
      username: "Jonathan",
      profession:
        "Guides individuals on investments, savings, and financial planning",
      likesCount: "11.3K",
      postsCount: "55",
    },
    {
      dp: "https://i.pinimg.com/1200x/b0/a7/f1/b0a7f14f857dc5801a2bba65122f84f5.jpg",
      username: "Pooja Malhotra",
      profession:
        "Designs functional, aesthetic spaces enhancing comfort and style",
      likesCount: "20.5K",
      postsCount: "95",
    },
    {
      dp: "https://i.pinimg.com/736x/95/c9/d9/95c9d99969e942da4943c5badcd24d3b.jpg",
      username: "Rahul Sharma",
      profession: "Tests software applications to ensure performance",
      likesCount: "6.4K",
      postsCount: "38",
    },
    {
      dp: "https://i.pinimg.com/736x/0e/5d/f4/0e5df4e59fb5333d4c94a2a4cf7c07d4.jpg",
      username: "Divya Shinghaniya",
      profession:
        "Plans and coordinates events to create memorable experiences",
      likesCount: "14.6K",
      postsCount: "88",
    },
    {
      dp: "https://i.pinimg.com/736x/43/61/8e/43618e5ab4adc41900bd5db704cfe25b.jpg",
      username: "Manish Verma",
      profession:
        "Conducts experiments and research to advance scientific knowledge",
      likesCount: "17.8K",
      postsCount: "65",
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
          />
        );
      })}
    </div>
  );
};

export default App;
