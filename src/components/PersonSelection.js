import React from 'react';
import { Book, Heart, User, Download } from 'lucide-react';

const PersonSelection = ({ onSelectPerson, onActivateDemo }) => {
    const persons = [
        { id: 'mama', icon: Heart, title: 'Mamá', grad: 'from-pink-400 to-rose-400' },
        { id: 'papa', icon: User, title: 'Papá', grad: 'from-blue-400 to-indigo-400' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
                        <Book className="w-16 h-16 text-purple-600" />
                    </div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Cuaderno de Recuerdos
                    </h1>
                    <p className="text-xl text-gray-600">Un espacio para preservar historias y memorias invaluables</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {persons.map(p => (
                        <button
                            key={p.id}
                            onClick={() => onSelectPerson(p.id)}
                            className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
                        >
                            <div className={`bg-gradient-to-br ${p.grad} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                <p.icon className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">{p.title}</h2>
                            <p className="text-gray-600">Descubre y guarda sus historias</p>
                        </button>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <span className="bg-white px-6 py-3 rounded-full shadow-md text-sm text-gray-600 font-medium">
                        105 preguntas por libro
                    </span>
                </div>

                {/* Botón de demostración */}
                <div className="mt-8 text-center">
                    <button
                        onClick={onActivateDemo}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 font-bold text-lg"
                    >
                        🎭 Ver Demostración Completa
                    </button>
                    <p className="text-sm text-gray-500 mt-3">
                        Mira cómo funciona la app con datos de ejemplo ya completados
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PersonSelection;