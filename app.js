let allChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                 "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
                "@", "£", "#", "%", "^", "&", "*", "(", ")", "_", "-",
                "=", "+", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let pw1 = document.getElementById('pw-1')
let pw2 = document.getElementById('pw-2')
let pw3 = document.getElementById('pw-3')
let pw4 = document.getElementById('pw-4')
let pwEl = document.getElementById('pw-length-declare')
// let randomNumber = Math.floor(Math.random() * allChars.length)


function password(){
    let password = ""
    let passwordLength = 12
    for (let i = 0; i < pwEl.value; i++){
       let charSel = allChars[Math.floor(Math.random() * allChars.length)]
       password += charSel
    
    }
    
    return password
    
    

}

function generatePassword(){
    pw1.value = password()
    pw2.value = password()
    pw3.value = password()
    pw4.value = password()
}