import { render, screen } from '@testing-library/react';
import DashBoardPage from './DashBoardPage';

test('renders learn react link', () => {
  render(<DashBoardPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
