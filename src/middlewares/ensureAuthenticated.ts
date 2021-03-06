import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}
export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  //Receber Token
  const authToken = request.headers.authorization;

  //Validar se o authToken está preenchido
  if (!authToken) {
    return response.status(401).end();
  }
  const [, token] = authToken.split(" ");
  try {
    // validar se o tokem é valido
    const { sub } = verify(token, "c9a2282013d450d71e5eb9e4003515a5") as IPayload;
    request.user_id = sub;
    return next();
  } catch (error) {
    return response.status(401).end();
  }


}