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
    'glassdoor',
    'googleLoc',
    'citydataLoc',
    'app_url',
    'site'
  ]
  
  rawCard.isHidden = rawCard.isFavorite = false;

  for (let key of standard) {
    if (!rawCard.hasOwnProperty(key)) rawCard[key] = "unavailable";

    if (key === 'citydataLoc') {
      let loc = encodeURI(rawCard['location']);
      rawCard[key] = `http://www.city-data.com/cityname2.php?NM=${loc}`
    }

    if (key === 'googleLoc') {
      let loc = encodeURI(rawCard['location']);
      rawCard[key] = `https://www.google.com/search?q=${loc}`;
    }

    if (key === 'glassdoor') {
      const uri = encodeURI(rawCard['company']);
      rawCard[key] = `https://www.glassdoor.com/Reviews/company-reviews.htm?sc.keyword=${uri}`;
    }

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