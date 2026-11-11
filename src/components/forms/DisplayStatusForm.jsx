import { useSelector } from "react-redux";

import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const DisplayStatusForm = ({ incidentData }) => {
  const email = useSelector((state) => state.user.email);

  return (
    <div>
      <Row>
        <Col md={{ span: 3, offset: 1 }}>
          <Form.Group className="mb-4" controlId="status">
            <Form.Label>status</Form.Label>
            <Form.Control
              type="text"
              readOnly
              value={incidentData.status?.statusStr}
            ></Form.Control>
          </Form.Group>
        </Col>
        {email === incidentData.reporter && (
          <Col md={{ span: 6, offset: 0 }}>
            <Form.Group className="mb-4" controlId="message">
              <Form.Control
                as="textarea"
                rows={3}
                readOnly
                value={incidentData.status?.message}
              />
            </Form.Group>
          </Col>
        )}
      </Row>
    </div>
  );
};

DisplayStatusForm.propTypes = {
  incidentData: PropTypes.object.isRequired,
};

export default DisplayStatusForm;
