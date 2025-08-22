import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>📘 English-Amharic Learning App</h1>
      <div className="lesson-card">
        <pre>import
 
React,
 
{
 
useEffect,
 
useMemo,
 
useState,
 
useCallback
 
}
 
from
 
"react";
 
import
 
{
 
BookOpen,
 
CheckCircle2,
 
ListChecks,
 
Search,
 
Sparkles,
 
ChevronRight,
 
ChevronLeft,
 
Languages,
 
Library,
 
Palette,
 
Mic,
 
FileText,
 
Pencil,
 
BrainCircuit,
 
Heart,
 
Film,
 
Globe,
 
Bot
 
}
 
from
 
"lucide-react";
 
import
 
{
 
motion,
 
AnimatePresence
 
}
 
from
 
"framer-motion";
 
 
//
 
Removed
 
top-level
 
Firebase
 
imports
 
to
 
enable
 
dynamic
 
loading
 
in
 
useEffect
 
//
 
import
 
{
 
initializeApp
 
}
 
from
 
"https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
 
//
 
import
 
{
 
getAuth,
 
signInAnonymously,
 
signInWithCustomToken,
 
onAuthStateChanged
 
}
 
from
 
"https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
 
//
 
import
 
{
 
getFirestore,
 
collection,
 
onSnapshot,
 
addDoc,
 
doc,
 
setDoc
 
}
 
from
 
"https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
 
 
//
 
==============================================
 
//
 
B1
 
English
 
Course
 
Bilingual
 
&
 
Colorized
 
//
 
Richer
 
reading,
 
speaking,
 
and
 
writing
 
tasks.
 
//
 
AI
 
Lesson
 
&
 
Examples
 
Generator
 
for
 
on-demand
 
assistance.
 
//
 
==============================================
 
 
//
 
NEW:
 
//
 
Expanded
 
content
 
for
 
all
 
15
 
units.
 
//
 
More
 
vocabulary,
 
examples,
 
and
 
quiz
 
questions.
 
//
 
New
 
AI-powered
 
'Rephrase
 
Text'
 
feature.
 
//
 
New
 
AI-powered
 
'Check
 
Grammar'
 
feature
 
with
 
explanations.
 
//
 
New:
 
Clickable
 
vocabulary
 
words
 
for
 
AI-powered
 
definitions
 
and
 
Amharic
 
translation.
 
//
 
New:
 
AI-powered
 
Amharic
 
translation
 
for
 
clicked
 
vocabulary
 
words.
 
 
//
 
Color
 
Themes
 
const
 
colorThemes
 
=
 
{
 
  
violet:
 
{
 
bg:
 
'bg-violet-100',
 
text:
 
'text-violet-800',
 
border:
 
'border-violet-600',
 
gradient:
 
'from-violet-500
 
to-purple-500'
 
},
 
  
sky:
 
{
 
bg:
 
'bg-sky-100',
 
text:
 
'text-sky-800',
 
border:
 
'border-sky-600',
 
gradient:
 
'from-sky-500
 
to-cyan-500'
 
},
 
  
amber:
 
{
 
bg:
 
'bg-amber-100',
 
text:
 
'text-amber-800',
 
border:
 
'border-amber-600',
 
gradient:
 
'from-amber-500
 
to-orange-500'
 
},
 
  
emerald:
 
{
 
bg:
 
'bg-emerald-100',
 
text:
 
'text-emerald-800',
 
border:
 
'border-emerald-600',
 
gradient:
 
'from-emerald-500
 
to-green-500'
 
},
 
  
rose:
 
{
 
bg:
 
'bg-rose-100',
 
text:
 
'text-rose-800',
 
border:
 
'border-rose-600',
 
gradient:
 
'from-rose-500
 
to-pink-500'
 
},
 
  
indigo:
 
{
 
bg:
 
'bg-indigo-100',
 
text:
 
'text-indigo-800',
 
border:
 
'border-indigo-600',
 
gradient:
 
'from-indigo-500
 
to-blue-500'
 
},
 
  
teal:
 
{
 
bg:
 
'bg-teal-100',
 
text:
 
'text-teal-800',
 
border:
 
'border-teal-600',
 
gradient:
 
'from-teal-500
 
to-cyan-500'
 
},
 

  
fuchsia:
 
{
 
bg:
 
'bg-fuchsia-100',
 
text:
 
'text-fuchsia-800',
 
border:
 
'border-fuchsia-600',
 
gradient:
 
'from-fuchsia-500
 
to-purple-500'
 
},
 
  
lime:
 
{
 
bg:
 
'bg-lime-100',
 
text:
 
'text-lime-800',
 
border:
 
'border-lime-600',
 
gradient:
 
'from-lime-500
 
to-green-500'
 
},
 
  
cyan:
 
{
 
bg:
 
'bg-cyan-100',
 
text:
 
'text-cyan-800',
 
border:
 
'border-cyan-600',
 
gradient:
 
'from-cyan-500
 
to-sky-500'
 
},
 
  
orange:
 
{
 
bg:
 
'bg-orange-100',
 
text:
 
'text-orange-800',
 
border:
 
'border-orange-600',
 
gradient:
 
'from-orange-500
 
to-red-500'
 
},
 
  
pink:
 
{
 
bg:
 
'bg-pink-100',
 
text:
 
'text-pink-800',
 
border:
 
'border-pink-600',
 
gradient:
 
'from-pink-500
 
to-rose-500'
 
},
 
};
 
 
//
 
Grammar
 
Library
 
(Global)
 
const
 
grammarLibrary
 
=
 
