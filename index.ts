import JSON_SCHEMA from './json-schema.json'

type Attendee = {
  userId: number;
  access: 'view' | 'modify' | 'sign' | 'execute';
  formAccess: 'view' | 'execute' | 'execute_view';
};

type MySchema = {
  id: string | number;
  title: string;
  description: string;
  startDate: number;
  endDate: number;
  attendees: Attendee[];
  parentId: null | string | number;
  locationId: null | number;
  process: null | string;
  readOnly: boolean;
  priorProbability: null | number;
  channelId: null | number;
  externalId: null | string;
  tags: string[]; 
  form: {
    id: number;
    viewModel: object;
  };
  formValue: object;
};

export function generateRandomData(schema: MySchema): MySchema {
  const data: MySchema = {
    id: generateRandomField(schema.id, 'string'),
    title: generateRandomField(schema.title, 'string'),
    description: generateRandomField(schema.description, 'string'),
    startDate: generateRandomField(schema.startDate, 'number'),
    endDate: generateRandomField(schema.endDate, 'number'),
    attendees: [],
    parentId: generateRandomField(schema.parentId, 'string'),
    locationId: generateRandomField(schema.locationId, 'number'),
    process: generateRandomField(schema.process, 'string'),
    readOnly: generateRandomField(schema.readOnly, 'boolean'),
    priorProbability: generateRandomField(schema.priorProbability, 'number'),
    channelId: generateRandomField(schema.channelId, 'number'),
    externalId: generateRandomField(schema.externalId, 'string'),
    tags: generateRandomField(schema.tags, 'array'),
    form: {
      id: generateRandomField(schema.form?.id || 0, 'number'),
      viewModel: {},
    },
    formValue: {},
  };

  for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
    const attendee: Attendee = {
      userId: generateRandomField('number', 'number'),
      access: (['view', 'modify', 'sign', 'execute'][Math.floor(Math.random() * 4)]) as ('view' | 'modify' | 'sign' | 'execute'),
      formAccess: (['view', 'execute', 'execute_view'][Math.floor(Math.random() * 3)]) as ('view' | 'execute' | 'execute_view'),
    };
    data.attendees.push(attendee);
  }

  return data;
}

function generateRandomField(fieldValue: any, fieldType: string): any {
  if (fieldValue !== undefined && fieldValue !== null) {
    return fieldValue;
  }

  if (fieldType === 'string') {
    return 'SampleString';
  } else if (fieldType === 'number') {
    return Math.floor(Math.random() * 1000);
  } else if (fieldType === 'boolean') {
    return Math.random() < 0.5;
  } else if (fieldType === 'array') {
    return [];
  } else {
    return null;
  }
}

const jsonType = typeof JSON_SCHEMA;
const generatedData = generateRandomData(JSON_SCHEMA as any)
