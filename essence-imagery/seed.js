require('dotenv').config();
require('./config/database');

const Package = require('./models/package')

(async function() {
    await Package.deleteMany({});
    const packages = await Package.create([
        {description: '',
        name: 'Couples',
        price: 200,
        gallery: ''},
        {description: '',
        name: 'Maternity',
        price: 250,
        gallery: ''},
        {description: '',
        name: 'Family/Groups',
        price: 250,
        gallery: ''},
        {description: '',
        name: 'Graduation/Solo',
        price: 150,
        gallery: ''},
        {description: '',
        name: 'Newborn/Feeding',
        price: 250,
        gallery: ''},
        {description: '',
        name: 'Pregnancy Announcement',
        price: 200,
        gallery: ''},
        {description: '',
        name: '30 Minute-Mini',
        price: 100,
        gallery: ''},

    ]);
    
    console.log(packages)
    process.exit();
})();