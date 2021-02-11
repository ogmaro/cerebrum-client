import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Login", () => {
	test "validate function should pass on correct input",()=>{
		const name='name@test.com'
		expect(validateInput(name)).toBe(true);
	};
});