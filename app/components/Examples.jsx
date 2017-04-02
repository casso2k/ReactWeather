var React = require('react');
var {Link} = require('react-router-dom');

var Examples = (props) => {
  return (
    <div>
      <h1 className='text-center'>Examples</h1>
      <p className='text-center push-down4'>
        Here are a few example locations to try out:
      </p>
      <ol>
        <li>
          <Link to='/weather?location=Toronto'>Toronto, ON</Link>
        </li>
        <li>
          <Link to='/weather?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
