import { combineReducers } from "redux";

export function error(state = null, action) {
  switch (action.type) {
    case "SHARE_SHOW_ERROR":
      return action.error;

    case "SHARE_SHOW_MERCURE_DELETED":
      return `${action.retrieved["@id"]} has been deleted by another user.`;

    case "SHARE_SHOW_RESET":
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case "SHARE_SHOW_LOADING":
      return action.loading;

    case "SHARE_SHOW_RESET":
      return false;

    default:
      return state;
  }
}

export function retrieved(state = null, action) {
  switch (action.type) {
    case "SHARE_SHOW_SUCCESS":
    case "SHARE_SHOW_MERCURE_MESSAGE":
      return action.retrieved;

    case "SHARE_SHOW_RESET":
      return null;

    default:
      return state;
  }
}

export function eventSource(state = null, action) {
  switch (action.type) {
    case "SHARE_SHOW_MERCURE_OPEN":
      return action.eventSource;

    case "SHARE_SHOW_RESET":
      return null;

    default:
      return state;
  }
}

export default combineReducers({ error, loading, retrieved, eventSource });
