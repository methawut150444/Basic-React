import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function CreateCard(contacts) {
  return (
    <Card
      // ต้องมีprimary key ด้วยไม่งั้นโปรแกรมจะมองว่าข้อมูลซ้ำ
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
