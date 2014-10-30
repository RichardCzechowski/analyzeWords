$( document ).ready(function() {
//table  
  $(function(){
  $("table").tablesorter();
});

//button
    $( "#button" ).on("click",function( event ) {
      $("tbody").replaceWith("<tbody><tr><td>Happiness Score</td><td id='happyScore'>0</td></tr><tr><td>Sadness Score</td><td id='sadScore'>0</td></tr><tr><tr><td>Overall Score (happiness-sadness):</td><td id='totalScore'>0</td></tr></tbody>")
      
      
      
      event.preventDefault();
      data=$("textarea").val().toLowerCase().replace(/[^\w\s]/gi, '');
      //console.log(data);
      analyzeData(data);
})
    
    
    
    function analyzeData(data){
    var happyArray="happy, cheerful, cheery, merry, joyful, jovial, jolly, jocular, gleeful, carefree, untroubled, delighted, smiling, beaming, grinning, in good spirits, in a good mood, lighthearted, pleased, contented, content, satisfied, gratified, buoyant, radiant, sunny, blithe, joyous, beatific; thrilled, elated, exhilarated, ecstatic, blissful, euphoric, overjoyed, exultant, rapturous, in seventh heaven, on cloud nine, walking on air, jumping for joy, jubilant, informalchirpy, over the moon, on top of the world, tickled pink, on a high, as happy as a clam, formal";
    var sadArray="sad, unhappy, sorrowful, dejected, depressed, downcast, miserable, down, despondent, despairing, disconsolate, desolate, wretched, glum, gloomy, doleful, dismal, melancholy, mournful, woebegone, forlorn, crestfallen, heartbroken, inconsolable, informalblue, down at the mouth, down in the dumps, blah"
    happyArray= happyArray.split(", ");
    sadArray=sadArray.split(", ");
    
    var happy=0, sad=0; //base score
    var array_elements=[];
      $("#sadScore").text("");
      $("#happyScore").text("");
      $("#totalScore").text("");
      data=data.split(" ");
      for (i=0;i<data.length;i++){
        for(j=0;j<happyArray.length;j++){
          if (data[i]==happyArray[j]) {
            happy++
            array_elements.push(data[i]);
          }
          if (data[i]==sadArray[j]) {
            sad++
            array_elements.push(data[i]);
          }
        }
        
      }
      $("#sadScore").text(sad);
      $("#happyScore").text(happy);
      $("#totalScore").text(happy-sad);
      
    array_elements.sort();
    
        var current = null;
        var cnt = 0;
        for (var i = 0; i < array_elements.length; i++) {
            if (array_elements[i] != current) {
                if (cnt > 0) {
                    $("tbody").append("<tr><td>"+current + "</td><td>" + cnt + "</td></tr>");
                }
                current = array_elements[i];
                cnt = 1;
            } else {
                cnt++;
            }
        }
        if (cnt > 0) {
           $("tbody").append("<tr><td>"+current + "</td><td>" + cnt + "</td></tr>");
        }
          
    }
    
});