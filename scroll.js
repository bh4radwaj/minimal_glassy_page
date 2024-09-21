const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }
    })
});

const hiddens = document.querySelectorAll(".hidden");
hiddens.forEach((el)=>{
    observer.observe(el)
})