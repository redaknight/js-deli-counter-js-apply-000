var katzDeliLine = [ ];

function takeANumber( katzDeliLine, newName) 
{
    
    katzDeliLine.push(newName);
  
    return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
  
}

function nowServing( katzDeliLine ) {
    var CurrentlyOnLine = katzDeliLine[0];
    if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    CurrentlyOnLine.shift();
    return `Currently serving ${CurrentlyOnLine.splice(0, 1)}.`;
  }
}

