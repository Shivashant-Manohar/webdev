/*

Promise is an object that represents the 
eventual completion or failure of an asynchronous operation.

Promise are in three states
1. pending - initial state
2. fulfilled - when the operation is completed successfully 
3. rejected - when the operation fails  

 */



const cart = ["shoes", "watch", "kurta"];

// callback function
createOrder(cart, function (OrderID) {
  proceedToPayment(OrderID , function(paymentInfo){
    showOrderSummary(paymentInfo , function (){
        updateWalletBalance(paymentInfo);
        console.log("Order completed");
    });
  });
});

// promise - more cleanly 
createOrder(cart)
    .then(OrderID => proceedToPayment(OrderID))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(() => updateWalletBalance())
    .then(() => console.log("Order completed"));    


// // promise
// createOrder(cart)
//   .then(function (OrderID) {
//     return proceedToPayment(OrderID);
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function () {
//     return updateWalletBalance();
//   })
//   .then(function () {
//     console.log("Order completed");
//   });       


