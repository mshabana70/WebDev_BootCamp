NOTES (Sec 5, Lec 42)

- Favicons: Favorite Icons, they are the icons that are displayed in your webpage's browser tab.
- you can design your own favicons [here](https://www.favicon.cc/)

NOTES (Sec 5, Lec 43)

- All HTML elements are boxes
- One way to format your webpage is by using the <div></div> element
- The HTML Content Division element (<div>) is the generic container for flow content. It has no effect on the content or layout until styled using CSS.
- You can use the chrome developer tool to test out CSS live on your webpage. All code written here will not be saved and lost once the page is refreshed.

NOTES (Sec 5, Lec 44, "CSS BOX MODEL")

- Imagine every element as a box
- Whenever resizing an element, elements around it are displaced according to the resizing
- When adding a border, you are adding to the size of the element.
- {border-top: 0px;} This makes the top border of the element zero pixels
- {border-width: 0px 10px 20px 30px;} 0px at top, 10px at right, 20px at bottom, 30px at left. Clockwise around a box! (top, right, bottom, left)
- Padding is a CSS shorthand property that sets the padding area on all four sides of an elements content at once.
- [Padding Visual](images/padding_screenshot.png)
- [Margin Visual](images/margin_screenshot.png)
- Border and padding change the size of the div or other elements
- Margin has no effect on the size of the element

NOTES (Sec 5, Lec 45, "DISPLAY PROPERTY")

- CSS Display is a module of CSS that defines how the CSS formatting box tree is generated from the document element tree and defines properties controlling it.
- The Display property has four different values; Block, Inline, Inline-Block, None.
- Block: Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width of the screen.
- Common Block Elements:
  - Paragraphs (<p></p>)
  - Headers (<h1> through <h6>)
  - Divisions (<div>)
  - Lists and list items (<ol>, <ul>, and <li>)
  - Forms (<form>)
- How can I target a specific character set within an HTML element? (<p> a programmer. </p>, i want to style the "pro")
- Use the <span> element
- Span: a generic inline container for phrasing content, which does not inherently represnet anythng. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> is a block-level element whereas a <span> is an inline element.
- <span> elements dont do very much unless they are used in conjunction with CSS, similar to <div>
- Common Inline Elements:
  - Spans (<span>)
  - Images (<img>)
  - Anchors (<a>)
- Inline elements cannot have the width changed directly through CSS
- Instead, you can change the element type through the display property in CSS.
- what if you want to be able to do both?
- Inline-Block: Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values.
- Image elements are basically inline-block by default
- None: The element is completely removed, like it doesnt exist.
- None and Visibility are similary, although one is a property and another is a value of the Display property.
- Visibility CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a <table>.
- Although this helps us format webpages how we like, there are rules that websites should abide by to get [beautiful designs](https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/19655686/#overview)

NOTES (Sec 5, Lec 47, "STATIC & RELATIVE POSITIONING")

- Rules for Postioning on a webpage (General Rule):
  1. Content is Everything:
  - HTML inline Elements only take up as much width and as much hieght as the content (long word = long width, short word = short width)(Large Font = Large Hieght, etc)
  - This is despite any CSS
  2. Order Comes From Code:
  - Order of elements on screen come from the order of the HTML code
  3. Children Sit On Parents:
  - When adding an HTML Element inside a <div></div> element, than the HTML element within <div></div> will appear layered on top of the div
  - This is due to the Z-axis, which determines which element will be displayed on the other one
  - You may also use the CSS property "Position" to move around HTML elements the way that you want it to be
- Position:
  - Static: Goes along with the HTML rules and go along with the HTML flow. (What we see when we just have HTML without any CSS)
  - Relative: This allows us to position the element that we select relative to how it would have been positioned had it been static \*\*It is important to remember that relative positioning does not affect any other element's position on the screen.
- Coordinates: (similar to how margins work)
  - Top: img {top: 20px;} (move down by 20 pixels)
  - Bottom: img {bottom: 20px;} (move up by 20 pixels)
  - Left: img {left: 20px;} (move right by 20 pixels)
  - Right: img {right: 20px;} (move left by 20 pixels)

NOTES (Sec 5, Lec 48, "ABSOLUTE POSITIONING")

- Position:
  - Relative~
  - Absolute: We are postioning the element (e.g <div><img></div>) relative to it's parent, and in this case its parent is the <div></div> element.
    - coordinates at specified padding between the parent and the element being positioned (margin between the parent)
    - In some cases, the parent element is the main webpage or body
    - When using absolute postioning, you're actually taking the element out of the flow of the document. This means that there is no "ghost" element left behind when the specified element is postioned
    - Challenge in Video (5:00)
  - Fixed: holds the element in position regardless of scrolling through the webpage
    - It is positioned relative to the body of the web page

NOTES (Sec 5, Lec 49, "CENTER ELEMENTS WITH CSS")

- text-align property is helpful in centering elements with css
- Text-align: is a CSS property that sets the horizontal alignment of a block element or table-cell box. This means it works like vertical-align but in the horizontal direction
- IMPORTANT: this works with inline-block elements or full width block elements like <h1></h1> or <p></p>
- Another way of centering an element is by using margin attribute "auto". This will center the element horizontally and/or vertically

NOTES (Sec 5, Lec 50, "FONT STYLING FOR WEBSITE DESIGN")

- Most designers approach the beginning of designing webistes by coming up with a color palette as well as a font scheme
- Two major font families:
  - Serif
  - Sans-serif
- Third font family:
  - Monospace is when each of the characters inside the text take up the same amount of width (type face usually used for coding)
- Two font families with low readability:
  - Cursive: Hand written style of fonts
  - Fantasy: Meant to remind you of Avatar
- Serif is the default family before applying custom CSS
- When using the font-family property in CSS, you can specify the font within the font family
  - font-family: verdana, sans-serif;
  - if verdana font is not compatible with user system, than use any available sans-serif font
- [Web Safe Fonts](https://www.w3schools.com/cssref/css_websafe_fonts.asp)
- [Fonts available in real time](https://www.cssfontstack.com/)
  -  When copied it clipboards a fall back line of code for the font you wish to use
    - font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
- Another way to ensure that the user is getting the same viewing experience as you are intending than you can use a method called "Font Embedding"
  - You can set a link a location of where to search for the fonts you wish to use, using the <link> element in your HTML <head> element
  - Then you specify the elements you wish to style in the CSS file
  - [Google Fonts](https://fonts.google.com/)
- 
