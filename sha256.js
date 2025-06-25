let convertContent = document.querySelectorAll(".convertContent")
let message = document.getElementById("message")
let play = document.getElementById("play")
let click = 0
let step = 0
let messageScheduleTitle = document.getElementById("messageScheduleTitle")
let processTitle = document.getElementById("processTitle")
let kTitle = document.getElementById("kTitle")
//Step 2 Variables
let messageTitle = document.getElementById("messageTitle")
let currentLength = 0

let messageItem = document.getElementById("messageItem")
let messageItemArr = []
let messageItemArrFormat = []

let messagePadding = document.getElementById("messagePadding")
let messagePaddingArr = []
let messagePaddingArrFormat = []

let messageLength = document.getElementById("messageLength")
let messageLengthArr = []
let messageLengthArrFormat = []
let messageLengthArrInt = 0
messageItem.textContent = messageItemArr.join("")

let wholeMessageArr=[]


//Step 3 Variable
let groupName = document.querySelectorAll(".groupName")
let groupContent = document.querySelectorAll(".groupContent")

//Step 4 Variable
let process = document.getElementById("process")

let messageOp13 = document.querySelectorAll(".messageOp13")
let messageItemOp13 = document.querySelectorAll(".messageItemOp13")

let messageItemOp11 = document.querySelectorAll(".messageItemOp11")
let itemTitle11 = document.getElementById("itemTitle11")
let messageOp11 = document.querySelectorAll(".messageOp11")

let messageItemOp12 = document.querySelectorAll(".messageItemOp12")
let itemTitle12 = document.getElementById("itemTitle12")
let messageOp12 = document.querySelectorAll(".messageOp12")

//step 5 Variable
let kgroupName = document.querySelectorAll(".kgroupName")
let kgroupContent = document.querySelectorAll(".kgroupContent")
let KConstant = document.getElementById("KConstant")
let varValue = document.querySelectorAll(".varValue")

let process2 = document.getElementById("process2")
let operatorResultSige = document.querySelectorAll(".operatorResultSige")
let operatorResultChefg = document.querySelectorAll(".operatorResultChefg")
let operatorResultSiga = document.querySelectorAll(".operatorResultSiga")
let operatorResultMajabc = document.querySelectorAll(".operatorResultMajabc")
let operatorNameT1 = document.querySelectorAll(".operatorNameT1")
let operatorResultT1 = document.querySelectorAll(".operatorResultT1")
//hash functions

//Shift right bitwise for [index] bits
function shift(arr,index){
 let result=[]
 for(i=0;i<arr.length;i++){
    result.push(0)
 }
  for(i = arr.length-index-1;i>-1;i--){
    result[i+index] = arr[i]
  }
  for(i=0;i<index;i++){
    result[i] = 0
  } 
  return result
}

//Rotate to the right bitwise for [index] bits
function rotate(arr,index){
  let temp = []
    let result = []
    let length = arr.length
  for(i=0;i<arr.length;i++){
    result.push(0)
  }
  
  for(i=0;i<index;i++){
    temp.push(arr[length-1-(index-i-1)])
  }
  for(i = arr.length-index-1;i>-1;i--){
    result[i+index] = arr[i]
  }
  for(i=0;i<index;i++){
    result[i] = temp[i]
  } 
  return result
}

//Bitwise OR for 2 arrays
function arrOR(arr1,arr2){
    ans = []
    for(i=0;i<arr1.length;i++){
        if(arr1[i] == 1 || arr2[i] == 1){
            ans.push(1)
        }
        else{
            ans.push(0)
        }
    }       
  return ans
}

function arrAND(arr1,arr2){
    ans = []
    for(i=0;i<arr1.length;i++){
        if(parseInt(arr1[i]) == 1 && parseInt(arr2[i]) == 1){
            ans.push(1)
        }
        else{
            ans.push(0)
        }
    }   
  return ans
}

function arrNOT(arr1){
    ans = []
    for(i=0;i<arr1.length;i++)
        ans.push(1- arr1[i]) 
    return ans
}

