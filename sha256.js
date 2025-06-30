let convertContent = document.querySelectorAll(".convertContent")
let message = document.getElementById("message")
let play = document.getElementById("play")
let click = 0
let step = 0
let messageScheduleTitle = document.getElementById("messageScheduleTitle")
let processTitle = document.getElementById("processTitle")
let kTitle = document.getElementById("kTitle")
let reverse = document.getElementById("reverse")
let body = document.getElementById("body")
let next = document.getElementById("next")
let reset = document.getElementById("reset")
let forward = document.getElementById("forward")
let hintContainer = document.getElementById("hintContainer")
let button = document.querySelectorAll(".button")
let speed = document.getElementById("speed")

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
//finish appending children in message list
let messageListItem = []

for(i=0;i<64;i++){
    messageListItem.push(document.createElement("div"))
    let messageListName = document.createElement("div")
    let messageListContent = document.createElement("div")

    messageListItem[i].className = "messageGroup"
    messageListName.className = "groupName"
    messageListName.textContent = `W${i+1}`
    messageListContent.className = "groupContent"

    messageListItem[i].appendChild(messageListName)
    messageListItem[i].appendChild(messageListContent)
    messageScheduleContent.appendChild(messageListItem[i])
    
}


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

//Finish appending children in kContent
let kArr = []
let kContent = document.getElementById("kContent")
for(i = 0;i<64;i++){
    kArr.push(document.createElement("div"))
    let kgroupName = document.createElement("div")
    let kgroupContent =document.createElement("div")

    kArr[i].className = "kGroup"

    kgroupName.className = "kgroupName"
    kgroupContent.className = "kgroupContent"

    kArr[i].appendChild(kgroupName)
    kArr[i].appendChild(kgroupContent)

    kContent.appendChild(kArr[i])
}



//step 5 Variable
let kgroupName = document.querySelectorAll(".kgroupName")
let kgroupContent = document.querySelectorAll(".kgroupContent")
let KConstant = document.getElementById("KConstant")
let varValue = document.querySelectorAll(".varValue")
let varValueH = document.querySelectorAll(".varValueH")

let process2 = document.getElementById("process2")
let operatorResultSige = document.querySelectorAll(".operatorResultSige")
let operatorResultChefg = document.querySelectorAll(".operatorResultChefg")
let operatorResultSiga = document.querySelectorAll(".operatorResultSiga")
let operatorResultMajabc = document.querySelectorAll(".operatorResultMajabc")
let operatorNameT1 = document.querySelectorAll(".operatorNameT1")
let operatorResultT1 = document.querySelectorAll(".operatorResultT1")
let operatorResultT2 = document.querySelectorAll(".operatorResultT2")
let operatorResultNewVar = document.querySelectorAll(".operatorResultNewVar")



//Result
let calcHashContainer = document.getElementById("calcHashContainer");
//Dynamically append DOM in JS in Result Section
let containerHashArr = []
let containerHashArr2 = []
let classNameArr = ["operatorHash","operatorNameHash","operatorResultHash","operatorResultHashHex"]
//Layout
/*
.calcHashContainer                  (0th layer - Created in HTML file)
    .containerHash                  (1st layer - Dynamically created in JS)
        .calcContainerHash          (2nd layer - Dynamically created in JS)
            .operatorHash           (3a-th layer - Dynamically created in JS)
            .operatorNameHash       (3b-th layer - Dynamically created in JS)
            .operatorResultHash     (3c-th layer - Dynamically created in JS)
            .operatorResultHashHex  (3d-th layer - Dynamically created in JS)

*/
for(i = 0;i<8;i++){
    containerHashArr.push(document.createElement("div"))
    containerHashArr[i].className = "containerHash"
    for(j=0;j<4;j++){
        
        if(j!=2){
            //Create 2nd layer DOM elements
            let newElement = document.createElement("div")
            newElement.className = "calcContainerHash"
            //Appending 2nd layerDOM elements
            containerHashArr[i].appendChild(newElement)
        }
        else{
            let horizontalLine = document.createElement("hr")
            containerHashArr[i].appendChild(horizontalLine)
        }
    }
    calcHashContainer.appendChild(containerHashArr[i])
}

