// --- Section Model ---
// Mirrors the real NMAT demo: every section (even the one-item Reminders,
// Break, and End screens) shares the exact same chrome: dropdown, pagination,
// Attempted counter, grid button, and Previous/Next controls.
const SECTIONS = [
    { key: 'reminders', label: '1. Important Reminders', kind: 'info', total: 1 },
    { key: 'part1', label: '2. Part 1', kind: 'test', total: 160, get timer() { return this.total * 63; } },

    { key: 'end',       label: '3. End Test Page',        kind: 'end', total: 1 }
];

// --- Question Bank ---
// Keyed by `${sectionKey}_${itemNumber}` (e.g. 'part1_1', 'part2_101').
// Any item placed here is rendered with its real stem/choices and is graded
// on the End of Test "View Score and Mistakes" report. Any item NOT listed
// here falls back to a generic placeholder and is excluded from scoring.
//
// Shape of each entry:
// 'part1_81': {
//     subject: 'Quantitative',
//     stem: 'Question text goes here?',
//     choices: { A: '...', B: '...', C: '...', D: '...' },
//     correct: 'A'
// }
const QUESTION_BANK = {
    'part1_1': {
        stem: `1. PRINCIPLE : DOCTRINE :: LIVING:`,
        choices: { A: `will`, B: `dead`, C: `likelihood`, D: `livelihood` },
        correct: 'C'
    },
    'part1_2': {
        stem: `2. SOMNOLENT : NAP :: TRUCULENT :`,
        choices: { A: `sleepwalker`, B: `journey`, C: `war`, D: `mood` },
        correct: 'C'
    },
    'part1_3': {
        stem: `3. REIN : HORSE :: CONTROL PANEL :`,
        choices: { A: `pilot`, B: `bit`, C: `plane`, D: `rider` },
        correct: 'C'
    },
    'part1_4': {
        stem: `4. CUSHION : SOFA :: SHELF`,
        choices: { A: `ledge`, B: `bookcase`, C: `storage`, D: `frame` },
        correct: 'C'
    },
    'part1_5': {
        stem: `5. AESOP : FABLE :: HOMER :`,
        choices: { A: `temple`, B: `donkey`, C: `epic`, D: `Greece` },
        correct: 'C'
    },
    'part1_6': {
        stem: `6. DOZE : SLEEP :: TIPTOE :`,
        choices: { A: `walk`, B: `flat`, C: `shelf`, D: `swim` },
        correct: 'C'
    },
    'part1_7': {
        stem: `7. LAWLESS : ORDER :: CAPTIVE :`,
        choices: { A: `trouble`, B: `punishment`, C: `jail`, D: `freedom` },
        correct: 'C'
    },
    'part1_8': {
        stem: `8. QUICKSILVER : MERCURY :: GOLDBRICK`,
        choices: { A: `worker`, B: `idler`, C: `money`, D: `idol` },
        correct: 'C'
    },
    'part1_9': {
        stem: `9. CUB : BEAR :: JOEY :`,
        choices: { A: `cave`, B: `doll`, C: `kangaroo`, D: `truck` },
        correct: 'C'
    },
    'part1_10': {
        stem: `10. DOG : KENNEL :: BIRD :`,
        choices: { A: `fly`, B: `feather`, C: `aerie`, D: `eagle` },
        correct: 'C'
    },
    'part1_11': {
        stem: `11. SECRET : FURTIVE :: AUDIBLE :`,
        choices: { A: `resonant`, B: `nap`, C: `sack`, D: `ring` },
        correct: 'C'
    },
    'part1_12': {
        stem: `12. VAMP : SHOE :: HOOD :`,
        choices: { A: `jacket`, B: `car`, C: `clean`, D: `crook` },
        correct: 'C'
    },
    'part1_13': {
        stem: `13. CAROUSEL : LUGGAGE :: ESCALATOR :`,
        choices: { A: `raise`, B: `elevator`, C: `people`, D: `building` },
        correct: 'C'
    },
    'part1_14': {
        stem: `14. IRRELEVANT : SIGNIFICANCE :: RELAXED :`,
        choices: { A: `care`, B: `calm`, C: `thoughtful`, D: `asleep` },
        correct: 'C'
    },
    'part1_15': {
        stem: `15. COMPANY : CONGLOMERATE :: METAL :`,
        choices: { A: `alloy`, B: `aluminum`, C: `corporation`, D: `furnace

II. Reading Comprehension. Read the passages and answer
the following questions.

 Selection 1
Filmmaking began when Joseph Nicéphore invented
photography. Since that time, it has been possible to take a
physical image of something. Filmmaking really started when
the Thaumatrope was invented. After that, scientists made
different devices. Phenakistoscopes, Zootropes, Zoetropes,
Praxinoscopes and Kinetoscopes were made. Then, a great
experiment was conducted. Mr.`, E: `Muybridge created a sort of
flip book by setting up a row of cameras and then having an
animal walk across the background. Then he programed every
one of the cameras to go off one after the other. The animal was
photographed in every single position so that people could study
the animal's movements. Later, Mr. Muybridge's pictures were
displayed in the University of Pennsylvania. Once film projectors
were invented, a lot of people could study things such as a
jaguar pouncing, an ostrich walking or a horse trotting. These
things were new to them. Nobody had seen these things before.
Soon, scientists invented a way to record their movements using
a single camera. They no longer had to take a lot of pictures
using a row of cameras. The video camera had been born.` },
        correct: 'C'
    },
    'part1_16': {
        stem: `<b>Selection 1</b><br><br>Filmmaking began when Joseph Nicéphore invented photography. Since that time, it has been possible to take a physical image of something. Filmmaking really started when scientists made different devices. Phenakistoscopes, Zootropes, Zoetropes, Praxinoscopes and Kinetoscopes were made. Then, a great experiment was conducted. Mr. E. Muybridge created a sort of flip book by setting up a row of cameras and then having an animal walk across the background. Then he programed every one of the cameras to go off one after the other. The animal was photographed in every single position so that people could study the animal's movements. Later, Mr. Muybridge's pictures were displayed in the University of Pennsylvania. Once film projectors were invented, a lot of people could study things such as a jaguar pouncing, an ostrich walking or a horse trotting. These things were new to them. Nobody had seen these things before. Soon, scientists invented a way to record their movements using a single camera. They no longer had to take a lot of pictures using a row of cameras. The video camera had been born.<br><br><b>16. Which is the best conclusion of the passage?</b>`,
        choices: { A: `Filmmaking commenced as photography was
invented.`, B: `Scientists invented a way to record movements of
things using a single camera.`, C: `Film projectors were used to study things such as
a pouncing jaguar, an ostrich walking or a horse
trotting.`, D: `None of the above.


Selection 2
A Greek philosopher named Democritus said that all
atoms are small, hard particles. He thought that atoms were
made of a single material formed into different shapes and sizes.
The word "atom “is derived from the Greek word "atomos" which
means "not able to be divided."
In 1803, John Dalton, a school teacher, proposed his
atomic theory. Dalton's theory states that elements (substances
composed of only one type of atom combine in certain
proportions to form compounds).
In 1897, a British scientist named J. J. Thomson
experimented with a cathode-ray tube which had a positively
charged plate. The plate attracted negatively charged particles
that we now call electrons. Rather than being indivisible
particles, Thomson's plum-pudding atomic model states that
atoms contain negatively charged electrons embedded within a
sea of positive charge.
In 1909, Ernest Rutherford conducted an experiment
in which he aimed a beam of positively charged particles at a
thin sheet of gold foil. Most of the particles went straight through
the gold foil, some were deflected and others bounced straight
back. Because some of the particles bounced straight back,
Rutherford was able to show that the center of the atom, the
nucleus, is positively charged and very small. The nucleus
contains protons, which are positively charged, and neutrons,
which are neutral.
In 1913, Niels Bohr, a Danish scientist who worked with
Dr. Rutherford, proposed that electrons move around the
nucleus in certain paths, or energy levels. This model was
improved upon by an Austrian physicist named Erwin
Schröedinger and a German physicist named Werner
Heisenberg. Schröedinger and Heisenberg proposed that
electrons do not move in definite paths around the nucleus, but
are be found in regions around the nucleus called electron
clouds.` },
        correct: 'C'
    },
    'part1_17': {
        stem: `<b>Selection 2</b><br><br>A Greek philosopher named Democritus said that all atoms are small, hard particles. He thought that atoms were made of a single material formed into different shapes and sizes. The word "atom" is derived from the Greek word "atomos" which means "not able to be divided." In 1803, John Dalton, a school teacher, proposed his atomic theory. Dalton's theory states that elements (substances composed of only one type of atom combine in certain proportions to form compounds). In 1897, a British scientist named J. J. Thomson experimented with a cathode-ray tube which had a positively charged plate. The plate attracted negatively charged particles that we now call electrons. Rather than being indivisible particles, Thomson's plum-pudding atomic model states that atoms contain negatively charged electrons embedded within a sea of positive charge. In 1909, Ernest Rutherford conducted an experiment in which he aimed a beam of positively charged particles at a thin sheet of gold foil. Most of the particles went straight through the gold foil, some were deflected and others bounced straight back. Because some of the particles bounced straight back, Rutherford was able to show that the center of the atom, the nucleus, is positively charged and very small. The nucleus contains protons, which are positively charged, and neutrons, which are neutral. In 1913, Niels Bohr, a Danish scientist who worked with Dr. Rutherford, proposed that electrons move around the nucleus in certain paths, or energy levels. This model was improved upon by an Austrian physicist named Erwin Schröedinger and a German physicist named Werner Heisenberg. Schröedinger and Heisenberg proposed that electrons do not move in definite paths around the nucleus, but are be found in regions around the nucleus called electron clouds.<br><br><b>17. The word atom comes from a Greek word
“atomos” which most likely means:</b>`,
        choices: { A: `Very small and hard particles`, B: `Not able to be divided`, C: `Positively charged particles`, D: `None of the above.` },
        correct: 'C'
    },
    'part1_18': {
        stem: `<b>Selection 2</b><br><br>A Greek philosopher named Democritus said that all atoms are small, hard particles. He thought that atoms were made of a single material formed into different shapes and sizes. The word "atom" is derived from the Greek word "atomos" which means "not able to be divided." In 1803, John Dalton, a school teacher, proposed his atomic theory. Dalton's theory states that elements (substances composed of only one type of atom combine in certain proportions to form compounds). In 1897, a British scientist named J. J. Thomson experimented with a cathode-ray tube which had a positively charged plate. The plate attracted negatively charged particles that we now call electrons. Rather than being indivisible particles, Thomson's plum-pudding atomic model states that atoms contain negatively charged electrons embedded within a sea of positive charge. In 1909, Ernest Rutherford conducted an experiment in which he aimed a beam of positively charged particles at a thin sheet of gold foil. Most of the particles went straight through the gold foil, some were deflected and others bounced straight back. Because some of the particles bounced straight back, Rutherford was able to show that the center of the atom, the nucleus, is positively charged and very small. The nucleus contains protons, which are positively charged, and neutrons, which are neutral. In 1913, Niels Bohr, a Danish scientist who worked with Dr. Rutherford, proposed that electrons move around the nucleus in certain paths, or energy levels. This model was improved upon by an Austrian physicist named Erwin Schröedinger and a German physicist named Werner Heisenberg. Schröedinger and Heisenberg proposed that electrons do not move in definite paths around the nucleus, but are be found in regions around the nucleus called electron clouds.<br><br><b>18. Who proposed that electrons move around the
nucleus in certain paths, or energy levels?</b>`,
        choices: { A: `Democritus`, B: `Werner Heisenberg`, C: `Niels Bohr`, D: `None of them.` },
        correct: 'C'
    },
    'part1_19': {
        stem: `<b>Selection 2</b><br><br>A Greek philosopher named Democritus said that all atoms are small, hard particles. He thought that atoms were made of a single material formed into different shapes and sizes. The word "atom" is derived from the Greek word "atomos" which means "not able to be divided." In 1803, John Dalton, a school teacher, proposed his atomic theory. Dalton's theory states that elements (substances composed of only one type of atom combine in certain proportions to form compounds). In 1897, a British scientist named J. J. Thomson experimented with a cathode-ray tube which had a positively charged plate. The plate attracted negatively charged particles that we now call electrons. Rather than being indivisible particles, Thomson's plum-pudding atomic model states that atoms contain negatively charged electrons embedded within a sea of positive charge. In 1909, Ernest Rutherford conducted an experiment in which he aimed a beam of positively charged particles at a thin sheet of gold foil. Most of the particles went straight through the gold foil, some were deflected and others bounced straight back. Because some of the particles bounced straight back, Rutherford was able to show that the center of the atom, the nucleus, is positively charged and very small. The nucleus contains protons, which are positively charged, and neutrons, which are neutral. In 1913, Niels Bohr, a Danish scientist who worked with Dr. Rutherford, proposed that electrons move around the nucleus in certain paths, or energy levels. This model was improved upon by an Austrian physicist named Erwin Schröedinger and a German physicist named Werner Heisenberg. Schröedinger and Heisenberg proposed that electrons do not move in definite paths around the nucleus, but are be found in regions around the nucleus called electron clouds.<br><br><b>19. Ernest Rutherford conducted an experiment, did
several things in that regard, EXCEPT:</b>`,
        choices: { A: `Proposed that electrons do not move in definite
paths around the nucleus.`, B: `Observed that the particles went straight through
the gold foil and some were deflected and others
bounced straight back he aimed a beam of
positively charged particles at a thin sheet of gold
foil.`, C: `Observed that the nucleus contains protons,
which are positively charged, and neutrons, which
are neutral.`, D: `None of the above.


Selection 3

When another old cave is discovered in the south of
France, it is not usually news. Rather, it is an ordinary event.
Such discoveries are so frequent these days that hardly
anybody pays heed to them. However, when the Lascaux cave
complex was discovered in 1940, the world was amazed.
Painted directly on its walls were hundreds of scenes showing
how people lived thousands of years ago. The scenes show
people hunting animals, such as bison or wild cats. Other
images depict birds and, most noticeably, horses, which appear
in more than 300 wall images, by far outnumbering all other
animals.

Early artists drawing these animals accomplished a
monumental and difficult task. They did not limit themselves to
the easily accessible walls but carried their painting materials to
spaces that required climbing steep walls or crawling into
narrow passages in the Lascaux complex. Unfortunately, the
paintings have been exposed to the destructive action of water
and temperature changes, which easily wear the images away.
Because the Lascaux caves have many entrances, air
movement has also damaged the images inside. Although they
are not out in the open air, where natural light would have
destroyed them long ago, many of the images have deteriorated
and are barely recognizable. To prevent further damage, the site
was closed to tourists in 1963,23 years after it was discovered.` },
        correct: 'C'
    },
    'part1_20': {
        stem: `<b>Selection 3</b><br><br>When another old cave is discovered in the south of France, it is not usually news. Rather, it is an ordinary event. Such discoveries are so frequent these days that hardly anybody pays heed to them. However, when the Lascaux cave complex was discovered in 1940, the world was amazed. Painted directly on its walls were hundreds of scenes showing how people lived thousands of years ago. The scenes show people hunting animals, such as bison or wild cats. Other images depict birds and, most noticeably, horses, which appear in more than 300 wall images, by far outnumbering all other animals. Early artists drawing these animals accomplished a monumental and difficult task. They did not limit themselves to the easily accessible walls but carried their painting materials to spaces that required climbing steep walls or crawling into narrow passages in the Lascaux complex. Unfortunately, the paintings have been exposed to the destructive action of water and temperature changes, which easily wear the images away. Because the Lascaux caves have many entrances, air movement has also damaged the images inside. Although they are not out in the open air, where natural light would have destroyed them long ago, many of the images have deteriorated and are barely recognizable. To prevent further damage, the site was closed to tourists in 1963, 23 years after it was discovered.<br><br><b>20. Which title best summarizes the main idea of the
passage?</b>`,
        choices: { A: `Wild Animals in Art`, B: `Hidden Prehistoric Paintings`, C: `Exploring Caves Respectfully`, D: `Determining the Age of French Caves` },
        correct: 'C'
    },
    'part1_21': {
        stem: `<b>Selection 3</b><br><br>When another old cave is discovered in the south of France, it is not usually news. Rather, it is an ordinary event. Such discoveries are so frequent these days that hardly anybody pays heed to them. However, when the Lascaux cave complex was discovered in 1940, the world was amazed. Painted directly on its walls were hundreds of scenes showing how people lived thousands of years ago. The scenes show people hunting animals, such as bison or wild cats. Other images depict birds and, most noticeably, horses, which appear in more than 300 wall images, by far outnumbering all other animals. Early artists drawing these animals accomplished a monumental and difficult task. They did not limit themselves to the easily accessible walls but carried their painting materials to spaces that required climbing steep walls or crawling into narrow passages in the Lascaux complex. Unfortunately, the paintings have been exposed to the destructive action of water and temperature changes, which easily wear the images away. Because the Lascaux caves have many entrances, air movement has also damaged the images inside. Although they are not out in the open air, where natural light would have destroyed them long ago, many of the images have deteriorated and are barely recognizable. To prevent further damage, the site was closed to tourists in 1963, 23 years after it was discovered.<br><br><b>21. Why was painting inside the Lascaux complex a
difficult task?</b>`,
        choices: { A: `It was completely dark inside.`, B: `The caves were full of wild animals.`, C: `Painting materials were hard to find.`, D: `Many painting spaces were difficult to reach.` },
        correct: 'C'
    },
    'part1_22': {
        stem: `<b>Selection 3</b><br><br>When another old cave is discovered in the south of France, it is not usually news. Rather, it is an ordinary event. Such discoveries are so frequent these days that hardly anybody pays heed to them. However, when the Lascaux cave complex was discovered in 1940, the world was amazed. Painted directly on its walls were hundreds of scenes showing how people lived thousands of years ago. The scenes show people hunting animals, such as bison or wild cats. Other images depict birds and, most noticeably, horses, which appear in more than 300 wall images, by far outnumbering all other animals. Early artists drawing these animals accomplished a monumental and difficult task. They did not limit themselves to the easily accessible walls but carried their painting materials to spaces that required climbing steep walls or crawling into narrow passages in the Lascaux complex. Unfortunately, the paintings have been exposed to the destructive action of water and temperature changes, which easily wear the images away. Because the Lascaux caves have many entrances, air movement has also damaged the images inside. Although they are not out in the open air, where natural light would have destroyed them long ago, many of the images have deteriorated and are barely recognizable. To prevent further damage, the site was closed to tourists in 1963, 23 years after it was discovered.<br><br><b>22. What does the passage say happened at the
Lascaux caves in 1963?</b>`,
        choices: { A: `Visitors were prohibited from entering.`, B: `A new lighting system was installed.`, C: `Another part was discovered.`, D: `A new entrance was created.

Selection 4
The mental consequences of our online info-crunching
are not universally bad. Certain cognitive skills are strengthened
by our use of computers and the Net. These tend to involve
more primitive mental functions, such as hand-eye coordination,
reflex response, and the processing of visual cues. One much-
cited study of video gaming revealed that after just 10 days of
playing action games on computers, a group of young people
had significantly boosted the speed with which they could shift
their visual focus between various images and tasks.
It’s likely that Web browsing also strengthens brain
functions related to fast-paced problem solving, particularly
when it requires spotting patterns in a welter of data. A British
study of the way women search for medical information online
indicated that an experienced Internet user can, at least in some
cases, assess the trustworthiness and probable value of a Web
page in a matter of seconds. The more we practice surfing and
scanning, the more adept our brain becomes at those tasks.
But it would be a serious mistake to look narrowly at
such benefits and conclude that the Web is making us smarter.
In a Science article published in early 2009, prominent
developmental psychologist Patricia Greenfield reviewed more
than 40 studies of the effects of various types of media on

intelligence and learning ability. She concluded that “every
medium develops some cognitive skills at the expense of
others.” Our growing use of the Net and other screen-based
technologies, she wrote, has led to the “widespread and
sophisticated development of visual-spatial skills.” But those
gains go hand in hand with a weakening of our capacity for the
kind of “deep processing” that underpins “mindful knowledge
acquisition, inductive analysis, critical thinking, imagination, and
reflection.”
We know that the human brain is highly plastic;
neurons and synapses change as circumstances change. When
we adapt to a new cultural phenomenon, including the use of a
new medium, we end up with a different brain, says Michael
Merzenich, a pioneer of the field of neuroplasticity. That means
our online habits continue to reverberate in the workings of our
brain cells even when we’re not at a computer. We’re exercising
the neural circuits devoted to skimming and multitasking while
ignoring those used for reading and thinking deeply.

(Excerpt from Nicholas Carr, “Author Nicholas Carr: The Web Shatters Focus,
Rewires Brains.” ©2010 by Condé Nast.)` },
        correct: 'C'
    },
    'part1_23': {
        stem: `Placeholder 23`,
        choices: {A: 'A', B: 'B', C: 'C', D: 'D'},
        correct: 'C'
    },
    'part1_24': {
        stem: `Placeholder 24`,
        choices: {A: 'A', B: 'B', C: 'C', D: 'D'},
        correct: 'C'
    },
    'part1_25': {
        stem: `Placeholder 25`,
        choices: {A: 'A', B: 'B', C: 'C', D: 'D'},
        correct: 'C'
    },
    'part1_26': {
        stem: `Placeholder 26`,
        choices: {A: 'A', B: 'B', C: 'C', D: 'D'},
        correct: 'C'
    },
    'part1_27': {
        stem: `Placeholder 27`,
        choices: {A: 'A', B: 'B', C: 'C', D: 'D'},
        correct: 'C'
    },
    'part1_28': {
        stem: `Placeholder 28`,
        choices: {A: 'A', B: 'B', C: 'C', D: 'D'},
        correct: 'C'
    },
    'part1_29': {
        stem: `<b>Selection 6</b><br><br>Contending for the rights of woman, my main argument is built on this simple principle, that if she be not prepared by education to become the companion of man, she will stop the progress of knowledge and virtue; for truth must be common to all, or it will be inefficacious with respect to its influence on general practice. And how can woman be expected to co- operate unless she know why she ought to be virtuous? unless freedom strengthen her reason till she comprehend her duty, and see in what manner it is connected with her real good? If children are to be educated to understand the true principle of patriotism, their mother must be a patriot; and the love of mankind, from which an orderly train of virtues spring, can only be produced by considering the moral and civil interest of mankind; but the education and situation of woman, at present, shuts her out from such investigations....  Consider, sir, dispassionately, these observations—for a glimpse of this truth seemed to open before you when you observed, “that to see one half of the human race excluded by the other from all participation of government, was a political phenomenon that, according to abstract principles, it was impossible to explain.” If so, on what does your constitution rest? If the abstract rights of man will bear discussion and explanation, those of woman, by a parity of reasoning, will not shrink from the same test: though a different opinion prevails in this country, built on the very arguments which you use to justify the oppression of woman—prescription.  Consider—I address you as a legislator— whether, when men contend for their freedom, and to be allowed to judge for themselves respecting their own happiness, it be not inconsistent and unjust to subjugate women, even though you firmly believe that you are acting in the manner best calculated to promote their happiness? Who made man the exclusive judge, if woman partake with him the gift of reason?  In this style, argue tyrants of every denomination, from the weak king to the weak father of a family; they are all eager to crush reason; yet always assert that they usurp its throne only to be useful. Do you not act a similar part, when you force all women, by denying them civil and political rights, to remain immured in their families groping in the dark?  (Excerpt from Mary Wollstonecraft, A Vindication of the Rights of Woman. Originally published in 1792. Talleyrand was a French diplomat; the Report was a plan for national education. Wollstonecraft, a British novelist and political writer, wrote Vindication in response to Talleyrand.)<br><br><b>29. It can most reasonably be inferred from selection
that Paine views historical precedents as</b>`,
        choices: { A: `generally helpful to those who want to change
society.`, B: `surprisingly difficult for many people to
comprehend.`, C: `frequently responsible for human progress.`, D: `largely irrelevant to current political decisions.` },
        correct: 'C'
    },
    'part1_30': {
        stem: `<b>Selection 6</b><br><br>Contending for the rights of woman, my main argument is built on this simple principle, that if she be not prepared by education to become the companion of man, she will stop the progress of knowledge and virtue; for truth must be common to all, or it will be inefficacious with respect to its influence on general practice. And how can woman be expected to co- operate unless she know why she ought to be virtuous? unless freedom strengthen her reason till she comprehend her duty, and see in what manner it is connected with her real good? If children are to be educated to understand the true principle of patriotism, their mother must be a patriot; and the love of mankind, from which an orderly train of virtues spring, can only be produced by considering the moral and civil interest of mankind; but the education and situation of woman, at present, shuts her out from such investigations....  Consider, sir, dispassionately, these observations—for a glimpse of this truth seemed to open before you when you observed, “that to see one half of the human race excluded by the other from all participation of government, was a political phenomenon that, according to abstract principles, it was impossible to explain.” If so, on what does your constitution rest? If the abstract rights of man will bear discussion and explanation, those of woman, by a parity of reasoning, will not shrink from the same test: though a different opinion prevails in this country, built on the very arguments which you use to justify the oppression of woman—prescription.  Consider—I address you as a legislator— whether, when men contend for their freedom, and to be allowed to judge for themselves respecting their own happiness, it be not inconsistent and unjust to subjugate women, even though you firmly believe that you are acting in the manner best calculated to promote their happiness? Who made man the exclusive judge, if woman partake with him the gift of reason?  In this style, argue tyrants of every denomination, from the weak king to the weak father of a family; they are all eager to crush reason; yet always assert that they usurp its throne only to be useful. Do you not act a similar part, when you force all women, by denying them civil and political rights, to remain immured in their families groping in the dark?  (Excerpt from Mary Wollstonecraft, A Vindication of the Rights of Woman. Originally published in 1792. Talleyrand was a French diplomat; the Report was a plan for national education. Wollstonecraft, a British novelist and political writer, wrote Vindication in response to Talleyrand.)<br><br><b>30. The main purpose of the selection is to</b>`,
        choices: { A: `suggest a way to resolve a particular political
struggle.`, B: `discuss the relationship between people and their
government.`, C: `evaluate the consequences of rapid political
change.`, D: `describe the duties that governments have to
their citizens.

































































TEST B: INDUCTIVE REASONING

Section 1. Figure Series
Directions:  Choose the one which should come next in the series.

1.



2.




3.




4.



5.








6.



7.




8.




9.




10.



















Section 2. Figure Grouping
Directions: Each item in this section consists of figures which are similar in some aspect. Choose the figure that is different
from the others.


11.






12.




13.




14.



15.




16.





17.





18.




19.




20.











Section 3. Number and Letter Series
Directions: Choose the best answer that will complete the following sequences and series.

21.    1   2   4   7   12
A. 16
B. 17
C. 18
D. 19

22. VT   OQ   LJ   EG
A. CA

B. AY
C. BZ

D. DB

23. 8   10   15   15   21   21

A. 39

B. 38

C. 26

D. 27

24. B   H   M   Q   T
A. V   W

B. V   X
C. U   V
D. W   X

25. 500   400   319   255  206

A. 170

B. 180

C. 190

D. 200

26. XF   VH   TJ   RL   PN
A. PN

B. NP
C. RH

D. HR

27. 2   5   4   11   8   17

A. 16

B. 18

C. 20

D. 22

28. ADE   HAI   LMA   APQ
A. TAU

B. ATU
C. TUA

D. RAS

29. 36   72   70   140   138

A. 136

B. 276

C, 286

D. 134

30. FJH   LPN   RVT   XBZ
A. DHF

B. DFH
C. JNL

D. JLN














TEST C. QUANTITATIVE REASONING
Directions: In the following items, select the correct answer from the given choices.

Section 1. Fundamental Operation

1. Evaluate the following expression:
5 + 3 (42 + 7) – 7 (2 + 32 x 8) 0
A. 0
B. 72
C. 152
D. -317

2. Simplify: 15 – 2[5 – 3 (13 - 9) + 11]
A. 7
B. 8
C. 9
D. 10

3.  (
𝟐
𝟓)
𝟐
−
𝟑
𝟓+ (−𝟑𝟐) −(−𝟒)𝟐
A.
15
2
B. −13 5
12
C. 13
D. −25 11
25

4. 𝟖
𝟓
𝟔+ 𝟕
𝟏
𝟐+ 𝟔
𝟐
𝟑

A. 22
B. 23  11/12
C. 22  11/12
D. 23

5.
(𝟕−𝟏)+(𝟕−𝟐)
(𝟑𝟒𝟑𝟎)(𝟕−𝟐)

A. 8
B.
8
49
C. 1
5
D. 0





6. Simplify: (𝟖𝟏
𝟏
𝟐+ 𝟒𝟑)
𝟏
𝟐

A. 24
B. 12
C. √2
4
+ 12
D. 8.544



7. √𝟏𝟑−√𝟏𝟏
√𝟏𝟑+√𝟏𝟏

A. 24−2√121
B. 12−2√143
C. 12−√143
D. 24−2√143


8. √𝟏𝟔𝒙𝟏𝟎𝒚𝟏𝟔
𝟖


A. 𝑥𝑦√4𝑥2
8

B. 2𝑥𝑦√𝑥2
8

C. 𝑥2𝑦√16𝑦2
8

D. 𝑥𝑦2√4𝑥
4


9.
𝒙
𝟏+ 𝟑
𝟑−𝒙
𝟐

A.
3𝑥2−𝑥
3𝑥+5
B. 3𝑥
3𝑥+1
C. 2𝑥2
2𝑥+3
D.
3𝑥3−2𝑥
3𝑥+3




10.
𝟏
𝒙+𝒚+ 𝟏
𝒙−𝒚
𝟏
𝒙𝟐−𝒚𝟐 − 𝟏
𝒙+𝒚

A.
2𝑥
1−𝑥+𝑦
B. 3𝑥
𝑥+𝑦
C.
𝑥+1
2𝑥+𝑦
D. 𝑥
𝑥+𝑦


Problem Solving
11. Adding four to four times a number gives the same
result as subtracting three from five times the given
number. What is the number?
A. 3
B. 4
C. 5
D. 7

12. If someone can drive 174 km in 3 hours, how far can he
go in 5 hours?
A. 79 km
B. 150 km
C. 104.4 km
D. 290 km

13. How many ounces of pure nickel must be added to 150
ounces of alloy 70 percent pure to make an alloy which
is 85 percent pure?
A. 89.25
B. 120.11
C. 182.14
D. 150.0

14. Sarah deposits $4,000 at a bank at an interest rate of
4.5% per year. How much interest will she earn at the
end of 3 years?
A. 400
B. 450
C. 540
D. 650

15. Salman is 108 years old. Jonathan is 24 years old. How
many years will it take for Salman to be exactly four
times as old as Jonathan?
A. 3
B. 4
C. 5
D. 6

16. Howard, Keith and Cris were hired by Microsoft
Corporation to do a programming job which they must
finish within 10 days. After monitoring them for two
days, Gates, according to his combinatorial observation
program found out that Howard and Keith can do the
programming work in 12 days whereas Howard and Cris
in 20 days. Now, Bill wants to find out how many days
would it take for Cris to do the work alone?
A. 60
B. 30
C. 20
D. 10

17. Jason took a drive to town at an average rate of 40 mph.
In the evening, he drove back at 30 mph. If he spent a
total of 7 hours traveling, what is the total distance
traveled by John?
A. 10 miles
B. 171.4 miles
C. 240 miles
D.  490.0 miles

18. A kite-flying competition was recently held at the Subic
Free Port Zone. Howard, one among the many
competitors, designed his kite in the shape of a
rectangle. The width is 9 feet and the length is 1 foot
shorter than the diagonal. Find the length of the
diagonal.
A. 30
B. 39
C. 41
D. 54

19. What is the probability of drawing an ace or king from a
standard deck of cards?
A.
8
52
B.
2
13
C. 4
13
D.
4
52





20. Find the 105th term of the progression 0, 3, 6, . . .
A. 209
B. 109
C. 312
D. 503



Data Interpretation

For  items 21 to 23.



21. What was the ratio of the students who passed in 2009
over the 2008?
A. 2.5
B. 3.0
C. 4.2
D. 5.6

22. In which of the following years did over 2/3 of the
students who took the exam did not pass?
A. 2005
B. 2006
C. 2008
D. 2009

23. It is known that a quarter of the students who passed
the exam in 2007, passed it at the first trial. Assuming
each exam has two trials, what percentage of all the
students who took the exam that year passed it in the
second trial?
A. 10
B. 15
C. 30
D. 75




For items 24 to 26.


24. What percentage of the total sample indicated that Jazz
is their favorite style of music?
A. 6%
B. 8%
C. 22%
D. 12%

25. What percentage of the total sample were aged 21-30?
A. 31%
B. 25%
C. 43%
D. 14%

26. What percentage of respondents aged 21-30 indicated a
favorite style other than Rock music?
A. 64%
B. 80%
C. 75%
D. 36%











For items 27 to 30.

27. If the number of Chinese Insurance stocks represented
3.5% of all Insurance securities, approximately how
many Insurance bonds were Chinese?
A. 9,200,000
B. 9,500,000
C. 10,800,000
D. 910,000

28. How many distributions of securities in US Sports?
A. 27,000,000
B. 6,600,000
C. 21,000,000
D. 33,000,000






29. How many distributions of securities in Israel in terms
of Audit?
A. 3,600,000
B. 4,200,000
C. 42,000,000
D. 3,600

30. What country holds the largest distributions of
securities?
A. Israel
B. India
C. Brazil
D. Chinese






























TEST D. PERCEPTUAL ACUITY
Section 1. Hidden Figure
Directions: Each item in this section is made up of a simple figure at the left and complicated drawings at the right. Select
the complicated drawing that contains the simple figure.

1.





2.





3.





4.




5.






6.





7.





8.





9.





10.






















Section 2. Mirror Image
Directions: Each item in this section consists of a figure followed by options. Select from the options the mirror image of the
given figure.


11.





12.




13.




14.




15.





16.




17.





18.




19.





20.




Section 3. Identical Information
Directions:  From the options that follow, select the one which exactly matches the given information in word sequence,
spelling and punctuation.

21. A stimulus is any factor inside or outside of the
organism but external to the living cell groups
under consideration, which initiates activity of
some kind.

A. A stimulus is any factor inside or outside of the
organism, but external to the living cell groups
under consideration, which initiates activity of
some kind.

B. A stimulus is a factor inside or outside of the
organism but external to the living cell groups
under consideration, which initiates activity of
some kind.

C. A stimulus is any factor inside or outside of an
organism but external to the living cell groups
under consideration, which initiates activity of
some kind.

D. A stimulus is any factor inside or outside of the
organism but external to the living cell groups
under consideration, which initiates activity of
some kind.`, E: `A stimulus is any factor inside or outside of the
organism but external to the living cell groups
under consideration which initiates activity of
some kind.












22. The Iliad recounts only the part of a long series of
events in the Trojan War, which was fought,
according to the legend, because of a quarrel
among the gods.

A. The Iliad recounts only the part of a long series of
events in the Trojan War, which was fought,
according to the legend, because of a quarel
among the gods.

B. The Iliad recounts only the part of a long series of
events in the Trojan War, which was faught,
according to the legend, because of a quarrel
among the gods

C. The Iliad recounts only the part of a long series of
events in the Trojan War, which was fought,
according to the legend, because of a quarrel
among the gods.

D. The Iliad recounts only the part of a long series of
events in the Trojan War which was fought,
according to the legend, because of a quarrel
among the gods.

E. The Iliad recounts only the part of a long series of
events in the Trojan War, which was fought,
according to the legend, because of a quarrel
among the god.













23. McKeachie, Wilbert James, Charlotte Lackner
Doyle and Mary Margaret Moffet. Psychology.
Massachusetts: Addison – Wesley Publishing
Company, 1976.

A. McKeachie, Wilbert James, Charlotte Lackner
Doyle and Mary Margaret Moffet. Psychology.
Massachussetts: Addison – Wesley Publishing
Company, 1976.

B. McKeachie, Wilbert James, Charlotte Lackner
Doyle and Mary Margaret Moffet. Psychology.
Massachusetts: Addison – Wesley Publishing
Company, 1976.

C. McKeachie, Wilbert James, Charlotte Lackner
Doyle and Mary Margaret Moffet. Psychology.
Massachusetts; Addison – Wesley Publishing
Company, 1976.

D. Mckeachie, Wilbert James, Charlotte Lackner
Doyle and Mary Margaret Moffet. Psychology.
Massachusetts: Addison – Wesley Publishing
Company, 1976.

E. McKeachie, Wilbert James, Charlotte Lackner
Doyle and Mary Margaret Moffet. Psychology.
Massachusetts: Addison – Wesley Publishing
Company, 1967.

















24. EcoR1 breaks the bond between the G and A
nucleotides on each DNA strand, wherever the
sequences GAATTC and CTTAAG occur in DNA.

A. EcoR1 breaks the bond between the G and A
nucleotides on each DNA strand, whenever the
sequences GAATTC and CTTAAG occur in DNA.

B. EcoR1 breaks the bond between the G and A
nucleotides on each DNA strand, wherever the
sequences GAATTG and CTTAAG occur in DNA.

C. EcoR1 breaks the bond between the G and A
nucleotide on each DNA strand, wherever the
sequences GAATTC and CTTAAG occur in DNA.

D. EcoR1 breaks the bond between the G and A
nucleotides on each DNA strand, wherever the
sequences GAATTC and CTTAAG occur on DNA.

E. EcoR1 breaks the bond between the G and A
nucleotides on each DNA strand, wherever the
sequences GAATTC and CTTAAG occur in DNA.























25. Atkinson, Rita L., Richard C. Atkinson and Ernest
R. Hilgard. Introduction to Psychology. 11th ed.
New York: Harcourt Brace Jovanovich, Inc., 1996.

A. Atkinson, Rita L., Richard C. Atkinson and Ernest
R. Hilgard. Introduction to Psychology. 11th ed.
New York; Harcourt Brace Jovanovich, Inc., 1996.

B. Atkinson, Rita L., Richard C. Atkinson and Ernest
R. Hilgard. Introduction to psychology. 11th ed.
New York: Harcourt Brace Jovanovich, Inc., 1996.

C. Atkinson, Rita L., Richard C. Atkinson and Ernest
R. Hilgard. Introduction to Psychology. 11th Ed.
New York: Harcourt Brace Jovanovich, Inc., 1996.

D. Atkinson, Rita L., Richard C. Atkinson and Ernest
R. Hilgard. Introduction to Psychology. 11th ed.
New York: Harcourt Brace Jovanovich, Inc., 1996.

E. Atkinson, Rita L., Richard C. Atkinson and Ernest
R. Hilgard. Introduction to Psychology. 11th ed.
New York: Harcourt Brace Jovanovich, Inc, 1996.

26. G. Stanley Hall established the first Psychological
Laboratory in North America at John Hopkins
Hospital.

A. G. Stanley Hall established the first Psychological
Laboratory in North America at John Hopkins
hospital.

B. G. Stanley Hall established the first Psychological
laboratory in North America at John Hopkins
Hospital.

C. G. Stanly Hall established the first Psychological
Laboratory in North America at John Hopkins
Hospital.

D. G. Stanley Hall established the first Psychological
Laboratory in North America at John Hopkins
Hospital.

E. G. Stanley Hale established the first Psychological
Laboratory in North America at John Hopkins
Hospital.
27. Wilhelm Wundt founded the first psychological
laboratory at the University of Leipzig in Germany
which was devoted to experimental psychology.

A. Wilhelm Wundt founded the first psychological
laboratory at the University of Liepzig in Germany
which was devoted to experimental psychology.

B. Wilhelm Wundt founded the first psychological
laboratory in the University of Leipzig on Germany
which was devoted to experimental psychology.

C. Wilhelm Wundt founded the first physiological
laboratory at the University of Leipzig in Germany
which was devoted to experimental psychology.

D. Wilhelm Wundt founded the first psychological
laboratory at the University of Leipzig on Germany
which was devoted to experimental psychology.

E. Wilhelm Wundt founded the first psychological
laboratory at the University of Leipzig in Germany
which was devoted to experimental psychology.

28. They use light energy and H2O to generate
chemical energy in the form of ATP and NADPH,
and they release O2 as a by-product.

A. They use light energy and H2O to generate
chemical energy on the form of ATP and NAPDH,
and they release O2 as a by-product.

B. They use light energy and H2O to generate
chemical energy in the form of ATP and NADPH,
and they release O2 as a by product.

C. They use light energy and H2O to generate
chemical energy in the form of ATP and NADPH,
and they release O2 as a by-product.

D. They use light energy and H2O to generate
chemical energy in the from of ATP and NADPH
and they release O2 as a by-product.

E. They use light energy and H2O to generate
chemical energy in the form of ADP and NADPH,
and they release O2 as a by-product.

29. University Town Center, 4545 LaJolla Village Dr., Space
201E, San Diego, CA 92122.

A. University Town Center, 4545 Lajolla Village Dr.
Space 201E, San Diego, CA 92122.

B. University Town Center, 4545; LaJolla Village Dr.,
Space 201E, San Diego, CA 92122.

C. University Town Center, 4545 LaJolla Village Dr.,
Space 201E, San Diego., CA 92122.

D. University Town Center, 4545 LaJolla Village Dr.,
Space 201E, San Diego, CA 92212.

E. University Town Center, 4545 LaJolla Village Dr.,
Space 201E, San Diego, CA 92122.

30. James Hardie Industries NV v Australian Securities and
Investments Commission (2010) 274 ALR 85.

A. James Hardie Industries NV V Australian Securities
and Investments Commission (2010) 274 ALR 85.

B. James Hardie Industries NV v Australian Securities
and Investments Commission (2010) 274 ALR 85.

C. James Hardie industries NV v Australian Securities
and Investments Commission (2010) 274 ALR 85.

D. James Hardie Industries NV v. Austrian Securities and
Investments Commission (2010) 274 ALR 85.

E. James Hardie Industries NV v Australian Securities
and Investments Commission (2010) 274 ARL 85.` },
        correct: 'C'
    },
    'part1_31': {
        stem: `31. <br><img src="images/31.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_32': {
        stem: `32. <br><img src="images/32.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_33': {
        stem: `33. <br><img src="images/33.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_34': {
        stem: `34. <br><img src="images/34.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_35': {
        stem: `35. <br><img src="images/35.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_36': {
        stem: `36. <br><img src="images/36.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_37': {
        stem: `37. <br><img src="images/37.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_38': {
        stem: `38. <br><img src="images/38.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_39': {
        stem: `39. <br><img src="images/39.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_40': {
        stem: `40. <br><img src="images/40.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_41': {
        stem: `41. <br><img src="images/41.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_42': {
        stem: `42. <br><img src="images/42.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_43': {
        stem: `43. <br><img src="images/43.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_44': {
        stem: `44. <br><img src="images/44.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_45': {
        stem: `45. <br><img src="images/45.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_46': {
        stem: `46. <br><img src="images/46.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_47': {
        stem: `47. <br><img src="images/47.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_48': {
        stem: `48. <br><img src="images/48.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_49': {
        stem: `49. <br><img src="images/49.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_50': {
        stem: `50. <br><img src="images/50.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_51': {
        stem: `21.    1   2   4   7   12`,
        choices: { A: `16`, B: `17`, C: `18`, D: `19` },
        correct: 'C'
    },
    'part1_52': {
        stem: `22. VT   OQ   LJ   EG`,
        choices: { A: `CA`, B: `AY`, C: `BZ`, D: `DB` },
        correct: 'C'
    },
    'part1_53': {
        stem: `23. 8   10   15   15   21   21`,
        choices: { A: `39`, B: `38`, C: `26`, D: `27` },
        correct: 'C'
    },
    'part1_54': {
        stem: `24. B   H   M   Q   T`,
        choices: { A: `V   W`, B: `V   X`, C: `U   V`, D: `W   X` },
        correct: 'C'
    },
    'part1_55': {
        stem: `25. 500   400   319   255  206`,
        choices: { A: `170`, B: `180`, C: `190`, D: `200` },
        correct: 'C'
    },
    'part1_56': {
        stem: `26. XF   VH   TJ   RL   PN`,
        choices: { A: `PN`, B: `NP`, C: `RH`, D: `HR` },
        correct: 'C'
    },
    'part1_57': {
        stem: `27. 2   5   4   11   8   17`,
        choices: { A: `16`, B: `18`, C: `20`, D: `22` },
        correct: 'C'
    },
    'part1_58': {
        stem: `28. ADE   HAI   LMA   APQ`,
        choices: { A: `TAU`, B: `ATU`, C: `TUA`, D: `RAS` },
        correct: 'C'
    },
    'part1_59': {
        stem: `29. 36   72   70   140   138`,
        choices: { A: `136`, B: `276`, C: `286`, D: `134` },
        correct: 'C'
    },
    'part1_60': {
        stem: `30. FJH   LPN   RVT   XBZ`,
        choices: { A: `DHF`, B: `DFH`, C: `JNL`, D: `JLN` },
        correct: 'C'
    },
    'part1_61': {
        stem: `1. Evaluate the following expression:
5 + 3 (42 + 7) - 7 (2 + 32 x 8) 0`,
        choices: { A: `0`, B: `72`, C: `152`, D: `-317` },
        correct: 'C'
    },
    'part1_62': {
        stem: `2. Simplify: 15 - 2[5 - 3 (13 - 9) + 11]`,
        choices: { A: `7`, B: `8`, C: `9`, D: `10` },
        correct: 'C'
    },
    'part1_63': {
        stem: `3. (2/5)^2 - 3/5 + (-3^2) - (-4)^2`,
        choices: { A: `15/2`, B: `-13 5/12`, C: `13`, D: `-25 11/25` },
        correct: 'C'
    },
    'part1_64': {
        stem: `4. 8 5/6 + 7 1/2 + 6 2/3`,
        choices: { A: `22`, B: `23 11/12`, C: `22 11/12`, D: `23` },
        correct: 'C'
    },
    'part1_65': {
        stem: `5. [ (8-1) + (8-2) ] / [ (3^3^3^0)(8-2) ]`,
        choices: { A: `8`, B: `8/49`, C: `1/5`, D: `0` },
        correct: 'C'
    },
    'part1_66': {
        stem: `6. Simplify: (6 1/2 + 5 3) / 1/2`,
        choices: { A: `24`, B: `12`, C: `(√2)/4 + 12`, D: `8.544` },
        correct: 'C'
    },
    'part1_67': {
        stem: `7. (√13 - √11) / (√13 + √11)`,
        choices: { A: `24 - 2√121`, B: `12 - 2√143`, C: `12 - √143`, D: `24 - 2√143` },
        correct: 'C'
    },
    'part1_68': {
        stem: `8. √( (16x^10y^14) / 6 )`,
        choices: { A: `(xy√4x^2)/8`, B: `(2xy√x^2)/8`, C: `(x^2y√16y^2)/8`, D: `(xy^2√4x)/4` },
        correct: 'C'
    },
    'part1_69': {
        stem: `9. (x/1 + 3) / (3 - x/2)`,
        choices: { A: `(3x^2 - x) / (3x + 5)`, B: `3x / (3x + 1)`, C: `2x^2 / (2x + 3)`, D: `(3x^3 - 2x) / (3x + 3)` },
        correct: 'C'
    },
    'part1_70': {
        stem: `10. [ 1/(x+y) + 1/(x-y) ] / [ 1/(x^2-y^2) - 1/(x+y) ]`,
        choices: { A: `2x / (1 - x + y)`, B: `3x / (x + y)`, C: `(x + 1) / (2x + y)`, D: `x / (x + y)` },
        correct: 'C'
    },
    'part1_71': {
        stem: `11. Adding four to four times a number gives the same result as subtracting three from five times the given number. What is the number?`,
        choices: { A: `3`, B: `4`, C: `5`, D: `7` },
        correct: 'C'
    },
    'part1_72': {
        stem: `12. If someone can drive 174 km in 3 hours, how far can he go in 5 hours?`,
        choices: { A: `79 km`, B: `150 km`, C: `104.4 km`, D: `290 km` },
        correct: 'C'
    },
    'part1_73': {
        stem: `13. How many ounces of pure nickel must be added to 150 ounces of alloy 70 percent pure to make an alloy which is 85 percent pure?`,
        choices: { A: `89.25`, B: `120.11`, C: `182.14`, D: `150.0` },
        correct: 'C'
    },
    'part1_74': {
        stem: `14. Sarah deposits $4,000 at a bank at an interest rate of 4.5% per year. How much interest will she earn at the end of 3 years?`,
        choices: { A: `400`, B: `450`, C: `540`, D: `650` },
        correct: 'C'
    },
    'part1_75': {
        stem: `15. Salman is 108 years old. Jonathan is 24 years old. How many years will it take for Salman to be exactly four times as old as Jonathan?`,
        choices: { A: `3`, B: `4`, C: `5`, D: `6` },
        correct: 'C'
    },
    'part1_76': {
        stem: `16. Howard, Keith and Cris were hired by Microsoft Corporation to do a programming job which they must finish within 10 days. After monitoring them for two days, Gates, according to his combinatorial observation program found out that Howard and Keith can do the programming work in 12 days whereas Howard and Cris in 20 days. Now, Bill wants to find out how many days would it take for Cris to do the work alone?`,
        choices: { A: `60`, B: `30`, C: `20`, D: `10` },
        correct: 'C'
    },
    'part1_77': {
        stem: `17. Jason took a drive to town at an average rate of 40 mph. In the evening, he drove back at 30 mph. If he spent a total of 7 hours traveling, what is the total distance traveled by John?`,
        choices: { A: `10 miles`, B: `171.4 miles`, C: `240 miles`, D: `490.0 miles` },
        correct: 'C'
    },
    'part1_78': {
        stem: `18. A kite-flying competition was recently held at the Subic Free Port Zone. Howard, one among the many competitors, designed his kite in the shape of a rectangle. The width is 9 feet and the length is 1 foot shorter than the diagonal. Find the length of the diagonal.`,
        choices: { A: `30`, B: `39`, C: `41`, D: `54` },
        correct: 'C'
    },
    'part1_79': {
        stem: `19. What is the probability of drawing an ace or king from a standard deck of cards?`,
        choices: { A: `8/52`, B: `2/13`, C: `4/13`, D: `4/52` },
        correct: 'C'
    },
    'part1_80': {
        stem: `20. Find the 105th term of the progression 0, 3, 6, . . .`,
        choices: { A: `209`, B: `109`, C: `312`, D: `503` },
        correct: 'C'
    },
    'part1_81': {
        stem: `<img src="images/xxxxx.png" style="max-width: 100%;"><br><br>21. What was the ratio of the students who passed in 2009 over the 2008?`,
        choices: { A: `2.5`, B: `3.0`, C: `4.2`, D: `5.6` },
        correct: 'C'
    },
    'part1_82': {
        stem: `<img src="images/xxxxx.png" style="max-width: 100%;"><br><br>22. In which of the following years did over 2/3 of the students who took the exam did not pass?`,
        choices: { A: `2005`, B: `2006`, C: `2008`, D: `2009` },
        correct: 'C'
    },
    'part1_83': {
        stem: `<img src="images/xxxxx.png" style="max-width: 100%;"><br><br>23. It is known that a quarter of the students who passed the exam in 2007, passed it at the first trial. Assuming each exam has two trials, what percentage of all the students who took the exam that year passed it in the second trial?`,
        choices: { A: `10`, B: `15`, C: `30`, D: `75` },
        correct: 'C'
    },
    'part1_84': {
        stem: `<img src="images/image.png" style="max-width: 100%;"><br><br>24. What percentage of the total sample indicated that Jazz is their favorite style of music?`,
        choices: { A: `6%`, B: `8%`, C: `22%`, D: `12%` },
        correct: 'C'
    },
    'part1_85': {
        stem: `<img src="images/image.png" style="max-width: 100%;"><br><br>25. What percentage of the total sample were aged 21-30?`,
        choices: { A: `31%`, B: `25%`, C: `43%`, D: `14%` },
        correct: 'C'
    },
    'part1_86': {
        stem: `<img src="images/image.png" style="max-width: 100%;"><br><br>26. What percentage of respondents aged 21-30 indicated a favorite style other than Rock music?`,
        choices: { A: `64%`, B: `80%`, C: `75%`, D: `36%` },
        correct: 'C'
    },
    'part1_87': {
        stem: `<img src="images/xxxxxx.png" style="max-width: 100%;"><br><br>27. If the number of Chinese Insurance stocks represented 3.5% of all Insurance securities, approximately how many Insurance bonds were Chinese?`,
        choices: { A: `9,200,000`, B: `9,500,000`, C: `10,800,000`, D: `910,000` },
        correct: 'C'
    },
    'part1_88': {
        stem: `<img src="images/xxxxxx.png" style="max-width: 100%;"><br><br>28. How many distributions of securities in US Sports?`,
        choices: { A: `27,000,000`, B: `6,600,000`, C: `21,000,000`, D: `33,000,000` },
        correct: 'C'
    },
    'part1_89': {
        stem: `<img src="images/xxxxxx.png" style="max-width: 100%;"><br><br>29. How many distributions of securities in Israel in terms of Audit?`,
        choices: { A: `3,600,000`, B: `4,200,000`, C: `42,000,000`, D: `3,600` },
        correct: 'C'
    },
    'part1_90': {
        stem: `<img src="images/xxxxxx.png" style="max-width: 100%;"><br><br>30. What was the percentage of Chinese Insurance securities out of the total?`,
        choices: { A: `5%`, B: `7%`, C: `10%`, D: `15%` },
        correct: 'C'
    },
    'part1_91': {
        stem: `91. <br><img src="images/91.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_92': {
        stem: `92. <br><img src="images/92.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_93': {
        stem: `93. <br><img src="images/93.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_94': {
        stem: `94. <br><img src="images/94.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_95': {
        stem: `95. <br><img src="images/95.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_96': {
        stem: `96. <br><img src="images/96.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_97': {
        stem: `97. <br><img src="images/97.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_98': {
        stem: `98. <br><img src="images/98.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_99': {
        stem: `99. <br><img src="images/99.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_100': {
        stem: `100. <br><img src="images/100.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_101': {
        stem: `101. <br><img src="images/101.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_102': {
        stem: `102. <br><img src="images/102.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_103': {
        stem: `103. <br><img src="images/103.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_104': {
        stem: `104. <br><img src="images/104.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_105': {
        stem: `105. <br><img src="images/105.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_106': {
        stem: `106. <br><img src="images/106.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_107': {
        stem: `107. <br><img src="images/107.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_108': {
        stem: `108. <br><img src="images/108.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_109': {
        stem: `109. <br><img src="images/109.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_110': {
        stem: `110. <br><img src="images/110.jpg" style="max-width: 100%;" alt="Missing image">`,
        choices: { A: `A`, B: `B`, C: `C`, D: `D`, E: `E` },
        correct: 'C'
    },
    'part1_111': {
        stem: `21. A stimulus is any factor inside or outside of the
organism but external to the living cell groups
under consideration, which initiates activity of
some kind.`,
        choices: { A: `A stimulus is any factor inside or outside of the
organism, but external to the living cell groups
under consideration, which initiates activity of
some kind.`, B: `A stimulus is a factor inside or outside of the
organism but external to the living cell groups
under consideration, which initiates activity of
some kind.`, C: `A stimulus is any factor inside or outside of an
organism but external to the living cell groups
under consideration, which initiates activity of
some kind.`, D: `A stimulus is any factor inside or outside of the
organism but external to the living cell groups
under consideration, which initiates activity of
some kind.`, E: `A stimulus is any factor inside or outside of the
organism but external to the living cell groups
under consideration which initiates activity of
some kind.` },
        correct: 'C'
    },
    'part1_112': {
        stem: `22. The Iliad recounts only the part of a long series of
events in the Trojan War, which was fought,
according to the legend, because of a quarrel
among the gods.`,
        choices: { A: `The Iliad recounts only the part of a long series of
events in the Trojan War, which was fought,
according to the legend, because of a quarel
among the gods.`, B: `The Iliad recounts only the part of a long series of
events in the Trojan War, which was faught,
according to the legend, because of a quarrel
among the gods`, C: `The Iliad recounts only the part of a long series of
events in the Trojan War, which was fought,
according to the legend, because of a quarrel
among the gods.`, D: `The Iliad recounts only the part of a long series of
events in the Trojan War which was fought,
according to the legend, because of a quarrel
among the gods.`, E: `The Iliad recounts only the part of a long series of
events in the Trojan War, which was fought,
according to the legend, because of a quarrel
among the god.` },
        correct: 'C'
    },
    'part1_113': {
        stem: `23. McKeachie, Wilbert James, Charlotte Lackner
Doyle and Mary Margaret Moffet. Psychology.
Massachusetts: Addison – Wesley Publishing
Company, 1976.`,
        choices: { A: `McKeachie, Wilbert James, Charlotte Lackner
Doyle and Mary Margaret Moffet. Psychology.
Massachussetts: Addison – Wesley Publishing
Company, 1976.`, B: `McKeachie, Wilbert James, Charlotte Lackner
Doyle and Mary Margaret Moffet. Psychology.
Massachusetts: Addison – Wesley Publishing
Company, 1976.`, C: `McKeachie, Wilbert James, Charlotte Lackner
Doyle and Mary Margaret Moffet. Psychology.
Massachusetts; Addison – Wesley Publishing
Company, 1976.`, D: `Mckeachie, Wilbert James, Charlotte Lackner
Doyle and Mary Margaret Moffet. Psychology.
Massachusetts: Addison – Wesley Publishing
Company, 1976.`, E: `McKeachie, Wilbert James, Charlotte Lackner
Doyle and Mary Margaret Moffet. Psychology.
Massachusetts: Addison – Wesley Publishing
Company, 1967.` },
        correct: 'C'
    },
    'part1_114': {
        stem: `24. EcoR1 breaks the bond between the G and A
nucleotides on each DNA strand, wherever the
sequences GAATTC and CTTAAG occur in DNA.`,
        choices: { A: `EcoR1 breaks the bond between the G and A
nucleotides on each DNA strand, whenever the
sequences GAATTC and CTTAAG occur in DNA.`, B: `EcoR1 breaks the bond between the G and A
nucleotides on each DNA strand, wherever the
sequences GAATTG and CTTAAG occur in DNA.`, C: `EcoR1 breaks the bond between the G and A
nucleotide on each DNA strand, wherever the
sequences GAATTC and CTTAAG occur in DNA.`, D: `EcoR1 breaks the bond between the G and A
nucleotides on each DNA strand, wherever the
sequences GAATTC and CTTAAG occur on DNA.`, E: `EcoR1 breaks the bond between the G and A
nucleotides on each DNA strand, wherever the
sequences GAATTC and CTTAAG occur in DNA.` },
        correct: 'C'
    },
    'part1_115': {
        stem: `25. Atkinson, Rita L., Richard C. Atkinson and Ernest
R. Hilgard. Introduction to Psychology. 11th ed.
New York: Harcourt Brace Jovanovich, Inc., 1996.`,
        choices: { A: `Atkinson, Rita L., Richard C. Atkinson and Ernest
R. Hilgard. Introduction to Psychology. 11th ed.
New York; Harcourt Brace Jovanovich, Inc., 1996.`, B: `Atkinson, Rita L., Richard C. Atkinson and Ernest
R. Hilgard. Introduction to psychology. 11th ed.
New York: Harcourt Brace Jovanovich, Inc., 1996.`, C: `Atkinson, Rita L., Richard C. Atkinson and Ernest
R. Hilgard. Introduction to Psychology. 11th Ed.
New York: Harcourt Brace Jovanovich, Inc., 1996.`, D: `Atkinson, Rita L., Richard C. Atkinson and Ernest
R. Hilgard. Introduction to Psychology. 11th ed.
New York: Harcourt Brace Jovanovich, Inc., 1996.`, E: `Atkinson, Rita L., Richard C. Atkinson and Ernest
R. Hilgard. Introduction to Psychology. 11th ed.
New York: Harcourt Brace Jovanovich, Inc, 1996.` },
        correct: 'C'
    },
    'part1_116': {
        stem: `26. G. Stanley Hall established the first Psychological
Laboratory in North America at John Hopkins
Hospital.`,
        choices: { A: `G. Stanley Hall established the first Psychological
Laboratory in North America at John Hopkins
hospital.`, B: `G. Stanley Hall established the first Psychological
laboratory in North America at John Hopkins
Hospital.`, C: `G. Stanly Hall established the first Psychological
Laboratory in North America at John Hopkins
Hospital.`, D: `G. Stanley Hall established the first Psychological
Laboratory in North America at John Hopkins
Hospital.`, E: `G. Stanley Hale established the first Psychological
Laboratory in North America at John Hopkins
Hospital.` },
        correct: 'C'
    },
    'part1_117': {
        stem: `27. Wilhelm Wundt founded the first psychological
laboratory at the University of Leipzig in Germany
which was devoted to experimental psychology.`,
        choices: { A: `Wilhelm Wundt founded the first psychological
laboratory at the University of Liepzig in Germany
which was devoted to experimental psychology.`, B: `Wilhelm Wundt founded the first psychological
laboratory in the University of Leipzig on Germany
which was devoted to experimental psychology.`, C: `Wilhelm Wundt founded the first physiological
laboratory at the University of Leipzig in Germany
which was devoted to experimental psychology.`, D: `Wilhelm Wundt founded the first psychological
laboratory at the University of Leipzig on Germany
which was devoted to experimental psychology.`, E: `Wilhelm Wundt founded the first psychological
laboratory at the University of Leipzig in Germany
which was devoted to experimental psychology.` },
        correct: 'C'
    },
    'part1_118': {
        stem: `28. They use light energy and H2O to generate
chemical energy in the form of ATP and NADPH,
and they release O2 as a by-product.`,
        choices: { A: `They use light energy and H2O to generate
chemical energy on the form of ATP and NAPDH,
and they release O2 as a by-product.`, B: `They use light energy and H2O to generate
chemical energy in the form of ATP and NADPH,
and they release O2 as a by product.`, C: `They use light energy and H2O to generate
chemical energy in the form of ATP and NADPH,
and they release O2 as a by-product.`, D: `They use light energy and H2O to generate
chemical energy in the from of ATP and NADPH
and they release O2 as a by-product.`, E: `They use light energy and H2O to generate
chemical energy in the form of ADP and NADPH,
and they release O2 as a by-product.` },
        correct: 'C'
    },
    'part1_119': {
        stem: `29. University Town Center, 4545 LaJolla Village Dr., Space
201E, San Diego, CA 92122.`,
        choices: { A: `University Town Center, 4545 Lajolla Village Dr.
Space 201E, San Diego, CA 92122.`, B: `University Town Center, 4545; LaJolla Village Dr.,
Space 201E, San Diego, CA 92122.`, C: `University Town Center, 4545 LaJolla Village Dr.,
Space 201E, San Diego., CA 92122.`, D: `University Town Center, 4545 LaJolla Village Dr.,
Space 201E, San Diego, CA 92212.`, E: `University Town Center, 4545 LaJolla Village Dr.,
Space 201E, San Diego, CA 92122.` },
        correct: 'C'
    },
    'part1_120': {
        stem: `30. James Hardie Industries NV v Australian Securities and
Investments Commission (2010) 274 ALR 85.`,
        choices: { A: `James Hardie Industries NV V Australian Securities
and Investments Commission (2010) 274 ALR 85.`, B: `James Hardie Industries NV v Australian Securities
and Investments Commission (2010) 274 ALR 85.`, C: `James Hardie industries NV v Australian Securities
and Investments Commission (2010) 274 ALR 85.`, D: `James Hardie Industries NV v. Austrian Securities and
Investments Commission (2010) 274 ALR 85.`, E: `James Hardie Industries NV v Australian Securities
and Investments Commission (2010) 274 ARL 85.` },
        correct: 'C'
    }
};

const AppState = {
    sectionIndex: 0,
    currentItem: 1,
    answers: {},     // { 'part1_3': 'B' }
    revisited: {},   // { 'part1_3': true }
    gridFilter: 'all',
    timerInterval: null,
    timeLeft: 0
};

function getSection() {
    return SECTIONS[AppState.sectionIndex];
}

function itemKey(item) {
    return `${getSection().key}_${item}`;
}

// --- Subject lookup for Part 1 / Part 2 placeholder content ---
function getSubjectLabel(sectionKey, qNum) {
    if (sectionKey === 'part1') {
        if (qNum <= 40) return { title: 'TEST A. VERBAL', sub: 'Analogies' };
        if (qNum <= 80) return { title: 'TEST B. INDUCTIVE REASONING', sub: 'Pattern Recognition' };
        if (qNum <= 120) return { title: 'TEST C. QUANTITATIVE', sub: 'Problem Solving' };
        return { title: 'TEST D. PERCEPTUAL ACUITY', sub: 'Hidden Figures' };
    }
    if (sectionKey === 'part2') {
        if (qNum <= 50) return { title: 'TEST E. BIOLOGY', sub: '' };
        if (qNum <= 100) return { title: 'TEST F. PHYSICS', sub: '' };
        if (qNum <= 150) return { title: 'TEST G. SOCIAL SCIENCE', sub: '' };
        return { title: 'TEST H. CHEMISTRY', sub: '' };
    }
    return { title: '', sub: '' };
}

// --- Rendering ---

function renderAll() {
    renderDropdown();
    renderBody();
    renderPagination();
    renderAttemptedCounter();
    renderNavButtons();
}

function renderDropdown() {
    document.getElementById('section-dropdown').value = getSection().key;
}

function renderBody() {
    const section = getSection();
    const qNum = AppState.currentItem;

    document.getElementById('q-number-display').innerText = `Question ${qNum}`;

    const revisitBtn = document.getElementById('revisit-btn');
    revisitBtn.classList.toggle('active', !!AppState.revisited[itemKey(qNum)]);

    const questionTextEl = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices-container');
    const responseBox = document.getElementById('response-box');
    const clearBtn = document.getElementById('clear-response-btn');
    const rightTitle = document.getElementById('right-panel-title');

    if (section.kind === 'test') {
        // Question + revisit live on the LEFT, choices live on the RIGHT.
        const bankEntry = QUESTION_BANK[itemKey(qNum)];
        const { title, sub } = getSubjectLabel(section.key, qNum);

        if (bankEntry) {
            questionTextEl.innerHTML = `<strong>${title}</strong>${sub ? `<br><em>${sub}</em>` : ''}<br><br>` +
                `${bankEntry.stem}`;
        } else {
            questionTextEl.innerHTML = `<strong>${title}</strong>${sub ? `<br><em>${sub}</em>` : ''}<br><br>` +
                `This is a placeholder for Question ${qNum}. Read the item at the right and select the best answer.`;
        }

        choicesContainer.classList.remove('hidden');
        responseBox.classList.add('hidden');
        clearBtn.classList.remove('hidden');
        rightTitle.innerText = 'Select an option';

        choicesContainer.innerHTML = '';
        ['A', 'B', 'C', 'D'].forEach(opt => {
            const label = document.createElement('label');
            label.className = 'choice-label';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question-${section.key}-${qNum}`;
            radio.value = opt;
            radio.checked = AppState.answers[itemKey(qNum)] === opt;

            radio.addEventListener('change', (e) => {
                AppState.answers[itemKey(AppState.currentItem)] = e.target.value;
                renderPagination();
                renderAttemptedCounter();
            });

            const optionText = bankEntry ? bankEntry.choices[opt] : `Option ${opt}`;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(` (${opt}) ${optionText}`));
            choicesContainer.appendChild(label);
        });
    } else {
        // Reminders / Break / End: meta content on the LEFT, inert response box on the RIGHT.
        choicesContainer.classList.add('hidden');
        responseBox.classList.remove('hidden');
        clearBtn.classList.add('hidden');
        rightTitle.innerText = 'Enter your Response';
        responseBox.value = '';

        questionTextEl.innerHTML = getMetaScreenHTML(section.key);
        questionTextEl.className = 'meta-screen';
    }

    if (section.kind === 'test') {
        questionTextEl.className = '';
    }
}

