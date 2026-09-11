import PropTypes from "prop-types";

const IncidentConfirmed = ({ incidentID }) => {
  return (
    <div>
      <h5>Incident Saved</h5>
      <p>
        Your incident has been added to our system and will be investigated
        soon. The reference number for your incident is:
      </p>
      <p>{incidentID}</p>
    </div>
  );
};

IncidentConfirmed.propTypes = {
  incidentID: PropTypes.string.isRequired,
};

export default IncidentConfirmed;
