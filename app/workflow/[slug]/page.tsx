"use client"
import React, { useState, useEffect, useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DeleteConfirmation from "../../../components/workflow/DeleteConfirmation";
import DeleteWorkflowConfirmation from "../../../components/workflow/DeleteWorkflowConfirmation";
import Canvas from "@/components/workflow/canvas";
import VersionName from "../../../components/workflow/VersionNamePopup";
import { useRouter } from "next/router";
import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import {
  setActionsData,
  setTriggersData,
  openSearchSidebar,
  restoreVersion,
} from "@/redux/workflow/workflowSlice";
import WorkflowTest from "../../../components/workflow/WorkflowTest";
import Navbar from "../../../components/workflow/Navbar";
import "../../../app/globals.css";
import NoSSRWrapper from "../../../components/workflow/NoSSRWrapper";
import axios from "axios";

const AboutPage = ({ params }: { params: { slug: string } }) => {
 
  
  const {
    isDeletePopupOpen,
    isVersionNameModalOpen,
    isWorkflowDeleteConfirmationOpen,
  } = useAppSelector((state) => state.workflow);
  const dispatch = useAppDispatch();
//   const router = useRouter();
//   const { slug } = router.query;

  useEffect(() => {
    getAllTriggers();
    getAllActions();
  }, []);

  const getAllTriggers = async () => {
    const response = await axios.get(
      "https://839td7scc3.execute-api.us-east-1.amazonaws.com/triggers/"
    );

    dispatch(setTriggersData(response.data.result.Items));
  };
  const getAllActions = async () => {
    const response = await axios.get(
      " https://g1um95w0lb.execute-api.us-east-1.amazonaws.com/action/"
    );

    dispatch(setActionsData(response.data.result.Items));
  };

//   const getLatestWorkflow = async () => {
//     if (slug !== undefined) {
//       const response = await axios.get(
//         `http://localhost:8000/api/v1/workflow/singleWorkflow/${slug}`
//       );

//       if (response.data.integration) {
//         if (latestObject) {
//         dispatch(restoreVersion(response.data.integration));
//         }
//       }
//     }

//     const latestObject = getObjectWithLatestDate(response.data.result.Items);
//   };

//   function getObjectWithLatestDate(array) {
//     if (!Array.isArray(array) || array.length === 0) {
//       return null; // Return null for empty arrays or non-array inputs
//     }

//     return array.reduce((latest, current) => {
//       const currentDate = new Date(current.createdAt);
//       const latestDate = new Date(latest.createdAt);

//       return currentDate > latestDate ? current : latest;
//     });
//   }
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "f") {
        event.preventDefault();
        dispatch(openSearchSidebar());
        console.log("Opening search modal...");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
//   useEffect(() => {
//     getLatestWorkflow();
//   }, [router.query]);
  return (
    <div className="h-[100vh] overflow-hidden">
      <div>
        <Navbar params={params.slug}/>
      </div>

      <div className="">
         <DndProvider backend={HTML5Backend}>

        <Canvas />
         </DndProvider>
      </div>

      {/* <WorkflowTest /> */}
      {/* {isDeletePopupOpen && <DeleteConfirmation />}
      {isWorkflowDeleteConfirmationOpen && <DeleteWorkflowConfirmation />}
      {isVersionNameModalOpen && <VersionName />} */}
    </div>
  );
};

export default AboutPage;
