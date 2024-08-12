import { NoteCard } from "../components";
import { NotesContainer } from "../styles/styles";
import { Note } from "../types/note";

const getAllNotes = (mainNotes: Note[], filter: string) => {
  const pinned = mainNotes.filter(({ isPinned }) => isPinned);
  const normal = mainNotes.filter(({ isPinned }) => !isPinned);

  if (normal.length !== 0 && pinned.length === 0) {
    return (
      <>
        <div className="allNotes__notes-type">
          All Notes<span>({normal.length})</span>
        </div>
        <NotesContainer>
          {normal.map((note) => (
            <NoteCard key={note.id} note={note} type="notes" />
          ))}
        </NotesContainer>
      </>
    );
  }

  if (pinned.length !== 0 && normal.length === 0) {
    return (
      <>
        <div className="allNotes__notes-type">
          Pinned Notes<span>({pinned.length})</span>
        </div>
        <NotesContainer>
          {pinned.map((note) => (
            <NoteCard key={note.id} note={note} type="notes" />
          ))}
        </NotesContainer>
      </>
    );
  }

  if (pinned.length !== 0 && normal.length !== 0) {
    return (
      <>
        <div>
          <div className="allNotes__notes-type">
            Pinned Notes<span>({pinned.length})</span>
          </div>
          <NotesContainer>
            {pinned.map((note) => (
              <NoteCard key={note.id} note={note} type="notes" />
            ))}
          </NotesContainer>
        </div>
        <div>
          <div className="allNotes__notes-type">
            All Notes<span>({normal.length})</span>
          </div>
          <NotesContainer>
            {normal.map((note) => (
              <NoteCard key={note.id} note={note} type="notes" />
            ))}
          </NotesContainer>
        </div>
      </>
    );
  }
};

export default getAllNotes;
