import { useState } from "react";

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Fortune() {
  const fortunes = [
    { text: "You will blink within the next 5 minutes.", emoji: "👁️" },
    {
      text: "Look behind you. Just kidding, look back at the screen.",
      emoji: "👀",
    },
    { text: "You will fix one bug and create three more.", emoji: "🐛" },
    {
      text: "Beware of the rogue semicolon hiding in plain sight.",
      emoji: "🕵️‍♂️",
    },
  ];

  const [index, setIndex] = useState(0);

  const newFortune = () => {
    setIndex(randomNumber(0, fortunes.length - 1));
  };

  return (
    <div>
      <p>{fortunes[index].emoji}</p>
      <p>Your Fortune: {fortunes[index].text}</p>
      <button onClick={newFortune}>New Fortune</button>
    </div>
  );
}
export default Fortune;
