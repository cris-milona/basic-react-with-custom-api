//server side routes - Handles backend functionalities such as API endpoints,
//serving static files, and other server-side operations.

import { Router, Response } from "express";

const router = Router();

interface Message {
  message: string;
}

interface User {
  id: number;
  name: string;
}

router.get("/message", (req, res: Response<Message>) => {
  console.log("Message endpoint hit");
  const message: Message = { message: "Hello from API" };
  res.json(message);
});

router.get("/users", (req, res: Response<User[]>) => {
  console.log("Users endpoint hit");
  const users: User[] = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  res.json(users);
});

export default router;

// app.get("/path", handler)
// app.post("/path", handler);
// app.put("/path", handler);
// app.delete("/path", handler);
// app.patch("/path", handler);
