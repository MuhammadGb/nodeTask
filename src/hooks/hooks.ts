
import { Model } from 'mongoose';


type HookFunction = (data) => Promise<void>|Promise<string>;

interface Hooks {
    afterStart: HookFunction[];
    beforeMigrate: HookFunction[];
    afterMigrate: HookFunction[];
  }

  const hooks: Hooks = {
    afterStart: [],
    beforeMigrate: [],
    afterMigrate: [],
  };

export function addHookFns(name: keyof Hooks, fn: HookFunction) {
  if (!hooks[name]) {
    hooks[name] = [];
  }
  hooks[name].push(fn);
}

export async function runHookFns(name: keyof Hooks, data?: object) {
    const hookFns = hooks[name];
  if (!hookFns) {
    return;
  }

  for (const fn of hookFns) {
    await fn(data);
  }
}

//EXAMPLE
    
    addHookFns('afterStart', async () => {
       return  'Program 1 has started.';
      });

    addHookFns('afterStart', async () => {
    return  'Program 2 has started.';
    }); 
    
    addHookFns('afterStart', async () => {
    return  'Program 3 has started.';
    });

  
  addHookFns('beforeMigrate', async (models: Model<object>[]) => {
   return  `Migrating ${models.length} models...`;
  });

  addHookFns('beforeMigrate', async (models: Model<object>[]) => {
    return  `Migrating ${models.length} models...`;
   });


  addHookFns('afterMigrate', async (models: Model<object>[]) => {
   return  'First Migration completed for models:'+models.map(m => m.modelName);
  });


  addHookFns('afterMigrate', async (models: Model<object>[]) => {
    return  'Second Migration completed for models:'+ models.map(m => m.modelName);
   });

   addHookFns('afterMigrate', async (models: Model<object>[]) => {
     return  'Third Migration completed for models:'+ models.map(m => m.modelName);
    });

    const Users={}
    const Products={}
    const Stores={}
    const Items={}
    const Clothes={}

    runHookFns("afterMigrate", [Users,Items])
    runHookFns("afterMigrate", [Products,Clothes])
    runHookFns("afterMigrate", Stores)