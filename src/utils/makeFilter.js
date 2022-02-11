export default function makeFilter(filterObj) {
  const { remote, presential, relocationYes, relocationNo, selectedCountry, selectedCity, selectedTags } = filterObj;

  const filterArr = [];
  if (remote) {
    filterArr.push('modality:REMOTE');
  }
  if (presential) {
    filterArr.push('modality:PRESENTIAL');
  }
  if (relocationYes) {
    filterArr.push('relocation:true');
  }
  if (relocationNo) {
    filterArr.push('relocation:false');
  }
  if (selectedCountry) {
    filterArr.push(`country:${selectedCountry.label}`);
  }
  if (selectedCity) {
    filterArr.push(`city:${selectedCity.label}`);
  }
  if (selectedTags && selectedTags.length > 0) {
    const tagsStr = selectedTags.map(t => t.value.id).join(",");
    filterArr.push(`tags:%5B${tagsStr}%5D`);
  }
  
  return filterArr.join("&")
}