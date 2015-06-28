# flatShadow
## Add long flat shadows to text using JavaScript and CSS.
### How to use:
Load flatShadow.js.
Then, add a script tag after it and set flatShadow:
Call flatShadow function like this:
```html
<script src="flatShadow.js"></script>
<script>
flatShadow(el, color, length, angle);
</script>
```
- el is the element you would like to shadow;
- color is the shadow's color;
- length is the shadow's length;
- angle is the shadow's angle;

### Example:
To set flatShadow to be for the element #flat, 10vh long, blue coloured and 45deg angled write:
```html
<div id="flat">Flat Shadow!</div>
<script src="flatShadow.js"></script>
<script>
flatShadow(document.getElementById('flat'), 'blue', 10, 45);
</script>
```
####[DEMO](http://aniddan.github.io/flatShadow/demo.html)