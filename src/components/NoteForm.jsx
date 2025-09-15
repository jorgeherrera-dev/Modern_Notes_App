import { useState } from 'react';
import { useNotesContext } from '../context/NotesContext';

function NoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote } = useNotesContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addNote(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 mb-8"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">➕ Nueva Nota</h2>
      
      <input
        type="text"
        placeholder="Título de la nota..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
      />
      
      <textarea
        placeholder="Escribe el contenido de tu nota aquí..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all placeholder-gray-400"
        rows="4"
      />
      
      <button 
        type="submit"
        disabled={!title.trim() || !content.trim()}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:transform-none"
      >
        📝 Crear Nota
      </button>
    </form>
  );
}

export default NoteForm;