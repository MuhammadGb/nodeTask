
import express, { Request, Response } from 'express';
import { Model } from 'mongoose';

const router = express.Router();


const UserStore = [
  { id: 1, name: 'Mike', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  // ... other data entries
];

router.get('/models/:modelName', async (req: Request, res: Response) => {
  const { modelName} = req.params;
  const { fields = ["*"], filters = {} } = req.query;


const filterObject = {} 
for (const [key, value] of Object.entries(filters)) {
  const [operator, operand] = value as string[];
  filterObject[key] = { [operator]: operand };
}

try {
  //const data_ = await UserStore.find(filterObject, (fields as string).split(','));
  const data = await Model.find(filterObject, (fields as string).split(','));
  res.json(data);
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
}
});

export default router;
