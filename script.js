$( document ).ready(function() {
  
//table  
  $(function(){
  $("table").tablesorter();
});

//button
    $( "#button" ).on("click",function( event ) {
      event.preventDefault();
      data=$("textarea").val().toLowerCase().replace(/[^\w\s]/gi, '');
      console.log(data);
      analyzeData(data);
})
    
    
    
    var happyArray="happy, cheerful, cheery, merry, joyful, jovial, jolly, jocular, gleeful, carefree, untroubled, delighted, smiling, beaming, grinning, in good spirits, in a good mood, lighthearted, pleased, contented, content, satisfied, gratified, buoyant, radiant, sunny, blithe, joyous, beatific; thrilled, elated, exhilarated, ecstatic, blissful, euphoric, overjoyed, exultant, rapturous, in seventh heaven, on cloud nine, walking on air, jumping for joy, jubilant, informalchirpy, over the moon, on top of the world, tickled pink, on a high, as happy as a clam, formal";
    var sadArray="sad, unhappy, sorrowful, dejected, depressed, downcast, miserable, down, despondent, despairing, disconsolate, desolate, wretched, glum, gloomy, doleful, dismal, melancholy, mournful, woebegone, forlorn, crestfallen, heartbroken, inconsolable, informalblue, down at the mouth, down in the dumps, blah"
    happyArray= happyArray.split(", ");
    sadArray=sadArray.split(", ");
    
    var happy=0, sad=0; //base score
    function analyzeData(data){
      $("#sadScore").text(0);
      $("#happyScore").text(0);
      $("#totalScore").text(0);
      data=data.split(" ");
      for (i=0;i<data.length;i++){
        for(j=0;j<happyArray.length;j++){
          if (data[i]==happyArray[j]) {
            happy++
          }
          if (data[i]==sadArray[j]) {
            sad++
          }
        }
        
      }
      $("#sadScore").text(sad);
      $("#happyScore").text(happy);
      $("#totalScore").text(happy-sad);
     console.log(happy +" "+ sad);
    }
    
});