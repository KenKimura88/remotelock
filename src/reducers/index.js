import * as actions from '../actions';
import get from 'lodash.get';

const initialSate = {
  userList: [],
  deviceList: [],
  headerValue: 0,
}
const reducer = (state = initialSate , action) => {
  switch (action.type) {
    case actions.USER_RECEIVED: {
      return { ...state, userList: action.data };
    }
    case actions.DEVICE_RECEIVED: {
      return { ...state, deviceList: action.data };
    }
    case actions.DEVICE_LOCK_CHANGE: {
      let { deviceList } = state;
      deviceList[action.data].attributes.state = get(deviceList[action.data], 'attributes.state') === "locked" ? "unlocked" : "locked";
      return { ...state, deviceList: deviceList.slice(0)}  
    }
    case actions.HEADER_SWITCH: {
      return { ...state, headerValue: action.data};
    }
    default: 
      return state;
  }
};

export default reducer;