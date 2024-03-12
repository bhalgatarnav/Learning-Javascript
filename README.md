# Learning-Javascript
 This repository is a practice repo made to save all my javascript work and showcase the consistent learning. Referring to the instructions from linkedIn course. I aim to create a fundamental understanding of the language. 

# Modern Ways to load JavaScript
 ## The default method:
   This method is to write the following code in the HTML document:
  ```
  <script> // Write the js lines in the html document </script>
  <script src=".\ filename"> // This statement links the script file to the html document </script> 
  ```
  The above practice loads JavaScript is that browser stops rendering when JavaScript is encountered. Javacript is then executed before the rendering continues. Often referred to as the       content blocking.

  HTML ------------>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-------><br/>
  JS download&emsp;&emsp;&emsp;&emsp;---------><br/>
  JS excecution&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-------->


## async and defer method:
  `async` and `defer` are the keywords in the java script language.<br/><br/>
  `<script src=".\ filename" async> <script>` <br/>
  Browser downloads JavaScript in parallel while the HTML renders. When the JavaScript is fully loaded the rendering stops while the JavaScript is excecuted.<br/>
  
  HTML ---------------->&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-------><br/>
  JS download &emsp; -------><br/>
  JS excecution&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-------->

 `<script src=".\ filename" defer> <script>` <br/>
  Browser downloads JavaScript in parallel while the HTML renders. When the JavaScript is fully loaded the tool defers the execution of the file until the HTML renders.<br/>
  
  HTML -------------------------------><br/>
  JS download &emsp; -------><br/>
  JS excecution&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-------->

  
## Importing & saving Javascript modules and importing them.
  Modules enable modularization of code where individual functions, components, data objects, and other parts can be separated into individual files. The length of code can be significantly improved by using and saving different objects in different files and then importing them. The editing and finding error becomes a lot more easier this way.<br/>
  
  ```
  // Wrtiting this in HTML file.
  <script type="module" src="./fileName"></script> 
  
  // Write this in the JavaScript file.
  import objectName from ".\ filename.js"; 

  // Writing export command in the exporting file.
  export default objectName;
  ```

  A property name in javascript can only contain letters, digits, dollar signs and underscores. However,
  nothing prevents you from using or creating such property names.

 ### Objects

  Dot Notation:
  `objectName.propertyName;` will let you to access that specific property instead of the whole object.
  You can dig in the object as much as you want using the dot operator. Easy to read and understand.

```
var query = propertyName;
// This code with the dot notation will not work with variable or non-standard names. This line 
// of code will throw an error.
// console.log("The specific property is:", objectName.query);

// On the other hand the bracket notation will work with the variables and non-standard names.
console.log("The specific property is:", objectName["query"]);

```

  Bracket notation:
  In some cases you need more control, say variables or the property name is non-standard for some reason.
  `objectName["propertyName"];`In this format the property name is treated as string therefore the non-standard names work as well. 

 ### Methods (Properties with Functions)
  Properties inside the objects with functions are called as methods. They perform actions on the objects or their properties. There are two ways of initialising the functions:

  ```
  const objectName = {
  propertyName(){....},
  propertyName: function(parameter1){.....},
  }
  ```

  Running/ Calling the Methods or the functions.
  ```
  objectName.propertyName()
  ```
 ### Classes (Template for objects)
  Classes provide a blueprint for the objects its properties and the methods. Anytime you create an object from the class the object automatically gets all the properties and methods from that class.

  Creating class
  ```
  class Name{.....}
  const Name = class{.....}
  ```

  `constructor()` defines the parameters for the class. All the methods can be initialized like normal methods.
  
## Console logging
  ```console.log(objectName)```
  ```console.log("Entering the string: ", objectName)```
  The above statement will directly display the entered object name in the console.