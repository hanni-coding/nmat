import os
import shutil
import re

# 1. Copy ALL images from the cropped folders sequentially and map them accurately.
os.makedirs("Half Mock 1 Part 1/images", exist_ok=True)
os.makedirs("part1_template/images", exist_ok=True)
os.makedirs("full_template/images", exist_ok=True)

inductive_dir = "/tmp/file_attachments/Half Mock 1 Part 1/Inductive Reasoning cropped/"
perceptual_dir = "/tmp/file_attachments/Half Mock 1 Part 1/Perceptual Acuity cropped/"

inductive_files = sorted(os.listdir(inductive_dir)) # there are exactly 20 files
perceptual_files = sorted(os.listdir(perceptual_dir)) # there are exactly 20 files

# Let's check reading comprehension issues. What errors?
# In my parse script, I attached "16. Which is the best conclusion of the passage?" and its choices directly.
# Wait, let's fix it by pulling exact questions from the Verbal json I saved earlier.
passages = [
    {
        "name": "Selection 1",
        "passage": "Filmmaking began when Joseph Nicéphore invented photography. Since that time, it has been possible to take a physical image of something. Filmmaking really started when scientists made different devices. Phenakistoscopes, Zootropes, Zoetropes, Praxinoscopes and Kinetoscopes were made. Then, a great experiment was conducted. Mr. E. Muybridge created a sort of flip book by setting up a row of cameras and then having an animal walk across the background. Then he programed every one of the cameras to go off one after the other. The animal was photographed in every single position so that people could study the animal's movements. Later, Mr. Muybridge's pictures were displayed in the University of Pennsylvania. Once film projectors were invented, a lot of people could study things such as a jaguar pouncing, an ostrich walking or a horse trotting. These things were new to them. Nobody had seen these things before. Soon, scientists invented a way to record their movements using a single camera. They no longer had to take a lot of pictures using a row of cameras. The video camera had been born.",
        "start_q": 16,
        "end_q": 16
    },
    {
        "name": "Selection 2",
        "passage": "A Greek philosopher named Democritus said that all atoms are small, hard particles. He thought that atoms were made of a single material formed into different shapes and sizes. The word \"atom\" is derived from the Greek word \"atomos\" which means \"not able to be divided.\" In 1803, John Dalton, a school teacher, proposed his atomic theory. Dalton's theory states that elements (substances composed of only one type of atom combine in certain proportions to form compounds). In 1897, a British scientist named J. J. Thomson experimented with a cathode-ray tube which had a positively charged plate. The plate attracted negatively charged particles that we now call electrons. Rather than being indivisible particles, Thomson's plum-pudding atomic model states that atoms contain negatively charged electrons embedded within a sea of positive charge. In 1909, Ernest Rutherford conducted an experiment in which he aimed a beam of positively charged particles at a thin sheet of gold foil. Most of the particles went straight through the gold foil, some were deflected and others bounced straight back. Because some of the particles bounced straight back, Rutherford was able to show that the center of the atom, the nucleus, is positively charged and very small. The nucleus contains protons, which are positively charged, and neutrons, which are neutral. In 1913, Niels Bohr, a Danish scientist who worked with Dr. Rutherford, proposed that electrons move around the nucleus in certain paths, or energy levels. This model was improved upon by an Austrian physicist named Erwin Schröedinger and a German physicist named Werner Heisenberg. Schröedinger and Heisenberg proposed that electrons do not move in definite paths around the nucleus, but are be found in regions around the nucleus called electron clouds.",
        "start_q": 17,
        "end_q": 19
    },
    {
        "name": "Selection 3",
        "passage": "When another old cave is discovered in the south of France, it is not usually news. Rather, it is an ordinary event. Such discoveries are so frequent these days that hardly anybody pays heed to them. However, when the Lascaux cave complex was discovered in 1940, the world was amazed. Painted directly on its walls were hundreds of scenes showing how people lived thousands of years ago. The scenes show people hunting animals, such as bison or wild cats. Other images depict birds and, most noticeably, horses, which appear in more than 300 wall images, by far outnumbering all other animals. Early artists drawing these animals accomplished a monumental and difficult task. They did not limit themselves to the easily accessible walls but carried their painting materials to spaces that required climbing steep walls or crawling into narrow passages in the Lascaux complex. Unfortunately, the paintings have been exposed to the destructive action of water and temperature changes, which easily wear the images away. Because the Lascaux caves have many entrances, air movement has also damaged the images inside. Although they are not out in the open air, where natural light would have destroyed them long ago, many of the images have deteriorated and are barely recognizable. To prevent further damage, the site was closed to tourists in 1963, 23 years after it was discovered.",
        "start_q": 20,
        "end_q": 22
    },
    {
        "name": "Selection 4",
        "passage": "The mental consequences of our online info-crunching are not universally bad. Certain cognitive skills are strengthened by our use of computers and the Net. These tend to involve more primitive mental functions, such as hand-eye coordination, reflex response, and the processing of visual cues. One much-cited study of video gaming revealed that after just 10 days of playing action games on computers, a group of young people had significantly boosted the speed with which they could shift their visual focus between various images and tasks. It’s likely that Web browsing also strengthens brain functions related to fast-paced problem solving, particularly when it requires spotting patterns in a welter of data. A British study of the way women search for medical information online indicated that an experienced Internet user can, at least in some cases, assess the trustworthiness and probable value of a Web page in a matter of seconds. The more we practice surfing and scanning, the more adept our brain becomes at those tasks. But it would be a serious mistake to look narrowly at such benefits and conclude that the Web is making us smarter. In a Science article published in early 2009, prominent developmental psychologist Patricia Greenfield reviewed more than 40 studies of the effects of various types of media on intelligence and learning ability. She concluded that “every medium develops some cognitive skills at the expense of others.” Our growing use of the Net and other screen-based technologies, she wrote, has led to the “widespread and sophisticated development of visual-spatial skills.” But those gains go hand in hand with a weakening of our capacity for the kind of “deep processing” that underpins “mindful knowledge acquisition, inductive analysis, critical thinking, imagination, and reflection.” We know that the human brain is highly plastic; neurons and synapses change as circumstances change. When we adapt to a new cultural phenomenon, including the use of a new medium, we end up with a different brain, says Michael Merzenich, a pioneer of the field of neuroplasticity. That means our online habits continue to reverberate in the workings of our brain cells even when we’re not at a computer. We’re exercising the neural circuits devoted to skimming and multitasking while ignoring those used for reading and thinking deeply. (Excerpt from Nicholas Carr, “Author Nicholas Carr: The Web Shatters Focus, Rewires Brains.” ©2010 by Condé Nast.)",
        "start_q": 23,
        "end_q": 25
    },
    {
        "name": "Selection 5",
        "passage": "That half the human race is excluded by the other half from any participation in government; that they are native by birth but foreign by law in the very land where they were born; and that they are property-owners yet have no direct influence or representation: are all political phenomena apparently impossible to explain on abstract principle. But on another level of ideas, the question changes and may be easily resolved. The purpose of all these institutions must be the happiness of the greatest number. Everything that leads us farther from this purpose is in error; everything that brings us closer is truth. If the exclusion from public employments decreed against women leads to a greater sum of mutual happiness for the two sexes, then this becomes a law that all Societies have been compelled to acknowledge and sanction.\n\nAny other ambition would be a reversal of our primary destinies; and it will never be in women's interest to change the assignment they have received.\n\nIt seems to us incontestable that our common happiness, above all that of women, requires that they never aspire to the exercise of political rights and functions. Here we must seek their interests in the wishes of nature. Is it not apparent, that their delicate constitutions, their peaceful inclinations, and the many duties of motherhood, set them apart from strenuous habits and onerous duties, and summon them to gentle occupations and the cares of the home? And is it not evident that the great conserving principle of Societies, which makes the division of powers a source of harmony, has been expressed and revealed by nature itself, when it divided the functions of the two sexes in so obviously distinct a manner? This is sufficient; we need not invoke principles that are inapplicable to the question. Let us not make rivals of life's companions. You must, you truly must allow the persistence of a union that no interest, no rivalry, can possibly undo. Understand that the good of all demands this of you.\n\n(Excerpt from Talleyrand et al., Report on Public Instruction. Originally published in 1791)",
        "start_q": 26,
        "end_q": 26
    },
    {
        "name": "Selection 6",
        "passage": "Contending for the rights of woman, my main argument is built on this simple principle, that if she be not prepared by education to become the companion of man, she will stop the progress of knowledge and virtue; for truth must be common to all, or it will be inefficacious with respect to its influence on general practice. And how can woman be expected to co- operate unless she know why she ought to be virtuous? unless freedom strengthen her reason till she comprehend her duty, and see in what manner it is connected with her real good? If children are to be educated to understand the true principle of patriotism, their mother must be a patriot; and the love of mankind, from which an orderly train of virtues spring, can only be produced by considering the moral and civil interest of mankind; but the education and situation of woman, at present, shuts her out from such investigations....  Consider, sir, dispassionately, these observations—for a glimpse of this truth seemed to open before you when you observed, “that to see one half of the human race excluded by the other from all participation of government, was a political phenomenon that, according to abstract principles, it was impossible to explain.” If so, on what does your constitution rest? If the abstract rights of man will bear discussion and explanation, those of woman, by a parity of reasoning, will not shrink from the same test: though a different opinion prevails in this country, built on the very arguments which you use to justify the oppression of woman—prescription.  Consider—I address you as a legislator— whether, when men contend for their freedom, and to be allowed to judge for themselves respecting their own happiness, it be not inconsistent and unjust to subjugate women, even though you firmly believe that you are acting in the manner best calculated to promote their happiness? Who made man the exclusive judge, if woman partake with him the gift of reason?  In this style, argue tyrants of every denomination, from the weak king to the weak father of a family; they are all eager to crush reason; yet always assert that they usurp its throne only to be useful. Do you not act a similar part, when you force all women, by denying them civil and political rights, to remain immured in their families groping in the dark?  (Excerpt from Mary Wollstonecraft, A Vindication of the Rights of Woman. Originally published in 1792. Talleyrand was a French diplomat; the Report was a plan for national education. Wollstonecraft, a British novelist and political writer, wrote Vindication in response to Talleyrand.)",
        "start_q": 27,
        "end_q": 30
    }
]

