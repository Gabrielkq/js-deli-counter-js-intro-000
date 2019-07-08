
function currentLine(line){
  
    if (line.length === 0){
    return "The line is currently empty.";
  } else { 
    var numberAndName = [];
  for (var i = 0; i < line.length; i++) { 
  numberAndName.push(` ${i+1}. ${line[i]}`)}
  return `The line is currently:${numberAndName}`}
  }



 //var customerHistory = [];
var katzDeliLine = [];

function takeANumber(line, name){  
  let length = line.length + 1;
  var customerHistory = [];
  line.push(name);
  customerHistory.push(name);
  return `You are customer #${customerHistory.length} in our serving history`;
// return `Welcome, ${name}. You are number `+ length + ` in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  
}


















