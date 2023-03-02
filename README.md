# Frontend test
As part of the interview process, we would like you to build a small Angular application that makes a REST API call to a provided endpoint. This will allow us to evaluate your understanding of Angular, HTTP requests, and working with external APIs.

## Dependencies
|  Package   |  Version  |
| :--------: | :-------: |
|   Node.js   |  >= 16.19.0 |
|    npm | >= 9.5.1
|   Angular   | >= 15.1.2 |

## The test

1. Clone this repo and create a new Angular project.

2. Create a new component that will display all the complaints received from the complaints server located at: ``complaints-server`` following REST API endpoint: https://www.google.com


```typescript
// In order to make the request you got to run the complaints-server app at


// Complaint Object description

{
  _id: string;
  place: string;
  at_moment: boolean;
  datetime: Date;
  modified_at: Date;
  created_at: Date;
  description: string;
  situation: string[];
  type: string[];
}
```


3. Display the complaints data in your component in a visually appealing and user-friendly manner, making sure your application is responsive and can handle different screen sizes.

4. Handle any errors that may occur during the HTTP request and display a meaningful error message to the user.

5. Implement a filtering feature that allows the user to filter the complaints by different attributes (e.g. complaint type, datetime, etc.). The filtering feature should update the list of complaints in real-time as the user interacts with the filters.

6. Implement a WebSocket that receives real-time notifications and displays them to the user in a visually appealing and user-friendly manner. The WebSocket to test is located in dir ``websocket-to-test``.

When you have completed the test, please provide us with the following:

1. A link to the code repository (e.g. GitHub, GitLab, etc.) where we can view your code.

2. A brief write-up (no more than one page) explaining your design decisions, any challenges you encountered, and how you overcame them.

We look forward to seeing your work!
