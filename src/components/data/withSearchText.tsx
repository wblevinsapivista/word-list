import React from "react";
import { connect } from "react-redux";
import { flowRight } from "lodash";

export interface WithSearchTextProps {
  searchText: string;
}

const withSearchText = (WrappedComponent: any) => {
  const WithSearchText = (props: any) => {
    const { searchText } = props;

    return (
      <WrappedComponent {...props} searchText={searchText}></WrappedComponent>
    );
  };

  return flowRight(
    connect((state: any) => ({
      searchText: state.searchText,
    }))
  )(WithSearchText);
};

export { withSearchText };
