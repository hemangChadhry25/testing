import AWS from "aws-sdk";
const dynamoDB = new AWS.DynamoDB.DocumentClient();
import { v4 as uuidv4 } from "uuid";

export const handler = async (event) => {
  console.log(event);
  try {
    const {
      triggerId,
      actionId,
      name,
      shortDescription,
      eventCategory,
      eventSource,
      specificEvent,
      configurations,
    } = JSON.parse(event.body);

    const createdAt = new Date().toISOString();

    const params = {
      TableName: "Events",
      Item: {
        id: uuidv4(),
        createdAt,
        triggerId,
        actionId,
        name,
        shortDescription,
        eventCategory,
        eventSource,
        specificEvent,
        configurations,
      },
    };
    await dynamoDB.put(params).promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ message: event }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
