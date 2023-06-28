import React from "react";
// ToDo: include some icons library

export default function Sidebar({ participants }) {
  return (
    <div class="sidebar">
      <img src="path/to/iconIsrael.jpg"></img>
      {/* ToDo: popup to display participants details (from participants prop) */}
      <a href="#">{`אנשים ${participants.length}`}</a>
      {/* ToDo: popup to display conference details, will need to receive the details as a prop in this component */}
      <a href="#">פרטי דיון</a>
      {/* ToDo: receive prop of current or isAdmin. enable popup only if admin. this will allow conference settings for admin only */}
      <a href="#">מנהל דיון</a>
      {/* ToDo: popup for Additional settings and options */}
      <a href="#">הגדרות</a>
      <button>יציאה מהדיון</button>
    </div>
  );
}
