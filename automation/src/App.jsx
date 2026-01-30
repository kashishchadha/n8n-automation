import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TaskForm from './components/TaskForm';
import SuccessModal from './components/SuccessModal';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'form'
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastCreatedTask, setLastCreatedTask] = useState('');

  // Handle navigation to task form
  const handleCreateTaskClick = () => {
    setCurrentView('form');
  };

  // Handle navigation back to home
  const handleBackToHome = () => {
    setCurrentView('home');
  };

  // Handle successful task creation
  const handleTaskSuccess = (result) => {
    setLastCreatedTask(result.data?.title || 'Your task');
    setShowSuccessModal(true);
  };

  // Handle closing success modal
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    // Reset form view - user can create another task
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <Navbar onGetStartedClick={handleCreateTaskClick} />

      {/* Main Content with Page Transitions */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
            >
              <Home onCreateTaskClick={handleCreateTaskClick} />
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.4 }}
              className="min-h-screen pt-24 pb-12 px-4"
            >
              {/* Back Button */}
              <div className="max-w-2xl mx-auto mb-6">
                <motion.button
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBackToHome}
                  className="flex items-center text-gray-400 hover:text-white transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Home
                </motion.button>
              </div>

              {/* Task Form */}
              <TaskForm onSuccess={handleTaskSuccess} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseSuccessModal}
        taskTitle={lastCreatedTask}
      />

      {/* Subtle Background Accent */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-125 h-125 bg-white/2 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-white/2 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default App;
