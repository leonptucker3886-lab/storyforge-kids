const $=id=>document.getElementById(id);let H={},story,nodeId,path=[],t0=0,wordsThis=0,gradeSum=0,gradeN=0;
const store=JSON.parse(localStorage.getItem("sfk")||'{"stories":0,"words":0,"secs":0,"grades":[]}');
function save(){localStorage.setItem("sfk",JSON.stringify(store));stats()}
function stats(){$("stStories").textContent=store.stories;$("stWords").textContent=store.words;
$("stLevel").textContent=store.grades.length?(store.grades.reduce((a,b)=>a+b,0)/store.grades.length).toFixed(1):"–";
$("stWpm").textContent=store.secs>0?Math.round(store.words/(store.secs/60)):"–"}
function fill(s){const p={girl:["her","Her","her"],boy:["his","His","him"],kid:["their","Their","them"]}[H.pro];
return s.replace(/{N}/g,H.name).replace(/{P}/g,H.pet).replace(/{C}/g,H.color).replace(/{pos}/g,p[0]).replace(/{Pos}/g,p[1]).replace(/{obj}/g,p[2])}
function syl(w){w=w.toLowerCase().replace(/[^a-z]/g,"");if(w.length<=3)return 1;w=w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,"").replace(/^y/,"");const m=w.match(/[aeiouy]{1,2}/g);return m?m.length:1}
function grade(t){const s=Math.max(1,(t.match(/[.!?]+/g)||[]).length),w=t.split(/\s+/).filter(Boolean),sy=w.reduce((a,x)=>a+syl(x),0);return Math.max(0,0.39*w.length/s+11.8*sy/w.length-15.59)}
function show(id){speechSynthesis.cancel();nodeId=id;const n=story.nodes[id],text=fill(n.t);path.push(text);
const words=text.split(/\s+/);wordsThis+=words.length;gradeSum+=grade(text);gradeN++;
$("storyText").innerHTML=words.map((w,i)=>`<span data-i="${i}">${w.replace(/</g,"&lt;")}</span>`).join(" ");
const ch=$("choices");ch.innerHTML="";
if(n.end){const b=document.createElement("button");b.textContent="Finish the story ★";b.onclick=finish;ch.appendChild(b)}
else n.c.forEach(([lab,to])=>{const b=document.createElement("button");b.className="alt";b.textContent=fill(lab);b.onclick=()=>show(to);ch.appendChild(b)})}
function read(){speechSynthesis.cancel();const spans=[...$("storyText").querySelectorAll("span")];const text=spans.map(s=>s.textContent).join(" ");
const starts=[];let p=0;spans.forEach(s=>{starts.push(p);p+=s.textContent.length+1});
const u=new SpeechSynthesisUtterance(text);u.rate=+$("rate").value;
u.onboundary=e=>{let i=starts.findIndex((st,k)=>e.charIndex>=st&&(k==starts.length-1||e.charIndex<starts[k+1]));spans.forEach(s=>s.classList.remove("on"));if(spans[i])spans[i].classList.add("on")};
u.onend=()=>spans.forEach(s=>s.classList.remove("on"));speechSynthesis.speak(u)}
function finish(){speechSynthesis.cancel();const secs=(Date.now()-t0)/1000;store.stories++;store.words+=wordsThis;store.secs+=secs;store.grades.push(+(gradeSum/gradeN).toFixed(1));save();
$("reader").classList.add("hidden");$("end").classList.remove("hidden");
$("endMsg").textContent=`Great reading, ${H.name}! You read ${wordsThis} words in ${Math.max(1,Math.round(secs/60))} minute(s).`;
$("keepsake").innerHTML=`<h1 style="text-align:center">${H.name} and the ${story.title}</h1><p style="text-align:center">A StoryForge Kids keepsake · ${new Date().toLocaleDateString()}</p>${path.map(t=>`<p>${t.replace(/</g,"&lt;")}</p>`).join("")}<p style="text-align:center"><b>The End</b><br>Read by ${H.name} — ${wordsThis} words!</p>`}
$("start").onclick=()=>{H={name:($("hName").value.trim()||"Alex").replace(/[<>]/g,""),pro:$("hPro").value,pet:$("hPet").value,color:$("hColor").value};
story=STORIES[$("hStory").value];path=[];wordsThis=0;gradeSum=0;gradeN=0;t0=Date.now();
$("setup").classList.add("hidden");$("end").classList.add("hidden");$("reader").classList.remove("hidden");show("start")};
$("read").onclick=read;$("stop").onclick=()=>speechSynthesis.cancel();$("print").onclick=()=>window.print();
$("again").onclick=()=>{$("end").classList.add("hidden");$("setup").classList.remove("hidden")};
$("reset").onclick=()=>{if(confirm("Reset reading tracker?")){Object.assign(store,{stories:0,words:0,secs:0,grades:[]});save()}};
if(!("speechSynthesis" in window)){$("read").disabled=true;$("read").textContent="🔇 Read-aloud not supported here"}
stats();
