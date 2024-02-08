import { useState } from "react";
import { NewNoteCard } from "./NewNoteCard";
import { NoteCard } from "./NoteCard";
import logo from "./assets/logo-nlw-expert.svg";

export const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      date: new Date(),
      content: "Hello World",
    },
    {
      id: 2,
      date: new Date(2023, 4, 1),
      content: "Test",
    },
    {
      id: 3,
      date: new Date(2024, 1, 2),
      content: "Test2",
    },
  ]);

  function onNoteCreated(content: string) {
    const newNote = {
      id: Math.random(),
      date: new Date(),
      content: content,
    };
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="nlw-expert-logo" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-700"></div>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        {notes.map((note) => {
          return (
            <NoteCard key={note.id} date={note.date} content={note.content} />
          );
        })}
      </div>
    </div>
  );
};
