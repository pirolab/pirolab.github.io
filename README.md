# Touch Slider Responsive Javascript/css3 Slider

### [Live Demo](https://pirolab.github.io/)

### [Download from GitHub](https://github.com/pirolab/pirolab.github.io/archive/master.zip)


### Example
```html
<div class='o-sliderContainer hasShadow' id="yourId">
  <div class='o-slider' id='pbSlider'>
    <div class="o-slider--item" style='background-image: url(images/5.jpg)'></div>
    <div class="o-slider--item" style='background-image: url(images/6.jpg)'></div>
    <div class="o-slider--item" style='background-image: url(images/1.jpg)'></div>
    <div class="o-slider--item" style='background-image: url(images/2.jpg)'></div>
    <div class="o-slider--item" style='background-image: url(images/3.jpg)'></div>
    <div class="o-slider--item" style='background-image: url(images/4.jpg)'></div>
  </div>
</div>


<script>
$('#pbSlider0').pbTouchSlider({
    slider_Wrap : '#yourId', // Assign a unique ID to the div.o-sliderContainer
    slider_Item : '.o-slider--item', // Single Item
    slider_Drag : true, // Your choise.. to dragIt or not to dragIt..this is the question...
    slider_Dots : { // Wanna see dots or not?
      class :'.o-slider-pagination',
      enabled : true
    },
    slider_Arrows : { // Wanna see Arrows or not?
      class :'.o-slider-arrows',
      enabled : true
    },
    slider_Threshold : 25, // Percentage of  dragX before go to next/prev slider
    slider_Speed : 1000,
    slider_Ease : 'cubic-bezier(0.5, 0, 0.5, 1)',  // see http://cubic-bezier.com/
    slider_Breakpoints : { // Kind of media queries ( can add more if you know how to do it :D and if you need )
        default : {
            height : 500 //  height on desktop
        },
        tablet : {
            height : 400, // height on tablet
            media : 1024 // tablet breakpoint
        },
        smartphone : {
            height : 300, // height on smartphone
            media : 768 // smartphone breakpoint
        }
    }
});
</script>
```
