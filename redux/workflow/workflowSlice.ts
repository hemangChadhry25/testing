import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";

interface Workflow {
  name: string;
  triggers: any[];
  actions: any[];
  updatedAt: string;
}

export interface CounterState {
  triggers: Array<object | null>
  actions: Array<object | null>
  workflow: Workflow
  publishState: string,
  isTriggerModalOpen: boolean,
  isDetailModalOpen: boolean,
  isSearchSidebarOpen: boolean,
  isVersionHistoryOpen: boolean,
  isActionSidebarOpen: boolean,
  isAlertOpen: boolean,
  alertText: string,
  isLogicTestOpen: boolean
  triggerDropActive: {
    active: boolean, index: any
  },
  isTestModalOpen: boolean
  lastTrigger: any
  draggingAction: any,
  draggingTrigger: any,
  isDeletePopupOpen: boolean,
  deletingTrigger: any,
  triggersData: Array<object>,
  actionsData: Array<object>,
  isLastTriggerActive: boolean,
  dropType: string,
  draggingTriggerIndex: any,
  draggingActionIndex: any,
  activeDetailTab: string,
  itemDragOnCanvas: boolean,
  isWorkflowDeleteConfirmationOpen: boolean,
  activeActionIndex: any,
  focusElement: any,
  editingVersion: any,
  isVersionNameModalOpen: boolean
  events: Array<object>,
  selectedTrigger: any,
  isActionModalOpen: boolean
  loading: boolean
}

const initialState: CounterState = {
  triggers: [],
  actions: [],
  workflow: {
    name: "workflow1",
    triggers: [],
    actions: [],
    updatedAt: new Date().toISOString(),
  },
  publishState: "",
  isTriggerModalOpen: false,
  isDetailModalOpen: false,
  isSearchSidebarOpen: false,
  isVersionHistoryOpen: false,
  isActionSidebarOpen: false,
  isAlertOpen: false,
  alertText: "",
  isLogicTestOpen: false,
  triggerDropActive: { active: false, index: null },
  isTestModalOpen: false,
  lastTrigger: null,
  draggingAction: null,
  draggingTrigger: null,
  isDeletePopupOpen: false,
  deletingTrigger: null,
  triggersData: [],
  actionsData: [],
  isLastTriggerActive: false,
  dropType: "TRIGGER",
  draggingTriggerIndex: null,
  draggingActionIndex: null,
  activeDetailTab: "setup",
  itemDragOnCanvas: false,
  isWorkflowDeleteConfirmationOpen: false,
  activeActionIndex: null,
  focusElement: null,
  editingVersion: null,
  isVersionNameModalOpen: false,
  events: [],
  selectedTrigger: null,
  isActionModalOpen: false,
  loading: false
}

