var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", 
"Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
    
    var s = names[i].charAt(0);

    if (s==="j" || s==="J"){
        console.log ("Goodbye "+names[i])
    }
     else {
        console.log ("Hello "+names[i])
      }

}