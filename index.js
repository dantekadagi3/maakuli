document.addEventListener("DOMContentLoaded",function(){

    var texts=['tasty','amazing','tantalizing','healthy'];
    var currentIndex=0;

    function changeVal(){
        let changeText=document.getElementById('change');
            
            changeText.textContent=texts[currentIndex];
            currentIndex = (currentIndex + 1) % texts.length; 
    }
    changeVal();

    setInterval(changeVal,2000);
});

