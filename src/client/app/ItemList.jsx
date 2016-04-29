import React from 'react';
import Item from './Item.jsx';

// Component to render list of items.

var ItemList = React.createClass({
  render: function() {
   var self = this;
   var itemNodes = this.props.data.map(function(item) {
      var hsr = self.props.onItemRemove;
      var personName = "";
      // some items dont have associated people
      if (self.props.people[item.person_id] != null)
        personName = self.props.people[item.person_id];

      return (
        <Item key={item.id}
          id={item.id}
          action_date={item.created_at}
          event={item.event}
          description={item.description}
          person_id={item.person_id}
          person_name={personName}
          record_type ={item.record_type}
          record={item.record}
          >
        </Item>
      );
    });
    return (
      <div className="itemList">
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Action</th>
              <th>Date</th>
              <th>Description</th>
              <th>Person</th>
              <th>Record Type</th>
              <th>Record ID</th>
              <th>Data</th>
            </tr>
            {itemNodes}
          </tbody>
        </table>
      </div>
    );
  }
});
export default ItemList;
