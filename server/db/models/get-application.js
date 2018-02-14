'use strict';

const db = require('../../db/connect')();

module.exports = function getApplication(id) {
  let aggregate = {};

  return Promise.all([
    db('applications').where('id', id)
      .then((records) => { aggregate.application = records[0]; }),
    db('addresses').where('application_id', id)
      .then((records) => { aggregate.addresses = records; }),
    db('emails').where('application_id', id)
      .then((records) => { aggregate.emails = records[0]; }),
    db('phone_numbers').where('application_id', id)
      .then((records) => { aggregate.phone_numbers = records[0]; }),
    db('organ_donations').where('application_id', id)
      .then((records) => { aggregate.organ_donations = records[0]; }),
    db('card_histories').where('application_id', id)
      .then((records) => { aggregate.card_histories = records; }),
    db('previous_names').where('application_id', id)
      .then((records) => { aggregate.previous_names = records; }),
    db('medical_histories').where('application_id', id)
      .then((records) => { aggregate.medical_histories = records[0]; }),
    db('license_issues').where('application_id', id)
      .then((records) => { aggregate.license_issues = records[0]; }),
    db('veterans_info').where('application_id', id)
      .then((records) => { aggregate.veterans_info = records[0]; }),
    db('voting_registrations').where('application_id', id)
      .then((records) => { aggregate.voting_registrations = records[0]; }),
    db('cards').where('application_id', id)
      .then((records) => {
        aggregate.cards = records;
        let cardsIDs = [];
        records.forEach((card) => {
          cardsIDs.push(card.id);
        });
        return cardsIDs;
      })
      .then((cardIDs) => {
        return Promise.all([
          db('card_options').whereIn('card_id', cardIDs)
            .then((records) => { aggregate.card_options = records; }),
          db('license_classes').whereIn('card_id', cardIDs)
            .then( records => { aggregate.license_classes = records; })
        ])
      })
  ]).then(() => {
    if (!aggregate.application) { return undefined; }
    return aggregate;
  })
  .catch(function(err) {
    console.error('GET APPLICATION ERROR',err);
    return err;
  });
};
