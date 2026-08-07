# AWS EC2 Node.js Health Check API

A beginner Node.js and Express application with a health-check endpoint, manually deployed to an Amazon EC2 instance.

## Endpoint

### GET /health

Returns HTTP status code `200` with:

```json
{
  "status": "healthy"
}
