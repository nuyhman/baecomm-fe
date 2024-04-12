export type Params = Record<string, string>;

export const getSearchParams = (params: Params) => {
  return new URLSearchParams(params).toString();
};
