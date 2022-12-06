import {object, string, TypeOf, boolean} from 'zod'

export const createDeckSchema = object({
    body: object({
      type: string({
        required_error: "Type is required",
      }),
      shuffled: boolean({
        required_error: "shuffled is required",
      }),
    })
  });

  const params = {
    params: object({
      uuid: string({
        required_error: "uuid is required",
      }),
    }),
  };

  export const getDeckDetailsByUUIDSchema = object({
    ...params,
  });

  export type CreateDeckInput = Omit<TypeOf<typeof createDeckSchema>, 
  "body.deckId">;

  export type GetDeckByUUIDInput = TypeOf<typeof getDeckDetailsByUUIDSchema>;