require('dotenv').config();
require('./config/database');

const Package = require('./models/package')

async function seed() {
    await Package.deleteMany({});
    const packages = await Package.create([
        {description: 'Celebrate your friendship or love with a fun and playful photoshoot! Our fun and relaxed sessions are designed to capture your personalities and/or love story.',
        name: 'Couples/Duos',
        price: 200,
        gallery: ['https://i.ibb.co/cwxksPY/Untitled-11.jpg', 'https://i.ibb.co/gt8yX6L/MG-7658.jpg', 'https://i.ibb.co/W2Bq0LL/6X9A8273.jpg', 'https://i.ibb.co/xF1DWvw/6X9A8105.jpg', 'https://i.ibb.co/Y03MfRF/6X9A2248.jpg', 'https://i.ibb.co/MBLPSCy/MG-7677.jpg']},
        {description: "Celebrate your achievement or simply have a blast with an individual photoshoot. We'll work with you to create a personalized experience that showcases your unique personality and style.",
        name: 'Graduation/Solo',
        price: 150,
        gallery: ['https://i.ibb.co/fQdQN0z/6X9A3376.jpg', 'https://i.ibb.co/mCbkCSr/6X9A3516.jpg', 'https://i.ibb.co/PWLztZX/6X9A8450.jpg', 'https://i.ibb.co/99QcX6V/6X9A8535.jpg', 'https://i.ibb.co/0CDHJZL/6X9A8638.jpg', 'https://i.ibb.co/ChFNwzj/6X9A2856.jpg'] },
        {description: "Our group sessions are designed to capture your special moments and relationships, whether you want to cozy up in a park or have a lively outdoor adventure. With our friendly and natural approach, we'll help you create beautiful images that showcase your unique family or group dynamic.",
        name: 'Family/Groups',
        price: 250,
        gallery: ['https://i.ibb.co/F06Bvmk/Untitled-12.jpg', 'https://i.ibb.co/GRj7jbK/Untitled-13.jpg', 'https://i.ibb.co/RCnNXqR/6X9A1972.jpg', 'https://i.ibb.co/VL3znLX/6X9A9947.jpg', 'https://i.ibb.co/zHLcKsL/6X9A9927.jpg', 'https://i.ibb.co/6W6NM1p/6X9A9347.jpg']},
        {description: "Our sessions capture the beauty and excitement of pregnancy, creating stunning images that you and your family will cherish forever. Whether you want to pose in a beautiful outdoor location or capture intimate moments in the comfort of your own home, we'll work together to create images that reflect your unique personality and style.",
        name: 'Maternity',
        price: 250,
        gallery: ['https://i.ibb.co/B4TQ2cf/6X9A1778.jpg', 'https://i.ibb.co/bBVQK5K/6X9A1526.jpg', 'https://i.ibb.co/K0m3HxV/6X9A0290.jpg', 'https://i.ibb.co/gTG6N4M/6X9A0137.jpg']},
        {description: "Our sessions celebrate the special bond between mother and child, creating intimate and tender images that showcase the natural beauty of this precious time. Capture your little one's first smiles, or peaceful moments of nurisng and snuggles",
        name: 'Newborn/Feeding',
        price: 250,
        gallery: ['https://i.ibb.co/hm0vHgW/6X9A0497.jpg', 'https://i.ibb.co/gdWfZWd/6X9A0256.jpg', 'https://i.ibb.co/S54nT0X/6X9A1083.jpg', 'https://i.ibb.co/6yCfjqc/6X9A1167.jpg', 'https://i.ibb.co/cDDPGx8/6X9A2531.jpg', 'https://i.ibb.co/wyyd6cZ/6X9A2483.jpg']}
    ]);
    console.log(packages)
}
seed();