function getMetaScreenHTML(sectionKey) {
    if (sectionKey === 'reminders') {
        return `
            <h2>IMPORTANT REMINDERS AND CERTIFYING STATEMENT</h2>
            <p>By proceeding, you certify that you are the registered examinee and that you will not use
            any prohibited materials (phones, reviewers, notes) during this simulation.</p>
            <p style="margin-top:12px;">Click <strong>Next</strong> to begin Part 1. Once the timer starts, it cannot be paused.</p>
        `;
    }
    if (sectionKey === 'break') {
        return `
            <h2>10-MINUTE BREAK</h2>
            <p>In the actual test, you will be monitored live by a human proctor even during the 10-minute
            break. You may stand, stretch, get refreshments or snacks, rest your eyes, or take a restroom
            break. Please send a message to your proctor before leaving the test area.</p>
            <p class="warn" style="margin-top:12px;">Do NOT use any prohibited item (cellphones, reviewers, etc.) during this break.</p>
            <div class="large-timer" id="break-large-timer">10:00</div>
            <p>After 10 minutes, click Next Section to proceed. There is no need to enter a response in the box at the right.</p>
        `;
    }
    if (sectionKey === 'end') {
        return `
            <h2>END OF TEST</h2>
            <p>You have completed the National Medical Admission Test (NMAT) simulation.</p>
            <p class="warn" style="margin-top:12px;">DO NOT CLICK Save and Close or Finish Test in the actual exam.</p>
            <p style="margin-top:12px;">In the actual test, you will NOT be able to return to any previous section once you submit.</p>
            <button class="nav-btn primary" id="btn-view-score" style="margin-top:20px;">View Score and Mistakes</button>
            <button class="nav-btn" id="btn-review-qa" style="margin-top:20px; background-color: #5bc0de; color: white;">Review Questions and Answers</button>
        `;
    }
    return '';
}

