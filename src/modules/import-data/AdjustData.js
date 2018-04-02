const adjustData = (data) => {
  let rawCard = data;
  const standard = [
    'posted',
    'title',
    'location',
    'position',
    'description',
    'company',
    'company_url',
    'app_url',
    'site'
  ]
  
  for (let key of standard)
    if (!rawCard.hasOwnProperty(key)) rawCard[key] = "unavailable";
  
  return rawCard;
}

export default adjustData;