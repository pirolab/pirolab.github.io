Touch Slider Responsive Javascript/css3 Slider
--------------------------------------

[Live Demo](http://www.pirolab.it/touch-slider/)


--------------------------------------
#### Download Package

```sh
# Download from GitHub
https://github.com/pirolab/touch-slider/archive/master.zip


--------------------------------------
#### Example
```html
<div class='o-sliderContainer hasShadow' id="pbSliderWrap">
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
  slider_Wrap: '#pbSliderWrap0',
  slider_Threshold: 10,
  slider_Speed:600,
  slider_Ease:'ease-out',
  slider_Drag : true,
  slider_Arrows: {
    enabled : true
  },
  slider_Dots: {
    class :'.o-slider-pagination',
    enabled : true
  },
  slider_Breakpoints: {
      default: {
          height: 500
      },
      tablet: {
          height: 350,
          media: 1024
      },
      smartphone: {
          height: 250,
          media: 768
      }
  }
});
</script>


```