function renderPagination() {
    const container = document.getElementById('pagination-container');
    container.innerHTML = '';

    const section = getSection();
    const total = section.total;
    const current = AppState.currentItem;

    let start = Math.max(1, current - 4);
    let end = Math.min(total, start + 9);
    if (end - start < 9) start = Math.max(1, end - 9);

    for (let i = start; i <= end; i++) {
        const btn = document.createElement('button');
        btn.className = 'page-btn';
        btn.innerText = i;

        if (i === current) btn.classList.add('active');
        else if (AppState.revisited[`${section.key}_${i}`]) btn.classList.add('revisited');
        else if (AppState.answers[`${section.key}_${i}`]) btn.classList.add('attempted');

        btn.addEventListener('click', () => {
            AppState.currentItem = i;
            renderAll();
        });

        container.appendChild(btn);
    }
}

function renderAttemptedCounter() {
    const section = getSection();
    let count = 0;
    for (let i = 1; i <= section.total; i++) {
        if (AppState.answers[`${section.key}_${i}`]) count++;
    }
    document.getElementById('attempted-display').innerText = `Attempted: ${count}/${section.total}`;
}

function renderNavButtons() {
    const section = getSection();
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    const isFirstItem = AppState.currentItem === 1;
    const isLastSection = AppState.sectionIndex === SECTIONS.length - 1;
    const isLastItem = AppState.currentItem === section.total;

    // Once you've left a section you can never return to it (matches the real
    // NMAT), so "Previous" simply has nothing to do at item 1 of a section.
    prevBtn.innerText = 'Previous';
    prevBtn.disabled = isFirstItem;

    nextBtn.innerText = isLastItem ? 'Next Section' : 'Next';
    nextBtn.disabled = isLastItem && isLastSection;
}

