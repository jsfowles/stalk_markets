import React from 'react';

class NewVendor extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let item = this.refs.item;
    this.props.updateList(item.value);
    item.value = '';
  }

  render() {
    return (
      <div className="center">
        <form ref="todoForm" onSubmit={ (e) => this.handleSubmit(e) }>
          <label>Add Item</label>
          <input ref="item" />
        </form>
      </div>
    )
  }
}

export default NewVendor;
