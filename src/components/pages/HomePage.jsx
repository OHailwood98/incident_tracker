import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 class="display-4">IT support page</h1>
      <br />
      <hr />
      <br />
      <Row>
        <Col md={{ span: 4, offset: 1 }}>
          <h4>Got Issues with IT services?</h4>
          <h5>Report them Here</h5>
          <Button onClick={() => navigate("addIncident")}>
            {" "}
            Add Incident{" "}
          </Button>
        </Col>
        <Col md={{ span: 4, offset: 2 }}></Col>
      </Row>
    </div>
  );
}
