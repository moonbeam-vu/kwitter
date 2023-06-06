//YOUR FIREBASE LINKS
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
var user_name=localStorage.getItem('store_user_name')
var room_name=localStorage.getItem('store_room_name')
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name']
message=message_data['message']
like=message_data['like']
namewithtag='<h4>'+name+'<img src="tick.png" class="user_tick"></h4><br>'
messagewithtag='<h4 class="message_h4">'+message+'</h4>'
likebutton='<button class="btn btn-warning" id="'+firebase_message_id+'" value="'+like+'" onclick="updatelike(this.id)"> like:'+like+'</button><hr>'
document.getElementById('output').innerHTML=namewithtag+messagewithtag+likebutton
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem('store_room_name')
      localStorage.removeItem('store_user_name')
      window.location='index.html'
}
function send(){
      msg=document.getElementById('inputbox').value 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      }) 
      document.getElementById('inputbox').value=''
}
function updatelike(message_id){
      likes=document.getElementById(message_id).value
      likes=Number(likes)+1
      firebase.database().ref(room_name).child(message_id).update({
            like:likes
      })
}