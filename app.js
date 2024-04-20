const questions = document.querySelectorAll(".question")

questions.forEach((question) => {
    console.log(question)
    const btn=question.querySelector('.question-btn')

    btn.addEventListener('click', ()=>{
        questions.forEach((item) => {
            if(item !== question){
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})

$('.cardcontainer').on('click', function () {
    $('.card').toggleClass('flipped');
  });