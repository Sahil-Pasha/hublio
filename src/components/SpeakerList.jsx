import React from "react";
import SpeakerItem from "./SpeakerItem";

const SpeakerList = ({ speakers, handleSelect, selectedSpeakers }) => {
  return (
    <div style={{ margin: "10px" }}>
      {speakers.map((speaker) => (
        <SpeakerItem
          key={speaker.id}
          speaker={speaker}
          handleSelect={handleSelect}
          isSelected={selectedSpeakers?.includes(speaker.id)}
        />
      ))}
    </div>
  );
};

export default SpeakerList;
