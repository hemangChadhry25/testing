import { triggersData, actionsData } from "../../utils/data";

import {
  // SELECT_TRIGGER,
  // DISSELECT_TRIGGER,
  // OPEN_ACTION_MODAL,
  // CLOSE_ACTION_MODAL,
  // OPEN_VERSION_HISTORY,
  // CLOSE_VERSION_HISTORY,
  // OPEN_TRIGGER_SIDEBAR,
  // CLOSE_TRIGGER_SIDEBAR,
  // OPEN_ACTION_SIDEBAR,
  // CLOSE_ACTION_SIDEBAR,
  // OPEN_TEST_MODAL,
  // CLOSE_TEST_MODAL,
  // ADD_NULL_TO_TRIGGER,
  // ADD_TRIGGER_BEGIN,
  // ADD_TRIGGER_SUCCESS,
  // ADD_TRIGGER_ERROR,
  // ADD_NULL_TO_ACTION,
  // APPEND_NULL_TO_ACTION,
  // ADD_ACTION_BEGIN,
  // ADD_ACTION_SUCCESS,
  // ADD_ACTION_ERROR,
  // ADD_ACTION_BETWEEN,
  // SET_DRAGGING_ACTION,
  // DUPLICATE_TRIGGER_BEGIN,
  // DUPLICATE_TRIGGER_SUCCESS,
  // DUPLICATE_TRIGGER_ERROR,
  // DELETE_TRIGGER_BEGIN,
  // DELETE_TRIGGER_SUCCESS,
  // DELETE_TRIGGER_ERROR,
  // ADD_TRIGGER_BETWEEN,
  // ADD_ACTION_TOP,
  // SET_DRAGGING_TRIGGER,
  // ADD_FIRST_TRIGGER,
  // OPEN_DELETE_TRIGGER_MODAL,
  // CLOSE_DELETE_TRIGGER_MODAL,
  // SET_ACTIONS_DATA,
  // SET_TRIGGERS_DATA,
  // SEARCH_ACTIONS,
  // SEARCH_TRIGGERS,
  // REMOVE_NULL_FROM_TRIGGER,
  // SET_TRIGGER_DROP_ACTIVE_TRUE,
  // SET_TRIGGER_DROP_ACTIVE_FALSE,
  // ADD_LAST_TRIGGER,
  // OPEN_SEARCH_SIDEBAR,
  // CLOSE_SEARCH_SIDEBAR,
  // LAST_TRIGGER_ACTIVE_TRUE,
  // LAST_TRIGGER_ACTIVE_FALSE,
  // REMOVE_NULL_FROM_ACTION,
  HIDE_ALERT,
  // OPEN_LOGIC_TEST,
  // CLOSE_LOGIC_TEST,
  // GET_TRIGGER_BACK,
  // GET_ACTION_BACK,
  // RUN_SINGLE_TRIGGER_TEST,
  // MOVE_TRIGGER,
  // SELECT_TAB,
  // SET_ITEM_DRAG_ON_CANVAS,
  // APPEND_NULL_TO_TRIGGER,
  // OPEN_WORKFLOW_DELETE_CONFIRMATION,
  // CLOSE_WORKFLOW_DELETE_CONFIRMATION,
  // DELETE_WORKFLOW,
  // CANVAS_CLICKED,
  // MOVE_ACTIONS,
  // SET_ACTIONS_DROP_ACTIVE_FALSE,
  // SET_ACTIONS_DROP_ACTIVE_TRUE,
  // SET_ACTIVE_ACTION_DROP_INDEX,
  // ADD_NULL_BETWEEN_ACTION,
  // SET_FOCUS_ELEMENT,
  // RESTORE_VERSION,
  // SET_EDITING_VERSION,
  // OPEN_VERSION_NAME_MODAL,
  // CLOSE_VERSION_NAME_MODAL,
  // GET_ALL_EVENTS,
  // CHANGE_PUBLISH_STATE,
  // SHOW_ALERT,
  GET_EVENTS_TRIGGER,
  // RENAME_WORKFLOW,
  GET_EVENTS_ACTION,
  // SET_EVENT,
  // SAVE_TRIGGER_DATA,
  UPLOAD_TRIGGER_IMAGES,
} from "./workflowTypes";

