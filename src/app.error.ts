import { ApiProperty } from '@nestjs/swagger';

export class AppErrorResource {
  @ApiProperty({
    type: 'object',
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