[
 
  
{
 
    
key:
 
"present
 
continuous",
 
    
topicEn:
 
"Present
 
Continuous",
 
    
topicDe:
 
"Verlaufsform
 
der
 
Gegenwart",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
    
explanationEn:
 
"Use
 
for
 
actions
 
happening
 
now
 
or
 
temporary
 
situations.
 
Form:
 
am/is/are
 
+
 
verb-ing.
 
Examples:
 
'She
 
is
 
studying
 
at
 
the
 
moment.'
 
(Sie
 
lernt
 
gerade.)
 
'I'm
 
working
 
from
 
home
 
this
 
week.'
 
(Ich
 
arbeite
 
diese
 
Woche
 
von
 
zu
 
Hause
 
aus.)",
 
    
explanationDe:
 
"Für
 
Handlungen,
 
die
 
gerade
 
passieren
 
oder
 
vorübergehend
 
sind.
 
Bildung:
 
am/is/are
 
+
 
Verb-ing.
 
Beispiele:
 
'She
 
is
 
studying
 
at
 
the
 
moment.'
 
(Sie
 
lernt
 
gerade.)
 
'I'm
 
working
 
from
 
home
 
this
 
week.'
 
(Ich
 
arbeite
 
diese
 
Woche
 
von
 
zu
 
Hause
 
aus.)",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
    
examples:
 
[
 
      
{
 
en:
 
"She
 
is
 
studying
 
at
 
the
 
moment.",
 
de:
 
"Sie
 
lernt
 
gerade."
 
},
 
      
{
 
en:
 
"I'm
 
working
 
from
 
home
 
this
 
week.",
 
de:
 
"Ich
 
arbeite
 
diese
 
Woche
 
von
 
zu
 
Hause
 
aus."
 
},
 
      
{
 
en:
 
"They
 
are
 
currently
 
building
 
a
 
new
 
bridge.",
 
de:
 
"Sie
 
bauen
 
gerade
 
eine
 
neue
 
Brücke."
 
},
 
      
{
 
en:
 
"What
 
are
 
you
 
doing
 
this
 
evening?",
 
de:
 
"Was
 
machst
 
du
 
heute
 
Abend?"
 
}
 
    
],
 
  
},
 
  
{
 
    
key:
 
"present
 
perfect",
 
    
topicEn:
 
"Present
 
Perfect",
 
    
topicDe:
 
"Perfekt
 
(im
 
Englischen:
 
Present
 
Perfect)",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
    
explanationEn:
 
"Use
 
for
 
life
 
experience
 
or
 
results
 
that
 
affect
 
the
 
present.
 
Form:
 
have/has
 
+
 
past
 
participle.
 
Examples:
 
'I
 
have
 
visited
 
Berlin
 
three
 
times.
 
(Ich
 
habe
 
Berlin
 
dreimal
 
besucht.)
 
She
 
has
 
already
 
finished
 
her
 
homework.'
 
(Sie
 
hat
 
ihre
 
Hausaufgaben
 
schon
 
erledigt.)
 
It
 
connects
 
the
 
past
 
to
 
the
 
present.",
 
    
explanationDe:
 
"Für
 
Lebenserfahrungen
 
oder
 
Ergebnisse,
 
die
 
die
 
Gegenwart
 
beeinflussen.
 
Bildung:
 
have/has
 
+
 
Partizip
 
II.
 
Beispiele:
 
'Ich
 
habe
 
Berlin
 
dreimal
 
besucht.'
 
(I
 
have
 
visited
 
Berlin
 
three
 
times.)
 
'Sie
 
hat
 
ihre
 
Hausaufgaben
 
schon
 
erledigt.
 
(She
 
has
 
already
 
finished
 
her
 

homework.)
 
Es
 
verbindet
 
die
 
Vergangenheit
 
mit
 
der
 
Gegenwart.",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
    
examples:
 
[
 
      
{
 
en:
 
"I
 
have
 
visited
 
Berlin
 
three
 
times.",
 
de:
 
"Ich
 
habe
 
Berlin
 
dreimal
 
besucht."
 
},
 
      
{
 
en:
 
"She
 
has
 
already
 
finished
 
her
 
homework.",
 
de:
 
"Sie
 
hat
 
ihre
 
Hausaufgaben
 
schon
 
erledigt."
 
},
 
      
{
 
en:
 
"We
 
haven't
 
seen
 
them
 
since
 
last
 
year.",
 
de:
 
"Wir
 
haben
 
sie
 
seit
 
letztem
 
Jahr
 
nicht
 
gesehen."
 
},
 
      
{
 
en:
 
"Has
 
he
 
ever
 
flown
 
in
 
a
 
helicopter?",
 
de:
 
"Ist
 
er
 
jemals
 
mit
 
einem
 
Hubschrauber
 
geflogen?"
 
}
 
    
],
 
  
},
 
  
{
 
    
key:
 
"future",
 
    
topicEn:
 
"Future:
 
will
 
going
 
to
 
/
 
present
 
continuous",
 
    
topicDe:
 
"Zukunft:
 
will
 
/
 
going
 
to
 
/
 
Präsens
 
Verlaufsform",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
    
explanationEn:
 
"'Will'
 
for
 
spontaneous
 
decisions,
 
predictions
 
(often
 
with
 
'I
 
think',
 
'I
 
believe'),
 
promises,
 
offers,
 
or
 
future
 
facts
 
(e.g.,
 
'I'll
 
help
 
you.',
 
'It
 
will
 
rain
 
tomorrow.').
 
'Going
 
to':
 
For
 
plans
 
or
 
intentions
 
decided
 
before
 
speaking,
 
or
 
predictions
 
based
 
on
 
present
 
evidence
 
(e.g.,
 
'I'm
 
going
 
to
 
visit
 
my
 
parents
 
next
 
week.',
 
'It's
 
going
 
to
 
crash!
 
Look
 
out!').
 
'Present
 
Continuous':
 
For
 
fixed
 
arrangements
 
or
 
appointments
 
(e.g.,
 
'I'm
 
meeting
 
Anna
 
on
 
Friday.',
 
'They're
 
flying
 
to
 
Rome
 
tomorrow.').",
 
    
explanationDe:
 
"'Will'
 
für
 
spontane
 
Entscheidungen,
 
Vorhersagen
 
(oft
 
mit
 
'Ich
 
denke',
 
'Ich
 
glaube'),
 
Versprechen,
 
Angebote
 
oder
 
zukünftige
 
Fakten
 
(z.B.
 
'Ich
 
helfe
 
dir.',
 
'Es
 
wird
 
morgen
 
regnen.').
 
'Going
 
to':
 
Für
 
Pläne
 
oder
 
Absichten,
 
die
 
vor
 
dem
 
Sprechen
 
getroffen
 
wurden,
 
oder
 
Vorhersagen,
 
die
 
auf
 
gegenwärtigen
 
Anzeichen
 
basieren
 
(z.B.
 
'Ich
 
werde
 
nächste
 
Woche
 
meine
 
Eltern
 
besuchen.',
 
'Es
 
wird
 
abstürzen!
 
Pass
 
auf!').
 
'Präsens
 
Verlaufsform':
 
Für
 
feste
 
Abmachungen
 
oder
 
Termine
 
(z.B.
 
'Ich
 
treffe
 
Anna
 
am
 
Freitag.',
 
'Sie
 
fliegen
 
morgen
 
nach
 
Rom.').",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
    
examples:
 
[
 
      
{
 
en:
 
"I
 
think
 
it
 
will
 
rain.",
 
de:
 
"Ich
 
glaube,
 
es
 
wird
 
regnen."
 
},
 
      
{
 
en:
 
"We're
 
meeting
 
Anna
 
on
 
Friday.",
 
de:
 
"Wir
 
treffen
 
Anna
 
am
 
Freitag."
 
},
 
      
{
 
en:
 
"She
 
is
 
going
 
to
 
study
 
medicine.",
 
de:
 
"Sie
 
wird
 
Medizin
 
studieren."
 
},
 
      
{
 
en:
 
"I'll
 
call
 
you
 
back
 
later.",
 
de:
 
"Ich
 
rufe
 
dich
 
später
 
zurück."
 
}
 
    
],
 
  
},
 
  
{
 
    
key:
 
"adjectives
 
adverbs",
 
    
topicEn:
 
"Adjectives
 
&
 
Adverbs",
 
    
topicDe:
 
"Adjektive
 
&
 
Adverbien",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
    
explanationEn:
 
"Adjectives
 
describe
 
nouns
 
(a
 
quick
 
meal,
 
a
 
beautiful
 
song).
 
Adverbs
 
describe
 
verbs/adjectives/other
 
adverbs
 
(drive
 
quickly,
 
incredibly
 
fast,
 
very
 
well).
 
Many
 
adverbs
 
end
 
in
 
ly.
 
Some
 
are
 
irregular:
 
good
 
well,
 
hard
 
hard,
 
fast
 
fast.",
 

    
explanationDe:
 
"Adjektive
 
beschreiben
 
Nomen
 
(eine
 
schnelle
 
Mahlzeit,
 
ein
 
schönes
 
Lied).
 
Adverbien
 
beschreiben
 
Verben/Adjektive/andere
 
Adverbien
 
(schnell
 
fahren,
 
unglaublich
 
schnell,
 
sehr
 
gut).
 
Viele
 
Adverbien
 
enden
 
auf
 
ly.
 
Unregelmäßig:
 
good
 
well,
 
hard
 
hard,
 
fast
 
fast.",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
    
examples:
 
[
 
      
{
 
en:
 
"She
 
is
 
a
 
careful
 
driver.",
 
de:
 
"Sie
 
ist
 
eine
 
vorsichtige
 
Fahrerin."
 
},
 
      
{
 
en:
 
"She
 
drives
 
carefully.",
 
de:
 
"Sie
 
fährt
 
vorsichtig."
 
},
 
      
{
 
en:
 
"The
 
food
 
was
 
terribly
 
good.",
 
de:
 
"Das
 
Essen
 
war
 
furchtbar
 
gut."
 
},
 
      
{
 
en:
 
"He
 
worked
 
very
 
hard
 
for
 
the
 
exam.",
 
de:
 
"Er
 
hat
 
sehr
 
hart
 
für
 
die
 
Prüfung
 
gearbeitet."
 
}
 
    
],
 
  
},
 
  
{
 
    
key:
 
"prepositions",
 
    
topicEn:
 
"Prepositions",
 
    
topicDe:
 
"Präpositionen",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
    
explanationEn:
 
"Common
 
sets:
 
time
 
(on
 
Monday,
 
at
 
7,
 
in
 
June),
 
place
 
(in
 
a
 
city,
 
at
 
work,
 
on
 
the
 
table),
 
movement
 
(to,
 
into,
 
onto).
 
Prepositions
 
show
 
relationships
 
between
 
words,
 
often
 
indicating
 
location,
 
time,
 
or
 
direction.
 
They
 
are
 
notoriously
 
tricky
 
and
 
often
 
need
 
to
 
be
 
learned
 
through
 
exposure
 
and
 
practice.",
 
    
explanationDe:
 
"Häufige
 
Gruppen:
 
Zeit
 
(am
 
Montag,
 
um
 
7,
 
im
 
Juni),
 
Ort
 
(in
 
einer
 
Stadt,
 
bei
 
der
 
Arbeit,
 
auf
 
dem
 
Tisch),
 
Bewegung
 
(zu,
 
in,
 
auf).
 
Präpositionen
 
zeigen
 
Beziehungen
 
zwischen
 
Wörtern
 
an,
 
oft
 
in
 
Bezug
 
auf
 
Ort,
 
Zeit
 
oder
 
Richtung.
 
Sie
 
sind
 
bekanntlich
 
knifflig
 
und
 
müssen
 
oft
 
durch
 
Exposition
 
und
 
Übung
 
gelernt
 
werden.",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
    
examples:
 
[
 
      
{
 
en:
 
"We
 
meet
 
at
 
7
 
pm
 
on
 
Friday.",
 
de:
 
"Wir
 
treffen
 
uns
 
am
 
Freitag
 
um
 
19
 
Uhr."
 
},
 
      
{
 
en:
 
"The
 
keys
 
are
 
on
 
the
 
table.",
 
de:
 
"Die
 
Schlüssel
 
liegen
 
auf
 
dem
 
Tisch."
 
},
 
      
{
 
en:
 
"She
 
walked
 
into
 
the
 
room.",
 
de:
 
"Sie
 
ging
 
in
 
den
 
Raum
 
hinein."
 
},
 
      
{
 
en:
 
"I
 
live
 
in
 
a
 
small
 
village
 
near
 
the
 
mountains.",
 
de:
 
"Ich
 
lebe
 
in
 
einem
 
kleinen
 
Dorf
 
in
 
der
 
Nähe
 
der
 
Berge."
 
}
 
    
],
 
  
},
 
];
 
 
//
 
Course
 
Data
 
(Units)
 
const
 
courseData
 
=
 
[
 
  
{
 
    
id:
 
1,
 
    
title:
 
"Daily
 
Life
 
&
 
Routines",
 
    
theme:
 
"violet",
 
    
overview:
 
"Talk
 
and
 
write
 
about
 
everyday
 
activities.
 
Contrast
 
Present
 
Simple
 
and
 
Present
 
Continuous.
 
Build
 
routine
 
vocabulary.
 
Explore
 
morning,
 
afternoon,
 
and
 
evening
 
routines,
 
and
 
discuss
 
typical
 
habits.",
 
    
vocabulary:
 
[
 

      
"wake
 
up",
 
"brush
 
teeth",
 
"get
 
dressed",
 
"commute",
 
"have
 
breakfast",
 
"take
 
a
 
shower",
 
"finish
 
work",
 
      
"cook
 
dinner",
 
"do
 
the
 
dishes",
 
"relax",
 
"go
 
for
 
a
 
walk",
 
"do
 
exercise",
 
"go
 
to
 
bed",
 
"set
 
the
 
alarm",
 
"hit
 
snooze",
 
"check
 
emails",
 
      
"household
 
chores",
 
"make
 
the
 
bed",
 
"iron
 
clothes",
 
"walk
 
the
 
dog",
 
"take
 
out
 
the
 
trash",
 
"pay
 
bills",
 
"run
 
errands"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"I
 
wake
 
up
 
at
 
7
 
a.m.
 
on
 
weekdays.",
 
        
"She
 
gets
 
dressed
 
quickly
 
in
 
the
 
morning.",
 
        
"He
 
commutes
 
by
 
train.",
 
        
"I
 
always
 
set
 
the
 
alarm
 
for
 
6
 
AM.",
 
        
"He
 
tends
 
to
 
hit
 
the
 
snooze
 
button
 
a
 
few
 
times.",
 
        
"After
 
work,
 
I
 
do
 
some
 
household
 
chores.",
 
        
"Don't
 
forget
 
to
 
make
 
the
 
bed
 
before
 
you
 
leave.",
 
        
"I
 
need
 
to
 
iron
 
my
 
clothes
 
for
 
the
 
interview.",
 
        
"Could
 
you
 
please
 
take
 
out
 
the
 
trash?",
 
        
"On
 
weekends,
 
I
 
often
 
run
 
errands.",
 
        
"It's
 
important
 
to
 
**manage
 
your
 
time**
 
effectively
 
to
 
avoid
 
feeling
 
overwhelmed
 
by
 
daily
 
tasks."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Ich
 
wache
 
an
 
Werktagen
 
um
 
7
 
Uhr
 
auf.",
 
        
"Sie
 
zieht
 
sich
 
morgens
 
schnell
 
an.",
 
        
"Er
 
pendelt
 
mit
 
dem
 
Zug.",
 
        
"Ich
 
stelle
 
den
 
Wecker
 
immer
 
auf
 
6
 
Uhr.",
 
        
"Er
 
neigt
 
dazu,
 
die
 
Schlummertaste
 
ein
 
paar
 
Mal
 
zu
 
drücken.",
 
        
"Nach
 
der
 
Arbeit
 
erledige
 
ich
 
einige
 
Hausarbeiten.",
 
        
"Vergiss
 
nicht,
 
das
 
Bett
 
zu
 
machen,
 
bevor
 
du
 
gehst.",
 
        
"Ich
 
muss
 
meine
 
Kleidung
 
für
 
das
 
Vorstellungsgespräch
 
bügeln.",
 
        
"Könntest
 
du
 
bitte
 
den
 
Müll
 
rausbringen?",
 
        
"Am
 
Wochenende
 
erledige
 
ich
 
oft
 
Besorgungen.",
 
        
"Kontinuierliche
 
**berufliche
 
Weiterentwicklung**
 
ist
 
entscheidend,
 
um
 
auf
 
dem
 
heutigen
 
Arbeitsmarkt
 
wettbewerbsfähig
 
zu
 
bleiben."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Present
 
Simple
 
vs
 
Present
 
Continuous",
 
      
topicDe:
 
"Simple
 
Present
 
vs.
 
Present
 
Continuous",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"Present
 
Simple
 
for
 
habits/facts
 
(e.g.,
 
'I
 
get
 
up
 
at
 
7
 
every
 
day',
 
'Water
 
boils
 
at
 
$100^{\circ}C^{\prime}$).
 
Present
 
Continuous
 
for
 
actions
 
happening
 
now
 
or
 
temporary
 
situations
 
(e.g.,
 
'I'm
 
studying
 
English
 
this
 
month',
 
'She
 
is
 
talking
 
on
 
the
 
phone
 
right
 
now').
 
Remember
 
that
 
state
 
verbs
 
(like
 
'know',
 
'love',
 
'believe')
 
are
 
rarely
 
used
 
in
 
the
 
continuous
 
form.",
 

      
explanationDe:
 
"Simple
 
Present
 
für
 
Gewohnheiten/Fakten
 
(z.
 
B.
 
'Ich
 
stehe
 
jeden
 
Tag
 
um
 
7
 
auf',
 
'Wasser
 
kocht
 
bei
 
100°C').
 
Present
 
Continuous
 
für
 
Handlungen,
 
die
 
gerade
 
passieren
 
oder
 
vorübergehend
 
sind
 
(z.B.
 
'Ich
 
lerne
 
diesen
 
Monat
 
Englisch',
 
'Sie
 
telefoniert
 
gerade').
 
Denken
 
Sie
 
daran,
 
dass
 
Zustandsverben
 
(wie
 
'wissen',
 
'lieben',
 
'glauben')
 
selten
 
in
 
der
 
Verlaufsform
 
verwendet
 
werden.",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"She
 
usually
 
walks
 
to
 
school,
 
but
 
today
 
she
 
is
 
taking
 
the
 
bus.",
 
de:
 
"Sie
 
geht
 
normalerweise
 
zu
 
Fuß
 
zur
 
Schule,
 
aber
 
heute
 
nimmt
 
sie
 
den
 
Bus."
 
},
 
        
{
 
en:
 
"Do
 
you
 
work
 
from
 
home?
 
I'm
 
working
 
from
 
home
 
this
 
week.",
 
de:
 
"Arbeitest
 
du
 
von
 
zu
 
Hause?
 
Ich
 
arbeite
 
diese
 
Woche
 
von
 
zu
 
Hause
 
aus."
 
},
 
        
{
 
en:
 
"The
 
kettle
 
is
 
boiling;
 
I
 
am
 
making
 
tea.",
 
de:
 
"Der
 
Wasserkocher
 
kocht
 
ich
 
mache
 
Tee."
 
},
 
        
{
 
en:
 
"He
 
always
 
forgets
 
his
 
keys.
 
Look,
 
he's
 
forgetting
 
them
 
again!",
 
de:
 
"Er
 
vergisst
 
immer
 
seine
 
Schlüssel.
 
Sieh
 
mal,
 
er
 
vergisst
 
sie
 
schon
 
wieder!"
 
},
 
        
{
 
en:
 
"We
 
live
 
in
 
Berlin.
 
We
 
are
 
currently
 
living
 
with
 
my
 
parents.",
 
de:
 
"Wir
 
leben
 
in
 
Berlin.
 
Wir
 
leben
 
derzeit
 
bei
 
meinen
 
Eltern."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"A
 
Day
 
in
 
Maria's
 
Life",
 
      
text:
 
"Maria
 
wakes
 
up
 
at
 
6:30
 
and
 
has
 
a
 
quick
 
breakfast.
 
She
 
usually
 
takes
 
the
 
train
 
to
 
work,
 
but
 
today
 
she
 
is
 
driving
 
because
 
the
 
trains
 
are
 
late.
 
Her
 
company
 
is
 
trialing
 
a
 
flexible
 
work
 
model,
 
so
 
she
 
is
 
attending
 
more
 
meetings
 
online
 
this
 
month.
 
At
 
lunch,
 
she
 
meets
 
a
 
colleague
 
and
 
they
 
talk
 
about
 
a
 
new
 
project.
 
In
 
the
 
evening,
 
she
 
cooks
 
pasta,
 
does
 
some
 
household
 
chores,
 
and
 
watches
 
a
 
series
 
before
 
she
 
goes
 
to
 
bed.
 
On
 
weekends,
 
Maria
 
likes
 
to
 
relax
 
and
 
spend
 
time
 
with
 
friends.
 
She
 
doesn't
 
usually
 
work
 
on
 
Saturdays
 
or
 
Sundays,
 
but
 
sometimes
 
she
 
is
 
helping
 
her
 
brother
 
with
 
his
 
startup,
 
which
 
is
 
quite
 
demanding.",
 
      
task:
 
"Find
 
two
 
Present
 
Simple
 
verbs
 
and
 
two
 
Present
 
Continuous
 
verbs.
 
Why
 
are
 
the
 
different
 
tenses
 
used?
 
Describe
 
Maria's
 
typical
 
weekend
 
activities.
 
What
 
is
 
special
 
about
 
her
 
work
 
situation
 
this
 
month?",
 
    
},
 
    
speaking:
 
[
 
      
"Describe
 
your
 
weekday
 
routine
 
in
 
6-8
 
sentences.",
 
      
"Ask
 
a
 
partner
 
5
 
questions
 
about
 
their
 
habits
 
(How
 
often
 
do
 
you...?).",
 
      
"Compare
 
your
 
ideal
 
weekend
 
with
 
your
 
actual
 
weekend.",
 
      
"Talk
 
about
 
a
 
temporary
 
change
 
in
 
your
 
daily
 
routine
 
and
 
why
 
it's
 
happening.",
 
      
"Discuss
 
what
 
a
 
typical
 
routine
 
looks
 
like
 
in
 
your
 
country
 
compared
 
to
 
another."
 
    
],
 
    
writing:
 
"Write
 
a
 
short
 
blog
 
post
 
(100-120
 
words)
 
about
 
how
 
technology
 
has
 
changed
 
your
 
daily
 
routine.
 
Include
 
specific
 
examples
 
of
 
gadgets
 
or
 
apps
 
you
 
use
 
and
 
how
 
they
 
impact
 
your
 
habits.
 
Also,
 
mention
 
one
 
positive
 
and
 
one
 
negative
 
aspect
 
of
 
this
 
change.",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"Right
 
now,
 
I
 
___
 
dinner,
 
but
 
I
 
usually
 
___
 
at
 
7
 
pm.",
 

        
choices:
 
["cook
 
/
 
eat",
 
"am
 
cooking
 
/
 
eat",
 
"am
 
cook
 
/
 
am
 
eating",
 
"cooking
 
/
 
eating"],
 
        
answer:
 
1,
 
        
explanation:
 
"'Right
 
now'
 
indicates
 
a
 
current
 
action
 
(Present
 
Continuous:
 
am
 
cooking).
 
'Usually'
 
indicates
 
a
 
habit
 
(Present
 
Simple:
 
eat).",
 
      
},
 
      
{
 
        
q:
 
"She
 
___
 
to
 
the
 
gym
 
on
 
Mondays.",
 
        
choices:
 
["goes",
 
"is
 
going",
 
"going",
 
"go"],
 
        
answer:
 
0,
 
        
explanation:
 
"On
 
Mondays'
 
indicates
 
a
 
regular
 
habit,
 
requiring
 
the
 
Present
 
Simple
 
'goes'.",
 
      
},
 
      
{
 
        
q:
 
"Why
 
___
 
a
 
coat?
 
It's
 
not
 
cold.",
 
        
choices:
 
["you
 
wear",
 
"do
 
you
 
wear",
 
"are
 
you
 
wearing",
 
"wears"],
 
        
answer:
 
2,
 
        
explanation:
 
"This
 
question
 
refers
 
to
 
an
 
action
 
happening
 
at
 
the
 
moment
 
of
 
speaking,
 
thus
 
requiring
 
the
 
Present
 
Continuous
 
'are
 
you
 
wearing'.",
 
      
},
 
      
{
 
        
q:
 
"Every
 
morning,
 
my
 
cat
 
___
 
for
 
food.",
 
        
choices:
 
["meows",
 
"is
 
meowing",
 
"meow",
 
"meowed"],
 
        
answer:
 
0,
 
        
explanation:
 
"Every
 
morning'
 
indicates
 
a
 
regular
 
habit,
 
so
 
Present
 
Simple
 
'meows'
 
is
 
correct."
 
      
},
 
    
],
 
  
},
 
  
{
 
    
id:
 
2,
 
    
title:
 
"Travel
 
&
 
Holidays",
 
    
theme:
 
"sky",
 
    
overview:
 
"Talk
 
about
 
trips,
 
use
 
Past
 
Simple
 
for
 
finished
 
events.
 
Learn
 
useful
 
phrases
 
for
 
airport
 
and
 
hotel
 
scenarios.
 
Discuss
 
different
 
types
 
of
 
holidays
 
and
 
travel
 
experiences.",
 
    
vocabulary:
 
[
 
      
"boarding
 
pass",
 
"gate",
 
"delayed",
 
"luggage",
 
"reservation",
 
      
"sightseeing",
 
"guided
 
tour",
 
"check-in",
 
"reception",
 
"single
 
room",
 
"return
 
ticket",
 
"land",
 
      
"take
 
off",
 
"currency
 
exchange",
 
"souvenir",
 
"itinerary",
 
      
"all-inclusive",
 
"backpacking",
 
"cruise",
 
"resort",
 
"passport
 
control",
 
"customs",
 
"jet
 
lag",
 
"local
 
cuisine",
 
"travel
 
insurance"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"Our
 
flight
 
was
 
delayed
 
by
 
two
 
hours.",
 
        
"We
 
made
 
a
 
reservation
 
online.",
 

        
"We
 
planned
 
our
 
itinerary
 
before
 
the
 
trip.",
 
        
"Did
 
you
 
buy
 
any
 
souvenirs?",
 
        
"I
 
need
 
to
 
find
 
a
 
currency
 
exchange.",
 
        
"Make
 
sure
 
you
 
have
 
your
 
boarding
 
pass
 
ready.",
 
        
"We
 
had
 
terrible
 
jet
 
lag
 
after
 
the
 
long
 
flight.",
 
        
"Exploring
 
local
 
cuisine
 
is
 
a
 
highlight
 
of
 
my
 
travels.",
 
        
"Do
 
you
 
have
 
travel
 
insurance
 
for
 
this
 
trip?",
 
        
"Remember
 
to
 
**pack
 
light**
 
when
 
you
 
go
 
backpacking
 
to
 
make
 
your
 
journey
 
easier."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Unser
 
Flug
 
hatte
 
zwei
 
Stunden
 
Verspätung.",
 
        
"Wir
 
haben
 
online
 
reserviert.",
 
        
"Wir
 
haben
 
unsere
 
Reiseroute
 
vor
 
der
 
Reise
 
geplant.",
 
        
"Hast
 
du
 
irgendwelche
 
Souvenirs
 
gekauft?",
 
        
"Ich
 
muss
 
eine
 
Wechselstube
 
finden.",
 
        
"Stellen
 
Sie
 
sicher,
 
dass
 
Sie
 
Ihre
 
Bordkarte
 
bereithalten.",
 
        
"Wir
 
hatten
 
einen
 
schrecklichen
 
Jetlag
 
nach
 
dem
 
langen
 
Flug.",
 
        
"Das
 
Erkunden
 
der
 
lokalen
 
Küche
 
ist
 
ein
 
Höhepunkt
 
meiner
 
Reisen.",
 
        
"Haben
 
Sie
 
eine
 
Reiseversicherung
 
für
 
diese
 
Reise?",
 
        
"Denken
 
Sie
 
daran,
 
**leicht
 
zu
 
packen**,
 
wenn
 
Sie
 
mit
 
dem
 
Rucksack
 
unterwegs
 
sind,
 
um
 
Ihre
 
Reise
 
zu
 
erleichtern."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Past
 
Simple
 
(regular
 
&
 
irregular)",
 
      
topicDe:
 
"Einfache
 
Vergangenheit
 
(regelmäßig
 
&
 
unregelmäßig)",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"The
 
Past
 
Simple
 
is
 
used
 
for
 
finished
 
actions
 
in
 
the
 
past
 
with
 
a
 
definite
 
time
 
reference
 
(e.g.,
 
'We
 
visited
 
Rome
 
last
 
year',
 
'She
 
finished
 
her
 
degree
 
in
 
2020')
 
Regular
 
verbs
 
add
 
'-ed'
 
(walk
 
->
 
walked),
 
while
 
irregular
 
verbs
 
have
 
unique
 
forms
 
(go
 
->
 
went,
 
see
 
->
 
saw).
 
Negative
 
and
 
question
 
forms
 
use
 
'did/didn't'
 
+
 
base
 
form
 
of
 
the
 
verb.",
 
      
explanationDe:
 
"Das
 
Simple
 
Past
 
wird
 
für
 
abgeschlossene
 
Handlungen
 
in
 
der
 
Vergangenheit
 
mit
 
einer
 
genauen
 
Zeitangabe
 
verwendet
 
(z.
 
B.
 
'Wir
 
besuchten
 
Rom
 
letztes
 
Jahr',
 
'Sie
 
schloss
 
ihr
 
Studium
 
2020
 
ab').
 
Regelmäßige
 
Verben
 
bilden
 
die
 
Form
 
mit
 
'ed'
 
(walk
 
->
 
walked),
 
während
 
unregelmäßige
 
Verben
 
eigene
 
Formen
 
haben
 
(go
 
->
 
went,
 
see
 
>
 
saw).
 
Verneinungen
 
und
 
Fragen
 
werden
 
mit
 
'did/didn't'
 
+
 
Grundform
 
des
 
Verbs
 
gebildet.",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"They
 
arrived
 
late
 
and
 
missed
 
the
 
tour.",
 
de:
 
"Sie
 
kamen
 
spät
 
an
 
und
 
verpassten
 
die
 
Führung."
 
},
 
        
{
 
en:
 
"We
 
went
 
to
 
the
 
beach
 
and
 
swam
 
in
 
the
 
sea.",
 
de:
 
"Wir
 
gingen
 
an
 
den
 
Strand
 
und
 
schwammen
 
im
 
Meer."
 
},
 
        
{
 
en:
 
"I
 
didn't
 
see
 
you
 
at
 
the
 
gate.
 
Where
 
were
 
you?",
 
de:
 
"Ich
 
habe
 
dich
 
nicht
 
am
 
Gate
 
gesehen.
 
Wo
 
warst
 
du?"
 
},
 

        
{
 
en:
 
"She
 
wrote
 
a
 
postcard
 
to
 
her
 
parents
 
yesterday.",
 
de:
 
"Sie
 
schrieb
 
gestern
 
eine
 
Postkarte
 
an
 
ihre
 
Eltern."
 
},
 
        
{
 
en:
 
"Did
 
you
 
enjoy
 
your
 
holiday
 
last
 
summer?",
 
de:
 
"Hast
 
du
 
deinen
 
Urlaub
 
letzten
 
Sommer
 
genossen?"
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"My
 
Holiday
 
in
 
Spain",
 
      
text:
 
"Last
 
July,
 
we
 
flew
 
to
 
Barcelona
 
for
 
a
 
week.
 
We
 
stayed
 
in
 
a
 
small
 
hotel
 
near
 
the
 
old
 
town
 
and
 
tried
 
many
 
local
 
dishes.
 
The
 
weather
 
was
 
hot
 
and
 
sunny,
 
so
 
we
 
spent
 
a
 
lot
 
of
 
time
 
outside.
 
We
 
visited
 
museums,
 
went
 
on
 
a
 
guided
 
tour
 
of
 
the
 
city,
 
and
 
relaxed
 
on
 
the
 
beach.
 
I
 
bought
 
a
 
few
 
souvenirs
 
for
 
my
 
family.
 
It
 
was
 
a
 
fantastic
 
trip.
 
We
 
also
 
tried
 
to
 
visit
 
Park
 
Güell,
 
but
 
it
 
was
 
too
 
crowded,
 
so
 
we
 
decided
 
to
 
explore
 
the
 
Gothic
 
Quarter
 
instead.
 
In
 
the
 
evenings,
 
we
 
often
 
went
 
to
 
local
 
tapas
 
bars
 
and
 
enjoyed
 
the
 
lively
 
atmosphere.",
 
      
task:
 
"Answer
 
3
 
questions:
 
Where
 
did
 
they
 
stay?
 
What
 
was
 
the
 
weather
 
like?
 
What
 
activities
 
did
 
they
 
do?
 
What
 
did
 
they
 
try
 
to
 
visit
 
but
 
couldn't?
 
What
 
did
 
they
 
do
 
in
 
the
 
evenings?",
 
    
},
 
    
speaking:
 
[
 
      
"Roleplay:
 
checking
 
in
 
at
 
a
 
hotel.",
 
      
"Tell
 
your
 
partner
 
about
 
your
 
last
 
trip
 
(where,
 
when,
 
highlights,
 
any
 
problems).",
 
      
"Discuss
 
the
 
advantages
 
and
 
disadvantages
 
of
 
all-inclusive
 
holidays
 
vs.
 
backpacking.",
 
      
"Describe
 
your
 
dream
 
holiday
 
destination
 
and
 
why.",
 
      
"Talk
 
about
 
a
 
memorable
 
travel
 
experience
 
you
 
had,
 
good
 
or
 
bad."
 
    
],
 
    
writing:
 
"Write
 
a
 
120-word
 
travel
 
blog
 
entry
 
about
 
a
 
place
 
you
 
visited.
 
Describe
 
what
 
you
 
did
 
and
 
saw,
 
what
 
you
 
enjoyed,
 
and
 
one
 
thing
 
you
 
would
 
change.
 
Use
 
at
 
least
 
three
 
irregular
 
past
 
simple
 
verbs.",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"We
 
(go)
 
to
 
Paris
 
last
 
spring
 
and
 
___
 
(see)
 
the
 
Eiffel
 
Tower.",
 
        
choices:
 
["goed
 
/
 
seed",
 
"go
 
/
 
see",
 
"went
 
/
 
saw",
 
"goes
 
/
 
sees"],
 
        
answer:
 
2,
 
        
explanation:
 
"'Go'
 
becomes
 
'went'
 
and
 
'see'
 
becomes
 
'saw'
 
in
 
the
 
Past
 
Simple
 
(irregular
 
verbs).",
 
      
},
 
      
{
 
        
q:
 
"The
 
flight
 
was
 
___
 
by
 
two
 
hours.",
 
        
choices:
 
["delay",
 
"delaying",
 
"delayed",
 
"to
 
delay"],
 
        
answer:
 
2,
 
        
explanation:
 
"The
 
passive
 
voice
 
is
 
used
 
here,
 
so
 
the
 
past
 
participle
 
'delayed'
 
is
 
correct.",
 
      
},
 
      
{
 
        
q:
 
"She
 
___
 
(buy)
 
a
 
lot
 
of
 
souvenirs
 
on
 
her
 
trip.",
 
        
choices:
 
["buyed",
 
"bought",
 
"did
 
buy",
 
"was
 
buying"],
 

        
answer:
 
1,
 
        
explanation:
 
"'Buy'
 
is
 
an
 
irregular
 
verb,
 
and
 
its
 
Past
 
Simple
 
form
 
is
 
'bought'.",
 
      
},
 
      
{
 
        
q:
 
"I
 
___
 
(eat)
 
traditional
 
Italian
 
pizza
 
when
 
I
 
___
 
(be)
 
in
 
Rome.",
 
        
choices:
 
["ate
 
/
 
was",
 
"eat
 
/
 
am",
 
"eaten
 
/
 
were",
 
"had
 
eaten
 
/
 
was"],
 
        
answer:
 
0,
 
        
explanation:
 
"Both
 
verbs
 
refer
 
to
 
finished
 
actions
 
in
 
the
 
past,
 
requiring
 
the
 
Past
 
Simple:
 
'ate'
 
for
 
'eat'
 
and
 
'was'
 
for
 
'be'."
 
      
}
 
    
],
 
  
},
 
  
{
 
    
id:
 
3,
 
    
title:
 
"Work
 
&
 
Education",
 
    
theme:
 
"amber",
 
    
overview:
 
"Talk
 
about
 
jobs
 
and
 
studies.
 
Compare
 
things
 
using
 
comparatives
 
and
 
superlatives.
 
Discuss
 
career
 
paths,
 
academic
 
life,
 
and
 
skills
 
needed
 
for
 
different
 
professions.",
 
    
vocabulary:
 
[
 
      
"deadline",
 
"meeting",
 
"promotion",
 
"internship",
 
"salary",
 
      
"overtime",
 
"seminar",
 
"lecture",
 
"assignment",
 
"qualification",
 
"teamwork",
 
"remote
 
work",
 
      
"networking",
 
"résumé/CV",
 
"cover
 
letter",
 
"skills",
 
"job
 
interview",
 
      
"training
 
course",
 
"career
 
development",
 
"job
 
satisfaction",
 
      
"entrepreneur",
 
"freelancer",
 
"pension"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"We
 
have
 
a
 
team
 
meeting
 
every
 
Monday.",
 
        
"The
 
project
 
deadline
 
is
 
approaching
 
quickly.",
 
        
"She
 
got
 
a
 
promotion
 
after
 
only
 
two
 
years.",
 
        
"He
 
is
 
doing
 
an
 
internship
 
at
 
a
 
tech
 
company.",
 
        
"The
 
starting
 
salary
 
for
 
this
 
position
 
is
 
competitive.",
 
        
"Many
 
employees
 
work
 
overtime
 
during
 
peak
 
season.",
 
        
"I
 
attended
 
an
 
interesting
 
seminar
 
on
 
digital
 
marketing.",
 
        
"The
 
lecture
 
covered
 
the
 
history
 
of
 
art.",
 
        
"I
 
need
 
to
 
submit
 
my
 
assignment
 
by
 
Friday.",
 
        
"What
 
qualifications
 
do
 
you
 
have
 
for
 
this
 
job?",
 
        
"Teamwork
 
is
 
essential
 
for
 
this
 
project.",
 
        
"Remote
 
work
 
offers
 
a
 
lot
 
of
 
flexibility.",
 
        
"Networking
 
is
 
key
 
to
 
career
 
success.",
 
        
"You
 
should
 
update
 
your
 
résumé/CV
 
regularly.",
 
        
"Always
 
write
 
a
 
compelling
 
cover
 
letter.",
 
        
"What
 
are
 
your
 
key
 
skills?",
 
        
"I
 
have
 
a
 
job
 
interview
 
next
 
week.",
 

        
"She
 
enrolled
 
in
 
a
 
training
 
course
 
to
 
improve
 
her
 
coding
 
skills.",
 
        
"Career
 
development
 
is
 
important
 
for
 
long-term
 
growth.",
 
        
"Job
 
satisfaction
 
is
 
more
 
important
 
to
 
me
 
than
 
a
 
high
 
salary.",
 
        
"Being
 
an
 
entrepreneur
 
requires
 
a
 
lot
 
of
 
dedication.",
 
        
"More
 
people
 
are
 
choosing
 
to
 
become
 
freelancers.",
 
        
"It's
 
important
 
to
 
start
 
planning
 
for
 
your
 
pension
 
early.",
 
        
"Effective
 
**time
 
management**
 
is
 
crucial
 
for
 
balancing
 
work
 
and
 
personal
 
life."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Wir
 
haben
 
jeden
 
Montag
 
eine
 
Teambesprechung.",
 
        
"Die
 
Projektfrist
 
rückt
 
schnell
 
näher.",
 
        
"Sie
 
bekam
 
schon
 
nach
 
zwei
 
Jahren
 
eine
 
Beförderung.",
 
        
"Er
 
macht
 
ein
 
Praktikum
 
bei
 
einem
 
Technologieunternehmen.",
 
        
"Das
 
Einstiegsgehalt
 
für
 
diese
 
Position
 
ist
 
wettbewerbsfähig.",
 
        
"Viele
 
Mitarbeiter
 
arbeiten
 
in
 
der
 
Hochsaison
 
Überstunden.",
 
        
"Ich
 
habe
 
ein
 
interessantes
 
Seminar
 
über
 
digitales
 
Marketing
 
besucht.",
 
        
"Die
 
Vorlesung
 
behandelte
 
die
 
Kunstgeschichte.",
 
        
"Ich
 
muss
 
meine
 
Aufgabe
 
bis
 
Freitag
 
einreichen.",
 
        
"Welche
 
Qualifikationen
 
haben
 
Sie
 
für
 
diese
 
Stelle?",
 
        
"Teamwork
 
ist
 
für
 
dieses
 
Projekt
 
unerlässlich.",
 
        
"Remote-Arbeit
 
bietet
 
viel
 
Flexibilität.",
 
        
"Networking
 
ist
 
der
 
Schlüssel
 
zum
 
beruflichen
 
Erfolg.",
 
        
"Sie
 
sollten
 
Ihren
 
Lebenslauf
 
regelmäßig
 
aktualisieren.",
 
        
"Schreiben
 
Sie
 
immer
 
ein
 
überzeugendes
 
Anschreiben.",
 
        
"Was
 
sind
 
Ihre
 
wichtigsten
 
Fähigkeiten?",
 
        
"Ich
 
habe
 
nächste
 
Woche
 
ein
 
Vorstellungsgespräch.",
 
        
"Sie
 
hat
 
sich
 
für
 
einen
 
Schulungskurs
 
angemeldet,
 
um
 
ihre
 
Programmierkenntnisse
 
zu
 
verbessern.",
 
        
"Berufliche
 
Weiterentwicklung
 
ist
 
wichtig
 
für
 
langfristiges
 
Wachstum.",
 
        
"Berufszufriedenheit
 
ist
 
mir
 
wichtiger
 
als
 
ein
 
hohes
 
Gehalt.",
 
        
"Kontinuierliche
 
**berufliche
 
Weiterentwicklung**
 
ist
 
entscheidend,
 
um
 
auf
 
dem
 
heutigen
 
Arbeitsmarkt
 
wettbewerbsfähig
 
zu
 
bleiben."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Comparatives
 
&
 
Superlatives",
 
      
topicDe:
 
"Komparativ
 
&
 
Superlativ",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"Comparatives
 
are
 
used
 
to
 
compare
 
two
 
things
 
(e.g.,
 
'This
 
car
 
is
 
faster
 
than
 
that
 
one').
 
Superlatives
 
are
 
used
 
to
 
compare
 
three
 
or
 
more
 
things
 
and
 
show
 
which
 
is
 
the
 
most
 
(e.g.,
 
'This
 
is
 
the
 
fastest
 
car').
 
Short
 
adjectives
 
(-er/-est):
 
fast
 
→
 
faster
 
→
 
the
 
fastest.
 
Long
 
adjectives
 
(more/most):
 
beautiful
 
→
 
more
 
beautiful
 
→
 
the
 
most
 
beautiful.
 
Irregular:
 
good
 
→
 
better
 
→
 
the
 
best;
 
bad
 
→
 
worse
 
→
 
the
 
worst;
 
far
 
→
 
farther/further
 
→
 
the
 
farthest/furthest.",
 
      
explanationDe:
 
"Komparative
 
werden
 
verwendet,
 
um
 
zwei
 
Dinge
 
zu
 
vergleichen
 
(z.B.
 
'Dieses
 
Auto
 
ist
 
schneller
 
als
 
jenes').
 
Superlative
 
werden
 
verwendet,
 
um
 
drei
 
oder
 
mehr
 
Dinge
 

zu
 
vergleichen
 
und
 
zu
 
zeigen,
 
welches
 
das
 
extremste
 
ist
 
(z.B.
 
'Dies
 
ist
 
das
 
schnellste
 
Auto').
 
Kurze
 
Adjektive
 
(-er/-est):
 
fast
 
→
 
faster
 
→
 
the
 
fastest.
 
Lange
 
Adjektive
 
(more/most):
 
beautiful
 
→
 
more
 
beautiful
 
→
 
the
 
most
 
beautiful.
 
Unregelmäßig:
 
good
 
→
 
better
 
→
 
the
 
best;
 
bad
 
→
 
worse
 
→
 
the
 
worst;
 
far
 
→
 
farther/further
 
→
 
the
 
farthest/furthest.",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"She
 
is
 
taller
 
than
 
her
 
brother.",
 
de:
 
"Sie
 
ist
 
größer
 
als
 
ihr
 
Bruder."
 
},
 
        
{
 
en:
 
"This
 
is
 
the
 
most
 
interesting
 
book
 
I've
 
read
 
this
 
year.",
 
de:
 
"Das
 
ist
 
das
 
interessanteste
 
Buch,
 
das
 
ich
 
dieses
 
Jahr
 
gelesen
 
habe."
 
},
 
        
{
 
en:
 
"He
 
drives
 
more
 
carefully
 
than
 
his
 
sister.",
 
de:
 
"Er
 
fährt
 
vorsichtiger
 
als
 
seine
 
Schwester."
 
},
 
        
{
 
en:
 
"It
 
was
 
the
 
worst
 
movie
 
I've
 
ever
 
seen.",
 
de:
 
"Es
 
war
 
der
 
schlechteste
 
Film,
 
den
 
ich
 
je
 
gesehen
 
habe."
 
},
 
        
{
 
en:
 
"Health
 
is
 
more
 
important
 
than
 
money.",
 
de:
 
"Gesundheit
 
ist
 
wichtiger
 
als
 
Geld."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"Job
 
Advertisement:
 
Marketing
 
Specialist",
 
      
text:
 
"We
 
are
 
looking
 
for
 
a
 
highly
 
motivated
 
Marketing
 
Specialist
 
to
 
join
 
our
 
dynamic
 
team.
 
The
 
ideal
 
candidate
 
will
 
have
 
at
 
least
 
three
 
years
 
of
 
experience
 
in
 
digital
 
marketing
 
and
 
a
 
proven
 
track
 
record
 
of
 
successful
 
campaigns.
 
Excellent
 
communication
 
skills
 
are
 
essential,
 
and
 
a
 
strong
 
understanding
 
of
 
SEO
 
and
 
social
 
media
 
trends
 
is
 
preferred.
 
We
 
offer
 
a
 
competitive
 
salary,
 
excellent
 
benefits,
 
professional
 
development
 
opportunities,
 
and
 
the
 
chance
 
to
 
work
 
on
 
exciting
 
projects.
 
Our
 
company
 
culture
 
is
 
considered
 
one
 
of
 
the
 
most
 
supportive
 
and
 
innovative
 
in
 
the
 
industry.",
 
      
task:
 
"Underline
 
key
 
requirements.
 
Is
 
experience
 
necessary
 
or
 
optional?
 
What
 
benefits
 
are
 
offered?
 
What
 
is
 
the
 
company
 
culture
 
like?
 
Identify
 
one
 
comparative
 
and
 
one
 
superlative
 
in
 
the
 
text.",
 
    
},
 
    
speaking:
 
["Mock
 
interview:
 
5
 
questions.",
 
"Discuss
 
pros
 
and
 
cons
 
of
 
remote
 
work.",
 
"What
 
is
 
more
 
important
 
for
 
a
 
good
 
job:
 
a
 
high
 
salary
 
or
 
job
 
satisfaction?",
 
"Describe
 
your
 
ideal
 
workplace
 
and
 
colleagues.",
 
"Talk
 
about
 
a
 
skill
 
you'd
 
like
 
to
 
develop
 
for
 
your
 
career."],
 
    
writing:
 
"Write
 
a
 
short
 
cover
 
letter
 
(100-120
 
words)
 
for
 
a
 
job
 
you
 
are
 
interested
 
in,
 
highlighting
 
your
 
skills
 
and
 
explaining
 
why
 
you
 
are
 
the
 
best
 
candidate.
 
Mention
 
any
 
relevant
 
experience
 
and
 
your
 
enthusiasm
 
for
 
the
 
role.",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"This
 
course
 
is
 
___
 
(interesting)
 
than
 
the
 
last
 
one.",
 
        
choices:
 
["interestinger",
 
"more
 
interesting",
 
"most
 
interesting",
 
"as
 
interesting"],
 
        
answer:
 
1,
 
        
explanation:
 
"For
 
longer
 
adjectives,
 
use
 
'more'
 
to
 
form
 
the
 
comparative.",
 
      
},
 
      
{
 
        
q:
 
"She
 
is
 
the
 
___
 
(good)
 
student
 
in
 
the
 
class.",
 
        
choices:
 
["goodest",
 
"better",
 
"best",
 
"most
 
good"],
 

        
answer:
 
2,
 
        
explanation:
 
"'Good'
 
has
 
an
 
irregular
 
superlative
 
form:
 
'the
 
best'.",
 
      
},
 
      
{
 
        
q:
 
"He
 
runs
 
___
 
(fast)
 
than
 
anyone
 
else
 
on
 
the
 
team.",
 
        
choices:
 
["faster",
 
"more
 
fast",
 
"fastest",
 
"most
 
fast"],
 
        
answer:
 
0,
 
        
explanation:
 
"'Fast'
 
is
 
a
 
short
 
adjective,
 
so
 
we
 
add
 
'-er'
 
for
 
the
 
comparative.",
 
      
},
 
      
{
 
        
q:
 
"Living
 
in
 
the
 
city
 
is
 
___
 
(expensive)
 
than
 
living
 
in
 
the
 
countryside.",
 
        
choices:
 
["expensiver",
 
"more
 
expensive",
 
"most
 
expensive",
 
"as
 
expensive"],
 
        
answer:
 
1,
 
        
explanation:
 
"For
 
longer
 
adjectives,
 
use
 
'more'
 
to
 
form
 
the
 
comparative."
 
      
}
 
    
],
 
  
},
 
  
{
 
    
id:
 
4,
 
    
title:
 
"Food
 
&
 
Health",
 
    
theme:
 
"emerald",
 
    
overview:
 
"Order
 
food,
 
talk
 
about
 
diets
 
and
 
health
 
problems.
 
Practice
 
countable/uncountable
 
nouns
 
and
 
quantifiers.
 
Discuss
 
healthy
 
habits,
 
common
 
illnesses,
 
and
 
dining
 
experiences.",
 
    
vocabulary:
 
[
 
      
"appetizer",
 
"main
 
course",
 
"dessert",
 
"bill",
 
"allergy",
 
      
"headache",
 
"fever",
 
"prescription",
 
"portion",
 
      
"calories",
 
"balanced
 
diet",
 
"ingredients",
 
"recipe",
 
      
"vegetarian",
 
"vegan",
 
"organic",
 
"symptoms",
 
"diagnosis",
 
      
"treatment",
 
"junk
 
food",
 
"superfood",
 
"nutrition",
 
"digestion",
 
      
"immune
 
system",
 
"metabolism",
 
"exercise",
 
"hydration",
 
"mindfulness",
 
      
"stress
 
management"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"I'd
 
like
 
the
 
main
 
course
 
and
 
a
 
dessert,
 
please.",
 
        
"Do
 
you
 
have
 
any
 
vegetarian
 
options?",
 
        
"I
 
found
 
a
 
great
 
recipe
 
for
 
pasta.",
 
        
"I
 
try
 
to
 
buy
 
organic
 
fruit.",
 
        
"What
 
are
 
the
 
symptoms
 
of
 
the
 
flu?",
 
        
"Eating
 
too
 
much
 
junk
 
food
 
is
 
bad
 
for
 
your
 
health.",
 
        
"Superfoods
 
are
 
rich
 
in
 
nutrients.",
 
        
"Nutrition
 
plays
 
a
 
vital
 
role
 
in
 
our
 
well-being.",
 
        
"Proper
 
digestion
 
is
 
crucial
 
for
 
nutrient
 
absorption.",
 
        
"A
 
strong
 
immune
 
system
 
helps
 
fight
 
off
 
illnesses.",
 

        
"Regular
 
exercise
 
boosts
 
your
 
metabolism.",
 
        
"Adequate
 
hydration
 
is
 
essential
 
for
 
overall
 
health.",
 
        
"Mindfulness
 
techniques
 
can
 
help
 
with
 
stress
 
management."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Ich
 
hätte
 
gerne
 
das
 
Hauptgericht
 
und
 
einen
 
Nachtisch,
 
bitte.",
 
        
"Haben
 
Sie
 
vegetarische
 
Optionen?",
 
        
"Ich
 
habe
 
ein
 
tolles
 
Rezept
 
für
 
Pasta
 
gefunden.",
 
        
"Ich
 
versuche,
 
Bio-Obst
 
zu
 
kaufen.",
 
        
"Was
 
sind
 
die
 
Symptome
 
der
 
Grippe?",
 
        
"Zu
 
viel
 
Junkfood
 
zu
 
essen
 
ist
 
schlecht
 
für
 
die
 
Gesundheit.",
 
        
"Superfoods
 
sind
 
reich
 
an
 
Nährstoffen.",
 
        
"Ernährung
 
spielt
 
eine
 
entscheidende
 
Rolle
 
für
 
unser
 
Wohlbefinden.",
 
        
"Eine
 
gute
 
Verdauung
 
ist
 
entscheidend
 
für
 
die
 
Nährstoffaufnahme.",
 
        
"Ein
 
starkes
 
Immunsystem
 
hilft,
 
Krankheiten
 
abzuwehren.",
 
        
"Regelmäßige
 
Bewegung
 
kurbelt
 
den
 
Stoffwechsel
 
an.",
 
        
"Ausreichende
 
Flüssigkeitszufuhr
 
ist
 
entscheidend
 
für
 
die
 
allgemeine
 
Gesundheit.",
 
        
"Achtsamkeitstechniken
 
können
 
bei
 
der
 
Stressbewältigung
 
helfen."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Countable
 
vs
 
Uncountable;
 
some/any/much/many/a
 
lot
 
of/few/little",
 
      
topicDe:
 
"Zählbar
 
vs.
 
Unzählbar;
 
some/any/much/many/a
 
lot
 
of/few/little",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"**Countable
 
nouns**
 
can
 
be
 
counted
 
(e.g.,
 
'an
 
apple',
 
'two
 
apples',
 
'many
 
books').
 
They
 
have
 
singular
 
and
 
plural
 
forms.
 
**Uncountable
 
nouns**
 
cannot
 
be
 
counted
 
(e.g.,
 
'rice',
 
'water',
 
'information').
 
They
 
usually
 
have
 
only
 
a
 
singular
 
form.
 
**Quantifiers:**
 
'much'
 
(uncountable)
 
and
 
'many'
 
(countable)
 
are
 
often
 
used
 
in
 
negatives
 
and
 
questions.
 
'A
 
lot
 
of'
 
(or
 
'lots
 
of')
 
can
 
be
 
used
 
with
 
both
 
in
 
affirmative
 
sentences.
 
'Few/a
 
few'
 
for
 
countable
 
(a
 
few
 
friends,
 
few
 
opportunities
 
means
 
almost
 
none),
 
'little/a
 
little'
 
for
 
uncountable
 
(a
 
little
 
milk,
 
little
 
hope
 
means
 
almost
 
none).",
 
      
explanationDe:
 
"**Zählbare
 
Nomen**
 
können
 
gezählt
 
werden
 
(z.B.
 
'ein
 
Apfel',
 
'zwei
 
Äpfel',
 
'viele
 
Bücher').
 
Sie
 
haben
 
Singular-
 
und
 
Pluralformen.
 
**Unzählbare
 
Nomen**
 
können
 
nicht
 
gezählt
 
werden
 
(z.B.
 
'Reis',
 
'Wasser',
 
'Informationen').
 
Sie
 
haben
 
normalerweise
 
nur
 
eine
 
Singularform.
 
**Mengenangaben:**
 
'much'
 
(unzählbar)
 
und
 
'many'
 
(zählbar)
 
werden
 
oft
 
in
 
Verneinungen
 
und
 
Fragen
 
verwendet.
 
'A
 
lot
 
of'
 
(oder
 
'lots
 
of')
 
kann
 
mit
 
beiden
 
in
 
bejahenden
 
Sätzen
 
verwendet
 
werden.
 
'Few/a
 
few'
 
für
 
Zählbares
 
(a
 
few
 
friends,
 
few
 
opportunities
 
bedeutet
 
fast
 
keine),
 
'little/a
 
little'
 
für
 
Unzählbares
 
(a
 
little
 
milk,
 
little
 
hope
 
bedeutet
 
fast
 
keine).",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"There
 
isn't
 
much
 
sugar
 
left.",
 
de:
 
"Es
 
ist
 
nicht
 
mehr
 
viel
 
Zucker
 
übrig."
 
},
 
        
{
 
en:
 
"Do
 
you
 
have
 
many
 
friends?",
 
de:
 
"Hast
 
du
 
viele
 
Freunde?"
 
},
 
        
{
 
en:
 
"We
 
have
 
a
 
lot
 
of
 
food
 
for
 
the
 
party.",
 
de:
 
"Wir
 
haben
 
viel
 
Essen
 
für
 
die
 
Party."
 
},
 
        
{
 
en:
 
"She
 
has
 
few
 
problems
 
at
 
work.",
 
de:
 
"Sie
 
hat
 
wenige
 
Probleme
 
bei
 
der
 
Arbeit."
 
},
 

        
{
 
en:
 
"I
 
need
 
a
 
little
 
more
 
time.",
 
de:
 
"Ich
 
brauche
 
etwas
 
mehr
 
Zeit."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"Restaurant
 
Menu
 
Review",
 
      
text:
 
"The
 
restaurant
 
offers
 
a
 
great
 
selection
 
of
 
healthy
 
and
 
delicious
 
dishes.
 
For
 
an
 
appetizer,
 
there
 
is
 
a
 
fresh
 
salad
 
or
 
a
 
creamy
 
tomato
 
soup.
 
The
 
main
 
course
 
options
 
are
 
grilled
 
chicken
 
with
 
seasonal
 
vegetables,
 
a
 
rich
 
beef
 
stew,
 
or
 
a
 
delicious
 
vegetarian
 
pasta
 
primavera.
 
For
 
dessert,
 
you
 
can
 
choose
 
chocolate
 
cake,
 
a
 
refreshing
 
fruit
 
salad,
 
or
 
homemade
 
apple
 
pie.
 
A
 
recent
 
review
 
said:
 
'Portions
 
are
 
generous
 
and
 
the
 
ingredients
 
are
 
very
 
fresh.
 
We
 
had
 
a
 
lot
 
of
 
excellent
 
food,
 
but
 
there
 
was
 
too
 
much
 
noise.
 
A
 
great
 
place
 
for
 
a
 
balanced
 
meal,
 
but
 
with
 
a
 
little
 
too
 
much
 
background
 
sound.'",
 
      
task:
 
"Choose
 
a
 
healthy
 
three-course
 
meal
 
from
 
the
 
menu
 
and
 
explain
 
your
 
choices.
 
Identify
 
all
 
countable
 
and
 
uncountable
 
nouns
 
in
 
the
 
review
 
text.
 
What
 
was
 
the
 
main
 
complaint
 
in
 
the
 
review?",
 
    
},
 
    
speaking:
 
["Ordering
 
food
 
roleplay
 
in
 
a
 
restaurant.",
 
"Describe
 
your
 
diet
 
for
 
a
 
week
 
and
 
explain
 
if
 
it's
 
balanced.",
 
"What
 
are
 
the
 
benefits
 
of
 
a
 
vegetarian
 
diet?
 
What
 
about
 
a
 
vegan
 
diet?",
 
"Discuss
 
common
 
health
 
problems
 
and
 
their
 
remedies.",
 
"Talk
 
about
 
traditional
 
dishes
 
from
 
your
 
country."],
 
    
writing:
 
"Write
 
a
 
short
 
review
 
(100-120
 
words)
 
of
 
your
 
favorite
 
restaurant.
 
Describe
 
the
 
food,
 
atmosphere,
 
and
 
service.
 
Use
 
at
 
least
 
three
 
countable
 
and
 
three
 
uncountable
 
nouns.",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"How
 
___
 
money
 
do
 
you
 
have?",
 
        
choices:
 
["many",
 
"much",
 
"few",
 
"a
 
lot"],
 
        
answer:
 
1,
 
        
explanation:
 
"'Money'
 
is
 
uncountable,
 
so
 
'much'
 
is
 
correct.",
 
      
},
 
      
{
 
        
q:
 
"There
 
are
 
___
 
apples
 
in
 
the
 
basket.",
 
        
choices:
 
["much",
 
"little",
 
"a
 
lot
 
of",
 
"any"],
 
        
answer:
 
2,
 
        
explanation:
 
"'Apples'
 
are
 
countable,
 
and
 
'a
 
lot
 
of'
 
can
 
be
 
used
 
in
 
affirmative
 
sentences
 
for
 
both
 
countable
 
and
 
uncountable
 
nouns.",
 
      
},
 
      
{
 
        
q:
 
"I
 
have
 
___
 
friends
 
in
 
this
 
city.",
 
        
choices:
 
["little",
 
"much",
 
"few",
 
"a
 
little"],
 
        
answer:
 
2,
 
        
explanation:
 
"'Friends'
 
are
 
countable,
 
and
 
'few'
 
means
 
not
 
many.",
 
      
},
 
      
{
 
        
q:
 
"We
 
saw
 
___
 
flowers
 
in
 
the
 
garden.",
 

        
choices:
 
["much",
 
"a
 
lot
 
of",
 
"little",
 
"any"],
 
        
answer:
 
1,
 
        
explanation:
 
"'A
 
lot
 
of'
 
can
 
be
 
used
 
with
 
countable
 
nouns
 
in
 
affirmative
 
sentences.
 
'Flowers'
 
are
 
countable."
 
      
}
 
    
],
 
  
},
 
  
{
 
    
id:
 
5,
 
    
title:
 
"Past
 
Experiences
 
&
 
Stories",
 
    
theme:
 
"rose",
 
    
overview:
 
"Share
 
personal
 
experiences
 
and
 
tell
 
stories
 
effectively.
 
Master
 
the
 
use
 
of
 
Past
 
Perfect
 
for
 
sequencing
 
events.
 
Expand
 
vocabulary
 
related
 
to
 
events,
 
feelings,
 
and
 
narration.
 
Learn
 
how
 
to
 
create
 
a
 
compelling
 
narrative.",
 
    
vocabulary:
 
[
 
      
"event",
 
"incident",
 
"adventure",
 
"memory",
 
"narrate",
 
      
"recount",
 
"witness",
 
"experience",
 
"consequence",
 
"flashback",
 
"unexpected",
 
"memorable",
 
"regret",
 
      
"achievement",
 
"challenge",
 
"turning
 
point",
 
"once
 
upon
 
a
 
time",
 
"in
 
the
 
end",
 
"suddenly",
 
"meanwhile",
 
"eventually",
 
"fortunately",
 
      
"unfortunately",
 
"overcome",
 
"reflect"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"The
 
incident
 
happened
 
very
 
quickly.",
 
        
"She
 
recounted
 
her
 
travel
 
adventure.",
 
        
"I
 
have
 
many
 
good
 
memories
 
from
 
my
 
childhood.",
 
        
"He
 
witnessed
 
the
 
entire
 
event.",
 
        
"Suddenly,
 
the
 
lights
 
went
 
out.",
 
        
"Eventually,
 
they
 
found
 
a
 
solution.",
 
        
"Fortunately,
 
no
 
one
 
was
 
hurt
 
in
 
the
 
accident.",
 
        
"It
 
was
 
an
 
unexpected
 
turn
 
of
 
events.",
 
        
"This
 
challenge
 
made
 
him
 
stronger.",
 
        
"Meeting
 
her
 
was
 
a
 
turning
 
point
 
in
 
his
 
life.",
 
        
"He
 
had
 
to
 
**overcome
 
many
 
obstacles**
 
to
 
achieve
 
his
 
dream."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Der
 
Vorfall
 
geschah
 
sehr
 
schnell.",
 
        
"Sie
 
erzählte
 
von
 
ihrem
 
Reiseabenteuer.",
 
        
"Ich
 
habe
 
viele
 
gute
 
Erinnerungen
 
aus
 
meiner
 
Kindheit.",
 
        
"Er
 
war
 
Zeuge
 
des
 
gesamten
 
Ereignisses.",
 
        
"Plötzlich
 
gingen
 
die
 
Lichter
 
aus.",
 
        
"Schließlich
 
fanden
 
sie
 
eine
 
Lösung.",
 
        
"Glücklicherweise
 
wurde
 
bei
 
dem
 
Unfall
 
niemand
 
verletzt.",
 

        
"Es
 
war
 
eine
 
unerwartete
 
Wendung
 
der
 
Ereignisse.",
 
        
"Diese
 
Herausforderung
 
machte
 
ihn
 
stärker.",
 
        
"Ihre
 
Begegnung
 
war
 
ein
 
Wendepunkt
 
in
 
seinem
 
Leben.",
 
        
"Er
 
musste
 
viele
 
**Hindernisse
 
überwinden**,
 
um
 
seinen
 
Traum
 
zu
 
verwirklichen."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Past
 
Perfect
 
vs
 
Past
 
Simple",
 
      
topicDe:
 
"Plusquamperfekt
 
vs.
 
Einfache
 
Vergangenheit",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"The
 
**Past
 
Simple**
 
is
 
used
 
for
 
actions
 
completed
 
at
 
a
 
specific
 
time
 
in
 
the
 
past
 
(e.g.,
 
'I
 
ate
 
breakfast').
 
The
 
**Past
 
Perfect**
 
(had
 
+
 
past
 
participle)
 
is
 
used
 
to
 
describe
 
an
 
action
 
that
 
happened
 
*before*
 
another
 
action
 
in
 
the
 
past
 
(e.g.,
 
'I
 
had
 
already
 
eaten
 
breakfast
 
when
 
he
 
arrived').
 
It
 
helps
 
to
 
show
 
the
 
sequence
 
of
 
past
 
events.
 
Think
 
of
 
it
 
as
 
'the
 
past
 
of
 
the
 
past'.",
 
      
explanationDe:
 
"Das
 
**Simple
 
Past**
 
wird
 
für
 
Handlungen
 
verwendet,
 
die
 
zu
 
einem
 
bestimmten
 
Zeitpunkt
 
in
 
der
 
Vergangenheit
 
abgeschlossen
 
wurden
 
(z.B.
 
'Ich
 
habe
 
gefrühstückt').
 
Das
 
**Past
 
Perfect**
 
(had
 
+
 
Partizip
 
II)
 
wird
 
verwendet,
 
um
 
eine
 
Handlung
 
zu
 
beschreiben,
 
die
 
*vor*
 
einer
 
anderen
 
Handlung
 
in
 
der
 
Vergangenheit
 
stattfand
 
(z.B.
 
'Ich
 
hatte
 
schon
 
gefrühstückt,
 
als
 
er
 
ankam').
 
Es
 
hilft,
 
die
 
Reihenfolge
 
vergangener
 
Ereignisse
 
zu
 
zeigen.
 
Stellen
 
Sie
 
es
 
sich
 
als
 
'die
 
Vergangenheit
 
der
 
Vergangenheit'
 
vor.",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"When
 
I
 
arrived,
 
she
 
had
 
already
 
left.",
 
de:
 
"Als
 
ich
 
ankam,
 
war
 
sie
 
schon
 
gegangen."
 
},
 
        
{
 
en:
 
"He
 
had
 
finished
 
his
 
work
 
before
 
he
 
went
 
home.",
 
de:
 
"Er
 
hatte
 
seine
 
Arbeit
 
beendet,
 
bevor
 
er
 
nach
 
Hause
 
ging."
 
},
 
        
{
 
en:
 
"I
 
didn't
 
know
 
the
 
answer
 
because
 
I
 
hadn't
 
studied.",
 
de:
 
"Ich
 
wusste
 
die
 
Antwort
 
nicht,
 
weil
 
ich
 
nicht
 
gelernt
 
hatte."
 
},
 
        
{
 
en:
 
"They
 
had
 
never
 
seen
 
such
 
a
 
beautiful
 
sunset
 
until
 
they
 
visited
 
Bali.",
 
de:
 
"Sie
 
hatten
 
noch
 
nie
 
einen
 
so
 
schönen
 
Sonnenuntergang
 
gesehen,
 
bis
 
sie
 
Bali
 
besuchten."
 
},
 
        
{
 
en:
 
"She
 
recognized
 
him
 
immediately;
 
she
 
had
 
met
 
him
 
before.",
 
de:
 
"Sie
 
erkannte
 
ihn
 
sofort;
 
sie
 
hatte
 
ihn
 
schon
 
einmal
 
getroffen."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"An
 
Unexpected
 
Journey",
 
      
text:
 
"Sarah
 
had
 
planned
 
a
 
relaxing
 
holiday,
 
but
 
an
 
unexpected
 
incident
 
changed
 
everything.
 
Her
 
flight
 
was
 
severely
 
delayed,
 
and
 
by
 
the
 
time
 
she
 
finally
 
arrived,
 
her
 
luggage
 
had
 
been
 
sent
 
to
 
a
 
different
 
city.
 
Frustrated,
 
she
 
went
 
to
 
the
 
information
 
desk,
 
where
 
a
 
kind
 
local
 
woman
 
offered
 
her
 
help.
 
The
 
woman
 
not
 
only
 
helped
 
Sarah
 
track
 
her
 
luggage
 
but
 
also
 
invited
 
her
 
to
 
stay
 
at
 
her
 
home
 
and
 
experience
 
local
 
culture.
 
Sarah
 
had
 
never
 
experienced
 
such
 
hospitality
 
before.
 
The
 
trip
 
turned
 
out
 
to
 
be
 
one
 
of
 
the
 
most
 
memorable
 
she
 
had
 
ever
 
taken,
 
all
 
thanks
 
to
 
that
 
initial
 
unexpected
 
incident.",
 

      
task:
 
"Identify
 
all
 
Past
 
Simple
 
and
 
Past
 
Perfect
 
verbs
 
in
 
the
 
text.
 
Explain
 
why
 
each
 
tense
 
is
 
used.
 
What
 
problem
 
did
 
Sarah
 
encounter?
 
How
 
was
 
it
 
resolved?
 
What
 
made
 
the
 
trip
 
memorable
 
for
 
her?",
 
    
},
 
    
speaking:
 
[
 
      
"Tell
 
a
 
story
 
about
 
a
 
time
 
something
 
unexpected
 
happened
 
to
 
you.",
 
      
"Describe
 
a
 
challenging
 
experience
 
you
 
had
 
and
 
how
 
you
 
overcame
 
it.",
 
      
"Talk
 
about
 
a
 
significant
 
turning
 
point
 
in
 
your
 
life.",
 
      
"Share
 
a
 
vivid
 
memory
 
from
 
your
 
childhood.",
 
      
"Discuss
 
a
 
historical
 
event
 
and
 
its
 
consequences,
 
using
 
appropriate
 
past
 
tenses."
 
    
],
 
    
writing:
 
"Write
 
a
 
short
 
story
 
(120-150
 
words)
 
about
 
a
 
personal
 
adventure
 
or
 
a
 
significant
 
event
 
in
 
your
 
life.
 
Use
 
both
 
Past
 
Simple
 
and
 
Past
 
Perfect
 
to
 
clearly
 
sequence
 
the
 
events.",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"I
 
couldn't
 
enter
 
the
 
house
 
because
 
I
 
___
 
(forget)
 
my
 
keys.",
 
        
choices:
 
["forgot",
 
"had
 
forgotten",
 
"was
 
forgetting",
 
"forget"],
 
        
answer:
 
1,
 
        
explanation:
 
"The
 
action
 
of
 
forgetting
 
keys
 
happened
 
before
 
the
 
inability
 
to
 
enter,
 
so
 
Past
 
Perfect
 
is
 
used.",
 
      
},
 
      
{
 
        
q:
 
"By
 
the
 
time
 
we
 
arrived,
 
the
 
movie
 
___
 
(already
 
start).",
 
        
choices:
 
["already
 
started",
 
"had
 
already
 
started",
 
"was
 
already
 
starting",
 
"starts"],
 
        
answer:
 
1,
 
        
explanation:
 
"The
 
movie
 
starting
 
occurred
 
before
 
our
 
arrival,
 
hence
 
Past
 
Perfect.",
 
      
},
 
      
{
 
        
q:
 
"They
 
___
 
(not
 
eat)
 
anything
 
since
 
morning,
 
so
 
they
 
were
 
very
 
hungry.",
 
        
choices:
 
["didn't
 
eat",
 
"hadn't
 
eaten",
 
"weren't
 
eating",
 
"don't
 
eat"],
 
        
answer:
 
1,
 
        
explanation:
 
"Their
 
not
 
eating
 
(Past
 
Perfect)
 
caused
 
their
 
hunger
 
in
 
the
 
past
 
(Past
 
Simple).",
 
      
}
 
    
],
 
  
},
 
  
{
 
    
id:
 
6,
 
    
title:
 
"Future
 
Plans
 
&
 
Predictions",
 
    
theme:
 
"indigo",
 
    
overview:
 
"Discuss
 
future
 
plans,
 
predictions,
 
and
 
intentions.
 
Differentiate
 
between
 
'will',
 
'going
 
to',
 
and
 
Present
 
Continuous
 
for
 
future
 
meaning.
 
Learn
 
expressions
 
for
 
certainty
 
and
 
uncertainty
 
about
 
the
 
future.
 
Plan
 
for
 
various
 
scenarios.",
 
    
vocabulary:
 
[
 

      
"predict",
 
"forecast",
 
"intend",
 
"plan",
 
"expect",
 
"hope",
 
      
"future",
 
"likely",
 
"unlikely",
 
"certain",
 
"uncertain",
 
"possibility",
 
      
"probability",
 
"destination",
 
"resolution",
 
"appointment",
 
"upcoming",
 
      
"eventually",
 
"sooner
 
or
 
later",
 
"in
 
the
 
long
 
run",
 
"in
 
the
 
short
 
term",
 
"outlook",
 
"prospect",
 
"vision"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"Experts
 
predict
 
a
 
rise
 
in
 
global
 
temperatures.",
 
        
"The
 
weather
 
forecast
 
for
 
tomorrow
 
is
 
sunny.",
 
        
"I
 
intend
 
to
 
finish
 
my
 
degree
 
next
 
year.",
 
        
"What
 
are
 
your
 
plans
 
for
 
the
 
weekend?",
 
        
"I
 
expect
 
the
 
meeting
 
to
 
be
 
productive.",
 
        
"I
 
hope
 
to
 
see
 
you
 
soon.",
 
        
"It's
 
likely
 
that
 
prices
 
will
 
increase.",
 
        
"It's
 
unlikely
 
to
 
rain
 
today.",
 
        
"Are
 
you
 
certain
 
about
 
your
 
decision?",
 
        
"There's
 
a
 
strong
 
possibility
 
of
 
success.",
 
        
"The
 
probability
 
of
 
winning
 
the
 
lottery
 
is
 
low.",
 
        
"Our
 
next
 
travel
 
destination
 
is
 
Japan.",
 
        
"I
 
made
 
a
 
New
 
Year's
 
resolution
 
to
 
exercise
 
more.",
 
        
"I
 
have
 
an
 
appointment
 
with
 
the
 
dentist
 
tomorrow.",
 
        
"The
 
upcoming
 
concert
 
is
 
already
 
sold
 
out.",
 
        
"Eventually,
 
renewable
 
energy
 
will
 
be
 
the
 
main
 
power
 
source.",
 
        
"Sooner
 
or
 
later,
 
you'll
 
understand.",
 
        
"In
 
the
 
long
 
run,
 
this
 
investment
 
will
 
pay
 
off.",
 
        
"In
 
the
 
short
 
term,
 
we
 
need
 
to
 
focus
 
on
 
sales.",
 
        
"The
 
economic
 
outlook
 
for
 
next
 
year
 
looks
 
positive.",
 
        
"What
 
are
 
your
 
future
 
prospects?",
 
        
"My
 
vision
 
for
 
the
 
future
 
is
 
a
 
world
 
with
 
less
 
pollution."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Experten
 
sagen
 
einen
 
Anstieg
 
der
 
globalen
 
Temperaturen
 
voraus.",
 
        
"Die
 
Wettervorhersage
 
für
 
morgen
 
ist
 
sonnig.",
 
        
"Ich
 
beabsichtige,
 
nächstes
 
Jahr
 
meinen
 
Abschluss
 
zu
 
machen.",
 
        
"Was
 
sind
 
deine
 
Pläne
 
für
 
das
 
Wochenende?",
 
        
"Ich
 
erwarte,
 
dass
 
das
 
Treffen
 
produktiv
 
sein
 
wird.",
 
        
"Ich
 
hoffe,
 
dich
 
bald
 
zu
 
sehen.",
 
        
"Es
 
ist
 
wahrscheinlich,
 
dass
 
die
 
Preise
 
steigen
 
werden.",
 
        
"Es
 
ist
 
unwahrscheinlich,
 
dass
 
es
 
heute
 
regnet.",
 
        
"Sind
 
Sie
 
sich
 
Ihrer
 
Entscheidung
 
sicher?",
 
        
"Es
 
besteht
 
eine
 
hohe
 
Erfolgsaussicht.",
 
        
"Die
 
Wahrscheinlichkeit,
 
im
 
Lotto
 
zu
 
gewinnen,
 
ist
 
gering.",
 
        
"Unser
 
nächstes
 
Reiseziel
 
ist
 
Japan.",
 

        
"Ich
 
fasse
 
einen
 
Neujahrsvorsatz,
 
um
 
regelmäßiger
 
Sport
 
zu
 
treiben.",
 
        
"Ich
 
habe
 
morgen
 
einen
 
Termin
 
beim
 
Zahnarzt.",
 
        
"Das
 
bevorstehende
 
Konzert
 
ist
 
bereits
 
ausverkauft.",
 
        
"Schließlich
 
wird
 
erneuerbare
 
Energie
 
die
 
Hauptenergiequelle
 
sein.",
 
        
"Früher
 
oder
 
später
 
wirst
 
du
 
es
 
verstehen.",
 
        
"Langfristig
 
wird
 
sich
 
diese
 
Investition
 
auszahlen.",
 
        
"Kurzfristig
 
müssen
 
wir
 
uns
 
auf
 
den
 
Verkauf
 
konzentrieren.",
 
        
"Die
 
wirtschaftlichen
 
Aussichten
 
für
 
nächstes
 
Jahr
 
sehen
 
positiv
 
aus.",
 
        
"Was
 
sind
 
Ihre
 
Zukunftsaussichten?",
 
        
"Meine
 
Vision
 
für
 
die
 
Zukunft
 
ist
 
eine
 
Welt
 
mit
 
weniger
 
Umweltverschmutzung."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Future
 
Forms:
 
Will,
 
Going
 
to,
 
Present
 
Continuous",
 
      
topicDe:
 
"Zukunftsformen:
 
Will,
 
Going
 
to,
 
Präsens
 
Verlaufsform",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"**Will**:
 
For
 
spontaneous
 
decisions,
 
predictions
 
(often
 
with
 
'I
 
think',
 
'I
 
believe'),
 
promises,
 
offers,
 
or
 
future
 
facts
 
(e.g.,
 
'I'll
 
help
 
you.',
 
'It
 
will
 
rain
 
tomorrow.').
 
**Going
 
to**:
 
For
 
plans
 
or
 
intentions
 
decided
 
before
 
speaking,
 
or
 
predictions
 
based
 
on
 
present
 
evidence
 
(e.g.,
 
'I'm
 
going
 
to
 
visit
 
my
 
parents
 
next
 
week.',
 
'It's
 
going
 
to
 
crash!
 
Look
 
out!').
 
**Present
 
Continuous**:
 
For
 
fixed
 
arrangements
 
or
 
appointments
 
(e.g.,
 
'I'm
 
meeting
 
Anna
 
on
 
Friday.',
 
'They're
 
flying
 
to
 
Rome
 
tomorrow.').",
 
      
explanationDe:
 
"**Will**:
 
Für
 
spontane
 
Entscheidungen,
 
Vorhersagen
 
(oft
 
mit
 
'Ich
 
denke',
 
'Ich
 
glaube'),
 
Versprechen,
 
Angebote
 
oder
 
zukünftige
 
Fakten
 
(z.B.
 
'Ich
 
helfe
 
dir.',
 
'Es
 
wird
 
morgen
 
regnen.').
 
**Going
 
to**:
 
Für
 
Pläne
 
oder
 
Absichten,
 
die
 
vor
 
dem
 
Sprechen
 
getroffen
 
wurden,
 
oder
 
Vorhersagen,
 
die
 
auf
 
gegenwärtigen
 
Anzeichen
 
basieren
 
(z.B.
 
'Ich
 
werde
 
nächste
 
Woche
 
meine
 
Eltern
 
besuchen.',
 
'Es
 
wird
 
abstürzen!
 
Pass
 
auf!').
 
**Präsens
 
Verlaufsform**:
 
Für
 
feste
 
Abmachungen
 
oder
 
Termine
 
(z.B.
 
'Ich
 
treffe
 
Anna
 
am
 
Freitag.',
 
'Sie
 
fliegen
 
morgen
 
nach
 
Rom.').",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"I
 
think
 
she
 
will
 
pass
 
the
 
exam.",
 
de:
 
"Ich
 
glaube,
 
sie
 
wird
 
die
 
Prüfung
 
bestehen."
 
},
 
        
{
 
en:
 
"They
 
are
 
going
 
to
 
buy
 
a
 
new
 
house.",
 
de:
 
"Sie
 
werden
 
ein
 
neues
 
Haus
 
kaufen."
 
},
 
        
{
 
en:
 
"We
 
are
 
having
 
dinner
 
with
 
friends
 
tonight.",
 
de:
 
"Wir
 
essen
 
heute
 
Abend
 
mit
 
Freunden
 
zu
 
Abend."
 
},
 
        
{
 
en:
 
"It
 
looks
 
like
 
it's
 
going
 
to
 
snow.",
 
de:
 
"Es
 
sieht
 
so
 
aus,
 
als
 
ob
 
es
 
schneien
 
wird."
 
},
 
        
{
 
en:
 
"Don't
 
worry,
 
I'll
 
help
 
you.",
 
de:
 
"Keine
 
Sorge,
 
ich
 
helfe
 
dir."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"My
 
Gap
 
Year
 
Plans",
 
      
text:
 
"After
 
finishing
 
university,
 
I
 
have
 
decided
 
to
 
take
 
a
 
gap
 
year
 
before
 
starting
 
my
 
career.
 
First,
 
I'm
 
going
 
to
 
travel
 
through
 
Southeast
 
Asia
 
for
 
three
 
months.
 
I've
 
already
 
booked
 
my
 
flights
 
and
 
hostels
 
for
 
the
 
first
 
month,
 
so
 
everything
 
is
 
arranged.
 
I'm
 
going
 
to
 
try
 
different
 
local
 
cuisines
 
and
 
learn
 
some
 
basic
 
phrases
 
in
 
each
 
country.
 
After
 
that,
 
I
 
will
 
probably
 
volunteer
 
for
 
an
 

environmental
 
project
 
for
 
a
 
couple
 
of
 
months
 
–
 
I'm
 
still
 
looking
 
for
 
the
 
perfect
 
opportunity,
 
but
 
I
 
hope
 
to
 
find
 
something
 
soon.
 
I
 
think
 
this
 
year
 
will
 
be
 
incredibly
 
enriching
 
and
 
I
 
will
 
learn
 
a
 
lot
 
about
 
myself
 
and
 
the
 
world.
 
My
 
parents
 
are
 
worried,
 
but
 
I
 
believe
 
everything
 
will
 
be
 
fine.
 
I'm
 
meeting
 
a
 
travel
 
agent
 
next
 
week
 
to
 
finalize
 
some
 
details.",
 
      
task:
 
"Identify
 
examples
 
of
 
'will',
 
'going
 
to',
 
and
 
Present
 
Continuous
 
used
 
for
 
future.
 
Explain
 
the
 
reason
 
for
 
using
 
each
 
form.
 
What
 
are
 
the
 
author's
 
fixed
 
arrangements?
 
What
 
is
 
still
 
uncertain?
 
What
 
are
 
the
 
author's
 
parents'
 
concerns?",
 
    
},
 
    
speaking:
 
[
 
      
"Describe
 
your
 
future
 
career
 
plans.",
 
      
"Talk
 
about
 
a
 
major
 
prediction
 
you
 
have
 
for
 
the
 
world
 
in
 
the
 
next
 
10
 
years.",
 
      
"Discuss
 
your
 
travel
 
plans
 
for
 
next
 
year.",
 
      
"What
 
are
 
your
 
New
 
Year's
 
resolutions?",
 
      
"Talk
 
about
 
a
 
spontaneous
 
decision
 
you
 
recently
 
made
 
for
 
the
 
future."
 
    
],
 
    
writing:
 
"Write
 
an
 
email
 
(120-150
 
words)
 
to
 
a
 
friend
 
about
 
your
 
upcoming
 
plans
 
for
 
the
 
next
 
few
 
months.
 
Include
 
a
 
mix
 
of
 
fixed
 
arrangements,
 
intentions,
 
and
 
predictions.",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"Look
 
at
 
those
 
dark
 
clouds!
 
It
 
___
 
rain.",
 
        
choices:
 
["will",
 
"is
 
going
 
to",
 
"is
 
raining",
 
"rains"],
 
        
answer:
 
1,
 
        
explanation:
 
"Prediction
 
based
 
on
 
present
 
evidence,
 
so
 
'is
 
going
 
to'
 
is
 
correct.",
 
      
},
 
      
{
 
        
q:
 
"A:
 
The
 
phone
 
is
 
ringing!
 
B:
 
I
 
___
 
get
 
it!",
 
        
choices:
 
["am
 
going
 
to",
 
"will",
 
"am
 
getting",
 
"get"],
 
        
answer:
 
1,
 
        
explanation:
 
"This
 
is
 
a
 
spontaneous
 
decision,
 
so
 
'will'
 
is
 
correct.",
 
      
},
 
      
{
 
        
q:
 
"By
 
2050,
 
most
 
cars
 
___
 
be
 
electric.",
 
        
choices:
 
["are
 
going
 
to",
 
"are",
 
"will",
 
"going
 
to"],
 
        
answer:
 
2,
 
        
explanation:
 
"This
 
is
 
a
 
general
 
prediction
 
about
 
the
 
future,
 
so
 
'will'
 
is
 
appropriate."
 
      
},
 
    
],
 
  
},
 
  
{
 
    
id:
 
7,
 
    
title:
 
"City
 
Life
 
&
 
Environment",
 
    
theme:
 
"teal",
 

    
overview:
 
"Discuss
 
urban
 
living
 
and
 
environmental
 
issues.
 
Use
 
modal
 
verbs
 
to
 
express
 
ability,
 
obligation,
 
permission,
 
and
 
probability.
 
Expand
 
vocabulary
 
related
 
to
 
city
 
amenities,
 
nature,
 
pollution,
 
and
 
conservation
 
efforts.",
 
    
vocabulary:
 
[
 
      
"skyscraper",
 
"subway",
 
"traffic
 
jam",
 
"public
 
transport",
 
      
"pedestrian",
 
"green
 
space",
 
"pollution",
 
"recycling",
 
      
"conservation",
 
"renewable
 
energy",
 
"carbon
 
footprint",
 
"climate
 
change",
 
"waste
 
management",
 
"sustainable
 
living",
 
"urban
 
planning",
 
      
"biodiversity",
 
"ecosystem",
 
"environmental
 
protection",
 
"smog",
 
"noise
 
pollution",
 
"green
 
technology",
 
"public
 
awareness"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"New
 
York
 
City
 
is
 
famous
 
for
 
its
 
towering
 
skyscrapers.",
 
        
"The
 
subway
 
is
 
the
 
fastest
 
way
 
to
 
travel
 
in
 
the
 
city.",
 
        
"Traffic
 
jams
 
are
 
a
 
common
 
problem
 
during
 
rush
 
hour.",
 
        
"We
 
should
 
use
 
public
 
transport
 
more
 
often.",
 
        
"Pedestrians
 
should
 
always
 
use
 
crosswalks.",
 
        
"Many
 
cities
 
are
 
investing
 
in
 
green
 
spaces.",
 
        
"Air
 
pollution
 
is
 
a
 
serious
 
issue
 
in
 
large
 
cities.",
 
        
"Recycling
 
is
 
crucial
 
for
 
environmental
 
protection.",
 
        
"Conservation
 
efforts
 
help
 
protect
 
endangered
 
species.",
 
        
"Solar
 
power
 
is
 
a
 
popular
 
form
 
of
 
renewable
 
energy.",
 
        
"We
 
need
 
to
 
reduce
 
our
 
carbon
 
footprint.",
 
        
"Climate
 
change
 
is
 
a
 
global
 
challenge.",
 
        
"Improving
 
waste
 
management
 
systems
 
is
 
vital.",
 
        
"Sustainable
 
living
 
practices
 
are
 
becoming
 
more
 
popular.",
 
        
"Effective
 
urban
 
planning
 
creates
 
livable
 
cities."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"New
 
York
 
City
 
ist
 
berühmt
 
für
 
seine
 
hoch
 
aufragenden
 
Wolkenkratzer.",
 
        
"Die
 
U-Bahn
 
ist
 
die
 
schnellste
 
Art,
 
in
 
der
 
Stadt
 
zu
 
reisen.",
 
        
"Staus
 
sind
 
ein
 
häufiges
 
Problem
 
während
 
der
 
Hauptverkehrszeit.",
 
        
"Wir
 
sollten
 
öffentliche
 
Verkehrsmittel
 
öfter
 
nutzen.",
 
        
"Fußgänger
 
sollten
 
immer
 
Zebrastreifen
 
benutzen.",
 
        
"Viele
 
Städte
 
investieren
 
in
 
Grünflächen.",
 
        
"Luftverschmutzung
 
ist
 
ein
 
ernstes
 
Problem
 
in
 
Großstädten.",
 
        
"Recycling
 
ist
 
entscheidend
 
für
 
den
 
Umweltschutz.",
 
        
"Naturschutzbemühungen
 
helfen,
 
gefährdete
 
Arten
 
zu
 
schützen.",
 
        
"Solarenergie
 
ist
 
eine
 
beliebte
 
Form
 
erneuerbarer
 
Energie.",
 
        
"Wir
 
müssen
 
unseren
 
CO2-Fußabdruck
 
reduzieren.",
 
        
"Der
 
Klimawandel
 
ist
 
eine
 
globale
 
Herausforderung.",
 
        
"Die
 
Verbesserung
 
der
 
Abfallwirtschaftssysteme
 
ist
 
von
 
entscheidender
 
Bedeutung.",
 
        
"Nachhaltige
 
Lebensweisen
 
werden
 
immer
 
beliebter.",
 

        
"Effektive
 
Stadtplanung
 
schafft
 
lebenswerte
 
Städte."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Modal
 
Verbs
 
(Can,
 
Could,
 
Should,
 
Must,
 
Might)",
 
      
topicDe:
 
"Modalverben
 
(Can,
 
Could,
 
Should,
 
Must,
 
Might)",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"**Can**:
 
ability,
 
possibility,
 
permission
 
(e.g.,
 
'I
 
can
 
speak
 
English.',
 
'It
 
can
 
get
 
cold
 
here.',
 
'Can
 
I
 
help
 
you?').
 
**Could**:
 
past
 
ability,
 
possibility,
 
polite
 
request
 
(e.g.,
 
'I
 
could
 
swim
 
when
 
I
 
was
 
five.',
 
'It
 
could
 
rain
 
later.',
 
'Could
 
you
 
please
 
open
 
the
 
window?').
 
**Should**:
 
advice,
 
recommendation
 
(e.g.,
 
'You
 
should
 
study
 
harder.',
 
'We
 
should
 
leave
 
now.').
 
**Must**:
 
obligation,
 
strong
 
necessity,
 
logical
 
conclusion
 
(e.g.,
 
'You
 
must
 
wear
 
a
 
seatbelt.',
 
'She
 
must
 
be
 
tired.').
 
**Might**:
 
weak
 
possibility
 
(e.g.,
 
'I
 
might
 
go
 
to
 
the
 
party.',
 
'It
 
might
 
be
 
true.').",
 
      
explanationDe:
 
"**Can**:
 
Fähigkeit,
 
Möglichkeit,
 
Erlaubnis
 
(z.B.
 
'Ich
 
kann
 
Englisch
 
sprechen.',
 
'Es
 
kann
 
hier
 
kalt
 
werden.',
 
'Kann
 
ich
 
Ihnen
 
helfen?').
 
**Could**:
 
vergangene
 
Fähigkeit,
 
Möglichkeit,
 
höfliche
 
Bitte
 
(z.B.
 
'Ich
 
konnte
 
schwimmen,
 
als
 
ich
 
fünf
 
war.',
 
'Es
 
könnte
 
später
 
regnen.',
 
'Könnten
 
Sie
 
bitte
 
das
 
Fenster
 
öffnen?').
 
**Should**:
 
Ratschlag,
 
Empfehlung
 
(z.B.
 
'Du
 
solltest
 
härter
 
lernen.',
 
'Wir
 
sollten
 
jetzt
 
gehen.').
 
**Must**:
 
Verpflichtung,
 
starke
 
Notwendigkeit,
 
logische
 
Schlussfolgerung
 
(z.B.
 
'Sie
 
müssen
 
einen
 
Sicherheitsgurt
 
anlegen.',
 
'Sie
 
muss
 
müde
 
sein.').
 
**Might**:
 
schwache
 
Möglichkeit
 
(z.B.
 
'Ich
 
könnte
 
zur
 
Party
 
gehen.',
 
'Es
 
könnte
 
wahr
 
sein.').",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"You
 
should
 
visit
 
Berlin.",
 
de:
 
"Du
 
solltest
 
Berlin
 
besuchen."
 
},
 
        
{
 
en:
 
"I
 
can
 
speak
 
three
 
languages.",
 
de:
 
"Ich
 
kann
 
drei
 
Sprachen
 
sprechen."
 
},
 
        
{
 
en:
 
"It
 
might
 
snow
 
tomorrow.",
 
de:
 
"Es
 
könnte
 
morgen
 
schneien."
 
},
 
        
{
 
en:
 
"Children
 
must
 
not
 
play
 
with
 
matches.",
 
de:
 
"Kinder
 
dürfen
 
nicht
 
mit
 
Streichhölzern
 
spielen."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"Sustainable
 
Cities
 
of
 
the
 
Future",
 
      
text:
 
"As
 
urban
 
populations
 
grow,
 
cities
 
must
 
find
 
sustainable
 
solutions.
 
They
 
should
 
invest
 
more
 
in
 
public
 
transport
 
and
 
encourage
 
cycling
 
to
 
reduce
 
traffic
 
and
 
emissions.
 
Citizens
 
can
 
help
 
by
 
recycling
 
more
 
and
 
consuming
 
less.
 
New
 
buildings
 
could
 
incorporate
 
green
 
roofs
 
and
 
solar
 
panels
 
to
 
improve
 
air
 
quality
 
and
 
generate
 
renewable
 
energy.
 
Governments
 
might
 
also
 
implement
 
stricter
 
regulations
 
on
 
industrial
 
pollution.
 
We
 
must
 
all
 
work
 
together
 
to
 
create
 
a
 
greener,
 
healthier
 
environment
 
for
 
future
 
generations.
 
While
 
it
 
might
 
seem
 
challenging,
 
it's
 
essential
 
for
 
our
 
planet's
 
well-being.",
 
      
task:
 
"Identify
 
all
 
modal
 
verbs
 
and
 
their
 
function
 
(ability,
 
obligation,
 
possibility,
 
etc.).
 
What
 
are
 
cities'
 
responsibilities
 
according
 
to
 
the
 
text?
 
What
 
can
 
citizens
 
do?
 
What
 
future
 
solutions
 
are
 
suggested?",
 
    
},
 
    
speaking:
 
[
 
      
"Discuss
 
the
 
pros
 
and
 
cons
 
of
 
living
 
in
 
a
 
big
 
city.",
 

      
"What
 
are
 
the
 
biggest
 
environmental
 
challenges
 
facing
 
your
 
country?",
 
      
"What
 
can
 
individuals
 
do
 
to
 
reduce
 
their
 
carbon
 
footprint?",
 
      
"Talk
 
about
 
your
 
ideal
 
city.",
 
      
"Discuss
 
the
 
importance
 
of
 
public
 
transport
 
in
 
urban
 
areas."
 
    
],
 
    
writing:
 
"Write
 
a
 
short
 
essay
 
(120-150
 
words)
 
about
 
how
 
technology
 
can
 
help
 
create
 
more
 
sustainable
 
cities.
 
Include
 
specific
 
examples
 
of
 
smart
 
technologies
 
or
 
green
 
innovations.",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"You
 
___
 
stop
 
at
 
a
 
red
 
light.",
 
        
choices:
 
["should",
 
"can",
 
"must",
 
"might"],
 
        
answer:
 
2,
 
        
explanation:
 
"'Must'
 
indicates
 
a
 
strong
 
obligation
 
or
 
necessity.",
 
      
},
 
      
{
 
        
q:
 
"I
 
___
 
swim
 
when
 
I
 
was
 
five
 
years
 
old.",
 
        
choices:
 
["can",
 
"could",
 
"should",
 
"must"],
 
        
answer:
 
1,
 
        
explanation:
 
"'Could'
 
expresses
 
past
 
ability.",
 
      
},
 
      
{
 
        
q:
 
"She's
 
late.
 
She
 
___
 
have
 
missed
 
her
 
train.",
 
        
choices:
 
["should",
 
"can",
 
"must",
 
"might"],
 
        
answer:
 
2,
 
        
explanation:
 
"'Must'
 
is
 
used
 
for
 
a
 
logical
 
conclusion
 
or
 
high
 
certainty.",
 
      
},
 
      
{
 
        
q:
 
"It's
 
a
 
beautiful
 
day,
 
we
 
___
 
go
 
for
 
a
 
walk.",
 
        
choices:
 
["must",
 
"can",
 
"should",
 
"might"],
 
        
answer:
 
2,
 
        
explanation:
 
"'Should'
 
is
 
used
 
to
 
give
 
advice
 
or
 
make
 
a
 
suggestion."
 
      
}
 
    
],
 
  
},
 
  
{
 
    
id:
 
8,
 
    
title:
 
"Hobbies
 
&
 
Free
 
Time",
 
    
theme:
 
"fuchsia",
 
    
overview:
 
"Discuss
 
leisure
 
activities,
 
sports,
 
and
 
cultural
 
events.
 
Practice
 
using
 
gerunds
 
and
 
infinitives
 
correctly.
 
Expand
 
vocabulary
 
related
 
to
 
various
 
hobbies,
 
entertainment,
 
and
 
personal
 
interests.
 
Share
 
experiences
 
and
 
preferences.",
 
    
vocabulary:
 
[
 
      
"hobby",
 
"leisure",
 
"pastime",
 
"interest",
 
"enjoy",
 
"prefer",
 
      
"collecting",
 
"gardening",
 
"hiking",
 
"cycling",
 
"photography",
 
"painting",
 

      
"drawing",
 
"reading",
 
"writing",
 
"playing
 
music",
 
"cooking",
 
"baking",
 
      
"volunteering",
 
"exercising",
 
"meditation",
 
"gaming",
 
"watching
 
movies",
 
"listening
 
to
 
music",
 
"socializing",
 
"traveling",
 
"crafts",
 
"DIY"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"My
 
favorite
 
hobby
 
is
 
collecting
 
stamps.",
 
        
"I
 
enjoy
 
hiking
 
in
 
the
 
mountains.",
 
        
"Do
 
you
 
prefer
 
reading
 
books
 
or
 
watching
 
movies?",
 
        
"She
 
is
 
passionate
 
about
 
photography.",
 
        
"They
 
often
 
go
 
to
 
concerts
 
on
 
weekends.",
 
        
"Volunteering
 
can
 
be
 
a
 
rewarding
 
pastime.",
 
        
"A
 
new
 
hobby
 
can
 
contribute
 
to
 
your
 
overall
 
well-being.",
 
        
"Mindfulness
 
exercises
 
help
 
me
 
relax.",
 
        
"Attending
 
a
 
music
 
festival
 
is
 
a
 
great
 
way
 
to
 
spend
 
free
 
time.",
 
        
"He
 
likes
 
to
 
**tinker**
 
with
 
old
 
electronics
 
in
 
his
 
spare
 
time."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Mein
 
liebstes
 
Hobby
 
ist
 
das
 
Sammeln
 
von
 
Briefmarken.",
 
        
"Ich
 
genieße
 
es,
 
in
 
den
 
Bergen
 
zu
 
wandern.",
 
        
"Bevorzugst
 
du
 
das
 
Lesen
 
von
 
Büchern
 
oder
 
das
 
Ansehen
 
von
 
Filmen?",
 
        
"Sie
 
ist
 
leidenschaftlich
 
gern
 
Fotografin.",
 
        
"Sie
 
gehen
 
am
 
Wochenende
 
oft
 
zu
 
Konzerten.",
 
        
"Freiwilligenarbeit
 
kann
 
ein
 
lohnender
 
Zeitvertreib
 
sein.",
 
        
"Ein
 
neues
 
Hobby
 
kann
 
zu
 
deinem
 
allgemeinen
 
Wohlbefinden
 
beitragen.",
 
        
"Achtsamkeitsübungen
 
helfen
 
mir
 
zu
 
entspannen.",
 
        
"Ein
 
Musikfestival
 
zu
 
besuchen
 
ist
 
eine
 
großartige
 
Möglichkeit,
 
die
 
Freizeit
 
zu
 
verbringen.",
 
        
"Er
 
verbringt
 
seine
 
Freizeit
 
gerne
 
damit,
 
an
 
alter
 
Elektronik
 
zu
 
**basteln**."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Gerunds
 
(-ing)
 
&
 
Infinitives
 
(to
 
+
 
verb)",
 
      
topicDe:
 
"Gerundien
 
(-ing)
 
&
 
Infinitive
 
(to
 
+
 
Verb)",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"**Gerunds
 
(-ing
 
form)**
 
are
 
used
 
after
 
prepositions,
 
certain
 
verbs
 
(e.g.,
 
enjoy,
 
finish,
 
mind,
 
avoid),
 
and
 
as
 
the
 
subject
 
of
 
a
 
sentence
 
(e.g.,
 
'Swimming
 
is
 
fun.').
 
**Infinitives
 
(to
 
+
 
verb)**
 
are
 
used
 
after
 
certain
 
verbs
 
(e.g.,
 
want,
 
decide,
 
agree,
 
hope),
 
after
 
adjectives,
 
and
 
to
 
express
 
purpose
 
(e.g.,
 
'I
 
want
 
to
 
learn
 
English.').
 
Some
 
verbs
 
can
 
be
 
followed
 
by
 
both
 
with
 
a
 
change
 
in
 
meaning
 
(e.g.,
 
'stop').",
 
      
explanationDe:
 
"**Gerundien
 
(-ing-Form)**
 
werden
 
nach
 
Präpositionen,
 
bestimmten
 
Verben
 
(z.B.
 
enjoy,
 
finish,
 
mind,
 
avoid)
 
und
 
als
 
Subjekt
 
eines
 
Satzes
 
verwendet
 
(z.B.
 
'Schwimmen
 
macht
 
Spaß.').
 
**Infinitive
 
(to
 
+
 
Verb)**
 
werden
 
nach
 
bestimmten
 
Verben
 
(z.B.
 
want,
 
decide,
 
agree,
 
hope),
 
nach
 
Adjektiven
 
und
 
zur
 
Angabe
 
eines
 
Zwecks
 
verwendet
 
(z.B.
 
'Ich
 
möchte
 
Englisch
 
lernen.').
 
Einige
 
Verben
 
können
 
sowohl
 
mit
 
Gerundium
 
als
 
auch
 
mit
 
Infinitiv
 
verwendet
 
werden,
 
wobei
 
sich
 
die
 
Bedeutung
 
ändert
 
(z.B.
 
'stop').",
 
//
 
German,
 
needs
 
Amharic
 
translation
 

      
examples:
 
[
 
        
{
 
en:
 
"I
 
enjoy
 
reading
 
books.",
 
de:
 
"Ich
 
lese
 
gerne
 
Bücher."
 
},
 
        
{
 
en:
 
"She
 
decided
 
to
 
study
 
abroad.",
 
de:
 
"Sie
 
hat
 
beschlossen,
 
im
 
Ausland
 
zu
 
studieren."
 
},
 
        
{
 
en:
 
"He
 
stopped
 
smoking
 
last
 
year.",
 
de:
 
"Er
 
hat
 
letztes
 
Jahr
 
mit
 
dem
 
Rauchen
 
aufgehört."
 
},
 
        
{
 
en:
 
"It's
 
important
 
to
 
listen
 
carefully.",
 
de:
 
"Es
 
ist
 
wichtig,
 
genau
 
zuzuhören."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"The
 
Benefits
 
of
 
Hobbies",
 
      
text:
 
"Having
 
hobbies
 
is
 
crucial
 
for
 
mental
 
well-being.
 
Whether
 
you
 
enjoy
 
reading,
 
painting,
 
or
 
going
 
for
 
long
 
walks,
 
engaging
 
in
 
leisure
 
activities
 
helps
 
to
 
reduce
 
stress
 
and
 
improve
 
creativity.
 
Many
 
people
 
find
 
learning
 
a
 
new
 
skill,
 
like
 
playing
 
a
 
musical
 
instrument
 
or
 
coding,
 
incredibly
 
rewarding.
 
It's
 
also
 
a
 
great
 
way
 
to
 
meet
 
new
 
people
 
and
 
expand
 
your
 
social
 
circle.
 
For
 
example,
 
joining
 
a
 
hiking
 
club
 
allows
 
you
 
to
 
combine
 
exercising
 
with
 
exploring
 
nature
 
and
 
socializing.
 
While
 
some
 
people
 
prefer
 
spending
 
their
 
free
 
time
 
watching
 
TV,
 
trying
 
to
 
find
 
an
 
active
 
pastime
 
can
 
offer
 
more
 
long-term
 
benefits.
 
Don't
 
forget
 
to
 
prioritize
 
doing
 
what
 
you
 
love.",
 
      
task:
 
"Identify
 
examples
 
of
 
gerunds
 
and
 
infinitives
 
in
 
the
 
text.
 
What
 
are
 
the
 
benefits
 
of
 
having
 
hobbies?
 
How
 
can
 
hobbies
 
help
 
you
 
meet
 
new
 
people?
 
What
 
advice
 
is
 
given
 
regarding
 
free
 
time?",
 
    
},
 
    
speaking:
 
[
 
      
"Describe
 
your
 
favorite
 
hobby
 
and
 
why
 
you
 
enjoy
 
it.",
 
      
"Talk
 
about
 
a
 
new
 
skill
 
you'd
 
like
 
to
 
learn.",
 
      
"Discuss
 
the
 
importance
 
of
 
work-life
 
balance.",
 
      
"What
 
are
 
some
 
popular
 
free
 
time
 
activities
 
in
 
your
 
country?",
 
      
"Compare
 
two
 
different
 
hobbies
 
and
 
explain
 
their
 
pros
 
and
 
cons."
 
    
],
 
    
writing:
 
"Write
 
a
 
blog
 
post
 
(120-150
 
words)
 
about
 
how
 
hobbies
 
can
 
improve
 
your
 
quality
 
of
 
life.
 
Include
 
specific
 
examples
 
of
 
hobbies
 
and
 
their
 
benefits,
 
using
 
both
 
gerunds
 
and
 
infinitives.",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"She
 
loves
 
___
 
(dance).",
 
        
choices:
 
["to
 
dance",
 
"dancing",
 
"dances",
 
"danced"],
 
        
answer:
 
1,
 
        
explanation:
 
"The
 
verb
 
'love'
 
can
 
be
 
followed
 
by
 
a
 
gerund
 
or
 
an
 
infinitive,
 
but
 
'dancing'
 
sounds
 
more
 
natural
 
here.",
 
      
},
 
      
{
 
        
q:
 
"He
 
decided
 
___
 
(study)
 
abroad.",
 
        
choices:
 
["studying",
 
"to
 
study",
 
"study",
 
"studied"],
 
        
answer:
 
1,
 
        
explanation:
 
"The
 
verb
 
'decide'
 
is
 
followed
 
by
 
an
 
infinitive.",
 
      
},
 

      
{
 
        
q:
 
"___
 
(swim)
 
in
 
the
 
sea
 
is
 
very
 
relaxing.",
 
        
choices:
 
["Swim",
 
"To
 
swim",
 
"Swimming",
 
"Swam"],
 
        
answer:
 
2,
 
        
explanation:
 
"When
 
a
 
verb
 
acts
 
as
 
the
 
subject
 
of
 
a
 
sentence,
 
it
 
usually
 
takes
 
the
 
gerund
 
form.",
 
      
},
 
      
{
 
        
q:
 
"I
 
came
 
here
 
___
 
(learn)
 
English.",
 
        
choices:
 
["learning",
 
"to
 
learn",
 
"learn",
 
"learned"],
 
        
answer:
 
1,
 
        
explanation:
 
"To
 
express
 
purpose,
 
use
 
the
 
infinitive
 
(to
 
+
 
verb)."
 
      
}
 
    
],
 
  
},
 
  
{
 
    
id:
 
9,
 
    
title:
 
"Technology
 
&
 
Communication",
 
    
theme:
 
"lime",
 
    
overview:
 
"Explore
 
the
 
impact
 
of
 
technology
 
on
 
communication
 
and
 
daily
 
life.
 
Understand
 
and
 
apply
 
the
 
Passive
 
Voice.
 
Discuss
 
digital
 
devices,
 
social
 
media,
 
online
 
security,
 
and
 
future
 
technological
 
trends.
 
Debate
 
the
 
pros
 
and
 
cons
 
of
 
modern
 
tech.",
 
    
vocabulary:
 
[
 
      
"smartphone",
 
"laptop",
 
"tablet",
 
"app",
 
"software",
 
"hardware",
 
      
"internet",
 
"wifi",
 
"network",
 
"cybersecurity",
 
"data
 
privacy",
 
"cloud
 
computing",
 
"artificial
 
intelligence",
 
"virtual
 
reality",
 
"augmented
 
reality",
 
"social
 
media",
 
"video
 
call",
 
"email",
 
"messaging
 
app",
 
"website",
 
"online
 
platform",
 
"digital
 
nomad",
 
"user
 
interface",
 
"upload",
 
"download",
 
"stream"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"My
 
new
 
smartphone
 
has
 
many
 
useful
 
apps.",
 
        
"Keep
 
your
 
software
 
updated
 
for
 
better
 
cybersecurity.",
 
        
"Social
 
media
 
has
 
changed
 
how
 
we
 
communicate.",
 
        
"I
 
had
 
a
 
video
 
call
 
with
 
my
 
family
 
yesterday.",
 
        
"Data
 
privacy
 
is
 
a
 
big
 
concern.",
 
        
"Artificial
 
intelligence
 
is
 
transforming
 
many
 
industries.",
 
        
"Are
 
you
 
familiar
 
with
 
this
 
online
 
platform?",
 
        
"A
 
good
 
internet
 
connection
 
is
 
essential
 
for
 
remote
 
work.",
 
        
"The
 
user
 
interface
 
of
 
this
 
new
 
app
 
is
 
very
 
intuitive.",
 
        
"Many
 
digital
 
nomads
 
work
 
while
 
traveling
 
the
 
world."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Mein
 
neues
 
Smartphone
 
hat
 
viele
 
nützliche
 
Apps.",
 

        
"Halten
 
Sie
 
Ihre
 
Software
 
für
 
bessere
 
Cybersicherheit
 
auf
 
dem
 
neuesten
 
Stand.",
 
        
"Soziale
 
Medien
 
haben
 
unsere
 
Kommunikation
 
verändert.",
 
        
"Ich
 
hatte
 
gestern
 
einen
 
Videoanruf
 
mit
 
meiner
 
Familie.",
 
        
"Datenschutz
 
ist
 
ein
 
großes
 
Anliegen.",
 
        
"Künstliche
 
Intelligenz
 
verändert
 
viele
 
Branchen.",
 
        
"Sind
 
Sie
 
mit
 
dieser
 
Online-Plattform
 
vertraut?",
 
        
"Eine
 
gute
 
Internetverbindung
 
ist
 
für
 
die
 
Remote-Arbeit
 
unerlässlich.",
 
        
"Die
 
Benutzeroberfläche
 
dieser
 
neuen
 
App
 
ist
 
sehr
 
intuitiv.",
 
        
"Viele
 
digitale
 
Nomaden
 
arbeiten,
 
während
 
sie
 
um
 
die
 
Welt
 
reisen."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Passive
 
Voice",
 
      
topicDe:
 
"Passiv
 
(Leideform)",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"The
 
**Passive
 
Voice**
 
is
 
used
 
when
 
the
 
focus
 
is
 
on
 
the
 
action
 
rather
 
than
 
the
 
performer
 
of
 
the
 
action,
 
or
 
when
 
the
 
performer
 
is
 
unknown
 
or
 
unimportant.
 
Form:
 
be
 
(is/are/was/were/been)
 
+
 
past
 
participle
 
(e.g.,
 
'The
 
car
 
was
 
repaired.',
 
'English
 
is
 
spoken
 
worldwide.').
 
It
 
is
 
often
 
used
 
in
 
formal
 
writing,
 
news
 
reports,
 
and
 
scientific
 
descriptions.",
 
      
explanationDe:
 
"Das
 
**Passiv**
 
wird
 
verwendet,
 
wenn
 
der
 
Fokus
 
auf
 
der
 
Handlung
 
und
 
nicht
 
auf
 
dem
 
Ausführenden
 
der
 
Handlung
 
liegt,
 
oder
 
wenn
 
der
 
Ausführende
 
unbekannt
 
oder
 
unwichtig
 
ist.
 
Bildung:
 
be
 
(is/are/was/were/been)
 
+
 
Partizip
 
II
 
(z.B.
 
'Das
 
Auto
 
wurde
 
repariert.',
 
'Englisch
 
wird
 
weltweit
 
gesprochen.').
 
Es
 
wird
 
oft
 
in
 
formellen
 
Texten,
 
Nachrichtenberichten
 
und
 
wissenschaftlichen
 
Beschreibungen
 
verwendet.",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"The
 
letter
 
was
 
written
 
by
 
John.",
 
de:
 
"Der
 
Brief
 
wurde
 
von
 
John
 
geschrieben."
 
},
 
        
{
 
en:
 
"English
 
is
 
spoken
 
in
 
many
 
countries.",
 
de:
 
"Englisch
 
wird
 
in
 
vielen
 
Ländern
 
gesprochen."
 
},
 
        
{
 
en:
 
"The
 
decision
 
has
 
been
 
made.",
 
de:
 
"Die
 
Entscheidung
 
wurde
 
getroffen."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"The
 
Rise
 
of
 
AI
 
in
 
Everyday
 
Life",
 
      
text:
 
"Artificial
 
intelligence
 
is
 
rapidly
 
changing
 
our
 
world.
 
Many
 
daily
 
tasks
 
are
 
now
 
performed
 
by
 
AI-powered
 
systems.
 
For
 
example,
 
customer
 
service
 
queries
 
are
 
often
 
handled
 
by
 
chatbots,
 
and
 
personalized
 
recommendations
 
are
 
provided
 
by
 
complex
 
algorithms.
 
New
 
applications
 
are
 
constantly
 
being
 
developed.
 
Concerns
 
about
 
data
 
privacy
 
are
 
being
 
raised,
 
and
 
discussions
 
about
 
the
 
ethical
 
implications
 
of
 
AI
 
are
 
held
 
globally.
 
However,
 
the
 
benefits,
 
such
 
as
 
increased
 
efficiency
 
and
 
innovation,
 
are
 
widely
 
acknowledged.
 
The
 
future
 
will
 
be
 
shaped
 
by
 
how
 
these
 
technologies
 
are
 
managed
 
and
 
integrated
 
into
 
society.
 
Significant
 
investments
 
are
 
being
 
made
 
in
 
AI
 
research
 
by
 
leading
 
tech
 
companies.",
 
      
task:
 
"Identify
 
all
 
instances
 
of
 
the
 
Passive
 
Voice
 
in
 
the
 
text.
 
Who
 
or
 
what
 
is
 
performing
 
the
 
actions
 
in
 
the
 
active
 
equivalent?
 
What
 
are
 
the
 
main
 
benefits
 
and
 
concerns
 
related
 
to
 
AI
 
mentioned
 
in
 
the
 
text?",
 
    
},
 

    
speaking:
 
[
 
      
"Discuss
 
the
 
impact
 
of
 
social
 
media
 
on
 
communication.",
 
      
"What
 
are
 
the
 
most
 
important
 
cybersecurity
 
tips?",
 
      
"Talk
 
about
 
a
 
technological
 
advancement
 
that
 
excites
 
you.",
 
      
"What
 
are
 
the
 
pros
 
and
 
cons
 
of
 
artificial
 
intelligence?",
 
      
"Describe
 
how
 
technology
 
has
 
changed
 
your
 
daily
 
routine."
 
    
],
 
    
writing:
 
"Write
 
a
 
short
 
article
 
(120-150
 
words)
 
for
 
a
 
tech
 
blog
 
about
 
the
 
future
 
of
 
a
 
specific
 
technology
 
(e.g.,
 
AI,
 
VR,
 
smart
 
homes).
 
Use
 
at
 
least
 
three
 
sentences
 
in
 
the
 
passive
 
voice.",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"The
 
bridge
 
___
 
(build)
 
last
 
year.",
 
        
choices:
 
["built",
 
"was
 
built",
 
"is
 
built",
 
"building"],
 
        
answer:
 
1,
 
        
explanation:
 
"Past
 
Simple
 
Passive:
 
'was'
 
+
 
past
 
participle
 
'built'.",
 
      
},
 
      
{
 
        
q:
 
"English
 
___
 
(speak)
 
all
 
over
 
the
 
world.",
 
        
choices:
 
["speaks",
 
"is
 
spoken",
 
"is
 
speaking",
 
"spoke"],
 
        
answer:
 
1,
 
        
explanation:
 
"Present
 
Simple
 
Passive:
 
'is'
 
+
 
past
 
participle
 
'spoken'.",
 
      
},
 
      
{
 
        
q:
 
"The
 
problem
 
___
 
(solve)
 
by
 
the
 
team.",
 
        
choices:
 
["was
 
solve",
 
"is
 
solving",
 
"has
 
been
 
solved",
 
"solved"],
 
        
answer:
 
2,
 
        
explanation:
 
"Present
 
Perfect
 
Passive:
 
'has
 
been'
 
+
 
past
 
participle
 
'solved'.",
 
      
},
 
      
{
 
        
q:
 
"Children
 
___
 
(teach)
 
how
 
to
 
read
 
at
 
school.",
 
        
choices:
 
["teach",
 
"are
 
teaching",
 
"are
 
taught",
 
"taught"],
 
        
answer:
 
2,
 
        
explanation:
 
"Present
 
Simple
 
Passive:
 
'are'
 
+
 
past
 
participle
 
'taught'."
 
      
}
 
    
],
 
  
},
 
  
{
 
    
id:
 
10,
 
    
title:
 
"Shopping
 
&
 
Services",
 
    
theme:
 
"cyan",
 
    
overview:
 
"Practice
 
shopping
 
scenarios
 
and
 
talk
 
about
 
various
 
services.
 
Understand
 
and
 
use
 
Conditionals
 
(Type
 
0
 
and
 
1).
 
Expand
 
vocabulary
 
related
 
to
 
retail,
 
customer
 
service,
 
payments,
 
and
 
different
 
types
 
of
 
services.
 
Learn
 
to
 
express
 
consequences
 
and
 
possibilities.",
 
    
vocabulary:
 
[
 

      
"discount",
 
"receipt",
 
"refund",
 
"exchange",
 
"warranty",
 
"cash",
 
      
"credit
 
card",
 
"debit
 
card",
 
"online
 
shopping",
 
"customer
 
service",
 
"delivery",
 
"loyalty
 
program",
 
"bargain",
 
"sale",
 
"try
 
on",
 
"fit",
 
"size",
 
"queue",
 
"complaint",
 
"service
 
provider",
 
"appointment",
 
"booking",
 
"reservation",
 
"feedback",
 
"tip",
 
"return
 
policy",
 
"impulse
 
buy"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"I'd
 
like
 
a
 
refund
 
for
 
this
 
item.",
 
        
"Keep
 
your
 
receipt
 
as
 
proof
 
of
 
purchase.",
 
        
"Is
 
there
 
a
 
discount
 
on
 
this
 
product?",
 
        
"The
 
customer
 
service
 
was
 
excellent.",
 
        
"What's
 
your
 
return
 
policy?",
 
        
"I
 
need
 
to
 
go
 
to
 
the
 
post
 
office
 
to
 
send
 
a
 
package.",
 
        
"She
 
got
 
a
 
real
 
bargain
 
in
 
the
 
sale.",
 
        
"Online
 
shopping
 
offers
 
great
 
convenience.",
 
        
"Are
 
you
 
part
 
of
 
our
 
loyalty
 
program?",
 
        
"Avoid
 
making
 
**impulse
 
buys**
 
if
 
you're
 
on
 
a
 
budget."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Ich
 
möchte
 
eine
 
Rückerstattung
 
für
 
diesen
 
Artikel
 
erhalten.",
 
        
"Behalten
 
Sie
 
Ihren
 
Kassenbon
 
als
 
Kaufbeleg.",
 
        
"Gibt
 
es
 
einen
 
Rabatt
 
auf
 
dieses
 
Produkt?",
 
        
"Der
 
Kundenservice
 
war
 
ausgezeichnet.",
 
        
"Wie
 
ist
 
Ihre
 
Rückgaberichtlinie?",
 
        
"Ich
 
muss
 
zur
 
Post,
 
um
 
ein
 
Paket
 
zu
 
verschicken.",
 
        
"Sie
 
hat
 
im
 
Ausverkauf
 
ein
 
echtes
 
Schnäppchen
 
gemacht.",
 
        
"Online-Shopping
 
bietet
 
großen
 
Komfort.",
 
        
"Sind
 
Sie
 
Teil
 
unseres
 
Treueprogramms?",
 
        
"Vermeiden
 
Sie
 
**Impulskäufe**,
 
wenn
 
Sie
 
ein
 
begrenztes
 
Budget
 
haben."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Conditionals
 
(Type
 
0,
 
1)",
 
      
topicDe:
 
"Konditionalsätze
 
(Typ
 
0,
 
1)",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"**Type
 
0
 
Conditional
 
(General
 
Truths/Facts):**
 
If
 
+
 
Present
 
Simple,
 
Present
 
Simple.
 
Used
 
for
 
things
 
that
 
are
 
always
 
true
 
(e.g.,
 
'If
 
you
 
heat
 
ice,
 
it
 
melts.').
 
**Type
 
1
 
Conditional
 
(Real
 
Possibility):**
 
If
 
+
 
Present
 
Simple,
 
Will
 
+
 
base
 
verb.
 
Used
 
for
 
a
 
real
 
possibility
 
in
 
the
 
present
 
or
 
future
 
(e.g.,
 
'If
 
it
 
rains,
 
I
 
will
 
stay
 
home.').
 
These
 
conditionals
 
are
 
important
 
for
 
discussing
 
cause
 
and
 
effect.",
 
      
explanationDe:
 
"**Typ
 
0
 
Konditionalsatz
 
(Allgemeine
 
Wahrheiten/Fakten):**
 
If
 
+
 
Simple
 
Present,
 
Simple
 
Present.
 
Wird
 
für
 
Dinge
 
verwendet,
 
die
 
immer
 
wahr
 
sind
 
(z.B.
 
'Wenn
 
man
 
Eis
 
erhitzt,
 
schmilzt
 
es.').
 
**Typ
 
1
 
Konditionalsatz
 
(Reale
 
Möglichkeit):**
 
If
 
+
 
Simple
 
Present,
 
Will
 
+
 
Grundform
 
des
 
Verbs.
 
Wird
 
für
 
eine
 
reale
 
Möglichkeit
 
in
 
der
 
Gegenwart
 
oder
 
Zukunft
 
verwendet
 

(z.B.
 
'Wenn
 
es
 
regnet,
 
bleibe
 
ich
 
zu
 
Hause.').
 
Diese
 
Konditionalsätze
 
sind
 
wichtig,
 
um
 
Ursache
 
und
 
Wirkung
 
zu
 
besprechen.",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"If
 
you
 
heat
 
water
 
to
 
$100^{\circ}C$,
 
it
 
boils.",
 
de:
 
"Wenn
 
man
 
Wasser
 
auf
 
100°C
 
erhitzt,
 
kocht
 
es."
 
},
 
        
{
 
en:
 
"If
 
I
 
study
 
hard,
 
I
 
will
 
pass
 
the
 
exam.",
 
de:
 
"Wenn
 
ich
 
fleißig
 
lerne,
 
werde
 
ich
 
die
 
Prüfung
 
bestehen."
 
},
 
        
{
 
en:
 
"If
 
you
 
don't
 
eat,
 
you
 
get
 
hungry.",
 
de:
 
"Wenn
 
du
 
nicht
 
isst,
 
bekommst
 
du
 
Hunger."
 
},
 
        
{
 
en:
 
"If
 
she
 
calls,
 
I
 
will
 
tell
 
her
 
the
 
news.",
 
de:
 
"Wenn
 
sie
 
anruft,
 
werde
 
ich
 
ihr
 
die
 
Neuigkeiten
 
erzählen."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"Shopping
 
Habits
 
Survey",
 
      
text:
 
"A
 
recent
 
survey
 
asked
 
people
 
about
 
their
 
shopping
 
habits.
 
If
 
consumers
 
find
 
a
 
good
 
discount,
 
they
 
usually
 
buy
 
more
 
items.
 
If
 
a
 
product
 
has
 
a
 
good
 
warranty,
 
customers
 
will
 
feel
 
more
 
confident
 
buying
 
it.
 
Many
 
people
 
stated
 
that
 
if
 
they
 
encounter
 
bad
 
customer
 
service,
 
they
 
will
 
not
 
return
 
to
 
that
 
store.
 
If
 
stores
 
offer
 
loyalty
 
programs,
 
shoppers
 
tend
 
to
 
spend
 
more
 
over
 
time.
 
The
 
survey
 
also
 
showed
 
that
 
if
 
the
 
delivery
 
is
 
fast,
 
online
 
shoppers
 
are
 
more
 
satisfied.
 
If
 
businesses
 
prioritize
 
customer
 
satisfaction,
 
they
 
will
 
build
 
a
 
stronger
 
brand
 
reputation.
 
If
 
you
 
want
 
to
 
increase
 
sales,
 
focus
 
on
 
quality
 
and
 
service.",
 
      
task:
 
"Identify
 
examples
 
of
 
Type
 
0
 
and
 
Type
 
1
 
conditionals.
 
Explain
 
the
 
difference
 
in
 
their
 
usage
 
based
 
on
 
the
 
text.
 
What
 
factors
 
influence
 
consumer
 
buying
 
behavior?
 
What
 
advice
 
is
 
given
 
to
 
businesses?",
 
    
},
 
    
speaking:
 
[
 
      
"Roleplay:
 
making
 
a
 
complaint
 
about
 
a
 
faulty
 
product.",
 
      
"Discuss
 
your
 
favorite
 
type
 
of
 
shopping
 
(online,
 
in-store,
 
etc.)
 
and
 
why.",
 
      
"What
 
makes
 
good
 
customer
 
service?",
 
      
"Talk
 
about
 
a
 
memorable
 
shopping
 
experience
 
(good
 
or
 
bad).",
 
      
"If
 
you
 
had
 
unlimited
 
money,
 
what
 
would
 
you
 
buy?"
 
    
],
 
    
writing:
 
"Write
 
a
 
short
 
guide
 
(100-120
 
words)
 
for
 
new
 
online
 
shoppers,
 
including
 
tips
 
on
 
how
 
to
 
find
 
good
 
deals
 
and
 
avoid
 
common
 
pitfalls.
 
Use
 
at
 
least
 
two
 
Type
 
0
 
and
 
two
 
Type
 
1
 
conditionals.",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"If
 
it
 
___
 
(rain)
 
tomorrow,
 
we
 
___
 
(stay)
 
home.",
 
        
choices:
 
["rains
 
/
 
will
 
stay",
 
"will
 
rain
 
/
 
stay",
 
"rained
 
/
 
would
 
stay",
 
"is
 
raining
 
/
 
stay"],
 
        
answer:
 
0,
 
        
explanation:
 
"Type
 
1
 
Conditional:
 
'rains'
 
(Present
 
Simple)
 
for
 
the
 
condition,
 
'will
 
stay'
 
(Future
 
Simple)
 
for
 
the
 
result.",
 
      
},
 
      
{
 

        
q:
 
"If
 
I
 
___
 
(get)
 
a
 
promotion,
 
I
 
___
 
(buy)
 
a
 
new
 
car.",
 
        
choices:
 
["get
 
/
 
will
 
buy",
 
"will
 
get
 
/
 
buy",
 
"get
 
/
 
buy",
 
"got
 
/
 
would
 
buy"],
 
        
answer:
 
0,
 
        
explanation:
 
"Type
 
1
 
Conditional:
 
'get'
 
(Present
 
Simple)
 
for
 
the
 
condition,
 
'will
 
buy'
 
(Future
 
Simple)
 
for
 
the
 
result.",
 
      
},
 
      
{
 
        
q:
 
"If
 
you
 
___
 
(not
 
water)
 
plants,
 
they
 
___
 
(die).",
 
        
choices:
 
["don't
 
water
 
/
 
die",
 
"won't
 
water
 
/
 
will
 
die",
 
"didn't
 
water
 
/
 
died",
 
"not
 
water
 
/
 
die"],
 
        
answer:
 
0,
 
        
explanation:
 
"Type
 
0
 
Conditional
 
for
 
general
 
truths:
 
'don't
 
water'
 
(Present
 
Simple
 
negative),
 
'die'
 
(Present
 
Simple)."
 
      
}
 
    
],
 
  
},
 
  
{
 
    
id:
 
11,
 
    
title:
 
"Relationships
 
&
 
Feelings",
 
    
theme:
 
"orange",
 
    
overview:
 
"Discuss
 
different
 
types
 
of
 
relationships
 
and
 
express
 
emotions.
 
Learn
 
about
 
Relative
 
Clauses
 
to
 
add
 
detail.
 
Expand
 
vocabulary
 
related
 
to
 
family,
 
friends,
 
colleagues,
 
emotional
 
states,
 
and
 
social
 
interactions.
 
Talk
 
about
 
building
 
and
 
maintaining
 
healthy
 
relationships.",
 
    
vocabulary:
 
[
 
      
"trust",
 
"support",
 
"communication",
 
"empathy",
 
"conflict",
 
"argument",
 
      
"reconcile",
 
"friendship",
 
"colleague",
 
"partner",
 
"acquaintance",
 
"stranger",
 
      
"emotions",
 
"happiness",
 
"sadness",
 
"anger",
 
"fear",
 
"surprise",
 
"disgust",
 
"joy",
 
"grief",
 
"anxiety",
 
"excitement",
 
"frustration",
 
"comfort",
 
"vulnerability",
 
"mutual
 
respect",
 
"bond",
 
"rely
 
on",
 
"get
 
along"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"Trust
 
is
 
essential
 
in
 
any
 
strong
 
relationship.",
 
        
"Good
 
communication
 
helps
 
resolve
 
arguments.",
 
        
"She
 
felt
 
a
 
sense
 
of
 
excitement
 
before
 
the
 
trip.",
 
        
"It's
 
normal
 
to
 
experience
 
frustration
 
sometimes.",
 
        
"I
 
can
 
always
 
rely
 
on
 
my
 
best
 
friend.",
 
        
"He
 
finds
 
comfort
 
in
 
spending
 
time
 
with
 
his
 
family.",
 
        
"They
 
often
 
get
 
along
 
very
 
well.",
 
        
"It's
 
important
 
to
 
be
 
**empathetic**
 
towards
 
others'
 
feelings.",
 
        
"She
 
decided
 
to
 
**confide**
 
in
 
her
 
sister
 
about
 
her
 
problems.",
 
        
"A
 
healthy
 
relationship
 
is
 
built
 
on
 
mutual
 
respect
 
and
 
understanding."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 

        
"Vertrauen
 
ist
 
in
 
jeder
 
starken
 
Beziehung
 
unerlässlich.",
 
        
"Gute
 
Kommunikation
 
hilft,
 
Streitigkeiten
 
zu
 
lösen.",
 
        
"Sie
 
verspürte
 
vor
 
der
 
Reise
 
ein
 
Gefühl
 
der
 
Aufregung.",
 
        
"Es
 
ist
 
normal,
 
manchmal
 
Frustration
 
zu
 
erleben.",
 
        
"Ich
 
kann
 
mich
 
immer
 
auf
 
meinen
 
besten
 
Freund
 
verlassen.",
 
        
"Er
 
findet
 
Trost
 
darin,
 
Zeit
 
mit
 
seiner
 
Familie
 
zu
 
verbringen.",
 
        
"Sie
 
kommen
 
oft
 
sehr
 
gut
 
miteinander
 
aus.",
 
        
"Es
 
ist
 
wichtig,
 
**einfühlsam**
 
gegenüber
 
den
 
Gefühlen
 
anderer
 
zu
 
sein.",
 
        
"Sie
 
beschloss,
 
sich
 
ihrer
 
Schwester
 
mit
 
ihren
 
Problemen
 
anzuvertrauen.",
 
        
"Eine
 
gesunde
 
Beziehung
 
basiert
 
auf
 
gegenseitigem
 
Respekt
 
und
 
Verständnis."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Relative
 
Clauses
 
(who,
 
which,
 
that,
 
whose,
 
where,
 
when)",
 
      
topicDe:
 
"Relativsätze
 
(who,
 
which,
 
that,
 
whose,
 
where,
 
when)",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"**Relative
 
Clauses**
 
provide
 
extra
 
information
 
about
 
a
 
noun.
 
They
 
usually
 
begin
 
with
 
a
 
relative
 
pronoun
 
(who,
 
which,
 
that,
 
whose)
 
or
 
a
 
relative
 
adverb
 
(where,
 
when).
 
**Who/That**
 
for
 
people
 
(e.g.,
 
'He's
 
the
 
man
 
who
 
lives
 
next
 
door.').
 
**Which/That**
 
for
 
things/animals
 
(e.g.,
 
'This
 
is
 
the
 
book
 
which
 
I
 
read.').
 
**Whose**
 
for
 
possession
 
(e.g.,
 
'She's
 
the
 
girl
 
whose
 
dog
 
won
 
the
 
prize.').
 
**Where**
 
for
 
places
 
(e.g.,
 
'That's
 
the
 
house
 
where
 
I
 
grew
 
up.').
 
**When**
 
for
 
time
 
(e.g.,
 
'Do
 
you
 
remember
 
the
 
day
 
when
 
we
 
met?').",
 
      
explanationDe:
 
"**Relativsätze**
 
geben
 
zusätzliche
 
Informationen
 
über
 
ein
 
Nomen.
 
Sie
 
beginnen
 
normalerweise
 
mit
 
einem
 
Relativpronomen
 
(who,
 
which,
 
that,
 
whose)
 
oder
 
einem
 
Relativadverb
 
(where,
 
when).
 
**Who/That**
 
für
 
Personen
 
(z.B.
 
'Das
 
ist
 
der
 
Mann,
 
der
 
nebenan
 
wohnt.').
 
**Which/That**
 
für
 
Dinge/Tiere
 
(z.B.
 
'Das
 
ist
 
das
 
Buch,
 
das
 
ich
 
gelesen
 
habe.').
 
**Whose**
 
für
 
Besitz
 
(z.B.
 
'Das
 
ist
 
das
 
Mädchen,
 
dessen
 
Hund
 
den
 
Preis
 
gewonnen
 
hat.').
 
**Where**
 
für
 
Orte
 
(z.B.
 
'Das
 
ist
 
das
 
Haus,
 
wo
 
ich
 
aufgewachsen
 
bin.').
 
**When**
 
für
 
Zeit
 
(z.B.
 
'Erinnerst
 
du
 
dich
 
an
 
den
 
Tag,
 
an
 
dem
 
wir
 
uns
 
trafen?').",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"She
 
is
 
the
 
woman
 
who
 
helped
 
me.",
 
de:
 
"Sie
 
ist
 
die
 
Frau,
 
die
 
mir
 
geholfen
 
hat."
 
},
 
        
{
 
en:
 
"I
 
live
 
in
 
a
 
city
 
which
 
has
 
a
 
beautiful
 
old
 
town.",
 
de:
 
"Ich
 
lebe
 
in
 
einer
 
Stadt,
 
die
 
eine
 
schöne
 
Altstadt
 
hat."
 
},
 
        
{
 
en:
 
"This
 
is
 
the
 
restaurant
 
where
 
we
 
had
 
dinner.",
 
de:
 
"Das
 
ist
 
das
 
Restaurant,
 
wo
 
wir
 
zu
 
Abend
 
gegessen
 
haben."
 
},
 
        
{
 
en:
 
"Do
 
you
 
remember
 
the
 
day
 
when
 
we
 
first
 
met?",
 
de:
 
"Erinnerst
 
du
 
dich
 
an
 
den
 
Tag,
 
an
 
dem
 
wir
 
uns
 
zum
 
ersten
 
Mal
 
trafen?"
 
},
 
        
{
 
en:
 
"He
 
has
 
a
 
dog
 
whose
 
name
 
is
 
Max.",
 
de:
 
"Er
 
hat
 
einen
 
Hund,
 
dessen
 
Name
 
Max
 
ist."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"The
 
Power
 
of
 
Friendship",
 

      
text:
 
"Friendship
 
is
 
a
 
valuable
 
relationship
 
which
 
enriches
 
our
 
lives.
 
A
 
true
 
friend
 
is
 
someone
 
who
 
you
 
can
 
always
 
rely
 
on
 
and
 
who
 
will
 
support
 
you
 
through
 
good
 
times
 
and
 
bad.
 
It's
 
important
 
to
 
spend
 
time
 
with
 
people
 
whose
 
company
 
you
 
enjoy.
 
Strong
 
friendships
 
are
 
built
 
on
 
trust
 
and
 
open
 
communication,
 
which
 
are
 
key
 
elements
 
for
 
any
 
healthy
 
bond.
 
Sometimes,
 
you
 
might
 
have
 
an
 
argument
 
with
 
a
 
friend,
 
but
 
if
 
you
 
communicate
 
openly,
 
you
 
can
 
usually
 
reconcile.
 
Cherish
 
the
 
people
 
who
 
bring
 
joy
 
to
 
your
 
life.",
 
      
task:
 
"Identify
 
all
 
relative
 
clauses
 
in
 
the
 
text.
 
Explain
 
the
 
function
 
of
 
each
 
(who,
 
which,
 
whose,
 
where,
 
when).
 
What
 
qualities
 
make
 
a
 
true
 
friend?
 
How
 
are
 
strong
 
friendships
 
built?",
 
    
},
 
    
speaking:
 
[
 
      
"Describe
 
your
 
closest
 
friend
 
and
 
why
 
they
 
are
 
important
 
to
 
you.",
 
      
"Discuss
 
how
 
to
 
build
 
and
 
maintain
 
strong
 
relationships.",
 
      
"Talk
 
about
 
different
 
types
 
of
 
emotions
 
and
 
how
 
you
 
express
 
them.",
 
      
"What
 
are
 
the
 
qualities
 
of
 
a
 
good
 
listener?",
 
      
"Discuss
 
a
 
time
 
you
 
had
 
to
 
resolve
 
a
 
conflict
 
with
 
someone."
 
    
],
 
    
writing:
 
"Write
 
a
 
short
 
paragraph
 
(100-120
 
words)
 
describing
 
an
 
important
 
person
 
in
 
your
 
life.
 
Use
 
at
 
least
 
three
 
different
 
relative
 
clauses
 
(who,
 
which,
 
whose).",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"That's
 
the
 
house
 
___
 
I
 
grew
 
up.",
 
        
choices:
 
["which",
 
"who",
 
"where",
 
"when"],
 
        
answer:
 
2,
 
        
explanation:
 
"'Where'
 
is
 
used
 
for
 
places.",
 
      
},
 
      
{
 
        
q:
 
"I
 
met
 
a
 
woman
 
___
 
works
 
as
 
a
 
doctor.",
 
        
choices:
 
["which",
 
"whose",
 
"who",
 
"where"],
 
        
answer:
 
2,
 
        
explanation:
 
"'Who'
 
is
 
used
 
for
 
people.",
 
      
},
 
      
{
 
        
q:
 
"She
 
likes
 
films
 
___
 
have
 
a
 
happy
 
ending.",
 
        
choices:
 
["who",
 
"whose",
 
"which",
 
"when"],
 
        
answer:
 
2,
 
        
explanation:
 
"'Which'
 
is
 
used
 
for
 
things.",
 
      
},
 
      
{
 
        
q:
 
"He's
 
the
 
man
 
___
 
car
 
was
 
stolen.",
 
        
choices:
 
["who",
 
"which",
 
"whose",
 
"where"],
 
        
answer:
 
2,
 
        
explanation:
 
"'Whose'
 
indicates
 
possession."
 
      
}
 
    
],
 

  
},
 
  
{
 
    
id:
 
12,
 
    
title:
 
"Crime
 
&
 
Justice",
 
    
theme:
 
"pink",
 
    
overview:
 
"Discuss
 
topics
 
related
 
to
 
crime,
 
law,
 
and
 
the
 
justice
 
system.
 
Learn
 
and
 
apply
 
Reported
 
Speech.
 
Expand
 
vocabulary
 
for
 
different
 
types
 
of
 
crimes,
 
legal
 
terms,
 
and
 
law
 
enforcement.
 
Discuss
 
the
 
role
 
of
 
justice
 
in
 
society
 
and
 
current
 
issues.",
 
    
vocabulary:
 
[
 
      
"crime",
 
"theft",
 
"robbery",
 
"burglary",
 
"fraud",
 
"vandalism",
 
      
"arrest",
 
"investigation",
 
"suspect",
 
"witness",
 
"evidence",
 
"court",
 
      
"judge",
 
"jury",
 
"verdict",
 
"sentence",
 
"prison",
 
"fine",
 
"lawyer",
 
"police",
 
"justice",
 
"law
 
enforcement",
 
"rehabilitation",
 
"deterrent",
 
"cybercrime",
 
"misdemeanor",
 
"felony",
 
"punishment"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"The
 
police
 
are
 
investigating
 
the
 
recent
 
theft.",
 
        
"She
 
was
 
a
 
witness
 
to
 
the
 
robbery.",
 
        
"The
 
suspect
 
was
 
arrested
 
yesterday.",
 
        
"The
 
judge
 
delivered
 
a
 
fair
 
verdict.",
 
        
"There
 
wasn't
 
enough
 
evidence
 
to
 
prove
 
his
 
guilt.",
 
        
"The
 
jury
 
reached
 
a
 
verdict
 
after
 
hours
 
of
 
deliberation.",
 
        
"He
 
paid
 
a
 
heavy
 
fine
 
for
 
the
 
speeding
 
offense.",
 
        
"Prison
 
should
 
also
 
focus
 
on
 
rehabilitation.",
 
        
"The
 
new
 
law
 
acts
 
as
 
a
 
strong
 
deterrent
 
against
 
cybercrime.",
 
        
"Fraud
 
can
 
have
 
serious
 
financial
 
**consequences**."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Die
 
Polizei
 
ermittelt
 
wegen
 
des
 
jüngsten
 
Diebstahls.",
 
        
"Sie
 
war
 
Zeugin
 
des
 
Raubüberfalls.",
 
        
"Der
 
Verdächtige
 
wurde
 
gestern
 
verhaftet.",
 
        
"Der
 
Richter
 
sprach
 
ein
 
faires
 
Urteil.",
 
        
"Es
 
gab
 
nicht
 
genügend
 
Beweise,
 
um
 
seine
 
Schuld
 
zu
 
beweisen.",
 
        
"Die
 
Jury
 
fällte
 
nach
 
stundenlangen
 
Beratungen
 
ein
 
Urteil.",
 
        
"Er
 
zahlte
 
ein
 
hohes
 
Bußgeld
 
für
 
das
 
Geschwindigkeitsvergehen.",
 
        
"Das
 
Gefängnis
 
sollte
 
sich
 
auch
 
auf
 
die
 
Rehabilitation
 
konzentrieren.",
 
        
"Das
 
neue
 
Gesetz
 
dient
 
als
 
starkes
 
Abschreckungsmittel
 
gegen
 
Cyberkriminalität.",
 
        
"Betrug
 
kann
 
schwerwiegende
 
finanzielle
 
**Konsequenzen**
 
haben."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Reported
 
Speech
 
(Indirect
 
Speech)",
 
      
topicDe:
 
"Indirekte
 
Rede
 
(Reported
 
Speech)",
 
//
 
German,
 
needs
 
Amharic
 
translation
 

      
explanationEn:
 
"**Reported
 
Speech**
 
is
 
used
 
to
 
tell
 
someone
 
what
 
another
 
person
 
said,
 
without
 
using
 
their
 
exact
 
words.
 
Tenses
 
usually
 
'shift
 
back'
 
(e.g.,
 
Present
 
Simple
 
becomes
 
Past
 
Simple,
 
Present
 
Perfect
 
becomes
 
Past
 
Perfect).
 
Time
 
and
 
place
 
expressions
 
also
 
change
 
(e.g.,
 
'today'
 
becomes
 
'that
 
day',
 
'here'
 
becomes
 
'there').
 
Questions
 
become
 
statements
 
(e.g.,
 
'He
 
asked
 
if
 
I
 
was
 
coming.').",
 
      
explanationDe:
 
"**Indirekte
 
Rede**
 
wird
 
verwendet,
 
um
 
jemandem
 
zu
 
erzählen,
 
was
 
eine
 
andere
 
Person
 
gesagt
 
hat,
 
ohne
 
deren
 
genaue
 
Worte
 
zu
 
verwenden.
 
Die
 
Zeiten
 
verschieben
 
sich
 
normalerweise
 
'zurück'
 
(z.B.
 
Simple
 
Present
 
wird
 
Simple
 
Past,
 
Present
 
Perfect
 
wird
 
Past
 
Perfect).
 
Zeit-
 
und
 
Ortsangaben
 
ändern
 
sich
 
ebenfalls
 
(z.B.
 
'heute'
 
wird
 
'an
 
diesem
 
Tag',
 
'hier'
 
wird
 
'dort').
 
Fragen
 
werden
 
zu
 
Aussagesätzen
 
(z.B.
 
'Er
 
fragte,
 
ob
 
ich
 
käme.').",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"Direct:
 
'I
 
am
 
tired.'
 
Reported:
 
He
 
said
 
he
 
was
 
tired.",
 
de:
 
"Direkt:
 
'Ich
 
bin
 
müde.'
 
Indirekt:
 
Er
 
sagte,
 
er
 
sei
 
müde."
 
},
 
        
{
 
en:
 
"Direct:
 
'I
 
saw
 
him
 
yesterday.'
 
Reported:
 
She
 
said
 
she
 
had
 
seen
 
him
 
the
 
day
 
before.",
 
de:
 
"Direkt:
 
'Ich
 
habe
 
ihn
 
gestern
 
gesehen.'
 
Indirekt:
 
Sie
 
sagte,
 
sie
 
habe
 
ihn
 
am
 
Vortag
 
gesehen."
 
},
 
        
{
 
en:
 
"Direct:
 
'Where
 
are
 
my
 
keys?'
 
Reported:
 
He
 
asked
 
where
 
his
 
keys
 
were.",
 
de:
 
"Direkt:
 
'Wo
 
sind
 
meine
 
Schlüssel?'
 
Indirekt:
 
Er
 
fragte
 
sich,
 
wo
 
ihre
 
Schlüssel
 
waren."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"News
 
Report:
 
Bank
 
Robbery",
 
      
text:
 
"Yesterday,
 
a
 
local
 
bank
 
was
 
robbed.
 
The
 
police
 
reported
 
that
 
two
 
masked
 
individuals
 
had
 
entered
 
the
 
bank
 
at
 
10
 
AM.
 
A
 
witness
 
told
 
reporters
 
that
 
the
 
robbers
 
had
 
demanded
 
money
 
and
 
had
 
then
 
fled
 
the
 
scene
 
quickly.
 
The
 
bank
 
manager
 
explained
 
that
 
no
 
one
 
was
 
injured,
 
but
 
that
 
a
 
significant
 
amount
 
of
 
cash
 
had
 
been
 
stolen.
 
The
 
police
 
stated
 
that
 
they
 
were
 
investigating
 
the
 
incident
 
and
 
hoped
 
to
 
make
 
arrests
 
soon.
 
They
 
also
 
asked
 
if
 
anyone
 
had
 
seen
 
anything
 
suspicious
 
in
 
the
 
area
 
before
 
the
 
robbery.
 
Authorities
 
assured
 
the
 
public
 
that
 
all
 
measures
 
were
 
being
 
taken
 
to
 
ensure
 
justice
 
would
 
be
 
served.",
 
      
task:
 
"Identify
 
all
 
reported
 
speech
 
sentences
 
and
 
convert
 
them
 
back
 
to
 
direct
 
speech.
 
What
 
details
 
about
 
the
 
robbery
 
are
 
given?
 
What
 
was
 
the
 
bank
 
manager's
 
statement?
 
What
 
are
 
the
 
police
 
doing?",
 
    
},
 
    
speaking:
 
[
 
      
"Discuss
 
a
 
news
 
story
 
about
 
a
 
crime
 
you
 
recently
 
heard
 
about.",
 
      
"Roleplay:
 
a
 
police
 
officer
 
interviewing
 
a
 
witness.",
 
      
"What
 
is
 
the
 
purpose
 
of
 
prisons?",
 
      
"Discuss
 
the
 
concept
 
of
 
justice
 
and
 
its
 
importance
 
in
 
society.",
 
      
"Talk
 
about
 
different
 
types
 
of
 
punishment
 
for
 
crimes."
 
    
],
 
    
writing:
 
"Write
 
a
 
short
 
news
 
report
 
(120-150
 
words)
 
about
 
a
 
hypothetical
 
local
 
event
 
(e.g.,
 
a
 
community
 
project,
 
a
 
small
 
incident),
 
using
 
at
 
least
 
three
 
sentences
 
in
 
reported
 
speech.",
 
    
quiz:
 
[
 

      
{
 
        
q:
 
"Direct:
 
'I
 
will
 
help
 
you.'
 
Reported:
 
He
 
said
 
he
 
___
 
me.",
 
        
choices:
 
["will
 
help",
 
"would
 
help",
 
"helps",
 
"had
 
helped"],
 
        
answer:
 
1,
 
        
explanation:
 
"'Will'
 
becomes
 
'would'
 
in
 
reported
 
speech.",
 
      
},
 
      
{
 
        
q:
 
"Direct:
 
'We
 
will
 
arrive
 
tomorrow.'
 
Reported:
 
They
 
said
 
they
 
___
 
the
 
next
 
day.",
 
        
choices:
 
["will
 
arrive",
 
"would
 
arrive",
 
"arrived",
 
"had
 
arrived"],
 
        
answer:
 
1,
 
        
explanation:
 
"'Will'
 
becomes
 
'would'
 
in
 
reported
 
speech,
 
and
 
'tomorrow'
 
becomes
 
'the
 
next
 
day'.",
 
      
},
 
      
{
 
        
q:
 
"Direct:
 
'I
 
have
 
finished
 
my
 
homework.'
 
Reported:
 
She
 
told
 
me
 
she
 
___
 
her
 
homework.",
 
        
choices:
 
["has
 
finished",
 
"had
 
finished",
 
"finished",
 
"was
 
finishing"],
 
        
answer:
 
1,
 
        
explanation:
 
"Present
 
Perfect
 
becomes
 
Past
 
Perfect
 
in
 
reported
 
speech."
 
      
}
 
    
],
 
  
},
 
  
{
 
    
id:
 
13,
 
    
title:
 
"Arts
 
&
 
Culture",
 
    
theme:
 
"violet",
 
    
overview:
 
"Explore
 
different
 
forms
 
of
 
art,
 
music,
 
literature,
 
and
 
cultural
 
traditions.
 
Learn
 
to
 
use
 
'used
 
to'
 
and
 
'would'
 
for
 
past
 
habits.
 
Expand
 
vocabulary
 
related
 
to
 
artistic
 
genres,
 
cultural
 
events,
 
and
 
traditional
 
practices.
 
Discuss
 
the
 
importance
 
of
 
culture.",
 
    
vocabulary:
 
[
 
      
"art",
 
"painting",
 
"sculpture",
 
"music",
 
"literature",
 
"theater",
 
"dance",
 
      
"exhibition",
 
"concert",
 
"play",
 
"opera",
 
"museum",
 
"gallery",
 
"novel",
 
      
"poem",
 
"author",
 
"artist",
 
"performer",
 
"audience",
 
"tradition",
 
"custom",
 
"festival",
 
"folklore",
 
"heritage",
 
"creativity",
 
"expression",
 
"masterpiece",
 
"critique",
 
"genre"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"The
 
art
 
exhibition
 
features
 
modern
 
paintings.",
 
        
"She
 
used
 
to
 
play
 
the
 
piano
 
every
 
day.",
 
        
"This
 
novel
 
is
 
considered
 
a
 
masterpiece
 
of
 
literature.",
 
        
"They
 
often
 
went
 
to
 
the
 
cinema
 
on
 
weekends.",
 
        
"The
 
city
 
hosts
 
a
 
music
 
festival
 
every
 
summer.",
 
        
"Local
 
folklore
 
often
 
tells
 
stories
 
of
 
ancient
 
heroes.",
 
        
"Traditional
 
customs
 
are
 
important
 
for
 
preserving
 
cultural
 
heritage.",
 
        
"Creativity
 
is
 
key
 
to
 
artistic
 
expression.",
 

        
"The
 
dance
 
performance
 
captivated
 
the
 
audience.",
 
        
"The
 
museum
 
displays
 
artifacts
 
from
 
the
 
country's
 
rich
 
**heritage**."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Die
 
Kunstausstellung
 
zeigt
 
moderne
 
Gemälde.",
 
        
"Sie
 
spielte
 
früher
 
jeden
 
Tag
 
Klavier.",
 
        
"Dieser
 
Roman
 
gilt
 
als
 
Meisterwerk
 
der
 
Literatur.",
 
        
"Sie
 
gingen
 
am
 
Wochenende
 
oft
 
ins
 
Kino.",
 
        
"Die
 
Stadt
 
veranstaltet
 
jeden
 
Sommer
 
ein
 
Musikfestival.",
 
        
"Lokale
 
Folklore
 
erzählt
 
oft
 
Geschichten
 
von
 
alten
 
Helden.",
 
        
"Traditionelle
 
Bräuche
 
sind
 
wichtig
 
für
 
die
 
Bewahrung
 
des
 
Kulturerbes.",
 
        
"Kreativität
 
ist
 
der
 
Schlüssel
 
zum
 
künstlerischen
 
Ausdruck.",
 
        
"Die
 
Tanzvorführung
 
fesselte
 
das
 
Publikum.",
 
        
"Das
 
Museum
 
zeigt
 
Artefakte
 
aus
 
dem
 
reichen
 
**Erbe**
 
des
 
Landes."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Used
 
to
 
/
 
Would
 
(for
 
past
 
habits)",
 
      
topicDe:
 
"Used
 
to
 
/
 
Would
 
(für
 
frühere
 
Gewohnheiten)",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"**Used
 
to**
 
+
 
base
 
verb:
 
describes
 
past
 
habits
 
or
 
states
 
that
 
are
 
no
 
longer
 
true
 
(e.g.,
 
'I
 
used
 
to
 
live
 
in
 
London.').
 
It's
 
for
 
things
 
that
 
were
 
true
 
in
 
the
 
past
 
but
 
aren't
 
now.
 
**Would**
 
+
 
base
 
verb:
 
describes
 
repeated
 
past
 
actions,
 
but
 
NOT
 
past
 
states
 
(e.g.,
 
'Every
 
summer,
 
we
 
would
 
go
 
to
 
the
 
beach.').
 
'Used
 
to'
 
can
 
replace
 
'would'
 
for
 
repeated
 
actions,
 
but
 
'would'
 
cannot
 
replace
 
'used
 
to'
 
for
 
states.",
 
      
explanationDe:
 
"**Used
 
to**
 
+
 
Grundform
 
des
 
Verbs:
 
beschreibt
 
frühere
 
Gewohnheiten
 
oder
 
Zustände,
 
die
 
nicht
 
mehr
 
wahr
 
sind
 
(z.B.
 
'Ich
 
habe
 
früher
 
in
 
London
 
gelebt.').
 
Es
 
wird
 
für
 
Dinge
 
verwendet,
 
die
 
in
 
der
 
Vergangenheit
 
wahr
 
waren,
 
aber
 
jetzt
 
nicht
 
mehr.
 
**Would**
 
+
 
Grundform
 
des
 
Verbs:
 
beschreibt
 
wiederholte
 
Handlungen
 
in
 
der
 
Vergangenheit,
 
aber
 
KEINE
 
früheren
 
Zustände
 
(z.B.
 
'Jeden
 
Sommer
 
gingen
 
wir
 
an
 
den
 
Strand.').
 
'Used
 
to'
 
kann
 
'would'
 
für
 
wiederholte
 
Handlungen
 
ersetzen,
 
aber
 
'would'
 
kann
 
'used
 
to'
 
nicht
 
für
 
Zustände
 
ersetzen.",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"I
 
used
 
to
 
have
 
long
 
hair.",
 
de:
 
"Ich
 
hatte
 
früher
 
lange
 
Haare."
 
},
 
        
{
 
en:
 
"We
 
would
 
often
 
play
 
outside
 
until
 
dark
 
in
 
the
 
summer.",
 
de:
 
"Im
 
Sommer
 
spielten
 
wir
 
draußen
 
bis
 
es
 
dunkel
 
wurde."
 
},
 
        
{
 
en:
 
"Did
 
you
 
use
 
to
 
listen
 
to
 
this
 
kind
 
of
 
music?",
 
de:
 
"Hast
 
du
 
früher
 
diese
 
Art
 
von
 
Musik
 
gehört?"
 
},
 
        
{
 
en:
 
"My
 
grandfather
 
would
 
tell
 
us
 
stories
 
before
 
bedtime.",
 
de:
 
"Mein
 
Großvater
 
erzählte
 
uns
 
vor
 
dem
 
Schlafengehen
 
Geschichten."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"The
 
Evolution
 
of
 
Local
 
Traditions",
 

      
text:
 
"In
 
our
 
village,
 
people
 
used
 
to
 
celebrate
 
the
 
harvest
 
festival
 
every
 
autumn
 
with
 
elaborate
 
dances
 
and
 
songs.
 
Grandparents
 
would
 
tell
 
stories
 
of
 
the
 
'old
 
days'
 
around
 
bonfires.
 
Children
 
used
 
to
 
help
 
collect
 
the
 
crops,
 
and
 
everyone
 
would
 
gather
 
in
 
the
 
village
 
square
 
for
 
a
 
feast.
 
Nowadays,
 
some
 
of
 
these
 
traditions
 
have
 
changed.
 
While
 
we
 
still
 
have
 
a
 
festival,
 
the
 
dances
 
are
 
less
 
formal,
 
and
 
fewer
 
people
 
would
 
attend
 
the
 
bonfire
 
stories.
 
However,
 
the
 
sense
 
of
 
community
 
that
 
used
 
to
 
be
 
so
 
strong
 
still
 
remains,
 
and
 
new
 
generations
 
are
 
finding
 
ways
 
to
 
adapt
 
old
 
customs
 
for
 
modern
 
times.
 
People
 
are
 
adapting,
 
not
 
abandoning.",
 
      
task:
 
"Identify
 
examples
 
of
 
'used
 
to'
 
and
 
'would'.
 
Explain
 
why
 
each
 
is
 
used.
 
How
 
have
 
traditions
 
changed
 
in
 
the
 
village?
 
What
 
aspect
 
of
 
the
 
community
 
remains
 
strong?",
 
    
},
 
    
speaking:
 
[
 
      
"Describe
 
a
 
tradition
 
from
 
your
 
country
 
and
 
how
 
it
 
has
 
changed
 
over
 
time.",
 
      
"Talk
 
about
 
your
 
favorite
 
type
 
of
 
music
 
or
 
art.",
 
      
"What
 
cultural
 
events
 
are
 
important
 
in
 
your
 
community?",
 
      
"Discuss
 
a
 
museum
 
or
 
gallery
 
you
 
have
 
visited.",
 
      
"Compare
 
how
 
you
 
spent
 
your
 
free
 
time
 
as
 
a
 
child
 
versus
 
now."
 
    
],
 
    
writing:
 
"Write
 
a
 
short
 
reflection
 
(120-150
 
words)
 
on
 
a
 
past
 
habit
 
or
 
routine
 
you
 
had.
 
Explain
 
what
 
it
 
was,
 
and
 
if
 
it
 
has
 
changed,
 
why.
 
Use
 
'used
 
to'
 
and
 
'would'
 
appropriately.",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"He
 
___
 
(play)
 
football
 
every
 
weekend
 
when
 
he
 
was
 
young.",
 
        
choices:
 
["used
 
to
 
play",
 
"would
 
play",
 
"both
 
are
 
correct",
 
"neither
 
are
 
correct"],
 
        
answer:
 
2,
 
        
explanation:
 
"Both
 
'used
 
to
 
play'
 
and
 
'would
 
play'
 
are
 
correct
 
for
 
a
 
repeated
 
past
 
action.",
 
      
},
 
      
{
 
        
q:
 
"I
 
___
 
(live)
 
in
 
a
 
small
 
town,
 
but
 
now
 
I
 
live
 
in
 
a
 
big
 
city.",
 
        
choices:
 
["would
 
live",
 
"used
 
to
 
live",
 
"lived",
 
"am
 
used
 
to
 
live"],
 
        
answer:
 
1,
 
        
explanation:
 
"'Used
 
to'
 
describes
 
a
 
past
 
state
 
that
 
is
 
no
 
longer
 
true.",
 
      
},
 
      
{
 
        
q:
 
"Every
 
summer,
 
we
 
___
 
(go)
 
to
 
the
 
beach
 
for
 
our
 
holiday.",
 
        
choices:
 
["used
 
to
 
go",
 
"would
 
go",
 
"go",
 
"are
 
used
 
to
 
go"],
 
        
answer:
 
1,
 
        
explanation:
 
"'Would'
 
describes
 
a
 
repeated
 
past
 
action/routine.",
 
      
},
 
      
{
 
        
q:
 
"He
 
___
 
(be)
 
very
 
shy,
 
but
 
now
 
he's
 
confident.",
 
        
choices:
 
["would
 
be",
 
"used
 
to
 
be",
 
"is
 
used
 
to
 
be",
 
"was"],
 
        
answer:
 
1,
 
        
explanation:
 
"'Used
 
to'
 
for
 
past
 
states
 
(e.g.,
 
being
 
shy).
 
'Would'
 
cannot
 
be
 
used
 
for
 
states."
 
      
}
 

    
],
 
  
},
 
  
{
 
    
id:
 
14,
 
    
title:
 
"Challenges
 
&
 
Solutions",
 
    
theme:
 
"sky",
 
    
overview:
 
"Discuss
 
common
 
problems,
 
obstacles,
 
and
 
ways
 
to
 
overcome
 
them.
 
Learn
 
about
 
Phrasal
 
Verbs
 
and
 
their
 
various
 
meanings.
 
Expand
 
vocabulary
 
related
 
to
 
challenges,
 
problem-solving,
 
resilience,
 
and
 
personal
 
growth.
 
Practice
 
giving
 
advice
 
and
 
finding
 
solutions.",
 
    
vocabulary:
 
[
 
      
"challenge",
 
"obstacle",
 
"problem",
 
"difficulty",
 
"setback",
 
"solution",
 
      
"overcome",
 
"deal
 
with",
 
"cope
 
with",
 
"manage",
 
"resilience",
 
"perseverance",
 
      
"strategy",
 
"approach",
 
"innovation",
 
"creativity",
 
"adapt",
 
"troubleshoot",
 
"break
 
down",
 
"figure
 
out",
 
"come
 
up
 
with",
 
"give
 
up",
 
"keep
 
going",
 
"bounce
 
back",
 
"handle",
 
"tackle",
 
"resolve",
 
"navigate",
 
"phrasal
 
verb"
 
    
],
 
    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"We
 
need
 
to
 
find
 
a
 
solution
 
to
 
this
 
problem.",
 
        
"She
 
managed
 
to
 
overcome
 
many
 
obstacles.",
 
        
"It's
 
important
 
to
 
cope
 
with
 
stress
 
effectively.",
 
        
"He
 
had
 
to
 
deal
 
with
 
a
 
sudden
 
setback.",
 
        
"Resilience
 
helps
 
you
 
bounce
 
back
 
from
 
failure.",
 
        
"Don't
 
give
 
up
 
on
 
your
 
dreams!",
 
        
"Can
 
you
 
help
 
me
 
figure
 
out
 
this
 
complex
 
task?",
 
        
"We
 
need
 
to
 
come
 
up
 
with
 
a
 
new
 
strategy.",
 
        
"They
 
decided
 
to
 
break
 
down
 
the
 
big
 
project
 
into
 
smaller
 
tasks.",
 
        
"Thinking
 
through
 
the
 
options
 
carefully
 
led
 
to
 
the
 
best
 
decision."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Wir
 
müssen
 
eine
 
Lösung
 
für
 
dieses
 
Problem
 
finden.",
 
        
"Sie
 
schaffte
 
es,
 
viele
 
Hindernisse
 
zu
 
überwinden.",
 
        
"Es
 
ist
 
wichtig,
 
effektiv
 
mit
 
Stress
 
umzugehen.",
 
        
"Er
 
musste
 
mit
 
einem
 
plötzlichen
 
Rückschlag
 
fertig
 
werden.",
 
        
"Widerstandsfähigkeit
 
hilft
 
dir,
 
nach
 
Misserfolgen
 
wieder
 
auf
 
die
 
Beine
 
zu
 
kommen.",
 
        
"Gib
 
deine
 
Träume
 
nicht
 
auf!",
 
        
"Kannst
 
du
 
mir
 
helfen,
 
diese
 
komplexe
 
Aufgabe
 
zu
 
verstehen?",
 
        
"Wir
 
müssen
 
uns
 
eine
 
neue
 
Strategie
 
ausdenken.",
 
        
"Sie
 
beschlossen,
 
das
 
große
 
Projekt
 
in
 
kleinere
 
Aufgaben
 
zu
 
unterteilen.",
 
        
"Die
 
sorgfältige
 
Abwägung
 
der
 
Optionen
 
führte
 
zur
 
besten
 
Entscheidung."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Phrasal
 
Verbs",
 

      
topicDe:
 
"Phrasal
 
Verben",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"**Phrasal
 
verbs**
 
are
 
combinations
 
of
 
a
 
verb
 
and
 
a
 
preposition
 
or
 
adverb
 
(or
 
both),
 
which
 
create
 
a
 
new
 
meaning
 
(e.g.,
 
'look
 
up',
 
'give
 
up',
 
'take
 
off').
 
The
 
meaning
 
is
 
often
 
different
 
from
 
the
 
individual
 
words.
 
They
 
are
 
very
 
common
 
in
 
spoken
 
and
 
informal
 
English
 
and
 
can
 
be
 
tricky
 
because
 
their
 
meaning
 
is
 
not
 
always
 
obvious
 
from
 
their
 
parts.
 
It's
 
often
 
best
 
to
 
learn
 
them
 
in
 
context.",
 
      
explanationDe:
 
"**Phrasal
 
Verben**
 
sind
 
Kombinationen
 
aus
 
einem
 
Verb
 
und
 
einer
 
Präposition
 
oder
 
einem
 
Adverb
 
(oder
 
beidem),
 
die
 
eine
 
neue
 
Bedeutung
 
ergeben
 
(z.B.
 
'nachschlagen',
 
'aufgeben',
 
'abheben').
 
Die
 
Bedeutung
 
ist
 
oft
 
anders
 
als
 
die
 
der
 
einzelnen
 
Wörter.
 
Sie
 
sind
 
im
 
gesprochenen
 
und
 
informellen
 
Englisch
 
sehr
 
verbreitet
 
und
 
können
 
knifflig
 
sein,
 
da
 
ihre
 
Bedeutung
 
nicht
 
immer
 
offensichtlich
 
ist.
 
Es
 
ist
 
oft
 
am
 
besten,
 
sie
 
im
 
Kontext
 
zu
 
lernen.",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"I
 
need
 
to
 
look
 
up
 
this
 
word
 
in
 
the
 
dictionary.",
 
de:
 
"Ich
 
muss
 
dieses
 
Wort
 
im
 
Wörterbuch
 
nachschlagen."
 
},
 
        
{
 
en:
 
"Don't
 
put
 
off
 
your
 
homework
 
until
 
the
 
last
 
minute.",
 
de:
 
"Verschiebe
 
deine
 
Hausaufgaben
 
nicht
 
auf
 
die
 
letzte
 
Minute."
 
},
 
        
{
 
en:
 
"She
 
gets
 
along
 
well
 
with
 
her
 
colleagues.",
 
de:
 
"Sie
 
kommt
 
gut
 
mit
 
ihren
 
Kollegen
 
aus."
 
},
 
        
{
 
en:
 
"The
 
company
 
plans
 
to
 
take
 
on
 
more
 
staff
 
next
 
year.",
 
de:
 
"Das
 
Unternehmen
 
plant,
 
nächstes
 
Jahr
 
mehr
 
Personal
 
einzustellen."
 
},
 
        
{
 
en:
 
"He
 
always
 
backs
 
up
 
his
 
files.",
 
de:
 
"Er
 
sichert
 
immer
 
seine
 
Dateien."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"Overcoming
 
Challenges
 
in
 
Learning",
 
      
text:
 
"Learning
 
a
 
new
 
language
 
can
 
present
 
many
 
challenges,
 
but
 
it's
 
important
 
not
 
to
 
give
 
up.
 
Sometimes,
 
you
 
might
 
come
 
across
 
difficult
 
grammar
 
rules
 
or
 
struggle
 
to
 
figure
 
out
 
new
 
vocabulary.
 
When
 
you
 
face
 
a
 
setback,
 
try
 
to
 
break
 
down
 
the
 
problem
 
into
 
smaller
 
parts.
 
Don't
 
put
 
off
 
practicing,
 
even
 
if
 
you
 
feel
 
tired.
 
It's
 
essential
 
to
 
keep
 
going
 
and
 
look
 
for
 
creative
 
solutions.
 
If
 
you
 
get
 
along
 
well
 
with
 
your
 
classmates,
 
you
 
can
 
also
 
ask
 
them
 
for
 
help.
 
Remember,
 
perseverance
 
pays
 
off
 
in
 
the
 
long
 
run.",
 
      
task:
 
"Identify
 
all
 
phrasal
 
verbs
 
in
 
the
 
text.
 
What
 
are
 
common
 
challenges
 
in
 
language
 
learning?
 
What
 
strategies
 
are
 
suggested
 
to
 
overcome
 
them?
 
What
 
is
 
the
 
main
 
message
 
of
 
the
 
text?",
 
    
},
 
    
speaking:
 
[
 
      
"Describe
 
a
 
personal
 
challenge
 
you
 
have
 
faced
 
and
 
how
 
you
 
overcame
 
it.",
 
      
"Discuss
 
common
 
challenges
 
students
 
face
 
and
 
how
 
they
 
can
 
be
 
solved.",
 
      
"Talk
 
about
 
the
 
importance
 
of
 
resilience
 
in
 
life.",
 
      
"Share
 
a
 
time
 
when
 
you
 
had
 
to
 
'think
 
outside
 
the
 
box'
 
to
 
find
 
a
 
solution.",
 
      
"Give
 
advice
 
to
 
someone
 
who
 
is
 
struggling
 
with
 
a
 
new
 
skill."
 
    
],
 

    
writing:
 
"Write
 
a
 
short
 
advice
 
column
 
(120-150
 
words)
 
for
 
someone
 
facing
 
a
 
common
 
problem
 
(e.g.,
 
procrastination,
 
stress).
 
Use
 
at
 
least
 
five
 
different
 
phrasal
 
verbs.",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"I
 
need
 
to
 
___
 
(search
 
for)
 
that
 
information
 
online.",
 
        
choices:
 
["look
 
up",
 
"look
 
down",
 
"look
 
after",
 
"look
 
into"],
 
        
answer:
 
0,
 
        
explanation:
 
"'Look
 
up'
 
means
 
to
 
search
 
for
 
information.",
 
      
},
 
      
{
 
        
q:
 
"Don't
 
___
 
(delay)
 
your
 
work
 
until
 
the
 
last
 
minute.",
 
        
choices:
 
["put
 
down",
 
"put
 
off",
 
"put
 
out",
 
"put
 
up"],
 
        
answer:
 
1,
 
        
explanation:
 
"'Put
 
off'
 
means
 
to
 
delay
 
or
 
postpone.",
 
      
},
 
      
{
 
        
q:
 
"She
 
___
 
(gets
 
along
 
well)
 
with
 
everyone
 
in
 
the
 
office.",
 
        
choices:
 
["gets
 
over",
 
"gets
 
up",
 
"gets
 
along",
 
"gets
 
off"],
 
        
answer:
 
2,
 
        
explanation:
 
"'Get
 
along'
 
means
 
to
 
have
 
a
 
friendly
 
relationship
 
with
 
someone.",
 
      
},
 
      
{
 
        
q:
 
"We
 
need
 
to
 
___
 
(invent/create)
 
a
 
new
 
plan.",
 
        
choices:
 
["come
 
across",
 
"come
 
up
 
with",
 
"come
 
off",
 
"come
 
back"],
 
        
answer:
 
1,
 
        
explanation:
 
"'Come
 
up
 
with'
 
means
 
to
 
think
 
of
 
or
 
create
 
something
 
new."
 
      
}
 
    
],
 
  
},
 
  
{
 
    
id:
 
15,
 
    
title:
 
"Global
 
Issues
 
&
 
Future",
 
    
theme:
 
"purple",
 
    
overview:
 
"Discuss
 
pressing
 
global
 
issues
 
and
 
reflect
 
on
 
the
 
future
 
of
 
humanity.
 
Understand
 
and
 
apply
 
Conditionals
 
(Type
 
2
 
and
 
3)
 
and
 
Mixed
 
Conditionals.
 
Expand
 
vocabulary
 
related
 
to
 
global
 
challenges,
 
sustainability,
 
and
 
predictions
 
for
 
the
 
future.
 
Debate
 
solutions
 
and
 
visions
 
for
 
a
 
better
 
world.",
 
    
vocabulary:
 
[
 
      
"global
 
warming",
 
"poverty",
 
"inequality",
 
"human
 
rights",
 
"peace",
 
"conflict",
 
      
"sustainable
 
development",
 
"technology",
 
"biotechnology",
 
"space
 
exploration",
 
      
"artificial
 
intelligence",
 
"automation",
 
"interconnected",
 
"utopia",
 
"dystopia",
 
      
"ethics",
 
"innovation",
 
"globalization",
 
"social
 
justice",
 
"renewable
 
resources",
 
"famine",
 
"disease",
 
"migration",
 
"diplomacy",
 
"international
 
cooperation"
 
    
],
 

    
vocabExamples:
 
{
 
      
en:
 
[
 
        
"Climate
 
change
 
is
 
a
 
critical
 
global
 
issue.",
 
        
"Many
 
organizations
 
are
 
fighting
 
to
 
reduce
 
poverty.",
 
        
"International
 
cooperation
 
is
 
essential
 
for
 
peace.",
 
        
"Sustainable
 
development
 
is
 
key
 
for
 
future
 
generations.",
 
        
"Biotechnology
 
is
 
leading
 
to
 
medical
 
breakthroughs.",
 
        
"Space
 
exploration
 
continues
 
to
 
fascinate
 
humanity.",
 
        
"Food
 
security
 
remains
 
a
 
major
 
challenge
 
in
 
some
 
regions.",
 
        
"Diplomacy
 
plays
 
a
 
vital
 
role
 
in
 
resolving
 
conflicts.",
 
        
"We
 
live
 
in
 
an
 
increasingly
 
interconnected
 
world.",
 
        
"The
 
future
 
could
 
be
 
a
 
technological
 
**utopia**
 
or
 
a
 
challenging
 
dystopia."
 
      
],
 
      
de:
 
[
 
//
 
German,
 
needs
 
Amharic
 
translation
 
        
"Der
 
Klimawandel
 
ist
 
ein
 
kritisches
 
globales
 
Problem.",
 
        
"Viele
 
Organisationen
 
kämpfen
 
gegen
 
die
 
Armut.",
 
        
"Internationale
 
Zusammenarbeit
 
ist
 
unerlässlich
 
für
 
den
 
Frieden.",
 
        
"Nachhaltige
 
Entwicklung
 
ist
 
entscheidend
 
für
 
zukünftige
 
Generationen.",
 
        
"Die
 
Biotechnologie
 
führt
 
zu
 
medizinischen
 
Durchbrüchen.",
 
        
"Die
 
Weltraumforschung
 
fasziniert
 
die
 
Menschheit
 
weiterhin.",
 
        
"Die
 
Ernährungssicherheit
 
bleibt
 
in
 
einigen
 
Regionen
 
eine
 
große
 
Herausforderung.",
 
        
"Diplomatie
 
spielt
 
eine
 
entscheidende
 
Rolle
 
bei
 
der
 
Lösung
 
von
 
Konflikten.",
 
        
"Wir
 
leben
 
in
 
einer
 
zunehmend
 
vernetzten
 
Welt.",
 
        
"Die
 
Zukunft
 
könnte
 
eine
 
technologische
 
**Utopie**
 
oder
 
eine
 
herausfordernde
 
Dystopie
 
sein."
 
      
],
 
    
},
 
    
grammar:
 
{
 
      
topicEn:
 
"Conditionals
 
(Type
 
2,
 
3)
 
&
 
Mixed
 
Conditionals",
 
      
topicDe:
 
"Konditionalsätze
 
(Typ
 
2,
 
3)
 
&
 
Gemischte
 
Konditionalsätze",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
explanationEn:
 
"**Type
 
2
 
Conditional
 
(Unreal
 
Present/Future):**
 
If
 
+
 
Past
 
Simple,
 
Would
 
+
 
base
 
verb.
 
Used
 
for
 
hypothetical
 
situations
 
in
 
the
 
present
 
or
 
future
 
that
 
are
 
unlikely
 
or
 
impossible
 
(e.g.,
 
'If
 
I
 
won
 
the
 
lottery,
 
I
 
would
 
travel
 
the
 
world.'
 
-
 
but
 
I
 
probably
 
won't
 
win).
 
It
 
expresses
 
imagination
 
or
 
unlikely
 
scenarios.
 
**Type
 
3
 
Conditional
 
(Unreal
 
Past):**
 
If
 
+
 
Past
 
Perfect,
 
Would
 
have
 
+
 
Past
 
Participle.
 
Used
 
for
 
hypothetical
 
situations
 
in
 
the
 
past
 
that
 
did
 
not
 
happen,
 
and
 
their
 
hypothetical
 
result
 
in
 
the
 
past
 
(e.g.,
 
'If
 
I
 
had
 
known,
 
I
 
would
 
have
 
helped
 
you.'
 
-
 
but
 
I
 
didn't
 
know,
 
so
 
I
 
didn't
 
help).
 
It
 
expresses
 
regret
 
or
 
relief
 
about
 
past
 
events.
 
**Mixed
 
Conditionals:**
 
Combine
 
different
 
conditional
 
types.
 
Common
 
mix:
 
If
 
+
 
Past
 
Perfect,
 
Would
 
+
 
base
 
verb.
 
Used
 
for
 
a
 
hypothetical
 
condition
 
in
 
the
 
past
 
with
 
a
 
hypothetical
 
result
 
in
 
the
 
present
 
(e.g.,
 
'If
 
I
 
had
 
studied
 
harder,
 
I
 
would
 
be
 
a
 
doctor
 
now.'
 
-
 
I
 
didn't
 
study,
 
so
 
I'm
 
not
 
a
 
doctor
 
now).",
 
      
explanationDe:
 
"**Typ
 
2
 
Konditionalsatz
 
(Irreale
 
Gegenwart/Zukunft):**
 
If
 
+
 
Simple
 
Past,
 
Would
 
+
 
Grundform
 
des
 
Verbs.
 
Wird
 
für
 
hypothetische
 
Situationen
 
in
 
der
 
Gegenwart
 
oder
 
Zukunft
 
verwendet,
 
die
 
unwahrscheinlich
 
oder
 
unmöglich
 
sind
 
(z.B.
 
'Wenn
 
ich
 
im
 
Lotto
 

gewinnen
 
würde,
 
würde
 
ich
 
die
 
Welt
 
bereisen.'
 
-
 
aber
 
ich
 
werde
 
wahrscheinlich
 
nicht
 
gewinnen).
 
Er
 
drückt
 
Vorstellung
 
oder
 
unwahrscheinliche
 
Szenarien
 
aus.
 
**Typ
 
3
 
Konditionalsatz
 
(Irreale
 
Vergangenheit):**
 
If
 
+
 
Plusquamperfekt,
 
Would
 
have
 
+
 
Partizip
 
II.
 
Wird
 
für
 
hypothetische
 
Situationen
 
in
 
der
 
Vergangenheit
 
verwendet,
 
die
 
nicht
 
eingetreten
 
sind,
 
und
 
deren
 
hypothetisches
 
Ergebnis
 
in
 
der
 
Vergangenheit
 
(z.B.
 
'Wenn
 
ich
 
gewusst
 
hätte,
 
hätte
 
ich
 
dir
 
geholfen.'
 
-
 
aber
 
ich
 
wusste
 
es
 
nicht,
 
also
 
habe
 
ich
 
nicht
 
geholfen).
 
Es
 
drückt
 
Bedauern
 
oder
 
Erleichterung
 
über
 
vergangene
 
Ereignisse
 
aus.
 
**Gemischte
 
Konditionalsätze:**
 
Kombinieren
 
verschiedene
 
Konditionalsatztypen.
 
Häufige
 
Mischung:
 
If
 
+
 
Plusquamperfekt,
 
Would
 
+
 
Grundform
 
des
 
Verbs.
 
Wird
 
für
 
eine
 
hypothetische
 
Bedingung
 
in
 
der
 
Vergangenheit
 
mit
 
einem
 
hypothetischen
 
Ergebnis
 
in
 
der
 
Gegenwart
 
verwendet
 
(z.B.
 
'Wenn
 
ich
 
härter
 
gelernt
 
hätte,
 
wäre
 
ich
 
jetzt
 
Arzt.'
 
-
 
Ich
 
habe
 
nicht
 
gelernt,
 
also
 
bin
 
ich
 
jetzt
 
kein
 
Arzt).",
 
//
 
German,
 
needs
 
Amharic
 
translation
 
      
examples:
 
[
 
        
{
 
en:
 
"If
 
I
 
were
 
a
 
bird,
 
I
 
would
 
fly.",
 
de:
 
"Wenn
 
ich
 
ein
 
Vogel
 
wäre,
 
würde
 
ich
 
fliegen."
 
},
 
        
{
 
en:
 
"If
 
she
 
had
 
left
 
earlier,
 
she
 
wouldn't
 
have
 
missed
 
the
 
train.",
 
de:
 
"Wenn
 
sie
 
früher
 
gegangen
 
wäre,
 
hätte
 
sie
 
den
 
Zug
 
nicht
 
verpasst."
 
},
 
        
{
 
en:
 
"If
 
I
 
had
 
taken
 
that
 
job,
 
I
 
would
 
be
 
living
 
in
 
New
 
York
 
now.",
 
de:
 
"Wenn
 
ich
 
diesen
 
Job
 
angenommen
 
hätte,
 
würde
 
ich
 
jetzt
 
in
 
New
 
York
 
leben."
 
},
 
        
{
 
en:
 
"If
 
he
 
spoke
 
German,
 
he
 
would
 
understand
 
the
 
instructions.",
 
de:
 
"Wenn
 
er
 
Deutsch
 
spräche,
 
würde
 
er
 
die
 
Anweisungen
 
verstehen."
 
},
 
        
{
 
en:
 
"If
 
they
 
had
 
invited
 
me,
 
I
 
would
 
have
 
gone
 
to
 
the
 
party.",
 
de:
 
"Wenn
 
sie
 
mich
 
eingeladen
 
hätten,
 
wäre
 
ich
 
zur
 
Party
 
gegangen."
 
}
 
      
],
 
    
},
 
    
reading:
 
{
 
      
title:
 
"Visions
 
for
 
a
 
Sustainable
 
Future",
 
      
text:
 
"Many
 
people
 
believe
 
that
 
if
 
we
 
acted
 
now,
 
we
 
could
 
prevent
 
the
 
worst
 
effects
 
of
 
climate
 
change.
 
If
 
governments
 
had
 
invested
 
more
 
in
 
renewable
 
energy
 
decades
 
ago,
 
we
 
wouldn't
 
be
 
facing
 
such
 
a
 
crisis
 
today.
 
If
 
individuals
 
adopted
 
more
 
sustainable
 
lifestyles,
 
it
 
would
 
make
 
a
 
significant
 
difference.
 
However,
 
if
 
we
 
don't
 
work
 
together
 
globally,
 
solving
 
these
 
complex
 
issues
 
will
 
be
 
impossible.
 
If
 
future
 
generations
 
are
 
to
 
thrive,
 
we
 
must
 
prioritize
 
peace,
 
equality,
 
and
 
responsible
 
technological
 
advancement.
 
The
 
question
 
is,
 
if
 
we
 
don't
 
learn
 
from
 
our
 
past
 
mistakes,
 
what
 
kind
 
of
 
future
 
will
 
we
 
create?",
 
      
task:
 
"Identify
 
examples
 
of
 
Type
 
2,
 
Type
 
3,
 
and
 
Mixed
 
Conditionals.
 
Explain
 
the
 
condition
 
and
 
result
 
for
 
each.
 
What
 
global
 
challenges
 
are
 
mentioned?
 
What
 
solutions
 
are
 
suggested?
 
What
 
is
 
the
 
main
 
message
 
about
 
the
 
future?",
 
    
},
 
    
speaking:
 
[
 
      
"Discuss
 
a
 
major
 
global
 
issue
 
and
 
propose
 
solutions.",
 
      
"If
 
you
 
could
 
go
 
back
 
in
 
time
 
and
 
change
 
one
 
historical
 
event,
 
what
 
would
 
it
 
be
 
and
 
why?",
 
      
"Talk
 
about
 
how
 
technology
 
might
 
solve
 
some
 
of
 
the
 
world's
 
biggest
 
problems.",
 
      
"Discuss
 
the
 
concept
 
of
 
'utopia'
 
and
 
'dystopia'
 
in
 
relation
 
to
 
future
 
societies.",
 
      
"If
 
you
 
had
 
to
 
predict
 
one
 
major
 
change
 
for
 
the
 
world
 
in
 
the
 
next
 
50
 
years,
 
what
 
would
 
it
 
be?"
 
    
],
 

    
writing:
 
"Write
 
an
 
essay
 
(150-180
 
words)
 
reflecting
 
on
 
a
 
global
 
issue.
 
Discuss
 
what
 
could
 
have
 
been
 
done
 
differently
 
in
 
the
 
past
 
(using
 
Third
 
Conditional)
 
and
 
what
 
actions
 
we
 
should
 
take
 
now
 
to
 
ensure
 
a
 
better
 
future
 
(using
 
Mixed
 
Conditionals
 
or
 
other
 
future
 
forms).",
 
    
quiz:
 
[
 
      
{
 
        
q:
 
"If
 
I
 
___
 
(win)
 
the
 
lottery,
 
I
 
___
 
(buy)
 
a
 
big
 
house.",
 
        
choices:
 
["won
 
/
 
would
 
buy",
 
"win
 
/
 
will
 
buy",
 
"had
 
won
 
/
 
would
 
have
 
bought",
 
"would
 
win
 
/
 
bought"],
 
        
answer:
 
0,
 
        
explanation:
 
"Type
 
2
 
Conditional:
 
unreal
 
present/future
 
situation
 
and
 
its
 
hypothetical
 
result.",
 
      
},
 
      
{
 
        
q:
 
"If
 
I
 
___
 
(know)
 
you
 
were
 
coming,
 
I
 
___
 
(bake)
 
a
 
cake.",
 
        
choices:
 
["knew
 
/
 
baked",
 
"had
 
known
 
/
 
would
 
have
 
baked",
 
"know
 
/
 
will
 
bake",
 
"would
 
know
 
/
 
bake"],
 
        
answer:
 
1,
 
        
explanation:
 
"Type
 
3
 
Conditional:
 
unreal
 
past
 
condition
 
and
 
its
 
unreal
 
past
 
result.",
 
      
},
 
      
{
 
        
q:
 
"We
 
___
 
(go)
 
to
 
the
 
concert
 
if
 
we
 
___
 
(not
 
have)
 
to
 
work.",
 
        
choices:
 
["would
 
go
 
/
 
didn't
 
have",
 
"would
 
have
 
gone
 
/
 
hadn't
 
had",
 
"went
 
/
 
didn't
 
have",
 
"will
 
go
 
/
 
don't
 
have"],
 
        
answer:
 
1,
 
        
explanation:
 
"Third
 
Conditional:
 
unreal
 
past
 
action
 
(not
 
having
 
to
 
work)
 
and
 
its
 
unreal
 
past
 
result
 
(going
 
to
 
the
 
concert).",
 
      
}
 
    
],
 
  
},
 
];
 
 
//
 
---------------------------
 
//
 
Main
 
App
 
Component
 
//
 
---------------------------
 
function
 
App()
 
{
 
  
const
 
[activeUnit,
 
setActiveUnit]
 
=
 
useState(1);
 
  
const
 
[activeSection,
 
setActiveSection]
 
=
 
useState("overview");
 
//
 
overview,
 
vocabulary,
 
grammar,
 
reading,
 
speaking,
 
writing,
 
quiz
 
  
const
 
[selectedAnswer,
 
setSelectedAnswer]
 
=
 
useState(null);
 
  
const
 
[showExplanation,
 
setShowExplanation]
 
=
 
useState(false);
 
  
const
 
[quizScore,
 
setQuizScore]
 
=
 
useState(0);
 
  
const
 
[quizzesCompleted,
 
setQuizzesCompleted]
 
=
 
useState(0);
 
  
const
 
[showQuizResult,
 
setShowQuizResult]
 
=
 
useState(false);
 
  
const
 
[selectedTheme,
 
setSelectedTheme]
 
=
 
useState("violet");
 

  
const
 
[isSidebarOpen,
 
setIsSidebarOpen]
 
=
 
useState(true);
 
 
  
//
 
AI
 
states
 
  
const
 
[aiLoading,
 
setAiLoading]
 
=
 
useState(false);
 
  
const
 
[aiInput,
 
setAiInput]
 
=
 
useState("");
 
  
const
 
[aiResponse,
 
setAiResponse]
 
=
 
useState("");
 
  
const
 
[aiError,
 
setAiError]
 
=
 
useState(null);
 
  
const
 
[aiFeatureMode,
 
setAiFeatureMode]
 
=
 
useState(null);
 
//
 
'lesson',
 
'rephrase',
 
'grammar'
 
 
  
//
 
Vocabulary
 
Modal
 
states
 
(moved
 
to
 
be
 
explicitly
 
with
 
other
 
state
 
declarations)
 
  
const
 
[vocabModalOpen,
 
setVocabModalOpen]
 
=
 
useState(false);
 
 
  
const
 
[vocabModalContent,
 
setVocabModalContent]
 
=
 
useState({
 
word:
 
'',
 
definition:
 
'',
 
translation:
 
''
 
});
 
 
  
//
 
Firebase
 
states
 
  
const
 
[loadingFirebase,
 
setLoadingFirebase]
 
=
 
useState(true);
 
  
const
 
[firebaseError,
 
setFirebaseError]
 
=
 
useState(null);
 
  
const
 
[fbDb,
 
setFbDb]
 
=
 
useState(null);
 
  
const
 
[fbAuth,
 
setFbAuth]
 
=
 
useState(null);
 
  
const
 
[userId,
 
setUserId]
 
=
 
useState(null);
 
  
const
 
[userProgress,
 
setUserProgress]
 
=
 
useState({});
 
 
  
//
 
Dynamic
 
Firebase
 
Import
 
and
 
Initialization
 
  
useEffect(()
 
=>
 
{
 
    
const
 
initFirebase
 
=
 
async
 
()
 
=>
 
{
 
      
try
 
{
 
        
const
 
{
 
initializeApp
 
}
 
=
 
await
 
import("https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js");
 
        
const
 
{
 
getAuth,
 
signInAnonymously,
 
signInWithCustomToken,
 
onAuthStateChanged
 
}
 
=
 
await
 
import("https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js");
 
        
const
 
{
 
getFirestore,
 
collection,
 
onSnapshot,
 
addDoc,
 
doc,
 
setDoc
 
}
 
=
 
await
 
import("https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js");
 
 
        
const
 
appId
 
=
 
typeof
 
__app_id
 
!==
 
'undefined'
 
?
 
__app_id
 
:
 
'default-app-id';
 
        
const
 
firebaseConfig
 
=
 
typeof
 
__firebase_config
 
!==
 
'undefined'
 
?
 
JSON.parse(__firebase_config)
 
:
 
{};
 
 
        
const
 
app
 
=
 
initializeApp(firebaseConfig);
 
        
const
 
db
 
=
 
getFirestore(app);
 
        
const
 
auth
 
=
 
getAuth(app);
 
        
setFbDb(db);
 
        
setFbAuth(auth);
 
 
        
onAuthStateChanged(auth,
 
async
 
(user)
 
=>
 
{
 

          
if
 
(user)
 
{
 
            
setUserId(user.uid);
 
            
//
 
Fetch
 
user
 
progress
 
            
const
 
userProgressCollectionRef
 
=
 
collection(db,
 
`artifacts/${appId}/users/${user.uid}/userProgress`);
 
            
onSnapshot(userProgressCollectionRef,
 
(snapshot)
 
=>
 
{
 
              
const
 
progressData
 
=
 
{};
 
              
snapshot.docs.forEach(doc
 
=>
 
{
 
                
progressData[doc.id]
 
=
 
doc.data();
 
              
});
 
              
setUserProgress(progressData);
 
              
console.log("User
 
progress
 
fetched:",
 
progressData);
 
            
});
 
          
}
 
else
 
{
 
            
//
 
Sign
 
in
 
anonymously
 
if
 
no
 
user
 
is
 
signed
 
in
 
            
try
 
{
 
              
if
 
(typeof
 
__initial_auth_token
 
!==
 
'undefined')
 
{
 
                
await
 
signInWithCustomToken(auth,
 
__initial_auth_token);
 
              
}
 
else
 
{
 
                
await
 
signInAnonymously(auth);
 
              
}
 
            
}
 
catch
 
(anonError)
 
{
 
              
console.error("Anonymous
 
sign-in
 
failed:",
 
anonError);
 
              
setFirebaseError("Failed
 
to
 
authenticate.
 
Please
 
try
 
again
 
later.");
 
            
}
 
          
}
 
          
setLoadingFirebase(false);
 
        
});
 
 
      
}
 
catch
 
(error)
 
{
 
        
console.error("Failed
 
to
 
load
 
or
 
initialize
 
Firebase:",
 
error);
 
        
setFirebaseError("Failed
 
to
 
load
 
app
 
data.
 
Please
 
try
 
again
 
later.");
 
        
setLoadingFirebase(false);
 
      
}
 
    
};
 
 
    
initFirebase();
 
  
},
 
[]);
 
 
 
  
const
 
currentUnit
 
=
 
useMemo(()
 
=>
 
courseData.find(unit
 
=>
 
unit.id
 
===
 
activeUnit),
 
[activeUnit]);
 
  
const
 
themes
 
=
 
useMemo(()
 
=>
 
Object.keys(colorThemes),
 
[]);
 
 

  
//
 
Define
 
the
 
callGeminiApi
 
function
 
(memoized)
 
  
const
 
callGeminiApi
 
=
 
useCallback(async
 
(prompt,
 
generationConfig
 
=
 
{})
 
=>
 
{
 
    
setAiLoading(true);
 
    
setAiError(null);
 
 
    
let
 
chatHistory
 
=
 
[];
 
    
chatHistory.push({
 
role:
 
"user",
 
parts:
 
[{
 
text:
 
prompt
 
}]
 
});
 
    
const
 
payload
 
=
 
{
 
contents:
 
chatHistory,
 
generationConfig
 
};
 
 
    
const
 
apiKey
 
=
 
"";
 
//
 
Canvas
 
will
 
automatically
 
provide
 
it
 
in
 
runtime
 
    
const
 
apiUrl
 
=
 
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:gen
erateContent?key=${apiKey}`;
 
 
    
let
 
response
 
=
 
null;
 
    
let
 
result
 
=
 
null;
 
    
let
 
retries
 
=
 
0;
 
    
const
 
maxRetries
 
=
 
3;
 
    
const
 
baseDelay
 
=
 
1000;
 
//
 
1
 
second
 
 
    
while
 
(retries
 
<
 
maxRetries)
 
{
 
      
try
 
{
 
        
response
 
=
 
await
 
fetch(apiUrl,
 
{
 
          
method:
 
'POST',
 
          
headers:
 
{
 
'Content-Type':
 
'application/json'
 
},
 
          
body:
 
JSON.stringify(payload)
 
        
});
 
 
        
if
 
(response.ok)
 
{
 
          
result
 
=
 
await
 
response.json();
 
          
if
 
(result.candidates
 
&&
 
result.candidates.length
 
>
 
0
 
&&
 
            
result.candidates[0].content
 
&&
 
result.candidates[0].content.parts
 
&&
 
            
result.candidates[0].content.parts.length
 
>
 
0)
 
{
 
            
const
 
text
 
=
 
result.candidates[0].content.parts[0].text;
 
            
setAiLoading(false);
 
            
return
 
text;
 
//
 
Return
 
the
 
text
 
directly
 
          
}
 
else
 
{
 
            
throw
 
new
 
Error("Unexpected
 
API
 
response
 
structure
 
or
 
no
 
content.");
 
          
}
 
        
}
 
else
 
if
 
(response.status
 
===
 
429)
 
{
 
//
 
Too
 
Many
 
Requests
 
          
const
 
delay
 
=
 
baseDelay
 
*
 
Math.pow(2,
 
retries);
 
          
retries++;
 
          
console.warn(`Rate
 
limit
 
exceeded.
 
Retrying
 
in
 
${delay
 
/
 
1000}
 
seconds...
 
(Attempt
 
${retries}/${maxRetries})`);
 

          
await
 
new
 
Promise(res
 
=>
 
setTimeout(res,
 
delay));
 
        
}
 
else
 
{
 
          
throw
 
new
 
Error(`API
 
error:
 
${response.status}
 
${response.statusText}`);
 
        
}
 
      
}
 
catch
 
(error)
 
{
 
        
setAiLoading(false);
 
        
setAiError(`Failed
 
to
 
get
 
AI
 
response:
 
${error.message}`);
 
        
console.error("Error
 
calling
 
Gemini
 
API:",
 
error);
 
        
return
 
null;
 
//
 
Return
 
null
 
on
 
error
 
      
}
 
    
}
 
    
setAiLoading(false);
 
    
setAiError("Max
 
retries
 
exceeded.
 
Please
 
try
 
again
 
later.");
 
    
return
 
null;
 
//
 
Return
 
null
 
if
 
max
 
retries
 
reached
 
  
},
 
[]);
 
 
  
const
 
handleGenerateAIResponse
 
=
 
useCallback(async
 
()
 
=>
 
{
 
    
setAiLoading(true);
 
    
setAiResponse("");
 
//
 
Clear
 
previous
 
AI
 
response
 
    
setAiError(null);
 
//
 
Clear
 
previous
 
AI
 
error
 
 
    
if
 
(!aiInput
 
&&
 
aiFeatureMode
 
!==
 
'lesson')
 
{
 
      
setAiError("Please
 
enter
 
text
 
for
 
the
 
AI
 
assistant.");
 
      
return;
 
    
}
 
 
    
let
 
prompt
 
=
 
"";
 
    
if
 
(aiFeatureMode
 
===
 
'lesson')
 
{
 
      
prompt
 
=
 
`As
 
an
 
English
 
B1
 
tutor,
 
generate
 
${aiInput
 
||
 
'more
 
examples'}
 
for
 
the
 
current
 
unit's
 
${activeSection}
 
section.
 
      
Current
 
Unit:
 
${currentUnit.title}.
 
      
Current
 
Section:
 
${activeSection}.
 
      
${activeSection
 
===
 
'grammar'
 
&&
 
currentUnit.grammar
 
?
 
`Grammar
 
Topic:
 
${currentUnit.grammar.topicEn}.
 
Explanation:
 
${currentUnit.grammar.explanationEn}.`
 
:
 
''}
 
      
${activeSection
 
===
 
'vocabulary'
 
&&
 
currentUnit.vocabulary
 
?
 
`Vocabulary
 
list:
 
${currentUnit.vocabulary.join(',
 
')}.`
 
:
 
''}
 
      
Focus
 
on
 
practical,
 
B1-level
 
English.
 
Provide
 
the
 
response
 
clearly
 
and
 
concisely.`;
 
    
}
 
else
 
if
 
(aiFeatureMode
 
===
 
'rephrase')
 
{
 
      
prompt
 
=
 
`Rephrase
 
the
 
following
 
English
 
text
 
for
 
a
 
B1
 
English
 
learner,
 
keeping
 
the
 
original
 
meaning:
 
"${aiInput}"`;
 
    
}
 
else
 
if
 
(aiFeatureMode
 
===
 
'grammar')
 
{
 
      
prompt
 
=
 
`Check
 
the
 
grammar
 
of
 
the
 
following
 
English
 
text
 
and
 
provide
 
corrections
 
and
 
explanations
 
for
 
a
 
B1
 
English
 
learner:
 
"${aiInput}"`;
 
    
}
 

 
    
const
 
response
 
=
 
await
 
callGeminiApi(prompt);
 
    
if
 
(response)
 
{
 
      
setAiResponse(response);
 
    
}
 
  
},
 
[aiFeatureMode,
 
aiInput,
 
currentUnit,
 
activeSection,
 
callGeminiApi]);
 
 
  
const
 
handleVocabClick
 
=
 
useCallback(async
 
(word)
 
=>
 
{
 
    
setAiLoading(true);
 
    
setAiError(null);
 
    
setVocabModalContent({
 
word:
 
word,
 
definition:
 
'Loading...',
 
translation:
 
'Loading...'
 
});
 
    
setVocabModalOpen(true);
 
 
    
let
 
prompt
 
=
 
`Provide
 
the
 
English
 
definition
 
of
 
"${word}"
 
at
 
a
 
B1
 
level,
 
and
 
its
 
Amharic
 
translation.
 
    
Format
 
the
 
response
 
as
 
JSON
 
with
 
two
 
fields:
 
"definition"
 
(string)
 
and
 
"translation"
 
(string).`;
 
 
    
let
 
generationConfig
 
=
 
{
 
      
responseMimeType:
 
"application/json",
 
      
responseSchema:
 
{
 
        
type:
 
"OBJECT",
 
        
properties:
 
{
 
          
definition:
 
{
 
type:
 
"STRING"
 
},
 
          
translation:
 
{
 
type:
 
"STRING"
 
}
 
        
},
 
        
propertyOrdering:
 
["definition",
 
"translation"]
 
      
}
 
    
};
 
 
    
let
 
response
 
=
 
null;
 
    
let
 
result
 
=
 
null;
 
    
let
 
retries
 
=
 
0;
 
    
const
 
maxRetries
 
=
 
3;
 
    
const
 
baseDelay
 
=
 
1000;
 
 
    
while
 
(retries
 
<
 
maxRetries)
 
{
 
      
try
 
{
 
        
response
 
=
 
await
 
fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-2
0:generateContent?key=`,
 
{
 
          
method:
 
'POST',
 
          
headers:
 
{
 
'Content-Type':
 
'application/json'
 
},
 
          
body:
 
JSON.stringify({
 
            
contents:
 
[{
 
role:
 
"user",
 
parts:
 
[{
 
text:
 
prompt
 
}]
 
}],
 

            
generationConfig:
 
generationConfig
 
          
})
 
        
});
 
 
        
if
 
(response.ok)
 
{
 
          
result
 
=
 
await
 
response.json();
 
          
if
 
(result.candidates
 
&&
 
result.candidates.length
 
>
 
0
 
&&
 
            
result.candidates[0].content
 
&&
 
result.candidates[0].content.parts
 
&&
 
            
result.candidates[0].content.parts.length
 
>
 
0)
 
{
 
            
const
 
jsonString
 
=
 
result.candidates[0].content.parts[0].text;
 
            
const
 
parsedJson
 
=
 
JSON.parse(jsonString);
 
            
setVocabModalContent({
 
word:
 
word,
 
definition:
 
parsedJson.definition,
 
translation:
 
parsedJson.translation
 
});
 
            
setAiLoading(false);
 
            
return;
 
          
}
 
else
 
{
 
            
throw
 
new
 
Error("Unexpected
 
API
 
response
 
structure
 
or
 
no
 
content.");
 
          
}
 
        
}
 
else
 
if
 
(response.status
 
===
 
429)
 
{
 
          
const
 
delay
 
=
 
baseDelay
 
*
 
Math.pow(2,
 
retries);
 
          
retries++;
 
          
console.warn(`Rate
 
limit
 
exceeded
 
for
 
vocab.
 
Retrying
 
in
 
${delay
 
/
 
1000}
 
seconds...
 
(Attempt
 
${retries}/${maxRetries})`);
 
          
await
 
new
 
Promise(res
 
=>
 
setTimeout(res,
 
delay));
 
        
}
 
else
 
{
 
          
throw
 
new
 
Error(`API
 
error
 
for
 
vocab:
 
${response.status}
 
${response.statusText}`);
 
        
}
 
      
}
 
catch
 
(error)
 
{
 
        
console.error("Error
 
fetching
 
vocabulary
 
definition:",
 
error);
 
        
setAiError(`Failed
 
to
 
get
 
definition:
 
${error.message}`);
 
        
setVocabModalContent({
 
word:
 
word,
 
definition:
 
'Error
 
loading
 
definition.',
 
translation:
 
'Error
 
loading
 
translation.'
 
});
 
        
break;
 
//
 
Exit
 
loop
 
on
 
critical
 
error
 
or
 
after
 
max
 
retries
 
      
}
 
    
}
 
    
setAiLoading(false);
 
    
setAiError(null);
 
  
},
 
[]);
 
 
 
  
const
 
handleNextUnit
 
=
 
useCallback(()
 
=>
 
{
 
    
setActiveUnit(prev
 
=>
 
(prev
 
<
 
courseData.length
 
?
 
prev
 
+
 
1
 
:
 
prev));
 
    
setActiveSection("overview");
 
    
setSelectedAnswer(null);
 

    
setShowExplanation(false);
 
    
setShowQuizResult(false);
 
    
setQuizScore(0);
 
    
//
 
Reset
 
AI
 
states
 
when
 
changing
 
unit
 
    
setAiFeatureMode(null);
 
    
setAiInput("");
 
    
setAiResponse("");
 
    
setAiError(null);
 
  
},
 
[]);
 
 
  
const
 
handlePreviousUnit
 
=
 
useCallback(()
 
=>
 
{
 
    
setActiveUnit(prev
 
=>
 
(prev
 
>
 
1
 
?
 
prev
 
-
 
1
 
:
 
prev));
 
    
setActiveSection("overview");
 
    
setSelectedAnswer(null);
 
    
setShowExplanation(false);
 
    
setShowQuizResult(false);
 
    
setQuizScore(0);
 
    
//
 
Reset
 
AI
 
states
 
when
 
changing
 
unit
 
    
setAiFeatureMode(null);
 
    
setAiInput("");
 
    
setAiResponse("");
 
    
setAiError(null);
 
  
},
 
[]);
 
 
  
const
 
handleSelectSection
 
=
 
useCallback((section)
 
=>
 
{
 
    
setActiveSection(section);
 
    
setSelectedAnswer(null);
 
    
setShowExplanation(false);
 
    
setShowQuizResult(false);
 
    
setQuizScore(0);
 
    
//
 
Reset
 
AI
 
states
 
when
 
changing
 
section
 
    
setAiFeatureMode(null);
 
    
setAiInput("");
 
    
setAiResponse("");
 
    
setAiError(null);
 
  
},
 
[]);
 
 
  
const
 
handleAnswerQuiz
 
=
 
useCallback((questionIndex,
 
choiceIndex)
 
=>
 
{
 
    
if
 
(selectedAnswer
 
!==
 
null)
 
return;
 
//
 
Prevent
 
re-answering
 
    
setSelectedAnswer(choiceIndex);
 
    
setShowExplanation(true);
 
 
    
const
 
isCorrect
 
=
 
currentUnit.quiz[questionIndex].answer
 
===
 
choiceIndex;
 
    
if
 
(isCorrect)
 
{
 

      
setQuizScore(prevScore
 
=>
 
prevScore
 
+
 
1);
 
    
}
 
  
},
 
[currentUnit,
 
selectedAnswer]);
 
 
  
const
 
handleSubmitQuiz
 
=
 
useCallback(async
 
()
 
=>
 
{
 
    
setShowQuizResult(true);
 
    
setQuizzesCompleted(prev
 
=>
 
prev
 
+
 
1);
 
 
    
if
 
(fbDb
 
&&
 
userId
 
&&
 
currentUnit)
 
{
 
      
const
 
appId
 
=
 
typeof
 
__app_id
 
!==
 
'undefined'
 
?
 
__app_id
 
:
 
'default-app-id';
 
      
const
 
userDocRef
 
=
 
doc(fbDb,
 
`artifacts/${appId}/users/${userId}/userProgress`,
 
`unit-${currentUnit.id}`);
 
      
try
 
{
 
        
await
 
setDoc(userDocRef,
 
{
 
          
unitId:
 
currentUnit.id,
 
          
title:
 
currentUnit.title,
 
          
completed:
 
true,
 
          
score:
 
quizScore,
 
          
totalQuestions:
 
currentUnit.quiz.length,
 
          
timestamp:
 
new
 
Date()
 
        
},
 
{
 
merge:
 
true
 
});
 
//
 
Use
 
merge:
 
true
 
to
 
avoid
 
overwriting
 
other
 
fields
 
        
console.log(`Progress
 
saved
 
for
 
unit
 
${currentUnit.id}`);
 
      
}
 
catch
 
(e)
 
{
 
        
console.error("Error
 
saving
 
document:
 
",
 
e);
 
      
}
 
    
}
 
  
},
 
[quizScore,
 
fbDb,
 
userId,
 
currentUnit]);
 
 
 
  
const
 
currentTheme
 
=
 
colorThemes[selectedTheme];
 
 
  
const
 
toggleSidebar
 
=
 
useCallback(()
 
=>
 
{
 
    
setIsSidebarOpen(prev
 
=>
 
!prev);
 
  
},
 
[]);
 
 
  
//
 
UI
 
elements
 
for
 
AI
 
features
 
(placeholders,
 
actual
 
logic
 
not
 
implemented
 
here)
 
  
const
 
renderAIFeatures
 
=
 
()
 
=>
 
(
 
    
<div
 
className={`mt-6
 
p-4
 
rounded-lg
 
shadow-inner
 
${currentTheme.bg}
 
bg-opacity-30
 
border
 
${currentTheme.border}`}>
 
      
<h3
 
className={`text-xl
 
font-bold
 
${currentTheme.text}
 
mb-4
 
flex
 
items-center`}>
 
        
<BrainCircuit
 
size={20}
 
className="mr-2"
 
/>
 
AI
 
Assistant
 
      
</h3>
 
      
<div
 
className="flex
 
flex-col
 
sm:flex-row
 
gap-3
 
mb-4">
 
        
<button
 

          
onClick={()
 
=>
 
{
 
setAiFeatureMode('lesson');
 
setAiInput('');
 
setAiResponse('');
 
setAiError(null);
 
}}
 
          
className={`w-full
 
py-2
 
px-4
 
rounded-md
 
flex
 
items-center
 
justify-center
 
transition-all
 
duration-300
 
                     
bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
hover:shadow-lg`}
 
        
>
 
          
<Sparkles
 
size={18}
 
className="mr-2"
 
/>
 
Lesson
 
Generator
 
        
</button>
 
        
<button
 
          
onClick={()
 
=>
 
{
 
setAiFeatureMode('rephrase');
 
setAiInput('');
 
setAiResponse('');
 
setAiError(null);
 
}}
 
          
className={`w-full
 
py-2
 
px-4
 
rounded-md
 
flex
 
items-center
 
justify-center
 
transition-all
 
duration-300
 
                     
bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
hover:shadow-lg`}
 
        
>
 
          
<Pencil
 
size={18}
 
className="mr-2"
 
/>
 
Rephrase
 
Text
 
        
</button>
 
        
<button
 
          
onClick={()
 
=>
 
{
 
setAiFeatureMode('grammar');
 
setAiInput('');
 
setAiResponse('');
 
setAiError(null);
 
}}
 
          
className={`w-full
 
py-2
 
px-4
 
rounded-md
 
flex
 
items-center
 
justify-center
 
transition-all
 
duration-300
 
                     
bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
hover:shadow-lg`}
 
        
>
 
          
<CheckCircle2
 
size={18}
 
className="mr-2"
 
/>
 
Check
 
Grammar
 
        
</button>
 
      
</div>
 
 
      
{aiFeatureMode
 
&&
 
(
 
        
<motion.div
 
          
initial={{
 
opacity:
 
0,
 
y:
 
10
 
}}
 
          
animate={{
 
opacity:
 
1,
 
y:
 
0
 
}}
 
          
exit={{
 
opacity:
 
0,
 
y:
 
-10
 
}}
 
          
transition={{
 
duration:
 
0.2
 
}}
 
          
className="p-3
 
border
 
rounded-md
 
bg-white
 
bg-opacity-80"
 
        
>
 
          
<p
 
className={`${currentTheme.text}
 
text-sm
 
font-medium
 
flex
 
items-center
 
mb-2`}>
 
            
<Bot
 
size={16}
 
className="mr-1"
 
/>
 
AI
 
Prompt:
 
          
</p>
 
          
<textarea
 
            
className="w-full
 
p-2
 
border
 
border-gray-300
 
rounded-md
 
focus:outline-none
 
focus:ring-2
 
focus:ring-violet-300
 
resize-y"
 
            
placeholder={
 
              
aiFeatureMode
 
===
 
'lesson'
 

                
?
 
`Enter
 
specific
 
topic
 
or
 
type
 
"more
 
examples"
 
for
 
current
 
section:
 
${activeSection}`
 
                
:
 
aiFeatureMode
 
===
 
'rephrase'
 
                  
?
 
"Enter
 
text
 
to
 
rephrase..."
 
                  
:
 
"Enter
 
text
 
to
 
check
 
grammar..."
 
            
}
 
            
value={aiInput}
 
            
onChange={(e)
 
=>
 
setAiInput(e.target.value)}
 
          
></textarea>
 
          
<button
 
            
onClick={handleGenerateAIResponse}
 
            
disabled={aiLoading}
 
            
className={`w-full
 
mt-3
 
py-2
 
px-4
 
rounded-md
 
flex
 
items-center
 
justify-center
 
transition-all
 
duration-300
 
                       
${aiLoading
 
?
 
'bg-gray-400
 
cursor-not-allowed'
 
:
 
`bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
hover:shadow-lg`}`}
 
          
>
 
            
{aiLoading
 
?
 
(
 
              
<svg
 
className="animate-spin
 
h-5
 
w-5
 
mr-3
 
text-white"
 
xmlns="http://www.w3.org/2000/svg"
 
fill="none"
 
viewBox="0
 
0
 
24
 
24">
 
                
<circle
 
className="opacity-25"
 
cx="12"
 
cy="12"
 
r="10"
 
stroke="currentColor"
 
strokeWidth="4"></circle>
 
                
<path
 
className="opacity-75"
 
fill="currentColor"
 
d="M4
 
12a8
 
8
 
0
 
018-8V0C5.373
 
0
 
0
 
5.373
 
0
 
12h4zm2
 
5.291A7.962
 
7.962
 
0
 
014
 
12H0c0
 
3.042
 
1.135
 
5.824
 
3
 
7.938l3-2.647z"></path>
 
              
</svg>
 
            
)
 
:
 
null}
 
            
Generate
 
AI
 
Response
 
          
</button>
 
          
{aiError
 
&&
 
<p
 
className="text-red-600
 
text-sm
 
mt-2">{aiError}</p>}
 
          
{aiResponse
 
&&
 
(
 
            
<div
 
className="mt-4
 
p-3
 
bg-gray-50
 
rounded-md
 
border
 
border-gray-200">
 
              
<p
 
className="font-semibold
 
text-gray-700">AI
 
Response:</p>
 
              
<p
 
className="text-gray-600
 
whitespace-pre-wrap">{aiResponse}</p>
 
            
</div>
 
          
)}
 
        
</motion.div>
 
      
)}
 
    
</div>
 
  
);
 
 
  
const
 
renderSectionContent
 
=
 
()
 
=>
 
{
 
    
if
 
(!currentUnit)
 
return
 
<p
 
className="text-center
 
text-gray-600">No
 
unit
 
selected.</p>;
 
 
    
switch
 
(activeSection)
 
{
 

      
case
 
"overview":
 
        
return
 
(
 
          
<motion.div
 
            
initial={{
 
opacity:
 
0,
 
y:
 
20
 
}}
 
            
animate={{
 
opacity:
 
1,
 
y:
 
0
 
}}
 
            
exit={{
 
opacity:
 
0,
 
y:
 
-20
 
}}
 
            
transition={{
 
duration:
 
0.3
 
}}
 
            
className="space-y-4"
 
          
>
 
            
<h2
 
className={`text-2xl
 
font-bold
 
${currentTheme.text}
 
flex
 
items-center`}>
 
              
<BookOpen
 
size={24}
 
className="mr-2"
 
/>
 
Overview
 
            
</h2>
 
            
<p
 
className="text-gray-700
 
leading-relaxed">{currentUnit.overview}</p>
 
          
</motion.div>
 
        
);
 
      
case
 
"vocabulary":
 
        
return
 
(
 
          
<motion.div
 
            
initial={{
 
opacity:
 
0,
 
y:
 
20
 
}}
 
            
animate={{
 
opacity:
 
1,
 
y:
 
0
 
}}
 
            
exit={{
 
opacity:
 
0,
 
y:
 
-20
 
}}
 
            
transition={{
 
duration:
 
0.3
 
}}
 
            
className="space-y-4"
 
          
>
 
            
<h2
 
className={`text-2xl
 
font-bold
 
${currentTheme.text}
 
flex
 
items-center`}>
 
              
<Languages
 
size={24}
 
className="mr-2"
 
/>
 
Vocabulary
 
            
</h2>
 
            
<div
 
className="flex
 
flex-wrap
 
gap-2">
 
              
{currentUnit.vocabulary.map((word,
 
index)
 
=>
 
(
 
                
<button
 
                  
key={index}
 
                  
onClick={()
 
=>
 
handleVocabClick(word)}
 
                  
className={`inline-block
 
px-4
 
py-2
 
rounded-full
 
border
 
${currentTheme.border}
 
${currentTheme.text}
 
bg-white
 
transition-all
 
duration-200
 
hover:scale-105
 
cursor-pointer
 
text-sm
 
font-medium`}
 
                
>
 
                  
{word}
 
                
</button>
 
              
))}
 
            
</div>
 
            
<div
 
className={`mt-6
 
p-4
 
rounded-lg
 
${currentTheme.bg}
 
bg-opacity-60
 
border
 
${currentTheme.border}`}>
 
              
<h3
 
className={`font-semibold
 
text-lg
 
${currentTheme.text}
 
mb-2`}>Examples:</h3>
 
              
<ul
 
className="list-disc
 
list-inside
 
text-gray-700
 
space-y-1">
 

                
{currentUnit.vocabExamples.en.map((ex,
 
i)
 
=>
 
(
 
                  
<li
 
                    
key={i}>{ex}
 
<span
 
className="text-gray-500
 
text-sm">
 
                      
{/*
 
Placeholder
 
for
 
Amharic
 
translation
 
for
 
static
 
examples.
 
*/}
 
                      
{/*
 
You
 
would
 
need
 
to
 
add
 
'am'
 
field
 
to
 
vocabExamples
 
and
 
grammar
 
examples
 
*/}
 
                      
{/*
 
({currentUnit.vocabExamples.am[i]
 
||
 
currentUnit.vocabExamples.de[i]})
 
*/}
 
                      
(German:
 
{currentUnit.vocabExamples.de[i]})
 
                    
</span>
 
                  
</li>
 
                
))}
 
              
</ul>
 
            
</div>
 
          
</motion.div>
 
        
);
 
      
case
 
"grammar":
 
        
return
 
(
 
          
<motion.div
 
            
initial={{
 
opacity:
 
0,
 
y:
 
20
 
}}
 
            
animate={{
 
opacity:
 
1,
 
y:
 
0
 
}}
 
            
exit={{
 
opacity:
 
0,
 
y:
 
-20
 
}}
 
            
transition={{
 
duration:
 
0.3
 
}}
 
            
className="space-y-4"
 
          
>
 
            
<h2
 
className={`text-2xl
 
font-bold
 
${currentTheme.text}
 
flex
 
items-center`}>
 
              
<Library
 
size={24}
 
className="mr-2"
 
/>
 
Grammar:
 
{currentUnit.grammar.topicEn}
 
            
</h2>
 
            
<p
 
className="text-gray-700
 
leading-relaxed
 
bg-white
 
p-4
 
rounded-md
 
shadow-sm
 
border
 
border-gray-200">
 
              
<strong
 
className={currentTheme.text}>Explanation:</strong>
 
{currentUnit.grammar.explanationEn}
 
            
</p>
 
            
{/*
 
Placeholder
 
for
 
Amharic
 
grammar
 
topic
 
and
 
explanation
 
*/}
 
            
{/*
 
<p
 
className="text-gray-700
 
leading-relaxed
 
bg-white
 
p-4
 
rounded-md
 
shadow-sm
 
border
 
border-gray-200">
 
              
<strong
 
className={currentTheme.text}>Explanation
 
(Amharic):</strong>
 
{currentUnit.grammar.explanationAm}
 
            
</p>
 
*/}
 
 
            
<div
 
className={`mt-6
 
p-4
 
rounded-lg
 
${currentTheme.bg}
 
bg-opacity-60
 
border
 
${currentTheme.border}`}>
 
              
<h3
 
className={`font-semibold
 
text-lg
 
${currentTheme.text}
 
mb-2`}>Examples:</h3>
 
              
<ul
 
className="list-disc
 
list-inside
 
text-gray-700
 
space-y-1">
 
                
{currentUnit.grammar.examples.map((ex,
 
i)
 
=>
 
(
 
                  
<li
 

                    
key={i}>{ex.en}
 
<span
 
className="text-gray-500
 
text-sm">
 
                      
{/*
 
Placeholder
 
for
 
Amharic
 
translation
 
for
 
static
 
examples.
 
*/}
 
                      
{/*
 
({ex.am
 
||
 
ex.de})
 
*/}
 
                      
(German:
 
{ex.de})
 
                    
</span>
 
                  
</li>
 
                
))}
 
              
</ul>
 
            
</div>
 
          
</motion.div>
 
        
);
 
      
case
 
"reading":
 
        
return
 
(
 
          
<motion.div
 
            
initial={{
 
opacity:
 
0,
 
y:
 
20
 
}}
 
            
animate={{
 
opacity:
 
1,
 
y:
 
0
 
}}
 
            
exit={{
 
opacity:
 
0,
 
y:
 
-20
 
}}
 
            
transition={{
 
duration:
 
0.3
 
}}
 
            
className="space-y-4"
 
          
>
 
            
<h2
 
className={`text-2xl
 
font-bold
 
${currentTheme.text}
 
flex
 
items-center`}>
 
              
<FileText
 
size={24}
 
className="mr-2"
 
/>
 
Reading:
 
{currentUnit.reading.title}
 
            
</h2>
 
            
<p
 
className="text-gray-700
 
leading-relaxed
 
bg-white
 
p-4
 
rounded-md
 
shadow-sm
 
border
 
border-gray-200">
 
              
{currentUnit.reading.text}
 
            
</p>
 
            
<div
 
className={`mt-6
 
p-4
 
rounded-lg
 
${currentTheme.bg}
 
bg-opacity-60
 
border
 
${currentTheme.border}`}>
 
              
<h3
 
className={`font-semibold
 
text-lg
 
${currentTheme.text}
 
mb-2`}>Task:</h3>
 
              
<p
 
className="text-gray-700">{currentUnit.reading.task}</p>
 
            
</div>
 
          
</motion.div>
 
        
);
 
      
case
 
"speaking":
 
        
return
 
(
 
          
<motion.div
 
            
initial={{
 
opacity:
 
0,
 
y:
 
20
 
}}
 
            
animate={{
 
opacity:
 
1,
 
y:
 
0
 
}}
 
            
exit={{
 
opacity:
 
0,
 
y:
 
-20
 
}}
 
            
transition={{
 
duration:
 
0.3
 
}}
 
            
className="space-y-4"
 
          
>
 
            
<h2
 
className={`text-2xl
 
font-bold
 
${currentTheme.text}
 
flex
 
items-center`}>
 

              
<Mic
 
size={24}
 
className="mr-2"
 
/>
 
Speaking
 
Activities
 
            
</h2>
 
            
<ul
 
className="list-disc
 
list-inside
 
text-gray-700
 
space-y-2">
 
              
{currentUnit.speaking.map((activity,
 
index)
 
=>
 
(
 
                
<li
 
                  
key={index}
 
className="bg-white
 
p-3
 
rounded-md
 
shadow-sm">{activity}</li>
 
              
))}
 
            
</ul>
 
          
</motion.div>
 
        
);
 
      
case
 
"writing":
 
        
return
 
(
 
          
<motion.div
 
            
initial={{
 
opacity:
 
0,
 
y:
 
20
 
}}
 
            
animate={{
 
opacity:
 
1,
 
y:
 
0
 
}}
 
            
exit={{
 
opacity:
 
0,
 
y:
 
-20
 
}}
 
            
transition={{
 
duration:
 
0.3
 
}}
 
            
className="space-y-4"
 
          
>
 
            
<h2
 
className={`text-2xl
 
font-bold
 
${currentTheme.text}
 
flex
 
items-center`}>
 
              
<Pencil
 
size={24}
 
className="mr-2"
 
/>
 
Writing
 
Task
 
            
</h2>
 
            
<p
 
className="text-gray-700
 
leading-relaxed
 
bg-white
 
p-4
 
rounded-md
 
shadow-sm
 
border
 
border-gray-200">
 
              
{currentUnit.writing}
 
            
</p>
 
          
</motion.div>
 
        
);
 
      
case
 
"quiz":
 
        
return
 
(
 
          
<motion.div
 
            
initial={{
 
opacity:
 
0,
 
y:
 
20
 
}}
 
            
animate={{
 
opacity:
 
1,
 
y:
 
0
 
}}
 
            
exit={{
 
opacity:
 
0,
 
y:
 
-20
 
}}
 
            
transition={{
 
duration:
 
0.3
 
}}
 
            
className="space-y-6"
 
          
>
 
            
<h2
 
className={`text-2xl
 
font-bold
 
${currentTheme.text}
 
flex
 
items-center`}>
 
              
<ListChecks
 
size={24}
 
className="mr-2"
 
/>
 
Quiz
 
            
</h2>
 
            
{!showQuizResult
 
?
 
(
 
              
currentUnit.quiz.map((q,
 
qIndex)
 
=>
 
(
 
                
<div
 
key={qIndex}
 
className="bg-white
 
p-5
 
rounded-lg
 
shadow-md
 
border
 
border-gray-200">
 

                  
<p
 
className="font-semibold
 
text-lg
 
text-gray-800
 
mb-3">{q.q}</p>
 
                  
<div
 
className="space-y-2">
 
                    
{q.choices.map((choice,
 
cIndex)
 
=>
 
(
 
                      
<button
 
                        
key={cIndex}
 
                        
onClick={()
 
=>
 
handleAnswerQuiz(qIndex,
 
cIndex)}
 
                        
className={`w-full
 
text-left
 
p-3
 
rounded-md
 
border
 
transition-all
 
duration-200
 
                                  
${selectedAnswer
 
!==
 
null
 
&&
 
q.answer
 
===
 
cIndex
 
                            
?
 
'bg-green-100
 
border-green-500
 
text-green-800
 
font-bold'
 
                            
:
 
selectedAnswer
 
===
 
cIndex
 
&&
 
q.answer
 
!==
 
cIndex
 
                              
?
 
'bg-red-100
 
border-red-500
 
text-red-800
 
line-through'
 
                              
:
 
'bg-gray-50
 
border-gray-300
 
text-gray-800
 
hover:bg-gray-100'
 
                          
}
 
                                  
${selectedAnswer
 
!==
 
null
 
?
 
'cursor-not-allowed'
 
:
 
'cursor-pointer'}`}
 
                        
disabled={selectedAnswer
 
!==
 
null}
 
                      
>
 
                        
{choice}
 
                      
</button>
 
                    
))}
 
                  
</div>
 
                  
{showExplanation
 
&&
 
(selectedAnswer
 
!==
 
null)
 
&&
 
(
 
                    
<motion.div
 
                      
initial={{
 
opacity:
 
0,
 
height:
 
0
 
}}
 
                      
animate={{
 
opacity:
 
1,
 
height:
 
'auto'
 
}}
 
                      
transition={{
 
duration:
 
0.3
 
}}
 
                      
className={`mt-4
 
p-3
 
rounded-md
 
${currentTheme.bg}
 
bg-opacity-60
 
text-gray-700
 
border
 
${currentTheme.border}`}
 
                    
>
 
                      
<p><strong>Explanation:</strong>
 
{q.explanation}</p>
 
                    
</motion.div>
 
                  
)}
 
                
</div>
 
              
))
 
            
)
 
:
 
(
 
              
<motion.div
 
                
initial={{
 
opacity:
 
0,
 
scale:
 
0.9
 
}}
 
                
animate={{
 
opacity:
 
1,
 
scale:
 
1
 
}}
 
                
transition={{
 
duration:
 
0.5,
 
type:
 
"spring",
 
damping:
 
10
 
}}
 
                
className={`bg-white
 
p-8
 
rounded-lg
 
shadow-xl
 
text-center
 
space-y-4
 
border-2
 
${currentTheme.border}`}
 
              
>
 
                
<h3
 
className={`text-3xl
 
font-bold
 
${currentTheme.text}`}>Quiz
 
Results!</h3>
 
                
<p
 
className="text-xl
 
text-gray-700">You
 
scored
 
{quizScore}
 
out
 
of
 
{currentUnit.quiz.length}
 
questions.</p>
 

                
<p
 
className="text-md
 
text-gray-600">
 
                  
{quizScore
 
===
 
currentUnit.quiz.length
 
                    
?
 
"Fantastic
 
job!
 
You
 
got
 
all
 
of
 
them
 
right!"
 
                    
:
 
quizScore
 
>=
 
currentUnit.quiz.length
 
/
 
2
 
                      
?
 
"Good
 
effort!
 
Keep
 
practicing
 
to
 
improve."
 
                      
:
 
"Keep
 
going!
 
Review
 
the
 
section
 
and
 
try
 
again."}
 
                
</p>
 
                
<button
 
                  
onClick={()
 
=>
 
{
 
                    
setShowQuizResult(false);
 
                    
setQuizScore(0);
 
                    
setSelectedAnswer(null);
 
                    
setShowExplanation(false);
 
                  
}}
 
                  
className={`py-3
 
px-8
 
rounded-full
 
font-semibold
 
transition-all
 
duration-300
 
                             
bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
hover:shadow-lg
 
hover:scale-105`}
 
                
>
 
                  
Try
 
Again
 
                
</button>
 
              
</motion.div>
 
            
)}
 
            
{!showQuizResult
 
&&
 
(
 
              
<button
 
                
onClick={handleSubmitQuiz}
 
                
disabled={selectedAnswer
 
===
 
null}
 
//
 
Disable
 
until
 
an
 
answer
 
is
 
selected
 
for
 
the
 
current
 
question
 
                
className={`w-full
 
py-3
 
px-6
 
rounded-full
 
font-semibold
 
transition-all
 
duration-300
 
                           
${selectedAnswer
 
===
 
null
 
?
 
'bg-gray-200
 
text-gray-400
 
cursor-not-allowed'
 
:
 
`bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
hover:shadow-lg
 
hover:scale-105`}`}
 
              
>
 
                
Submit
 
Quiz
 
              
</button>
 
            
)}
 
          
</motion.div>
 
        
);
 
      
default:
 
        
return
 
null;
 
    
}
 
  
};
 
 
  
if
 
(loadingFirebase)
 
{
 
    
return
 
(
 
      
<div
 
className="flex
 
items-center
 
justify-center
 
min-h-screen
 
bg-gray-100
 
text-gray-700">
 

        
<div
 
className="flex
 
items-center
 
space-x-3">
 
          
<svg
 
className="animate-spin
 
h-8
 
w-8
 
text-violet-600"
 
xmlns="http://www.w3.org/2000/svg"
 
fill="none"
 
viewBox="0
 
0
 
24
 
24">
 
            
<circle
 
className="opacity-25"
 
cx="12"
 
cy="12"
 
r="10"
 
stroke="currentColor"
 
strokeWidth="4"></circle>
 
            
<path
 
className="opacity-75"
 
fill="currentColor"
 
d="M4
 
12a8
 
8
 
0
 
018-8V0C5.373
 
0
 
0
 
5.373
 
0
 
12h4zm2
 
5.291A7.962
 
7.962
 
0
 
014
 
12H0c0
 
3.042
 
1.135
 
5.824
 
3
 
7.938l3-2.647z"></path>
 
          
</svg>
 
          
<p>Loading
 
course
 
content...</p>
 
        
</div>
 
      
</div>
 
    
);
 
  
}
 
 
  
return
 
(
 
    
<div
 
className="flex
 
min-h-screen
 
bg-gray-50
 
font-sans">
 
      
{/*
 
Sidebar
 
*/}
 
      
<motion.div
 
        
initial={{
 
width:
 
'20rem'
 
}}
 
        
animate={{
 
width:
 
isSidebarOpen
 
?
 
'20rem'
 
:
 
'5rem'
 
}}
 
        
transition={{
 
duration:
 
0.3
 
}}
 
        
className={`fixed
 
inset-y-0
 
left-0
 
bg-white
 
shadow-xl
 
p-6
 
overflow-y-auto
 
z-50
 
rounded-r-3xl
 
transition-width
 
duration-300
 
${currentTheme.border}
 
border-r-4`}
 
      
>
 
        
<div
 
className="flex
 
items-center
 
justify-between
 
mb-8">
 
          
{isSidebarOpen
 
?
 
(
 
            
<h1
 
className={`text-3xl
 
font-extrabold
 
bg-clip-text
 
text-transparent
 
bg-gradient-to-r
 
${currentTheme.gradient}`}>
 
              
B1
 
English
 
Course
 
            
</h1>
 
          
)
 
:
 
(
 
            
<BookOpen
 
size={30}
 
className={currentTheme.text}
 
/>
 
          
)}
 
          
<button
 
            
onClick={toggleSidebar}
 
            
className={`p-2
 
rounded-full
 
${currentTheme.bg}
 
hover:bg-opacity-80
 
transition-all
 
duration-200
 
${currentTheme.text}`}
 
            
aria-label={isSidebarOpen
 
?
 
"Collapse
 
sidebar"
 
:
 
"Expand
 
sidebar"}
 
          
>
 
            
{isSidebarOpen
 
?
 
<ChevronLeft
 
size={24}
 
/>
 
:
 
<ChevronRight
 
size={24}
 
/>}
 
          
</button>
 
        
</div>
 
 

        
{isSidebarOpen
 
&&
 
(
 
          
<div
 
className="mb-8">
 
            
<h2
 
className={`text-xl
 
font-bold
 
${currentTheme.text}
 
mb-4
 
flex
 
items-center`}>
 
              
<BookOpen
 
size={20}
 
className="mr-2"
 
/>
 
Units
 
            
</h2>
 
            
<nav>
 
              
{courseData.map(unit
 
=>
 
(
 
                
<motion.button
 
                  
key={unit.id}
 
                  
onClick={()
 
=>
 
setActiveUnit(unit.id)}
 
                  
className={`w-full
 
text-left
 
py-3
 
px-4
 
rounded-lg
 
mb-2
 
flex
 
items-center
 
justify-between
 
                             
transition-all
 
duration-200
 
${activeUnit
 
===
 
unit.id
 
                      
?
 
`bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
shadow-md`
 
                      
:
 
`bg-gray-100
 
text-gray-800
 
hover:bg-gray-200`
 
                    
}`}
 
                  
whileHover={{
 
scale:
 
1.02
 
}}
 
                  
whileTap={{
 
scale:
 
0.98
 
}}
 
                
>
 
                  
<BookOpen
 
size={18}
 
className="mr-3"
 
/>
 
                  
Unit
 
{unit.id}:
 
{unit.title}
 
                  
{userProgress[`unit-${unit.id}`]?.completed
 
&&
 
(
 
                    
<CheckCircle2
 
size={18}
 
className="ml-auto
 
text-green-300"
 
/>
 
                  
)}
 
                
</motion.button>
 
              
))}
 
            
</nav>
 
          
</div>
 
        
)}
 
 
        
{isSidebarOpen
 
&&
 
(
 
          
<div
 
className="mb-8">
 
            
<h2
 
className={`text-xl
 
font-bold
 
${currentTheme.text}
 
mb-4
 
flex
 
items-center`}>
 
              
<Palette
 
size={20}
 
className="mr-2"
 
/>
 
Themes
 
            
</h2>
 
            
<div
 
className="grid
 
grid-cols-3
 
gap-2">
 
              
{themes.map(theme
 
=>
 
(
 
                
<button
 
                  
key={theme}
 
                  
onClick={()
 
=>
 
setSelectedTheme(theme)}
 
                  
className={`w-10
 
h-10
 
rounded-full
 
border-2
 
${colorThemes[theme].border}
 
transition-all
 
duration-200
 
                             
${selectedTheme
 
===
 
theme
 
?
 
'ring-4
 
ring-offset-2
 
ring-current-theme-border'
 
:
 
''}`}
 

                  
style={{
 
backgroundColor:
 
colorThemes[theme].gradient.split('
 
')[1]
 
}}
 
//
 
Use
 
a
 
part
 
of
 
gradient
 
for
 
color
 
                  
aria-label={`Select
 
${theme}
 
theme`}
 
                
></button>
 
              
))}
 
            
</div>
 
          
</div>
 
        
)}
 
 
        
{isSidebarOpen
 
&&
 
userId
 
&&
 
(
 
          
<div
 
className="mt-auto
 
pt-6
 
border-t
 
border-gray-200
 
text-gray-600
 
text-sm">
 
            
<p
 
className="font-semibold
 
mb-1">User
 
ID:</p>
 
            
<p
 
className="break-words">{userId}</p>
 
            
<p
 
className="mt-2
 
text-xs">Your
 
progress
 
is
 
saved
 
automatically.</p>
 
          
</div>
 
        
)}
 
      
</motion.div>
 
 
      
{/*
 
Main
 
Content
 
*/}
 
      
<motion.div
 
        
initial={{
 
marginLeft:
 
isSidebarOpen
 
?
 
'20rem'
 
:
 
'5rem'
 
}}
 
        
animate={{
 
marginLeft:
 
isSidebarOpen
 
?
 
'20rem'
 
:
 
'5rem'
 
}}
 
        
transition={{
 
duration:
 
0.3
 
}}
 
        
className={`flex-1
 
p-8
 
transition-margin
 
duration-300
 
${currentTheme.bg}`}
 
      
>
 
        
<div
 
className="max-w-4xl
 
mx-auto
 
bg-white
 
rounded-xl
 
shadow-lg
 
p-8
 
sm:p-10
 
lg:p-12
 
border-t-8
 
border-b-8"
 
style={{
 
borderColor:
 
currentTheme.border.split('-')[1]
 
+
 
'-500'
 
}}>
 
          
{currentUnit
 
&&
 
(
 
            
<motion.div
 
              
key={activeUnit}
 
//
 
Key
 
for
 
re-animating
 
when
 
unit
 
changes
 
              
initial={{
 
opacity:
 
0,
 
y:
 
30
 
}}
 
              
animate={{
 
opacity:
 
1,
 
y:
 
0
 
}}
 
              
transition={{
 
duration:
 
0.5,
 
ease:
 
"easeOut"
 
}}
 
            
>
 
              
<h1
 
className={`text-4xl
 
font-extrabold
 
text-center
 
mb-4
 
${currentTheme.text}`}>
 
                
Unit
 
{currentUnit.id}:
 
{currentUnit.title}
 
              
</h1>
 
              
<p
 
className="text-center
 
text-gray-500
 
mb-8
 
italic">
 
                
{currentUnit.overview}
 
              
</p>
 
 
              
<div
 
className="flex
 
flex-wrap
 
justify-center
 
gap-3
 
mb-8">
 
                
<button
 
                  
onClick={()
 
=>
 
handleSelectSection("overview")}
 

                  
className={`py-2
 
px-5
 
rounded-full
 
flex
 
items-center
 
transition-all
 
duration-300
 
                             
${activeSection
 
===
 
"overview"
 
?
 
`bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
shadow-md`
 
:
 
`bg-gray-100
 
text-gray-700
 
hover:bg-gray-200`}`}
 
                
>
 
                  
<BookOpen
 
size={18}
 
className="mr-2"
 
/>
 
Overview
 
                
</button>
 
                
<button
 
                  
onClick={()
 
=>
 
handleSelectSection("vocabulary")}
 
                  
className={`py-2
 
px-5
 
rounded-full
 
flex
 
items-center
 
transition-all
 
duration-300
 
                             
${activeSection
 
===
 
"vocabulary"
 
?
 
`bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
shadow-md`
 
:
 
`bg-gray-100
 
text-gray-700
 
hover:bg-gray-200`}`}
 
                
>
 
                  
<Languages
 
size={18}
 
className="mr-2"
 
/>
 
Vocabulary
 
                
</button>
 
                
<button
 
                  
onClick={()
 
=>
 
handleSelectSection("grammar")}
 
                  
className={`py-2
 
px-5
 
rounded-full
 
flex
 
items-center
 
transition-all
 
duration-300
 
                             
${activeSection
 
===
 
"grammar"
 
?
 
`bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
shadow-md`
 
:
 
`bg-gray-100
 
text-gray-700
 
hover:bg-gray-200`}`}
 
                
>
 
                  
<Library
 
size={18}
 
className="mr-2"
 
/>
 
Grammar
 
                
</button>
 
                
<button
 
                  
onClick={()
 
=>
 
handleSelectSection("reading")}
 
                  
className={`py-2
 
px-5
 
rounded-full
 
flex
 
items-center
 
transition-all
 
duration-300
 
                             
${activeSection
 
===
 
"reading"
 
?
 
`bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
shadow-md`
 
:
 
`bg-gray-100
 
text-gray-700
 
hover:bg-gray-200`}`}
 
                
>
 
                  
<FileText
 
size={18}
 
className="mr-2"
 
/>
 
Reading
 
                
</button>
 
                
<button
 
                  
onClick={()
 
=>
 
handleSelectSection("speaking")}
 
                  
className={`py-2
 
px-5
 
rounded-full
 
flex
 
items-center
 
transition-all
 
duration-300
 
                             
${activeSection
 
===
 
"speaking"
 
?
 
`bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
shadow-md`
 
:
 
`bg-gray-100
 
text-gray-700
 
hover:bg-gray-200`}`}
 
                
>
 
                  
<Mic
 
size={18}
 
className="mr-2"
 
/>
 
Speaking
 
                
</button>
 
                
<button
 
                  
onClick={()
 
=>
 
handleSelectSection("writing")}
 
                  
className={`py-2
 
px-5
 
rounded-full
 
flex
 
items-center
 
transition-all
 
duration-300
 
                             
${activeSection
 
===
 
"writing"
 
?
 
`bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
shadow-md`
 
:
 
`bg-gray-100
 
text-gray-700
 
hover:bg-gray-200`}`}
 

                
>
 
                  
<Pencil
 
size={18}
 
className="mr-2"
 
/>
 
Writing
 
                
</button>
 
                
<button
 
                  
onClick={()
 
=>
 
handleSelectSection("quiz")}
 
                  
className={`py-2
 
px-5
 
rounded-full
 
flex
 
items-center
 
transition-all
 
duration-300
 
                             
${activeSection
 
===
 
"quiz"
 
?
 
`bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
shadow-md`
 
:
 
`bg-gray-100
 
text-gray-700
 
hover:bg-gray-200`}`}
 
                
>
 
                  
<ListChecks
 
size={18}
 
className="mr-2"
 
/>
 
Quiz
 
                
</button>
 
              
</div>
 
 
              
<AnimatePresence
 
mode="wait">
 
                
{renderSectionContent()}
 
              
</AnimatePresence>
 
 
              
{renderAIFeatures()}
 
 
              
<div
 
className="flex
 
justify-between
 
mt-10
 
pt-6
 
border-t
 
border-gray-200">
 
                
<button
 
                  
onClick={handlePreviousUnit}
 
                  
disabled={activeUnit
 
===
 
1}
 
                  
className={`py-2
 
px-6
 
rounded-full
 
font-semibold
 
transition-all
 
duration-300
 
flex
 
items-center
 
                             
${activeUnit
 
===
 
1
 
                      
?
 
'bg-gray-200
 
text-gray-400
 
cursor-not-allowed'
 
                      
:
 
`bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
hover:shadow-lg
 
hover:scale-105`
 
                    
}`}
 
                
>
 
                  
<ChevronLeft
 
size={20}
 
className="mr-2"
 
/>
 
Previous
 
Unit
 
                
</button>
 
                
<button
 
                  
onClick={handleNextUnit}
 
                  
disabled={activeUnit
 
===
 
courseData.length}
 
                  
className={`py-2
 
px-6
 
rounded-full
 
font-semibold
 
transition-all
 
duration-300
 
flex
 
items-center
 
                             
${activeUnit
 
===
 
courseData.length
 
                      
?
 
'bg-gray-200
 
text-gray-400
 
cursor-not-allowed'
 
                      
:
 
`bg-gradient-to-r
 
${currentTheme.gradient}
 
text-white
 
hover:shadow-lg
 
hover:scale-105`
 
                    
}`}
 
                
>
 

                  
Next
 
Unit
 
<ChevronRight
 
size={20}
 
className="ml-2"
 
/>
 
                
</button>
 
              
</div>
 
            
</motion.div>
 
          
)}
 
        
</div>
 
      
</motion.div>
 
 
      
{/*
 
Vocabulary
 
Modal
 
*/}
 
      
<AnimatePresence>
 
        
{vocabModalOpen
 
&&
 
(
 
          
<motion.div
 
            
initial={{
 
opacity:
 
0
 
}}
 
            
animate={{
 
opacity:
 
1
 
}}
 
            
exit={{
 
opacity:
 
0
 
}}
 
            
className="fixed
 
inset-0
 
bg-black
 
bg-opacity-50
 
flex
 
items-center
 
justify-center
 
z-[100]"
 
          
>
 
            
<motion.div
 
              
initial={{
 
opacity:
 
0,
 
scale:
 
0.8
 
}}
 
              
animate={{
 
opacity:
 
1,
 
scale:
 
1
 
}}
 
              
exit={{
 
opacity:
 
0,
 
scale:
 
0.8
 
}}
 
              
className={`relative
 
p-6
 
rounded-lg
 
shadow-xl
 
max-w-sm
 
w-full
 
${currentTheme.bg}
 
bg-opacity-95
 
border
 
${currentTheme.border}
 
${currentTheme.text}`}
 
            
>
 
              
<button
 
                
onClick={()
 
=>
 
setVocabModalOpen(false)}
 
                
className={`absolute
 
top-3
 
right-3
 
p-1
 
rounded-full
 
${currentTheme.bg}
 
hover:bg-opacity-80
 
transition-all
 
duration-200
 
${currentTheme.text}`}
 
              
>
 
                
<svg
 
xmlns="http://www.w3.org/2000/svg"
 
width="24"
 
height="24"
 
viewBox="0
 
0
 
24
 
24"
 
fill="none"
 
stroke="currentColor"
 
strokeWidth="2"
 
strokeLinecap="round"
 
strokeLinejoin="round"
 
className="lucide
 
lucide-x"><path
 
d="M18
 
6
 
6
 
18"
 
/><path
 
d="m6
 
6
 
12
 
12"
 
/></svg>
 
              
</button>
 
              
{aiLoading
 
?
 
(
 
                
<div
 
className="flex
 
flex-col
 
items-center
 
justify-center
 
py-8">
 
                  
<svg
 
className="animate-spin
 
h-8
 
w-8
 
text-violet-600
 
mb-4"
 
xmlns="http://www.w3.org/2000/svg"
 
fill="none"
 
viewBox="0
 
0
 
24
 
24">
 
                    
<circle
 
className="opacity-25"
 
cx="12"
 
cy="12"
 
r="10"
 
stroke="currentColor"
 
strokeWidth="4"></circle>
 
                    
<path
 
className="opacity-75"
 
fill="currentColor"
 
d="M4
 
12a8
 
8
 
0
 
018-8V0C5.373
 
0
 
0
 
5.373
 
0
 
12h4zm2
 
5.291A7.962
 
7.962
 
0
 
014
 
12H0c0
 
3.042
 
1.135
 
5.824
 
3
 
7.938l3-2.647z"></path>
 
                  
</svg>
 

                  
<p
 
className="text-gray-700">Getting
 
translation...</p>
 
                
</div>
 
              
)
 
:
 
(
 
                
<>
 
                  
<h3
 
className="text-2xl
 
font-bold
 
mb-4">{vocabModalContent.word}</h3>
 
                  
<p
 
className="mb-2"><strong>Definition:</strong>
 
{vocabModalContent.definition}</p>
 
                  
<p><strong>Amharic:</strong>
 
{vocabModalContent.translation}</p>
 
                  
{aiError
 
&&
 
<p
 
className="text-red-600
 
text-sm
 
mt-2">{aiError}</p>}
 
                
</>
 
              
)}
 
            
</motion.div>
 
          
</motion.div>
 
        
)}
 
      
</AnimatePresence>
 
    
</div>
 
  
);
 
}
 
 
export
 
default
 
App;
 
 
 

</pre>
      </div>
    </div>
  );
}