import * as Yup from 'yup';
import {errors} from '../../config/contants';

let loginSchema = Yup.object({
  email: Yup.string().email('Endereço de email inválido'),
  password: Yup.string()
    .min(8, errors.minLength)
    .matches(/[a-z]+/g, errors.nonCapitalLength)
    .matches(/[A-Z]+/g, errors.capitalLength)
    .matches(/[0-9]+/g, errors.numbers)
    .matches(/[!@#$%^&*(),.?":{}|<>]+/g, errors.specialCharacters),
});
const validationService = {loginSchema};

export default validationService;
