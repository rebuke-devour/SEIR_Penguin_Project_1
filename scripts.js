


////////////////////////////////
//         APP STATE         //
///////////////////////////////

const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {}, 
    which: true,
}

let questions = []
////////////////////////////////
//         DOM ELEMENT       //
///////////////////////////////

const $question = $('#Question')
const $a = $('#a')
const $b = $('#b')
const $c = $('#c')
const $d = $('#d')

const p1Score = $('#player1 h4')
const p2Score = $('#player2 h4')

console.log(p1Score, p2Score)


/////////////////////////////////
// FUNCTIONS
//////////////////////////////
const chooseAnswer = (event , question)=> {
    console.log(event)
    if(event.target.innerText === question.answer){
        console.log('Correct')
        if (state.which){
            state.player1++
            state.which = !state.which
        } else {
         console.log('incorrect')
        state.player2++
        state.which = !state.which
    }
    setBoard(questions)
}else {
   setBoard(questions)
    state.which =!state.which
}
}

const setBoard = (q) => { 
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)
    p1Score.text(state.player1)
    p2Score.text(state.player2)

    $('li').off()
    $('li').on('click', (event) => {
        chooseAnswer(event, randomQuestion)
        console.log(chooseAnswer)
    })
}


/////////////////////////
const URL = "https://cdn.contentful.com/spaces/gdbvn69ne4jw/environments/project_1-2021-10-12/entries?access_token=EIIsT4Udy9I7PF134kMk-gqIJMMRhQxb8bu2v37RKYM&content_type=triviaQue"
$.ajax(URL)
.then((data)=> {
    
   questions = data.items.map((q) =>  q.fields)
   console.log(data)
   console.log(questions)

   setBoard(questions)
})
