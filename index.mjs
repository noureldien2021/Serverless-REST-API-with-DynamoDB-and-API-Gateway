import { DynamoDBClient, PutItemCommand, ScanCommand, UpdateItemCommand, DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";

const client = new DynamoDBClient({ region: "us-east-1" });

export const handler = async (event) => {
  try {
    const { httpMethod, body, pathParameters } = event;

    // Create Task
    if (httpMethod === "POST") {
      const { title } = JSON.parse(body);
      const id = uuidv4();

      const command = new PutItemCommand({
        TableName: "to-do-list",
        Item: { id: { S: id }, title: { S: title }, completed: { BOOL: false } }
      });

      await client.send(command);

      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({ message: "Task created!", id, title })
      };
    }

    // Read all tasks
    if (httpMethod === "GET") {
      const command = new ScanCommand({ TableName: "to-do-list" });
      const result = await client.send(command);

      const tasks = result.Items.map(item => ({
        id: item.id.S,
        title: item.title.S,
        completed: item.completed.BOOL
      }));

      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify(tasks)
      };
    }

    // Update Task
    if (httpMethod === "PATCH") {
      const taskId = pathParameters.id;
      const { title } = JSON.parse(body);

      const command = new UpdateItemCommand({
        TableName: "to-do-list",
        Key: { id: { S: taskId } },
        UpdateExpression: "SET title = :t",
        ExpressionAttributeValues: { ":t": { S: title } },
        ReturnValues: "ALL_NEW"
      });

      const result = await client.send(command);

      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({ message: "Task updated!", task: result.Attributes })
      };
    }

    // Delete Task
    if (httpMethod === "DELETE") {
      const taskId = pathParameters.id;

      const command = new DeleteItemCommand({
        TableName: "to-do-list",
        Key: { id: { S: taskId } }
      });

      await client.send(command);

      return {
        statusCode: 200,
        headers: corsHeaders(),
        body: JSON.stringify({ message: "Task deleted!" })
      };
    }

    return { statusCode: 400, headers: corsHeaders(), body: "Unsupported method" };

  } catch (err) {
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: err.message })
    };
  }
};

// Helper: CORS headers
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,DELETE"
  };
}
