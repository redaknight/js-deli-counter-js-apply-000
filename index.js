var katzDeliLine = [ ];

function takeANumber( katzDeliLine, newName) 
{
    
    katzDeliLine.push(newName);
  
    return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
  
}

function nowServing( katzDeliLine ) {
    var nameCurrentlyOnLine = katzDeliLine[0];
    if (katzDeliLine.length > 0) {
    return `Currently serving ${nameCurrentlyOnLine}.`;
     nameCurrentlyOnLine.splice(0, 1);
  } else {
    return "There is nobody waiting to be served!";
  }
}

