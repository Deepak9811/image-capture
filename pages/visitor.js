import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSave,
  faSearch,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

class Visitor extends PureComponent {
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

        <main className="wd-100 main">
          <div className="inf">
            <div className="info">
              <form className="frm">
                <div className="mb-3 input-group">
                  <label
                    htmlFor="exampleInputMobileNumber1"
                    className="form-label wd-100"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="mobile number"
                    placeholder="Mobile Number"
                  />

                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputFirstName1"
                    className="form-label"
                  >
                    First Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputFirstName1"
                    placeholder="First Name"
                    value={this.state.firstName}
                    // onClick={() => this.errMessage()}
                    onChange={(e) =>
                      this.setState({ firstName: e.target.value })
                    }
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="exampleInputFirstName1"
                    className="form-label"
                  >
                    Last Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputFirstName1"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    // onClick={() => this.errMessage()}
                    onChange={(e) =>
                      this.setState({ lastName: e.target.value })
                    }
                  />
                </div>

                {/* {this.state.err_message ? (
            <p className="err_message">{this.state.err_message}</p>
          ) : null} */}
              </form>

              {/* --------------------------------------------------------------------------------- */}
              <div className="ep mgt-5"></div>
              <div className="ext">
                <div className="ex">
                  <Link href="/">
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
                  <Link href="/visitor-reason">
                    <a>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg btne"
                      >
                        Save <FontAwesomeIcon icon={faSave} />
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Visitor;
