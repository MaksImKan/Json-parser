import { generateRandomData } from ".";

describe('generateRandomData', () => {
  it('should generate a data object with non-null values', () => {
    const schema = {
      id: 'string',
      title: 'string',
      description: 'string',
      startDate: 'number',
      endDate: 'number',
      attendees: [],
      parentId: 'string',
      locationId: 'number',
      process: 'string',
      readOnly: 'boolean',
      priorProbability: 'number',
      channelId: 'number',
      externalId: 'string',
      tags: 'array',
      form: {
        id: 'number',
        viewModel: {},
      },
      formValue: {},
    };

    const data = generateRandomData(schema as any);

    // Define the expected types for each field
    const expectedTypes = {
      id: 'string',
      title: 'string',
      description: 'string',
      startDate: 'number',
      endDate: 'number',
      attendees: 'array',
      parentId: 'string',
      locationId: 'number',
      process: 'string',
      readOnly: 'boolean',
      priorProbability: 'number',
      channelId: 'number',
      externalId: 'string',
      tags: 'array',
      form: {
        id: 'number',
        viewModel: 'object',
      },
      formValue: 'object',
    };

    for (const field in schema) {
        expect(typeof data[field]).toBe(schema[field] as any);
    }
  });
});

