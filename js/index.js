var contentHeadItems = document.querySelectorAll(".content-head span")
console.log("contentHeadItems", contentHeadItems)

for (let i = 0; i < contentHeadItems.length; i++) {
    const element = contentHeadItems[i]
    console.log("element", element)
    element.addEventListener("click", function () {
        document.querySelector(".content-head .active").classList.remove("active")
        element.classList.toggle("active")
    })
}
