const initialState = {
    content: 1,
    currentQuestion: 0
};

const quiz = (state = initialState, action) =>{

    switch(action.type){
        case ('SET_QUESTION'):{
            
            return state;
        };
        default:
            return state;
    };

};

export default quiz;