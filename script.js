function missileLaunch(state){
     var pic;
     if(state==0){
          pic="image/missile_unlaunched.PNG";
     }else{
          pic="GIF/rocket_launched.gif"
     }
     document.getElementById("missile").src=pic;
}

