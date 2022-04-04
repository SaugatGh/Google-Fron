import React from "react";

import "../footer/footer.css";

const Footer = () => {
  return (
    <>
    <div className="nepal">
      <hr />
      <h2>Nepal</h2>
     
      </div>
      <footer>
        <div className="bottom-footer">
            <div className="right-side">
          <a
            className="Setting"
            target="_blank"
            href="https://policies.google.com/terms?hl=en-NP&fg=1"
          >
            Settings
          </a>
          <a
            className="Terms"
            target="_blank"
            href="https://policies.google.com/terms?hl=en-NP&fg=1"
          >
            Terms
          </a>
          <a
            className="Privacy"
            target="_blank"
            href="https://policies.google.com/privacy?hl=en-NP&fg=1"
          >
            Privacy
          </a>
          </div>
          <div className="left-side">
          <a
            className="How-search-works"
            target="_blank"
            href="https://google.com/search/howsearchworks/?fg=1"
          >
            How Search Works
          </a>
          <a
            className="Business"
            target="_blank"
            href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
          >
            Business
          </a>
          <a
          className="Adversiting"
            href="https://www.google.com/intl/en_np/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            target="_blank"
          >
            Adversiting
          </a>
          <a
            className="About"
            target="_blank"
            href="https://about.google/?utm_source=google-NP&utm_medium=referral&utm_campaign=hp-footer&fg=1"
          >
            About
          </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
