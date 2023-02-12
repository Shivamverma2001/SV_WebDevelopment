// async function hello() {

// }
const sing = async () => {
    throw new Error('oh no')
    return 'LA LA LA LA';
}
sing()
    .then((data) => {
        console.log('PROMISE RESOLVE WITH ', data);
    })
    .catch((err) => {
        console.log('OH NO PROMISE REJECTED ', err);
    })