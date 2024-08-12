import React, { FC } from "react";
import { Note } from "../../types/note";
import { NotesContainer } from "../../styles/styles";
import NoteCard from "../NoteCard/NoteCard";

interface MainWrapperProps {
  notes: Note[];
  type: string | undefined;
}

const MainWrapper: FC<MainWrapperProps> = ({ notes, type }) => {
  return (
    <NotesContainer>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} type={type} />
      ))}
    </NotesContainer>
  );
};

export default MainWrapper;
