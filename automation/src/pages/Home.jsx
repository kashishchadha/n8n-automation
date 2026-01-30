// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useRef } from 'react';
import FallingText from '../components/FallingText';
import VariableProximity from '../components/VariableProximity';

const Home = ({ onCreateTaskClick }) => {
  const heroContainerRef = useRef(null);
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div id="home" className="pt-32 pb-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div ref={heroContainerRef} style={{ position: 'relative' }}>
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-7xl md:text-9xl font-bold text-white mb-8 leading-none tracking-tighter"
              >
                <VariableProximity
                  label="NEVER"
                  className="block"
                  fromFontVariationSettings="'wght' 300, 'opsz' 8"
                  toFontVariationSettings="'wght' 1000, 'opsz' 144"
                  containerRef={heroContainerRef}
                  radius={150}
                  falloff="gaussian"
                />
                <br/>
                <VariableProximity
                  label="MISS"
                  className="block"
                  fromFontVariationSettings="'wght' 300, 'opsz' 8"
                  toFontVariationSettings="'wght' 1000, 'opsz' 144"
                  containerRef={heroContainerRef}
                  radius={150}
                  falloff="gaussian"
                  style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
                />
                <br/>
                <VariableProximity
                  label="DEADLINE"
                  className="block"
                  fromFontVariationSettings="'wght' 300, 'opsz' 8"
                  toFontVariationSettings="'wght' 1000, 'opsz' 144"
                  containerRef={heroContainerRef}
                  radius={150}
                  falloff="gaussian"
                />
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base md:text-lg text-gray-400 mb-8 max-w-lg font-light leading-relaxed"
              >
                Automated task management powered by n8n. Syncs with Google Calendar, sends Telegram reminders, and keeps you organized 24/7.
              </motion.p>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex gap-8 mb-10"
              >
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-sm text-gray-500">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-500">Automation</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">∞</div>
                  <div className="text-sm text-gray-500">Tasks</div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onCreateTaskClick}
                className="px-10 py-5 bg-linear-to-r from-violet-600 to-purple-600 text-white text-base font-bold rounded-xl hover:from-violet-500 hover:to-purple-500 transition-all inline-flex items-center gap-3 shadow-lg shadow-violet-500/50"
              >
                Create Your First Task
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Right: Visual Cards */}
            <div className="relative h-150 hidden lg:block">
              {/* Task Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute top-0 right-0 w-72 bg-linear-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-xl shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-cyan-400">Next Deadline</div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">Team Meeting</div>
                <div className="text-sm text-gray-400 mb-4">Today at 3:00 PM</div>
                <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-linear-to-r from-cyan-400 to-blue-500 w-3/4"></div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute top-48 right-12 w-64 bg-linear-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl shadow-purple-500/10"
              >
                <div className="text-sm text-gray-400 mb-4">This Week</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">12</div>
                    <div className="text-xs text-gray-500">Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">5</div>
                    <div className="text-xs text-gray-500">Pending</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {[80, 60, 90, 40, 70, 95, 85].map((height, i) => (
                    <div key={i} className="flex-1 bg-zinc-800 rounded-full overflow-hidden h-20">
                      <div className="bg-linear-to-t from-purple-500 to-pink-500 rounded-full transition-all" style={{ height: `${height}%` }}></div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Priority Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute bottom-0 right-24 w-56 bg-linear-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-5 shadow-xl shadow-orange-500/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/50">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-orange-400">Priority</div>
                    <div className="text-lg font-bold text-white">HIGH</div>
                  </div>
                </div>
                <div className="text-sm text-gray-300">Client Presentation</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-4 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center border-r border-zinc-900 last:border-r-0">
              <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Automated</div>
              <div className="text-xs text-gray-600 mt-2">No manual work required</div>
            </div>
            <div className="text-center border-r border-zinc-900 last:border-r-0">
              <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">3</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Integrations</div>
              <div className="text-xs text-gray-600 mt-2">Calendar, Email, Telegram</div>
            </div>
            <div className="text-center border-r border-zinc-900 last:border-r-0">
              <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-3">&lt;2s</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Response Time</div>
              <div className="text-xs text-gray-600 mt-2">Lightning fast syncing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-3">0</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Missed Tasks</div>
              <div className="text-xs text-gray-600 mt-2">Smart reminder system</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Falling Text Section */}
      <div className="py-20 px-4 bg-zinc-950 border-y border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="h-100 md:h-125 relative">
            <FallingText
              text="TOO MANY DEADLINES ASSIGNMENTS PROJECTS TASKS MEETINGS PRESENTATIONS EXAMS SUBMISSIONS REPORTS WORK OVERLOAD STRESS CHAOS"
              highlightWords={["DEADLINES", "ASSIGNMENTS", "OVERLOAD", "STRESS", "CHAOS", "TOO"]}
              trigger="scroll"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.8}
              fontSize="2.5rem"
              mouseConstraintStiffness={0.3}
            />
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">Scroll to activate • Drag the words with your mouse</p>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div id="features" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              EVERYTHING YOU NEED
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Powerful automation workflows that work seamlessly together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Google Calendar Sync',
                description: 'Automatically creates calendar events with all task details, reminders, and notifications',
                icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
                stats: 'Real-time sync'
              },
              {
                title: 'Telegram Alerts',
                description: 'Get instant notifications on Telegram when deadlines approach or tasks are created',
                icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
                stats: 'Instant delivery'
              },
              {
                title: 'Email Summaries',
                description: 'Receive comprehensive daily and weekly email digests of all your tasks and deadlines',
                icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                stats: 'Daily digest'
              },
              {
                title: 'Priority Management',
                description: 'Organize tasks with LOW, MEDIUM, and HIGH priority levels for better focus',
                icon: 'M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4',
                stats: '3 priority levels'
              },
              {
                title: 'Smart Scheduling',
                description: 'AI-powered scheduling that learns your patterns and optimizes task timing',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                stats: 'Auto-optimized'
              },
              {
                title: 'n8n Powered',
                description: 'Built on enterprise-grade n8n automation platform for reliability and scalability',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                stats: '99.9% uptime'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, borderColor: index === 0 ? 'rgba(34, 211, 238, 0.5)' : index === 1 ? 'rgba(168, 85, 247, 0.5)' : index === 2 ? 'rgba(251, 146, 60, 0.5)' : index === 3 ? 'rgba(236, 72, 153, 0.5)' : index === 4 ? 'rgba(34, 197, 94, 0.5)' : 'rgba(59, 130, 246, 0.5)' }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 transition-all hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${
                    index === 0 ? 'bg-linear-to-br from-cyan-400 to-blue-500 shadow-cyan-500/50' :
                    index === 1 ? 'bg-linear-to-br from-purple-400 to-violet-600 shadow-purple-500/50' :
                    index === 2 ? 'bg-linear-to-br from-orange-400 to-amber-500 shadow-orange-500/50' :
                    index === 3 ? 'bg-linear-to-br from-pink-400 to-rose-500 shadow-pink-500/50' :
                    index === 4 ? 'bg-linear-to-br from-green-400 to-emerald-500 shadow-green-500/50' :
                    'bg-linear-to-br from-blue-400 to-indigo-500 shadow-blue-500/50'
                  }`}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <div className="text-xs text-gray-500 bg-zinc-800 px-3 py-1 rounded-full">
                    {feature.stats}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="working" className="py-32 px-4 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">
              HOW IT WORKS
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Simple 4-step process to never miss a deadline again
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            {[
              {
                step: '01',
                title: 'Create Task',
                description: 'Fill in task details, deadline, and priority level through our simple form',
                icon: 'M12 4v16m8-8H4',
                detail: 'Takes less than 30 seconds'
              },
              {
                step: '02',
                title: 'Auto Sync',
                description: 'Task instantly syncs to Google Calendar with all details and reminders',
                icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
                detail: 'Real-time synchronization'
              },
              {
                step: '03',
                title: 'Get Reminded',
                description: 'Receive timely Telegram notifications and email alerts before deadlines',
                icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
                detail: 'Multi-channel alerts'
              },
              {
                step: '04',
                title: 'Stay Organized',
                description: 'Track all your tasks in one place and never miss important deadlines',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                detail: 'Complete control'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-9xl font-bold text-zinc-900 mb-6 leading-none">{item.step}</div>
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>
                <div className="text-sm text-gray-600 font-medium">{item.detail}</div>
                
                {/* Connection line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-20 -right-6 w-12 h-0.5 bg-zinc-800"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              READY TO GET
              <br />
              STARTED?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join hundreds of users who never miss deadlines anymore
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(139, 92, 246, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onCreateTaskClick}
              className="px-12 py-6 bg-linear-to-r from-violet-600 to-purple-600 text-white text-lg font-bold rounded-xl hover:from-violet-500 hover:to-purple-500 transition-all inline-flex items-center gap-3 shadow-2xl shadow-violet-500/40"
            >
              Create Your First Task Now
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
