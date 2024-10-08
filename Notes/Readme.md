Day 6

html Parsing

HTML Rendering Process
=======================
byte-> char-> token ->nodes ->DOM ->Rendering ->Layout -> Paint

Day 8
------
Note:- favicon must have extention "ico" and size
        16x16 pixels 32x32 pixels

Every Web Page Size must be
   1200 px width
   740  px Height

<title> FullStack Developement </title>
<link rel="Shortcut icon">
      href: it is hyper reference
            virtual path of file
            href="assets/favicon.ico"

 Syntax :-

           <link rel="shortcut icon" href="assets/faviicon.ico" >           

FAQ: What Is differnce between "src and "href"
Ans:- "src" is a getter, it is used to get path and display the file
      "href" is a setter, it is used to set the path and access the file

Day 9
------
meta view port
===============
-it make page responsive
- it is one of the option for making page responsive

Syntax:
<meta name="viewport" content="width-device-width, intial-scale=1">
width-device-width : fit content according to browser window
intial-scale=1      : initial size of content will be 100%


Day 10
------
Semantic Elements 
:- its is importent for SEO 


1: Aside
2: Article
3: Dialog
4: figure
5: FigCaption
6: Header
7:Footer
8:Section
9:Main
10:Div [Blocked-Content]
11:Span [Inline-Content]
12:Nav
13:Menu

Day 11
------
for Divide Coloume most important to use fractin like[2fr]

section{
    height:450px;
    display:grid;
    grid-template-columns: 2fr 8fr 2fr; //fr will be acjuct automatically as per size 

}

//  nav, div Means the css will be appled to the div for all inside Nav
// nav div  this Meanse appled for Bodh the nav and Div Element

Day 12
--------

# Body section Entities and Elements
1. Line Breaks <br>
2. Blank Space  &nbsp
3. Pre Fromted   <pre> </pre>
4. Code           <code>  </code>
5. Var           <var> Username </var>"Anup"
6. Title for text and Image <span title="Description ">Your Text </span>
When The Mouse is Hover on that element it show that the title Content in the element
7. paragraph Will be Use t add Content 

Day 13
--------
Data Terms And Definations

<dl> define a data list, which contains terms and Condition
<dt> data terms
<dd>Data Definatioon

Syntax :
<dl>
 <dt> Term 1</dt>
 <dt>Term 2<dt>
 <dd> Defination <dd>

</dl>

# example

<dl>
        <dt>The Data term Fist</dt>
        <dt>The Second term it use for samplen purpose<dt>
        <dd> Defination  Lorem, ipsum dolor sit amet consectetur <br>
            adipisicing elit. Molestias enim veritatis sit, veniam facilis dolore eius odio itaque, blanditiis dolorem non quos architecto voluptatem dicta magnam quasi excepturi eveniet fuga.<dd>
       
       </dl>

8. details :- It is hide by default, keep the attribute "open"
           

    <details>
      <summary>Electronics</summary>
      <dl>
        <dd> Televisions</dd>
        <dd>  Mobile</dd>
        <dd>  AC</dd>
        <dd>  Watches</dd>
        
      </dl>
    </details>

 

    <details open>
        <summary>Footwear</summary>
        <dl>
          <dd> Televisions</dd>
          <dd>  Mobile</dd>
          <dd>  AC</dd>
          <dd>  Watches</dd>
         </dl>
      </details> 

9. Fieldset And Legend

    <fieldset>  defines a frame
    legent>  defines a caption for name

  # syntax
          
      <fieldset>  
        <legend>Basic Details</legend>  
        <dl>
            <dt> Name</dt>
            <dd>Samsung</dd>
            <dd>Nokia</dd>
        </dl>
      </fieldset>


      <fieldset>
        <legend>Shipping Details </Details></legend>
        <dl> 
            <dt> Stock</dt>
            <dd>Available</dd>
        </dl>
        <dl> 
            <dt> Shipment</dt>
            <dd>Pune </dd>
        </dl>
      </fieldset>

