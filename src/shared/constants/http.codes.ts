import { IHttpStatusCodes } from "../interfaces/http.codes.interfaces";

export const HTTP_CODES: IHttpStatusCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
  NOT_FOUND: 404,
  NO_CONTENT: 204,
  UNAUTHORIZED: 401,
};
