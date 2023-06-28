import React from 'react';

export default function ParticipantDetails({participant}) {
  return (
    <div>
      <p>{participant.role}</p>
      <p>{`${participant.title} ${participant.name}`}</p>
    </div>
  );
}