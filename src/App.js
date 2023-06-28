import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Participant from "./components/Participant";
import Sidebar from "./components/Sidebar";

// set the current user and pass it to the relevant components
// get (or set) all the users.  (each user that joins is added to the DB - users list)

const fetchConferenceDetails = async (conferenceId) => {
  const response = await fetch(`/conference/${conferenceId}`);
  const conferenceDetails = await response.json();
  return conferenceDetails;
};

export default function App() {
  const [participants, setParticipants] = useState({});
  const conferenceId = "1234"; // get from the system
  const currentParticipant = "111"; // get from the system
  const conferenceDetails = fetchConferenceDetails(conferenceId)

  useEffect(() => {
    const fetchParticipants = async () => {
      const response = await fetch(`/conference/${conferenceId}/participants`);
      const data = await response.json();
      setParticipants(data);
    };

    fetchParticipants();
  }, []);

  return (
    /* ToDo: all the bellow components should be arrainged in a grid/table */
    <div>
      <Header conferenceDetails={conferenceDetails}/>
      <Sidebar participants={participants} />
      {participants.map((participant) => (
        <div key={participant.id}>
          <Participant participant={participant} />
        </div>
      ))}
      // component of button. should get the currentParti as prop and update the correct component?
      <button>שיתוף</button>  {/* ToDo: add handle button */}
      <button>מיקרופון</button>
      <button>מצלמה</button>
    </div>
  );
}
