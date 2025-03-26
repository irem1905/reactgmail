// import React from 'react'

// function inbox() {
//   return (
//     <div>inbox</div>
//   )
// }

// export default inbox



import React, { useEffect, useState } from "react";

const Inbox = () => {
  const [selectedMails, setSelectedMails] = useState([]);

  useEffect(() => {
    const savedMails = JSON.parse(localStorage.getItem("selectedMails")) || [];
    setSelectedMails(savedMails);
  }, []);

  return (
    <div>
      <h2>Selected Mails</h2>
      {selectedMails.length === 0 ? (
        <p>No mails selected.</p>
      ) : (
        <ul>
          {selectedMails.map((mailId, index) => (
            <li key={index}>Mail ID: {mailId}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inbox;
