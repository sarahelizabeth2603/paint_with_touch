var mouse_Event="empty";
var current_position_of_Mouse_X,current_position_of_Mouse_Y,last_position_of_Mouse_X,last_position_of_Mouse_Y,last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("Colour").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouse_Event="mousedown";

}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouse_Event="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouse_Event="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

    current_position_of_Mouse_X=e.clientX-canvas.offsetLeft;
    current_position_of_Mouse_Y=e.clientY-canvas.offsetTop;

    if(mouse_Event=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("last position of x and y coordinates are, ");
console.log("x= "+last_position_of_Mouse_X+"y= "+last_position_of_Mouse_Y);
ctx.moveTo(last_position_of_Mouse_X,last_position_of_Mouse_Y);

console.log("current position of x and y coordinates are ,  ");
console.log("x= "+current_position_of_Mouse_X+"y= "+current_position_of_Mouse_Y);
ctx.lineTo(current_position_of_Mouse_X,current_position_of_Mouse_Y);
ctx.stroke();
    }
    last_position_of_Mouse_X=current_position_of_Mouse_X;
    last_position_of_Mouse_Y=current_position_of_Mouse_Y;
}

var width = screen.width;
    var height = screen.height;

    new_width = width-70;
    new_height = height-300;

    if(width < 992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";


    }

    canvas.addEventListener("touchstart",my_touchstart);

    function my_touchstart(e){
        color=document.getElementById("colour").value;
        width_of_line=document.getElementById("width_of_line").value;
      last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
       last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }


    canvas.addEventListener("touchmove",my_touchmove);

    function my_touchmove(e){
        current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
        current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("last positions of x and y coordinates are - ");
        console.log("x = "+current_position_of_touch_x+"y = "+current_position_of_touch_y);

        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("current positions of x and y coordinates are - ");
        console.log("x = "+current_position_of_touch_x+"y = "+current_position_of_touch_y);

        ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);

        ctx.stroke();

        last_position_of_x=current_position_of_touch_x;
        last_position_of_y=current_position_of_touch_y;

    }

    function clearArea(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }
