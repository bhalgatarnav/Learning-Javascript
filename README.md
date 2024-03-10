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

  
## Importing functions & saving Javascript modules and importing them.
  The length of code can be significantly improved by using and saving different objects in different files and then importing them. The editing and finding error becomes a lot more easier this way.<br/>
  
  ``` import objectName from ".\ filename.js"; ```
