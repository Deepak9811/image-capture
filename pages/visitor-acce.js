import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCamera,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

class VisitorReason extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="wd-100">
        <header className="wd-100 hd">
          <h1>ABC School Visitor Entry</h1>
        </header>

        <main className="wd-100 main mgi-5">
          <div className="inf">
            <div className="info">
              {/* <form className="frm"> */}
              <h3>First Name : Test Name</h3>
              <h3 className="mgb-5">Mobile Number : 981192905</h3>

              <div className="wd-100 mgt-5">
                <div className="wd-45 st">
                  <Link href="/camera-capture">
                    <a>
                      <div className="wd-100">
                        <h4 className="tx">Visitor</h4>
                        <div className="wd-100 cmerca">
                          <svg viewBox="0 0 512 512">
                            <path
                              fill="currentColor"
                              d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                <div className="wd-45 st">
                  <Link href="/camera-capture">
                    <a>
                      <div className="wd-100">
                        <h4 className="tx">ID Proof</h4>
                        <div className="wd-100 cmerca">
                          <svg viewBox="0 0 512 512">
                            <path
                              fill="currentColor"
                              d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                <div className="wd-45 st">
                  <Link href="/camera-capture">
                    <a>
                      <div className="wd-100">
                        <h4 className="tx">Accessories</h4>
                        <div className="wd-100 cmerca">
                          <svg viewBox="0 0 512 512">
                            <path
                              fill="currentColor"
                              d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                <div className="wd-45 st">
                  <Link href="/camera-capture">
                    <a>
                      <div className="wd-100">
                        <h4 className="tx">Vehicle</h4>
                        <div className="wd-100 cmerca">
                          <svg viewBox="0 0 512 512">
                            <path
                              fill="currentColor"
                              d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>

              {/* {this.state.err_message ? (
            <p className="err_message">{this.state.err_message}</p>
          ) : null} */}
              {/* </form> */}

              {/* --------------------------------------------------------------------------------- */}
              <div className="ep mgt-5"></div>
              <div className="ext">
                <div className="ex">
                  <Link href="/visitor-reason">
                    <a>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg btne"
                      >
                        <FontAwesomeIcon icon={faArrowLeft} /> Back
                      </button>
                    </a>
                  </Link>
                </div>

                <div className="ex emp"></div>

                <div className="ex ">
                  <button type="button" className="btn btn-primary btn-lg btne">
                    Save <FontAwesomeIcon icon={faSave} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default VisitorReason;
