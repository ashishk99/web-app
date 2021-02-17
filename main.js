// listen to form submission
document.getElementById('contactform').addEventListener('submit',submitFrom);

function submitFrom(e){
    e.preventDefault();

    console.log(123);
}