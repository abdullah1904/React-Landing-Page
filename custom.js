const changer = () => {
    document.querySelectorAll(".change").forEach((e) => {
        e.addEventListener("click", () => {
            document.title = e.innerText;
            document.querySelectorAll(".change").forEach((e) => {
                e.classList.remove("active");
            })
            e.classList.add("active");
        });
    });
}
const indexOpener = ()=>{
    document.querySelector(".change").click();
}
window.addEventListener("load", () => setTimeout(()=>{
    changer();
    indexOpener();
},15));