def get_passage(q_num):
    for p in passages:
        if p["start_q"] <= q_num <= p["end_q"]:
            return f"<b>{p['name']}</b><br><br>{p['passage'].replace(chr(10), '<br>')}<br><br>"
    return ""

# The reading comprehension questions
verbal_reading = {
    16: ("16. Which is the best conclusion of the passage?", {"A": "Filmmaking commenced as photography was invented.", "B": "Scientists invented a way to record movements of things using a single camera.", "C": "Film projectors were used to study things such as a pouncing jaguar, an ostrich walking or a horse trotting.", "D": "None of the above."}),
    17: ("17. Who said that all atoms are small, hard particles?", {"A": "J. J. Thomson", "B": "Werner Heisenberg", "C": "Erwin Schröedinger", "D": "Democritus"}),
    18: ("18. Who proposed that electrons move around the nucleus in certain paths, or energy levels?", {"A": "Democritus", "B": "Werner Heisenberg", "C": "Niels Bohr", "D": "None of them."}),
    19: ("19. Ernest Rutherford conducted an experiment, did several things in that regard, EXCEPT:", {"A": "Proposed that electrons do not move in definite paths around the nucleus.", "B": "Observed that the particles went straight through the gold foil and some were deflected and others bounced", "C": "Aimed a beam of positively charged particles at a thin sheet of gold foil.", "D": "Showed that the center of the atom, the nucleus, is positively charged and very small."}),
    20: ("20. Which title best summarizes the main idea of the passage?", {"A": "Wild Animals in Art", "B": "Hidden Prehistoric Paintings", "C": "Exploring Caves Respectfully", "D": "Determining the Age of French Caves"}),
    21: ("21. Why was painting inside the Lascaux complex a difficult task?", {"A": "It was completely dark inside.", "B": "The caves were full of wild animals.", "C": "Painting materials were hard to find.", "D": "Many painting spaces were difficult to reach."}),
    22: ("22. The author states that some of the images in the Lascaux caves", {"A": "are now barely recognizable.", "B": "were painted in 1963.", "C": "were completely destroyed by water.", "D": "were hidden by artists."}),
    23: ("23. The author of Selection 5 indicates which of the following about the use of screen-based technologies?", {"A": "It should be thoroughly studied.", "B": "It makes the brain increasingly rigid.", "C": "It has some positive effects.", "D": "It should be widely encouraged"}),
    24: ("24. The author of the selection indicates that becoming adept at using the Internet can", {"A": "make people complacent about their health.", "B": "undermine the ability to think deeply.", "C": "increase people's social contacts.", "D": "improve people's self-confidence"}),
    25: ("25. As used in the passage, \"plastic\" most nearly means", {"A": "creative.", "B": "artificial.", "C": "malleable.", "D": "sculptura"}),
    26: ("26. It can be inferred that the authors of the selection believe that running a household and raising children", {"A": "are rewarding for men as well as for women.", "B": "yield less value for society than do the roles performed by men.", "C": "entail very few activities that are difficult or unpleasant.", "D": "require skills similar to those needed to run a country or a business."}),
    27: ("27. The author's argument in Selection 6 relies on the belief that", {"A": "women are naturally more virtuous than men.", "B": "men are generally unsuited to raising children.", "C": "women should not be prevented from participating in government.", "D": "the principles of patriotism must be explicitly taught."}),
    28: ("28. Which choice best summarizes Wollstonecraft's argument in the second paragraph of Selection 6?", {"A": "If men understand the principles of justice, they must apply them equally to women.", "B": "Men cannot explain the phenomenon of excluding women from government.", "C": "The constitution rests on the abstract rights of man, which apply universally.", "D": "Men justify their oppression of women by relying on long-standing customs."}),
    29: ("29. The phrase \"immured in their families groping in the dark\" serves primarily to", {"A": "highlight the physical isolation of women.", "B": "emphasize the intellectual deprivation imposed on women.", "C": "describe the literal darkness of domestic life.", "D": "contrast women's domesticity with men's public life."}),
    30: ("30. In the final paragraph of Selection 6, Wollstonecraft's tone can best be described as", {"A": "placating and submissive.", "B": "impassioned and challenging.", "C": "resigned and sorrowful.", "D": "mocking and condescending."})
}

