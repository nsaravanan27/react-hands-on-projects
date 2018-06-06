let _id = 1;

export function uniqeId() {
    return _id++;
}

export function createTask({title, description}) {
    return {
        type:"CREATE_TASK",
        payload: {
            id: uniqeId(),
            title: title,
            description: description,
            status: "Unstarted"
        }
    };
}

export function editStatus(id, params={}) {
    return {
        type: 'EDIT_TASK',
        payload: {
            id,
            params
        }
    }
}