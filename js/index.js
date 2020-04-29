var stylish = `<div class="article">
    <img src="assets/img/design1.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/design2.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/design3.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/design4.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/design5.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/design6.jpg" alt="" />
</div>`

var design = `<div class="article">
    <img src="assets/img/web1.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/web2.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/web3.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/web4.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/web5.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/web6.jpg" alt="" />
</div>`

var allServices = `<div class="article">
    <img src="assets/img/design1.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/web2.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/design3.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/design4.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/web5.jpg" alt="" />
</div>
<div class="article">
    <img src="assets/img/creative6.jpg" alt="" />
</div>`

var creative = `<div class="article">
<img src="assets/img/creative1.jpg" alt="" />
</div>
<div class="article">
<img src="assets/img/creative2.jpg" alt="" />
</div>
<div class="article">
<img src="assets/img/creative3.jpg" alt="" />
</div>
<div class="article">
<img src="assets/img/creative4.jpg" alt="" />
</div>
<div class="article">
<img src="assets/img/creative5.jpg" alt="" />
</div>
<div class="article">
<img src="assets/img/creative6.jpg" alt="" />
</div>`

var contentHeadItems = document.querySelectorAll(".content-head span")

for (let i = 0; i < contentHeadItems.length; i++) {
    const element = contentHeadItems[i]
    element.addEventListener("click", function () {
        document.querySelector(".content-head .active").classList.remove("active")
        element.classList.toggle("active")

        switch (i) {
            case 0:
                document.querySelector(".article-wrapper").innerHTML = allServices
                break
            case 1:
                document.querySelector(".article-wrapper").innerHTML = design
                break
            case 2:
                document.querySelector(".article-wrapper").innerHTML = stylish
                break
            case 3:
                document.querySelector(".article-wrapper").innerHTML = creative

                break
            default:
                document.querySelector(".article-wrapper").innerHTML = allServices
                break
        }
    })
}