let calcContainerHash = document.querySelectorAll(".calcContainerHash")
let count = 0
console.log(calcContainerHash.length)
for(i=0;i<24;i++){
    for(k=0;k<4;k++){
        //Creating 3rd layer DOM elements
        let e = document.createElement("div")
        e.className = classNameArr[k]
        if((i*4+k+11)%12==0){
            e.textContent = String.fromCharCode(97+count)
            count++
        }
        if((i*4+k+8)%12==0){
            e.textContent = "+"
        }
        if((i*4+k+7)%12==0){
            e.textContent = `舊H${count}`
        }
        if((i*4+k+3)%12==0){
            e.textContent = `新H${count}`
        }

        //Appending 3rd layerDOM element
        calcContainerHash[i].appendChild(e)
    }   
}
let resultContentResult = document.getElementById("resultContentResult")
let result = document.getElementById("result")
let operatorResultHash = document.querySelectorAll(".operatorResultHash")
let operatorResultHashHex = document.querySelectorAll(".operatorResultHashHex")
console.log(calcContainerHash[0])





//Hash Functions
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

//Initialize message padding for calculation
messagePaddingArr = ['1']
for(i=0;i<447;i++){
    messagePaddingArr.push('0')
}
for(i = 0;i<64;i++){
    messageLengthArr.push(currentLength.toString(2).padStart(64,0).split("")[i])
}
wholeMessageArr = [...messageItemArr,...messagePaddingArr,...messageLengthArr]
for(i = 0;i<wholeMessageArr.length;i++){
    wholeMessageArr[i] = parseInt(wholeMessageArr[i])
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
let eVar = []
let fVar = []
let gVar = []
let aVar = []
let bVar = []
let cVar = []
let hVar = []
let dVar = []
let Hini = ['01101010000010011110011001100111', '10111011011001111010111010000101', '00111100011011101111001101110010', '10100101010011111111010100111010', '01010001000011100101001001111111', '10011011000001010110100010001100', '00011111100000111101100110101011', '01011011111000001100110100011001']

function simulation(step){
    //Set W1-W16: As it is just the same as M1-M16, W1-W16 are just copies of M1-M16
    if(step%116==1){

        for(i=0;i<16;i++){
            group = []
            for(j=(i+parseInt(step/116)*16)*32;j<(i+1+parseInt(step/116)*16)*32;j++){
                group.push(wholeMessageArr[j])

            }
            groupContent[i].textContent = group.join("")
        }
        process.style.opacity = "1";
        process.style.zIndex = 100
        process2.style.opacity = "0";
        process2.style.zIndex = -100
        KConstant.style.opacity = "0";
        KConstant.style.zIndex = -100
    }

    //Set W17-W64.
    if(step%116 >=2&& step%116<=49){
         process.style.opacity = "1";
         process.style.zIndex = 100
        process2.style.opacity = "0";
        process2.style.zIndex = -100
        KConstant.style.opacity = "0";
        KConstant.style.zIndex = -100
        let messageArr = []

        //Refresh the color of the lists of message groups
        groupContent.forEach((e)=>{
            e.style.color="#0077b6"
        })

        //Receiving the content of M_{j-2},M_{j-7},M_{j-15},M_{j-16} and return it into a list
        message1 = groupContent[(step+12)%116].textContent.split("")
        message2 = groupContent[(step+7)%116].textContent.split("")
        message3 = groupContent[(step-1)%116].textContent.split("")
        message4 = groupContent[(step-2)%116].textContent.split("")

        //Convert strings to integers
        for(i = 0;i<32;i++){
            message1[i] = parseInt(message1[i]);
            message2[i] = parseInt(message2[i]);
            message3[i] = parseInt(message3[i]);
            message4[i] = parseInt(message4[i]);
        }

        //Set colors of the groups being calculated
        groupContent[(step+12)%116].style.color = "white";
        groupContent[(step+7)%116].style.color = "green";
        groupContent[(step-1)%116].style.color = "lightgreen";
        groupContent[(step-2)%116].style.color = "yellow";
        groupContent[(step+14)%116].style.color = "fuchsia";

        //Calculating and return the result of the new message group at W_{j}
        groupContent[(step+14)%116].textContent = mod32BinAddition(mod32BinAddition(mod32BinAddition(sigma1(message1,32),message2),sigma0(message3,32)),message4).join("")
        
        //Arrays that stores the attributes of the message groups being calculated
        messageArr = [message1.join(""),message2.join(""),message3.join(""),message4.join(""),groupContent[(step+14)%116].textContent]
        colorArr = ["white","green","lightgreen","yellow","fuchsia"]
        indexArr = [`σ1(W${(step+13)%116})`,`W${(step+8)%116}`,`σ0(W${(step)%116})`,`W${(step-1)%116}`,`W${(step+15)%116}`]

        //Changes the text Contents in the "process" part
        itemTitle11.textContent = `W${(step+13)%116}:     ${messageArr[0]}`
        messageItemOp11[0].textContent = rotate(message1,17).join("")
        messageItemOp11[1].textContent = rotate(message1,19).join("")
        messageItemOp11[2].textContent = shift(message1,10).join("")
        messageItemOp11[3].textContent = sigma1(message1,32).join("")
        messageOp11[3].textContent = indexArr[0]

        itemTitle12.textContent = `W${(step)%116}:     ${messageArr[2]}`
        messageItemOp12[0].textContent = rotate(message3,7).join("")
        messageItemOp12[1].textContent = rotate(message3,18).join("")
        messageItemOp12[2].textContent = shift(message3,3).join("")
        messageItemOp12[3].textContent = sigma0(message3,32).join("")
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

    //Calculation of variables a-h
    if(step%116>=50 && step%116<=113){
        
        //Calculating a-h
        messageScheduleTitle.textContent = "第四步：雜凑迭代（信息）"
         groupContent.forEach((e)=>{
            e.style.color="#0077b6"
        })
        kgroupContent.forEach((e)=>{
            e.style.color="#0077b6"
        })

        //Changes message and k-Constant columns' color
        groupContent[(step-50)%116].style.color = "orange";
        kgroupContent[(step-50)%116].style.color = "magenta";

        //Initial variable colors
        colorArr = ["red","orange","yellow","green","lightgreen","cyan","fuchsia"]

        //Shows k-Constant and hash calculation columns. Hide message calculation column
        KConstant.style.opacity = "1";
        KConstant.style.zIndex = 100
        process.style.opacity = "0";
        process.style.zIndex = -100;
        process2.style.opacity = "1";
        process2.style.zIndex = 100
        

        
        if(step%116==50){
            varValueH.forEach((e,i)=>{
                e.textContent = Hini[i]
                e.style.color = colorArr[i]
            })
            varValue.forEach((e,i)=>{
                e.textContent = Hini[i]
                e.style.color = colorArr[i]
            })
        }
        else{
            varValue.forEach((e,i)=>{
                e.textContent = operatorResultNewVar[7-i].textContent
            })
        }

        //Obtain the integer array from variable a-h
        //string -> string array -> int array
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
        dVar = varValue[3].textContent.split("")
        for(i = 0;i<32;i++){
            dVar[i] = parseInt(dVar[i])
        }

        //Calculate Σ1(e)
        operatorResultSige[0].textContent = rotate(eVar,6).join("")
        operatorResultSige[1].textContent = rotate(eVar,11).join("")
        operatorResultSige[2].textContent = rotate(eVar,25).join("")
         operatorResultSige[3].textContent = Sigma1(eVar,32).join("")

         operatorResultSige.forEach((e)=>{
            e.style.color = "chocolate"
         })

         //Calculate Choose(e,f,g)
         operatorResultChefg[0].textContent = arrNOT(eVar).join("")
         operatorResultChefg[1].textContent = arrAND(eVar,fVar).join("")
         operatorResultChefg[2].textContent = arrAND(arrNOT(eVar),gVar).join("")
         operatorResultChefg[3].textContent = arrXOR(arrAND(eVar,fVar),arrAND(arrNOT(eVar),gVar)).join("")
         operatorResultChefg[4].textContent = arrXOR(arrAND(eVar,fVar),arrAND(arrNOT(eVar),gVar)).join("")
         operatorResultChefg.forEach((e)=>{
            e.style.color = "deepskyblue"
         })

         //Calculate Σ0(a)
         operatorResultSiga[0].textContent = rotate(aVar,2).join("")
        operatorResultSiga[1].textContent = rotate(aVar,13).join("")
        operatorResultSiga[2].textContent = rotate(aVar,22).join("")
         operatorResultSiga[3].textContent = Sigma0(aVar,32).join("")

         operatorResultSiga.forEach((e)=>{
            e.style.color = "gold"
         })

         
        //calculate Majority(a,b,c)
        operatorResultMajabc[0].textContent = arrAND(aVar,bVar).join("")
        operatorResultMajabc[1].textContent = arrAND(aVar,cVar).join("")
        operatorResultMajabc[2].textContent = arrAND(bVar,cVar).join("")
        operatorResultMajabc[3].textContent = arrXOR(arrAND(aVar,bVar),arrAND(aVar,cVar)).join("")
        operatorResultMajabc[4].textContent = arrXOR(arrXOR(arrAND(aVar,bVar),arrAND(aVar,cVar)),arrAND(bVar,cVar)).join("")
        operatorResultMajabc[5].textContent = operatorResultMajabc[4].textContent
        operatorResultMajabc.forEach((e)=>{
            e.style.color = "ivory"
        })

        //Retrieve binary numbers for the calculation of T1
        operatorNameT1[3].textContent = `W${(step-49)%116}`
        operatorNameT1[4].textContent = `K${(step-49)%116}`

        operatorResultT1[0].textContent = hVar.join("");
        operatorResultT1[1].textContent = Sigma1(eVar,32).join("")
        operatorResultT1[1].style.color = "chocolate"
        operatorResultT1[2].textContent =  arrXOR(arrAND(eVar,fVar),arrAND(arrNOT(eVar),gVar)).join("")
        operatorResultT1[2].style.color = "deepskyblue"
        operatorResultT1[3].textContent = groupContent[(step-50)%116].textContent;
        operatorResultT1[3].style.color = "gold"
        //num1 = Wj, where j is the row number in the message column W
        num1 = groupContent[(step-50)%116].textContent.split("")
        for(i=0;i<32;i++){
            num1[i] = parseInt(num1[i])
        }
        //append num1 to T1 calculation
        operatorResultT1[4].textContent = kgroupContent[(step-50)%116].textContent;
        operatorResultT1[4].style.color = "magenta"
        num2 = kgroupContent[(step-50)%116].textContent.split("")
        //num2 = Kj, where j is the row number in the k-constant column K
        for(i=0;i<32;i++){
            num2[i] = parseInt(num2[i]) 
        }
        //Calculation of T1
        operatorResultT1[5].textContent = mod32BinAddition(mod32BinAddition(mod32BinAddition(mod32BinAddition(hVar,Sigma1(eVar,32)),arrXOR(arrAND(eVar,fVar),arrAND(arrNOT(eVar),gVar))),num1),num2).join("")
        
        //Retrieve binary numbers for the calculation of T2
        operatorResultT2[0].textContent =  Sigma0(aVar,32).join("");
         operatorResultT2[0].style.color = "gold"
        operatorResultT2[1].textContent = arrXOR(arrXOR(arrAND(aVar,bVar),arrAND(aVar,cVar)),arrAND(bVar,cVar)).join("");
        operatorResultT2[1].style.color = "ivory"
        //Calculation of T2
        operatorResultT2[2].textContent = mod32BinAddition(Sigma0(aVar,32),arrXOR(arrXOR(arrAND(aVar,bVar),arrAND(aVar,cVar)),arrAND(bVar,cVar))).join("")
        
        //Calculation of new set of variables a-h
        operatorResultNewVar[0].textContent = gVar.join("")
        operatorResultNewVar[1].textContent = fVar.join("")
        operatorResultNewVar[2].textContent = eVar.join("")
        operatorResultNewVar[3].textContent = mod32BinAddition(dVar,mod32BinAddition(mod32BinAddition(mod32BinAddition(mod32BinAddition(hVar,Sigma1(eVar,32)),arrXOR(arrAND(eVar,fVar),arrAND(arrNOT(eVar),gVar))),num1),num2)).join("")
        operatorResultNewVar[4].textContent = cVar.join("")
        operatorResultNewVar[5].textContent = bVar.join("")
        operatorResultNewVar[6].textContent = aVar.join("")
        operatorResultNewVar[7].textContent = mod32BinAddition(mod32BinAddition(Sigma0(aVar,32),arrXOR(arrXOR(arrAND(aVar,bVar),arrAND(aVar,cVar)),arrAND(bVar,cVar))),mod32BinAddition(mod32BinAddition(mod32BinAddition(mod32BinAddition(hVar,Sigma1(eVar,32)),arrXOR(arrAND(eVar,fVar),arrAND(arrNOT(eVar),gVar))),num1),num2)).join("")
        
        
    }

    //For calculating new hash numbers H1-H8
    if((step)%116==114){
        colorArr = ["red","orange","yellow","green","lightgreen","cyan","fuchsia","gold"]
        if(step-50>0){
            //temp stores the initial Hash value(i.e. H1-H8) from the previous process.
            //temp2 stores the new variables(i.e. a-h) from the previous process
            let temp = Hini
            let temp2 = []
            for(m = 0;m<=7;m++){
                temp2.push(operatorResultNewVar[m].textContent)
            }

            //temp11 stores initial Hash value(i.e. H1-H8) bitwise
            //temp21 stores new variables(i.e. a-h) bitwise
            /*
                For a 512-bit long message "abc"

                temp1 stores [["01101010000010011110011001100111"],...] (initial hash value H1-H8)
                temp2 stores [["10010110000111110100100010010100"],...] (new variables a-h)
                temp11 stores [[0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1],...] (initial hash value H1-H8 bitwise)
                temp21 stores [[1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0],...] (new variables a-h bitwise)
            */
            let temp11 = []
            let temp21 = []
            Hini = []
            for(k = 0;k<=7;k++){
                temp11 = []
                temp21 = []
                for(l = 0;l<32;l++){
                    temp11.push(parseInt(temp[k][l]))
                    temp21.push(parseInt(temp2[7-k][l]))
                    
                }
                /*
                Final Hash value will be stored back to Hini 
                */
                Hini.push(mod32BinAddition(temp11,temp21).join(""))


                operatorResultHash.forEach((e,i)=>{
                    //Print the calculation in the HTML in step 5
                    if(i==k*3){
                        e.textContent = temp21.join("")
                        e.style.color = colorArr[i/3]
                    }
                    if(i==k*3+1){
                        e.textContent = temp11.join("")
                    }
                    if(i==k*3+2){
                        e.textContent = Hini[k] + " →"
                    }
                })

                operatorResultHashHex.forEach((e,i)=>{
                    if(i==k*3+2){
                         e.textContent = parseInt(operatorResultHash[i].textContent,2).toString(16)
                    }
                   
                })
                
                
            }


        }
        
        

    }

    if((step)%116==0){
        //Reset HTML style
        groupContent.forEach((e,i)=>{
            e.textContent = ""
        })
        process.style.opacity = 0
        process.style.zIndex = -100;
        process2.style.opacity = 0
        process2.style.zIndex = -100
        KConstant.style.opacity = 0
        KConstant.style.zIndex = -100
        messageScheduleTitle.textContent = `第三步：消息調度 (第${step/116+1}組數據塊/共${(messageItemArr.length+messagePaddingArr.length+messageLengthArr.length)/512}組）`
    }
        
}

let speedInt = 0

function playsimulation(){
        //clickCount = count how many times user has clicked
    clickCount++;
    //speedInt = speed of calculation (in millisecond)
    //If user input an invalid number, the program will set it to 1
    try{
        speedInt = parseInt(speed.value);
    }
    catch{
        speedInt = 1;
    }
    //To window will slide to the calculation process
    window.scrollTo(
        {
            top:process2.offsetTop,
            left:0,
            behavior:"smooth"
        }    
    )
    if(clickCount%2==1){
        interval = setInterval(()=>{
            //Detects whether the calculation has finished
            if(step == 116 * ((wholeMessageArr.length)/512) - 2){
                resultArr = []
                clickCount = 0;
                //if finished, the window will slide to the result
                window.scrollTo(
                    {
                        top:result.offsetTop,
                        left:0,
                        behavior:"smooth"
                    }
                    
                )
                //resultArr stores the hexadecimal numbers from the final hash values H1-H8
                for(i=0;i<8;i++){
                    resultArr.push(parseInt(Hini[i],2).toString(16))
                }
                resultContentResult.textContent = resultArr.join("")
                //Stops simulation
                clearInterval(interval)
                //Hide "play/pause", "next step" and "finish calculation" button
                for(i=2;i<5;i++){
                    button[i].style.zIndex = "-10";
                    button[i].style.opacity = "0";
                }
              

               
            }
            else{
            //if the calculation hasn't finished, then keep playing
            step++
            simulation(step);
           
            }
            
        },speedInt)
    }

    else{
        //Pause the simulation
        clearInterval(interval)
    }
    
}

play.addEventListener("mousedown",()=>{
    playsimulation();
})

function back(){
    //Go back a step and run through the whole process from step 1 to step [step-1]
    let stop = step--
    step = -1
    for(m=0;m<stop;m++){
        step++
        simulation(step);
    }
    button[3].style.opacity = "1";
    button[3].style.zIndex = "100";
}

reverse.addEventListener("mousedown",()=>{
    back();
})

function nextStep(){
    //Go to the next step
    step++
    simulation(step);
    if(step == 116 * ((messageItemArr.length+messagePaddingArr.length+messageLengthArr.length)/512) - 3){
        button[3].style.opacity = "0";
        button[3].style.zIndex = "-100";
    }
}

next.addEventListener("mousedown",()=>{
    nextStep()
})

function resetSimulation(){
    //Reset the step to 0 and set initial hash value to fractional parts of the square roots of the rst eight primes
    step = 0
     Hini = ['01101010000010011110011001100111', '10111011011001111010111010000101', '00111100011011101111001101110010', '10100101010011111111010100111010', '01010001000011100101001001111111', '10011011000001010110100010001100', '00011111100000111101100110101011', '01011011111000001100110100011001']
    simulation(step);
    for(i=0;i<5;i++){
        button[i].style.opacity = 1;
        button[i].style.zIndex = "100";
    }
}

reset.addEventListener("mousedown",()=>{
    resetSimulation();
})

function answer(){
    //set the step to 0 and run through the whole simulation without displaying the intermediate steps
    step = 0;

    //This is just a copy from the [play] button program.
    for(i=2;i<5;i++){
        button[i].style.zIndex = "-10";
        button[i].style.opacity = "0";
    }
    for(a=0;a<116 * ((messageItemArr.length+messagePaddingArr.length+messageLengthArr.length)/512) - 2;a++){
        step++
        simulation(step);
    }
    resultArr = []
    clickCount = 0;

    window.scrollTo(
        {
            top:result.offsetTop,
            left:0,
            behavior:"smooth"
        }
        
    )

    for(i=0;i<8;i++){
        resultArr.push(parseInt(Hini[i],2).toString(16))
    }
    resultContentResult.textContent = resultArr.join("")
    clearInterval(interval)
    step =0

}

forward.addEventListener("mousedown",()=>{
    answer();
})

window.addEventListener("mousemove",(e)=>{
    //hintContainer is just a tooltip but I forget the name
    //Display button name and translation of binary nums to decimal and hexadecimal nums
    hintContainer.style.left = `${e.clientX+10}px`
     hintContainer.style.top = `${e.clientY+window.scrollY+10}px`
})


button.forEach((e,i)=>{
    //Configure the names of the buttons
    let text = ["重置","上一步","開始/停止模擬","下一步","直出答案"]
    e.addEventListener("mouseover",()=>{
        hintContainer.textContent = text[i]
        hintContainer.style.opacity = 1
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0
    })
})

groupContent.forEach((e,i)=>{
    //When the cursor hovers on one of the binary numbers in the message column, the tooltip will be dipslayed with hexa and dec nums of the corresponding bin num.
    e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "W" + `${i+1}` + "  dec:"+parseInt(groupContent[i].textContent,2)+ "  hex:"+parseInt(groupContent[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

kgroupContent.forEach((e,i)=>{

    //When the cursor hovers on one of the binary numbers in the k-Constant column, the tooltip will be dipslayed with hexa and dec nums of the corresponding bin num.
    e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "K" + `${i+1}` + "  dec:"+parseInt(kgroupContent[i].textContent,2)+ "  hex:"+parseInt(kgroupContent[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})


//When the cursor hovers on one of the binary numbers in the message schedule calculation column, the tooltip will be dipslayed with hexa and dec nums of the corresponding bin num.

messageItemOp13.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(messageItemOp13[i].textContent,2)+ "  hex:"+parseInt(messageItemOp13[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

messageItemOp12.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(messageItemOp12[i].textContent,2)+ "  hex:"+parseInt(messageItemOp12[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

messageItemOp11.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(messageItemOp11[i].textContent,2)+ "  hex:"+parseInt(messageItemOp11[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

varValueH.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(varValueH[i].textContent,2)+ "  hex:"+parseInt(varValueH[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

varValue.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(varValue[i].textContent,2)+ "  hex:"+parseInt(varValue[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

//When the cursor hovers on one of the binary numbers in the hash value calculation column, the tooltip will be dipslayed with hexa and dec nums of the corresponding bin num.
operatorResultSige.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(operatorResultSige[i].textContent,2)+ "  hex:"+parseInt(operatorResultSige[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

operatorResultChefg.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(operatorResultChefg[i].textContent,2)+ "  hex:"+parseInt(operatorResultChefg[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

operatorResultSiga.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(operatorResultSiga[i].textContent,2)+ "  hex:"+parseInt(operatorResultSiga[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

operatorResultMajabc.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(operatorResultMajabc[i].textContent,2)+ "  hex:"+parseInt(operatorResultMajabc[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

operatorResultT1.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(operatorResultT1[i].textContent,2)+ "  hex:"+parseInt(operatorResultT1[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

operatorResultT2.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(operatorResultT2[i].textContent,2)+ "  hex:"+parseInt(operatorResultT2[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

operatorResultNewVar.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(operatorResultNewVar[i].textContent,2)+ "  hex:"+parseInt(operatorResultNewVar[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})

operatorResultHash.forEach((e,i)=>{
   e.addEventListener("mouseover",()=>{
        hintContainer.textContent = "dec:"+parseInt(operatorResultHash[i].textContent,2)+ "  hex:"+parseInt(operatorResultHash[i].textContent,2).toString(16);
        hintContainer.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        hintContainer.style.opacity = 0;
    })
})
