//define variables
let firstNoun = ""
let secondNoun = ""
let thirdNoun = ""
let fourthNoun = ""
let fifthNoun = ""
let sixthNoun = ""
let seventhNoun = ""
let firstVerb = ""
let secondVerb = ""
let thirdVerb = ""
let fourthVerb = ""
let firstAdjective = ""
let secondAdjective = ""
let thirdAdjective = ""
let userName = ""
// noun values

inptNoun1.onclick=function(){
  alert(`Enter one of the following nouns: phone, student, body, shirt, window, hammer, park.`)
}

inptNoun2.onclick=function(){
   alert(`Enter one of the following nouns: phone, student, body, shirt, window, hammer, park.`)
}

inptNoun3.onclick=function(){
   alert(`Enter one of the following nouns: phone, student, body, shirt, window, hammer, park.`)
}

inptNoun4.onclick=function(){
   alert(`Enter one of the following nouns: phone, student, body, shirt, window, hammer, park.`)
}

inptNoun5.onclick=function(){
   alert(`Enter one of the following nouns: phone, student, body, shirt, window, hammer, park.`)
}

inptNoun6.onclick=function(){
   alert(`Enter one of the following nouns: phone, student, body, shirt, window, hammer, park.`)
}

inptNoun7.onclick=function(){
   alert(`Enter one of the following nouns: phone, student, body, shirt, window, hammer, park.`)
}

//verb values

inptVerb1.onclick=function(){
  alert(`Enter one of the following verbs: sting, watch, threaten, start.`)
}

inptVerb2.onclick=function(){
    alert(`Enter one of the following verbs: sting, watch, threaten, start.`)
}

inptVerb3.onclick=function(){
    alert(`Enter one of the following verbs: sting, watch, threaten, start.`)
}

inptVerb4.onclick=function(){
    alert(`Enter one of the following verbs: sting, watch, threaten, start.`)
}

//adjective values

inptAdjective1.onclick=function(){
  alert(`Enter one of the following adjectives: angry, disgusting, spooky.`)
}

inptAdjective2.onclick=function(){
    alert(`Enter one of the following adjectives: angry, disgusting, spooky.`)
}

inptAdjective3.onclick=function(){
    alert(`Enter one of the following adjectives: angry, disgusting, spooky.`)
}

// on submit


btnSubmitMadLibs.onclick=function(){
  firstNoun = inptNoun1.value
  secondNoun = inptNoun2.value
  thirdNoun = inptNoun3.value
  fourthNoun = inptNoun4.value
  fifthNoun = inptNoun5.value
  sixthNoun = inptNoun6.value
  seventhNoun = inptNoun7.value
  
  firstVerb = inptVerb1.value
  secondVerb = inptVerb2.value
  thirdVerb = inptVerb3.value
  fourthVerb = inptVerb4.value
  
  firstAdjective = inptAdjective1.value
  secondAdjective = inptAdjective2.value
  thirdAdjective = inptAdjective3.value

  userName = inptUserName.value
  
  lblStory.textContent = `${userName}, a ${firstNoun} in Nebraska was arrested this morning after ${firstVerb.concat(`ing`)} in front of a ${firstAdjective} ${secondNoun}. The perpetrator had a history of ${secondVerb.concat(`ing`)}, but no one - not even her ${thirdNoun} - ever imagined she'd ${thirdVerb} with a ${fourthNoun}.
      Even her ${fifthNoun} was surprised. "I always thought she was ${secondAdjective}, but I never thought she'd do something like this."
      Either way, we imagine that after witnessing her ${fourthVerb.concat(`ing`)} with a ${thirdAdjective} ${sixthNoun}, there are probably a whole lot of ${seventhNoun.concat(`s`)} that are going to need therapy.`
}

btnResetMadLibs.onclick=function(){
  inptNoun1.value = ""
  inptNoun2.value = ""
  inptNoun3.value = ""
  inptNoun4.value = ""
  inptNoun5.value = ""
  inptNoun6.value = ""
  inptNoun7.value = ""
  
  inptVerb1.value = ""
  inptVerb2.value = ""
  inptVerb3.value = ""
  inptVerb4.value = ""
  
  inptAdjective1.value = ""
  inptAdjective2.value = ""
  inptAdjective3.value = ""
  
  inptUserName.value = ""
  
  lblStory.textContent = ""
}
