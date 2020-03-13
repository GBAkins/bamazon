# bamazon
Amazon-like storefront using MySQL, letting "customers" select items from a MySQL database presented in the CLI.

## Installation
Make sure you node packages for Inquirer and MySQL are installed in order to run this code. Seed file for the example MySQL database is included. 

```bash
npm install mysql
npm install inquirer
```

## Use of Application
After the app connects to your database, it will display the contents of the database in the command line. The user will then be asked to choose an item by its ID number. After an ID is chosen, the user will input the quantity of that item that they want to withdraw from the database. Next, the remaining quantity is updated and the table is displayed to the user again, waiting for another "purchase".

## Demo Video
[Bamazon CLI Storefront Using MySQL](https://youtu.be/G0DgvSOfyN4)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=G0DgvSOfyN4
" target="_blank"><img src="http://img.youtube.com/vi/G0DgvSOfyN4/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

## Built With
- NodeJS
- MySQL
- NPM inquirer

## Author

Gavin Akins

gavinakins29@gmail.com

[My GitHub](https://github.com/GBAkins "My GitHub")

[My LinkedIn](https://www.linkedin.com/in/gavin-akins-793806101/ "My LinkedIn")
