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
    return `Currently serving ${CurrentlyOnLine.splice(0, 1)}.`;
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    return `Currently serving ${katzDeliLine}.`;
  }
}
An