function arrXOR(arr1,arr2){
    ans = []
    for(i=0;i<arr1.length;i++){
        if((arr1[i]==arr2[i] && arr1[i]==1) || (arr1[i]==arr2[i] && arr1[i]==0))
            ans.push(0)
        else
            ans.push(1)
    }  
    return ans
}

function sigma0(a,length){
    arr1 = rotate(a,7%length)
    
    arr2 = rotate(a,18%length)
    
    arr3 = shift(a,3%length)

    arr4 = arrXOR(arr1,arr2)
    return arrXOR(arr4,arr3)
}
  
function sigma1(a,length){
    return arrXOR(arrXOR(rotate(a,17%length),rotate(a,19%length)),shift(a,10%length))
}
  

function Sigma0(a,length){
    return arrXOR(arrXOR(rotate(a,2%length),rotate(a,13%length)),rotate(a,22%length))
}
  
function Sigma1(a,length){
     return arrXOR(arrXOR(rotate(a,6%length),rotate(a,11%length)),rotate(a,25%length))
}
 

function majority(a,b,c){
    return arrXOR(arrXOR(arrAND(a,b),arrAND(a,c)),arrAND(b,c))
}
    
function choose(a,b,c){
     return arrXOR(
      arrAND(a,b),
      arrAND(arrNOT(a),c
      ))
}

function mod32BinAddition(a,b){
    carry = 0;
    ans = [];
    for(i=0;i<32;i++){
        ans[i]=0
    }
    for(i=31;i>=0;i--){
        ans[i] = (carry+a[i]+b[i])%2;
        carry = parseInt((carry+a[i]+b[i])/2);

    }
    return ans;
}




message.addEventListener("keyup",()=>{
    messageASCII = []
    messageBinary = []
    messageItemArrFormat = []
    messageItemArr = []
    messagePaddingArr = []
    messagePaddingArrFormat = []
    messageLengthArr = []
    messageLengthArrFormat = []

    // This append the numbers in step 1, i.e. the blue characeters.
    convertContent[0].textContent = message.value;
    for(i = 0;i<message.value.length;i++){
        messageASCII.push(message.value.charCodeAt(i))
        messageBinary.push(message.value.charCodeAt(i).toString(2).padStart(8,'0'))
    }
    convertContent[2].textContent = messageASCII.join(" ");
    convertContent[4].textContent = messageBinary.join(" ");
    

   
    //Add message
    messageItemArr = messageBinary.join("").split("")

    //Append 1
    messagePaddingArr.push('1')
    //Append 448 mod 512 number of 0
    currentLength = messageItemArr.length;
    while((messageItemArr.length+messagePaddingArr.length) % 512 != 448){
        messagePaddingArr.push('0')
    }
    console.log(messagePaddingArr.length)

    //Append the length of the message
    for(i = 0;i<64;i++){
        messageLengthArr.push(currentLength.toString(2).padStart(64,0).split("")[i])
    }
    messageLengthArrInt = messageItemArr.length;
    //Format the string such that there is a space after 8 bits
    for(i=1;i<messageItemArr.length+1;i++){
        messageItemArrFormat.push(messageItemArr[i-1])
        if(i%8==0){
            messageItemArrFormat.push(" ")
        }
    }

    for(i=1;i<messagePaddingArr.length+1;i++){
        messagePaddingArrFormat.push(messagePaddingArr[i-1])
        if(i%8==0){
            messagePaddingArrFormat.push(" ")
        }
    }

    for(i=1;i<messageLengthArr.length+1;i++){
        messageLengthArrFormat.push(messageLengthArr[i-1])
        if(i%8==0){
            messageLengthArrFormat.push(" ")
        }
    }

    //Print the numbers onto the html
    messageItem.textContent = messageItemArrFormat.join("")
    messagePadding.textContent = messagePaddingArrFormat.join("")
    messageLength.textContent = messageLengthArrFormat.join("")

     // This automatically changes the number of bit after padding
    messageTitle.textContent = `第二步：數據填充  (${messageItemArr.length+messagePaddingArr.length+messageLengthArr.length}位元)`;

    //Append the entire message into the array
    wholeMessageArr = [...messageItemArr,...messagePaddingArr,...messageLengthArr]
    for(i = 0;i<wholeMessageArr.length;i++){
        wholeMessageArr[i] = parseInt(wholeMessageArr[i])
    }

})


