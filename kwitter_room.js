//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig= {
      apiKey: "AIzaSyC87OUC6ovHfSrrNSjT2KO8BQC22CEDgGs",
      authDomain: "kwitter-722da.firebaseapp.com",
      databaseURL: "https://kwitter-722da-default-rtdb.firebaseio.com",
      projectId: "kwitter-722da",
      storageBucket: "kwitter-722da.appspot.com",
      messagingSenderId: "151417257649",
      appId: "1:151417257649:web:9fb85e9742dbb63d08ac90"
    };
    firebase.initializeApp(firebaseConfig);
    var show_username=localStorage.getItem('store_user_name')
    document.getElementById('show_username').innerHTML='Welcome '+show_username
    function logout(){
      localStorage.removeItem('store_user_name')
      localStorage.removeItem('store_room_name')
      window.location='index.html'
    }
    function add_room(){
      room_name=document.getElementById('roomname_input').value
      localStorage.setItem('store_room_name',room_name)
      firebase.database().ref('/').child(room_name).update({
            purpose:'adding_roomname'
      })
      window.location='kwitter_page.html'
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //Start code
       row='<div class="room_name" id='+Room_names+' onclick="redirectname(this.id)">'+Room_names+'</div><hr>'
       document.getElementById('output').innerHTML+=row
       //End code
      });});}
getData();
function redirectname(name){
 localStorage.setItem('store_room_name',name)
 window.location='kwitter_page.html' 
}