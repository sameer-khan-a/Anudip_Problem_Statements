const orderId = 'ORD101';
const orderAmount = 1200;
const deliveryDistance = 4;
const customerType = 'Member';
const paymentMethod = 'UPI';
const MEMBER_DISCOUNT = 0.1;
const SMALL_ORDER_CHARGE = 50;
const FREE_DELIVERY_DISTANCE = 5;
const LONG_DISTANCE_CHARGE_PER_KM = 20;
const supportedPaymentMethods = ['UPI', 'Card', 'Cash'];

if(orderAmount <= 0 || !supportedPaymentMethods.includes(paymentMethod)) {
    console.log("Order is invalid, Please chewck amount or payment.");
} else {
    let discount = 0;
    if(customerType === 'Member') {
        discount = orderAmount * MEMBER_DISCOUNT;
    }
    let smallOrderCharge = 0;
    if(orderAmount < 500) {
        smallOrderCharge = SMALL_ORDER_CHARGE;
    }
    let deliveryCharge = 0;
    if(orderAmount>1000){
        if(deliveryDistance <= FREE_DELIVERY_DISTANCE) {
            deliveryCharge = 0;
        } else {
            const extraDistance = deliveryDistance - FREE_DELIVERY_DISTANCE;
            deliveryCharge = extraDistance * LONG_DISTANCE_CHARGE_PER_KM; 
        }} else {
            deliveryCharge  = deliveryDistance * LONG_DISTANCE_CHARGE_PER_KM;
        }
        const finalAmount = orderAmount - discount + smallOrderCharge + deliveryCharge;

        console.log('------ Food Delivery Bill ------');
        console.log(`Order ID: ${orderId}`);
        console.log(`Customer Type: ${customerType}`);
        console.log(`Order Amount: ${orderAmount}`);
        console.log(`Discount: ${discount}`);
        console.log(`Delivery Charge: ${deliveryCharge}`);
        console.log(`Additional Charge: ${smallOrderCharge}`);
        console.log('FInal Payable Amount: ', finalAmount);
    }
