class Quiz{

    constructor(questions){
        this.questions=questions;
        this.score=0;
        this.currentIndex=0;
    }

getCurrentQuestions(){
    return this.questions [this.currentIndex]
}



}