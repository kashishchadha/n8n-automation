import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { createTask, validateTaskData } from '../services/api';

const TaskForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    deadline: '',
    user_email: '',
    priority: 'MEDIUM',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showDeadlineWarning, setShowDeadlineWarning] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Check deadline warning
    if (name === 'deadline' && value) {
      const deadlineDate = new Date(value);
      const today = new Date();
      const daysDiff = Math.floor((deadlineDate - today) / (1000 * 60 * 60 * 24));
      setShowDeadlineWarning(daysDiff < 3 && daysDiff >= 0);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for validation
    const dataToValidate = {
      ...formData,
      priority: formData.priority.toUpperCase()
    };

    // Validate form data
    const validation = validateTaskData(dataToValidate);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Convert deadline to ISO string
    const payload = {
      title: formData.title.trim(),
      deadline: new Date(formData.deadline).toISOString(),
      user_email: formData.user_email.trim(),
      priority: formData.priority.toUpperCase(),
      ...(formData.notes && { notes: formData.notes.trim() })
    };

    setIsLoading(true);

    try {
      const result = await createTask(payload);

      if (result.success) {
        // Reset form
        setFormData({
          title: '',
          deadline: '',
          user_email: '',
          priority: 'MEDIUM',
          notes: ''
        });
        setErrors({});
        setShowDeadlineWarning(false);

        // Call success callback
        if (onSuccess) {
          onSuccess(result);
        }
      } else {
        // Show error
        setErrors({
          submit: result.error || 'Failed to create task. Please try again.'
        });
      }
    } catch {
      setErrors({
        submit: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Check if form is valid for submission
  const isFormValid = () => {
    return (
      formData.title.trim().length >= 3 &&
      formData.deadline &&
      formData.user_email.trim().length > 0 &&
      formData.priority &&
      !isLoading
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="relative bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/10 overflow-hidden"
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-violet-500/20 via-transparent to-purple-500/20 pointer-events-none" />
        
        {/* Form Header */}
        <div className="relative text-center mb-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
            className="w-20 h-20 bg-linear-to-br from-violet-600 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-violet-500/50"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Create New Task</h2>
          <p className="text-gray-400 text-lg">Add your task and never miss a deadline</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Task Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-200 mb-2">
              Task Title <span className="text-red-400">*</span>
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Complete DBMS Assignment"
              className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 bg-white/5 text-white placeholder-gray-500 ${
                errors.title ? 'border-red-500 focus:ring-red-500/30' : 'border-white/10 focus:border-violet-500/50 focus:ring-violet-500/30'
              }`}
            />
            {errors.title && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.title}
              </motion.p>
            )}
          </div>

          {/* Deadline */}
          <div>
            <label htmlFor="deadline" className="block text-sm font-semibold text-gray-200 mb-2">
              Deadline <span className="text-red-400">*</span>
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="datetime-local"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 bg-white/5 text-white placeholder-gray-500 ${
                errors.deadline ? 'border-red-500 focus:ring-red-500/30' : 'border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/30'
              }`}
            />
            {errors.deadline && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.deadline}
              </motion.p>
            )}
            {showDeadlineWarning && !errors.deadline && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-orange-500 text-sm mt-1 flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Deadline is less than 3 days away!
              </motion.p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="user_email" className="block text-sm font-semibold text-gray-200 mb-2">
              Your Email <span className="text-red-400">*</span>
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 bg-white/5 text-white placeholder-gray-500 ${
                errors.user_email ? 'border-red-500 focus:ring-red-500/30' : 'border-white/10 focus:border-purple-500/50 focus:ring-purple-500/30'
              }`}
            />
            {errors.user_email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.user_email}
              </motion.p>
            )}
          </div>

          {/* Priority */}
          <div>
            <label htmlFor="priority" className="block text-sm font-semibold text-gray-200 mb-2">
              Priority <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['LOW', 'MEDIUM', 'HIGH'].map((level) => (
                <motion.button
                  key={level}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFormData(prev => ({ ...prev, priority: level }))}
                  className={`px-4 py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                    formData.priority === level
                      ? level === 'HIGH'
                        ? 'bg-linear-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/40 border-2 border-red-400/50'
                        : level === 'MEDIUM'
                        ? 'bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/40 border-2 border-orange-400/50'
                        : 'bg-linear-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/40 border-2 border-green-400/50'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border-2 border-white/10 hover:border-white/20'
                  }`}
                >
                  {level}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Notes (Optional) */}
          <div>
            <label htmlFor="notes" className="block text-sm font-semibold text-gray-200 mb-2">
              Additional Notes <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              placeholder="Any additional details about this task..."
              className="w-full px-4 py-3.5 rounded-xl border-2 border-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 resize-none bg-white/5 text-white placeholder-gray-500"
            />
          </div>

          {/* Error Message */}
          {errors.submit && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start"
            >
              <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-red-300 text-sm">{errors.submit}</p>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={!isFormValid()}
            whileHover={isFormValid() ? { scale: 1.02, boxShadow: '0 25px 50px rgba(139, 92, 246, 0.5)' } : {}}
            whileTap={isFormValid() ? { scale: 0.98 } : {}}
            className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 shadow-xl ${
              isFormValid()
                ? 'bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-violet-500/30'
                : 'bg-gray-800/50 cursor-not-allowed text-gray-500 border border-white/5'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Creating Task...
              </span>
            ) : (
              'Create Task'
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default TaskForm;
