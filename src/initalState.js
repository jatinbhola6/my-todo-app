export const initialState = {
    todoItems: [
        {
            id: 1,
            title: "Test Task",
            description: "This is test task created in initalState object.",
            startDate: Date.now(),
            endDate: Date.now() + 24*60*60*1000,
            isDone: false,
            type: 3
        },
        {
            id: 2,
            title: "Test Task 2",
            description: "This is second test task created in initalState object.",
            startDate: Date.now(),
            endDate: Date.now() + 24 * 60 * 60 * 1000,
            isDone: true,
            type: 5
        }
    ]

}