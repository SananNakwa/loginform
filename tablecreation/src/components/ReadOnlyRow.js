import React from "react";
const ReadOnlyRow = ({contact, handleEditClick}) => {
    return (
        <tr>
        <td>{contact.firstname}</td>
        <td>{contact.lastname}</td>
        <td>{contact.age}</td>
        <td>{contact.email}</td>
        <td>
          <button type="button" onClick={(event)=> handleEditClick(event,contact)}>Edit</button>
        </td>
      </tr>
    )
}
export default ReadOnlyRow