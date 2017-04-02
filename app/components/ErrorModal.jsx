var React = require('react');

var ErrorModal = React.createClass({
  render: function(){
    return (
      <div id='error-modal' className='modal fade text-center' role='dialog'>
        <div className='modal-dialog modal-sm'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal'>&times;</button>
              <h4 className='modal-title'>Oops!</h4>
            </div>
            <div className='modal-body'>
              <p>No such city!</p>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ErrorModal;
