import React, { useState, useEffect } from 'react';
import API from '../utils/api';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await API.get('/tasks');
      setTasks(res.data.tasks);
      setError('');
    } catch (err) {
      setError('Failed to fetch tasks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await API.delete(`/tasks/${id}`);
        setTasks(tasks.filter(task => task._id !== id));
      } catch (err) {
        setError('Failed to delete task');
      }
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      const res = await API.put(`/tasks/${task._id}`, {
        ...task,
        completed: !task.completed
      });
      setTasks(tasks.map(t => 
        t._id === task._id ? res.data.task : t
      ));
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingTask(null);
    fetchTasks();
  };

  if (loading) {
    return <div style={styles.loading}>Loading tasks...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>My Tasks</h2>
        <button 
          onClick={() => {
            setEditingTask(null);
            setShowForm(!showForm);
          }}
          style={styles.addButton}
        >
          {showForm ? 'Cancel' : '+ Add Task'}
        </button>
      </div>

      {error && <div style={styles.error}>{error}</div>}

      {showForm && (
        <TaskForm 
          task={editingTask}
          onSuccess={handleFormSuccess}
          onCancel={() => {
            setShowForm(false);
            setEditingTask(null);
          }}
        />
      )}

      {tasks.length === 0 ? (
        <div style={styles.emptyState}>
          <p>No tasks yet. Create your first task!</p>
        </div>
      ) : (
        <div style={styles.taskGrid}>
          {tasks.map(task => (
            <div key={task._id} style={styles.taskCard}>
              <div style={styles.taskHeader}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task)}
                  style={styles.checkbox}
                />
                <h3 style={{
                  ...styles.taskTitle,
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#7f8c8d' : '#2c3e50'
                }}>
                  {task.title}
                </h3>
              </div>
              
              {task.description && (
                <p style={{
                  ...styles.taskDescription,
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#95a5a6' : '#34495e'
                }}>
                  {task.description}
                </p>
              )}

              <div style={styles.taskFooter}>
                <span style={styles.taskDate}>
                  Created: {new Date(task.createdAt).toLocaleDateString()}
                </span>
                <div>
                  <button 
                    onClick={() => handleEdit(task)}
                    style={styles.editButton}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(task._id)}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem'
  },
  addButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  taskGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '1.5rem'
  },
  taskCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    border: '1px solid #eee'
  },
  taskHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  checkbox: {
    marginRight: '0.75rem',
    width: '18px',
    height: '18px',
    cursor: 'pointer'
  },
  taskTitle: {
    margin: 0,
    fontSize: '1.1rem'
  },
  taskDescription: {
    margin: '0 0 1rem 0',
    color: '#7f8c8d',
    lineHeight: '1.5'
  },
  taskFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: '1px solid #eee'
  },
  taskDate: {
    color: '#95a5a6',
    fontSize: '0.875rem'
  },
  editButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#f39c12',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '0.5rem'
  },
  deleteButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  error: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '1rem',
    borderRadius: '4px',
    marginBottom: '1rem'
  },
  emptyState: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    color: '#7f8c8d'
  },
  loading: {
    textAlign: 'center',
    padding: '2rem',
    color: '#3498db'
  }
};

export default TaskList;