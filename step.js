const AWS = require("aws-sdk");

const stepfunctions = new AWS.StepFunctions();

exports.handler = async (event) => {
  const jsonInput = JSON.parse(event.body);

  const stateMachineDefinition = {
    StartAt: "FirstStep",
    States: {
      FirstStep: {
        Type: "Task",
        Resource:
          "arn:aws:lambda:REGION:ACCOUNT_ID:function:YOUR_FIRST_LAMBDA_FUNCTION",
        Next: "SecondStep",
      },
      SecondStep: {
        Type: "Task",
        Resource:
          "arn:aws:lambda:REGION:ACCOUNT_ID:function:YOUR_SECOND_LAMBDA_FUNCTION",
        End: true,
      },
    },
  };

  // Create the state machine
  const createStateMachineParams = {
    name: "DynamicallyCreatedStateMachine",
    definition: JSON.stringify(stateMachineDefinition),
    roleArn: "arn:aws:iam::ACCOUNT_ID:role/service-role/YourStepFunctionsRole",
  };

  try {
    const createStateMachineResponse = await stepfunctions
      .createStateMachine(createStateMachineParams)
      .promise();

    // Start the state machine execution
    const startExecutionParams = {
      stateMachineArn: createStateMachineResponse.stateMachineArn,
      input: JSON.stringify(jsonInput),
    };

    await stepfunctions.startExecution(startExecutionParams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "State Machine Created and Execution Started",
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

import AWS from "aws-sdk";
const stepfunctions = new AWS.StepFunctions();

function convertToISO8601(timeString) {
  const now = new Date();
  const [hours, minutes] = timeString.split(":");
  const targetTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes
  );
  const isoString = targetTime.toISOString();
  return isoString;
}

export const handler = async (event) => {
  // TODO implement
  const snsEvent = JSON.parse(event.Records[0].Sns.Message);
  console.log(typeof snsEvent);

  const time = snsEvent.triggers[0].config.time;
  const iso8601Time = convertToISO8601(time);

  const stateMachineDefinition = {
    StartAt: "FirstStep",
    States: {
      FirstStep: {
        Type: "Wait",
        Next: "SecondStep",
        Timestamp: iso8601Time,
      },
      SecondStep: {
        Type: "Task",
        Resource: "arn:aws:lambda:us-east-1:400414744874:function:sendEmails",
        End: true,
      },
    },
  };

  // Create the state machine
  const createStateMachineParams = {
    name: "DynamicallyCreatedStateMachine",
    definition: JSON.stringify(stateMachineDefinition),
    roleArn: "arn:aws:iam::400414744874:role/service-role/create-role-nju4extx",
  };

  try {
    const createStateMachineResponse = await stepfunctions
      .createStateMachine(createStateMachineParams)
      .promise();

    // Start the state machine execution
    const startExecutionParams = {
      stateMachineArn: createStateMachineResponse.stateMachineArn,
      input: JSON.stringify("someString"),
    };

    await stepfunctions.startExecution(startExecutionParams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "State Machine Created and Execution Started",
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
