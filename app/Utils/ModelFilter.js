const base = '-_id -__v -created_at -updated_at';

const userF = base;
const roleF = base;
const personF = base + ' -user';

function filterDoc(doc, filter) {

    filter.split(' ').map((item) => {
        let prop = item.replace('-', '');
        delete doc[prop];
    });

    return doc;
}

module.exports = { userF, roleF, personF, filterDoc };