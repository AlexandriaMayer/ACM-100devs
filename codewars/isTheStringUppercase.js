String.prototype.isUpperCase = function() {
  if (this == this.toUpperCase()){return true} else {return false;  
                                                    }}

// things I learned in this kata:
// no, you don't need to iterate through the array. toUpperCase() seems to do that for us.
// for some reason, the kata didn't accept .toUpperCase() in a regular function. I had to re-write it like it's a constructor, as seen by the String.prototype.isUpperCase = function(){this this this}
// not a fan of this kata
