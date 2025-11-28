import React, { useState, useEffect } from 'react';
import PersonSelection from './components/PersonSelection';
import SectionMenu from './components/SectionMenu';
import QuestionSection from './components/QuestionSection';
import { SECTIONS } from './data/sections';
import { DEMO_ANSWERS } from './data/demoData';
import { exportBook, exportStory } from './utils/exportUtils';
import './utils/storage';

const App = () => {
    const [person, setPerson] = useState(null);
    const [section, setSection] = useState(0);
    const [answers, setAnswers] = useState({});
    const [saveMsg, setSaveMsg] = useState('');
    const [showMenu, setShowMenu] = useState(true);
    const [story, setStory] = useState('');
    const [generating, setGenerating] = useState(false);
    const [demoMode, setDemoMode] = useState(false);

    // API KEY FIJA - Reemplaza con tu key real
    const API_KEY = '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';

    useEffect(() => {
        if (person) loadAnswers();
    }, [person]);

    const loadAnswers = async () => {
        try {
            const result = await window.storage.get(`answers-${person}`);
            if (result) setAnswers(JSON.parse(result.value));
        } catch (e) {
            console.log('Sin respuestas previas');
        }
    };

    const saveAnswers = async () => {
        try {
            await window.storage.set(`answers-${person}`, JSON.stringify(answers));
            setSaveMsg('✓ Guardado');
            setTimeout(() => setSaveMsg(''), 2500);
        } catch (e) {
            setSaveMsg('✗ Error');
        }
    };

    const handleChange = (secId, qIdx, val) => {
        setAnswers(prev => ({ ...prev, [`${secId}-${qIdx}`]: val }));
    };

    const activateDemo = () => {
        setAnswers(DEMO_ANSWERS);
        setDemoMode(true);
        setPerson('mama');
        setShowMenu(true);
    };

    const generateStory = async () => {
        setGenerating(true);
        setStory('');

        try {
            let context = `Eres un escritor profesional. Crea una historia emotiva y narrativa basada en los recuerdos de ${person === 'mama' ? 'mamá' : 'papá'}. Usa las siguientes respuestas:\n\n`;

            SECTIONS.forEach(s => {
                context += `${s.title}:\n`;
                s.questions.forEach((q, i) => {
                    const ans = answers[`${s.id}-${i}`];
                    if (ans?.trim()) {
                        context += `- ${q}: ${ans}\n`;
                    }
                });
                context += '\n';
            });

            context += `\nINSTRUCCIONES IMPORTANTES:
- Escribe en PRIMERA PERSONA, como si ${person === 'mama' ? 'mamá' : 'papá'} estuviera contando su vida
- Usa un tono emotivo, cálido y personal
- Incluye diálogos naturales y descripciones vívidas
- Estructura la historia de forma narrativa
- Aproximadamente 800-1200 palabras
- Finaliza con un mensaje de amor hacia la familia, especialmente hacia Brandon
- Mantén un lenguaje natural y conversacional
- Usa un estilo literario hermoso pero accesible`;

            console.log('Generando historia con IA...');

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: 'Eres un escritor profesional especializado en historias de vida familiares y emotivas. Escribe en primera persona con un tono cálido, personal y lleno de amor familiar.'
                        },
                        {
                            role: 'user',
                            content: context
                        }
                    ],
                    max_tokens: 2000,
                    temperature: 0.8,
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `Error: ${response.status}`);
            }

            const data = await response.json();

            if (data.choices && data.choices[0]) {
                setStory(data.choices[0].message.content);
            } else {
                throw new Error('No se pudo generar la historia');
            }

        } catch (error) {
            console.error('Error:', error);
            setStory(`✨ La historia se está generando...\n\n(Si esto tarda mucho, verifica tu conexión a internet)\n\n💡 Tip: Completa más preguntas para obtener una historia más detallada.`);

            // Fallback: generar una historia simple basada en las respuestas
            setTimeout(() => {
                generateFallbackStory();
            }, 3000);
        } finally {
            setGenerating(false);
        }
    };

    // Historia de respaldo si falla la API
    const generateFallbackStory = () => {
        const respuestasCount = Object.values(answers).filter(a => a?.trim()).length;

        let fallbackStory = `**La Historia de ${person === 'mama' ? 'Mamá' : 'Papá'}**\n\n`;
        fallbackStory += `Querida familia,\n\n`;
        fallbackStory += `Hoy quiero compartir con ustedes algunos de mis recuerdos más preciados. `;

        if (respuestasCount > 0) {
            fallbackStory += `He completado ${respuestasCount} preguntas sobre mi vida, y cada respuesta guarda un pedacito de mi corazón.\n\n`;
        } else {
            fallbackStory += `Aún estoy completando mis recuerdos, pero pronto tendré una historia completa para compartir.\n\n`;
        }

        fallbackStory += `Cada momento vivido, cada risa compartida, cada desafío superado, ha formado la persona que soy hoy. `;
        fallbackStory += `Y lo más hermoso de todo es que cada uno de esos momentos me llevó a tener esta familia maravillosa.\n\n`;
        fallbackStory += `Los amo con todo mi corazón,\n${person === 'mama' ? 'Mamá' : 'Papá'} ❤️`;

        setStory(fallbackStory);
    };

    const isComplete = () => {
        const total = SECTIONS.reduce((sum, s) => sum + s.questions.length, 0);
        return Object.values(answers).filter(a => a?.trim()).length === total;
    };

    if (!person) {
        return <PersonSelection onSelectPerson={setPerson} onActivateDemo={activateDemo} />;
    }

    if (showMenu) {
        return (
            <SectionMenu
                person={person}
                sections={SECTIONS}
                answers={answers}
                onBack={() => setPerson(null)}
                onSelectSection={(index) => { setSection(index); setShowMenu(false); }}
                onExportBook={() => exportBook(person, answers, SECTIONS)}
                onGenerateStory={generateStory}
                generating={generating}
                isComplete={isComplete()}
            />
        );
    }

    return (
        <QuestionSection
            person={person}
            section={section}
            sections={SECTIONS}
            answers={answers}
            demoMode={demoMode}
            saveMsg={saveMsg}
            story={story}
            generating={generating}
            onShowMenu={() => setShowMenu(true)}
            onSaveAnswers={saveAnswers}
            onChangeAnswer={handleChange}
            onNavigateSection={setSection}
            onExportBook={() => exportBook(person, answers, SECTIONS)}
            onGenerateStory={generateStory}
            onExportStory={() => exportStory(person, story)}
            isComplete={isComplete()}
        />
    );
};

export default App;