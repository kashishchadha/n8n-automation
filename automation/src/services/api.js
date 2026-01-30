import axios from 'axios';

// API Configuration
const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || 'http://localhost:5678';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: N8N_WEBHOOK_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

/**
 * Submit a new task to the n8n webhook
 * @param {Object} taskData - Task information
 * @param {string} taskData.title - Task title
 * @param {string} taskData.deadline - ISO datetime string
 * @param {string} taskData.user_email - User email
 * @param {string} taskData.priority - Priority level (LOW, MEDIUM, HIGH)
 * @param {string} taskData.notes - Additional notes (optional)
 * @returns {Promise} API response
 */
export const createTask = async (taskData) => {
  try {
    console.log('🚀 Sending request to:', N8N_WEBHOOK_URL + '/webhook/task/create');
    console.log('📦 Payload:', taskData);
    
    const response = await apiClient.post('/webhook/task/create', taskData);
    
    console.log('✅ Response received:', response.data);
    
    return {
      success: true,
      data: response.data,
      message: 'Task created successfully!'
    };
  } catch (error) {
    console.error('❌ Error occurred:', error);
    
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      console.error('Server error response:', error.response.data);
      console.error('Status code:', error.response.status);
      
      return {
        success: false,
        error: error.response.data?.message || `Server error (${error.response.status})`,
        status: error.response.status
      };
    } else if (error.request) {
      // Request made but no response received
      console.error('No response from server. Is n8n running?');
      console.error('Request details:', error.request);
      
      return {
        success: false,
        error: 'Cannot connect to server. Please ensure n8n webhook is running at http://localhost:5678',
      };
    } else {
      // Something else happened
      console.error('Unexpected error:', error.message);
      
      return {
        success: false,
        error: error.message || 'An unexpected error occurred',
      };
    }
  }
};

/**
 * Validate task data before submission
 * @param {Object} taskData - Task data to validate
 * @returns {Object} Validation result
 */
export const validateTaskData = (taskData) => {
  const errors = {};

  // Title validation
  if (!taskData.title || taskData.title.trim().length === 0) {
    errors.title = 'Task title is required';
  } else if (taskData.title.length < 3) {
    errors.title = 'Title must be at least 3 characters';
  } else if (taskData.title.length > 100) {
    errors.title = 'Title must not exceed 100 characters';
  }

  // Deadline validation
  if (!taskData.deadline) {
    errors.deadline = 'Deadline is required';
  } else {
    const deadlineDate = new Date(taskData.deadline);
    const now = new Date();
    
    if (isNaN(deadlineDate.getTime())) {
      errors.deadline = 'Invalid date format';
    } else if (deadlineDate < now) {
      errors.deadline = 'Deadline cannot be in the past';
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!taskData.user_email || taskData.user_email.trim().length === 0) {
    errors.user_email = 'Email is required';
  } else if (!emailRegex.test(taskData.user_email)) {
    errors.user_email = 'Please enter a valid email address';
  }

  // Priority validation
  const validPriorities = ['LOW', 'MEDIUM', 'HIGH'];
  if (!taskData.priority) {
    errors.priority = 'Priority is required';
  } else if (!validPriorities.includes(taskData.priority.toUpperCase())) {
    errors.priority = 'Invalid priority level';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export default apiClient;
