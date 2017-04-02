var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  onLocationChange: function(e){
    this.props.onChange(this.refs.location.value);
  },
  render: function(){
    return (
      <form>
        <div className='form-group'>
          <input type='text' className='form-control' ref='location' onKeyUp={this.onLocationChange} />
          <br />
          <button type='button' className='btn btn-info btn-block' onClick={this.onFormSubmit} data-toggle={this.props.dataToggle} data-target={this.props.dataTarget}>Get Weather</button>
        </div>
      </form>
    )
  }
});
// modal and #error-modal
module.exports = WeatherForm;
