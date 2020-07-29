export const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log("action",action)
    const nextStore = next(action)
    console.log("state", store.getState())
    console.groupEnd()
    return nextStore
}