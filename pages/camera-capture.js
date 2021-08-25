import React, { PureComponent, useRef, useState } from "react";
import Webcam from "react-webcam";

import Link from "next/link";

class CameraCapture extends PureComponent {
  constructor(props) {
    super(props);
    this.webRef = React.createRef();

    this.state = {
      img: null,
      imagePopUP: false,
    };
  }

  showImage() {
    this.setState({
      imagePopUP: true,
    });
    console.log(this.webRef.current.getScreenshot());
  }

  closeImage() {
    this.setState({
      imagePopUP: false,
    });
    console.log(this.webRef.current.getScreenshot());
  }

 

  render() {
    const snapImage = () => {
      this.setState({
        img: this.webRef.current.getScreenshot(),
      });
    };

    return (
      <>
        <div className="wd-100">
          <Link href="/visitor-acce">
            <a>
              <span className="crs-bc">
                <svg viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                  ></path>
                </svg>
              </span>
            </a>
          </Link>

          <div className="vdr">
            <Webcam ref={this.webRef} audio={false} />
          </div>

          <button
            onClick={() => {
              snapImage();
              this.showImage();
            }}
            className="rlbt"
          >
            <svg viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"
              ></path>
            </svg>
          </button>
        </div>

        {this.state.imagePopUP ? (
          <>
            <div className="wd-100">
              <span className="crs-bc" onClick={()=>{this.closeImage()}}>
                <svg viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                  ></path>
                </svg>
              </span>

              <img src={this.state.img} className="imgp" />
              <button className="cmrC" onClick={()=>{this.closeImage()}}>
                <svg viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256.001 8 119.34 8 7.9 119.525 8 256.185 8.1 393.067 119.095 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.353-12.561.482-17.433l-19.738-19.738c-4.498-4.498-11.753-4.785-16.501-.552C351.787 433.246 306.105 452 256 452c-108.321 0-196-87.662-196-196 0-108.321 87.662-196 196-196 54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486z"
                  ></path>
                </svg>
              </button>
            </div>
          </>
        ) : null}
      </>
    );
  }
}

export default CameraCapture;
