type Task = {
  id: string;
  name: string;
  status: boolean;
};

type TaskProps = {
  task: Task;
  onChangeStatus(task: Task): void;
  onRemove(taskId: string): void;
};

export function Task({ task, onChangeStatus, onRemove }: TaskProps) {
  return (
    <div className="flex items-start justify-between w-full min-h-[4.5rem] h-auto rounded-lg p-4 bg-gray-500 border border-gray-400">
      <button
        type="button"
        className={`${
          task.status
            ? 'border-purple-700 bg-purple-700 hover:bg-purple-500 hover:border-purple-500'
            : 'border-blue-400 hover:border-blue-700'
        } flex items-center justify-center border-2 h-6 w-6 rounded-full`}
        onClick={() => onChangeStatus(task)}
      >
        {task.status && (
          <img src="/assets/check.svg" alt="Imagem de checkmark" />
        )}
      </button>

      <p className="text-white-100 text-sm w-[39.5rem] text-start truncate">
        {task.name}
      </p>

      <button
        type="button"
        className="before:content-trash hover:before:content-trashDanger"
        onClick={() => onRemove(task.id)}
      />
    </div>
  );
}
