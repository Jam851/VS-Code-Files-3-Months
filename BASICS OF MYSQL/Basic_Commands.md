1. You cannot have duplicate column names in a table.
2. Attributes = Columns,   Tuples = Rows
3. '\sql', '\js', '\python' to change language in MySQL Shell
4. '\c root@localhost' command to connect to localhost server.
5. All commands end with ';'

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
                [ 'id INT AUTO_INCREMENT PRIMARY KEY' to make a numeric column id which auto-increments on new entry. ]

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

SELECT * FROM <table name> OFFSET 10;
// ignores the first 10 rows & selects the 11th row till Nth row of the query.

DELETE FROM <table name> WHERE <condition statement> (usually with a LIMIT);
// only deletes selected table entries that pass the condition statement.

UPDATE <table name> SET <column name 1> = <value 1>, <column name 2> = <value 2> WHERE <condition statement>;
// updates entries which pass the condition statement. Usually an ID is used to be more precise but anything goes.

ALTER TABLE <table name> ADD <new column name> <dataType>;
// adds new column to table. Its default value & other descriptors can be attached to this command.
   [ places new column at the end of the table horizontally. ]
   AFTER <column name>: To place new column after a specific column, attach at the end of above command.
   FIRST: To place new column at the front of table

ALTER TABLE <table name> DROP <column name>;
// removes column & its data from table.

ALTER TABLE <table name> CHANGE <column name> <new column name> <new dataType>;
// changes column name, dataType & descriptors. 
   the column values accomodate to the new dataType if they logically can.
   for eg: INTEGER can accomodate DECIMAL & VARCHAR but,
           VARCHAR cannot accomodate DECIMALS or INTEGER

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


# Joins
//Right Joins & Inner Join
   The columns are of both tables are joined together into one massive table.
   If <common column name> has values which are common in both tables, then these common value rows are selected for the common part of join.
   The rows from the right table are all present even if there values are not present/common in the left table. These values are NULL.
   The left table's rows that are not part of the rows which have common values are ignored & will not be present in the combined table.
   Important part is that in Right Join only Right table's rows are present in full.
   If no <common column name> is provided then it gives Cartesian Product of all entries. [no matter what join type]
//You can add a 'WHERE' clause at the end of it.
//Writing only JOIN in command will give you INNER JOIN instead of writing the 'INNER' part.

SELECT * FROM <table name 1> <alias 1> RIGHT JOIN <table name 2> <alias 2> ON <table name 1>.<common column name> = <table name 2>.<common column name>;
// selects columns from the query table produced from right joining <table name 1> on <table name 2>.
   <alias 1> & 2 are aliases for the big table names used in the command. Completely optional

SELECT * FROM <table name 1> LEFT JOIN <table name 2> USING(<common column name>)
// alternate method of selecting <common column name>.

SELECT * FROM <table name 1>, <table name 2> WHERE <table name 1>.<common column name> = <table name 2>.<common column name>;
// inner join without excplicitly using inner join.


# Self Join 
SELECT * FROM <table name> a INNER JOIN <table name> b USING (id);
// selects everything from inner join of the table with itself.

SELECT a.<column y>, b.<column x> FROM <table name> a INNER JOIN <table name> b USING (id);
// selects two distinct columns from both distinct but same table.


(SELECT * FROM employeedetails) UNION (SELECT * FROM testtable);
// merges all rows into one table. The total rows increase but columns remains same. 
   [ both queries must have same no of columns for UNION to work. ]  [ UNION removes duplicates rows by default. ]
   It appends the right query rows below the left query rows.



# Full Outer Join 
// It is not available in MySQL but present in SQL.
   Work-around: LEFT JOIN of two tables UNION RIGHT JOIN of two tables after switching their places in the command, gives a FULL OUTER JOIN in mysql.


# View
Command to create one 

# Stored Procedure
// Store Function & Call later.
   DELIMITER changes the delimiter of mysql to any other character.
DELIMITER #
CREATE PROCEDURE <procedure name>()
BEGIN
   select * from <table name> limit 10;
   END #
DELIMITER ;

CALL <procedure name>();


SHOW PROCEDURE STATUS WHERE db = '<database name>';
// shows all details of procedures in db.


CRAZY 1 & 2


# Triggers
// like an event

SHOW TRIGGERS;
// shows all triggers in DB.


TRIGGER_1 ->
USE <database>

delimitter $
CREATE TRIGGER <trigger name>
BEFORE INSERT ON <table name>
for each row
   set @log = "adding new product";
$
delimiter ;
// for each row to be inserted in table, set @log in statement. 

SELECT @log
// shows the value stored in @log


TRIGGER_2 ->
USE <database>

delimitter $
CREATE TRIGGER <trigger name>
BEFORE INSERT ON <table name>
for each row
   set New.productCost = 1;
$
delimitter ;
// changes the productCost attribute value to 1 in each new row. where 'New' is the new row created.      ( similar to this keyword in JS )


# Hooks
// used in place of creating lots of code for triggers.



PRI - Primary Key
MUL - Non-Unique value. multiple occurences of that value can be present in that column.

//What is MUL ?
Change table name ?