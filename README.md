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


## Using JavaScript to inject new content into the document.

 ### Standdard Strings
  This is the classic way of outputting the contents using plain old strings. Use string concatenation (Breaking the string in peices ). This is not the efficient way as it has a lot of clutter.e
  
  ```
  /**
  * The string is directly outputed on the page 
  */
  const content = "<h1> Display the contents</h1>";
  document.body.innerHTML = content;
  
  /**
  * To interact and change the values of the string 
  */
  
  const content = "<h1>" + objectName.propertyName + "</h1>";
  document.body.innerHTML = content;
  ```
 ### Template Literals

  Bridging the gap between what happens in the JavaScript world and the HTML, JS purposes to generate, modify or remove the HTML from a live document in the browser.

  Two backticks '``' in the javascript documentation tells the browser that anything inside here is a template literal. Meaning we can mix the HTML and strings with js expressions to literally create templates.
  Inside of the template literal, anytime you want to call in something produced by JavaScript, we add a placeholder `${}`. we can write any js code inside those curly brackets.

  ```
  const template =
  ` <h1>Any Text ${objectName.propertyName}</h1>
  `;
  // IMPORTANT:
  // This statement lets you to access the html content.
  document.body.innerHTML = template;


  ```

# DOM (Document Object Model)
 Similar to how we create a logical hirarchy in the real world to reach the final object. The browser will traverse the HTML document and then create a Document Object Model that presents the horarchy of how elements interact with each other. 
MDN Documents: `https://developer.mozilla.org/en-US/docs/Web/API/Element/classList`

 `document.querySelectorAll()`, `document.querySelector` these methods can return the specific elements or objects that you are looking for. The `document.querySelectorAll()` method returns the elements as an array. You can then change the elements in the console to experiment with the elements.

 Another set of commands is, `getElementsByClassName()`, `getElementsById()` these are old commands that were used before the query selctor commands were implemented. 

 All of these commands use CSS queries to retrieve the elements.

## Attributes. 
Purpose: Attributes provide a way to customize and configure HTML elements beyond their basic structure and content. They can affect how elements are displayed, behave, or interact with other elements.

Structure: Attributes are placed within the opening tag of an element, after the element name. They follow the format name="value", where name is the attribute name and value is the specific value assigned to that attribute.
Types of attributes: There are two main types of attributes:

Global attributes: These attributes can be applied to almost all HTML elements. Examples include `id`, `class`, `style`, and `title`.

Specific attributes: These attributes are specific to certain HTML elements and define their unique characteristics. For example, the `src` attribute is specific to the `<img>` element and specifies the image source.

Find the specific element and then the commands can be used.

```

// returns all the attributes of the element.
document.querySelector("#element).attribute

/** returns if the elements has the specified attribute.
* https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
*/

document.querySelector("#element).hasAttribute()


```
## Modifying the class Attributes

Purpose of the class Attribute in HTML Tags:

The class attribute in HTML tags is used to assign one or more CSS classes to an element. These classes act as identifiers that allow you to target specific elements and apply CSS styles to them.


Styling Multiple Elements: You can assign the same class to multiple elements, allowing you to apply the same styles to all of them at once. This saves time and effort compared to styling each element individually.

Example:
```
<h1 class="main-heading">Welcome to My Website</h1>
<p class="intro-text">This is an introductory paragraph.</p>
```

Html
In this example, the h1 element has the class main-heading, and the p element has the class intro-text. You can then define CSS rules for these classes in your stylesheet:
```
.main-heading {
  font-size: 2em;
  color: #333;
}

.intro-text {
  font-size: 1.2em;
  line-height: 1.5;
}
```
The classes can be modified my following methods in `JavaScript` on the elements: 

The `className` property of the Element interface gets and sets the value of the class attribute of the specified element.

The `Element.classList` is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.

Although the classList property itself is read-only, you can modify its associated DOMTokenList using the `add()`, `remove()`, `replace()`, and `toggle()` methods.

You can test whether the element contains a given class using the `classList.contains()` method.