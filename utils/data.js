import { AlertBlue } from "@/components/workflow/icons";
import {
  AppEvent,
  // Webhook,
  Clock,
  Forms,
  WorkFlow,
  Message,
  AlertTriangle,
  Database,
  Gmail,
  Condition,
  TimeDelay,
  SplitPath,
  NewProject,
  VideoRecording,
} from "../components/icons";
import { AppEvents } from "@/components/workflow/icons/appevent";
import { Webhook } from "@/components/workflow/icons/webhook";

export const triggersData = [
  {
    id: "10",
    name: "App Event",
    type: "trigger",
    logo: <AppEvents />,
  },
  {
    id: "4",
    name: "Webhook",
    type: "trigger",
    logo: <Webhook />,
  },
  {
    id: "5",
    name: "Schedule",
    type: "trigger",
    logo: <Clock />,
  },
  {
    id: "6",
    name: "Forms",
    type: "trigger",
    logo: <Forms />,
  },
  {
    id: "7",
    name: "Workflow",
    type: "trigger",
    logo: <WorkFlow />,
  },
  {
    id: "8",
    name: "Message",
    type: "trigger",
    logo: <Message />,
  },
  {
    id: "9",
    name: "Alert",
    type: "trigger",
    logo: <AlertBlue />,
  },
];
export const actionsData = [
  {
    id: "11",
    name: "Save Data",
    type: "action",
    logo: <Database className="text-primary-500" />,
  },
  {
    id: "12",
    name: "Send Message",
    type: "action",
    logo: <Gmail />,
  },
  {
    id: "13",
    name: "Time Delay",
    type: "action",
    logo: <TimeDelay />,
  },
  {
    id: "14",
    name: "Condition",
    type: "action",
    logo: <Condition />,
  },
  {
    id: "15",
    name: "Video Recording",
    type: "action",
    logo: <VideoRecording />,
  },
  {
    id: "16",
    name: "Split Path",
    type: "action",
    logo: <SplitPath />,
  },
  {
    id: "17",
    name: "New Project",
    type: "action",
    logo: <NewProject />,
  },
];
