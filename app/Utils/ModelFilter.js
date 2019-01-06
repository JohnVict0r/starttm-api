const baseF = '-__v -created_at -updated_at -password';

const userF = `${baseF} -roles`;
const roleF = baseF;
const personF = `${baseF} -user`;
const arbiterF = `${baseF} -user`;
const athleteF = `${baseF} -user`;
const tournamentF = `${baseF} -federation -athletes -coaches -arbiters`;
const federationF = baseF;
const clubF = baseF;

function filterDoc(doc, filter) {
  filter.split(' ').map((item) => {
    const prop = item.replace('-', '');
    delete doc[prop];
  });

  return doc;
}

module.exports = {
  baseF,
  userF,
  roleF,
  personF,
  arbiterF,
  athleteF,
  tournamentF,
  federationF,
  clubF,
  filterDoc,
};
