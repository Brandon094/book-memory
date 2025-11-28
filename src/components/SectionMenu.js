import React from 'react';
import { Home, Heart, User, CheckCircle, ChevronRight, Download } from 'lucide-react';

const SectionMenu = ({
    person,
    sections,
    answers,
    onBack,
    onSelectSection,
    onExportBook,
    onGenerateStory,
    generating,
    isComplete
}) => {
    const totalProgress = () => {
        const total = sections.reduce((sum, s) => sum + s.questions.length, 0);
        const done = Object.values(answers).filter(a => a?.trim()).length;
        return Math.round((done / total) * 100);
    };

    const sectionProgress = (secId) => {
        const sec = sections.find(s => s.id === secId);
        return sec.questions.filter((_, i) => answers[`${secId}-${i}`]?.trim()).length;
    };

    const prog = totalProgress();
    const color = person === 'mama' ? 'pink' : 'blue';

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
            <div className="max-w-4xl mx-auto">
                <button onClick={onBack} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800">
                    <Home className="w-5 h-5" /> Volver
                </button>

                <div className="bg-white rounded-3xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <div className={`inline-block p-4 bg-gradient-to-br from-${color}-400 to-${color}-500 rounded-full shadow-lg mb-4`}>
                            {person === 'mama' ? <Heart className="w-12 h-12 text-white" /> : <User className="w-12 h-12 text-white" />}
                        </div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Recuerdos de {person === 'mama' ? 'Mamá' : 'Papá'}</h1>
                        <p className="text-gray-600">Un viaje a través de tu vida</p>
                    </div>

                    {prog > 0 && (
                        <div className="mb-8 p-6 bg-green-50 rounded-2xl border-2 border-green-200">
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold text-gray-700">Progreso</span>
                                <span className="text-2xl font-bold text-green-600">{prog}%</span>
                            </div>
                            <div className="w-full bg-green-200 rounded-full h-4">
                                <div className="bg-green-500 h-4 rounded-full transition-all" style={{ width: `${prog}%` }} />
                            </div>
                        </div>
                    )}

                    <div className="space-y-4 mb-8">
                        {sections.map((s, i) => {
                            const done = sectionProgress(s.id);
                            const total = s.questions.length;
                            return (
                                <button
                                    key={s.id}
                                    onClick={() => onSelectSection(i)}
                                    className="w-full bg-white border-2 border-gray-200 hover:border-purple-300 rounded-2xl p-6 transition-all hover:shadow-lg text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`bg-gradient-to-br ${s.color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl`}>
                                            {s.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-800">{s.title}</h3>
                                            <p className="text-sm text-gray-600 mb-2">{s.desc}</p>
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                    <div className={`bg-gradient-to-r ${s.color} h-2 rounded-full`} style={{ width: `${(done / total) * 100}%` }} />
                                                </div>
                                                <span className="text-sm font-semibold">{done}/{total}</span>
                                                {done === total && <CheckCircle className="w-5 h-5 text-green-500" />}
                                            </div>
                                        </div>
                                        <ChevronRight className="w-6 h-6 text-gray-400" />
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {isComplete && (
                        <div className="p-6 bg-yellow-50 border-2 border-yellow-300 rounded-2xl">
                            <div className="text-center">
                                <div className="text-5xl mb-3">🎉✨</div>
                                <h3 className="text-2xl font-bold mb-2">¡Libro Completo!</h3>
                                <p className="text-gray-700 mb-4">Ya puedes generar tu historia personalizada con Inteligencia Artificial</p>

                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <button
                                        onClick={onExportBook}
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform font-semibold"
                                    >
                                        <Download className="w-5 h-5" /> Descargar Respuestas
                                    </button>
                                    <button
                                        onClick={onGenerateStory}
                                        disabled={generating}
                                        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform font-semibold disabled:opacity-50"
                                    >
                                        {generating ? '✨ Generando Historia...' : '📖 Generar Historia con IA'}
                                    </button>
                                </div>
                                <p className="text-sm text-gray-600 mt-3">
                                    La IA creará una historia única basada en tus respuestas
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SectionMenu;