import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obigatório!');
  }

  return (
    <input
      {...props}
      ref={ref}
      type="text"
      className="bg-gray-500 flex-1 rounded-lg p-4 text-sm text-white-100 outline-none border border-gray-500 focus:border-purple-700 placeholder:text-gray-300"
      placeholder="Adicione uma nova tarefa"
      required
      onInvalid={handleNewTaskInvalid}
    />
  );
});
