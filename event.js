cons_k = 5; 
function animationBuilder(direction) {
  return function animateRotate() {
    switch (direction) {
      case 'up':
        scene.position.z += cons_k;
        break;
      case 'down':
        scene.position.z -= cons_k;
        break;
      case 'left':
      	scene.rotation.y += cons_k*.05;
        console.log(scene.rotation.y);
        break;
      case 'right':
        scene.rotation.y -= cons_k*.05;
        break;
      default:
        break;
    }
  }
}

var animateDirection = {
  up: animationBuilder('up'),
  down: animationBuilder('down'),
  left: animationBuilder('left'),
  right: animationBuilder('right')
}

function checkKey(e) {
  e = e || window.event;
  e.preventDefault();
 
  //based on keycode, trigger appropriate animation:
  if (e.keyCode == '38') {
    animateDirection.up();
  } else if (e.keyCode == '40') {
    animateDirection.down();
  } else if (e.keyCode == '37') {
    animateDirection.left();
  } else if (e.keyCode == '39') {
    animateDirection.right();
  }
}
document.onkeydown = checkKey;


setTimeout(function(){
  main();
  requestAnimationFrame(update);
}, 2000);

function update() {

    //for(var i=0; i<50; i++) {
        //rotatex.rotation.y =+ .05;
        //console.log("rotate");
    //}

  //renderer.render(scene,camera);
  //requestAnimationFrame(update);
  renderer.render(scene, camera);
  requestAnimationFrame(update);  
}