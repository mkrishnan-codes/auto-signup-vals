const fs = require('fs');
let fName = '';
let lName = '';
const pwd = 'qualitytest@000';
let email = 'tqa' + '-num-' + '@mailinator.com'
const read = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}
const write = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, function (err, data) {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(data);
        });
    })
}
const start = async () => {
    const data = await read('names.txt');
    let count = await read('counter.txt');
    count = Number(count);
    count++;
    write('counter.txt', count);
    const names = data.split('\n');
    const name = names[Math.floor(Math.random() * names.length)];
    const NameArray = name.split(' ');
    fName = NameArray[0];
    lName = NameArray[1];
    email = email.replace('-num-', count)
    console.log(fName, lName, email)
    let log = '';
    try {
        log = await read('log.txt')
    } catch (e) {
        log = 'fl';
    }
    write('log.txt', log + '\n######\n' + name + '\n' + email + '\n @ ' + new Date());

}
start();
// const randomNames = ''
// const fName ='';
// document.querySelector('#inpSignupFname')
// #inpSignupLname
// #inpSignupEmail
// #inpSignupPas
// #inpSignupRepPas
