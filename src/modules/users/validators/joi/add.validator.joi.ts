import joi from 'joi';
import { IUser } from '../../interfaces/users.interfaces';
export const userAddJoiSchema = joi.object<IUser>({
  name: joi.string().required(),
  email: joi.string().email().required(),
});
