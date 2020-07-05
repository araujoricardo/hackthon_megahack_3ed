

export function setQuestion(value){
    return{
        type: 'SET_QUESTION',
        payload: {
            value: value
        }
    };
};

export function setAnswer(value){
    return{
        type: "SET_ANSWER",
        payload:{
            answer: value
        }
    };
};