const adjustData = (data) => {
  let rawCard = data;
  const standard = [
    'isHidden',
    'isFavorite',
    'posted',
    'postedMS',
    'title',
    'location',
    'position',
    'description',
    'company',
    'company_url',
    'app_url',
    'site'
  ]
  
  rawCard.isHidden = rawCard.isFavorite = false;

  for (let key of standard) {
    if (!rawCard.hasOwnProperty(key)) rawCard[key] = "unavailable";

    // Date management; 'posted' is user-friendly string,
    // 'postedMS' is numeric datetime to be used for sorting.
    if (key === 'posted') {
      const options = { localeMatcher: 'best fit', 
        hour12: true, 
        month: 'long', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      },
      date = new Date(rawCard[key]),
      dateTime = date.toLocaleDateString('en-US', options);
      rawCard[key] = dateTime;
    }
    if (key === 'postedMS') rawCard[key] = Date.parse(rawCard[key]);
  }

  return rawCard;
}

export default adjustData;