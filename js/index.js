

$('.navigationTag').click(function(e){
  var linkTo = $(this).attr('href');
  $('html,body').animate({
    scrollTop:$(linkTo).offset().top-110
  },1200)
  e.preventDefault();
  
})

$('#btnSubmitMessage').click(clearText);



function cleatText(){
  alert("Thank you for your message");
  var all=document.querySelectorAll('.contactField');
  all.forEach((element)=>{
    element.value=''
  })
   
}