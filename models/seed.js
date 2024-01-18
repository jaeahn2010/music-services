const opuses = [
    {
        title: "Elegy",
        composer: "Babadjanian-Arno",
        movements: [],
        instrumentation: ["piano"],
        price: 30
    },
    {
        title: "Partita No. 2 in C minor, BWV 826",
        composer: "Bach-Johann-Sebastian",
        movements: [
            {movementNumber: 1, movementTitle: "I. Sinfonia & fuga", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Allemande", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Courante", movementPrice: 75},
            {movementNumber: 4, movementTitle: "IV. Sarabande", movementPrice: 15},
            {movementNumber: 5, movementTitle: "V. Rondeau", movementPrice: 60},
            {movementNumber: 6, movementTitle: "VI. Capriccio", movementPrice: 120},
        ],
        instrumentation: ["piano"],
        price: 375
    },
    {
        title: "Sonata No. 1 in F minor, Op. 2, No. 1",
        composer: "Beethoven-Ludwig-van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Menuetto. Allegretto", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Prestissimo", movementPrice: 90}
        ],
        instrumentation: ["piano"],
        price: 175
    },
    {
        title: "Sonata No. 8 in C minor, Op. 13 'Pathétique'",
        composer: "Beethoven-Ludwig-van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Grave - Allegro di molto e con brio", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Adagio cantabile", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Rondo. Allegro", movementPrice: 75}
        ],
        instrumentation: ["piano"],
        price: 175
    },
    {
        title: "Sonata No. 14 in C-sharp minor, Op. 27, No. 2 'Moonlight'",
        composer: "Beethoven-Ludwig-van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Adagio sostenuto", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Allegretto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Presto agitato", movementPrice: 120}
        ],
        instrumentation: ["piano"],
        price: 175
    },
    {
        title: "Sonata No. 21 in C major, Op. 53 'Waldstein'",
        composer: "Beethoven-Ludwig-van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro con brio", movementPrice: 150},
            {movementNumber: 2, movementTitle: "II. Adagio molto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Rondo. Allegretto moderato", movementPrice: 150}
        ],
        instrumentation: ["piano"],
        price: 325
    },
    {
        title: "Sonata No. 23 in F minor, Op. 57 'Appassionata'",
        composer: "Beethoven-Ludwig-van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro assai", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Andante con moto", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro ma non troppo", movementPrice: 150}
        ],
        instrumentation: ["piano"],
        price: 325
    },
    {
        title: "Sonata No. 2 in G minor, Op. 5, No. 2",
        composer: "Beethoven-Ludwig-van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Adagio sostenuto ed espressivo", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Rondo", movementPrice: 120}
        ],
        instrumentation: ["cello", "piano"],
        price: 225
    },
    {
        title: "Sonata No. 5 in F major, Op. 24 'Spring'",
        composer: "Beethoven-Ludwig-van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Adagio con molto espressivo", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Scherzo. Allegro molto", movementPrice: 60},
            {movementNumber: 4, movementTitle: "IV. Allegro ma non troppo", movementPrice: 75}
        ],
        instrumentation: ["violin", "piano"],
        price: 225
    },
    {
        title: "Carmen",
        composer: "Bizet-Georges",
        movements: [
            {movementNumber: 1, movementTitle: "I. L'amour est un oiseau rebelle (Habañera)", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Près des remparts de Séville (Seguidilla)", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Votre toast", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. La fleur que tu m'avais jetée", movementPrice: 20},
            {movementNumber: 5, movementTitle: "V. Je dis, que rien ne m'épouvante", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 450
    },
    {
        title: "Suite Hébraïque",
        composer: "Bloch-Ernest",
        movements: [
            {movementNumber: 1, movementTitle: "I. Rapsodie", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Processional", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Affirmation", movementPrice: 30}
        ],
        instrumentation: ["viola", "piano"],
        price: 80
    },
    {
        title: "Aria",
        composer: "Bozza-Eugene",
        movements: [],
        instrumentation: ["saxophone", "piano"],
        price: 15
    },
    {
        title: "Quartet No. 3 in C minor, Op. 60",
        composer: "Brahms-Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro non troppo", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Scherzo. Allegro", movementPrice: 75},
            {movementNumber: 3, movementTitle: "III. Andante", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Finale. Allegro comodo", movementPrice: 75}
        ],
        instrumentation: ["violin", "viola", "cello", "piano"],
        price: 250
    },
    {
        title: "Sonata No. 2 in E-flat major, Op. 120, No. 2",
        composer: "Brahms-Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro amabile", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Allegro appassionato", movementPrice: 75},
            {movementNumber: 3, movementTitle: "III. Andante con moto", movementPrice: 60}
        ],
        instrumentation: ["clarinet", "piano"],
        price: 175
    },
    {
        title: "Scherzo No. 2 in B-flat minor, Op. 31",
        composer: "Chopin-Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Ballade No. 4 in F minor, Op. 52",
        composer: "Chopin-Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Polonaise in A-flat major, Op. 53 'Heroic'",
        composer: "Chopin-Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Sonata, Op. 19",
        composer: "Creston-Paul",
        movements: [
            {movementNumber: 1, movementTitle: "I. With vigor", movementPrice: 180},
            {movementNumber: 2, movementTitle: "II. With tranquility", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. With gaiety", movementPrice: 180}
        ],
        instrumentation: ["saxophone", "piano"],
        price: 400
    },
    {
        title: "Fêtes galantes",
        composer: "Debussy-Claude",
        movements: [
            {movementNumber: 1, movementTitle: "I. En sourdine", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Clair de lune", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Fantoches", movementPrice: 45}
        ],
        instrumentation: ["voice", "piano"],
        price: 90
    },
    {
        title: "Suite Bergamasque",
        composer: "Debussy-Claude",
        movements: [
            {movementNumber: 3, movementTitle: "III. Clair de lune", movementPrice: 45},
        ],
        instrumentation: ["piano"],
        price: 200
    },
    {
        title: "Concerto in B minor, Op. 104",
        composer: "Dvorák-Antonin",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Adagio ma non troppo", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro moderato", movementPrice: 90}
        ],
        instrumentation: ["cello", "orchestra"],
        price: 225
    },
    {
        title: "Sonata in A major",
        composer: "Franck-César",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro ben moderato", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Allegro", movementPrice: 150},
            {movementNumber: 3, movementTitle: "III. Ben moderato", movementPrice: 60},
            {movementNumber: 4, ovementTitle: "IV. Allegretto poco mosso", movementPrice: 120}
        ],
        instrumentation: ["violin", "piano"],
        price: 400
    },
    {
        title: "Rhapsody in Blue (arr. Ahn-Benton)",
        composer: "Gershwin-George",
        movements: [],
        instrumentation: ["piano"],
        price: 360
    },
    {
        title: "Danzas argentinas",
        composer: "Ginastera-Alberto",
        movements: [
            {movementNumber: 1, movementTitle: "I. Danza del viejo boyero", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Danza de la moza donosa", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Danza del gaucho matrero", movementPrice: 180}
        ],
        instrumentation: ["piano"],
        price: 250
    },
    {
        title: "Concerto in C major, Op. 48",
        composer: "Kabalevsky-Dmitri",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro molto e con brio", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Andante sostenuto", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Presto assai", movementPrice: 150}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 300
    },
    {
        title: "Mephisto Waltz No. 1",
        composer: "Liszt-Franz",
        movements: [],
        instrumentation: ["piano"],
        price: 300
    },
    {
        title: "Rigoletto-paraphrase",
        composer: "Liszt-Franz",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Totentanz (arr. Ahn-Benton)",
        composer: "Liszt-Franz",
        movements: [],
        instrumentation: ["piano"],
        price: 420
    },
    {
        title: "Trio No. 1 in D minor, Op. 49",
        composer: "Mendelssohn-Felix",
        movements: [
            {movementNumber: 1, movementTitle: "I. Molto allegro ed agitato", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Andante con moto tranquillo", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Scherzo. Leggiero e vivace", movementPrice: 90},
            {movementNumber: 4, ovementTitle: "IV. Finale. Allegro assai appassionato", movementPrice: 90}
        ],
        instrumentation: ["violin", "cello", "piano"],
        price: 300
    },
    {
        title: "Don Giovanni, K. 527",
        composer: "Mozart-Wolfgang-Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "Madamina", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Ho capito", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Là ci darem la mano", movementPrice: 15},
            {movementNumber: 4, movementTitle: "Ah fuggi il traditor", movementPrice: 20},
            {movementNumber: 5, movementTitle: "Or sai, chi l'onore", movementPrice: 20},
            {movementNumber: 6, movementTitle: "Dalla sua pace", movementPrice: 15},
            {movementNumber: 7, movementTitle: "Finch'han dal vino", movementPrice: 20},
            {movementNumber: 8, movementTitle: "Batti, batti o bel Masetto", movementPrice: 30},
            {movementNumber: 9, movementTitle: "Deh, vieni alla finestra", movementPrice: 15},
            {movementNumber: 10, movementTitle: "Vedrai, carino", movementPrice: 15},
            {movementNumber: 11, movementTitle: "Il mio tesoro intanto", movementPrice: 20},
            {movementNumber: 12, movementTitle: "Mi tradì quell'alma ingrata", movementPrice: 20},
            {movementNumber: 13, movementTitle: "Non mi dir", movementPrice: 20}
        ],
        instrumentation: ["voice", "orchestra"],
        price: 400
    },
    {
        title: "Pictures at an Exhibition",
        composer: "Mussorgsky-Modest",
        movements: [
            {movementNumber: 1, movementTitle: "Promenade 1", movementPrice: 30},
            {movementNumber: 2, movementTitle: "I. Gnomus", movementPrice: 45},
            {movementNumber: 3, movementTitle: "Promenade 2", movementPrice: 15},
            {movementNumber: 4, movementTitle: "II. Il vecchio castello", movementPrice: 30},
            {movementNumber: 5, movementTitle: "Promenade 3", movementPrice: 15},
            {movementNumber: 6, movementTitle: "III. Tuilleries", movementPrice: 45},
            {movementNumber: 7, movementTitle: "IV. Bydło", movementPrice: 30},
            {movementNumber: 8, movementTitle: "Promenade 4", movementPrice: 15},
            {movementNumber: 9, movementTitle: "V. Балет не вылупившихся птенцов", movementPrice: 40},
            {movementNumber: 10, movementTitle: "VI. Samuel Goldberg und Schmuyle", movementPrice: 30},
            {movementNumber: 11, movementTitle: "Promenade 5", movementPrice: 30},
            {movementNumber: 12, movementTitle: "VII. Limoges", movementPrice: 45},
            {movementNumber: 13, movementTitle: "VIII. Catacombae", movementPrice: 15},
            {movementNumber: 14, movementTitle: "Con mortuis in lingua mortua", movementPrice: 30},
            {movementNumber: 15, movementTitle: "IX. Избушка на курьих ножках", movementPrice: 60},
            {movementNumber: 16, movementTitle: "X. Богатырския ворота", movementPrice: 60}
        ],
        instrumentation: ["piano"],
        price: 500
    },
    {
        title: "Sextet",
        composer: "Poulenc-Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Très vite et emporté", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Divertissement. Andantino", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Finale. Prestissimo", movementPrice: 120}
        ],
        instrumentation: ["flute", "oboe", "clarinet", "bassoon", "horn", "piano"],
        price: 250
    },
    {
        title: "4 Pieces, Op. 4",
        composer: "Prokofiev-Sergei",
        movements: [
            {movementNumber: 4, movementTitle: "IV. Suggestion diabolique", movementPrice: 150}
        ],
        instrumentation: ["piano"],
        price: 300
    },
    {
        title: "Остров мертвых (Isle of the Dead), Op. 29 (arr. Kirkor)",
        composer: "Rachmaninov-Sergei",
        movements: [],
        instrumentation: ["orchestra"],
        price: 420
    },
    {
        title: "Sonata in G minor, Op. 19",
        composer: "Rachmaninov-Sergei",
        movements: [
            {movementNumber: 1, movementTitle: "I. Lento - Allegro moderato", movementPrice: 180},
            {movementNumber: 2, movementTitle: "II. Allegro scherzando", movementPrice: 180},
            {movementNumber: 3, movementTitle: "III. Andante", movementPrice: 90},
            {movementNumber: 4, movementTitle: "IV. Allegro mosso", movementPrice: 210}
        ],
        instrumentation: ["cello", "piano"],
        price: 600
    },
    {
        title: "Erlkönig",
        composer: "Schubert-Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 120
    },
    {
        title: "Sonata, Op. 147",
        composer: "Shostakovich-Dmitri",
        movements: [
            {movementNumber: 1, movementTitle: "I. Moderato", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Allegretto", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Adagio", movementPrice: 30}
        ],
        instrumentation: ["viola", "piano"],
        price: 100
    },
    {
        title: "Мелодія",
        composer: "Skoryk-Myroslav",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 30
    },
    {
        title: "Die Walküre",
        composer: "Wagner-Richard",
        movements: [
            {movementNumber: 1, movementTitle: "Ein Schwert verhieß mir der Vater", movementPrice: 45},
            {movementNumber: 2, movementTitle: "Der Männer Sippe sass hier im Saal", movementPrice: 60},
            {movementNumber: 3, movementTitle: "Winterstürme wichen dem Wonnemond", movementPrice: 45},
            {movementNumber: 4, movementTitle: "Du bist der Lenz", movementPrice: 45},
            {movementNumber: 5, movementTitle: "Siegmund heiss' ich", movementPrice: 60},
            {movementNumber: 6, movementTitle: "Wo in Bergen du dich birgst...So ist es denn aus mit den ewigen Göttern", movementPrice: 60},
            {movementNumber: 7, movementTitle: "Hojotoho! (The ride of the Valkyries)", movementPrice: 75},
            {movementNumber: 8, movementTitle: "Leb' wohl", movementPrice: 60},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 600
    },
]

//seed data -> models/index.js
module.exports = opuses;