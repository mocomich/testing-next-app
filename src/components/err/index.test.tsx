import { Err, ErrorStatus, JPMessages, errors } from '@/libs/error';
import { render, screen } from '@testing-library/react';
import { Error } from '.';

const ErrorArray: Err[] = Object.entries(errors).map(([key, value]) => ({
  status: Number(key) as ErrorStatus,
  message: value['message'],
}));

test.each(ErrorArray)('Status:$statusが渡ってきた場合、$messageが日本化され表示される', ({ message, status }) => {
  render(<Error message={message} status={status} />);
  expect(screen.getByText(JPMessages[status]['message'])).toBeInTheDocument();
});
