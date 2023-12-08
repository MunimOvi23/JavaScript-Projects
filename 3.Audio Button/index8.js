for(var i=0; i<3; i++){
    document.querySelectorAll('.btn')[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
    
        switch(text){
            case "Button 1":
                var audio = new Audio('sound1.mp3');
                audio.play();
                break;

            case "Button 2":
                var audio = new Audio('sound2.mp3');
                audio.play();
                break;
                
            case "Button 3":
                var audio = new Audio('sound3.mp3');
                audio.play();    
                break;
        }
    })

}

