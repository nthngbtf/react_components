import Button from "../components/Button";
import { GoBell, GoArchive, GoAlert } from "react-icons/go";

const ButtonPage = () => {
  // const handeClick = () => {
  //   // console.log("click");
  // };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        {/* adding props <Button onClick={handeClick} **its should be this primary={true} however value for props is boolen this primary   >
          <GoBell />
          Primary
        </Button> */}
        <Button className="mb-5" primary>
          <GoBell />
          Primary
        </Button>
        <Button className="mb-5 text-blue-500" primaryoutline>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoArchive />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>Success</Button>
      </div>
      <div>
        <Button warning>
          <GoAlert />
          Warning
        </Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
      <div>
        <Button rounded>Rounded</Button>
      </div>
      <div>
        <Button outline>Outline</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
