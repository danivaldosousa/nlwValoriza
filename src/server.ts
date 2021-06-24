import "reflect-metadata";
import express, { response, request } from "express";
import "./database";
const app = express();
// Tipos dee paramentros
// Routes params => é um paramentro dentro da rota http://localhost:3000/priduto/17262
// Query params => Não são obrigatorios  http://localhost:3000/produto?name=acucar?preco=17262
// Body params => são usados com paramentros no corpo da requisição.
app.get("/test", (request, response) => {
  return response.status(200).json({ "message": "Hello Word" });
});
app.post("/test-post", (request, response) => {
  return response.status(201).json({ "message": "Metodo Post" });
})

app.listen(3000, () => console.log("Server is running"));