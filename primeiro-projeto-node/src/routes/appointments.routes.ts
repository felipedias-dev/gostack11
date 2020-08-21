import { Router } from 'express';

const appointmentRouter = Router();

appointmentRouter.post('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

export default appointmentRouter;
