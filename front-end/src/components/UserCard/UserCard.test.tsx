import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserCard from '.';
import { User } from '@/types/Users';

describe('Testing UserCard', () => {
  const user: User = {
    id: 1,
    name: 'Super Name',
    score: 4000,
  };
  test('Testing UserCard with a normal user object', () => {
    render(<UserCard user={user} />);
    const name = screen.getByTestId('ta-usercard-name');
    const score = screen.getByTestId('ta-usercard-score');
    const image = screen.getByTestId('ta-usercard-image');

    expect(name.innerHTML).toBe('Super Name');
    expect(score.innerHTML).toBe('4000');
    expect(image).toBeInTheDocument();
  });
});
