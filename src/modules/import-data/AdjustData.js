const adjustData = (data) => {
  let rawCard = data;
  const standard = [
    'isHidden',
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
  
  rawCard.isHidden = false;

  for (let key of standard)
    if (!rawCard.hasOwnProperty(key)) rawCard[key] = "unavailable";

  return rawCard;
}

export default adjustData;