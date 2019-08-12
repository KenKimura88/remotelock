export const GET_DEVICE = 'GET_DEVICE';
export const DEVICE_RECEIVED = 'DEVICE_RECEIVED';
export const GET_USER = 'GET_USER';
export const USER_RECEIVED = 'USER_RECEIVED';
export const DEVICE_LOCK_CHANGE = 'DEVICE_LOCK_CHANGE';
export const HEADER_SWITCH = 'HEADER_SWITCH';

export const getDevice = () => ({
  type: GET_DEVICE
});

export const deviceReceived = data => ({
  type: DEVICE_RECEIVED,
  data
});

export const getUser = () => ({
  type: GET_USER
});

export const userReceived = data => ({
  type: USER_RECEIVED,
  data
});

export const lockChanged = index => ({
  type: DEVICE_LOCK_CHANGE,
  data: index
});

export const headerSwitch = index => ({
  type: HEADER_SWITCH,
  data: index
})