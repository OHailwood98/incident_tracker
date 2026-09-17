import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import PropTypes from "prop-types";

import InlineError from "../messages/InlineError";

const IncidentForm = ({ submit, errors }) => {
  var [incidentData, setIncidentData] = useState({
    incident: "",
    incidentDescription: "",
    severityLevel: null,
    affectedService: "",
    reporter: "",
  });

  var [error, setError] = useState({});

  function handleChange(e) {
    setIncidentData({ ...incidentData, [e.target.id]: e.target.value });
  }

  function Submit() {
    var err = validator();
    setError(err);
    if (Object.keys(err) < 1) {
      console.dir("subbed");
      submit(incidentData).catch((err) => {
        return setError(err.response.data.errors);
      });
    } else {
      console.dir("failed");
    }
  }

  function validator() {
    var errors = {};
    if (!incidentData.incident) errors.incident = "Incident cannot be blank";
    if (!incidentData.incidentDescription)
      errors.incidentDescription = "Please describe the Incident";
    if (!incidentData.severityLevel)
      errors.severityLevel = "Please select a severity level";
    if (!incidentData.affectedService)
      errors.affectedService = "Please select an affected service";
    if (!incidentData.reporter) errors.reporter = "Your name cannot be blank";
    return errors;
  }

  return (
    <Form onSubmit={(e) => Submit(e)}>
      <h5>Incident Form</h5>
      {errors.global && (
        <Alert variant="danger">
          <Alert.Heading>Something Failed! :(</Alert.Heading>
          <p>{errors.global}</p>
        </Alert>
      )}
      <Form.Group className="mb-4" controlId="incident">
        <Form.Label>Incident</Form.Label>
        <Form.Control
          type="text"
          placeholder="Incident"
          onChange={(e) => handleChange(e)}
          value={incidentData.incident}
        />
        {error.incident && <InlineError message={error.incident.toString()} />}
      </Form.Group>
      <Form.Group className="mb-4" controlId="incidentDescription">
        <Form.Label>Incident Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Describe the issue you are having"
          onChange={(e) => handleChange(e)}
          value={incidentData.incidentDescription}
        />
        {error.incidentDescription && (
          <InlineError message={error.incidentDescription.toString()} />
        )}
      </Form.Group>
      <Form.Group className="mb-4" controlId="severityLevel">
        <Form.Label>Severity Level</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => handleChange(e)}
          value={incidentData.severityLevel}
        >
          <option>levels</option>
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </Form.Select>
        {error.severityLevel && (
          <InlineError message={error.severityLevel.toString()} />
        )}
      </Form.Group>
      <Form.Group className="mb-4" controlId="affectedService">
        <Form.Label>Affected Service</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => handleChange(e)}
          value={incidentData.affectedService}
        >
          <option>Services</option>
          <option value="email">Outlook</option>
          <option value="teams">Teams</option>
          <option value="website">Website</option>
          <option value="sap">SAP</option>
          <option value="jira">Jira</option>
          <option value="confluence">Confluence</option>
          <option value="git">Git</option>
        </Form.Select>
        {error.affectedService && (
          <InlineError message={error.affectedService.toString()} />
        )}
      </Form.Group>
      <Form.Group className="mb-4" controlId="reporter">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="name"
          onChange={(e) => handleChange(e)}
          value={incidentData.reporter}
        />
        {error.reporter && <InlineError message={error.reporter.toString()} />}
      </Form.Group>

      <Button onClick={(e) => Submit(e)}>Submit</Button>
    </Form>
  );
};

IncidentForm.propTypes = {
  submit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default IncidentForm;
