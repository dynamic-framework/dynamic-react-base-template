import * as DynamicFramework from '@dynamic-framework/ui-react';
import { render, screen, waitFor } from '@testing-library/react';

import App from '../src/App';
import { CONTEXT_CONFIG } from '../src/config/widgetConfig';

jest.mock('@dynamic-framework/ui-react', () => {
  const originalModule: typeof DynamicFramework = jest.requireActual('@dynamic-framework/ui-react');
  return {
    ...originalModule,
    useDContext: jest.fn(),
  };
});

describe('App Component', () => {
  beforeEach(() => {
    (DynamicFramework.useDContext as jest.Mock).mockReturnValue({
      setContext: jest.fn(),
    });
  });
  it('sets context with correct configuration', async () => {
    render(<App />);

    await waitFor(() => {
      expect(DynamicFramework.useDContext().setContext).toHaveBeenCalledWith(CONTEXT_CONFIG);
      expect(screen.getByText('Get started by editing')).toBeInTheDocument();
    });
  });
});
