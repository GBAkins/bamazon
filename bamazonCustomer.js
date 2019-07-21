var mysql = require("mysql");
var inquirer = require("inquirer");

// creating connection with mysql database
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3307,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  console.log("Connected to Bamazon");
  //Run function to display items for sale
  displayItems();
});

//function displaying items from mysql database
var displayItems = function(){
    connection.query("SELECT * FROM products", function(err,res){
        for (var i=0;i<res.length; i++){
            console.log(res[i].item_id+"  ||  "+res[i].product_name+"  ||  "+res[i].department_name+"  ||  $"+res[i].price+"  ||  "+res[i].stock_quantity+"\n");
        }
    shopPrompt(res);
    })
}

var shopPrompt = function(res){
  inquirer.prompt([{
    type: "input",
    name: "choice", 
    message: "Please select the product ID of the item you would like to purchase. (Ctrl + C to Exit)"
  }]).then(function(answer){
    var correct = false;
    for (var i=0;i<res.length;i++){
      if (res[i].item_id==answer.choice){
        correct=true;
        var id=answer.choice;
        var product=res[id].product_name;
        inquirer.prompt({
          type: "input", 
          name: "quantity", 
          message: "How many of this item would you like to buy?",
          validate: function(value){
            if (isNan(value)==false){
              return true;
            } else {
              return false;
            }
          }
        }).then(function(answer){
          if((res[id].stock_quantity-answer.quantity)>0){
            connection.query("UPDATE products SET stock_quantity='"+(res[id].stock_quantity-answer.quantity)+"' WHERE product_name='"+product+"'", function(err, res2){
              console.log("Thank you for your purchase.");
              displayItems();
            })
          } else {
            console.log("Invalid selection. Please try again.");
            shopPrompt(res);
          }
        })
      }
      if(i==res.length && correct==false){
        console.log("Invalid selection. Please try again.");
        shopPrompt(res);
      }
    }
  })
}