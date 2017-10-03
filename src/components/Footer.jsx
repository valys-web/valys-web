import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';

const PageFooter = () => (
  <div className="container">
    <footer className="text-center">
      <a className="up-arrow" href="#home" data-toggle="tooltip" title="TO TOP">
        <span className="glyphicon glyphicon-chevron-up" />
      </a><br /><br />
      <Panel className="footer-layout">
        <p className="small">
          Contáctanos<br />
          <span>☎ <a href="tel:+34 658 17 00 73">+34 658 17 00 73</a></span>
          <br />
          <span>
            <i className="glyphicon glyphicon-envelope" />
            {' '}
            <a href="mailto:valys.deli@gmail.com">valys.deli@gmail.com</a>
          </span>
          <br />
          <span>
              <i className="glyphicon glyphicon-map-marker" />
              {' '}
              Madrid, España
          </span>

        </p>
      </Panel>
    </footer>
  </div>
);

export default PageFooter;
