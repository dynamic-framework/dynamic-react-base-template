import { DButton } from '@dynamic-framework/ui-react';
import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import MyLink from './MyLink';
import MyLogos from './MyLogos';

export default function MyComponent() {
  const { t } = useTranslation();
  const [showLogos, setShowLogos] = useState(false);

  return (
    <div
      className={classNames(
        'd-flex flex-column gap-4',
        'align-items-center justify-content-center',
      )}
    >
      <h1 className="fw-bolder">{t('title')}</h1>
      <p className="h5 text-muted">
        Get started by editing
        {' '}
        <span className="font-monospace">src/components/MyComponent.tsx</span>
      </p>
      <DButton
        onClick={() => setShowLogos((prevState) => !prevState)}
        text="Click me!"
        size="lg"
      />
      {showLogos && <MyLogos />}
      <div className="w-100 row mt-14">
        <div className="col mb-6">
          <MyLink
            href="https://docs.modyo.com/en/dynamic/"
            icon="book"
            title="Learn"
            description="Get started with Dynamic Framework!"
          />
        </div>
        <div className="col mb-6">
          <MyLink
            href="https://docs.modyo.com/en/dynamic/ui/theming.html"
            icon="brush"
            title="Themes"
            description="Learn how to create a unique look-and-feel!"
          />
        </div>
        <div className="col mb-6">
          <MyLink
            href="https://docs.modyo.com/en/dynamic/experiences/retail/dashboard.html"
            icon="layout-text-window"
            title="Experiences"
            description="Explore the fully React-based templates"
          />
        </div>
      </div>
    </div>
  );
}
