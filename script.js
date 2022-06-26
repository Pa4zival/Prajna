$('.carousel').carousel({
  interval: 10000
})

// init/setup var for ScrollMagic controller
var controller = new ScrollMagic.Controller();

  // loop through each .project element
  $('.milestone').each(function(){
    console.log(this);
    // build a scene
    var scene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      duration:'60%' // responsive duration vs. viewport sizes
    })
    .setClassToggle(this, 'fade-in')
   .addTo(controller);                     
});