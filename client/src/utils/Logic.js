export const formatNumber = (total) => {
  const pattern = /(-?\d+)(\d{3})/;
  let result = total;
  while (pattern.test(result)) {
    result = result.replace(pattern, '$1,$2');
  }
  return result;
};

// This is just to move the dirty code out of the component.
// Unfortunately, I would probably have to redo too much
// of this to have a decently efficient details section.
// ...out of sight, out of mind?
export const formatHardCoded = (details) => {
  const one = [
    { item: 'Cooling System: ', value: details.coolingSys },
    { item: 'Days on Market: ', value: details.daysOnMarket },
    { item: 'Exterior: ', value: details.exterior },
  ];
  const two = [
    { item: 'Year Built: ', value: details.yearBuilt },
    { item: 'Floors: ', value: details.floors },
    { item: 'Heating: ', value: details.heating },
  ];
  const three = [
    { item: 'Property Type: ', value: details.propertyType },
    { item: 'Number of Rooms: ', value: details.numberOfRooms },
    { item: 'Parking Spaces: ', value: details.parkingSpaces },
  ];
  const four = [
    { item: 'Price Per Sqft: ', value: details.pricePerSqft },
    { item: 'Roof: ', value: details.roof },
    { item: 'MLS/Source ID: ', value: details.mlsSourceId },
  ];

  return [one, two, three, four];
};
