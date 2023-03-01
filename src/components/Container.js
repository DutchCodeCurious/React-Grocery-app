import React from "react";
import List from "./List";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "Banaan" },
        { id: 2, title: "Appel" },
        { id: 3, title: "Kiwi" },
        { id: 4, title: "Mandarijn" },
      ],
    };
  }
  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

export default Container;
