import React from "react";

const EditableRow = ({editFormData, handleEditFormChange}) => {
    return (
        <tr>
            <td>
            <input type="text" name="firstname" required="required" placeholder=" enter firstname" value={editFormData.firstname} onChange={handleEditFormChange} />
            </td>
            <td>
            <input type="text" name="lastname" required="required" placeholder=" enter lastname" value={editFormData.lastname} onChange={handleEditFormChange}/>
            </td>
            <td>
            <input type="text" name="age" required="required" placeholder=" enter age" value={editFormData.age} onChange={handleEditFormChange}/>
            </td>
            <td>
            <input type="text" name="email" required="required" placeholder=" enter email" value={editFormData.email} onChange={handleEditFormChange}/>
            </td>
            <td>
                <button type="submit">Save</button>
            </td>
        </tr>

    )
}
export default EditableRow