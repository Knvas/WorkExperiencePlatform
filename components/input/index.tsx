import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { cn } from '@/utils';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  className: string;
  inputClassName: string;
  labelclass: string;
  error: boolean
}
const Input = (props: Partial<Props>) => {
  return (
    <div className={cn('w-full space-y-1', props.className)}>
      <label
        htmlFor={props.name}
        className={cn('text-bagMainGray font-medium text-gray-800', props.labelclass, props.error ? 'text-red-600' : '')}
      >
        {props.label}
      </label>
      <input
        id={props.name}
        {...props}
        className={cn(
          'w-full rounded-md border border-bagLightGray px-4 py-3 text-sm placeholder:text-bagMainGray focus:border-cart-pink focus:outline-none focus:ring-1 focus:ring-cart-pink ',
          props.inputClassName,
          props.error ? 'border-red-600' : ''
        )}
      ></input>
    </div>
  );
};

export default Input;
