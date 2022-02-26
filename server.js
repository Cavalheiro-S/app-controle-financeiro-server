require("dotenv/config");
const express = require("express");
const body_parser = require("body-parser");
const routerInvestiment = require("./routes/Investiment/investiment-route");
const routerExpense = require("./routes/Expense/expense-route")
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

app.use(
    cors({
        origin: "*"
    })
    );
const makeConnectionWithDatabase = require("./data/connection");

makeConnectionWithDatabase();
app.use(body_parser.json());
app.use("/investiment",routerInvestiment);
app.use("/expense",routerExpense);

app.listen(port, () => {

    console.log("Server listening on http://localhost:"+ port);
});