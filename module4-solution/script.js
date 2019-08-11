(function(){ 
  var counter = 0; 
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", 
   "Frank", "Larry", "Paula", "Laura", "Jim"]; 
  for (var name in names) { 

   var new_par = document.createElement("p"); 
   var par_id = "new_par" + counter; 
   new_par.id = par_id; 
   var greeter = document.getElementById("greeter"); 
   greeter.appendChild(new_par); 

   var firstChar = names[name].charAt(0).toLowerCase(); 

   if (firstChar === 'j') { 
    //byeSpeaker.speak(names[name]); 
    document.getElementById(par_id).innerHTML = "Goodbye" + " " + names[name]; 

   } else { 
    //helloSpeaker.speak(names[name]); 
    document.getElementById(par_id).innerHTML = "Hello" + " " + names[name];   
  } 
  counter++; 
  } 

})(); 