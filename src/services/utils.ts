import {OptionalObjectSchema, AnyObject, TypeOfShape} from 'yup/lib/object';

export function wait(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export const getAllErrorsForSchema =
  (schema: OptionalObjectSchema<{}, AnyObject, TypeOfShape<{}>>) =>
  (values: any) =>
    schema
      .validate(values, {
        abortEarly: false,
        strict: false,
      })
      .then(() => ({}))
      .catch(({inner}) =>
        inner.reduce(
          (memo: {[x: string]: any}, {path, message}: any) => ({
            ...memo,
            [path]: (memo[path] || []).concat(message),
          }),
          {},
        ),
      );
