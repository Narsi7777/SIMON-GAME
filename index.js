var allbuttons=$("button");
var audio;
var rglow;
var rndbutton;
var randomcolor;
var curlevel=0;
var userEnteredButtons=[];
var userAndRandomGeneratedButtons=[];
var trueorfalse;
var btncount=0;
var checkcount=1;

allbuttons.each(function(){
    var btun=$(this);
    var buttoncolor=btun.prop("classList")[0];
   btun.click(function(){
        btun.css("box-shadow", "10px 10px 20px rgba(0, 0, 0, 0.9)");    
        setTimeout(function(){
            btun.css("box-shadow", "none");
        },100);
        if(buttoncolor==="green")    
        {
            audio=new Audio("sounds/crash.mp3");
            audio.play();
            addUserButton(buttoncolor);
            btncount++;
            if(btncount==checkcount)
            {
                checkArrays();
            }

        }
        else if(buttoncolor==="red")
        {
            audio=new Audio("sounds/snare.mp3");
            audio.play();
            addUserButton(buttoncolor);
            btncount++;
            if(btncount==checkcount)
            {
                checkArrays();
            }
        }
        else if(buttoncolor==="yellow")
        {
            audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            addUserButton(buttoncolor);
            btncount++;
            if(btncount==checkcount)
            {
                checkArrays();
            }
        }
        else if(buttoncolor==="blue"){
            audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            addUserButton(buttoncolor);
            btncount++;
            if(btncount==checkcount)
            {
                checkArrays();
            }
        }
        
    });

});


$(document).keypress(function(event){
if(event.key==="a")
{    
    generateRandomColor();
}
});



function generateRandomColor(){
    rndbutton=Math.random();
    rndbutton*=4;
    rndbutton=Math.floor(rndbutton);
    //done with random number 
    rglow=$("button")[rndbutton];
    $(rglow).css("box-shadow", "10px 10px 20px rgba(0, 0, 0, 0.9)");
    setTimeout(function(){
        $(rglow).css("box-shadow", "none");
    },100);
    randomcolor=$("button")[rndbutton].classList[0];
    if(randomcolor==="green")    
        {
            audio=new Audio("sounds/crash.mp3");
            audio.play();
        }
        else if(randomcolor==="red")
        {
            audio=new Audio("sounds/snare.mp3");
            audio.play();
        }
        else if(randomcolor==="yellow")
        {
            audio=new Audio("sounds/tom-1.mp3");
            audio.play();
        }
        else if(randomcolor==="blue"){
            audio=new Audio("sounds/tom-2.mp3");
            audio.play();
        }
        addRandomButton(randomcolor);

}
function increaseLevel(){

    curlevel+=1;
    $("h1").text("Level "+curlevel);
}

function addUserButton(usercolor){
    userEnteredButtons.push(usercolor);
}

function addRandomButton(ammulucolor){
    userAndRandomGeneratedButtons.push(ammulucolor);
}

    $(document).keypress(function(event){
    if(event.key==="x")
    {   
        checkArrays();
    }
    });



function checkArrays(){
    trueorfalse=JSON.stringify(userEnteredButtons) === JSON.stringify(userAndRandomGeneratedButtons);
    if(trueorfalse){
        userEnteredButtons.length=0;
        btncount=0;
        checkcount++;
        increaseLevel();
        setTimeout(function() {
            generateRandomColor();
        }, 1000);
       
    }
    else{
        $("h1").text("Oooopppsss...");
        setTimeout(function() {
            $("h1").text("Restarting..");
        }, 1000);
        // setTimeout(function() {
        //     location.reload();
        // }, 1000);
        
        $(".btn").hide();
        $(".container").append("<p style='font-size: 16px;'>Random Generated Buttons:[ "+userAndRandomGeneratedButtons+"]</p><br>");
        $(".container").append("<p>You Entered Buttons: ["+userEnteredButtons+"]</p>");
        $("p").css({"color":"white", "font-size": "25px"});
        
    }
}
