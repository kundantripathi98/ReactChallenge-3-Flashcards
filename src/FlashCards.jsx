import { useState } from "react";
import { questions } from "./App";

function FlashCards() {
  //   const [titles, setTitles] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id, answer) => {
    // setTitles((prevTitles) => ({
    //   [id]: answer,
    // }));

    setSelectedId(id !== selectedId ? id : null);
  };

  return (
    <div className="flashcards">
      {questions.map((item) => (
        <div
          key={item.id}
          className={selectedId === item.id ? "selected" : ""}
          onClick={() => handleClick(item.id, item.answer)}
        >
          {selectedId === item.id ? item.answer : item.question}
          {/* {titles[item.id] || item.question} */}
        </div>
      ))}
    </div>
  );
}

export default FlashCards;