// --- Section / Item Navigation ---

function goToItem(delta) {
    const section = getSection();
    const target = AppState.currentItem + delta;

    if (target < 1) {
        // Crossing backward into a previous section is not allowed once you've moved on.
        return;
    }
    if (target > section.total) {
        requestNextSection();
        return;
    }
    AppState.currentItem = target;
    renderAll();
}

function requestNextSection() {
    if (AppState.sectionIndex >= SECTIONS.length - 1) return;

    const nextSection = SECTIONS[AppState.sectionIndex + 1];
    const nextLabel = nextSection.label.replace(/^\d+\.\s*/, '');
    document.getElementById('confirm-message').innerText =
        `Next section: ${nextLabel}. Are you sure you would like to proceed to the next section? ` +
        `You will not be able to go back to this section again.`;
    document.getElementById('confirm-modal').classList.remove('hidden');
}

function goToNextSection() {
    if (AppState.sectionIndex < SECTIONS.length - 1) {
        AppState.sectionIndex++;
        AppState.currentItem = 1;
        renderAll();
        startSectionTimerIfNeeded();
    }
}

// --- Timers (run silently in the background; only the Break screen surfaces one,
// matching the real demo where Part 1 / Part 2 show no visible countdown) ---

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function startSectionTimerIfNeeded() {
    clearInterval(AppState.timerInterval);
    const section = getSection();
    const mainTimerEl = document.getElementById('main-timer');

    if (!section.timer) {
        mainTimerEl.classList.add('hidden');
        return;
    }

    mainTimerEl.classList.remove('hidden');
    AppState.timeLeft = section.timer;
    updateTimerDisplay();

    AppState.timerInterval = setInterval(() => {
        AppState.timeLeft--;
        updateTimerDisplay();
        if (AppState.timeLeft <= 0) {
            clearInterval(AppState.timerInterval);
            goToNextSection();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const formatted = formatTime(AppState.timeLeft);
    document.getElementById('main-timer').innerText = formatted;

    if (getSection().key === 'break') {
        const el = document.getElementById('break-large-timer');
        if (el) el.innerText = formatted;
    }
}

// --- Grid Modal ---

function renderGrid() {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
    const section = getSection();

    for (let i = 1; i <= section.total; i++) {
        const key = `${section.key}_${i}`;
        if (AppState.gridFilter === 'attempted' && !AppState.answers[key]) continue;
        if (AppState.gridFilter === 'revisited' && !AppState.revisited[key]) continue;
        if (AppState.gridFilter === 'unattempted' && (AppState.answers[key] || AppState.revisited[key])) continue;

        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerText = i;

        if (i === AppState.currentItem) gridItem.classList.add('active');
        if (AppState.revisited[key]) gridItem.classList.add('revisited');
        else if (AppState.answers[key]) gridItem.classList.add('attempted');

        gridItem.addEventListener('click', () => {
            AppState.currentItem = i;
            document.getElementById('grid-modal').classList.add('hidden');
            renderAll();
        });

        gridContainer.appendChild(gridItem);
    }
}

// --- Event Wiring ---

document.getElementById('btn-start-test').addEventListener('click', () => {
    document.getElementById('start-view').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    AppState.sectionIndex = 0;
    AppState.currentItem = 1;
    renderAll();
    startSectionTimerIfNeeded();
});

document.getElementById('btn-prev').addEventListener('click', () => goToItem(-1));
document.getElementById('btn-next').addEventListener('click', () => goToItem(1));
document.getElementById('nav-left').addEventListener('click', () => goToItem(-1));
document.getElementById('nav-right').addEventListener('click', () => goToItem(1));

document.getElementById('confirm-yes').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
    goToNextSection();
});

document.getElementById('confirm-no').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
});

