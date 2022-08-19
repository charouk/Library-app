const title= document.getElementById("title");
const author= document.getElementById("author");
const page= document.getElementById("page");
const create=document.getElementById("create");
const clearAll= document.getElementById("dltAll");


let library=[];
if (localStorage.book !=null){
    library= JSON.parse(localStorage.book);

}else{
    library=[];
}

//create new book
create.onclick=function (){

    let newbook={
        title:title.value,
        author:author.value,
        page: page.value


    }
    if (title.value!='' && author.value!="" && page.value!=0){
          library.push(newbook);}
//save the data on the localstorage
    localStorage.setItem('book', JSON.stringify(library));
    showdata();
    cleardata();

}


//show data
function showdata(){
    let  table='';

   for (let i=0; i<library.length;i++){
       table +=` <tr>
                 
                   <td>${library[i].title}</td>
                    <td>${library[i].author}</td>
                    <td>${library[i].page}</td>
                    <td><input type="checkbox" onclick="check(this.id)" id="status${i}"></td>
                    <td><span onclick="remove(${i})" class="material-symbols-outlined">delete</span></td>
                </tr>
                `
        }

 document.getElementById("tbody").innerHTML=table;
 let deleteAll= document.getElementById("footer");
 if (library.length>0){
    deleteAll.style.display="block";
}else{
    deleteAll.style.display="none";

}



}
showdata();


//clear data
function cleardata(){
    title.value='';
    author.value='';
    page.value='';

}

//delet a book
function remove(i){
   
   library.splice(i,1);
   localStorage.book= JSON.stringify(library);
   showdata();
   

}
clearAll.onclick=function deletALl(){
    localStorage.clear();
    library.splice(0)
    showdata();


}


function check(i){
    checkbox= document.getElementById(i);
    localStorage.setItem(i,checkbox.checked);

}
