$( document ).ready(function() {
  
//table  
  $(function(){
  $("table").tablesorter();
});

//button
    $( "#button" ).on("click",function( event ) {
      data=$("textarea").val();
      console.log(data);
      event.preventDefault();
});
    
    
    
    happyArray="cheerful, cheery, merry, joyful, jovial, jolly, jocular, gleeful, carefree, untroubled, delighted, smiling, beaming, grinning, in good spirits, in a good mood, lighthearted, pleased, contented, content, satisfied, gratified, buoyant, radiant, sunny, blithe, joyous, beatific; thrilled, elated, exhilarated, ecstatic, blissful, euphoric, overjoyed, exultant, rapturous, in seventh heaven, on cloud nine, walking on air, jumping for joy, jubilant, informalchirpy, over the moon, on top of the world, tickled pink, on a high, as happy as a clam, formal";
    sadArray="unhappy, sorrowful, dejected, depressed, downcast, miserable, down, despondent, despairing, disconsolate, desolate, wretched, glum, gloomy, doleful, dismal, melancholy, mournful, woebegone, forlorn, crestfallen, heartbroken, inconsolable, informalblue, down at the mouth, down in the dumps, blah"
    
    
    
    
    
    
    
    
    var happy=0, sad=0; //base score
    
    
    
    
    function analyzeData(data){
      data=data.split("");
      
    }
    
   analyzeData(data); 
    
});