
// $("#abstract").click(function () {
//     $(this).parent().next('#paperAbstract').toggle();
//     }
// );

// $("#media").click(function () {
//     $(this).parent().next('#paperMedia').toggle();
//     }
// );

function displayTog(id) {
  var x = document.getElementById(id);
  if(x.style.display=="none") {
    x.style.display = "block";
  }
  else{
    x.style.display = "none";
  }
}
