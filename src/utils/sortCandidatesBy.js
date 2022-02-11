export default function sortCandidatesBy(candidates, { param, asc }) {
  let sortedCandidates = [...candidates];
  return sortedCandidates.sort((a, b) => {
    if (param === 'tags') {
      return asc ? a.tags.length - b.tags.length : b.tags.length - a.tags.length;
    }
    return asc ? a[param].localeCompare(b[param]) : b[param].localeCompare(a[param]);
  });;
};