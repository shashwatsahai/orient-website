import React, { Component } from "react";
import "./Gallery.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "http://www.statuscreation.com/wp-content/uploads/2020/08/banner4-768x994.jpg",
        "http://www.statuscreation.com/wp-content/uploads/2020/08/car2-768x994.jpg",
        "http://www.statuscreation.com/wp-content/uploads/2020/08/banner1.jpg",
        "http://www.statuscreation.com/wp-content/uploads/2020/08/banner2.jpg",
        "http://www.statuscreation.com/wp-content/uploads/2020/08/banner3.jpg",
        "http://www.statuscreation.com/wp-content/uploads/2020/07/a41.jpg",
        "http://www.statuscreation.com/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-01-at-15.30.29-1-768x996.jpeg",
        "http://www.statuscreation.com/wp-content/uploads/2020/08/banner3.jpg",
      ],
      showModal: false,
      popImageUrl: "",
    };
  }
  MyVerticallyCenteredModal = (props) => {
    return (
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <img src={props.popImageUrl}></img>
        </Modal.Body>
        <Modal.Footer>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  handlePopup = (url) => {
    this.setState({
      showModal: true,
      popImageUrl: url,
    });
  };
  render() {
    let imagesUrlArray = this.state.imageUrlArray;
    const images = imagesUrlArray.map((url, index) => {
      return (
        <img
          src={url}
          className="singleImage"
          key={index}
          onClick={() =>
            this.MyVerticallyCenteredModal({
              popImageUrl: url,
            })
          }
        ></img>
      );
    });
    return <div className="Gallery">{images}</div>;
  }
}

export default Gallery;
