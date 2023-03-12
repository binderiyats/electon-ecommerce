import { Button } from "react-bootstrap";

export const HeroLeft = () => {
  return (
    <div className="heroLeft ms-5 ">
      <div className="w-75 text-start">
        <h1 style={{ color: "white" }}>
          <strong>Canon</strong> camera
        </h1>
      </div>
      <div className="d-flex gap-3">
        <Button type="button" className="btn btn-light">
          Shop now
        </Button>
        <Button>View more</Button>
      </div>
    </div>
  );
};
