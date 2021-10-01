import { render, screen } from '@testing-library/react';

import { ChildComponent } from '.';

describe('ChildComponent', () => {
  it('should render properly', () => {
    render(<ChildComponent />);

    expect(screen.getByText(/hey/i)).toBeInTheDocument();
  });
});
