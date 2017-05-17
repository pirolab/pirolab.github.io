# Touch Slider Responsive Javascript/css3 Slider

### [Live Demo](https://pirolab.github.io/)

### [Download from GitHub](https://github.com/pirolab/pirolab.github.io/archive/master.zip)


### HTML
```html
  <div class='o-sliderContainer hasShadow' id="yourId">
    <div class='o-slider' id='pbSlider'>
      <div class="o-slider--item" data-image="images/5.jpg">
        <div class="o-slider-textWrap">
          <h1 class="o-slider-title">This is a title</h1>
          <span class="a-divider"></span>
          <h2 class="o-slider-subTitle">This is a sub title</h2>
          <span class="a-divider"></span>
          <p class="o-slider-paragraph">
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph </p>
        </div>        
      </div>
      <div class="o-slider--item" data-image="images/6.jpg">
        <div class="o-slider-textWrap">
          <h1 class="o-slider-title">This is a title</h1>
          <span class="a-divider"></span>
          <h2 class="o-slider-subTitle">This is a sub title</h2>
          <span class="a-divider"></span>
          <p class="o-slider-paragraph">
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph </p>
        </div>
      </div>
      <div class="o-slider--item" data-image="images/1.jpg">
        <div class="o-slider-textWrap">
          <h1 class="o-slider-title">This is a title</h1>
          <span class="a-divider"></span>
          <h2 class="o-slider-subTitle">This is a sub title</h2>
          <span class="a-divider"></span>
          <p class="o-slider-paragraph">
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph </p>
        </div>
      </div>
      <div class="o-slider--item" data-image="images/2.jpg">
        <div class="o-slider-textWrap">
          <h1 class="o-slider-title">This is a title</h1>
          <span class="a-divider"></span>
          <h2 class="o-slider-subTitle">This is a sub title</h2>
          <span class="a-divider"></span>
          <p class="o-slider-paragraph">
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph </p>
        </div>
      </div>
      <div class="o-slider--item" data-image="images/3.jpg">
        <div class="o-slider-textWrap">
          <h1 class="o-slider-title">This is a title</h1>
          <span class="a-divider"></span>
          <h2 class="o-slider-subTitle">This is a sub title</h2>
          <span class="a-divider"></span>
          <p class="o-slider-paragraph">
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph </p>
        </div>
      </div>
      <div class="o-slider--item" data-image="images/4.jpg">
        <div class="o-slider-textWrap">
          <h1 class="o-slider-title">This is a title</h1>
          <span class="a-divider"></span>
          <h2 class="o-slider-subTitle">This is a sub title</h2>
          <span class="a-divider"></span>
          <p class="o-slider-paragraph">
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph This is a sub paragraph 
          This is a sub paragraph </p>
        </div>
      </div>
    </div>
  </div>
```
### JAVASCRIPT

```html
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


## Thanks to
* [Hammer.js](http://hammerjs.github.io/) / Single and multi-touch gestures library 
* [Lea Verou - cubic-bezier](http://cubic-bezier.com/)  / Easing functions for CSS3
* [Daniel Bruce - entypo](http://www.entypo.com/) / Font Icons
* [jQuery](https://jquery.com/) / JS framework

