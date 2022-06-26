import { FormEvent, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Input } from './components/Input';
import { Task } from './components/Task';

type Task = {
  id: string;
  name: string;
  status: boolean;
};

export function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [tasks, setTasks] = useState<Task[]>([]);

  const concludedTasksMessage =
    tasks.length > 0
      ? `${tasks.filter((item) => item.status).length} de ${tasks.length}`
      : 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const task: Task = {
      id: uuidv4(),
      name: inputRef.current!.value,
      status: false,
    };

    setTasks((prev) => [task, ...prev]);

    inputRef.current!.value = '';
  }

  function onChangeStatus(arg: Task) {
    const differentTasks = tasks.filter((task) => task.id !== arg.id);

    const updattedTask: Task = {
      ...arg,
      status: !arg.status,
    };

    setTasks(
      updattedTask.status
        ? [...differentTasks, updattedTask]
        : [updattedTask, ...differentTasks]
    );
  }

  function handleRemove(taskId: string) {
    setTasks((prev) => prev.filter((item) => item.id !== taskId));
  }

  return (
    <div className="h-screen bg-gray-600">
      <header className="flex items-center justify-center bg-gray-700 h-[12.5rem] w-full">
        <img src="/assets/logo.svg" alt="Todo logo" />
      </header>

      <main className="flex flex-col h-[calc(100%_-_12.5rem)] w-[46rem] mx-auto relative">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center w-full h-[3.375rem] absolute -top-[1.6875rem] space-x-2"
        >
          <Input ref={inputRef} />

          <button
            type="submit"
            className="flex items-center gap-x-2 p-4 bg-blue-700 rounded-lg transition duration-200 hover:bg-blue-400"
          >
            <span className="font-bold text-sm text-white-100">Criar</span>
            <img src="/assets/plus.svg" alt="Ícone de mais" />
          </button>
        </form>

        <section className="mt-[5.6875rem] w-full">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <strong className="text-sm text-blue-400">Tarefas criadas</strong>
              <div className="flex items-center justify-center bg-gray-400 px-2 py-[2px] rounded-full">
                <strong className="text-xs text-white-100">
                  {tasks.length}
                </strong>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <strong className="text-sm text-purple-500">Concluídas</strong>
              <div className="flex items-center justify-center bg-gray-400 px-2 py-[2px] rounded-full">
                <strong className="text-xs text-white-100">
                  {concludedTasksMessage}
                </strong>
              </div>
            </div>
          </header>

          <main className="flex flex-col items-center justify-center border-t-[0.25px] border-t-gray-300">
            {tasks.length > 0 ? (
              <div className="flex flex-col items-center mt-6 space-y-3 w-full">
                {tasks.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    onChangeStatus={onChangeStatus}
                    onRemove={handleRemove}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center my-16 space-y-4">
                <img
                  src="/assets/clipboard.svg"
                  alt="Imagem de uma prancheta"
                />

                <div className="flex flex-col items-center">
                  <strong className="text-gray-300">
                    Você ainda não tem tarefas cadastradas
                  </strong>
                  <span className="text-gray-300">
                    Crie tarefas e organize seus itens a fazer
                  </span>
                </div>
              </div>
            )}
          </main>
        </section>
      </main>
    </div>
  );
}
