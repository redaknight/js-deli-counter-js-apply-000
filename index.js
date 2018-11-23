var katzDeliLine = [ ];

function takeANumber( katzDeliLine, newName) 
{
    
    katzDeliLine.push(newName);
  
    return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
  
}

function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}
