import {object, string, TypeOf, boolean, number} from 'zod'

export const createCardSchema = object({
    body: object({
      value: string({
        required_error: "Value is required",
      }),
      type: string({
        required_error: "Type is required",
      }),
      isValid: boolean({
        required_error: "Valid field is required",
      }),
    })
  });

export const drawCardDetailsSchema = object({
        body: object({
            uuid: string({
                required_error: "UUID is required",
            }),
            count: number({
                required_error: "Count is required",
            }),
        }),
    });

  export type CreateCardInput = TypeOf<typeof createCardSchema>;

  export type DrawCardInput = TypeOf<typeof drawCardDetailsSchema>;
