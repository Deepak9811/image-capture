import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSave,
  faSearch,
  faSignInAlt,
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

        <main className="wd-100 main">
          <div className="inf">
            <div className="info">
              <form className="frm">
                <h3>First Name : Test Name</h3>
                <h3 className="mgb-5">Mobile Number : 981192905</h3>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputFirstName1"
                    className="form-label"
                  >
                    Meeting whom
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="" hidden>
                      Open this select menu
                    </option>
                    <option value="1">Ashutosh Puri(IT)</option>
                    <option value="2">Ashish Kumar(HR)</option>
                    <option value="3">Ashish Rawat(IT)</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="exampleInputFirstName1"
                    className="form-label"
                  >
                    Purpose of meeting
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="" hidden>
                      Open this select menu
                    </option>
                    <option value="1">Interview</option>
                    <option value="2">Ashish Kumar(HR)</option>
                    <option value="3">Ashish Rawat(IT)</option>
                  </select>
                </div>

                {/* {this.state.err_message ? (
            <p className="err_message">{this.state.err_message}</p>
          ) : null} */}
              </form>

              {/* --------------------------------------------------------------------------------- */}
              <div className="ep mgt-5"></div>
              <div className="ext">
                <div className="ex">
                  <Link href="/visitor">
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
                  <Link href="/visitor-acce">
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

export default VisitorReason;
