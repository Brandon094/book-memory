/**
 * Datos de secciones y preguntas del cuaderno
 */
export const SECTIONS = [
    {
        id: 'infancia', title: 'Infancia', icon: '👶', color: 'from-yellow-400 to-orange-400',
        desc: 'Tus primeros años y recuerdos de niñez',
        questions: [
            '¿Dónde naciste y en qué año?', '¿Cómo era tu casa y tu barrio de niño/a?',
            '¿Quiénes eran tus amigos más cercanos y qué juegos jugaban?', '¿Tenías mascotas? ¿Cómo se llamaban?',
            '¿Cuál era tu comida favorita de pequeño/a?', '¿Algún recuerdo especial de la escuela primaria?',
            '¿Qué soñabas ser cuando crecieras?', '¿Cuál era tu juguete favorito?',
            '¿Recuerdas alguna travesura que hiciste de niño/a?', '¿Cómo era tu relación con tus hermanos/primos?',
            '¿Cuál era tu programa de TV o caricatura favorita?', '¿Qué hacías en las vacaciones?',
            '¿Tuviste algún maestro/a que te marcó?', '¿Cuál fue tu primera experiencia memorable?',
            '¿Qué celebraciones familiares recuerdas con más cariño?'
        ]
    },
    {
        id: 'adolescencia', title: 'Adolescencia', icon: '🎒', color: 'from-green-400 to-teal-400',
        desc: 'Tus años de secundaria y juventud',
        questions: [
            '¿Cómo era tu relación con tus hermanos, amigos y padres en esa etapa?',
            '¿Qué música o programas de televisión te gustaban?', '¿Tuviste algún hobby o pasatiempo que recuerdes con cariño?',
            '¿Cuál fue tu primer recuerdo de enamoramiento o crush?', '¿Alguna anécdota divertida o travesura que hiciste?',
            '¿Cómo era tu escuela secundaria?', '¿Participaste en algún equipo deportivo o club?',
            '¿Cuál fue tu primera fiesta o evento social importante?', '¿Qué artistas o bandas te encantaban?',
            '¿Tuviste tu primer trabajo? ¿Cómo fue?', '¿Cuál era tu lugar favorito para salir con amigos?',
            '¿Qué sueños o planes tenías para el futuro?', '¿Algún momento vergonzoso que ahora te haga reír?',
            '¿Cómo manejaste tus primeras responsabilidades?', '¿Qué moda o tendencia seguías en esa época?'
        ]
    },
    {
        id: 'juventud', title: 'Juventud', icon: '🎓', color: 'from-blue-400 to-indigo-400',
        desc: 'Universidad, primeros trabajos y descubrimientos',
        questions: [
            '¿Dónde estudiaste y qué recuerdos guardas de esos años?', '¿Cómo conociste a tus amigos más importantes?',
            '¿Qué trabajos tuviste o qué responsabilidades asumiste por primera vez?',
            '¿Cuál fue tu primer viaje o experiencia fuera de casa?', '¿Cómo era tu relación con la familia extendida?',
            '¿Qué carrera o camino profesional elegiste y por qué?', '¿Tuviste mentores o personas que te inspiraron?',
            '¿Cuáles fueron tus mayores logros en esta etapa?', '¿Algún desafío importante que superaste?',
            '¿Cómo era tu vida social en la universidad/trabajo?', '¿Qué te apasionaba hacer en tu tiempo libre?',
            '¿Tuviste que tomar alguna decisión difícil?', '¿Cómo te veías a ti mismo/a en el futuro?',
            '¿Hubo algún momento que cambió tu perspectiva de vida?', '¿Qué te hacía verdaderamente feliz en esos años?'
        ]
    },
    {
        id: 'antes-pareja', title: 'Antes de tu Pareja', icon: '💭', color: 'from-purple-400 to-pink-400',
        desc: 'Tu vida antes de encontrar el amor',
        questions: [
            '¿Recuerdas cómo era tu vida antes de conocer a tu pareja?', '¿Qué cosas te hacían feliz en ese tiempo?',
            '¿Tenías algún sueño o meta específica en esos años?', '¿Cómo describirías tu rutina diaria?',
            '¿Qué buscabas en una relación?', '¿Dónde vivías y cómo era tu hogar?', '¿Qué hacías los fines de semana?',
            '¿Tenías algún proyecto o aspiración importante?', '¿Cómo te imaginabas tu vida futura?',
            '¿Qué te gustaba hacer solo/a?', '¿Cómo era tu círculo de amistades?', '¿Tuviste otras relaciones significativas?',
            '¿Qué te llevó a estar listo/a para encontrar a tu pareja?', '¿Hubo algún momento de reflexión importante?',
            '¿Qué valores eran más importantes para ti entonces?'
        ]
    },
    {
        id: 'encuentro', title: 'Conociendo a tu Pareja', icon: '❤️', color: 'from-red-400 to-pink-400',
        desc: 'La hermosa historia de cómo se conocieron',
        questions: [
            '¿Cómo y dónde conociste a tu pareja?', '¿Cuál fue tu primera impresión?', '¿Qué fue lo primero que te atrajo?',
            '¿Cuándo supiste que era especial?', '¿Cómo fue la primera cita?', '¿Qué pensó tu familia cuando conocieron a tu pareja?',
            '¿Cuál fue el momento en que te enamoraste?', '¿Hubo algún obstáculo que superaron juntos?',
            '¿Cómo fue la propuesta de matrimonio/compromiso?', '¿Qué recuerdos guardas del noviazgo?',
            '¿Cómo planearon su boda o vida juntos?', '¿Cuál fue el mejor regalo que te dio tu pareja?',
            '¿Alguna anécdota divertida del inicio de la relación?', '¿Cómo cambió tu vida después de conocerse?',
            '¿Qué consejo le darías a las parejas jóvenes?'
        ]
    },
    {
        id: 'vida-adulta', title: 'Vida Adulta', icon: '🏠', color: 'from-amber-400 to-orange-400',
        desc: 'Familia, logros y momentos especiales',
        questions: [
            '¿Cuál ha sido uno de los momentos más felices de tu vida?',
            '¿Cuál ha sido uno de los desafíos más grandes que superaste?',
            '¿Qué valores o enseñanzas quieres transmitir a tu familia?',
            '¿Tienes algún secreto o historia que nunca me hayas contado?', '¿Qué lugares te traen recuerdos especiales y por qué?',
            '¿Cómo fue la llegada de tus hijos?', '¿Qué ha sido lo más gratificante de ser padre/madre?',
            '¿Cuál fue tu mayor logro profesional?', '¿Qué tradiciones familiares has creado?',
            '¿Cómo ha evolucionado tu relación con tu pareja?', '¿Qué lecciones has aprendido con los años?',
            '¿Cuál es tu mayor orgullo?', '¿Qué te ha sorprendido de la vida?',
            '¿Cómo has manejado los cambios y transiciones?', '¿Qué consejo te darías a ti mismo/a de joven?'
        ]
    },
    {
        id: 'reflexiones', title: 'Reflexiones y Legado', icon: '✨', color: 'from-violet-400 to-purple-400',
        desc: 'Tu sabiduría y mensaje para el futuro',
        questions: [
            '¿Qué consejos le darías a las nuevas generaciones de nuestra familia?',
            '¿Qué te gustaría que nunca olvidemos de ti?', '¿Qué recuerdos te gustaría que guardemos con más cariño?',
            '¿Cuál crees que es tu mayor contribución al mundo?', '¿Qué te hace sentir más agradecido/a?',
            '¿Cómo te gustaría ser recordado/a?', '¿Qué valores consideras más importantes?', '¿Cuál es tu filosofía de vida?',
            '¿Qué has aprendido sobre el amor?', '¿Qué has aprendido sobre la familia?', '¿Cuál es tu definición de éxito?',
            '¿Qué te da más paz y tranquilidad?', '¿Hay algo que aún sueñas con hacer?',
            '¿Qué palabras de sabiduría quieres compartir?', '¿Cuál es tu mayor esperanza para el futuro de la familia?'
        ]
    }
];