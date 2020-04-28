var x=0,px=[0,1,2,3,4,5,6,7,8,9];
function recurred(px)
{
if((px[1]==px[3] && px[1]==px[2]) || (px[4]==px[5] && px[4]==px[6]) || (px[7]==px[8] && px[7]==px[9]) || (px[1]==px[4] && px[1]==px[7]) || (px[2]==px[5] && px[2]==px[8]) || (px[3]==px[6] && px[3]==px[9]) || (px[1]==px[5] && px[1]==px[9]) || (px[3]==px[5] && px[3]==px[7]))
    {
document.getElementById("result").value=(x?"        O is winner,click restart to playagain ":"        X is winner ,click restart to playagain");
        x=-1;
    }
else if(px[1]!=1 && px[2]!=2 && px[3]!=3 && px[4]!=4 && px[5]!=5 && px[6]!=6 && px[7]!=7 && px[8]!=8 && px[9]!=9)
    {
document.getElementById("result").value="                                    It's a draw";
    x=-1;
    }
    return x;
   }
function print(x,text,clicked_id)
{
  if(x==0)
    {
        px[text]='X';
        document.getElementById(clicked_id).value='X';
        x=recurred(px);
    }
  else
     {
         px[text]='O';
         document.getElementById(clicked_id).value='O';
         x=recurred(px);
     }
}
function myfunc(clicked_id)
{
var text;
    if(clicked_id=="button1")
        {text=1;
        }
    else if(clicked_id=="button2")
        {text=2;
        }
    else if(clicked_id=="button3")
        {text=3;
         }
     else if(clicked_id=="button3")
        {text=3;
         }
     else if(clicked_id=="button4")
        {text=4;
         }
     else if(clicked_id=="button5")
        {text=5;
         }
     else if(clicked_id=="button6")
        {text=6;
         }
     else if(clicked_id=="button7")
        {text=7;
         }
     else if(clicked_id=="button8")
        {text=8;
         }
    else{
   text=9;}
if(px[text]!=text)
     {
         window.alert(" It's already occupied choose another space ");
     }
else if(x==1)
    {
document.getElementById("result").value="                            It's X turn now";
    print(x,text,clicked_id);
    x=1-x;}
else if(x==2)
    {window.alert("game over ,click restart to play again");
     x=2;
     }
 else
     {
document.getElementById("result").value="                            Now it's O turn";
     print(x,text,clicked_id);
     x=1-x;}
}
function restartfunc()
{
    px=[0,1,2,3,4,5,6,7,8,9];
    document.getElementById("button1").value=" ";
    document.getElementById("button2").value=" ";
    document.getElementById("button3").value=" ";
    document.getElementById("button4").value=" ";
    document.getElementById("button5").value=" ";
    document.getElementById("button6").value=" ";
    document.getElementById("button7").value=" ";
    document.getElementById("button8").value=" ";
    document.getElementById("button9").value=" ";
    document.getElementById("result").value=" X will be given the first turn and then it goes to O";
    x=0;
}
