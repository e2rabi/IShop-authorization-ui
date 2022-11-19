import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

const IshopAlert = (props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(props.display);
  }, [props.render]);
  return (
    <Alert
      style={{ visibility: show == true ? "visible" : "hidden" }}
      className="alert-permission"
      variant={props.variant}
      onClose={() => setShow(false)}
      dismissible
    >
      {props.message}
    </Alert>
  );
};

export default IshopAlert;
