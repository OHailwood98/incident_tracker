import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const IncidentForm = ({ incidentData }) => {
  var severity = "High";
  if (incidentData.severityLevel === 2) severity = "Medium";
  else if (incidentData.severityLevel === 1) severity = "Low";

  const created = new Date(incidentData.createdAt).toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
  });

  return (
    <div>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Form.Group as={Row}>
            <Form.Label column sm="1">
              Incident
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                readOnly
                value={incidentData.incident}
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 1 }}>
          <Form.Group as={Row}>
            <Col md={{ span: 4, offset: 0 }}>
              <Form.Label>Time</Form.Label>
            </Col>
            <Col md={{ span: 8, offset: 0 }}>
              <Form.Control type="text" readOnly value={created} />
            </Col>
          </Form.Group>
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <Form.Group as={Row}>
            <Col md={{ span: 4, offset: 0 }}>
              <Form.Label>Reporter</Form.Label>
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
              <Form.Control
                type="text"
                readOnly
                value={incidentData.reporter}
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 1 }}>
          <Form.Group as={Row}>
            <Col md={{ span: 4, offset: 0 }}>
              <Form.Label>Severity Level</Form.Label>
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
              <Form.Control type="text" readOnly value={severity} />
            </Col>
          </Form.Group>
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <Form.Group as={Row}>
            <Col md={{ span: 4, offset: 0 }}>
              <Form.Label>Affected Service</Form.Label>
            </Col>
            <Col md={{ span: 7, offset: 1 }}>
              <Form.Control
                type="text"
                readOnly
                value={incidentData.affectedService}
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Form.Group as={Row}>
            <Form.Label column sm="1">
              Incident Details
            </Form.Label>
            <Col>
              <Form.Control
                as="textarea"
                rows={3}
                readOnly
                value={incidentData.incidentDescription}
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

IncidentForm.propTypes = {
  incidentData: PropTypes.object.isRequired,
};

export default IncidentForm;
