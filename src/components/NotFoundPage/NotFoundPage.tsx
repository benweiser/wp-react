import * as React from "react";

export interface NotFoundPageProps {
  readonly location: string;
}

const NotFoundPage: React.SFC<NotFoundPageProps> = (): JSX.Element => {
  return (
    <div>
      <h1>This page could not be found. No match for {location.pathname}</h1>
    </div>
  );
};

export default NotFoundPage;
