import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const filePath = "../data/formdata.json";

app.use(cors());
app.use(express.json());

app.get("/forms", (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send({ message: "Issue in the server" });
    }
    const formdata = JSON.parse(data);
    res.send(formdata);
  });
});

app.post("/forms", (req, res) => {
  const submittedData = req.body;
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send({ message: "Issue in the server" });
    }
    const formdata = JSON.parse(data);
    submittedData.id = crypto.randomUUID();
    formdata.push(submittedData);
    fs.writeFile(filePath, JSON.stringify(formdata), "utf-8", (err) => {
      if (err) {
        return res.status(500).send({ message: "Issue in the server" });
      }
      res.status(201).send({ message: "data recieved" });
    });
  });
});

app.delete("/forms/:id", (req, res) => {
  const deletedDataID = req.params.id;
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send({ message: "Issue in the server" });
    }
    const formData = JSON.parse(data);
    const newFormData = formData.filter((form) => form.id !== deletedDataID);
    fs.writeFile(filePath, JSON.stringify(newFormData), "utf-8", (err) => {
      if (err) {
        return res.status(500).send({ message: "Issue in the server" });
      }
      res.status(200).send({ message: "data deleted" });
    });
  });
});

app.listen(5000, () => {
  console.log("server is running");
});
