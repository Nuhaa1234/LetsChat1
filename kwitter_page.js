//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDhaaqeXziqqWwmpGLpF9aU2Mn7rMisHE0",
      authDomain: "kwitter-61c62.firebaseapp.com",
      databaseURL: "https://kwitter-61c62-default-rtdb.firebaseio.com",
      projectId: "kwitter-61c62",
      storageBucket: "kwitter-61c62.appspot.com",
      messagingSenderId: "428338755099",
      appId: "1:428338755099:web:28fbbea6d2b585c2142abe",
      measurementId: "G-E3LESRERNS"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");

function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value= "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}
