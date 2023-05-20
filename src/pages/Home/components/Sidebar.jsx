import { Offcanvas } from "react-bootstrap";

export const Sidebar = (props) => {
  const { show, handleClose } = props;
  return (
    // <div
    //   className="offcanvas offcanvas-end"
    //   tabIndex="-1"
    //   id="offcanvasExample"
    //   aria-labelledby="offcanvasExampleLabel"
    // >
    //   <div className="offcanvas-header">
    //     <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">
    //       BCR
    //     </h5>
    //     <button
    //       type="button"
    //       className="btn-close"
    //       data-bs-dismiss="offcanvas"
    //       aria-label="Close"
    //     ></button>
    //   </div>
    //   <div className="offcanvas-body">
    //     <div className="menu">
    //       <ul>
    //         <li>Our Services</li>
    //         <li>Why Us</li>
    //         <li>Testimonial</li>
    //         <li>FAQ</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};
