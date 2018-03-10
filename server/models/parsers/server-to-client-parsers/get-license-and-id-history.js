'use strict';

const parserHelper          = require('../data-parser');

function licenseAndIdHistory(card_histories) {
  if(card_histories && card_histories.length > 0 && parserHelper.historyForDL(card_histories).length > 0){
    let card_history = parserHelper.historyForDL(card_histories);
    let _date = parserHelper.createDateJson(card_history.date_description);

    if (card_history.issuing_entity === 'licenseAndIdHistory not issued') {
      return {
        DLIDNumber:   '',
        issuedBy:     '',
        month:        '',
        day:          '',
        year:         '',
        isIssued:     'No'
      };
    }
    return {
      DLIDNumber:   card_history.number,
      issuedBy:     card_history.issuing_entity,
      month:        _date.month,
      day:          _date.day,
      year:         _date.year,
      isIssued:     'Yes'
    };
  }
  else {
    return {
      DLIDNumber:   '',
      issuedBy:     '',
      month:        '',
      day:          '',
      year:         '',
      isIssued:     ''
    };
  }
}

module.exports = licenseAndIdHistory;