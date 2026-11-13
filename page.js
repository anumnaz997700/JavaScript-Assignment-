    //    Question#01

let shirtPrice=1500
let trouserPrice=2500
let originalBill =shirtPrice +trouserPrice 
let discount=originalBill/100*10
console.log("Original bill =",originalBill);
console.log("Discount =",discount);
if(originalBill>=3000){
    console.log("Payable amount =", originalBill-discount);
}else{

}


        // Question

let marksinComputer=60
let marksinEnglish=45
let marksinMaths=73
let totalMarks=marksinComputer+marksinMaths+marksinEnglish
console.log("Total Marks =",totalMarks)
let percentage=totalMarks/300*100
console.log("Percentage=",percentage)
if(percentage>=50){ 
    console.log("Pass")

}else{
    console.log("Fail")
}
 
    // Question#3

let unitConsumed=125
console.log("Consumed units=",unitConsumed) ;   
//    if the first 100 unit cost Rs.10per unit
let firstBill=100*10

 //    now the rest of 25 units will cost Rs.15per unit
let secondBill=(unitConsumed-100)*15

let totalBill=firstBill+secondBill

if(unitConsumed>=100){
    console.log("Total bill=",totalBill);
}else{
    console.log("Total bill=",unitConsumed*10);
}

        //      Question#4

let availableAmount=20000        
let withdrawl=12500
if(withdrawl>0 && withdrawl<20000){
   console.log("Withdrawl Amount=" ,withdrawl)
}else{
    console.log("Dear Customer,Your balance is invalid")
}


    //   Question#5

let num=5
for(i=1 ; i<=10 ; i++){
    table=num*i
   console.log(num,"X",i,"=",table)
}
  

    //  Question#6

let personAge=23
let student="yes"

if(personAge<12){
    console.log("Ticket Price=",ticketPrice=300);
}else if(personAge>12&&personAge<=59){
   console.log("Ticket Price=",ticketPrice=600);
}else{
    console.log("Ticket Price",ticketPrice=400);
}
if(ticketPrice==600 && student=="yes"){
    discount=ticketPrice/100*10
console.log("Discount =",discount);
}
console.log("Final Ticket Cost=",ticketPrice-discount);


    //    Question#7

let basicSalary=7000
let rating=4
let yearsOfexperience=3

console.log("Basic Salary=",basicSalary);

if(rating=5 && yearsOfexperience>=5){
    bonus=basicSalary/100*20
    console.log("Final Amount=",basicSalary+bonus)

}else if(rating=4 && yearsOfexperience>=3){
    bonus=basicSalary/100*15
    console.log("Final Amount=",basicSalary+bonus)

}else if(rating=3 && yearsOfexperience>=2){
    bonus=basicSalary/100*10
    console.log("Final Amount=",basicSalary+bonus)

}else{
    console.log(basicSalary)
}

console.log("Bonus Amount",bonus)

    //   Question#8

let orderAmount=3000
let distance=12
console.log("Order Amount=",orderAmount)

if(orderAmount>=2000){

  if (distance>5){

   deliverCharges= (distance-5)*20
  }else{
    deliverCharges=0
  }

}else{

 if(distance>5){
    deliverCharges= (distance-5)*20
 }else{
    deliverCharges= (distance*100)
 }

}
console.log("Delivery Charges=",deliverCharges)
console.log("Total Bill=",orderAmount+deliverCharges)


        //   Question#9

let totalWithdrawl=0
let limit=5000
while(totalWithdrawl<limit){
    let amount=Number(prompt("Enter the withdrawl amount"))
if(amount==0){
    break;
}else{
}if(amount<0){
    console.log("Negative amount is not valid")
}else if(amount>limit-totalWithdrawl){
    console.log("The withdrwal exceeds daily limit")
}else{
    totalWithdrawl = totalWithdrawl+amount
    console.log("Total Withdrawl Amount=",totalWithdrawl)
}}
let remainingLimit = limit-totalWithdrawl
console.log("Remaining Limit=",remainingLimit)

    //    Question#10


let totalRevenue = 0;
while(true){
let hours=Number(prompt("Enter parking hours"))

if(hours == 0){
break;
}else {
let fee = 0;
if (hours <= 2){
fee = hours * 50;
}
else if (hours <= 5){
fee = (2*50)+(hours - 2) *30;
}
else {
fee = (2*50) + (3*30) + (hours - 5) *20;
}
console.log("Parking Fee= " + fee);
totalRevenue = totalRevenue + fee;
}
}
console.log("Total Parking Revenue=" + totalRevenue)


    //    Question#11

let uniFees=100000
let per=82
let income=45000
if(per>=90 && income<50000){
    scholarShipPer=100
   scholarShipAmount=uniFees/100*100
}else if(per>=80 && income<70000){
    scholarShipPer=50
   scholarShipAmount=uniFees/100*50
}else if(per>=70 && income<40000){
    scholarShipPer=25
   scholarShipAmount=uniFees/100*25
}else{
    console.log("Not eligible for a scholarship")
}   
console.log("Scholar Ship Percentage=",scholarShipPer)
console.log("Scholar Ship Amount=",scholarShipAmount)
console.log("Remaining Fee Payable=",uniFees-scholarShipAmount)
    
        //   Question#12
        
let availableStock=100
let productPerUnit=500
while(true){
    let purchaseRequest=Number(prompt("Enter the required amount of product"))
if(availableStock==0 || purchaseRequest==0){
     break;
}else if(purchaseRequest>availableStock || purchaseRequest<0){
   console.log("Negative number is not valid")
}else{
    console.log("Total Unit Sold",purchaseRequest)
}
}
remainingStock=availableStock-purchaseRequest
console.log("Remaining Stock=",remainingStock)
totalRevenue=purchaseRequest*500
console.log("Total Revenue=",totalRevenue)
  

        // Question#13

let revenue = 0;

let days = Number(prompt("Enter admitted days"));
while (true) {
let room = Number(prompt("Enter room type= 1.General 2.Semi-Private 3.Private" ));
if(room==0){
    break;
}
else if(room == 1){
    rate = 2000;
}
else if(room == 2){
    rate = 3500;
}
else{
    rate = 5000;
}

let bill = days * rate;

let test = prompt("Medical tests? (yes/no)");
if (test == "yes") {
    bill = bill + 1500;
}
let medicine = prompt("Medicines? (yes/no)");
if (medicine == "yes") {
    bill = bill + 2000;
}
let emergency = prompt("Emergency service? (yes/no)");
if (emergency == "yes") {
    bill = bill + 3000;
}
console.log("Total Bill: Rs.", bill);
revenue=revenue+bill
}
console.log("Hospital Total Revenue: Rs.", revenue);


    //    Question#14

let totalData=10
let used=0
for (let day=1; day=30; day++){
let usedData=Number(prompt("Enter the used data"))
if(usedData==0){
    break;
}
else if(usedData>totalData || usedData<0){
console.log("The data entered is invalid")
}
else{
used=used+usedData
remainingData=totalData-used
}
console.log("Total Data Consumed=",used)
console.log("Remaining Data=",remainingData)
   
if (used==10){
    category = "Package Exhausted";
}else if(used>8){
     category = "High Usage";
}else if (used>=5){
    category = "Moderate Usage";
}else
    category="Low usage";
} 
console.log("Category=",category)

    

