import { DIcon } from '@dynamic-framework/ui-react';

import { ReactComponent as ModyoLogo } from '../assets/modyoLogo.svg';
import { ReactComponent as ReactLogo } from '../assets/reactLogo.svg';

export default function MyLogos() {
  return (
    <div className="d-flex gap-4 flex-column flex-md-row justify-content-center align-items-center mt-4">
      <ModyoLogo />
      <DIcon
        icon="plus"
        size="2rem"
        className="text-muted"
      />
      <ReactLogo />
    </div>
  );
}
