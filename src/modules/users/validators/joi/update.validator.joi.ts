import joi from 'joi';
import { IUser } from '../../interfaces/users.interfaces';
export const updateAddJoiSchema = joi.object<IUser>({
  name: joi.string().optional(),
});