K = ['01000010100010100010111110011000', '01110001001101110100010010010001', '10110101110000001111101111001111', '11101001101101011101101110100101', '00111001010101101100001001011011', '01011001111100010001000111110001', '10010010001111111000001010100100', '10101011000111000101111011010101', '11011000000001111010101010011000', '00010010100000110101101100000001', '00100100001100011000010110111110', '01010101000011000111110111000011', '01110010101111100101110101110100', '10000000110111101011000111111110', '10011011110111000000011010100111', '11000001100110111111000101110100', '11100100100110110110100111000001', '11101111101111100100011110000110', '00001111110000011001110111000110', '00100100000011001010000111001100', '00101101111010010010110001101111', '01001010011101001000010010101010', '01011100101100001010100111011100', '01110110111110011000100011011010', '10011000001111100101000101010010', '10101000001100011100011001101101', '10110000000000110010011111001000', '10111111010110010111111111000111', '11000110111000000000101111110011', '11010101101001111001000101000111', '00000110110010100110001101010001', '00010100001010010010100101100111', '00100111101101110000101010000101', '00101110000110110010000100111000', '01001101001011000110110111111100', '01010011001110000000110100010011', '01100101000010100111001101010100', '01110110011010100000101010111011', '10000001110000101100100100101110', '10010010011100100010110010000101', '10100010101111111110100010100001', '10101000000110100110011001001011', '11000010010010111000101101110000', '11000111011011000101000110100011', '11010001100100101110100000011001', '11010110100110010000011000100100', '11110100000011100011010110000101', '00010000011010101010000001110000', '00011001101001001100000100010110', '00011110001101110110110000001000', '00100111010010000111011101001100', '00110100101100001011110010110101', '00111001000111000000110010110011', '01001110110110001010101001001010', '01011011100111001100101001001111', '01101000001011100110111111110011', '01110100100011111000001011101110', '01111000101001010110001101101111', '10000100110010000111100000010100', '10001100110001110000001000001000', '10010000101111101111111111111010', '10100100010100000110110011101011', '10111110111110011010001111110111', '11000110011100010111100011110010']
groupName.forEach((e,i)=>{
    e.textContent = `W${i+1}`;
})

kgroupName.forEach((e,i)=>{
    e.textContent = `K${i+1}`;
})
kgroupContent.forEach((e,i)=>{
    e.textContent = K[i]
})

