const viewBtn = document.querySelector(".view-modal"),
popup = document.querySelector(".popup"),
close = popup.querySelector(".close"),
field = popup.querySelector(".field"),
input = field.querySelector("input"),
copy = field.querySelector("button");
viewBtn.onclick = ()=>{
  popup.classList.toggle("show");
}
close.onclick = ()=>{
  viewBtn.click();
}
copy.onclick = ()=>{
  input.select(); 
  if(document.execCommand("copy")){ 
    field.classList.add("active");
    copy.innerHTML = "<i class='far fa-check-circle' style='color: white'></i>";
    setTimeout(()=>{
      window.getSelection().removeAllRanges();
      field.classList.remove("active");
      copy.innerHTML = "<i class='far fa-copy'></i>";
    }, 3000);
  }
}