import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faUserAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: this.getCurrentDate(),
    };
  }

  getCurrentDate() {
    let newDate = new Date();
    var hour = newDate.getHours();
    var minute = newDate.getMinutes();

    return `${hour}:${minute}`;
  }

  render() {
    return (
      <div className="wd-100">
        <header className="wd-100 hd">
          <h1>ABC School</h1>
        </header>

        <main className="wd-100 main">
          <div className="inf">
            <div className="info">
              <Link href="/visitor">
                <a>
                  <button type="button" class="btn btn-primary btn-lg">
                    Visitor Entry
                  </button>
                </a>
              </Link>

              <Link href="/appointments">
                <a>
                  <button type="button" class="btn btn-primary btn-lg">
                    Appointments
                  </button>
                </a>
              </Link>

              <Link href="/support-staff">
                <a>
                  <button type="button" class="btn btn-primary btn-lg">
                    Support Staff
                  </button>
                </a>
              </Link>

              <Link href="/Courier">
                <a>
                  <button type="button" class="btn btn-primary btn-lg">
                    Courier
                  </button>
                </a>
              </Link>

              <div className="ep"></div>
              <div className="ext">
                <div className="ex">
                  <button type="button" class="btn btn-primary btn-lg btne">
                    Exit <FontAwesomeIcon icon={faSignOutAlt} />
                  </button>
                </div>

                <div className="ex fnt">{this.state.currentTime}</div>

                <div className="ex fnt">Vizsense</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
