// listen to form submission

var firebaseConfig = {
    apiKey: "AIzaSyB3-ue3N9gDGA6WLGTkqGiz1K_2aykXJko",
    authDomain: "aadhar-f0bfd.firebaseapp.com",
    projectId: "aadhar-f0bfd",
    storageBucket: "aadhar-f0bfd.appspot.com",
    messagingSenderId: "679092699495",
    appId: "1:679092699495:web:9c9515139fcc2354746fc2",
    measurementId: "G-CY84FE3RH3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


var messagesRef = firebase.database().ref('messages');

document.getElementById('contactform').addEventListener('submit',submitFrom);

function submitFrom(e){
    e.preventDefault();
    var name = getInputVal('fullname');
    var mobile_number = getInputVal('mobile');
    var token_number = getInputVal('token');
    var email_id = getInputVal('email');
    
    // save message
    savemessage(name,mobile_number,token_number,email_id);
    // console.log(name);

    // alert printing
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contactform').reset();

}

function getInputVal(id){
    return document.getElementById(id).value;
}

function savemessage(name, mobile_number, token_number, email_id){
    var newmessageRef = messagesRef.push();
    newmessageRef.set({
        name:name,
        mobile: mobile_number,
        token:token_number,
        email:email_id
    });
}