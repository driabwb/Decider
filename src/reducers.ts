interface State {};
interface Action {};

const nopReducer = (state: State = {}, action: Action) => state;

const rootReducer = nopReducer;
export default rootReducer;
