var photo = ["img1.jpg","img2.jpg"];
var img = document.querySelector('img');

var count = 0;
function Previous(){
    count--;
    if(count<0){
        count = photo.length-1;
        img.src = photo[count];
    }else{
        img.src = photo[count];
    }
    
}

function Next(){
    count++;
    if(count >= photo.length){
        count = 0;
        img.src = photo[count];
    }else{
        img.src = photo[count];
    }
    
}