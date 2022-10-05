import { nopeResolver } from '@hookform/resolvers/nope';
import { NopeObject } from 'nope-validator/lib/cjs/NopeObject';
import {
  FieldValues,
  FormState,
  useForm as useFormBase,
  UseFormProps,
  UseFormRegister,
  UseFormReturn,
} from 'react-hook-form';

export type RegisterType<TFieldValues extends FieldValues = FieldValues> =
  UseFormRegister<TFieldValues>;
type UseFormHookArgumentType<T extends FieldValues> = UseFormProps<T> & {
  schema: NopeObject;
};
type ReturnType<T extends FieldValues> = UseFormReturn<T, object> & {
  errors: FormState<T>['errors'];
};

export function useForm<T extends FieldValues>({
  ...options
}: UseFormHookArgumentType<T>): ReturnType<T> {
  const formObject = useFormBase<T>({
    ...options,
    resolver: nopeResolver(options.schema),
  });
  return { ...formObject, errors: formObject.formState.errors };
}
