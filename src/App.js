// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Header from "./components2/Header";
import Keep from "./components2/Keep";
import Note from "./components2/Note";
// import Counter from "./components/Counter";
// import DigitalClock from "./components/DigitalClock";
// import Parent from "./components/Parent";
// import CounterOne from "./components/CounterOne";
function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prev) => {
      return [...prev, note];
    });
  };
  const onDelete = (id) => {
    setAddItem((oldData) => {
      oldData.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <Keep passnote={addNote} />
      {/* <Note /> */}
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            DeleteItem={onDelete}
          />
        );
      })}
      {/* <Parent /> */}
      {/* <DigitalClock /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
