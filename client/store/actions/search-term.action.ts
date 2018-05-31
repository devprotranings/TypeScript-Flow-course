export const SEARCH_BY_TERM = '[TS_COURSE] SEARCH_BY_TERM';
//
// export class SearchByTerm {
//   public readonly type: string = SEARCH_BY_TERM;
//
//   public constructor(public payload: string) {}
// }

export function searchByTerm(payload: string) {
  return {
    payload,
    type: SEARCH_BY_TERM,
  };
}
