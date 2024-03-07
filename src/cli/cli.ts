
import { mkdirSync, writeFileSync } from 'fs';
import * as path from 'path';


async function createModel(modelName: string) {
  if (!modelName) {
    console.error('Please provide a model name. (e.g., npm run create-model User)');
    process.exit(1);
  }

  const modelPath = `src/models/${modelName}`;

  try {
    mkdirSync(modelPath, { recursive: true });
    const modelContent = `
      import { Document } from '../models/Document';

      export class ${modelName} extends Document {
        // Your model implementation here
      }
    `;
    writeFileSync(path.join(`${modelPath}/${modelName}.ts`), modelContent);

    const modelJsonContent = '{}'; 
    writeFileSync(path.join(`${modelPath}/${modelName}.json`), modelJsonContent);

    console.log(`Model ${modelName} created successfully!`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

//const modelName = process.argv[2];
const [,, command, modelName] = process.argv;

if (command === 'create-model') {
  createModel(modelName);
}