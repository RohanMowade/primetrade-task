import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import TaskList from './TaskList';

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={styles.dashboard}>
      <TaskList />
    </div>
  );
};

const styles = {
  dashboard: {
    minHeight: 'calc(100vh - 80px)',
    backgroundColor: '#f5f5f5'
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 80px)',
    fontSize: '1.2rem',
    color: '#3498db'
  }
};

export default Dashboard;