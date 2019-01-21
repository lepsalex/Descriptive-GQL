interface INamedandDescribed {
  name: string;
  description: string;
}
interface IBaseItem extends INamedandDescribed {
  type: {
    name: string;
  };
}

interface IParentItem extends INamedandDescribed {
  type: {
    name: string;
    fields: [IBaseItem];
  };
}

interface ITopLevel extends INamedandDescribed {
  fields: [IParentItem];
}

export interface IData {
  __type: ITopLevel;
}
