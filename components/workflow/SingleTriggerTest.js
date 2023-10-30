import React, { useState } from "react"
import { CloseButton, Alert, AlertDescription, AlertTitle, Button } from "../ui"
import { AlertTriangle, ChevronDown } from "../icons"

const SingleTriggerTest = ({
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
      <Alert variant="error" className=" p-[16px]">
        {/* <CloseButton /> */}
        <AlertTriangle className="h-5 w-5" />
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
              <p className="text-[12px] font-bold text-gray-700">
                Gmail: Create a new email
              </p>
              <p className="text-[12px] font-normal text-gray-500">
                We could not find an email. Create a new email in your gmail
                account and test your trigger again
              </p>
              <div className="mt-3 flex cursor-pointer items-center gap-x-3 text-sm font-semibold">
                Fix Issues
              </div>
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
          setShowError(false)
          setShowSuccess(true)
        }}
      >
        Test Again
      </Button>
    </div>
  )
}

export default SingleTriggerTest
