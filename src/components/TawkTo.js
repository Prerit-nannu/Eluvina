'use client';

import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function TawkTo() {
  const propertyId =
    process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID || '6ab674e91919a13446e9ff26';
  const widgetId =
    process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID || '1k3cbhcku';

  return (
    <TawkMessengerReact
      propertyId={propertyId}
      widgetId={widgetId}
    />
  );
}
