import express from "express";
import React from "react";
import ReactDom from "react-dom";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../shared/App";

const app = express();

app.get("*", (req, res) => {
  const components = renderToString(
    <StaticRouter context={{}} location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <div id="root">${components}</div>
      <script src="client.js"></script>
  </body>
  </html>`);
});

app.listen(3000, () => {
  console.log("Server started listening @ http://localhost:3000");
});
