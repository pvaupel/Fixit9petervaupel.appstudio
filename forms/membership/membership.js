
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]



btnSubmitName.onclick=function(){
  let userFirstName = inptFirstName.value
  
  if (members.includes(userFirstName)) {
      members.push(userFirstName)
      lblMember.textContent = userFirstName + ", you are a member"
  } else {
      lblMember.textContent = userFirstName + ", you are not a member."
  }
}