document.getElementById('revisit-btn').addEventListener('click', () => {
    const key = itemKey(AppState.currentItem);
    if (AppState.revisited[key]) delete AppState.revisited[key];
    else AppState.revisited[key] = true;
    renderBody();
    renderPagination();
});

document.getElementById('clear-response-btn').addEventListener('click', () => {
    const key = itemKey(AppState.currentItem);
    if (AppState.answers[key]) {
        delete AppState.answers[key];
        renderBody();
        renderPagination();
        renderAttemptedCounter();
    }
});

document.getElementById('open-grid-btn').addEventListener('click', () => {
    AppState.gridFilter = 'all';
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.tab-btn[data-filter="all"]').classList.add('active');
    renderGrid();
    document.getElementById('grid-modal').classList.remove('hidden');
});

document.getElementById('close-grid-btn').addEventListener('click', () => {
    document.getElementById('grid-modal').classList.add('hidden');
});

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        AppState.gridFilter = e.target.dataset.filter;
        renderGrid();
    });
});

// --- Score & Mistakes Report ---
// Only items present in QUESTION_BANK are gradable; everything else is a
// placeholder and is excluded from scoring.

function buildResults() {
    const bySubject = {}; // { 'Quantitative': { correct: 0, total: 0, mistakes: [] } }

    Object.keys(QUESTION_BANK).forEach((key) => {
        const q = QUESTION_BANK[key];
        const given = AppState.answers[key];
        if (!bySubject[q.subject]) bySubject[q.subject] = { correct: 0, total: 0, mistakes: [] };
        bySubject[q.subject].total++;

        if (given && given === q.correct) {
            bySubject[q.subject].correct++;
        } else {
            bySubject[q.subject].mistakes.push({ key, q, given: given || null });
        }
    });

    return bySubject;
}

