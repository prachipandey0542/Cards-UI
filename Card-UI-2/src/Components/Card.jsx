import App from "../App";
import { Bookmark } from "lucide-react";

function Card(props) {
  return (
    <>
      <div className="card">
        <div>
          <div className="top">
            <div className="image">
              <img src={props.brandLogo} alt="image" />
            </div>
            <button>
              Save <Bookmark size={20} />
            </button>
          </div>

          <div className="mid">
            <h3>
              {props.companyName} <span>{props.datePosted}</span>
            </h3>
            <h2>{props.post}</h2>
            <div className="tag">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
}
export default Card;
