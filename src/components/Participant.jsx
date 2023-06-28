import React from 'react';
import ParticipantDetails from './ParticipantDetails';
import Microphone from './Microphone';

// ToDo: add missing elements and arrainge in grid/table
export default function Participant({participant}) {
  return (
    <div>
      <p>Image</p>
      <ParticipantDetails participant={participant} />
      <Microphone />
    </div>
  );
}
