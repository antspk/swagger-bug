import { ApiProperty } from '@nestjs/swagger';

export class AppErrorResource {
  @ApiProperty({
    type: 'object',
    // I should be able to mark properties as required as in this example:
    // https://swagger.io/docs/specification/data-models/data-types/#required
    // required: ['name', 'status'],
    properties: {
      name: {
        type: 'string',
        example: 'ErrorName',
      },
      status: {
        type: 'number',
        example: '400',
      },
    },
  })
  readonly error: unknown;
}
