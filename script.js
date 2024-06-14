

let torunirDATA= [



    {info:"Турнир на желания от 14.06.2024",players:[{name:"sasha",scores:300,fines:0,killer:"trapper"},{name:"lev",scores:300,fines:0,killer:"shape"},{name:"patya",scores:200,fines:0,killer:"trapper"},{name:"moon",scores:100,fines:0,killer:"trapper"},{name:"sasha",scores:300,fines:0,killer:"wraith"}]},
    {info:"Турнир на желания от 14.06.2024",players:[{name:"sasha",scores:300,fines:0,killer:"xenomorph"},{name:"lev",scores:300,fines:0,killer:"clown"},{name:"patya",scores:200,fines:0,killer:"trapper"},{name:"moon",scores:100,fines:0,killer:"trapper"}]}


]

let result = document.getElementById('result'),
    needCount =  document.getElementById('needCount'),
    myCount =  document.getElementById('myCount'),
    myExp =  document.getElementById('myExp'),
    mySkill =  document.getElementById('mySkill');
let tournirInfo = document.getElementById('tournirInfo'),TEST = document.getElementById('TEST');

mySkill.value = localStorage.getItem('mySkill')??0;
myExp.value = localStorage.getItem('myExp')??0;
needCount.value = localStorage.getItem('needCount')??0;
myCount.value = localStorage.getItem('myCount')??0;

setInterval(
    ()=>{
        let games =0,myShards = +myCount.value,needShards = +needCount.value,myExper= +myExp.value,
        mySkillValue = +mySkill.value;

        if(mySkillValue<0)mySkill.value=0;else if (mySkillValue>10)mySkill.value=10;

        if(myShards<needShards&&myShards>0&&needShards>0) {
            localStorage.setItem('myExp', myExp.value)
            localStorage.setItem('needCount', needCount.value)
            localStorage.setItem('myCount', myCount.value)
            localStorage.setItem('mySkill', mySkill.value)
            while (myShards<needShards){
                myExper+=600+(mySkillValue*100);games++;
                if(myExper>=4200){myExper-=4200;myShards+=300;}

            }

        }

        result.innerHTML = "Нужно сыграть : " + games + " игр<br><br><br>"
    },30
)

DisplayTournir();
function DisplayTournir(){
    TEST.innerHTML = "";

    for (let numb of torunirDATA){

        let PLAYERSDATA = "",place = 1;
        for (let pl of numb.players){PLAYERSDATA += `<div class="player"><img src="killers/${pl.killer}.png" alt="Error"><div class="info"><p>${place}) ${pl.name}<br><span style="color: ${(numb.players.length===place?"#be1313":"#c8ff00")};">${pl.scores} ✦</span></p></div></div>`;place++;}

        TEST.innerHTML+= `<div class="row"><h1 id="tournirName" style="color: #d0d0d0">${numb.info}</h1><div class="col-md-12">
        <div class="players" id = "tournirInfo">
          ${PLAYERSDATA}
          
          </div></div></div>`
        remID('tournirName')
    }

}


function  pr(text){console.log(text);}
function  remID(id){document.getElementById(id).removeAttribute('id');}