let clickCount=0
let interval = setInterval(()=>{},1000)
clearInterval(interval)
let group = []
let indexArr=[0,0,0,0]
let Hini = ['01101010000010011110011001100111', '10111011011001111010111010000101', '00111100011011101111001101110010', '10100101010011111111010100111010', '01010001000011100101001001111111', '10011011000001010110100010001100', '00011111100000111101100110101011', '01011011111000001100110100011001']
let eVar = []
let fVar = []
let gVar = []
let aVar = []
let bVar = []
let cVar = []
let hVar = []
function simulation(step){
    //Set W1-W16: As it is just the same as M1-M16, W1-W16 are just copies of M1-M16
    if(step==1){
        for(i=0;i<16;i++){
            group = []
            for(j=i*32;j<(i+1)*32;j++){
                group.push(wholeMessageArr[j])
            }
            groupContent[i].textContent = group.join("")
        }
        process.style.opacity = "1";
    }

    //Set W17-W64.
    if(step>=2 && step<=49){
        let messageArr = []

        //Refresh the color of the lists of message groups
        groupContent.forEach((e)=>{
            e.style.color="#00DDDD"
        })

        //Receiving the content of M_{j-2},M_{j-7},M_{j-15},M_{j-16} and return it into a list
        message1 = groupContent[step+12].textContent.split("")
        message2 = groupContent[step+7].textContent.split("")
        message3 = groupContent[step-1].textContent.split("")
        message4 = groupContent[step-2].textContent.split("")

        //Convert strings to integers
        for(i = 0;i<32;i++){
            message1[i] = parseInt(message1[i]);
            message2[i] = parseInt(message2[i]);
            message3[i] = parseInt(message3[i]);
            message4[i] = parseInt(message4[i]);
        }

        //Set colors of the groups being calculated
        groupContent[step+12].style.color = "white";
        groupContent[step+7].style.color = "green";
        groupContent[step-2].style.color = "lightgreen";
        groupContent[step-1].style.color = "yellow";
        groupContent[step+14].style.color = "fuchsia";

        //Calculating and return the result of the new message group at W_{j}
        groupContent[step+14].textContent = mod32BinAddition(mod32BinAddition(mod32BinAddition(sigma1(message1,32),message2),sigma0(message3,32)),message4).join("")
        
        //Arrays that stores the attributes of the message groups being calculated
        messageArr = [message1.join(""),message2.join(""),message3.join(""),message4.join(""),groupContent[step+14].textContent]
        colorArr = ["white","green","lightgreen","yellow","fuchsia"]
        indexArr = [`σ1(W${step+13})`,`W${step+8}`,`σ0(W${step-1})`,`W${step}`,`W${step+15}`]

        //Changes the text Contents in the "process" part
        itemTitle11.textContent = `W${step+13}:     ${messageArr[0]}`
        messageItemOp11[0].textContent = rotate(message1,7).join("")
        messageItemOp11[1].textContent = rotate(message1,18).join("")
        messageItemOp11[2].textContent = shift(message1,3).join("")
        messageItemOp11[3].textContent = sigma1(message1,32).join("")
        messageOp11[3].textContent = indexArr[0]

        itemTitle12.textContent = `W${step-1}:     ${messageArr[0]}`
        messageItemOp12[0].textContent = rotate(message1,17).join("")
        messageItemOp12[1].textContent = rotate(message1,19).join("")
        messageItemOp12[2].textContent = shift(message1,10).join("")
        messageItemOp12[3].textContent = sigma1(message1,32).join("")
        messageOp12[3].textContent = indexArr[2]

        messageOp13.forEach((e,i)=>{
            e.textContent = indexArr[i];
            e.style.color = colorArr[i]
        })
        messageItemOp13.forEach((e,i)=>{
            e.textContent = messageArr[i]
            e.style.color = colorArr[i]
        })
    }
    if(step>=50 && step<=114){
        process2.style.opacity = "1";
         groupContent.forEach((e)=>{
            e.style.color="#00DDDD"
        })
        kgroupContent.forEach((e)=>{
            e.style.color="#00DDDD"
        })
        groupContent[step-50].style.color = "orange";
        kgroupContent[step-50].style.color = "magenta";
        colorArr = ["red","orange","yellow","green","lightgreen","blue","fuchsia"]
        KConstant.style.opacity = "1";
        process.style.opacity = "0";
        varValue.forEach((e,i)=>{
                e.textContent = Hini[i]
                e.style.color = colorArr[i]
            })
        
        eVar = varValue[4].textContent.split("")
        for(i = 0;i<32;i++){
            eVar[i] = parseInt(eVar[i])
        }
        fVar = varValue[5].textContent.split("")
        for(i = 0;i<32;i++){
            fVar[i] = parseInt(fVar[i])
        }
        gVar = varValue[6].textContent.split("")
        for(i = 0;i<32;i++){
            gVar[i] = parseInt(gVar[i])
        }
        aVar = varValue[0].textContent.split("")
        for(i = 0;i<32;i++){
            aVar[i] = parseInt(aVar[i])
        }
        bVar = varValue[1].textContent.split("")
        for(i = 0;i<32;i++){
            bVar[i] = parseInt(bVar[i])
        }
        cVar = varValue[2].textContent.split("")
        for(i = 0;i<32;i++){
            cVar[i] = parseInt(cVar[i])
        }
        hVar = varValue[7].textContent.split("")
        for(i = 0;i<32;i++){
            hVar[i] = parseInt(hVar[i])
        }

        operatorResultSige[0].textContent = rotate(eVar,6).join("")
        operatorResultSige[1].textContent = rotate(eVar,11).join("")
        operatorResultSige[2].textContent = rotate(eVar,25).join("")
         operatorResultSige[3].textContent = Sigma1(eVar,32).join("")

         operatorResultSige.forEach((e)=>{
            e.style.color = "chocolate"
         })

         operatorResultChefg[0].textContent = arrNOT(eVar).join("")
         operatorResultChefg[1].textContent = arrAND(eVar,fVar).join("")
         operatorResultChefg[2].textContent = arrAND(arrNOT(eVar),gVar).join("")
         operatorResultChefg[3].textContent = arrXOR(arrAND(eVar,fVar),arrAND(arrNOT(eVar),gVar)).join("")
         operatorResultChefg[4].textContent = arrXOR(arrAND(eVar,fVar),arrAND(arrNOT(eVar),gVar)).join("")
         operatorResultChefg.forEach((e)=>{
            e.style.color = "deepskyblue"
         })

         operatorResultSiga[0].textContent = rotate(aVar,2).join("")
        operatorResultSiga[1].textContent = rotate(aVar,13).join("")
        operatorResultSiga[2].textContent = rotate(aVar,22).join("")
         operatorResultSiga[3].textContent = Sigma0(aVar,32).join("")

         operatorResultSiga.forEach((e)=>{
            e.style.color = "gold"
         })

        operatorResultMajabc[0].textContent = arrAND(aVar,bVar).join("")
        operatorResultMajabc[1].textContent = arrAND(aVar,cVar).join("")
        operatorResultMajabc[2].textContent = arrAND(bVar,cVar).join("")
        operatorResultMajabc[3].textContent = arrXOR(arrAND(aVar,bVar),arrAND(aVar,cVar)).join("")
        operatorResultMajabc[4].textContent = arrXOR(arrXOR(arrAND(aVar,bVar),arrAND(aVar,cVar)),arrAND(bVar,cVar)).join("")
        operatorResultMajabc[5].textContent = operatorResultMajabc[4].textContent
        operatorResultMajabc.forEach((e)=>{
            e.style.color = "ivory"
        })
        operatorNameT1[3].textContent = `W${step-49}`
        operatorNameT1[4].textContent = `K${step-49}`

        operatorResultT1[0].textContent = hVar.join("");

        operatorResultT1[1].textContent = Sigma1(eVar,32).join("")
        operatorResultT1[1].style.color = "chocolate"

        operatorResultT1[2].textContent = arrXOR(arrXOR(arrAND(aVar,bVar),arrAND(aVar,cVar)),arrAND(bVar,cVar)).join("")
        operatorResultT1[2].style.color = "deepskyblue"

        operatorResultT1[3].textContent = groupContent[step-50].textContent;
        operatorResultT1[3].style.color = "gold"

        num1 = groupContent[step-50].textContent.split("")
        for(i=0;i<32;i++){
            num1[i] = parseInt(num1[i])
        }

        operatorResultT1[4].textContent = kgroupContent[step-50].textContent;
        operatorResultT1[4].style.color = "magenta"
        num2 = kgroupContent[step-50].textContent.split("")
        for(i=0;i<32;i++){
            num2[i] = parseInt(num2[i])
        }
        operatorResultT1[5].textContent = mod32BinAddition(mod32BinAddition(mod32BinAddition(mod32BinAddition(hVar,Sigma1(eVar,32)),arrXOR(arrXOR(arrAND(aVar,bVar),arrAND(aVar,cVar)),arrAND(bVar,cVar))),num1),num2).join("")
        }
}

play.addEventListener("mousedown",()=>{
    clickCount++;
    
    if(clickCount%2==1){
        interval = setInterval(()=>{
            step++
            simulation(step);
        },100)
    }
    else{
        clearInterval(interval)
    }
    
})

