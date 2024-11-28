import React, { useState } from "react";

const ParticipantList = ({ participants, onAddParticipant }) => {
  const [newParticipant, setNewParticipant] = useState("");

  const handleAdd = () => {
    if (newParticipant.trim()) {
      onAddParticipant(newParticipant.trim());
      setNewParticipant("");
    }
  };

  return (
    <div>
      <h2>Participants</h2>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>{participant}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add participant"
        value={newParticipant}
        onChange={(e) => setNewParticipant(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default ParticipantList;
