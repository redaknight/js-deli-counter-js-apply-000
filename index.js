var katzDeliLine = [ ];

function takeANumber( katzDeliLine, personName) {
  katzDeliLine.push(personName)
  
  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
  
}