* Shadow for Container
  ========================
  Div{
      box-shadow: horizontal vertical blur color;
  }

  div{
      box-shadow: 5px 4px 2px  red ;
  }
   #position Sticky : - When We Use position Sticky at that time We  Need to Give a Where the  as ( Top ; 10Px )
   { 
       position: sticky;
            top: 0px;
   }
           
10. Order List and Unorder List

   # order list is auto ny
      <ol>
      <li> </li>
      <li> </li>
      <li> </li>
      </ol>

      <ol type="a">
          <li>Egges</li>
          <li> Chiken</li>
          <li> Milk </li>
       </ol>

Day 15
----------
Text Effects in HTML
- font
      face , size, color
- font Style
            bold, italic
- Font Effects
             uderlines, strikeout, super script, subscript

<font>   it is used to define face size and color
      
         face = Arial, Times New Roman, Script

   Safe Font for Web Developement
  :- Serif, Sans-Serif, Monospace

  <font face="Arial" >
  
  font-size have 7 level

  h2{
      font-family: "Arial"
      font-size:30
      color: red
  }

  Font Style And Effects
  =======================
  <b> Bold
  <strong> Bold
  <i> italic
  <em> italic
  <u>  underline
  <inc>  Underline
  <strike> Strikeout
  <del>  Delete
 <sub>
 <sup> H2O


Day 16
-----------------------
 Images in Html
 =====================

 - the tag <img> is used to embed images
 - it is an void Element
 
 Image Attributes

 1. alt  : alternative text to Display when image fails to load
 2. Src  : It deffines the image path and name.
 3. title : it is used to Display  Screen tips
4. border:  border: 3px solid dotted;
5. align : imge can be aligned left or Right Center is not available
6. vspace & hspace: padding horizantal and Vertical

Advance Attributes :
--------------------
7. Crossorigin : It ia defined with "anonymous & use - Credentials"
   Its Allows or resticts image from cross-origin

8. decoding :  three option for decodding  *importamt*
    1) sync : synchronous - blocking technique
    2) async : asynchronous- unblocking #its best practice 
    3) auto  : accorinding to enviroment Preferences.

10. Importance : it is defined  with  low and high and Auto
                its load imgs as per the priority Defined

 Card Layout Using Images with Responsive design:
 =================================================

  #container
        {
            display: flex;
            flex-wrap: wrap; // its is use for responsive
        }              

 Links :

Day 17
--------       
Link In HTML

1. Link is clickable text, picture or graphics that nevigates the user to any location

2. Link on Web are know as "hyperlinks"
3. Hyper links are two types
    1) Intra documents links
    2) inter documents links

Intra document links:
 - a hyperlink that nevigate from one location to another with the same page
 - Hyperlinks is Created by using "anchor" element that uses <a> tag
 - Links uses "href" Attribute that sets the target URl 
 - Navigation with in the same page its know as Intra Documentation link


  step-1 : Define "id" for any element in page

          <h2 id="home"> Home </h2>
 
 step-2 : You Can refer "id" by using anchor 

        <a href="#home"> </a>
 # href it is a set UrL
 <li><a href="#home">  Home </a></li>
 
 # src it is a Geter like if i want to get img fron source folder or any think     
<img src="assets/images (1).png" width="30%" height="30%">

 FAQ : How to target any Refernce within the page with Style ?
 Ans: By Using "Target" Selector
 .topic {
    // Inital effects
 }

 .topic:target{
    // effects to Apply Whwn its is a target for Hyperlik
 }

 FAQ : How to change Effects for element mouse over ?
  Ans: By using ":hover" Selector
         
         .topic : hover{
            //Your Effect
         }

 FAQ : How To  Remove Underline For HyperLink ?
 ANS : By Using "text-decoration:none"  With style

 a{
    text-decoration:none;
 }

FAQ : How to Change color for HyperLink
----------------------------------------

  a:link{
    effect to normal link;
  }

  a:visited {
    effect for visited link
  }

 a:active{
    effect for active link
  }

Day 18
---------
HTML Links

 1) Intra Link
 2) Inter Link

 The target Linked 