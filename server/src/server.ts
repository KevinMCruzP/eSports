import express, { Request, Response } from "express";

const app = express();
app.get("/asd", (req: Request, res: Response) => res.send("Hello World!!!"));

app.listen(3333, () => console.log("Example app listening on port 3333!"));
