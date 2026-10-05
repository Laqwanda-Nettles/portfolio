import Header from "./Header";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Fortune() {
  let fortunes = [
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

  let index = randomNumber(0, fortunes.length - 1);

  return (
    <div>
      <p>{fortunes[index].emoji}</p>
      <p>Your Fortune: {fortunes[index].text}</p>
    </div>
  );
}

function Footer() {
  let year = new Date().getFullYear();
  return <p>&copy; {year} Ash Ketchum</p>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Pokémon trainer from Pallet Town.</p>
      <Fortune />
      <Footer />
    </div>
  );
}

export default App;
