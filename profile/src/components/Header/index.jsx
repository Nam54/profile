import { Link } from "react-router-dom";
import { BsCloudSunFill } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <Header>
        <ul>
          <li>
            <Link>Overview</Link>
          </li>
          <li>
            <Link>Project</Link>
          </li>
          <li>
            <Link>Activities</Link>
          </li>
        </ul>

        <div>
          <BsCloudSunFill />
        </div>
      </Header>
    </>
  );
}
