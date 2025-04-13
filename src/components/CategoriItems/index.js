
import React, { Component } from "react";
import "./index.css";

class CategoriItems extends Component {
  constructor(props) {
    super(props);
    const { name, item_count, image_url } = props.items;
    this.state = {
      editMode: false,
      editedName: name,
      editedCount: item_count,
      editedImage: image_url,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onClickEdit = () => {
    this.setState({ editMode: true });
  };

  onClickSave = () => {
    // const { oneditItem, items } = this.props;
    const { items, ondeleteitem, oneditItem } = this.props;

    const { editedName, editedCount, editedImage } = this.state;

    const updatedData = {
      name: editedName,
      item_count: editedCount,
      image_url: editedImage,
    };

    oneditItem(items.id, updatedData);
    this.setState({ editMode: false });
  };

  onClickDelete = () => {
    const { ondeleteitem, items } = this.props;
    ondeleteitem(items.id);
  };

  render() {
    const { editMode, editedName, editedCount, editedImage } = this.state;
    const { items } = this.props;

    return (
      <li className="list-container">
        {editMode ? (
          <>
            <input
              type="text"
              name="editedName"
              value={editedName}
              onChange={this.handleInputChange}
              className="edit-input"
            />
            <input
              type="number"
              name="editedCount"
              value={editedCount}
              onChange={this.handleInputChange}
              className="edit-input"
            />
            <input
              type="text"
              name="editedImage"
              value={editedImage}
              onChange={this.handleInputChange}
              className="edit-input"
            />
            <button className="button-save" onClick={this.onClickSave}>
              Save
            </button>
          </>
        ) : (
          <>
            <img src={items.image_url} className="imges-size" alt={items.name} />
            <h1 className="heading-style">{items.name}</h1>
            <p>Items: {items.item_count}</p>
            <div>
            <button className="button-edit" onClick={this.onClickEdit}>
              Edit Item
            </button>
            <button className="button-delete" onClick={this.onClickDelete}>
              Delete Item
            </button>
            </div>
            
          </>
        )}
      </li>
    );
  }
}

export default CategoriItems;













