export const errors = {
  400: { message: 'Invalid Request Error' },
  401: { message: 'Unauthorized Error' },
  404: { message: 'Not Found Error' },
  405: { message: 'Method Not Allowed Error' },
  500: { message: 'Internal Server Error' },
} as const;

export type Errors = typeof errors;
export type ErrorStatus = keyof Errors;
export type ErrorsMessage = {
  [K in ErrorStatus]: Errors[K]['message'];
}[ErrorStatus];
export type Err = { message: ErrorsMessage; status: ErrorStatus };
