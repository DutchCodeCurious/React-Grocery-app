import React from "react";
import ListItem from "./ListItems";

class List extends React.Component {
  onItemClick(item) {
    console.log(`Clicked ${item.id}: ${item.title}`);
  }

  render() {
    return (
      <ul>
        {this.state.groceryItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            clickItem={() => this.onItemClick(item)}
          />
        ))}
      </ul>
    );
  }
}

export default List;
