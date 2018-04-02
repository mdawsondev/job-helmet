import React from 'react';

import adjustData from './AdjustData';

function FetchClean(data, cb) {
  const raw = cb(data);
  const rawCard = adjustData(raw);
  return rawCard;
}

export default FetchClean;