import React from 'react';

import Modal from 'react-bootstrap/lib/Modal';

const Order = ({showModal, closeModal}) => {
  return (
    <div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title><strong>Ordena</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ordena llamando al<br />☎ +34 658 17 00 73
          </p>
          <hr />
          Contáctanos por e-mail<br />
          <span>
            <i className="glyphicon glyphicon-envelope" />
            {' '}
            <a href="mailto:valys.deli@gmail.com">valys.deli@gmail.com</a>
          </span>
        </Modal.Body>
      </Modal>
    </div>
  );
};

Order.propTypes = {
  showModal: React.PropTypes.bool.isRequired,
  closeModal: React.PropTypes.func.isRequired,
};

export default Order;
