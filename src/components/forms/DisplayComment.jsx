import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const DisplayComment = ({ commentData }) => {
  const created = new Date(commentData.added).toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
  });

  return (
    <div>
      <Col md={{ span: 11, offset: 1 }}>
        <Row>
          <Col md={{ span: 8, offset: 1 }}>
            <Form.Label>Commented By: {commentData.name}</Form.Label>
          </Col>
          <Col md={{ span: 2, offset: 0 }}>{created}</Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Form.Control
              as="textarea"
              rows={3}
              readOnly={true}
              value={commentData.message}
            />
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default DisplayComment;
