import Card from "./Components/Card";
import "./App.css";

function App() {
  const jobs = [
    {
      brandLogo: `/assets/images/meta.png`,
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: `/assets/images/apple.png`,
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: `/assets/images/amazon.png`,
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: `/assets/images/netflix.png`,
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Remote",
    },
    {
      brandLogo: `/assets/images/google.png`,
      companyName: "Google",
      datePosted: "7 days ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$55/hour",
      location: "Noida, India",
    },
    {
      brandLogo: `/assets/images/microsoft.png`,
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: `/assets/images/tesla.png`,
      companyName: "Tesla",
      datePosted: "6 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$48/hour",
      location: "Gurugram, India",
    },
    {
      brandLogo: `/assets/images/nvidia.png`,
      companyName: "NVIDIA",
      datePosted: "9 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Remote",
    },
    {
      brandLogo: `/assets/images/oracle.png`,
      companyName: "Oracle",
      datePosted: "1 week ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$30/hour",
      location: "Chennai, India",
    },
    {
      brandLogo: `/assets/images/adobe.png`,
      companyName: "Adobe",
      datePosted: "8 weeks ago",
      post: "DevOps Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$50/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: `/assets/images/spaceX.png`,
      companyName: "SpaceX",
      datePosted: "3 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Remote",
    },
    {
      brandLogo: `/assets/images/openAI.png`,
      companyName: "OpenAI",
      datePosted: "2 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hour",
      location: "San Francisco, USA",
    },
    {
      brandLogo: `/assets/images/uberlogo.png`,
      companyName: "Uber",
      datePosted: "1 week ago",
      post: "Data Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: `/assets/images/intel.png`,
      companyName: "Intel",
      datePosted: "5 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$52/hour",
      location: "Pune, India",
    },
    {
      brandLogo: `/assets/images/salesforce.png`,
      companyName: "Salesforce",
      datePosted: "4 weeks ago",
      post: "CRM Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$68/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: `/assets/images/samsung.png`,
      companyName: "Samsung",
      datePosted: "9 days ago",
      post: "Android Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$33/hour",
      location: "Gurugram, India",
    },
  ];

  return (
    <>
      <div className="parent">
        {jobs.map(function (elem) {
          return (
            <Card
              brandLogo={elem.brandLogo}
              companyName={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
