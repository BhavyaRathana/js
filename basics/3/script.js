function result(){
    var score=0;
    if(document.getElementById('correct 1').checked)
    {
        score++;
    }
    if(document.getElementById('correct 2').checked)
    {
        score++;
    }
    if(document.getElementById('correct 3').checked)
    {
        score++;
    }
    alert("your score is:"+score)

}