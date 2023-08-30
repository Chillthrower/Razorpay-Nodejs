// const express = require("express");
// const app = express();
// const port = 3000;
// const Razorpay = require('razorpay');
// const cors = require("cors");

// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//     res.send("hello world");
// });

// app.post("/payment", async (req, res) => {

//     let {amount} = req.body;
//     var instance = new Razorpay({ 
//         key_id: 'rzp_test_PFWZyoIHAYfaJA', 
//         key_secret: 'hW67xDTvMOcKwtJLI5JzTaat' 
//     });

//     let order = await instance.orders.create({
//         amount : amount * 100,
//         currency : "INR",
//         receipt : "receipt#1",
//     });

//     res.status(201).json({
//         success : true,
//         order,
//         amount,
//     });

// });

// app.listen(port, () => {
//     console.log(`server is running in port ${port}`);
// });

const express = require("express");
const app = express();
const port = 3000;
const Razorpay = require('razorpay');
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.post("/payment", async (req, res) => {
    let { amount } = req.body;
    var instance = new Razorpay({
        key_id: 'rzp_test_PFWZyoIHAYfaJA',
        key_secret: 'hW67xDTvMOcKwtJLI5JzTaat'
    });

    let order = await instance.orders.create({
        amount: amount * 100,
        currency: "INR",
        receipt: "receipt#1",
    });

    res.status(201).json({
        success: true,
        order,
        amount,
    });
});

app.listen(port, () => {
    console.log(`server is running in port ${port}`);
});
