import { ObjectSchema } from 'joi';
import { HTTP_CODES } from '../constants/http.codes';
import { get, head } from 'lodash';

export const joiValidator = <T>(schema: ObjectSchema<any>, data: T): T => {
  const { error, value } = schema.validate(data, { convert: true });

  if (error) {
    throw { msg: get(head(get(error, 'details')), 'message'), statusCode: HTTP_CODES.BAD_REQUEST };
  }

  return value as T
};
