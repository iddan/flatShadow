#flatShadow
## Add long flat shadows to text using JavaScript and CSS.
### How to use:
Load flatShadow.js at the bottom of your HTML.<br />
Then, add a script tag before it and set flatShadow:<br />
Set the length by using a varible called fsLength with your wished length (the length is in vh viewport unit).<br />
Set the colour by using a varible called fsColor with your wished colour (could be in any CSS/HTML format).<br />
Set the angle by using a varible called fsAngle with your wished angle<br />
At last add a class named flatShadow to the element you would like to shadow.<br />
###Example:<br />
To set flatShadow to be 10vh long and blue coloured write:
```html
<div class="flatShadow">Hello</div>
<script>
  var fsLength = 10;
  var fsColor = 'blue';
  var fsAngle = 45;
</script>
<script src="flatShadow.js"></script>
```
####[DEMO](http://htmlpreview.github.io/?https://github.com/anIddan/flatShadow/blob/master/demo.html)
