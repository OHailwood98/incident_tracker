import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const IncidentConfirmed = ({ incidentID, setSuccess }) => {
  return (
    <div>
      <h5>Incident Saved</h5>
      <p>
        Your incident has been added to our system and will be investigated
        soon. The reference number for your incident is:
      </p>
      <h3>{incidentID}</h3>
      <p>click here to be able to report more incidents</p>
      <Button onClick={() => setSuccess(false)}>return</Button>
    </div>
  );
};

IncidentConfirmed.propTypes = {
  incidentID: PropTypes.string.isRequired,
  setSuccess: PropTypes.func.isRequired,
};

export default IncidentConfirmed;
