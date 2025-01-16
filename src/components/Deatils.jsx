import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Deatils = () => {
  const [logindata, setLogInData] = useState([]);
  const [show, setShow] = useState(false);

  const history = useNavigate();
  const todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const birthday = () => {
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLogInData(user);

      // Check if any user's date matches today's date
      const userbirth = user.some((el) => el.date === todayDate);

      if (userbirth) {
        setTimeout(() => {
          handleShow();
        }, 3000);
      }
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    birthday();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        "Error"
      ) : (
        <>
          <h1>Details Page</h1>
          <h1>{logindata[0].name}</h1>
          <Button onClick={userlogout}>LogOut</Button>

          {logindata.some((el) => el.date === todayDate) && (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{logindata[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Wish You Many Many Returns of the Day!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default Deatils;
