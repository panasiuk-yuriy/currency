export const ACTION_TYPES = {
  REQUESTED_DATA: 'REQUESTED_DATA',
  REQUESTED_DATA_SUCCESS: 'REQUESTED_DATA_SUCCESS',
  REQUESTED_DATA_FAIL: 'REQUESTED_DATA_FAIL',
  FETCHED_DATA: 'FETCHED_DATA',
};

export const requestData = () => {
  return { type: ACTION_TYPES.REQUESTED_DATA }
};

export const requestDataSuccess = (data) => {
  return { type: ACTION_TYPES.REQUESTED_DATA_SUCCESS, payload: data }
};

export const requestDataError = (error) => {
  return { type: ACTION_TYPES.REQUESTED_DATA_FAIL, payload: error}
};

export const fetchData = () => {
  return { type: ACTION_TYPES.FETCHED_DATA }
};