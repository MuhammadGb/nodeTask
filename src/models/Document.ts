
import * as fs from 'fs';

interface ModelDefinition {
    [key: string]: string; 
  }


export class Document {
    private static readonly modelDefinitions: { [key: string]: ModelDefinition } = {};
  
    constructor() {
      const modelName = this.constructor.name;
      const modelDefinitionPath = `models/${modelName}/${modelName}.json`;
  
      if (!fs.existsSync(modelDefinitionPath)) {
        throw new Error(`Model definition file (${modelName}.json) not found for model ${modelName}`);
      }
  
      const modelDefinition: ModelDefinition = JSON.parse(fs.readFileSync(modelDefinitionPath, 'utf8'));
      this.validateModel(modelDefinition);
      Document.modelDefinitions[modelName] = modelDefinition;
    }
  
    private validateModel(modelDefinition: ModelDefinition): boolean  {

      const document = {
        _id: 'some-id',
        createdAt: new Date(),
        updatedAt: new Date(),
      } 

      //const modelName = this.constructor.name;
      //const modelDefinitionPath = `models/${modelName}/${modelName}.json`;
      
      try {
        //const modelDefinition: ModelDefinition = JSON.parse(fs.readFileSync(modelDefinitionPath, 'utf8'));
    
       
        for (const fieldName of Object.keys(modelDefinition)) {
          const fieldType = modelDefinition[fieldName];
          if (!(fieldName in document)) {
            console.error(`Missing required field: ${fieldName}`);
            return false;
          }
    
          const fieldValue = document[fieldName];
          if (typeof fieldValue !== fieldType) {
            console.error(`Invalid type for field ${fieldName}. Expected ${fieldType}, got ${typeof fieldValue}`);
            return false;
          }
        }
    
        return true; 
      } catch (error) {
        console.error(`Error reading model definition for ${this.constructor.name}: ${error.message}`);
        return false; 
      }
    }
  }