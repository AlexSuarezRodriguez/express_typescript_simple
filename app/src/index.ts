import app from './app';

const port: number = Number(process.env.PORT) || 3005;

// Start the server
app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
});

export default app;