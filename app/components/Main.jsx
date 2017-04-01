var React = require('react');
var Nav = require('./Nav.jsx');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-4" style={{float: 'none', margin: '0 auto'}}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
