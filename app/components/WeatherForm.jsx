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
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='form-group'>
          <input type='text' className='form-control' ref='location' />
          <br />
          <input type="submit" className='btn btn-warning' style={{width: '30em'}} value="Get Weather" />
        </div>
      </form>
    )
  }
});

module.exports = WeatherForm;
