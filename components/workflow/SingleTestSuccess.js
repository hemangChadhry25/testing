import React, { useState } from "react"
import {
  CloseButton,
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  CheckCircle,
} from "../ui"
import { AlertTriangle, ChevronDown, AlertCircle } from "../icons"
const SingleTestSuccess = ({
  setShowError,
  setShowSuccess,
  setTestTrigger,
}) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div
      className="flex flex-col items-end"
      onClick={(e) => e.stopPropagation()}
    >
      <Alert variant="success" className=" p-[16px]">
        {/* <CloseButton /> */}
        <AlertCircle className="h-5 w-5" />
        <AlertTitle>Test Failed</AlertTitle>
        <AlertDescription className="text-[14px] text-gray-500">
          These failed connections need to be fixed to have a successful
          workflow.
        </AlertDescription>
        <div className="gap-4">
          <div
            className="mt-3 flex cursor-pointer items-center gap-x-3 text-[14px] text-sm font-semibold text-gray-500"
            onClick={(e) => {
              e.stopPropagation()
              setShowDetails(!showDetails)
            }}
          >
            View Details
            <ChevronDown />
          </div>
          {showDetails && (
            <div className="mt-[16px] transition-all duration-500 ease-in-out">
              <p className="text-[12px] font-bold text-gray-700">INPUT DATA</p>

              <ul className="list-disc">
                <li className="text-gray-500">Limit</li>
                <li className="text-gray-500">10</li>
                <li className="text-gray-500">Calendar ID</li>
                <li className="text-gray-500">brain@gmail.com</li>
                <li className="text-gray-500">Single Events</li>
                <li className="text-gray-500">false</li>
              </ul>
              <p className="mt-3 text-[12px] font-bold text-gray-700">
                OUTPUT DATA
              </p>
              <ul className="list-disc">
                <li className="text-gray-500">Kind</li>
                <li className="text-gray-500">calendar#event</li>
                <li className="text-gray-500">Event ID</li>
                <li className="text-gray-500">brain@gmail.com</li>
                <li className="text-gray-500">Status</li>
                <li className="text-gray-500">Confirmed</li>
                <li className="text-gray-500">Summary</li>
                <li className="text-gray-500">test</li>
              </ul>
            </div>
          )}
        </div>
      </Alert>
      <Button
        className="mt-4"
        variant="outlined"
        visual="gray"
        onClick={(e) => {
          e.stopPropagation()
          setShowSuccess(false)
          setTestTrigger(true)
        }}
      >
        Test Again
      </Button>
    </div>
  )
}

export default SingleTestSuccess
