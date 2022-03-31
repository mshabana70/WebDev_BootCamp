# JavaScript DOM

<hr>

## DOM Overview

Up until this point, most of website have been static. Whenever we open up our webpage, it is static content that is loaded into the browser. This limits how interactive the webpage is, allowing us not to really change parts of the webpage on the fly. In order to do this we need to incorporate javascript within our frontend.

When a user interacts with our HTML content, we will need to respond to said interaction by returning new content or rearranging existing HTML content. This is where the <strong>Document Object Model</strong> come in. 

The <strong>DOM</strong> breaks up or HTML content into objects we can select and manipulate with JavaScript code. Lets take a look at the diagram below for further clarification:
<br>
<img src="./img/js-dom.png" alt="JS DOM diagram">
<br>
On the left we have HTML tags that we would use to structure a webpage, on the right we have the hierarchy of the HTML objects. The DOM breaks these objects and their associated data into a tree structure:
<br>
<img src="./img/js-dom-tree.png" alt="JS DOM Tree Model">
<br>
The relationships of the objects are mapped out by the tree diagram.

