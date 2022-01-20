//Loading html document DOM
window.onload = () => {
   let getData = document.querySelector('.input')
   getData.oninput = function() {
       // trim --> for not space
       //this --> get value
       let value = this.value.trim();
       let list = document.querySelectorAll('.ul li');
       //if the value not equal --> ''empty str <-- then the func will execute
        // this code the same code below --> if (value !== '')
             if (value) {
             list.forEach(elem => {
                 //if elem has the innnerText and searching the values of we will write 
                 //and the method search return true OR false
                 if(elem.innerText.search(value) == -1) {
                     //then add the class name from css !!!
                     elem.classList.add('hide')
                 }
             });
         } else {
             //and then remove the class name
             list.forEach(elem => {
                 elem.classList.remove('hide')
             })
         }
   }
}