# Fix images
def inject(filename):
    with open(filename, "r") as f:
        content = f.read()

    # 1. Update Reading Comprehension
    for i in range(16, 31):
        stem_start = content.find(f"    'part1_{i}': {{")
        if stem_start != -1:
            end_bracket = content.find("    },", stem_start)
            if end_bracket == -1: end_bracket = content.find("    }", stem_start)

            passage_html = get_passage(i)
            q_stem, q_choices = verbal_reading[i]

            choices_str = ", ".join([f"{k}: `{v.replace('`', '')}`" for k, v in q_choices.items()])
            new_entry = f"    'part1_{i}': {{\n        stem: `{passage_html}<b>{q_stem}</b>`,\n        choices: {{ {choices_str} }},\n        correct: 'C'\n    }}"

            content = content[:stem_start] + new_entry + content[end_bracket+5:]

    # 2. Update Inductive Images 31-50
    # Copy files
    for j, f_name in enumerate(inductive_files):
        q_num = 31 + j
        dest_name = f"inductive_{q_num}.jpg"
        src_path = os.path.join(inductive_dir, f_name)
        shutil.copy(src_path, f"Half Mock 1 Part 1/images/{dest_name}")
        shutil.copy(src_path, f"part1_template/images/{dest_name}")
        shutil.copy(src_path, f"full_template/images/{dest_name}")

        # update script
        stem_start = content.find(f"    'part1_{q_num}': {{")
        if stem_start != -1:
            end_bracket = content.find("    },", stem_start)
            if end_bracket == -1: end_bracket = content.find("    }", stem_start)

            new_entry = f"    'part1_{q_num}': {{\n        stem: `{q_num}. <br><img src=\"images/{dest_name}\" style=\"max-width: 100%;\" alt=\"Missing image\">`,\n        choices: {{ A: `A`, B: `B`, C: `C`, D: `D`, E: `E` }},\n        correct: 'C'\n    }}"
            content = content[:stem_start] + new_entry + content[end_bracket+5:]

    # 3. Update Perceptual Images 91-110
    for j, f_name in enumerate(perceptual_files):
        q_num = 91 + j
        dest_name = f"perceptual_{q_num}.jpg"
        src_path = os.path.join(perceptual_dir, f_name)
        shutil.copy(src_path, f"Half Mock 1 Part 1/images/{dest_name}")
        shutil.copy(src_path, f"part1_template/images/{dest_name}")
        shutil.copy(src_path, f"full_template/images/{dest_name}")

        # update script
        stem_start = content.find(f"    'part1_{q_num}': {{")
        if stem_start != -1:
            end_bracket = content.find("    },", stem_start)
            if end_bracket == -1: end_bracket = content.find("    }", stem_start)

            new_entry = f"    'part1_{q_num}': {{\n        stem: `{q_num}. <br><img src=\"images/{dest_name}\" style=\"max-width: 100%;\" alt=\"Missing image\">`,\n        choices: {{ A: `A`, B: `B`, C: `C`, D: `D`, E: `E` }},\n        correct: 'C'\n    }}"
            content = content[:stem_start] + new_entry + content[end_bracket+5:]


    with open(filename, "w") as f:
        f.write(content)

inject("part1_template/script.js")
inject("full_template/script.js")
inject("Half Mock 1 Part 1/script.js")
