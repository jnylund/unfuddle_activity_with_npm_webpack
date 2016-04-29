// Component to show an activity item returned from unfuddle.
import React from 'react';

var Item = React.createClass({
  removeRecord: function(e){
      this.props.handleItemRemove(this);
  },
  render: function() {
        var extraData = "";
        var rec_id = this.props.record_id;
        // Some items have various extra data, this is to grab this data by item type.
        // Could probably be a case statement.
        if(this.props.record_type === "Comment")
        {
          extraData = this.props.record.comment.body;
          rec_id = this.props.record.comment.parent_id;

        }
        if(this.props.record_type === "Changeset")
        {
            extraData = this.props.record.changeset.message;
            rec_id = this.props.record.changeset.parent_id;

        }
        if(this.props.record_type === "Ticket")
        {
            extraData = this.props.record.ticket.summary;
            rec_id = this.props.record.ticket.id;
        }

        return (
            <tr>
              <td >{this.props.event}:</td>
              <td>{this.props.action_date}</td>
              <td>{this.props.description}</td>
              <td >{this.props.person_name}({this.props.person_id})</td>
              <td >{this.props.record_type}</td>
              <td >{rec_id}</td>
              <td >{extraData}</td>

            </tr>
    );
  }
});
export default Item;
