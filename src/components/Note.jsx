import { useState } from 'react';
import { useNotesContext } from '../context/NotesContext';

function Note({ note }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);
  const { deleteNote, editNote } = useNotesContext();

  const handleSave = () => {
    if (editTitle.trim() && editContent.trim()) {
      editNote(note.id, { title: editTitle, content: editContent });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(note.title);
    setEditContent(note.content);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {isEditing ? (
        <div className="p-5">
          <input
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Título..."
          />
          <textarea
            value={editContent}
            onChange={e => setEditContent(e.target.value)}
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            rows="3"
            placeholder="Contenido..."
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={!editTitle.trim() || !editContent.trim()}
              className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
            >
              💾 Guardar
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
            >
              ❌ Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div className="p-5">
          <h3 className="font-semibold text-lg text-gray-800 mb-3 line-clamp-2">
            {note.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-4 leading-relaxed">
            {note.content}
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">{note.createdAt}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 py-1 px-3 rounded-lg text-xs font-medium transition-colors"
              >
                ✏️ Editar
              </button>
              <button
                onClick={() => deleteNote(note.id)}
                className="bg-red-100 hover:bg-red-200 text-red-700 py-1 px-3 rounded-lg text-xs font-medium transition-colors"
              >
                🗑️ Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Note;
