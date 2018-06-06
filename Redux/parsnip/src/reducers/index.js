import { uniqeId } from "../actions";
const mockTasks = [
  {
    id: uniqeId(),
    title: "Learn Redux",
    description: "The store, actions, and reducers, oh my!",
    status: "Unstarted"
  },
  {
    id: uniqeId(),
    title: "Peace on Earth",
    description: "No big deal.",
    status: "In Progress"
  },
  {
    id: uniqeId(),
    title: "React",
    description: "No big deal.",
    status: "In Progress"
  }
];

export default function tasks(state = { tasks: mockTasks }, action) {
  if (action.type === "CREATE_TASK") {
    return { tasks: state.tasks.concat(action.payload) };
  } else if (action.type === "EDIT_TASK") {
    const { payload } = action;
    return {
      tasks: state.tasks.map(task => {
        if (task.id === payload.id) {
          return Object.assign({}, task, {status:payload.params});
        }

        return task;
      })
    };
  }
  return state;
}
