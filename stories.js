const STORIES={
forest:{title:"The Whispering Forest",nodes:{
start:{t:"One sunny morning, {N} and {pos} {P} found a {C} door hidden in an old oak tree. A tiny voice whispered, \u201cHelp me, please!\u201d",c:[["Open the door","inside"],["Follow the voice around the tree","around"]]},
inside:{t:"Behind the door was a glowing tunnel. {N} held {pos} {P} close and walked in. At the end sat a sad little fox.",c:[["Gently pet the fox","fox"],["Ask the fox what is wrong","ask"]]},
around:{t:"Behind the tree, a baby bird had fallen from its nest. The {P} looked up at the high branch and then at {N}.",c:[["Climb up carefully","climb"],["Ask the {P} to help lift the bird","lift"]]},
ask:{t:"The fox said a grumpy troll took the forest's {C} lantern, and now the trees cannot see. {N} stood tall and said, \u201cWe will get it back!\u201d",c:[["Find the troll","troll"]]},
fox:{t:"The fox smiled and gave {N} a shiny {C} acorn. \u201cIt will light your way home,\u201d he said.",c:[["Say thank you and head home","endA"]]},
troll:{t:"The troll was not mean at all. He was just afraid of the dark! {N} sang a song, and the troll laughed and gave back the lantern.",c:[["Bring the lantern home","endB"]]},
climb:{t:"Step by step, {N} climbed up and placed the bird in its nest. The mother bird sang the happiest song in the forest.",c:[["Climb down and wave goodbye","endC"]]},
lift:{t:"The {P} stretched up high while {N} held the bird gently. Together they put it safely in its nest. Teamwork!",c:[["Have a forest picnic","endC"]]},
endA:{t:"{N} and {pos} {P} walked home by the glow of the {C} acorn, knowing that kindness always lights the way.",end:1},
endB:{t:"The forest glowed {C} again, and every tree whispered, \u201cThank you, {N}!\u201d It was the brightest night ever.",end:1},
endC:{t:"That night, {N} fell asleep smiling, dreaming of birds and songs and a brave {P} best friend.",end:1}}},
space:{title:"Rocket to the Moon Market",nodes:{
start:{t:"{N} built a {C} rocket in the backyard. {Pos} {P} pressed the big button, and WHOOSH! They blasted off to the Moon Market!",c:[["Land near the cheese stand","cheese"],["Land by the star shop","stars"]]},
cheese:{t:"The moon cheese seller was crying. Someone mixed up all his signs and nobody could find anything.",c:[["Help sort the signs","sort"],["Ask the {P} to sniff out each cheese","sniff"]]},
stars:{t:"At the star shop, one little star would not shine. It was too shy to twinkle in front of everyone.",c:[["Tell the star a joke","joke"],["Shine a flashlight with it","light"]]},
sort:{t:"{N} read each sign out loud and put it in the right place. Soon the market was busy and happy again.",c:[["Fly home","endA"]]},
sniff:{t:"Sniff, sniff! The {P} found every cheese in seconds. The seller laughed and gave them a {C} moon pie.",c:[["Fly home","endA"]]},
joke:{t:"{N} asked, \u201cWhy did the star go to school? To get brighter!\u201d The shy star giggled and began to twinkle.",c:[["Wave goodbye to the star","endB"]]},
light:{t:"{N} and the star shined together, and soon all the stars joined in. The whole sky sparkled.",c:[["Fly home","endB"]]},
endA:{t:"Back home, {N} hugged {pos} {P} and looked up at the moon. Helping others was the best adventure of all.",end:1},
endB:{t:"From {pos} window, {N} saw one star twinkle extra bright, just for {obj}. Goodnight, space friends!",end:1}}}};
