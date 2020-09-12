const SEND_MESSAGE = "SEND-MESSAGE";
let initialState ={
    usersData : [
        {id:1,name: "Andrey", img: "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg"},
        {id:2,name: "Alexandr", img:"https://f0.pngfuel.com/png/348/800/man-wearing-blue-shirt-illustration-png-clip-art.png"},
        {id:3,name: "Darya", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzWBXtpWI3XwVykdZn77ybq7FPMu8BVLP-JA&usqp=CAU"},
        {id:4,name: "Ivan", img:"https://cdn.imgbin.com/17/23/24/imgbin-computer-icons-teacher-pedagogy-education-experience-teacher-zdGVV5hRG7KR9fzeBqRr2SzmG.jpg"},],
    messageData : [
        {id:1,message: "Hello", num: 1},
        {id:2,message: "How are you, man?", num: 0},
        {id:3,message: "What interestind in your life?", num: 1},
        {id:4,message: "I'm glad to hear you!",num: 0},],

};
const dialogsReducer =(state = initialState, action)=>{
    let stateCopy = {...state, messageData:[...state.messageData],}
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {...state,messageData:[...state.messageData,{id:6,message:body}]};

        default:
            return state;
    }
}
export const sendMessageActionCreator = (newMessageBody) =>{
    return {type:SEND_MESSAGE,newMessageBody}
}
export default dialogsReducer;