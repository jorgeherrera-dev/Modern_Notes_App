import { createContext, useContext } from 'react';
import useNotes from '../hooks/useNotes';

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const notesData = useNotes();

  return (
    <NotesContext.Provider value={notesData}>{children}</NotesContext.Provider>
  );
}

export function useNotesContext() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotesContext debe usarse dentro de NotesProvider');
  }
  return context;
}
