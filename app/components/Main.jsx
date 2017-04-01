var React = require('react');
var Nav = require('./Nav.jsx');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-2" style={{float: 'none', margin: '0 auto'}}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
