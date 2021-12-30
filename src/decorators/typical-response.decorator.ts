import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  getSchemaPath,
} from '@nestjs/swagger';

const ApiResponses = () => {
  const decorators = [
    ApiBadRequestResponse({
      schema: {
        type: 'object',
        example: {
          statusCode: 400,
          message: 'Validation error',
          validationErrors: {
            fieldName: ['validation rule'],
          },
        },
      },
      description: '400. Validation failed',
    }),
    ApiInternalServerErrorResponse({
      description: '500. Internal Server Error',
    }),
    ApiNotFoundResponse({
      description: '404. Not found.',
    }),
  ];
  return applyDecorators(...decorators);
};

export default ApiResponses;

export const ApiSchema = (dto: string | Function) => ({
  type: 'object',
  properties: {
    data: {
      $ref: getSchemaPath(dto),
    },
  },
});
