import Card from "./Components/Card";
import "./App.css";

function App() {
  const jobs = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://www.pngmart.com/files/Amazon-Logo-PNG-Image.png",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Remote",
    },
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "7 days ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$55/hour",
      location: "Noida, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "6 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$48/hour",
      location: "Gurugram, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "9 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Remote",
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      companyName: "Oracle",
      datePosted: "1 week ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$30/hour",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/060/100/974/non_2x/adobe-logo-square-rounded-adobe-logo-adobe-logo-free-download-free-png.png",
      companyName: "Adobe",
      datePosted: "8 weeks ago",
      post: "DevOps Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$50/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/spacex.com",
      companyName: "SpaceX",
      datePosted: "3 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Remote",
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "2 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hour",
      location: "San Francisco, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/uber.com",
      companyName: "Uber",
      datePosted: "1 week ago",
      post: "Data Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/intel.com",
      companyName: "Intel",
      datePosted: "5 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$52/hour",
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      companyName: "Salesforce",
      datePosted: "4 weeks ago",
      post: "CRM Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$68/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/samsung.com",
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
