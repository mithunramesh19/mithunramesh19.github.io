var player_name=localStorage.getItem("player_name");
var throw_choice;
var browser_choice;
var browser_text;

var win_count=localStorage.getItem("win_count");
var lose_count=localStorage.getItem("lose_count");
var game_count=localStorage.getItem("game_count");

var player_rock=localStorage.getItem("player_rock")
var player_paper=localStorage.getItem("player_paper");
var player_scissors=localStorage.getItem("player_scissors");

var bowser_rock=localStorage.getItem("bowser_rock")
var bowser_paper=localStorage.getItem("bowser_scissors")
var bowser_scissors=localStorage.getItem("bowser_scissors");

if(!player_name){
  makeVisible(document.getElementById("enter_name"));
  document.getElementById("feedback").innerHTML = "Please add a name!";
  document.getElementById("feedback").style.color="red";
}




toggleVisibility(document.getElementById("show_rules_button"),document.getElementById("rules"));
toggleVisibility(document.getElementById("enter_name_button"),document.getElementById("enter_name"))
toggleVisibility(document.getElementById("show_stats_button"),document.getElementById("stats"));
toggleVisibility(document.getElementById("show_feedback"),document.getElementById("feedback"));

document.getElementById("confirm_name").addEventListener('click', function () {
    player_name = document.getElementById("name_input").value;
    //console.log(player_name);
    document.getElementById("header").innerHTML="Hi "+player_name+"! Play Rock, Paper, Scissors";
    makeInvisible(document.getElementById("enter_name"));
    makeInvisible(document.getElementById("enter_name_button"));
    document.getElementById("feedback").innerHTML = "You have successfully added a name!";
    document.getElementById("feedback").style.color="green";

});

document.getElementById("Play_Again").addEventListener('click', function() {
  localStorage.clear();
  document.location.reload(true);

});
/*
document.getElementById("Play_Again").addEventListener('click', function()){
  player_rock=0;
  player_paper=0;
  player_scissors=0;
  localStorage.clear();
  location.reload();
}
*/
document.getElementById("confirm_choice").addEventListener('click', function () {
    throw_choice = document.getElementById("throw").value;
    browser_choice=Math.floor(Math.random() * 3);//0=Rock, 1=Paper, 2=Scissors

    if(throw_choice=='Rock'){
      document.getElementById("Hand").src='rockcomp.png'
      player_rock++;
    }
    else if(throw_choice=='Paper'){
      document.getElementById("Hand").src='papercomp.jpeg'
      player_paper++;
    }
    else if(throw_choice=='Scissors'){
      document.getElementById("Hand").src='scissorscomp.png'
      player_scissors++;
    }
    else if(throw_choice==''){
      return;
    }
    if(browser_choice==0){
      document.getElementById("Bowser").src='BowserRock.jpg'
      browser_text="Rock";
      bowser_rock++;
    }
    else if(browser_choice==1){
      document.getElementById("Bowser").src='BowserPaper.jpg'
      browser_text="Paper";
      bowser_paper++;
    }
    else if(browser_choice==2){
      document.getElementById("Bowser").src='BowserScissors.jpg'
      browser_text="Scissors";
      bowser_scissors++;
    }
    document.getElementById("result_hand").innerHTML="You threw "+throw_choice+". The B(r)owser threw "+browser_text+"."
    if(battlePRS(throw_choice,browser_text)=="t"){
      document.getElementById("win").innerHTML="You tie."
      console.log(tie_count);
    }
    else if(battlePRS(throw_choice,browser_text)=="w"){
      document.getElementById("win").innerHTML="You win! :)"
      win_count++;
      console.log(win_count);
    }
    else if(battlePRS(throw_choice,browser_text)=="l"){
      document.getElementById("win").innerHTML="You lose :("
      lose_count++;
      console.log(lose_count);
    }

    game_count++;

    document.getElementById("game_count").innerHTML="Games Played: "+game_count;
    document.getElementById("win_count").innerHTML="Games Won: "+win_count;
    document.getElementById("win_loss").innerHTML="Win/Loss: "+win_count+ "/" +lose_count;
    document.getElementById("player_stats").innerHTML="Rock: "+player_rock/game_count*100+ "% Paper: " +player_paper/game_count*100+"% Scissors: "+player_scissors/game_count*100 +"%";
    document.getElementById("bowser_stats").innerHTML="Rock: "+bowser_rock/game_count*100+ "% Paper: " +bowser_paper/game_count*100+"% Scissors: "+bowser_scissors/game_count*100 +"%";

    if(game_count>=1){
      document.getElementById("confirm_choice").innerHTML= "Continue Playing";
    }

});
function toggleVisibility(button, div){
  button.addEventListener("click", function(){
  if(div.classList.contains("hidden")){
    div.classList.remove("hidden");
    div.classList.add("visible");
  }
  else{
    div.classList.remove("visible");
    div.classList.add("hidden");
  }
 })
}
function makeVisible(div){
      if(div.classList.contains("hidden")){
        div.classList.remove("hidden");
        div.classList.add("visible");
      }
}
function makeInvisible(div){
        if(div.classList.contains("visible")){
          div.classList.remove("visible");
          div.classList.add("hidden");
        }
}


function battlePRS(user, browser) {
    if (user == browser) {
        console.log("Tie.");
        return "t";
    } else if (user == "Rock") {
        if (browser == "Scissors") {
            console.log("rock > scissors");
            return "w";
        } else if (browser === "Paper") {
            console.log("paper > rock");
            return "l";
        }
    } else if (user == "Paper") {
        if (browser == "Rock") {
            console.log("paper > rock");
            return "w";
        } else if (browser === "Scissors") {
            console.log("scissors > paper");
            return "l";
        }
    } else if (user == "Scissors") {
        if (browser == "Rock") {
            console.log("rock > scissors");
            return "c";
        } else if (browser == "Paper") {
            console.log("scissors > paper");
            return "w";
        }
    }
}
