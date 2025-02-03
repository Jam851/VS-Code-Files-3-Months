//You cannot have duplicate column names in a table.

# Databases
SHOW DATABASES;
// to show all databases available on the system.

USE <db name>;
// select a DB to run queries on.

SHOW TABLES;
// list all tables present inside the selected DB.   [ Returns 'Empty Set' if no tables present ]

CREATE DATABASE <db name>;
// to create new DB.


# Tables
CREATE TABLE <table name> (
    <column name 1> <dataType>,
    <column name 2> <dataType>,
    .
    .
);
// to create a new table.
<dataType> : INTEGER, DECIMAL(10, 2), VARCHAR(15), DATE, ENUM("Male", "Female", "Other")
<descriptors> : DEFAULT <default value>, NOT NULL

INSERT INTO <table name> (<column names>[in order]) VALUES (<values>[in order]);       
[ for multiple entries: VALUES (<values for entry 1>), (<values for entry 2>), ... ]
// insert entries into table.
The default value when a value is not mentioned is "NULL".

DESC <table name>;
// show the structure & description of table & each column.

SELECT * FROM <table name>;
// selects the table entries.
* = selects every column from the table.
<column name> = selects columns from the table. Include ',' between multiple column names.

SELECT * FROM <table name> WHERE <condition statement>;
// selects table entries only if they pass the condition statement.
<condition statement> = WHERE Age = 21;
                        WHERE Age > 21 AND Gender = "Female";   [ Use AND to combine condition statements. ]
                        WHERE Age > 21 OR Gender = "Male";   [ Use OR to select entries that pass either condition statements. ]
                        WHERE NOT Gender = "Male";   [ Use NOT to select entries that fail the condition statement. ]   (for eg: here, it only selects entries that are not Male)
                        WHERE Gender LIKE "%ale";   [ selects entries in which gender value ends with "ale" ]
                        WHERE Name LIKE "%b%";  [ selects entries in which name value contains the letter 'b' ]
                        WHERE Name LIKE "_b%";  [ selects entries in which name value. ]

SELECT * FROM <table name> ORDER BY <column name>;
// selects entries in an ascending order.

SELECT * FROM <table name> ORDER BY <column name> DESC;
// selects entries in an descending order.

SELECT * FROM <table name> LIMIT 2;
// only selects the top 2 entries from the query.

DELETE FROM <table name> WHERE <condition statement> (usually with a LIMIT);
// only deletes selected table entries that pass the condition statement.

UPDATE <table name> SET <column name 1> = <value 1>, <column name 2> = <value 2> WHERE <condition statement>;
// updates entries which pass the condition statement. Usually an ID is used to be more precise but anything goes.

ALTER TABLE <table name> CHANGE <table name> <new table name> = <new dataType>;
// changes column name & its dataType. The column values accomodate to the new dataType if they can logically can.
   for eg: INTEGER can accomodate DECIMAL & VARCHAR but,
           VARCHAR cannot accomodate DECIMALS or INTEGER  

ALTER TABLE <table name> ADD <new column name> <dataType>;
// adds new column to table. Its default value & other descriptors can be attached to this command.
   [ places new column at the end of the table horizontally. ]
   To place new column after a specific column, attach 'AFTER <column name>' at the end of above command.

ALTER TABLE <table name> DROP <column name>;
// removes column & its data from table.

SELECT <column name> AS <different column name> FROM <table name>;
// selects existing column and shows it with <different column name>.
   to write <different column name> with spaces, write it as a string "" & plain numbers as column name are not allowed.

SELECT CONCAT(<column names>) AS <different column name> FROM <table name>;
// joins the names of columns & there values together.
   to provide space between values of columns: CONCAT(<column name 1>, ' ', <column name 2>)

SELECT DISTINCT <column name> FROM <table name>;
// selects distinct/unique values from a column.

SELECT COUNT(*) AS <column name> FROM <table name> WHERE <condtion statement>;
// only selects entries that pass the condition statement & represents it under a column called <new column name>, 
   it returns a total count of selected entries.
   [ if no condition statement is provided then all entries are counted. ]

SELECT SUM(<Numeric column name>) FROM <table name> WHERE <condition statment>;
// returns the sum of numeric values from entries that pass the condtition statement.
   [ the dataType of <Numeric column name> should be equal to or less than a DOUBLE ]

SELECT AVG()            ,,              ,,              ,,              ,,
// returns the average of numeric values from entries that pass the condtition statement.

SELECT MIN()            ,,              ,,              ,,              ,,
// returns the minimum of numeric values from entries that pass the condtition statement.

SELECT MAX()            ,,              ,,              ,,              ,,
// returns the maximum of numeric values from entries that pass the condtition statement.

SELECT <column name 1>, Count(*) FROM <table name> GROUP BY <column name 1>;
// returns a table of 2 columns containing the number of times the <column name 1> values have occured in the table.