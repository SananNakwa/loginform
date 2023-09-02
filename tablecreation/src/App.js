import React, {useState,Fragment} from "react";
import {nanoid} from 'nanoid';
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import "./App.css";
import data from "./mock-data.json";
const App = () => {
  const [contacts, setContacts]=useState(data);
  const [addFormData, setAddFormData]=useState({
    firstname: '',
    lastname: '',
    age: '',
    email: '',
  });
  const [editFormData,setEditFormData]=useState({
    firstname: '',
    lastname: '',
    age: '',
    email: '',
  })
  const [editContactId, setEditContactId] = useState(null);


  const handleAddFormChange =(event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData ={...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleEditFormChange=(event) => {
    event.preventDefault();
    const fieldName=event.target.getAttribute("name");
    const fieldValue=event.target.value;

    const newFormData= {...editFormData};
    newFormData[fieldName]=fieldValue;

    setEditFormData(newFormData);
  }
const handleAddFormSubmit = (event) => {
  event.preventDefault();

  const newContact = {
    id: nanoid(),
    firstname: addFormData.firstname,
    lastname: addFormData.lastname,
    age: addFormData.age,
    email: addFormData.email
  };
 

 
  const newContacts = [...contacts,newContact];
  setContacts(newContacts);
};
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedcontact = {
      id: editContactId,
      firstname: editFormData.firstname,
      lastname: editFormData.lastname,
      age: editFormData.age,
      email:editFormData.email,
    }
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=> contact.id===editContactId);

    newContacts[index] = editedcontact;

    setContacts(newContacts);
    setEditContactId(null);
  }
const handleEditClick = (event,contact) => {
  event.preventDefault();
  setEditContactId(contact.id);

  const formValues = {
    firstname: contact.firstname,
    lastname: contact.lastname,
    age: contact.age,
    email: contact.email,

  }
  setEditFormData(formValues);
};
return (
<div className="app-container">
  <h2>Add a content</h2>
  <form>
    <input type="text" name="firstname" required="required" placeholder="enter first name" onChange={handleAddFormChange}/>
    <input type="text" name="lastname" required="required" placeholder="enter last name" onChange={handleAddFormChange}/>
    <input type="text" name="age" required="required" placeholder="enter age" onChange={handleAddFormChange}/>
    <input type="text" name="email" required="required" placeholder="enter email" onChange={handleAddFormChange}/>
    <button type="submit">ADD</button>
  </form>
  <form onSubmit={handleEditFormSubmit}>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact)=>(
        <Fragment>
          {editContactId === contact.id ? (
          <EditableRow  editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>
          ) : (
             <ReadOnlyRow contact={contact} 
             handleEditClick={handleEditClick}/>
             )}
        </Fragment>
      ))}
     
    </tbody>
  </table>
  </form>
</div>
)
};

export default App;