export const counterSlice: any = createSlice({
  name: 'workflow',
  initialState,
  reducers: {

    // decrement: (state) => {
    //   state.value -= 1
    // },
    openTriggerSidebar: (state) => {
      state.isDetailModalOpen = false;
      state.isTriggerModalOpen = true;
      state.isActionModalOpen = false;
      state.isVersionHistoryOpen = false;
      state.isActionSidebarOpen = false;
    },
    closeTriggerSidebar: (state) => {
      const allActions = state.actions.filter((i) => i !== null);
      const allTriggers = state.triggers.filter((i) => i !== null);
      state.isDetailModalOpen = false;
      state.isTriggerModalOpen = false;
      state.isActionModalOpen = false;
      state.isVersionHistoryOpen = false;
      state.isActionSidebarOpen = false;
      state.triggers = allTriggers;
      state.actions = allActions;
      state.selectedTrigger = null;
      state.activeDetailTab = "setup";
      state.lastTrigger = allTriggers[allTriggers.length - 1];
    },
    openActionSidebar: (state) => {
      state.isDetailModalOpen = false;
      state.isTriggerModalOpen = false;
      state.isActionModalOpen = false;
      state.isVersionHistoryOpen = false;
      state.isActionSidebarOpen = true;
      state.activeDetailTab = "setup";
    },
    closeActionSidebar: (state) => {
      const allActions2 = state.actions.filter((i) => i !== null);
      const allTriggers2 = state.triggers.filter((i) => i !== null);
      state.isDetailModalOpen = false;
      state.isTriggerModalOpen = false;
      state.isActionModalOpen = false;
      state.isVersionHistoryOpen = false;
      state.isActionSidebarOpen = false;
      state.triggers = allTriggers2;
      state.actions = allActions2;
      state.selectedTrigger = null;
      state.activeDetailTab = "setup";
    },
    openTestModal: (state) => {
      state.isTestModalOpen = true
    },
    closeTestModal: (state) => {
      state.isTestModalOpen = false
    },
    canvasClicked: (state) => {
      if (state.triggers.includes(null)) {
        state.selectedTrigger = null;
        state.isDetailModalOpen = false;
        state.isTriggerModalOpen = false;
        state.isActionModalOpen = false;
        state.isVersionHistoryOpen = false;
        state.isActionSidebarOpen = false;
        state.activeDetailTab = "setup";
        state.lastTrigger = state.triggers[state.triggers.length - 2];
      } else {
        state.selectedTrigger = null;
        state.isDetailModalOpen = false;
        state.isTriggerModalOpen = false;
        state.isActionModalOpen = false;
        state.isVersionHistoryOpen = false;
        state.isActionSidebarOpen = false;
        state.activeDetailTab = "setup";
        state.lastTrigger = state.triggers[state.triggers.length - 1];
      }
    },
    selectTrigger: (state, action) => {


      state.selectedTrigger = action.payload;
      state.isDetailModalOpen = true;
      state.isTriggerModalOpen = false;
      state.isVersionHistoryOpen = false;
      state.isActionSidebarOpen = false;
      state.activeDetailTab = "setup";
    },
    disselectTrigger: (state) => {
      if (state.selectedTrigger.type === "action") {
        state.selectedTrigger = null;
        state.isTriggerModalOpen = false;
        state.isDetailModalOpen = false;
        state.isVersionHistoryOpen = false;
        state.isActionSidebarOpen = true;
        state.activeDetailTab = "setup";
      } else {
        state.selectedTrigger = null;
        state.isTriggerModalOpen = true;
        state.isDetailModalOpen = false;
        state.isVersionHistoryOpen = false;
        state.isActionSidebarOpen = false;
        state.activeDetailTab = "setup";
      }
    },
    setTriggersData: (state, action) => {
      state.triggersData = action.payload;
    },
    setActionsData: (state, action) => {
      state.actionsData = action.payload
    },
    openVersionHistory: (state) => {
      state.isDetailModalOpen = false;
      state.isTriggerModalOpen = false;
      state.isActionModalOpen = false;
      state.isVersionHistoryOpen = true;
      state.isActionSidebarOpen = false;
      state.activeDetailTab = "setup";
    },
    closeVarsionHistory: (state) => {
      state.isDetailModalOpen = false;
      state.isTriggerModalOpen = false;
      state.isActionModalOpen = false;
      state.isVersionHistoryOpen = false;
      state.isActionSidebarOpen = false;
      state.activeDetailTab = "setup";
    },
    openLogicTest: (state) => {
      state.isLogicTestOpen = true
    },
    closeLogicTest: (state) => {
      state.isLogicTestOpen = false
    },
    openSearchSidebar: (state) => {
      state.isSearchSidebarOpen = true
    },
    closeSearchSidebar: (state) => {
      state.isSearchSidebarOpen = false;
      state.focusElement = null
    },
    // from here
    removeNullFromAction: (state) => {
      const actionWithoutNull = state.actions.filter((i) => i !== null);
      state.actions = actionWithoutNull
    },
    removeNullFromTrigger: (state) => {
      const triggersWithoutNull = state.triggers.filter((i) => i !== null);
      state.triggers = triggersWithoutNull
    },
    setItemDragOnCanvas: (state) => {
      state.itemDragOnCanvas = true
    },
    setTriggerDropActiveTrue: (state, action) => {
      const triggerDropActive = {
        active: true,
        index: action.payload.index,
      };
      state.triggerDropActive = triggerDropActive
    },
    setTriggerDropActiveFalse: (state) => {
      const triggerDropActive2 = {
        active: false,
        index: null,
      };
      state.triggerDropActive = triggerDropActive2
    },
    addTriggerBetween: (state, action) => {


      if (state.triggers.length >= 5 && !state.triggers.includes(null)) {
        return
      } else {
        let append2 = state.triggers;
        const obj = {
          id: uuidv4(),
          logo: action.payload.item.logo,
          name: action.payload.item.name,
          type: action.payload.item.type,
          integrationId: action.payload.item.integrationId,
        };
        append2.splice(action.payload.index, 0, obj);
        append2 = append2.filter((i) => i !== null);
        const lastTrigger2 = append2[append2.length - 1];

        state.triggers = append2;
        state.lastTrigger = lastTrigger2;
        state.draggingTrigger = null;
        state.itemDragOnCanvas = false;
        state.selectedTrigger = obj;
        state.isTriggerModalOpen = false;
        state.isDetailModalOpen = true;
        state.activeDetailTab = "setup";

      }
    },
    addNullToAction: (state) => {
      const filteredTriggers2 = state.triggers.filter((i) => i !== null);
      state.actions = [null];
      state.triggers = filteredTriggers2;
    },
    appendNullToAction: (state) => {
      state.actions = [...state.actions, null]
    },
    addActionInBetween: (state, action) => {
      let append = state.actions;
      const obj2 = {
        id: uuidv4(),
        logo: action.payload.action.logo,
        name: action.payload.action.name,
        type: action.payload.action.type,
        integrationId: action.payload.action.integrationId,
      };
      append.splice(action.payload.index, 0, obj2);

      append = append.filter((i) => i !== null);
      state.actions = append;
      state.selectedTrigger = obj2;
      state.isDetailModalOpen = true;
      state.itemDragOnCanvas = false;
      state.activeDetailTab = "setup";
    },
    moveTrigger: (state, action) => {
      const movedTrigger = state.triggers;
      movedTrigger.splice(action.payload.index, 0, null);
      state.triggers = movedTrigger
    },
    getTriggerBack: (state, action) => {
      if (action.payload.id.length > 4) {
        let tempTriggers = state.triggers;
        tempTriggers.splice(
          state.draggingTriggerIndex,
          0,
          action.payload
        );
        tempTriggers = tempTriggers.filter((i) => i !== null);

        state.triggers = tempTriggers;
        state.itemDragOnCanvas = false;
        state.lastTrigger = state.triggers[state.triggers.length - 1];

      } else {
        const triggers = state.triggers.filter((i) => i !== null);

        state.triggers = triggers;
        state.itemDragOnCanvas = false;
        state.lastTrigger = state.triggers[state.triggers.length - 1];

      }
    },
    getActionBack: (state, action) => {
      if (action.payload.id.length > 4) {
        const tempActions = state.actions;
        tempActions.splice(state.draggingActionIndex, 0, action.payload);

        state.actions = tempActions;
        state.itemDragOnCanvas = false
      } else {
        state.itemDragOnCanvas = false;
      }
    },
    addFirstTrigger: (state, action) => {
      const obj = {
        id: uuidv4(),
        logo: action.payload.logo,
        name: action.payload.name,
        type: action.payload.type,
        integrationId: action.payload.integrationId,
      };

      state.triggers = [...state.triggers, obj];
      state.lastTrigger = obj;
      state.selectedTrigger = obj;
      state.isDetailModalOpen = true;
      state.itemDragOnCanvas = false;

    },
    appendNullToTrigger: (state) => {
      const lastTrigger3 = state.triggers[state.triggers.length - 1];
      if (lastTrigger3 === null) {
        return
      } else if (state.triggers.length >= 5) {
        state.lastTrigger = null
      } else {
        state.triggers = [...state.triggers, null];
        state.lastTrigger = null;

      }
    },
    openActionModal: (state) => {
      state.isActionModalOpen = !state.isActionModalOpen
    },
    closeActionModal: (state) => {
      state.isActionModalOpen = false
    },
    addTrigger: (state, action) => {
      const arr = state.triggers;
      let obj3 = null;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null) {
          obj3 = {
            id: uuidv4(),
            logo: action.payload.trigger.logo,
            name: action.payload.trigger.name,
            type: action.payload.trigger.type,
            integrationId: action.payload.trigger.integrationId,
          };
          arr[i] = obj3;
        }
      }
      const lastTrigger = arr[arr.length - 1];
      if (arr.length === 5) {

        state.triggers = arr;
        state.lastTrigger = null;
        state.selectedTrigger = obj3;
        state.isDetailModalOpen = true;
        state.itemDragOnCanvas = false;
        state.activeDetailTab = "setup";

      } else {

        state.triggers = arr;
        state.lastTrigger = lastTrigger;
        state.selectedTrigger = obj3;
        state.isDetailModalOpen = true;
        state.itemDragOnCanvas = false;
        state.activeDetailTab = "setup";

      }
    },
    setDraggingAction: (state, action) => {
      const draggingActionIndex = state.actions.indexOf(action.payload.action);
      const actionsArr = state.actions.filter(
        (i: any) => i.id !== action.payload.action.id
      );

      state.draggingAction = action.payload.action;
      state.actions = actionsArr;
      state.draggingActionIndex = draggingActionIndex;

    },
    duplicateTrigger: (state, action) => {
      console.log(action);

      if (action.payload.trigger.type === "action") {
        const newActions = state.actions;
        let objectToCopy: any = Object.assign({}, newActions[action.payload.index]);
        objectToCopy.id = uuidv4();
        newActions.splice(action.payload.index + 1, 0, objectToCopy);

        state.actions = newActions;
        state.selectedTrigger = objectToCopy;
        state.isDetailModalOpen = true;

      } else {
        if (state.triggers.length >= 5) {
          return
        } else {
          const newTriggers = state.triggers;
          let objectToCopy: any = Object.assign(
            {},
            newTriggers[action.payload.index]
          );
          objectToCopy.id = uuidv4();
          newTriggers.splice(action.payload.index + 1, 0, objectToCopy);
          const lastTrigger = newTriggers[newTriggers.length - 1];

          state.triggers = newTriggers;
          state.lastTrigger = lastTrigger;
          state.selectedTrigger = objectToCopy;

        }
      }
    },
    setDraggingTrigger: (state, action) => {
      const draggingTriggerIndex = state.triggers.indexOf(
        action.payload
      );
      const triggerArr = state.triggers.filter(
        (i: any) => i.id !== action.payload.id
      );
      if (triggerArr.length === 0) {

        state.draggingTrigger = action.payload;
        state.triggers = [null];
        state.draggingTriggerIndex = draggingTriggerIndex;

      } else {

        state.draggingTrigger = action.payload;
        state.triggers = triggerArr;
        state.draggingTriggerIndex = draggingTriggerIndex;

      }
    },
    runSingleTriggerTest: (state, action) => {
      state.isDetailModalOpen = true;
      state.activeDetailTab = "test";
      state.selectedTrigger = action.payload.item;
    },
    openDeleteTriggerModal: (state, action) => {
      state.isDeletePopupOpen = true;
      state.deletingTrigger = action.payload;
    },
    addAction: (state, action) => {
      const arr2 = state.actions;

      for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === null) {
          arr2[i] = {
            id: uuidv4(),
            logo: action.payload.logo,
            name: action.payload.name,
            type: action.payload.type,
            integrationId: action.payload.integrationId,
          };
        }
      }
      const lastAction = arr2[arr2.length - 1];

      state.actions = arr2;
      // state.lastAction= lastAction;
      state.selectedTrigger = lastAction;
      state.isDetailModalOpen = true;
      state.itemDragOnCanvas = false;
      state.activeDetailTab = "setup";

    },
    addActionTop: (state, action) => {
      const obj4 = {
        id: uuidv4(),
        logo: action.payload.action.logo,
        name: action.payload.action.name,
        type: action.payload.action.type,
        integrationId: action.payload.action.integrationId,
      };
      return {
        ...state,
        actions: [...state.actions, obj4],
        selectedTrigger: obj4,
        isDetailModalOpen: true,
        itemDragOnCanvas: false,
        activeDetailTab: "setup",
      };
    },
    searchTriggers: (state, action) => {
      const query = action.payload.value;
      const regex = new RegExp(query, "i");
      const filteredData = state.triggersData.filter((i: any) => regex.test(i.value));
      state.triggersData = filteredData
    },
    searchActions: (state, action) => {
      const query2 = action.payload.value;
      const regex2 = new RegExp(query2, "i");
      const filteredData2 = state.actionsData.filter((i: any) => regex2.test(i.value));
      state.actionsData = filteredData2
    },
    addLastTrigger: (state, action) => {
      state.triggers = [...state.triggers, action.payload.trigger];
      state.lastTrigger = action.payload.trigger;
      state.draggingTrigger = null;
    },
    lastTriggerActiveTrue: (state) => {
      state.isLastTriggerActive = true
    },
    lastTriggerActiveFalse: (state) => {
      state.isLastTriggerActive = false
    },
    moveActions: (state, action) => {
      const movedActions = state.actions;
      movedActions.splice(action.payload.index, 0, null);
    },
    setActionsDropActiveTrue: (state, action) => {
      const actionsDropActive = {
        active: true,
        index: action.payload.index,
      };
      // state.actionsDropActive = actionsDropActive
    },
    setActionsDropActiveFalse: (state) => {
      const actionsDropActive2 = {
        active: false,
        index: null,
      };
      //  state.actionsDropActive= actionsDropActive2 
    },
    setActiveActionDrop: (state, action) => {
      if (action.payload === null) {
        state.activeActionIndex = null
      } else {
        state.activeActionIndex = action.payload.index
      }

    },
    setFocusElement: (state, action) => {
      state.focusElement = { focusElement: action.payload.id }
    },
    restoreVersion: (state, action) => {
      state.lastTrigger =
        action.payload.version.triggers[action.payload.version.triggers - 1];
      state.triggers = action.payload.version.triggers;
      state.actions = action.payload.version.actions;
    },
    selectTab: (state, action) => {
      state.activeDetailTab = action.payload.tab
    },
    addNullBetweenAction: (state, action) => {
      if (state.actions.includes(null)) {
        let tempActions = state.actions;

        const indexOfNull = state.actions.indexOf(null);

        // tempActions.splice(action.payload.index, 0, null);
        // tempActions.splice(1, indexOfNull);
        // return { ...state, actions: tempActions };
        if (indexOfNull < action.payload.index) {
          tempActions.splice(action.payload.index, 0, null);
          tempActions.splice(indexOfNull, 1);
          state.actions = tempActions;
        } else if (indexOfNull > action.payload.index) {
          tempActions.splice(action.payload.index, 0, null);
          tempActions.splice(indexOfNull + 1, 1);
          state.actions = tempActions
        }
      } else {
        let tempActions = state.actions;
        tempActions.splice(action.payload.index, 0, null);
        state.actions = tempActions;
      }
    },
    openVersionNameModal: (state) => {
      state.isVersionNameModalOpen = true
    },
    closeVersionNameModal: (state) => {
      state.isVersionNameModalOpen = false;
      state.editingVersion = null
    },
    setEditingVersion: (state, action) => {
      state.editingVersion = action.payload.version
    },
    getAllEvents: (state, action) => {
      state.events = action.payload.events
    },
    changePublishState: (state, action) => {
      state.publishState = action.payload.state
    },
    setConnectionId: (state, action) => {
      if (state.selectedTrigger.type === "trigger") {
        const triggers = state.triggers.map((i: any) => {
          if (i.id === state.selectedTrigger.id) {
            return {
              ...state.selectedTrigger,
              connectionId: action.payload.id,
            };
          } else {
            return { ...i };
          }
        });

        state.triggers = triggers;
      }
      if (state.selectedTrigger.type === "action") {
        const actions = state.actions.map((i: any) => {
          if (i.id === state.selectedTrigger.id) {
            return {
              ...state.selectedTrigger,
              connectionId: action.payload.id,
            };
          } else {
            return { ...i };
          }
        });

        state.actions = actions;
      }
    },
    // think about this later
    deleteTrigger: (state) => {
      // return (dispatch) => {
      //   dispatch({ type: DELETE_TRIGGER_SUCCESS });
      //   setTimeout(() => {
      //     dispatch({ type: HIDE_ALERT });
      //   }, 3000);
      // };
      // if (state.deletingTrigger.type === "action") {
      //   const deletedActions = state.actions.filter(
      //     (i) => i.id !== state.deletingTrigger.id
      //   );
      // if (state.deletingTrigger.id === state.selectedTrigger.id) {
      // return {
      //   ...state,
      //   actions: deletedActions,
      //   deletingTrigger: null,
      //   isDeletePopupOpen: false,
      //   selectedTrigger: null,
      //   isDetailModalOpen: false,
      //   alertText: `${state.deletingTrigger.value} deleted successfully`,
      //   isAlertOpen: true,
      //   activeDetailTab: "setup",
      // };
      // } else {
      //   return {
      //     ...state,
      //     actions: deletedActions,
      //     deletingTrigger: null,
      //     isDeletePopupOpen: false,
      //   };
      // }
      // } else {
      //   const deletedTriggers = state.triggers.filter(
      //     (i) => i.id !== state.deletingTrigger.id
      //   );

      //   const lastTrigger2 = deletedTriggers[deletedTriggers.length - 1];
      //   if (state.triggers.length === 1) {
      //     if (state.actions.length > 0) {
      //       return {
      //         ...state,
      //         isDetailModalOpen: false,
      //         triggers: [],
      //         lastTrigger: null,
      //         deletingTrigger: null,
      //         isDeletePopupOpen: false,
      //         alertText: `${state.deletingTrigger.value} deleted successfully`,
      //         isAlertOpen: true,
      //         activeDetailTab: "setup",
      //       };
      //     } else {
      //       return {
      //         ...state,
      //         triggers: [],
      //         isDetailModalOpen: false,
      //         lastTrigger: null,
      //         deletingTrigger: null,
      //         isDeletePopupOpen: false,
      //         alertText: `${state.deletingTrigger.value} deleted successfully`,
      //         isAlertOpen: true,
      //         activeDetailTab: "setup",
      //       };
      //     }
      //   } else {
      //     return {
      //       ...state,
      //       triggers: deletedTriggers,
      //       lastTrigger: lastTrigger2,
      //       deletingTrigger: null,
      //       isDetailModalOpen: false,
      //       isDeletePopupOpen: false,
      //       alertText: `${state.deletingTrigger.value} deleted successfully`,
      //       isAlertOpen: true,
      //       activeDetailTab: "setup",
      //     };
      //   }
      // }
    },
    closeDeleteTriggerModal: (state) => {
      state.isDeletePopupOpen = false;
      state.deletingTrigger = null
    },
    showAlert: (state, action) => {
      state.alertText = action.payload.alertText,
        state.isAlertOpen = true
    },
    openWorkflowDeleteConfirmation: (state) => {
      state.isWorkflowDeleteConfirmationOpen = true
    },
    closeWorkflowDeleteConfirmation: (state) => {
      state.isWorkflowDeleteConfirmationOpen = false
    },
    deleteWorkflow: (state) => {
      state.triggers = [];
      state.actions = []
    },
    renameWorkflow: (state, action) => {
      state.workflow = {
        ...state.workflow, name: action.payload.name
      }
    },
    setEvent: (state, action) => {
      if (state.selectedTrigger.type === "trigger") {
        const triggers = state.triggers.map((i: any) => {
          if (i.id === state.selectedTrigger.id) {
            return { ...state.selectedTrigger, eventId: action.payload.id };
          } else {
            return { ...i };
          }
        });
        state.triggers = triggers;
      }
      if (state.selectedTrigger.type === "action") {
        const actions = state.actions.map((i: any) => {
          if (i.id === state.selectedTrigger.id) {
            return { ...state.selectedTrigger, eventId: action.payload.id };
          } else {
            return { ...i };
          }
        });
        state.actions = actions;
      }
    },
    saveTriggerData: (state, action) => {
      const triggers = state.triggers.map((i: any) => {
        if (i.id === action.payload.triggerId) {
          let obj;
          if (i.configurations) {
            obj = {
              ...i,
              configurations: {
                eventId: action.payload.eventId,
                inputs: {
                  ...i.configurations.inputs,
                  [action.payload.label]: action.payload.value,
                },
              },
            };
          } else {
            obj = {
              ...i,
              configurations: {
                eventId: action.payload.eventId,
                inputs: {
                  [action.payload.label]: action.payload.value,
                },
              },
            };
          }

          return obj;
        } else {
          return i;
        }
      });
      state.triggers = triggers;
    },
    addNullToTrigger: (state) => {
      state.triggers = [null]
    }
  },
})