import { v4 as uuidv4 } from "uuid";

const initialState = {
  // triggers: [],
  // actions: [],
  // loading: false,
  // selectedTrigger: null,
  // isDetailModalOpen: false,
  // isTriggerModalOpen: false,
  // isActionModalOpen: false,
  // isVersionHistoryOpen: false,
  // isActionSidebarOpen: false,
  // isTestModalOpen: false,
  // lastTrigger: null,
  // draggingAction: null,
  // draggingTrigger: null,
  // isDeletePopupOpen: false,
  // deletingTrigger: null,
  // triggersData: [],
  // actionsData: [],
  // triggerDropActive: { active: false, index: null },
  // isSearchSidebarOpen: false,
  // isLastTriggerActive: false,
  // isAlertOpen: false,
  // alertText: "",
  // isLogicTestOpen: false,
  // dropType: "TRIGGER",
  // draggingTriggerIndex: null,
  // draggingActionIndex: null,
  // activeDetailTab: "setup",
  // itemDragOnCanvas: false,
  // isWorkflowDeleteConfirmationOpen: false,
  // activeActionIndex: null,
  // focusElement: null,
  // editingVersion: null,
  // isVersionNameModalOpen: false,
  // events: [],
  // publishState: "",
  // workflow: {
  //   name: "workflow1",
  //   triggers: [],
  //   actions: [],
  //   updatedAt: new Date().toString(),
  // },
};

const workflowReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CANVAS_CLICKED:
    //   if (state.triggers.includes(null)) {
    //     return {
    //       ...state,
    //       selectedTrigger: null,
    //       isDetailModalOpen: false,
    //       isTriggerModalOpen: false,
    //       isActionModalOpen: false,
    //       isVersionHistoryOpen: false,
    //       isActionSidebarOpen: false,
    //       activeDetailTab: "setup",
    //       lastTrigger: state.triggers[state.triggers.length - 2],
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       selectedTrigger: null,
    //       isDetailModalOpen: false,
    //       isTriggerModalOpen: false,
    //       isActionModalOpen: false,
    //       isVersionHistoryOpen: false,
    //       isActionSidebarOpen: false,
    //       activeDetailTab: "setup",
    //       lastTrigger: state.triggers[state.triggers.length - 1],
    //     };
    //   }

    // case SET_TRIGGERS_DATA:
    //   return { ...state, triggersData: action.payload.triggers };
    // case SET_ACTIONS_DATA:
    //   return { ...state, actionsData: action.payload.actions };
    // case SELECT_TRIGGER:
    //   return {
    //     ...state,
    //     selectedTrigger: action.payload.trigger,
    //     isDetailModalOpen: true,
    //     isTriggerModalOpen: false,
    //     isVersionHistoryOpen: false,
    //     isActionSidebarOpen: false,
    //     activeDetailTab: "setup",
    //   };
    // case DISSELECT_TRIGGER:
    //   if (state.selectedTrigger.type === "action") {
    //     return {
    //       ...state,
    //       selectedTrigger: null,
    //       isTriggerModalOpen: false,
    //       isDetailModalOpen: false,
    //       isVersionHistoryOpen: false,
    //       isActionSidebarOpen: true,
    //       activeDetailTab: "setup",
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       selectedTrigger: null,
    //       isTriggerModalOpen: true,
    //       isDetailModalOpen: false,
    //       isVersionHistoryOpen: false,
    //       isActionSidebarOpen: false,
    //       activeDetailTab: "setup",
    //     };
    //   }

    // case OPEN_ACTION_MODAL:
    //   return { ...state, isActionModalOpen: !state.isActionModalOpen };
    // case CLOSE_ACTION_MODAL:
    //   return { ...state, isActionModalOpen: false };
    // case OPEN_VERSION_HISTORY:
    //   return {
    //     ...state,
    //     isDetailModalOpen: false,
    //     isTriggerModalOpen: false,
    //     isActionModalOpen: false,
    //     isVersionHistoryOpen: true,
    //     isActionSidebarOpen: false,
    //     activeDetailTab: "setup",
    //   };
    // case CLOSE_VERSION_HISTORY:
    //   return {
    //     ...state,
    //     isDetailModalOpen: false,
    //     isTriggerModalOpen: false,
    //     isActionModalOpen: false,
    //     isVersionHistoryOpen: false,
    //     isActionSidebarOpen: false,
    //     activeDetailTab: "setup",
    //   };
    // case OPEN_TRIGGER_SIDEBAR:
    //   return {
    //     ...state,
    //     isDetailModalOpen: false,
    //     isTriggerModalOpen: true,
    //     isActionModalOpen: false,
    //     isVersionHistoryOpen: false,
    //     isActionSidebarOpen: false,
    //   };
    // case CLOSE_TRIGGER_SIDEBAR:
    //   remove any null from the action and triggers
    //   const allActions = state.actions.filter((i) => i !== null);
    //   const allTriggers = state.triggers.filter((i) => i !== null);
    //   return {
    //     ...state,
    //     isDetailModalOpen: false,
    //     isTriggerModalOpen: false,
    //     isActionModalOpen: false,
    //     isVersionHistoryOpen: false,
    //     isActionSidebarOpen: false,
    //     triggers: allTriggers,
    //     actions: allActions,
    //     selectedTrigger: null,
    //     activeDetailTab: "setup",
    //     lastTrigger: allTriggers[allTriggers.length - 1],
    //   };
    // case OPEN_ACTION_SIDEBAR:
    //   return {
    //     ...state,
    //     isDetailModalOpen: false,
    //     isTriggerModalOpen: false,
    //     isActionModalOpen: false,
    //     isVersionHistoryOpen: false,
    //     isActionSidebarOpen: true,
    //     activeDetailTab: "setup",
    //   };
    // case CLOSE_ACTION_SIDEBAR:
    //    remove any null from the action and triggers
    //   const allActions2 = state.actions.filter((i) => i !== null);
    //   const allTriggers2 = state.triggers.filter((i) => i !== null);
    //   return {
    //     ...state,
    //     isDetailModalOpen: false,
    //     isTriggerModalOpen: false,
    //     isActionModalOpen: false,
    //     isVersionHistoryOpen: false,
    //     isActionSidebarOpen: false,
    //     triggers: allTriggers2,
    //     actions: allActions2,
    //     selectedTrigger: null,
    //     activeDetailTab: "setup",
    //   };
    // case OPEN_TEST_MODAL:
    //   return { ...state, isTestModalOpen: true };
    // case CLOSE_TEST_MODAL:
    //   return { ...state, isTestModalOpen: false };
    // case ADD_NULL_TO_TRIGGER:
    //   return { ...state, triggers: [null] };
    // case ADD_TRIGGER_SUCCESS:
    // const arr = state.triggers;
    // let obj3 = null;
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] === null) {
    //     obj3 = {
    //       id: uuidv4(),
    //       logo: action.payload.trigger.logo,
    //       name: action.payload.trigger.name,
    //       type: action.payload.trigger.type,
    //       integrationId: action.trigger.integrationId,
    //     };
    //     arr[i] = obj3;
    //   }
    // }
    // const lastTrigger = arr[arr.length - 1];
    // if (arr.length === 5) {
    //   return {
    //     ...state,
    //     triggers: arr,
    //     lastTrigger: null,
    //     selectedTrigger: obj3,
    //     isDetailModalOpen: true,
    //     itemDragOnCanvas: false,
    //     activeDetailTab: "setup",
    //   };
    // } else {
    //   return {
    //     ...state,
    //     triggers: arr,
    //     lastTrigger: lastTrigger,
    //     selectedTrigger: obj3,
    //     isDetailModalOpen: true,
    //     itemDragOnCanvas: false,
    //     activeDetailTab: "setup",
    //   };
    // }

    // case APPEND_NULL_TO_TRIGGER:
    //   const lastTrigger3 = state.triggers[state.triggers.length - 1];
    //   if (lastTrigger3 === null) {
    //     return { ...state };
    //   } else if (state.triggers.length >= 5) {
    //     return { ...state, lastTrigger: null };
    //   } else {
    //     return {
    //       ...state,
    //       triggers: [...state.triggers, null],
    //       lastTrigger: null,
    //     };
    //   }
    // case ADD_NULL_TO_ACTION:
    //   const filteredTriggers2 = state.triggers.filter((i) => i !== null);
    //   return { ...state, actions: [null], triggers: filteredTriggers2 };
    // case APPEND_NULL_TO_ACTION:
    //   return { ...state, actions: [...state.actions, null] };

    // case ADD_ACTION_SUCCESS:
    //   const arr2 = state.actions;

    //   for (let i = 0; i < arr2.length; i++) {
    //     if (arr2[i] === null) {
    //       arr2[i] = {
    //         id: uuidv4(),
    //         logo: action.payload.action.logo,
    //         name: action.payload.action.name,
    //         type: action.payload.action.type,
    //         integrationId: action.payload.action.integrationId,
    //       };
    //     }
    //   }
    //   const lastAction = arr2[arr2.length - 1];
    //   return {
    //     ...state,
    //     actions: arr2,
    //     lastAction: lastAction,
    //     selectedTrigger: lastAction,
    //     isDetailModalOpen: true,
    //     itemDragOnCanvas: false,
    //     activeDetailTab: "setup",
    //   };
    // case ADD_ACTION_BETWEEN:
    //   let append = state.actions;
    //   const obj2 = {
    //     id: uuidv4(),
    //     logo: action.payload.action.logo,
    //     name: action.payload.action.name,
    //     type: action.payload.action.type,
    //     integrationId: action.payload.action.integrationId,
    //   };
    //   append.splice(action.payload.index, 0, obj2);

    //   append = append.filter((i) => i !== null);
    //   return {
    //     ...state,
    //     actions: append,
    //     selectedTrigger: obj2,
    //     isDetailModalOpen: true,
    //     itemDragOnCanvas: false,
    //     activeDetailTab: "setup",
    //   };
    // case SET_DRAGGING_ACTION:
    //   const draggingActionIndex = state.actions.indexOf(action.payload.action);
    //   const actionsArr = state.actions.filter(
    //     (i) => i.id !== action.payload.action.id
    //   );
    //   return {
    //     ...state,
    //     draggingAction: action.payload.action,
    //     actions: actionsArr,
    //     draggingActionIndex,
    //   };
    // case ADD_TRIGGER_BETWEEN:
    //   if (state.triggers.length >= 5 && !state.triggers.includes(null)) {
    //     return { ...state };
    //   } else {
    //     let append2 = state.triggers;
    //     const obj = {
    //       id: uuidv4(),
    //       logo: action.payload.trigger.logo,
    //       name: action.payload.trigger.name,
    //       type: action.payload.trigger.type,
    //       integrationId: action.payload.trigger.integrationId,
    //     };
    //     append2.splice(action.payload.index, 0, obj);
    //     append2 = append2.filter((i) => i !== null);
    //     const lastTrigger2 = append2[append2.length - 1];

    //     return {
    //       ...state,
    //       triggers: append2,
    //       lastTrigger: lastTrigger2,
    //       draggingTrigger: null,
    //       itemDragOnCanvas: false,
    //       selectedTrigger: obj,
    //       isTriggerModalOpen: false,
    //       isDetailModalOpen: true,
    //       activeDetailTab: "setup",
    //     };
    //   }

    // case ADD_ACTION_TOP:
    //   const obj4 = {
    //     id: uuidv4(),
    //     logo: action.payload.action.logo,
    //     name: action.payload.action.name,
    //     type: action.payload.action.type,
    //     integrationId: action.payload.action.integrationId,
    //   };
    //   return {
    //     ...state,
    //     actions: [...state.actions, obj4],
    //     selectedTrigger: obj4,
    //     isDetailModalOpen: true,
    //     itemDragOnCanvas: false,
    //     activeDetailTab: "setup",
    //   };
    // case DELETE_TRIGGER_SUCCESS:
    //   if (state.deletingTrigger.type === "action") {
    //     const deletedActions = state.actions.filter(
    //       (i) => i.id !== state.deletingTrigger.id
    //     );
    //     // if (state.deletingTrigger.id === state.selectedTrigger.id) {
    //     return {
    //       ...state,
    //       actions: deletedActions,
    //       deletingTrigger: null,
    //       isDeletePopupOpen: false,
    //       selectedTrigger: null,
    //       isDetailModalOpen: false,
    //       alertText: `${state.deletingTrigger.value} deleted successfully`,
    //       isAlertOpen: true,
    //       activeDetailTab: "setup",
    //     };
    //     // } else {
    //     //   return {
    //     //     ...state,
    //     //     actions: deletedActions,
    //     //     deletingTrigger: null,
    //     //     isDeletePopupOpen: false,
    //     //   };
    //     // }
    //   } else {
    //     const deletedTriggers = state.triggers.filter(
    //       (i) => i.id !== state.deletingTrigger.id
    //     );

    //     const lastTrigger2 = deletedTriggers[deletedTriggers.length - 1];
    //     if (state.triggers.length === 1) {
    //       if (state.actions.length > 0) {
    //         return {
    //           ...state,
    //           isDetailModalOpen: false,
    //           triggers: [],
    //           lastTrigger: null,
    //           deletingTrigger: null,
    //           isDeletePopupOpen: false,
    //           alertText: `${state.deletingTrigger.value} deleted successfully`,
    //           isAlertOpen: true,
    //           activeDetailTab: "setup",
    //         };
    //       } else {
    //         return {
    //           ...state,
    //           triggers: [],
    //           isDetailModalOpen: false,
    //           lastTrigger: null,
    //           deletingTrigger: null,
    //           isDeletePopupOpen: false,
    //           alertText: `${state.deletingTrigger.value} deleted successfully`,
    //           isAlertOpen: true,
    //           activeDetailTab: "setup",
    //         };
    //       }
    //     } else {
    //       return {
    //         ...state,
    //         triggers: deletedTriggers,
    //         lastTrigger: lastTrigger2,
    //         deletingTrigger: null,
    //         isDetailModalOpen: false,
    //         isDeletePopupOpen: false,
    //         alertText: `${state.deletingTrigger.value} deleted successfully`,
    //         isAlertOpen: true,
    //         activeDetailTab: "setup",
    //       };
    //     }
    //   }

    // case DUPLICATE_TRIGGER_SUCCESS:
    //   if (action.payload.trigger.type === "action") {
    //     const newActions = state.actions;
    //     let objectToCopy = Object.assign({}, newActions[action.payload.index]);
    //     objectToCopy.id = uuidv4();
    //     newActions.splice(action.payload.index + 1, 0, objectToCopy);

    //     return {
    //       ...state,
    //       actions: newActions,
    //       selectedTrigger: objectToCopy,
    //       isDetailModalOpen: true,
    //     };
    //   } else {
    //     if (state.triggers.length >= 5) {
    //       return { ...state };
    //     } else {
    //       const newTriggers = state.triggers;
    //       let objectToCopy = Object.assign(
    //         {},
    //         newTriggers[action.payload.index]
    //       );
    //       objectToCopy.id = uuidv4();
    //       newTriggers.splice(action.payload.index + 1, 0, objectToCopy);
    //       const lastTrigger = newTriggers[newTriggers.length - 1];
    //       return {
    //         ...state,
    //         triggers: newTriggers,
    //         lastTrigger,
    //         selectedTrigger: objectToCopy,
    //       };
    //     }
    //   }
    // case SET_DRAGGING_TRIGGER:
    //   const draggingTriggerIndex = state.triggers.indexOf(
    //     action.payload.trigger
    //   );
    //   const triggerArr = state.triggers.filter(
    //     (i) => i.id !== action.payload.trigger.id
    //   );
    //   if (triggerArr.length === 0) {
    //     return {
    //       ...state,
    //       draggingTrigger: action.payload.trigger,
    //       triggers: [null],
    //       draggingTriggerIndex: draggingTriggerIndex,
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       draggingTrigger: action.payload.trigger,
    //       triggers: triggerArr,
    //       draggingTriggerIndex: draggingTriggerIndex,
    //     };
    //   }

    // case ADD_FIRST_TRIGGER:
    //   const obj = {
    //     id: uuidv4(),
    //     logo: action.payload.trigger.logo,
    //     name: action.payload.trigger.name,
    //     type: action.payload.trigger.type,
    //     integrationId: action.payload.trigger.integrationId,
    //   };
    //   return {
    //     ...state,
    //     triggers: [...state.triggers, obj],
    //     lastTrigger: obj,
    //     selectedTrigger: obj,
    //     isDetailModalOpen: true,
    //     itemDragOnCanvas: false,
    //   };
    // case OPEN_DELETE_TRIGGER_MODAL:
    //   return {
    //     ...state,
    //     isDeletePopupOpen: true,
    //     deletingTrigger: action.payload.trigger,
    //   };
    // case CLOSE_DELETE_TRIGGER_MODAL:
    //   return {
    //     ...state,
    //     isDeletePopupOpen: false,
    //     deletingTrigger: null,
    //   };
    // case SEARCH_TRIGGERS:
    //   const query = action.payload.value;
    //   const regex = new RegExp(query, "i");
    //   const filteredData = triggersData.filter((i) => regex.test(i.value));

    //   return { ...state, triggersData: filteredData };
    // case SEARCH_ACTIONS:
    //   const query2 = action.payload.value;
    //   const regex2 = new RegExp(query2, "i");
    //   const filteredData2 = actionsData.filter((i) => regex2.test(i.value));
    //   return { ...state, actionsData: filteredData2 };
    // case REMOVE_NULL_FROM_TRIGGER:
    //   const triggersWithoutNull = state.triggers.filter((i) => i !== null);
    //   return { ...state, triggers: triggersWithoutNull };
    // case SET_TRIGGER_DROP_ACTIVE_TRUE:
    //   const triggerDropActive = {
    //     active: true,
    //     index: action.payload.index,
    //   };
    //   return { ...state, triggerDropActive };
    // case SET_TRIGGER_DROP_ACTIVE_FALSE:
    //   const triggerDropActive2 = {
    //     active: false,
    //     index: null,
    //   };
    //   return { ...state, triggerDropActive: triggerDropActive2 };
    // case ADD_LAST_TRIGGER:
    //   return {
    //     ...state,
    //     triggers: [...state.triggers, action.payload.trigger],
    //     lastTrigger: action.payload.trigger,
    //     draggingTrigger: null,
    //   };
    // case OPEN_SEARCH_SIDEBAR:
    //   return { ...state, isSearchSidebarOpen: true };
    // case CLOSE_SEARCH_SIDEBAR:
    //   return { ...state, isSearchSidebarOpen: false, focusElement: null };
    // case LAST_TRIGGER_ACTIVE_TRUE:
    //   return { ...state, isLastTriggerActive: true };
    // case LAST_TRIGGER_ACTIVE_FALSE:
    //   return { ...state, isLastTriggerActive: false };
    // case REMOVE_NULL_FROM_ACTION:
    //   const actionWithoutNull = state.actions.filter((i) => i !== null);

    //   return { ...state, actions: actionWithoutNull };
    case HIDE_ALERT:
      return { ...state, isAlertOpen: false, alertText: "" };
    // case OPEN_LOGIC_TEST:
    //   return { ...state, isLogicTestOpen: true };
    // case CLOSE_LOGIC_TEST:
    //   return { ...state, isLogicTestOpen: false };
    // case GET_TRIGGER_BACK:
    //   if (action.payload.trigger.id.length > 4) {
    //     let tempTriggers = state.triggers;
    //     tempTriggers.splice(
    //       state.draggingTriggerIndex,
    //       0,
    //       action.payload.trigger
    //     );
    //     tempTriggers = tempTriggers.filter((i) => i !== null);
    //     return {
    //       ...state,
    //       triggers: tempTriggers,
    //       itemDragOnCanvas: false,
    //       lastTrigger: state.triggers[state.triggers.length - 1],
    //     };
    //   } else {
    //     const triggers = state.triggers.filter((i) => i !== null);
    //     return {
    //       ...state,
    //       triggers,
    //       itemDragOnCanvas: false,
    //       lastTrigger: state.triggers[state.triggers.length - 1],
    //     };
    //   }
    // case GET_ACTION_BACK:
    //   if (action.payload.action.id.length > 4) {
    //     const tempActions = state.actions;
    //     tempActions.splice(state.draggingActionIndex, 0, action.payload.action);

    //     return { ...state, action: tempActions, itemDragOnCanvas: false };
    //   } else {
    //     return { ...state, itemDragOnCanvas: false };
    //   }
    // case RUN_SINGLE_TRIGGER_TEST:
    //   return {
    //     ...state,
    //     isDetailModalOpen: true,
    //     activeDetailTab: "test",
    //     selectedTrigger: action.payload.item,
    //   };
    // case MOVE_TRIGGER:
    //   const movedTrigger = state.triggers;
    //   movedTrigger.splice(action.payload.index, 0, null);
    //   return { ...state, triggers: movedTrigger };
    // case SELECT_TAB:
    //   return { ...state, activeDetailTab: action.payload.tab };
    // case SET_ITEM_DRAG_ON_CANVAS:
    //   return { ...state, itemDragOnCanvas: true };
    // case OPEN_WORKFLOW_DELETE_CONFIRMATION:
    //   return { ...state, isWorkflowDeleteConfirmationOpen: true };
    // case CLOSE_WORKFLOW_DELETE_CONFIRMATION:
    //   return { ...state, isWorkflowDeleteConfirmationOpen: false };
    // case DELETE_WORKFLOW:
    //   return { ...state, triggers: [], actions: [] };
    // case MOVE_ACTIONS:
    //   const movedActions = state.actions;
    //   movedActions.splice(action.payload.index, 0, null);
    // case SET_ACTIONS_DROP_ACTIVE_TRUE:
    //   const actionsDropActive = {
    //     active: true,
    //     index: action.payload.index,
    //   };
    //   return { ...state, actionsDropActive };
    // case SET_ACTIONS_DROP_ACTIVE_FALSE:
    //   const actionsDropActive2 = {
    //     active: false,
    //     index: null,
    //   };
    //   return { ...state, actionsDropActive: actionsDropActive2 };
    // case SET_ACTIVE_ACTION_DROP_INDEX:
    //   return { ...state, activeActionIndex: action.payload.index };
    // case ADD_NULL_BETWEEN_ACTION:
    //   if (state.actions.includes(null)) {
    //     let tempActions = state.actions;

    //     const indexOfNull = state.actions.indexOf(null);

    //     // tempActions.splice(action.payload.index, 0, null);
    //     // tempActions.splice(1, indexOfNull);
    //     // return { ...state, actions: tempActions };
    //     if (indexOfNull < action.payload.index) {
    //       tempActions.splice(action.payload.index, 0, null);
    //       tempActions.splice(indexOfNull, 1);
    //       return { ...state, actions: tempActions };
    //     } else if (indexOfNull > action.payload.index) {
    //       tempActions.splice(action.payload.index, 0, null);
    //       tempActions.splice(indexOfNull + 1, 1);
    //       return { ...state, actions: tempActions };
    //     }
    //   } else {
    //     let tempActions = state.actions;
    //     tempActions.splice(action.payload.index, 0, null);
    //     return { ...state, actions: tempActions };
    //   }
    // case SET_FOCUS_ELEMENT:
    //   return {
    //     ...state,
    //     focusElement: { focusElement: action.payload.id },
    //   };
    // case RESTORE_VERSION:
    //   return {
    //     ...state,
    //     lastTrigger:
    //       action.payload.version.triggers[action.payload.version.triggers - 1],
    //     triggers: action.payload.version.triggers,
    //     actions: action.payload.version.actions,
    //   };
    // case OPEN_VERSION_NAME_MODAL:
    //   return { ...state, isVersionNameModalOpen: true };
    // case CLOSE_VERSION_NAME_MODAL:
    //   return { ...state, isVersionNameModalOpen: false, editingVersion: null };
    // case SET_EDITING_VERSION:
    //   return { ...state, editingVersion: action.payload.version };
    // case GET_ALL_EVENTS:
    //   return { ...state, events: action.payload.events };
    // this is temporary
    // case "SET_CONNECTION_ID":
    //   if (state.selectedTrigger.type === "trigger") {
    //     const triggers = state.triggers.map((i) => {
    //       if (i.id === state.selectedTrigger.id) {
    //         return {
    //           ...state.selectedTrigger,
    //           connectionId: action.payload.id,
    //         };
    //       } else {
    //         return { ...i };
    //       }
    //     });

    //     return { ...state, triggers };
    //   }
    //   if (state.selectedTrigger.type === "action") {
    //     const actions = state.actions.map((i) => {
    //       if (i.id === state.selectedTrigger.id) {
    //         return {
    //           ...state.selectedTrigger,
    //           connectionId: action.payload.id,
    //         };
    //       } else {
    //         return { ...i };
    //       }
    //     });

    //     return { ...state, actions };
    //   }

    // case CHANGE_PUBLISH_STATE:
    //   return { ...state, publishState: action.payload.state };
    // case SHOW_ALERT:
    //   return {
    //     ...state,
    //     alertText: action.payload.alertText,
    //     isAlertOpen: true,
    //   };
    case GET_EVENTS_TRIGGER:
      return { ...state, events: action.payload.events };
    case GET_EVENTS_ACTION:
      return { ...state, events: action.payload.events };
    // case RENAME_WORKFLOW:
    //   return {
    //     ...state,
    //     workflow: { ...state.workflow, name: action.payload.name },
    //   };
    // case SET_EVENT:
    //   if (state.selectedTrigger.type === "trigger") {
    //     const triggers = state.triggers.map((i) => {
    //       if (i.id === state.selectedTrigger.id) {
    //         return { ...state.selectedTrigger, eventId: action.payload.id };
    //       } else {
    //         return { ...i };
    //       }
    //     });
    //     return { ...state, triggers };
    //   }
    //   if (state.selectedTrigger.type === "action") {
    //     const actions = state.actions.map((i) => {
    //       if (i.id === state.selectedTrigger.id) {
    //         return { ...state.selectedTrigger, eventId: action.payload.id };
    //       } else {
    //         return { ...i };
    //       }
    //     });
    //     return { ...state, actions };
    //   }
    // case SAVE_TRIGGER_DATA:
    //   const triggers = state.triggers.map((i) => {
    //     if (i.id === action.payload.triggerId) {
    //       let obj;
    //       if (i.configurations) {
    //         obj = {
    //           ...i,
    //           configurations: {
    //             eventId: action.payload.eventId,
    //             inputs: {
    //               ...i.configurations.inputs,
    //               [action.payload.label]: action.payload.value,
    //             },
    //           },
    //         };
    //       } else {
    //         obj = {
    //           ...i,
    //           configurations: {
    //             eventId: action.payload.eventId,
    //             inputs: {
    //               [action.payload.label]: action.payload.value,
    //             },
    //           },
    //         };
    //       }

    //       return obj;
    //     } else {
    //       return i;
    //     }
    //   });
    //   return { ...state, triggers };
    case UPLOAD_TRIGGER_IMAGES:
      const keyArray = action.payload.inputs.map((i) => {
        const str = `workflowFiles/${action.payload.workflowId}/${i.name}`;
        return str;
      });
      const triggers1 = state.triggers.map((i) => {
        if (i.id === state.selectedTrigger.id) {
          let obj;
          if (i.configurations) {
            obj = {
              ...i,
              configurations: {
                eventId: action.payload.eventId,
                inputs: {
                  ...i.configurations.inputs,
                  [action.payload.label]: keyArray,
                },
              },
            };
          } else {
            obj = {
              ...i,
              configurations: {
                eventId: action.payload.eventId,
                inputs: {
                  [action.payload.label]: keyArray,
                },
              },
            };
          }

          return obj;
        } else {
          return i;
        }
      });
      return { ...state, triggers: triggers1 };
    default:
      return { ...state };
  }
};

export default workflowReducer;
