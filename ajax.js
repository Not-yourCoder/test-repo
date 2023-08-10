const fetchBtn = document.querySelector("#fetch") 
// const url = "https://dummy.restapiexample.com/ap/v1/create"

fetchBtn.addEventListener("click", ()=>{
    console.log("data fetched")
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest(); 

    //open the object("kind of request","source of data", "synchronous/async req")
    // xhr.open("GET", url, true)

    //post request
    xhr.open("POST", "Ajax.txt", true)

    //What to do on progress(optional)
    xhr.onprogress = function(){
        console.log('on progress')
    }
    xhr.onreadystatechange = function (){
        if(xhr.readyState == 2){
            console.log("placing order")
            if(xhr.readyState == 3){
                console.log("The restraunt has accepted your order.")
                if(xhr.readyState == 4){
                    if(this.status === 200){
                        console.log(this.responseText)
                    }
                    else{
                        console.error("Mayday! MayDay! " + this.status)
                    }
                }
            }
        }
        else{
            console.log("this is taking longer than expected...")
        }
    }

    // xhr.onload = function(){
    //     if(this.status === 200){
    //         console.log(this.responseText)
    //     }
    //     else{
    //         console.error("Mayday! MayDay!" + this.status)
    //     }
    // }
    xhr.send()
    console.log("Done!")
})