export const { openTriggerSidebar, closeTriggerSidebar, openActionSidebar, closeActionSidebar, openTestModal, closeTestModal, canvasClicked, selectTrigger, disselectTrigger, setTriggersData, setActionsData, openVersionHistory, closeVarsionHistory, openLogicTest, closeLogicTest, openSearchSidebar, closeSearchSidebar, removeNullFromAction, removeNullFromTrigger, setTriggerDropActiveFalse, setTriggerDropActiveTrue, addTriggerBetween, moveTrigger,
  addNullToAction,
  appendNullToAction
  , addActionInBetween,
  getTriggerBack,
  getActionBack, setItemDragOnCanvas,
  addFirstTrigger, appendNullToTrigger,
  addTrigger, openActionModal, closeActionModal, setDraggingAction, duplicateTrigger, setDraggingTrigger,
  runSingleTriggerTest,
  openDeleteTriggerModal, addAction, addActionTop, searchTriggers, searchActions, addLastTrigger,
  lastTriggerActiveTrue,
  lastTriggerActiveFalse,
  moveActions,
  setActionsDropActiveTrue,
  setActionsDropActiveFalse,
  setActiveActionDrop,
  setFocusElement,
  restoreVersion,
  selectTab,
  addNullBetweenAction,
  closeVersionNameModal,
  openVersionNameModal,
  setEditingVersion,
  getAllEvents,
  changePublishState,
  setConnectionId,
  deleteTrigger,
  closeDeleteTriggerModal,
  showAlert,
  openWorkflowDeleteConfirmation,
  closeWorkflowDeleteConfirmation,
  deleteWorkflow,
  renameWorkflow,
  setEvent,
  addNullToTrigger
} = counterSlice.actions

export default counterSlice.reducer 