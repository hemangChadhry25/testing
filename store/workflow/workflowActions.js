import {
  SELECT_TRIGGER,
  DISSELECT_TRIGGER,
  OPEN_ACTION_MODAL,
  CLOSE_ACTION_MODAL,
  OPEN_VERSION_HISTORY,
  CLOSE_VERSION_HISTORY,
  ADD_TRIGGER_BEGIN,
  ADD_TRIGGER_SUCCESS,
  ADD_TRIGGER_ERROR,
  ADD_NULL_TO_TRIGGER,
  ADD_NULL_TO_ACTION,
  APPEND_NULL_TO_ACTION,
  ADD_ACTION_BEGIN,
  ADD_ACTION_SUCCESS,
  ADD_ACTION_ERROR,
  ADD_ACTION_BETWEEN,
  SET_DRAGGING_ACTION,
  DELETE_TRIGGER_BEGIN,
  DELETE_TRIGGER_SUCCESS,
  DELETE_TRIGGER_ERROR,
  DUPLICATE_TRIGGER_BEGIN,
  DUPLICATE_TRIGGER_SUCCESS,
  DUPLICATE_TRIGGER_ERROR,
  ADD_TRIGGER_BETWEEN,
  ADD_ACTION_TOP,
  SET_DRAGGING_TRIGGER,
  ADD_FIRST_TRIGGER,
  OPEN_DELETE_TRIGGER_MODAL,
  CLOSE_DELETE_TRIGGER_MODAL,
  SET_TRIGGERS_DATA,
  SET_ACTIONS_DATA,
  SEARCH_ACTIONS,
  SEARCH_TRIGGERS,
  REMOVE_NULL_FROM_TRIGGER,
  SET_TRIGGER_DROP_ACTIVE_TRUE,
  SET_TRIGGER_DROP_ACTIVE_FALSE,
  ADD_LAST_TRIGGER,
  OPEN_SEARCH_SIDEBAR,
  CLOSE_SEARCH_SIDEBAR,
  LAST_TRIGGER_ACTIVE_TRUE,
  LAST_TRIGGER_ACTIVE_FALSE,
  REMOVE_NULL_FROM_ACTION,
  SHOW_ALERT,
  HIDE_ALERT,
  OPEN_LOGIC_TEST,
  CLOSE_LOGIC_TEST,
  GET_TRIGGER_BACK,
  GET_ACTION_BACK,
  RUN_SINGLE_TRIGGER_TEST,
  MOVE_TRIGGER,
  SELECT_TAB,
  SET_ITEM_DRAG_ON_CANVAS,
  APPEND_NULL_TO_TRIGGER,
  OPEN_WORKFLOW_DELETE_CONFIRMATION,
  CLOSE_WORKFLOW_DELETE_CONFIRMATION,
  DELETE_WORKFLOW,
  CANVAS_CLICKED,
  MOVE_ACTIONS,
  SET_ACTIONS_DROP_ACTIVE_TRUE,
  SET_ACTIONS_DROP_ACTIVE_FALSE,
  SET_ACTIVE_ACTION_DROP_INDEX,
  ADD_NULL_BETWEEN_ACTION,
  SET_FOCUS_ELEMENT,
  RESTORE_VERSION,
  SET_EDITING_VERSION,
  OPEN_VERSION_NAME_MODAL,
  CLOSE_VERSION_NAME_MODAL,
  GET_ALL_EVENTS,
  CHANGE_PUBLISH_STATE,
  GET_EVENTS_TRIGGER,
  RENAME_WORKFLOW,
  GET_EVENTS_ACTION,
  SET_EVENT,
  SAVE_TRIGGER_DATA,
} from "./workflowTypes";

import axios from "axios";

// export const canvasClicked = () => {
//   return (dispatch) => {
//     dispatch({ type: CANVAS_CLICKED });
//   };
// };

// export const setTriggersData = (triggers) => {
//   return (dispatch) => {
//     dispatch({ type: SET_TRIGGERS_DATA, payload: { triggers } });
//   };
// };

// export const setActionsData = (actions) => {
//   return (dispatch) => {
//     dispatch({ type: SET_ACTIONS_DATA, payload: { actions } });
//   };
// };

// export const selectTrigger = (trigger) => {
//   return async (dispatch) => {
//     dispatch({ type: SELECT_TRIGGER, payload: { trigger } });
//   };
// };

