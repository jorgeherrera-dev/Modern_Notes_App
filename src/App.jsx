import { NotesProvider, useNotesContext } from './context/NotesContext';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

// Componente interno que SI puede usar el contexto
function AppContent() {
  const { notes } = useNotesContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-blue-100">
            <span className="text-4xl">📝</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mis Notas
          </h1>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Organiza tus ideas y pensamientos
          </p>
        </header>

        {/* Main Content */}
        <main className="bg-white rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-sm bg-opacity-95">
          <NoteForm />
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center text-sm">
                {notes.length} {/* ✅ Ahora SÍ está definido */}
              </span>
              Mis Notas
            </h2>
            <NoteList />
          </div>
        </main>
      </div>
    </div>
  );
}

// Componente principal que provee el contexto
function App() {
  return (
    <NotesProvider>
      <AppContent />
    </NotesProvider>
  );
}

export default App;
