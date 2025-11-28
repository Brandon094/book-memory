export const exportBook = (person, answers, sections) => {
    let txt = `CUADERNO DE RECUERDOS - ${person === 'mama' ? 'MAMÁ' : 'PAPÁ'}\n${'='.repeat(50)}\n\n`;
    sections.forEach(s => {
        txt += `${s.icon} ${s.title.toUpperCase()}\n${'-'.repeat(50)}\n\n`;
        s.questions.forEach((q, i) => {
            txt += `P: ${q}\nR: ${answers[`${s.id}-${i}`] || '(Sin respuesta)'}\n\n`;
        });
        txt += '\n';
    });
    txt += `\n${'='.repeat(50)}\nCon todo mi amor, Brandon ❤️\nGracias por compartir tu historia conmigo.\n`;

    downloadFile(txt, `recuerdos-${person}-${new Date().toISOString().split('T')[0]}.txt`);
};

export const exportStory = (person, story) => {
    if (!story) return;

    let txt = `LA HISTORIA DE ${person === 'mama' ? 'MAMÁ' : 'PAPÁ'}\n`;
    txt += `${'='.repeat(50)}\n\n`;
    txt += story;
    txt += `\n\n${'='.repeat(50)}\n`;
    txt += `Historia generada con amor por Brandon ❤️\n`;
    txt += `Fecha: ${new Date().toLocaleDateString()}\n`;

    downloadFile(txt, `historia-${person}-${new Date().toISOString().split('T')[0]}.txt`);
};

const downloadFile = (content, filename) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
};