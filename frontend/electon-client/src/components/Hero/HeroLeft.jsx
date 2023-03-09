import { Button } from "react-bootstrap";

export const HeroLeft = () => {
  return (
    <div className="heroLeft ms-5">
      <div>
        <h1>
          <span>Canon</span>camera
        </h1>
      </div>
      <div className="">
        <Button type="button" className="btn btn-light">
          Shop now
        </Button>
        <Button>View more</Button>
      </div>
    </div>
  );
};
