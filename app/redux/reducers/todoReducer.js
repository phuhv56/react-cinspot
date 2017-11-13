const toDos = [
    {
        id: 1,
        title: 'Motobycle Photography',
        reponsible: 'Tom Cleveley',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        priority: 3
    },
    {
        id: 2,
        title: 'Street Photography',
        reponsible: 'Asenwe Diabi',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        priority: 2
    },
    {
        id: 3,
        title: 'Foods Photography',
        reponsible: 'Adam Jonhson',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        priority: 1
    },
    {
        id: 4,
        title: 'Life Photography',
        reponsible: 'Holly Malawy',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        priority: 3
    }
]

export function todos(state = {data: toDos, loading: "loading..."}, action){
    switch (action.type) {
        case 'SHOW_ALL':
            return {
                ...state,
                loading: 'loaded'
            }
        case 'LOADING':
            return {
                ...state,
                loading: 'loading...'
            }
        case 'ADD_TODO':
            state.data.push(action.todo);
            return {
                ...state,
                data: state.data,
                loading: 'loaded'
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                data: state.data.filter((e)=> e.id != action.index),
                loading: 'loaded'
            }
        default:
            return state;
    }
}