// export const disselectTrigger = () => {
//   return (dispatch) => {
//     dispatch({ type: DISSELECT_TRIGGER });
//   };
// };

// export const openActionModal = () => {
//   return (dispatch) => {
//   return (dispatch) => {
//     dispatch({ type: OPEN_ACTION_MODAL });
//   };
// };
// export const closeActionModal = () => {
//   return (dispatch) => {
//     dispatch({ type: CLOSE_ACTION_MODAL });
//   };
// };

// export const openVersionHistory = () => {
//   return (dispatch) => {
//     dispatch({ type: OPEN_VERSION_HISTORY });
//   };
// };

// export const closeVarsionHistory = () => {
//   return (dispatch) => {
//     dispatch({ type: CLOSE_VERSION_HISTORY });
//   };
// };

// export const openTriggerSidebar = () => {
//   return (dispatch) => {
//     dispatch({ type: OPEN_TRIGGER_SIDEBAR });
//   };
// };

// export const closeTriggerSidebar = () => {
//   return (dispatch) => {
//     dispatch({ type: CLOSE_TRIGGER_SIDEBAR });
//   };
// };

// export const openActionSidebar = () => {
//   return (dispatch) => {
//     dispatch({ type: OPEN_ACTION_SIDEBAR });
//   };
// };

// export const closeActionSidebar = () => {
//   return (dispatch) => {
//     dispatch({ type: CLOSE_ACTION_SIDEBAR });
//   };
// };

// export const openTestModal = () => {
//   return (dispatch) => {
//     dispatch({ type: OPEN_TEST_MODAL });
//   };
// };

// export const closeTestModal = () => {
//   return (dispatch) => {
//     dispatch({ type: CLOSE_TEST_MODAL });
//   };
// };

// export const addTrigger = (trigger, index) => {
//   return async (dispatch) => {
//     dispatch({ type: ADD_TRIGGER_BEGIN });
//     try {
//     dispatch({
//       type: ADD_TRIGGER_SUCCESS,
//       payload: { trigger: trigger, index: index },
//     });
//     } catch (error) {
//     dispatch({ type: ADD_TRIGGER_ERROR });
//     }
//   };
// };

// export const addAction = (action, index) => {
//   return async (dispatch) => {
//     dispatch({ type: ADD_ACTION_BEGIN });
//     try {
//     dispatch({
//       type: ADD_ACTION_SUCCESS,
//       payload: { action: action, index: index },
//     });
//     } catch (error) {
//     dispatch({ type: ADD_TRIGGER_ERROR });
//     }
//   };
// };
// export const addNullToTrigger = () => {
//   return (dispatch) => {
//     dispatch({ type: ADD_NULL_TO_TRIGGER });
//   };
// };

// export const appendNullToTrigger = () => {
//   return (dispatch) => {
//     dispatch({ type: APPEND_NULL_TO_TRIGGER });
//   };
// };

// export const addNullToAction = () => {
//   return (dispatch) => {
//     dispatch({ type: ADD_NULL_TO_ACTION });
//   };
// };

// export const appendNullToAction = () => {
//   return (dispatch) => {
//     dispatch({ type: APPEND_NULL_TO_ACTION });
//   };
// };

// export const addActionInBetween = (action, index) => {
//   return (dispatch) => {
//     dispatch({ type: ADD_ACTION_BETWEEN, payload: { action, index } });
//   };
// };

// export const setDraggingAction = (action) => {
//   return (dispatch) => {
//     dispatch({ type: SET_DRAGGING_ACTION, payload: { action } });
//   };
// };

// export const duplicateTrigger = (trigger, index) => {
//   return (dispatch) => {
//     dispatch({ type: DUPLICATE_TRIGGER_SUCCESS, payload: { trigger, index } });
//   };
// };

// export const addTriggerBetween = (trigger, index) => {
//   return (dispatch) => {
//     dispatch({ type: ADD_TRIGGER_BETWEEN, payload: { trigger, index } });
//   };
// };

// export const addActionTop = (action) => {
//   return (dispatch) => {
//     dispatch({ type: ADD_ACTION_TOP, payload: { action } });
//   };
// };

// export const deleteTrigger = () => {
//   return (dispatch) => {
//     dispatch({ type: DELETE_TRIGGER_SUCCESS });
//     setTimeout(() => {
//       dispatch({ type: HIDE_ALERT });
//     }, 3000);
//   };
// };

