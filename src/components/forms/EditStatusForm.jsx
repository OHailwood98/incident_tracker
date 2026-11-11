import { useState } from "react";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { UpdateIncident } from "../../redux/actions/incidentActions";

const EditStatusForm = ({ incidentData }) => {
  const dispatch = useDispatch();
  const [statusStr, setStatusStr] = useState("");
  const [message, setMessage] = useState("");

  function submit() {
    const status = {
      statusStr: statusStr || incidentData.status?.statusStr,
      message,
    };
    dispatch(UpdateIncident({ id: incidentData._id, status: status }));
  }

  return (
    <div>
      <Row>
        <Col md={{ span: 2, offset: 1 }}>
          <Form.Group className="mb-4" controlId="status">
            <Form.Label>status</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={statusStr || incidentData.status?.statusStr}
              onChange={(e) => setStatusStr(e.target.value)}
            >
              <option>levels</option>
              <option value={"ACTIVE"}>Active</option>
              <option value={"IN-PROGRESS"}>In Progress</option>
              <option value={"CLOSED"}>closed</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={{ span: 7, offset: 0 }}>
          <Form.Group className="mb-4" controlId="message">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter message here"
              value={message || incidentData.status?.message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={{ span: 1, offset: 0 }}>
          <Button onClick={(e) => submit(e)}>Submit</Button>
        </Col>
      </Row>
    </div>
  );
};

EditStatusForm.propTypes = {
  incidentData: PropTypes.object.isRequired,
};

export default EditStatusForm;