function formatMistakeForCopy(item) {
    const { q, given } = item;
    const lines = [];
    lines.push(q.stem);
    ['A', 'B', 'C', 'D'].forEach(opt => {
        let line = `${opt}. ${q.choices[opt]}`;
        if (opt === q.correct) line += ' (Correct Answer)';
        if (given && opt === given && given !== q.correct) line += ' (Your Answer)';
        lines.push(line);
    });
    if (!given) lines.push('(Not answered)');
    lines.push('Error tag: ');
    return lines.join('\n');
}

function copyText(text, feedbackEl) {
    const showFallback = () => {
        feedbackEl.classList.remove('hidden');
        feedbackEl.value = text;
        feedbackEl.select();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(showFallback);
    } else {
        showFallback();
    }
}

function renderScoreReport() {
    const results = buildResults();
    const body = document.getElementById('score-report-body');
    body.innerHTML = '';

    let overallCorrect = 0;
    let overallTotal = 0;
    const allMistakeTexts = [];

    Object.keys(results).forEach((subject) => {
        const r = results[subject];
        overallCorrect += r.correct;
        overallTotal += r.total;

        const section = document.createElement('div');
        section.className = 'score-section';

        const heading = document.createElement('h3');
        heading.innerText = `${subject}: ${r.correct}/${r.total} correct`;
        section.appendChild(heading);

        if (r.mistakes.length === 0) {
            const p = document.createElement('p');
            p.innerText = 'No mistakes in this sample section.';
            section.appendChild(p);
        }

        r.mistakes.forEach((item, idx) => {
            const text = formatMistakeForCopy(item);
            allMistakeTexts.push(text);

            const card = document.createElement('div');
            card.className = 'mistake-card';

            const pre = document.createElement('pre');
            pre.innerText = text;

            const copyBtn = document.createElement('button');
            copyBtn.className = 'nav-btn';
            copyBtn.innerText = 'Copy';

            const fallback = document.createElement('textarea');
            fallback.className = 'copy-fallback hidden';
            fallback.readOnly = true;

            copyBtn.addEventListener('click', () => copyText(text, fallback));

            card.appendChild(pre);
            card.appendChild(copyBtn);
            card.appendChild(fallback);
            section.appendChild(card);
        });

        body.appendChild(section);
    });

    document.getElementById('score-overall').innerText =
        overallTotal > 0 ? `Overall (graded sample items): ${overallCorrect}/${overallTotal} correct` : 'No graded sample items answered yet.';

    const copyAllBtn = document.getElementById('copy-all-mistakes');
    const copyAllFallback = document.getElementById('copy-all-fallback');
    copyAllBtn.onclick = () => copyText(allMistakeTexts.join('\n\n'), copyAllFallback);
}

