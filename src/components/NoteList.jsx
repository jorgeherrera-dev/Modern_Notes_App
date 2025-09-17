import { useNotesContext } from '../context/NotesContext';
import Note from './Note';

function NoteList() {
  const { notes } = useNotesContext();

  if (notes.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <div className="text-6xl mb-4">📝</div>
        <p className="text-gray-600 text-lg font-medium mb-2">
          No hay notas aún
        </p>
        <p className="text-gray-500 text-sm">
          ¡Crea tu primera nota para comenzar!
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {notes.map(note => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
