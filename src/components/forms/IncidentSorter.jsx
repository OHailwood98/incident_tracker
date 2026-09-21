import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const IncidentSorter = ({ SetSort, sortValue }) => {
  return (
    <Form>
      <Row>
        <Col md={{ span: 3, offset: 1 }}>
          <Form.Group className="mb-4" controlId="affectedService">
            <Form.Label>sort by</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => SetSort(e)}
              value={sortValue}
            >
              <option value="tm-new">Newest</option>
              <option value="tm-old">Oldest</option>
              <option value="prio-dec">Highest</option>
              <option value="prio-asc">Lowest</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

IncidentSorter.propTypes = {
  SetSort: PropTypes.func.isRequired,
  sortValue: PropTypes.string.isRequired,
};

export default IncidentSorter;
