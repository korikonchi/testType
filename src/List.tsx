import React, { ReactNode } from "react";
import { JsxAttribute } from "typescript";
import { interfaceInitialState } from "./App";
interface Props {
  userData: Array<interfaceInitialState>;
  children: ReactNode;
}

export const List: React.FunctionComponent<Props> = ({
  userData,
  children,
}) => {
  const renderList = (): Array<JSX.Element> => {
    // return function is a JSX
    return userData.map((user, i) => {
      return (
        <div key={i}>
          <li>{user.nick}</li>
          <li>{user.description}</li>
          <li>{user.subMonths}</li>
          <li>{user.fixTypeScript?.substring(0, 100)}</li>
          {/* typescript detect that fixTypeScript can be undefined */}
        </div>
      );
    });
  };

  return (
    <div>
      {renderList()}
      {children}
    </div>
  );
};

export default List;