// export const setDraggingTrigger = (trigger) => {
//   return (dispatch) => {
//     dispatch({ type: SET_DRAGGING_TRIGGER, payload: { trigger } });
//   };
// };

// export const addFirstTrigger = (trigger) => {
//   return (dispatch) => {
//     dispatch({ type: ADD_FIRST_TRIGGER, payload: { trigger } });
//   };
// };

// export const openDeleteTriggerModal = (trigger) => {
//   return (dispatch) => {
//     dispatch({ type: OPEN_DELETE_TRIGGER_MODAL, payload: { trigger } });
//   };
// };

// export const closeDeleteTriggerModal = () => {
//   return (dispatch) => {
//     dispatch({ type: CLOSE_DELETE_TRIGGER_MODAL });
//   };
// };

// export const searchTriggers = (value) => {
//   return (dispatch) => {
//     dispatch({ type: SEARCH_TRIGGERS, payload: { value } });
//   };
// };
// export const searchActions = (value) => {
//   return (dispatch) => {
//     dispatch({ type: SEARCH_ACTIONS, payload: { value } });
//   };
// };

// export const removeNullFromTrigger = () => {
//   return (dispatch) => {
//     dispatch({ type: REMOVE_NULL_FROM_TRIGGER });
//   };
// };

// export const removeNullFromAction = () => {
//   return (dispatch) => {
//     dispatch({ type: REMOVE_NULL_FROM_ACTION });
//   };
// };

// export const setTriggerDropActiveTrue = (index) => {
//   return (dispatch) => {
//     dispatch({ type: SET_TRIGGER_DROP_ACTIVE_TRUE, payload: { index } });
//   };
// };

// export const setTriggerDropActiveFalse = () => {
//   return (dispatch) => {
//     dispatch({ type: SET_TRIGGER_DROP_ACTIVE_FALSE });
//   };
// };

// export const addLastTrigger = (trigger) => {
//   return (dispatch) => {
//     dispatch({ type: ADD_LAST_TRIGGER, payload: { trigger } });
//   };
// };

// export const openSearchSidebar = () => {
//   return (dispatch) => {
//     dispatch({ type: OPEN_SEARCH_SIDEBAR });
//   };
// };

// export const closeSearchSidebar = () => {
//   return (dispatch) => {
//     dispatch({ type: CLOSE_SEARCH_SIDEBAR });
//   };
// };

// export const lastTriggerActiveTrue = () => {
//   return (dispatch) => {
//     dispatch({ type: LAST_TRIGGER_ACTIVE_TRUE });
//   };
// };

// export const lastTriggerActiveFalse = () => {
//   return (dispatch) => {
//     dispatch({ type: LAST_TRIGGER_ACTIVE_FALSE });
//   };
// };

// export const showAlert = (alertText) => {
//   return (dispatch) => {
//     dispatch({ type: SHOW_ALERT, payload: { alertText } });
//     setTimeout(() => {
//       dispatch({ type: HIDE_ALERT });
//     }, 3000);
//   };
// };

// export const openLogicTest = () => {
//   return (dispatch) => {
//     dispatch({ type: OPEN_LOGIC_TEST });
//   };
// };

// export const closeLogicTest = () => {
//   return (dispatch) => {
//     dispatch({ type: CLOSE_LOGIC_TEST });
//   };
// };

// export const getTriggerBack = (trigger) => {
//   return (dispatch) => {
//     dispatch({ type: GET_TRIGGER_BACK, payload: { trigger } });
//   };
// };

// export const getActionBack = (action) => {
//   return (dispatch) => {
//     dispatch({ type: GET_ACTION_BACK, payload: { action } });
//   };
// };

// export const runSingleTriggerTest = (item) => {
//   return (dispatch) => {
//     dispatch({ type: RUN_SINGLE_TRIGGER_TEST, payload: { item } });
//   };
// };

// export const moveTrigger = (index) => {
//   return (dispatch) => {
//     dispatch({ type: MOVE_TRIGGER, payload: { index } });
//   };
// };

// export const selectTab = (tab) => {
//   return (dispatch) => {
//     dispatch({ type: SELECT_TAB, payload: { tab } });
//   };
// };

// export const setItemDragOnCanvas = () => {
//   return (dispatch) => {
//     dispatch({ type: SET_ITEM_DRAG_ON_CANVAS });
//   };
// };

