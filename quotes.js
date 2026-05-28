// Curated Quote Database for Atoms of Grit
// Includes the user's specific quotes and high-vibe classical expansions.

const QUOTE_LIBRARY = [
  // --- USER'S SPECIFIC QUOTES ---
  {
    text: "Life can only be understood backwards but must be lived forwards.",
    author: "Søren Kierkegaard",
    category: "Faith & Reflection"
  },
  {
    text: "There are only two kinds of people, those who say to God 'Thy Will Be Done,' and those to whom God says, 'All right then, have it your way.'",
    author: "C.S. Lewis",
    category: "Faith & Reflection"
  },
  {
    text: "Isn't it funny how day by day nothing changes but when you look back everything is different...",
    author: "C.S. Lewis",
    category: "Faith & Reflection"
  },
  {
    text: "There is no defeat except within, no really insurmountable barrier save one’s own inherent weakness of purpose.",
    author: "Unknown",
    category: "Resilience"
  },
  {
    text: "We must all be set back before we can go on to our greatest achievements and success in life.",
    author: "Unknown",
    category: "Resilience"
  },
  {
    text: "No matter where we stand together, we can look upon the same sun, the same moon, and the same sky, so we are forever one family.",
    author: "Anonymous",
    category: "Relationships"
  },
  {
    text: "Loving life can be easy living in a different country. No one knows you, and you hold life on your hands all alone, you are more master of yourself than any other time. You can do and become without an audience.",
    author: "Hannah Arendt",
    category: "Self-Mastery"
  },
  {
    text: "Change the scope of your life by changing the scope of your day, hour, and minute.",
    author: "Elder Dieter F. Uchtdorf",
    category: "Action"
  },
  {
    text: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood...",
    author: "Theodore Roosevelt",
    category: "Resilience"
  },
  {
    text: "Life is not a problem to be solved but a reality to be experienced.",
    author: "Søren Kierkegaard",
    category: "Faith & Reflection"
  },
  {
    text: "Above all, do not lose your desire to walk. Everyday I walk myself into a state of well-being and walk away from every illness. I have walked myself into my best thoughts, and I know of no thought so burdensome that one cannot walk away from it.",
    author: "Søren Kierkegaard",
    category: "Self-Mastery"
  },
  {
    text: "You never know how strong you are until being strong is the only choice you have!",
    author: "Anonymous",
    category: "Resilience"
  },
  {
    text: "God loves you no less when you struggle than you do when you triumph.",
    author: "Elder Dieter F. Uchtdorf",
    category: "Faith & Reflection"
  },
  {
    text: "How can you and I really expect to glide naively through life, as if to say, 'Lord, give me experience, but not grief, not sorrow, not pain, not opposition, not betrayal, and certainly not to be forsaken. Keep from me, Lord, all those experiences which made Thee what Thou art!'",
    author: "Elder Neal A. Maxwell",
    category: "Faith & Reflection"
  },
  {
    text: "The only way to get to the top of the mountain was to take one step at a time. If you thought about the journey ahead of you while still standing at its base, you’d be defeated mentally long before you got anywhere near the summit.",
    author: "Unknown",
    category: "Action"
  },
  {
    text: "If you don't take the time right now to create the life you want, you’re going to spend a lot of time dealing with a life you don’t want.",
    author: "Kevin Ngo",
    category: "Action"
  },
  {
    text: "Becoming the best version of yourself requires you to continuously edit your beliefs, and to upgrade and expand your identity.",
    author: "James Clear",
    category: "Identity & Habits"
  },
  {
    text: "Let go of your attachment to being right and suddenly your mind is more open and free.",
    author: "Ralph Marston",
    category: "Self-Mastery"
  },
  {
    text: "Trials and Tribulations tend to squeeze the artificiality out of us, leaving the essence of what we really are and clarifying what we truly yearn for.",
    author: "Elder Neal A. Maxwell",
    category: "Faith & Reflection"
  },
  {
    text: "People will forget what you said, people will forget what you did, but they will never forget how you made them feel.",
    author: "Maya Angelou",
    category: "Relationships"
  },
  {
    text: "Not everyone thinks the same way you think, knows the things you know, believes the things you believe, or acts the way you would act. Remember this and you will go a long way in getting along with people.",
    author: "Arthur Forman",
    category: "Relationships"
  },
  {
    text: "A teachable spirit and a humbleness to admit your ignorance or your mistake will save you a lot of pain. However, if you are a person that knows it all, then you’ve got a lot of heavy-hearted experiences coming your way.",
    author: "Ron Carpenter Jr.",
    category: "Self-Mastery"
  },
  {
    text: "There is never a reason to be defensive. If you are wrong, you have no defense. If you are right, you need no defense.",
    author: "Unknown",
    category: "Self-Mastery"
  },
  {
    text: "When you feel the spirit pulling you in a difficult direction, know that anything the Savior is taking you towards is greater than anything he is asking you to leave behind.",
    author: "Unknown",
    category: "Faith & Reflection"
  },
  {
    text: "Satisfaction lies in effort, not in the attainment. Full effort is full victory!",
    author: "Mahatma Gandhi",
    category: "Action"
  },
  {
    text: "One of life's hardest lessons is letting go. Whether it is guilt, loss, anger, love, or betrayal. Change is never easy. We fight to hold on and we fight to let go.",
    author: "Unknown",
    category: "Self-Mastery"
  },
  {
    text: "There should be no boundaries to human endeavor. However bad life may seem, there is always something you can do, and succeed at. While there is life, there is hope.",
    author: "Stephen Hawking",
    category: "Resilience"
  },
  {
    text: "People don't change fundamentally, but they do evolve. They grow and become self-aware. Give someone a second chance and you might end up being surprised.",
    author: "Unknown",
    category: "Relationships"
  },
  {
    text: "Love is taking a few steps backwards, maybe even more, to give way to the happiness of the person you love.",
    author: "Winnie the Pooh",
    category: "Relationships"
  },
  {
    text: "How lucky am I to have something that makes saying goodbye so hard.",
    author: "Winnie the Pooh",
    category: "Relationships"
  },
  {
    text: "Life never ceases to have meaning; even suffering ceases to be suffering at the moment it finds a meaning.",
    author: "Viktor Frankl (Man's Search for Meaning)",
    category: "Faith & Reflection"
  },
  {
    text: "So often in life a deserved blessing is quickly followed by a needed stretching... The sharp, side-by-side contrast of the sweet and the bitter is essential until the very end of this brief, mortal experience.",
    author: "Elder Neal A. Maxwell",
    category: "Faith & Reflection"
  },
  {
    text: "What would his love mean if Christ were not able to do otherwise? His agency—His ability to change, even when He did everything correctly—is crucial to the meaning of His actions.",
    author: "C.S. Lewis",
    category: "Faith & Reflection"
  },
  {
    text: "When I betray myself, I enter the box—I become self-deceived: 1. Inflate other’s faults. 2. Inflate own virtue. 3. Inflate the value of things that justify my self-betrayal. 4. Blame others.",
    author: "The Anatomy of Peace",
    category: "Relationships"
  },
  {
    text: "Someone who has a 'why' to live for can bear almost any 'how'.",
    author: "Friedrich Nietzsche",
    category: "Resilience"
  },
  {
    text: "Prayer is for the uplifting of the suppliant. God without our prayers would be God; but we without prayer cannot be admitted into the kingdom of God.",
    author: "Unknown",
    category: "Faith & Reflection"
  },
  {
    text: "There are far, far better things ahead than any we leave behind.",
    author: "C.S. Lewis",
    category: "Faith & Reflection"
  },
  {
    text: "Do not let your happiness depend on something you may lose.",
    author: "C.S. Lewis",
    category: "Faith & Reflection"
  },
  {
    text: "Pain that does not transform gets transmitted.",
    author: "Anonymous",
    category: "Relationships"
  },
  {
    text: "It is important to draw wisdom from many different places. If we take it from only one place, it becomes rigid and stale.",
    author: "Uncle Iroh",
    category: "Self-Mastery"
  },
  {
    text: "In the darkest times, hope is something you choose to give yourself. That is the meaning of inner strength.",
    author: "Uncle Iroh",
    category: "Resilience"
  },
  {
    text: "Perfection and power are overrated. I think you are very smart by choosing happiness and love.",
    author: "Uncle Iroh",
    category: "Relationships"
  },
  {
    text: "Never argue with a fool, onlookers may not be able to tell the difference.",
    author: "Mark Twain",
    category: "Relationships"
  },
  {
    text: "I would not give a fig for the simplicity on this side of complexity. But I would give my life for the simplicity on the other side of complexity.",
    author: "Justice Oliver Wendell Holmes Jr.",
    category: "Self-Mastery"
  },
  {
    text: "Any fool can criticize, complain, and condemn—and most fools do. But it takes character and self-control to be understanding and forgiving.",
    author: "Dale Carnegie",
    category: "Relationships"
  },
  {
    text: "The more aware we are of our basic paradigms, maps, or assumptions... the more we can take responsibility for those paradigms, examine them, test them against reality, listen to others, and be open to their perceptions...",
    author: "Stephen R. Covey",
    category: "Self-Mastery"
  },
  {
    text: "We must not cease from exploration and the end of all our exploring will be to arrive where we began and know the place for the first time.",
    author: "T.S. Eliot",
    category: "Faith & Reflection"
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    category: "Identity & Habits"
  },
  {
    text: "Getting over a painful experience is much like crossing monkey bars. You have to let go at some point to move forward.",
    author: "C.S. Lewis",
    category: "Self-Mastery"
  },
  {
    text: "The successful person has the habit of doing the things failures don't like to do. They don't like doing them necessarily. But their disliking is subordinated to the strength of their purpose.",
    author: "E.M. Gray",
    category: "Action"
  },
  {
    text: "Leadership is communicating to another their worth and potential so clearly they are inspired to see it in themselves.",
    author: "Stephen R. Covey",
    category: "Relationships"
  },
  {
    text: "Give yourself fully to your endeavors. Decide to construct your character through excellent actions and determine to pay the price of a worthy goal. The trials you encounter will introduce you to your strengths.",
    author: "Epictetus",
    category: "Stoicism"
  },
  {
    text: "I'd rather be excluded for who I include, than included for who I exclude.",
    author: "Anonymous",
    category: "Relationships"
  },
  {
    text: "Madness is rare in individuals—but in groups, states, and societies, it is the norm.",
    author: "Friedrich Nietzsche",
    category: "Self-Mastery"
  },
  {
    text: "Every hour focus your mind attentively, on the performance of the task at hand, with dignity, human sympathy, benevolence and freedom, and leave aside all other thoughts.",
    author: "Marcus Aurelius",
    category: "Stoicism"
  },
  {
    text: "You become what you give your attention to... If you don't choose what thoughts and images you expose yourself to, someone else will.",
    author: "Epictetus",
    category: "Stoicism"
  },
  {
    text: "If a man knows not to which port he sails, no wind is favorable.",
    author: "Seneca",
    category: "Stoicism"
  },
  {
    text: "The greatest way to live with honor in this world is to be what we pretend to be.",
    author: "Socrates",
    category: "Self-Mastery"
  },
  {
    text: "Don't just say you have read books. Show that through them you have learned to think better, to be a more discriminating and reflective person. Books are training weights of the mind.",
    author: "Epictetus",
    category: "Stoicism"
  },
  {
    text: "The Book of Mormon is the most correct of any book on earth, and the keystone of our religion, and a man would get nearer to God by abiding by its precepts, than by any other book.",
    author: "Joseph Smith",
    category: "Faith & Reflection"
  },
  {
    text: "Treat a man as he is and he will remain as he is. Treat a man as he can and should be and he will become as he can and should be.",
    author: "Johann Wolfgang von Goethe",
    category: "Relationships"
  },
  {
    text: "This is the true joy in life—that being used for a purpose recognized by yourself as a mighty one. That being a force of nature, instead of a feverish, selfish little clod of ailments and grievances complaining that the world will not devote itself to making you happy.",
    author: "George Bernard Shaw",
    category: "Identity & Habits"
  },
  {
    text: "Be as you wish to seem.",
    author: "Socrates",
    category: "Self-Mastery"
  },
  {
    text: "We can have eternal life if we want it, but only if there is nothing else we want more.",
    author: "Elder Bruce C. Hafen",
    category: "Faith & Reflection"
  },
  {
    text: "I have come to believe that one measure of our eternal progress is how much joy we derive from service.",
    author: "Elder Kevin J Worthen",
    category: "Faith & Reflection"
  },
  {
    text: "A man is saved no faster than he gets knowledge.",
    author: "Joseph Smith",
    category: "Faith & Reflection"
  },
  {
    text: "Integrity is, fundamentally, the value we place on ourselves. It’s our ability to make and keep commitments to ourselves, to 'walk our talk.' It’s honor with self, a fundamental part of the Character Ethic...",
    author: "Stephen R. Covey",
    category: "Self-Mastery"
  },
  {
    text: "Knowledge is not power unless it is sustained by... character.",
    author: "Karl G. Maeser",
    category: "Self-Mastery"
  },
  {
    text: "God and men are the same divine, eternal species, and if we do not comprehend the nature of God, we cannot appreciate our divine parentage nor the very real potential we possess to become like our heavenly parents.",
    author: "Andrew C. Skinner",
    category: "Faith & Reflection"
  },
  {
    text: "If you wish to go where God is, you must be like God, or possess the principles which God possesses... Search your hearts, and see if you are like God. I have searched and feel to repent.",
    author: "Joseph Smith",
    category: "Faith & Reflection"
  },
  {
    text: "This is the mark of perfection of character - to spend each day as if it were your last, without frenzy, laziness, or any pretending.",
    author: "Marcus Aurelius",
    category: "Stoicism"
  },
  {
    text: "Making noble resolutions is not as important as keeping resolutions you have made already.",
    author: "Seneca",
    category: "Stoicism"
  },
  {
    text: "What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others.",
    author: "Pericles",
    category: "Relationships"
  },
  {
    text: "How long are you going to wait before you demand the best for yourself?",
    author: "Epictetus",
    category: "Stoicism"
  },
  {
    text: "Kindness is the essence of greatness and the fundamental characteristic of the noblest men and women I have known. Kindness is a passport that opens doors and fashions friends.",
    author: "Elder Joseph B. Wirthlin",
    category: "Relationships"
  },
  {
    text: "We consider that God has created man with a mind capable of instruction... and that the nearer man approaches perfection, the clearer are his views, and the greater his enjoyments, till he has overcome the evils of his life...",
    author: "Joseph Smith",
    category: "Faith & Reflection"
  },
  {
    text: "There are no ordinary people. You have never talked to a mere mortal. Nations, cultures, arts, civilizations—these are mortal, and their life is to ours as the life of a gnat. But it is immortals whom we joke with, work with, marry...",
    author: "C.S. Lewis",
    category: "Faith & Reflection"
  },
  {
    text: "It is the pursuit of easy things that makes men weak.",
    author: "President Harold B. Lee",
    category: "Resilience"
  },
  {
    text: "False doctrines almost always seem to cause a lessened sense of personal identity, a lessened sense of personal accountability and a lessened sense of personal joy.",
    author: "Elder Neal A. Maxwell",
    category: "Faith & Reflection"
  },
  {
    text: "The Savior knew that for Him to be a god and for us to be thus minded would not rob God of His divinity... Who is greater: that being who limits or that being who enhances man’s eternal progress?",
    author: "Elder Tad R. Callister",
    category: "Faith & Reflection"
  },
  {
    text: "The thirst for infinity proves infinity.",
    author: "Victor Hugo",
    category: "Faith & Reflection"
  },
  {
    text: "The mighty change of heart does not occur when we make the covenant but when we keep it.",
    author: "Brad Wilcox",
    category: "Faith & Reflection"
  },
  {
    text: "If we ought to devote eight hours of life, we ought to devote a hundred years.",
    author: "Blaise Pascal",
    category: "Self-Mastery"
  },
  {
    text: "All of humanity's problems stem from man's inability to sit quietly in a room alone.",
    author: "Blaise Pascal",
    category: "Self-Mastery"
  },
  {
    text: "The submission of one’s will is really the only uniquely personal thing we have to place on God’s altar.",
    author: "Elder Neal A. Maxwell",
    category: "Faith & Reflection"
  },
  {
    text: "To live a good life: We have the potential for it. If we can learn to be indifferent to what makes no difference.",
    author: "Marcus Aurelius",
    category: "Stoicism"
  },
  {
    text: "They lose the day in expectation of the night, and the night in fear of the dawn.",
    author: "Seneca",
    category: "Stoicism"
  },
  {
    text: "No man is free who is not master of himself.",
    author: "Epictetus",
    category: "Stoicism"
  },
  {
    text: "Even the least of our activities ought to have some end in view.",
    author: "Marcus Aurelius",
    category: "Stoicism"
  },
  {
    text: "Imagine for yourself a character, a model personality, whose example you determine to follow, in private as well as in public.",
    author: "Epictetus",
    category: "Stoicism"
  },
  {
    text: "Sow a thought, and you reap an act; sow an act, and you reap a habit; sow a habit, and you reap a character; sow a character, and you reap a destiny.",
    author: "Samuel Smiles",
    category: "Identity & Habits"
  },
  {
    text: "One of the mistakes we make over and over again in life is to go directly for the things we think are important. But if we aim at self-fulfillment, we shall never be fulfilled. If we aim at education, we shall never become educated... These things are indirect, supreme results of doing something else; and the something else is service, it is righteousness...",
    author: "Arthur Henry King",
    category: "Relationships"
  },
  {
    text: "For in becoming all things to all people, one eventually becomes nothing to everybody—particularly to oneself.",
    author: "Stephen R. Covey",
    category: "Self-Mastery"
  },
  {
    text: "To love at all is to be vulnerable. Love anything, and your heart will certainly be wrung and possibly be broken... The alternative to tragedy, or at least to the risk of tragedy, is damnation. The only place outside Heaven where you can be perfectly safe from all the dangers and perturbations of love is Hell.",
    author: "C.S. Lewis",
    category: "Relationships"
  },
  {
    text: "Forget about the outcome and focus on what precedes it.",
    author: "James Clear",
    category: "Identity & Habits"
  },
  {
    text: "'The idle mind is the devil’s workshop'... When you lose focus, your mind tends to fix on what could be wrong with your life instead of what’s right.",
    author: "Cal Newport",
    category: "Self-Mastery"
  },
  {
    text: "You can lose yourself one small compromise at a time. You can transform yourself one small win at a time.",
    author: "James Clear",
    category: "Identity & Habits"
  },
  {
    text: "Where is the wisdom we have lost in knowledge? Where is the knowledge we have lost in information?",
    author: "T.S. Eliot",
    category: "Self-Mastery"
  },
  {
    text: "To continue to grow and learn, you must be willing to update, expand, and edit your identity. In many ways, growth is unlearning.",
    author: "James Clear",
    category: "Identity & Habits"
  },
  {
    text: "Decide the type of person you want to be, prove it to yourself with small wins.",
    author: "James Clear",
    category: "Identity & Habits"
  },
  {
    text: "We undervalue health if we have not recently experienced illness. We undervalue wealth if we have not recently experienced poverty. We undervalue kindness if we have not recently experienced cruelty. What might you be undervaluing right now?",
    author: "James Clear",
    category: "Self-Mastery"
  },
  {
    text: "Focus on what provides value to others, not what impresses others... The things we do to impress others rarely impress them for longer than five minutes. But the things we do to provide value for others can last a lifetime.",
    author: "James Clear",
    category: "Relationships"
  },
  {
    text: "If you want to eliminate the addictive pull of entertainment sites on your time and attention, give your brain a quality alternative.",
    author: "Cal Newport",
    category: "Self-Mastery"
  },
  {
    text: "The way to help someone is not to critique what makes them smaller, but to encourage what makes them larger.",
    author: "James Clear",
    category: "Relationships"
  },
  {
    text: "To understand others, watch what they reward. To understand yourself, watch what you envy.",
    author: "James Clear",
    category: "Self-Mastery"
  },
  {
    text: "Fishermen know that the sea is dangerous and the storm fearsome, but they have never found these dangers sufficient reason for remaining ashore... Give me reality, the danger itself.",
    author: "Vincent Van Gogh",
    category: "Resilience"
  },
  {
    text: "We see the world not as it is, but as we are—or, as we are conditioned to see it.",
    author: "Stephen R. Covey",
    category: "Self-Mastery"
  },
  {
    text: "Principles are the territory. Values are the maps. When we value correct principles, we have truth—a knowledge of things as they really are.",
    author: "Stephen R. Covey",
    category: "Self-Mastery"
  },
  {
    text: "The significant problems we face cannot be solved at the same level of thinking we were at when we created them.",
    author: "Albert Einstein",
    category: "Self-Mastery"
  },
  {
    text: "Until a person can say deeply and honestly, ‘I am what I am today because the choices that I made yesterday,’ that person cannot say, ‘I choose otherwise.’",
    author: "Stephen R. Covey",
    category: "Identity & Habits"
  },
  {
    text: "There are more things to alarm us than to harm us. And we suffer more often in apprehension than reality.",
    author: "Seneca",
    category: "Stoicism"
  },
  {
    text: "When someone is properly grounded in life, they shouldn’t have to look outside themselves for approval.",
    author: "Epictetus",
    category: "Stoicism"
  },
  {
    text: "When you lose a game, the score doesn't transfer to the next contest but your habits certainly will.",
    author: "James Clear",
    category: "Identity & Habits"
  },
  {
    text: "Truth is so obscure in these times, and falsehood so established, that, unless we love the truth, we cannot know it.",
    author: "Blaise Pascal",
    category: "Faith & Reflection"
  },
  {
    text: "We are generally the better persuaded by the reasons we discover ourselves than by those given to us by others.",
    author: "Blaise Pascal",
    category: "Self-Mastery"
  },
  {
    text: "The function of prayer is not to influence God, but rather to change the nature of the one who prays.",
    author: "Søren Kierkegaard",
    category: "Faith & Reflection"
  },
  {
    text: "The greatest hazard of all, losing one’s self, can occur very quietly in the world, as if it were nothing at all. No other loss can occur so quietly...",
    author: "Søren Kierkegaard",
    category: "Self-Mastery"
  },

  // --- NEW CLASSICAL STOIC & REFLECTIVE ADDITIONS ---
  {
    text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
    category: "Stoicism"
  },
  {
    text: "Associate with people who are likely to improve you. Welcome those whom you yourself can improve. The process is mutual; for men learn while they teach.",
    author: "Seneca",
    category: "Stoicism"
  },
  {
    text: "We have two ears and one mouth so that we can listen twice as much as we speak.",
    author: "Epictetus",
    category: "Stoicism"
  },
  {
    text: "It is not that we have a short time to live, but that we waste a lot of it.",
    author: "Seneca",
    category: "Stoicism"
  },
  {
    text: "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius",
    category: "Stoicism"
  },
  {
    text: "He who is brave is free.",
    author: "Seneca",
    category: "Stoicism"
  },
  {
    text: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
    category: "Stoicism"
  },
  {
    text: "If you want to improve, be content to be thought foolish and stupid.",
    author: "Epictetus",
    category: "Stoicism"
  },
  {
    text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    author: "Marcus Aurelius",
    category: "Stoicism"
  },
  {
    text: "The best revenge is to be unlike him who performed the injury.",
    author: "Marcus Aurelius",
    category: "Stoicism"
  },
  {
    text: "The main thing is not to be alive, but to live a good life.",
    author: "Socrates",
    category: "Self-Mastery"
  },
  {
    text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle",
    category: "Self-Mastery"
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    category: "Self-Mastery"
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: "Self-Mastery"
  },
  {
    text: "Small opportunities are often the beginning of great enterprises.",
    author: "Demosthenes",
    category: "Action"
  },
  {
    text: "Be silent or let thy words be worth more than silence.",
    author: "Pythagoras",
    category: "Self-Mastery"
  },
  // New New additions
  {
    text: "How long are you going to wait before you demand the best for yourself?",
    author: "Epictetus",
    category: "Stoicism"
  },
  {
    text: "Luck is what happens when preparation meets opportunity.",
    author: "Seneca",
    category: "Action"
  },
  {
    text: "The soul becomes dyed with the color of its thoughts.",
    author: "Marcus Aurelius",
    category: "Stoicism"
  },
  {
    text: "Do not spoil what you have by desiring what you have not.",
    author: "Epicurus",
    category: "Contentment"
  },
  {
    text: "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus",
    category: "Identity & Habits"
  },
  {
    text: "No man steps in the same river twice, for it is not the same river and he is not the same man.",
    author: "Heraclitus",
    category: "Reflection"
  },
  {
    text: "Character is fate.",
    author: "Heraclitus",
    category: "Identity & Habits"
  },
  {
    text: "He suffers more than necessary, who suffers before it is necessary.",
    author: "Seneca",
    category: "Stoicism"
  },
  {
    text: "If a man knows not to which port he sails, no wind is favorable.",
    author: "Seneca",
    category: "Purpose"
  },
  {
    text: "Difficulty shows what men are.",
    author: "Epictetus",
    category: "Resilience"
  },
  {
    text: "Do every act of your life as though it were the very last act of your life.",
    author: "Marcus Aurelius",
    category: "Stoicism"
  },
  {
    text: "A man who has committed a mistake and doesn’t correct it is committing another mistake.",
    author: "Confucius",
    category: "Self-Mastery"
  },
  {
    text: "To know what you know and what you do not know, that is true knowledge.",
    author: "Confucius",
    category: "Self-Mastery"
  },
  {
    text: "Knowing others is intelligence; knowing yourself is true wisdom.",
    author: "Lao Tzu",
    category: "Self-Mastery"
  },
  {
    text: "Mastering others is strength; mastering yourself is true power.",
    author: "Lao Tzu",
    category: "Self-Mastery"
  },
  {
    text: "Care about what other people think and you will always be their prisoner.",
    author: "Lao Tzu",
    category: "Stoicism"
  },
  {
    text: "Nature does not hurry, yet everything is accomplished.",
    author: "Lao Tzu",
    category: "Reflection"
  },
  {
    text: "The impediment to action advances action. What stands in the way becomes the way.",
    author: "Marcus Aurelius",
    category: "Resilience"
  },
  {
    text: "Begin at once to live, and count each separate day as a separate life.",
    author: "Seneca",
    category: "Stoicism"
  },
  {
    text: "Very little is needed to make a happy life.",
    author: "Marcus Aurelius",
    category: "Contentment"
  },
  {
    text: "He who fears death will never do anything worthy of a living man.",
    author: "Seneca",
    category: "Courage"
  },
  {
    text: "The more we value things outside our control, the less control we have.",
    author: "Epictetus",
    category: "Stoicism"
  },
  {
    text: "Man conquers the world by conquering himself.",
    author: "Zeno of Citium",
    category: "Self-Mastery"
  },
  {
    text: "Better to trip with the feet than with the tongue.",
    author: "Zeno of Citium",
    category: "Self-Mastery"
  },
  {
    text: "Silence is a lesson learned from the many sufferings of life.",
    author: "Seneca",
    category: "Self-Mastery"
  },
  {
    text: "To bear trials with a calm mind robs misfortune of its strength and burden.",
    author: "Seneca",
    category: "Resilience"
  },
  {
    text: "You become what you give your attention to.",
    author: "Epictetus",
    category: "Identity & Habits"
  },
  {
    text: "Nothing strengthens authority so much as silence.",
    author: "Leonardo da Vinci",
    category: "Self-Mastery"
  },
  {
    text: "Iron rusts from disuse; water loses its purity from stagnation.",
    author: "Leonardo da Vinci",
    category: "Discipline"
  },
  {
    text: "The greatest deception men suffer is from their own opinions.",
    author: "Leonardo da Vinci",
    category: "Self-Mastery"
  },
  {
    text: "Anxiety is the dizziness of freedom.",
    author: "Søren Kierkegaard",
    category: "Faith & Reflection"
  },
  {
    text: "Life can only be understood backwards; but it must be lived forwards.",
    author: "Søren Kierkegaard",
    category: "Reflection"
  },
  {
    text: "People demand freedom of speech as a compensation for the freedom of thought which they seldom use.",
    author: "Søren Kierkegaard",
    category: "Self-Mastery"
  },
  {
    text: "Compare yourself to who you were yesterday, not to who someone else is today.",
    author: "Jordan Peterson",
    category: "Identity & Habits"
  },
  {
    text: "The purpose of life is finding the largest burden that you can bear and bearing it.",
    author: "Jordan Peterson",
    category: "Purpose"
  },
  {
    text: "Order your soul. Reduce your wants.",
    author: "Augustine",
    category: "Self-Mastery"
  },
  {
    text: "Patience is the companion of wisdom.",
    author: "Augustine",
    category: "Wisdom"
  },
  {
    text: "He who is not a good servant will not be a good master.",
    author: "Plato",
    category: "Leadership"
  },
  {
    text: "The first and greatest victory is to conquer yourself.",
    author: "Plato",
    category: "Self-Mastery"
  },
  {
    text: "Courage is knowing what not to fear.",
    author: "Plato",
    category: "Courage"
  },
  {
    text: "The direction in which education starts a man will determine his future life.",
    author: "Plato",
    category: "Identity & Habits"
  },
  {
    text: "No great thing is created suddenly.",
    author: "Epictetus",
    category: "Discipline"
  },
  {
    text: "Freedom is secured not by the fulfilling of desires, but by the removal of desire.",
    author: "Epictetus",
    category: "Stoicism"
  },
  {
    text: "To complain is always nonacceptance of what is.",
    author: "Eckhart Tolle",
    category: "Self-Mastery"
  },
  {
    text: "Awareness is the greatest agent for change.",
    author: "Eckhart Tolle",
    category: "Self-Mastery"
  },
  {
    text: "Wherever you are, be there totally.",
    author: "Eckhart Tolle",
    category: "Presence"
  },
  {
    text: "Discipline equals freedom.",
    author: "Jocko Willink",
    category: "Discipline"
  },
  {
    text: "The desire for more positive experience is itself a negative experience.",
    author: "Mark Manson",
    category: "Reflection"
  },
  {
    text: "Who you are is defined by what you’re willing to struggle for.",
    author: "Mark Manson",
    category: "Purpose"
  },
  {
    text: "Every action you take is a vote for the type of person you wish to become.",
    author: "James Clear",
    category: "Identity & Habits"
  }
];

// Helper to get a random quote
function getRandomQuote() {
  const index = Math.floor(Math.random() * QUOTE_LIBRARY.length);
  return QUOTE_LIBRARY[index];
}

// Helper to get Quote of the Day (seeded by day of the year)
function getQuoteOfTheDay() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  // Use day of year to select index
  const index = dayOfYear % QUOTE_LIBRARY.length;
  return QUOTE_LIBRARY[index];
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUOTE_LIBRARY, getRandomQuote, getQuoteOfTheDay };
}
