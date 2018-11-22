const base = '-_id -__v -created_at -updated_at';

const userF = base + ' -password';
const roleF = base;
const personF = base + ' -user';
const arbiterF = base;

function filterDoc(doc, filter) {

    filter.split(' ').map((item) => {
        let prop = item.replace('-', '');
        delete doc[prop];
    });

    return doc;
}

module.exports = { userF, roleF, personF, arbiterF, filterDoc };