// export const openWorkflowDeleteConfirmation = () => {
//   return (dispatch) => {
//     dispatch({ type: OPEN_WORKFLOW_DELETE_CONFIRMATION });
//   };
// };

// export const closeWorkflowDeleteConfirmation = () => {
//   return (dispatch) => {
//     dispatch({ type: CLOSE_WORKFLOW_DELETE_CONFIRMATION });
//   };
// };

// export const deleteWorkflow = () => {
//   return (dispatch) => {
//     dispatch({ type: DELETE_WORKFLOW });
//   };
// };

// export const moveActions = (index) => {
//   return (dispatch) => {
//     dispatch({ type: MOVE_ACTIONS, payload: { index } });
//   };
// };

// export const setActionsDropActiveTrue = (index) => {
//   return (dispatch) => {
//     dispatch({ type: SET_ACTIONS_DROP_ACTIVE_TRUE, payload: { index } });
//   };
// };

// export const setActionsDropActiveFalse = () => {
//   return (dispatch) => {
//     dispatch({ type: SET_ACTIONS_DROP_ACTIVE_FALSE });
//   };
// };

// export const setActiveActionDrop = (index) => {
//   return (dispatch) => {
//     dispatch({ type: SET_ACTIVE_ACTION_DROP_INDEX, payload: { index } });
//   };
// };

// export const addNullBetweenAction = (index) => {
//   return (dispatch) => {
//     dispatch({ type: ADD_NULL_BETWEEN_ACTION, payload: { index } });
//   };
// };

// export const setFocusElement = (id) => {
//   return (dispatch) => {
//     dispatch({ type: SET_FOCUS_ELEMENT, payload: { id } });
//   };
// };

// export const restoreVersion = (version) => {
//   return (dispatch) => {
//     dispatch({ type: RESTORE_VERSION, payload: { version } });
//   };
// };

// export const setEditingVersion = (version) => {
//   return (dispatch) => {
//     dispatch({ type: SET_EDITING_VERSION, payload: { version } });
//   };
// };

// export const openVersionNameModal = () => {
//   return (dispatch) => {
//     dispatch({ type: OPEN_VERSION_NAME_MODAL });
//   };
// };
// export const closeVersionNameModal = () => {
//   return (dispatch) => {
//     dispatch({ type: CLOSE_VERSION_NAME_MODAL });
//   };
// };

export const getAllEvents = () => {
  return async (dispatch) => {
    const response = await axios.get(
      " https://839td7scc3.execute-api.us-east-1.amazonaws.com/triggers/createEvent"
    );
    dispatch({
      type: GET_ALL_EVENTS,
      payload: { events: response.data.result.Items },
    });
  };
};
export const getEventsTrigger = (id) => {
  return async (dispatch) => {
    const response = await axios.post(
      "https://839td7scc3.execute-api.us-east-1.amazonaws.com/triggers/getEvents",
      { triggerId: id }
    );

    dispatch({
      type: GET_EVENTS_TRIGGER,
      payload: { events: response.data },
    });
  };
};

// this is temporary
// export const setConnectionId = (id) => {
//   return (dispatch) => {
//     dispatch({ type: "SET_CONNECTION_ID", payload: { id } });
//   };
// };

// export const changePublishState = (state) => {
//   return (dispatch) => {
//     dispatch({ type: CHANGE_PUBLISH_STATE, payload: { state } });
//   };
// };

// export const renameWorkflow = (name) => {
//   return (dispatch) => {
//     dispatch({ type: RENAME_WORKFLOW, payload: { name } });
//   };
// };

export const getEventsAction = (id) => {
  return async (dispatch) => {
    const response = await axios.post(
      "https://g1um95w0lb.execute-api.us-east-1.amazonaws.com/action/getEvents",
      { actionId: id }
    );

    dispatch({
      type: GET_EVENTS_ACTION,
      payload: { events: response.data },
    });
  };
};

// export const setEvent = (id) => {
//   return (dispatch) => {
//     dispatch({ type: SET_EVENT, payload: { id } });
//   };
// };

// export const saveTriggerData = (triggerId, eventId, name, value) => {
//   return (dispatch) => {
//     dispatch({
//       type: SAVE_TRIGGER_DATA,
//       payload: { triggerId, eventId, name, value },
//     });
//   };
// };
