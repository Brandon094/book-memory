import React from 'react';
import { Home, Save, CheckCircle, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const QuestionSection = ({
    person,
    section,
    sections,
    answers,
    demoMode,
    saveMsg,
    story,
    generating,
    onShowMenu,
    onSaveAnswers,
    onChangeAnswer,
    onNavigateSection,
    onExportBook,
    onGenerateStory,
    onExportStory,
    isComplete,
    showApiKeyInput,
    apiKey,
    onApiKeyChange
}) => {
    const curr = sections[section];
    const color = person === 'mama' ? 'pink' : 'blue';

    const totalProgress = () => {
        const total = sections.reduce((sum, s) => sum + s.questions.length, 0);
        const done = Object.values(answers).filter(a => a?.trim()).length;
        return Math.round((done / total) * 100);
    };

    const sectionProgress = (secId) => {
        const sec = sections.find(s => s.id === secId);
        return sec.questions.filter((_, i) => answers[`${secId}-${i}`]?.trim()).length;
    };

    const secDone = sectionProgress(curr.id);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
                    {/* Badge de modo demo */}
                    {demoMode && (
                        <div className="mb-4 p-3 bg-indigo-50 border-2 border-indigo-300 rounded-xl text-center">
                            <p className="text-indigo-700 font-semibold text-sm">
                                🎭 Modo Demostración
                            </p>
                        </div>
                    )}

                    <div className="flex justify-between mb-4">
                        <button onClick={onShowMenu} className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                            <Home className="w-5 h-5" /> Menú
                        </button>
                        <button onClick={onSaveAnswers} className={`bg-gradient-to-r from-${color}-500 to-${color}-600 text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform font-semibold`}>
                            <Save className="w-4 h-4" /> Guardar
                        </button>
                    </div>

                    {saveMsg && <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">{saveMsg}</div>}

                    <div className={`p-6 bg-gradient-to-r ${curr.color} rounded-2xl text-white mb-4`}>
                        <div className="flex items-center gap-4 mb-3">
                            <span className="text-4xl">{curr.icon}</span>
                            <div>
                                <h2 className="text-2xl font-bold">{curr.title}</h2>
                                <p className="text-white/90">{curr.desc}</p>
                            </div>
                        </div>
                        <div className="bg-white/30 rounded-full h-3">
                            <div className="bg-white h-3 rounded-full" style={{ width: `${(secDone / curr.questions.length) * 100}%` }} />
                        </div>
                        <p className="text-sm mt-2">{secDone}/{curr.questions.length} completadas</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Total:</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div className={`bg-gradient-to-r from-${color}-400 to-${color}-600 h-2 rounded-full`} style={{ width: `${totalProgress()}%` }} />
                        </div>
                        <span className="text-sm font-bold">{totalProgress()}%</span>
                    </div>
                </div>

                {isComplete && (
                    <div className="mb-6 p-6 bg-yellow-50 border-2 border-yellow-300 rounded-3xl text-center">
                        <div className="text-5xl mb-3">🎉✨🎊</div>
                        <h3 className="text-2xl font-bold mb-2">¡Libro Completo!</h3>
                        <p className="text-gray-700 mb-3">{person === 'mama' ? 'Mamá' : 'Papá'}, gracias por compartir tu historia. Cada palabra es un tesoro invaluable.</p>
                        <p className="text-lg font-bold text-gray-800 mb-4">Con todo mi amor, Brandon ❤️</p>

                        {/* Input para API Key */}
                        {showApiKeyInput && (
                            <div className="mb-4 p-4 bg-white rounded-xl border-2 border-indigo-200 text-left">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    API Key de Anthropic:
                                </label>
                                <input
                                    type="password"
                                    value={apiKey}
                                    onChange={(e) => onApiKeyChange(e.target.value)}
                                    placeholder="sk-ant-..."
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 mb-2"
                                />
                                <p className="text-xs text-gray-600">
                                    Obtén tu API key en: <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">console.anthropic.com</a>
                                </p>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={onExportBook}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform font-bold"
                            >
                                <Download className="w-5 h-5" /> Descargar Respuestas
                            </button>
                            <button
                                onClick={onGenerateStory}
                                disabled={generating}
                                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform font-bold disabled:opacity-50"
                            >
                                {generating ? '✨ Generando...' : '📖 Generar Historia'}
                            </button>
                        </div>
                    </div>
                )}

                {/* Sección de historia generada */}
                {story && (
                    <div className="mb-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-8 shadow-xl">
                        <div className="text-center mb-6">
                            <div className="text-5xl mb-3">📖✨</div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">
                                La Historia de {person === 'mama' ? 'Mamá' : 'Papá'}
                            </h3>
                            <p className="text-gray-600">Un cuento generado con amor e inteligencia artificial</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 mb-6 max-h-96 overflow-y-auto prose prose-lg max-w-none">
                            <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                                {story}
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={onExportStory}
                                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:scale-105 transition-transform font-bold"
                            >
                                <Download className="w-5 h-5" /> Descargar Historia
                            </button>
                        </div>
                    </div>
                )}

                <div className="bg-white rounded-3xl shadow-xl p-8">
                    <div className="space-y-6">
                        {curr.questions.map((q, i) => {
                            const key = `${curr.id}-${i}`;
                            const ans = answers[key] || '';
                            const done = ans.trim();
                            return (
                                <div key={key}>
                                    <div className="flex gap-3 mb-2">
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${done ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                                            {done ? <CheckCircle className="w-5 h-5" /> : i + 1}
                                        </div>
                                        <label className="flex-1 font-semibold text-gray-800">{q}</label>
                                    </div>
                                    <textarea
                                        value={ans}
                                        onChange={(e) => onChangeAnswer(curr.id, i, e.target.value)}
                                        className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 min-h-28 resize-y"
                                        placeholder="Comparte tu recuerdo aquí 😊"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-between mt-8 pt-6 border-t-2">
                        <button
                            onClick={() => { onNavigateSection(Math.max(0, section - 1)); window.scrollTo(0, 0); }}
                            disabled={section === 0}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-xl disabled:opacity-40 hover:bg-gray-200 font-semibold"
                        >
                            <ChevronLeft className="w-5 h-5" /> Anterior
                        </button>
                        {section < sections.length - 1 ? (
                            <button
                                onClick={() => { onNavigateSection(section + 1); window.scrollTo(0, 0); }}
                                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-${color}-500 to-${color}-600 text-white rounded-xl hover:scale-105 transition-transform font-semibold`}
                            >
                                Siguiente <ChevronRight className="w-5 h-5" />
                            </button>
                        ) : (
                            <button onClick={() => { onShowMenu(); window.scrollTo(0, 0); }} className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl hover:scale-105 transition-transform font-semibold">
                                <CheckCircle className="w-5 h-5" /> Resumen
                            </button>
                        )}
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <div className="inline-flex gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                        {sections.map((s, i) => {
                            const done = sectionProgress(s.id) === s.questions.length;
                            return (
                                <button
                                    key={s.id}
                                    onClick={() => { onNavigateSection(i); window.scrollTo(0, 0); }}
                                    className={`rounded-full transition-all ${i === section ? 'w-8 h-3 bg-gradient-to-r ' + s.color : done ? 'w-3 h-3 bg-green-500' : 'w-3 h-3 bg-gray-300'}`}
                                    title={s.title}
                                />
                            );
                        })}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Sección {section + 1} de {sections.length}</p>
                </div>
            </div>
        </div>
    );
};

export default QuestionSection;