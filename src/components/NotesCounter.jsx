import { useNotesContext } from '../context/NotesContext';

function NotesCounter() {
  const { notes } = useNotesContext();
  
  return (
    <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center text-sm">
      {notes.length}
    </span>
  );
}

export default NotesCounter;