import React, { Component } from "react";
import "./Gallery.css";
import "./PopUp";
import PopUp from "./PopUp";

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

  handlePopup = (url) => {
    this.setState({
      showModal: !this.state.showModal,
      popImageUrl: url,
    });
  };
  render() {
    let imagesUrlArray = this.state.imageUrlArray;
    const styles = {
      position: "absolute",
      objectFit: "cover",
      width: "600px",
      maxWidth: "200%",
    };
    // const images = imagesUrlArray.map((url, index) => {
    //   return (
    //     <img
    //       src={url}
    //       className="singleImage"
    //       key={index}
    //       onClick={() => {
    //         this.setState({ showModal: true, modalSrc: url });
    //       }}
    //     ></img>
    //   );
    // });
    return (
      <div className="container">
        <div className="row">
          <div className="row">
            {imagesUrlArray.forEach((url) => {
              return (
                <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                  <a
                    className="thumbnail"
                    href="#"
                    data-image-id=""
                    data-toggle="modal"
                    data-title=""
                    data-image={url}
                    data-target="#image-gallery"
                  >
                    <img
                      className="img-thumbnail"
                      src={url}
                      alt="Another alt text"
                    />
                  </a>
                </div>
              );
            })}
          </div>

          <div
            className="modal fade"
            id="image-gallery"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="image-gallery-title"></h4>
                  <button type="button" className="close" data-dismiss="modal">
                    <span aria-hidden="true">×</span>
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img
                    id="image-gallery-image"
                    className="img-responsive col-md-12"
                    src=""
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary float-left"
                    id="show-previous-image"
                  >
                    <i className="fa fa-arrow-left"></i>
                  </button>

                  <button
                    type="button"
                    id="show-next-image"
                    className="btn btn-secondary float-right"
                  >
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
