function addingEventListener() {
  const btn = document.getElementById("button");
  btn.addEventListener('click',function() {
    alert("The button has been clicked")
  })
}

addingEventListener();