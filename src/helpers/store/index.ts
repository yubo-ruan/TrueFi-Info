import { ActionTypes } from "../../actions/types";

export const isLoaded = (status: string) => {
  return ActionTypes.LOADED === status;
};

export const notLoaded = (status: string) => {
  return ActionTypes.NOT_LOADED === status;
};

export const isLoading = (status: string) => {
  return ActionTypes.IS_LOADING === status;
};

export const failedLoading = (status: string) => {
  return ActionTypes.LOADING_FAILED === status;
};
