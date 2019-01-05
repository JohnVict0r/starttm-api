const baseF = '-_id -__v -created_at -updated_at -password';

const userF = `${baseF} -roles`;
const roleF = baseF;
const personF = `${baseF} -address -user`;
const arbiterF = `${baseF} -user`;
const athleteF = `${baseF} -user`;
const addressF = baseF;

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
  addressF,
  filterDoc,
};
