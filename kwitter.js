var user_name=''
function next(){
    user_name=document.getElementById('inputbox').value
    console.log(user_name)
    localStorage.setItem('store_user_name',user_name)
    window.location='kwitter_room.html'
}