import React from 'react';
import TaskForm from './TaskForm';
import TaskLists from './TaskLists';

const NewTask = () => {
    return (
        <div>
              <TaskForm></TaskForm>
      <TaskLists></TaskLists>
        </div>
    );
};

export default NewTask;