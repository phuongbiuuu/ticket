const btn = document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        {
            var btnItem = event.target
            var product = btnItem.parentElement
            var productName = product.querySelector(".product-options-info h3").innerText
            var productPrice = product.querySelector("h5 span").innerText
            //console.log(productPrice,productName)
            addcart(productPrice, productName)
        }
    })
})

function addcart(productPrice, productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".Name")
        if (productT[i].innerHTML==productName ){
            alert("You have selected the ticket center")
            return
        }
    }
    var trcontent = '<tr><td style="display: flex; align-item: center; text-align: center;"><span class="Name">' + productName + '</span></td><td style="align-item: center; text-align: center;"><h5 class="money">' + productPrice + '</h5></td><td style="align-item: center; text-align: center;"><input type="number" style="width:30px; outline: none;" value="1" min="1"></td><td style="cursor:pointer;"><span class="btn-del">Delete</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)
    total()
    deleteCart()

}

//-----------totalprice---------------//

function total() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    //console.log(cartItem.length)
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value
        //console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".money").innerHTML
        console.log(productPrice)
        totalA = inputValue * productPrice * 1000
        totalC = totalC + totalA
        
    }
    var cartTotalA = document.querySelector("#total")
    var cartPrice = document.querySelector(".fa-shopping-cart")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    //console.log(cartTotalA)
    inputchange()
}

//------delete------------///

function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".btn-del")
        productT[i].addEventListener("click", function (event) {
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            total()
            //console.log(cartItemR)
        })

    }
}
//-------up,down SL------//
function inputchange () {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            total()
        })

    }
}
//------Done----//
const cartBtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style
})