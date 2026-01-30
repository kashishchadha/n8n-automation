FROM n8nio/n8n:latest

# Set environment variables
ENV N8N_BASIC_AUTH_ACTIVE=true
ENV N8N_BASIC_AUTH_USER=admin
ENV N8N_BASIC_AUTH_PASSWORD=admin123
ENV NODE_ENV=production
ENV N8N_PORT=5678

# Expose port
EXPOSE 5678

# Volume for data persistence
VOLUME ["/home/node/.n8n"]

# Start n8n using the proper entrypoint
CMD ["n8n"]