document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'btn-view-score') {
        renderScoreReport();
        document.getElementById('score-modal').classList.remove('hidden');
    }
});

document.getElementById('close-score-btn').addEventListener('click', () => {
    document.getElementById('score-modal').classList.add('hidden');
});

function renderReviewQA() {
    const mainContent = document.getElementById('main-content');
    let html = '<h2>Review Questions and Answers</h2><div class="review-container" style="text-align:left; padding: 20px; overflow-y:auto; max-height:80vh;">';

    // Group by section
    SECTIONS.forEach(sec => {
        if (sec.kind !== 'test') return;
        html += `<h3>${sec.label}</h3>`;

        let currentSubject = '';
        for (let i = 1; i <= sec.total; i++) {
            const key = `${sec.key}_${i}`;
            const q = QUESTION_BANK[key];
            if (!q) continue; // Skip unpopulated questions

            const subjLabel = getSubjectLabel(sec.key, i).title;
            if (subjLabel !== currentSubject) {
                html += `<h4>${subjLabel}</h4>`;
                currentSubject = subjLabel;
            }

            const userAns = AppState.answers[key];
            const correctAns = q.correct;

            html += `<div class="review-item" style="margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #eee;">`;
            html += `<div><strong>Q${i}.</strong> ${q.stem}</div>`;
            html += `<div class="review-choices" style="margin-top: 10px;">`;

            Object.keys(q.choices).forEach(choiceKey => {
                const isCorrect = choiceKey === correctAns;
                const isUser = choiceKey === userAns;
                let colorStyle = '';

                if (isCorrect) {
                    colorStyle = 'color: #8db600; font-weight: bold;'; // apple-green
                } else if (isUser) {
                    colorStyle = 'color: #00ffff; font-weight: bold;'; // fluorescent blue
                }

                html += `<div style="${colorStyle}"><strong>${choiceKey}.</strong> ${q.choices[choiceKey]}</div>`;
            });

            html += `</div></div>`;
        }
    });

    html += '</div><button onclick="location.reload()" class="btn primary" style="margin-top: 15px;">Restart Test</button>';
    mainContent.innerHTML = html;

    const bottomNav = document.getElementById('bottom-nav');
    if (bottomNav) bottomNav.style.display = 'none';
}
