DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NOT NULL, 
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Logo Hat", "Apparel", 14.95, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shortsleeve Graphic Tee", "Apparel", 24.95, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Longsleeve Graphic Tee", "Apparel", 29.95, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Album CD", "Music", 9.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Album Vinyl", "Music", 29.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tour DVD", "Video", 14.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Making of an Album", "Reading", 12.95, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Keychain", "Misc", 2.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Band Poster", "Misc", 5.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bumper Sticker", "Misc", 1.00, 50);