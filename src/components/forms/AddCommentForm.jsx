import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import InlineError from "../messages/InlineError";

const AddCommentForm = ({ addMessage, error }) => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Form>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Form.Group className="mb-4" controlId="message">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Add your Comment here"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              {error?.message && (
                <InlineError message={error.message.toString()} />
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 1, offset: 10 }}>
            <Button
              disabled={message.length <= 0}
              onClick={() => {
                addMessage(message);
                setMessage("");
              }}
            >
              add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddCommentForm;
