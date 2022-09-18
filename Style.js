
// Get the form element
let form = document.getElementById("addParfumetoform") // as HTMLFormElement  -- this is for Typescript only
form.addEventListener("submit", onSubmit)

//On Submit add the image
function onSubmit(ev){ 
  ev.preventDefault()

  ShowTheNewAddedParfumes()
}

//Count the images to prevent adding more then 2 images 
function GetDivParfumesCount(divname) {   
  let DivCount = GetDivCount(divname) 
  return DivCount
}

//Receive Div Count
function GetDivCount(div) {  
  let divs = document.getElementById(div).querySelectorAll(".div_parfume_img")   // as HTMLDivElement  -- this is for Typescript only
  let DivCount = divs.length   
  return DivCount
}

//Add Selected Parfumet (image)
function AddSelectedParfume(rownumber, thenewid_div_imgnumber, imgname, ParfumeCaption){
    let rowInput = document.getElementById(rownumber)  // as HTMLInputElement  -- this is for Typescript only

    //let row:HTLDivElement = document.createElement("div")  this is for Typescript only
    let row = document.createElement("div")

    row.setAttribute("class","div_parfume_img")
    row.setAttribute("id", thenewid_div_imgnumber)     
    row.setAttribute("display","inline-block")  

    div_about  = document.createElement("h3")
    div_about.setAttribute("class","about")

    div_about.setAttribute("width", "300px;")
    div_about.setAttribute("borderradius", "20px;") 
    div_about.setAttribute("border", "1px solid #04948c")        
    div_about.setAttribute("fontfamily", "'calibri', 'serif'")  
    div_about.setAttribute("fontsize", "20px;")
    div_about.setAttribute("textshadow", "4px 4px 4px #aaa")    
    div_about.setAttribute("color", "#04948c")
    div_about.setAttribute("textdecoration", "none")
    div_about.setAttribute("backgroundcolor", "whitesmoke")
    div_about.setAttribute("textalign", "center") 
      
    row.appendChild (div_about)
    div_about.innerText = ParfumeCaption 

    let img = document.createElement("img")
    img.setAttribute("src","./Images/" + imgname)    
    img.setAttribute("width","300px;")
    img.setAttribute("height","300px;")
    img.setAttribute("alt", ParfumeCaption)

    row.appendChild (img)   
   
    let description = document.createElement("p")    
    description.setAttribute("class","parfume_description")

    if (ParfumeCaption == "Chanel") {
      description.innerText="You're lounging in a French garden surrounded by freshly blooming peonies and roses. A few spritzes of this Dior floral fragrance will transport you there. Picture this: You're lounging in a French garden surrounded by freshly blooming."     
    }
   else if(ParfumeCaption == "Dior") {
      description.innerText="Inspired by garden parties, this fresh-smelling Viktor & Rolf fragrance is housed in a cheeky grenade-shaped bottle and earns its cult-favorite status by exploding with the super feminine, warm floral scent of jasmine, freesia and rose."     
    }
  
    row.appendChild (description)  

    rowInput.appendChild(row) 
}

//  function submitAdvice(f) {
//      alert('submitting');
//      fn_test()
//      return false;
//  }

//Add the image and show it
function ShowTheNewAddedParfumes(){

    let ResFirstDivCount = GetDivParfumesCount("row1")   
    let ResSecondDivCount = GetDivParfumesCount("row2")  

    let ParfumeToAdd = document.getElementById("add_parfume")  
    let imgName = ""     

    if (ParfumeToAdd.value == "Chanel") {        
          imgName = "7.jpg" 
          if(ResFirstDivCount < 4){   
              AddSelectedParfume("row1", "id_div_img4", imgName, "Chanel")   
          }
          else if (ResSecondDivCount < 4){
              AddSelectedParfume("row2", "id_div_img8", imgName, "Chanel")  
          }

    } else if (ParfumeToAdd.value == "Dior") {     
            imgName = "9.jpg"   
            if(ResFirstDivCount < 4){   
              AddSelectedParfume("row1", "id_div_img4", imgName, "Dior")    
          }
          else if (ResSecondDivCount < 4){
              AddSelectedParfume("row2", "id_div_img8", imgName, "Dior")  
          }

    } else {
        alert('Please, choose the parfume from the list.')
    }  
}

//Remove added images
function RemoveImages() {
    let rem_img4 = document.getElementById("id_div_img4")
    let rem_img8 = document.getElementById("id_div_img8")

    if (rem_img4 != null){
        rem_img4.remove()
    }

    if (rem_img8 != null){  
        rem_img8.remove()
    }
}
