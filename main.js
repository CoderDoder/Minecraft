var canvas=new fabric.Canvas("myCanvas");
var player_x=10;
var player_y=10;
var block_img_width=30;
var block_img_height=30;
var player_object="";
var block_object="";


function player_update(){
    fabric.Image.fromURL("player.png",function (Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
        
    });

}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
        block_object=Img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
        
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true && keypressed=="80"){
        console.log("shift and p pressesd together");
        block_img_height=block_img_height+10;
        block_img_width=block_img_width+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (e.shiftKey==true && keypressed=="77"){
        console.log("shift and m pressesd together");
        block_img_height=block_img_height-10;
        block_img_width=block_img_width-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (keypressed=="37"){
        left();
        console.log("left arrow is pressed");

    }
    if (keypressed=="38"){
        up();
        console.log("up arrow is pressed");
        
    }
    if (keypressed=="39"){
        right();
        console.log("right arrow is pressed");
        
    }
    if (keypressed=="40"){
        down();
        console.log("down arrow is pressed");
        
    }
    if(keypressed=="84"){
        new_image("trunk.jpg");
        console.log("t is pressed");

    }
    if(keypressed=="68"){
        new_image("dark_green.png");
        console.log("d is pressed");

    }
    if(keypressed=="76"){
        new_image("light_green.png");
        console.log("l is pressed");

    }
    if(keypressed=="71"){
        new_image("ground.png");
        console.log("g is pressed");

    }
    if(keypressed=="87"){
        new_image("wall.jpg");
        console.log("w is pressed");

    }
    if(keypressed=="89"){
        new_image("yellow_wall.png");
        console.log("y is pressed");

    }
    if(keypressed=="82"){
        new_image("roof.jpg");
        console.log("r is pressed");

    }
    if(keypressed=="67"){
        new_image("cloud.jpg");
        console.log("c is pressed");

    }
    if(keypressed=="85"){
        new_image("unique.png");
        console.log("l is pressed");

    }
} 

function left(){
    if(player_x>0){
        player_x=player_x-block_img_width;
        console.log("the x position= "+player_x+" the y position= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<850){
        player_x=player_x+block_img_width;
        console.log("the x position= "+player_x+" the y position= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function up(){
    if(player_y>0){
        player_y=player_y-block_img_height;
        console.log("the x position= "+player_x+" the y position= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<460){
        player_y=player_y+block_img_height;
        console.log("the x position= "+player_x+" the y position= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}