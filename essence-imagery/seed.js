require('dotenv').config();
require('./config/database');

const Package = require('./models/package')

async function seed() {
    await Package.deleteMany({});
    const packages = await Package.create([
        {description: 'Celebrate your friendship or love with a fun and playful photoshoot! Our fun and relaxed sessions are designed to capture your personalities and/or love story.',
        name: 'Couples/Duos',
        price: 200,
        gallery: ['https://ibb.co/FH5K2vc', 'https://ibb.co/5RstkPP', 'https://ibb.co/y4X1gfc', 'https://ibb.co/vX8LqjC', 'https://ibb.co/MPHnj9x', 'https://ibb.co/HCXB90h']},
        {description: "Celebrate your achievement or simply have a blast with an individual photoshoot. We'll work with you to create a personalized experience that showcases your unique personality and style.",
        name: 'Graduation/Solo',
        price: 150,
        gallery: ['https://ibb.co/jHkHw4P', 'https://ibb.co/RpYfp7G', 'https://ibb.co/cDdMy1W', 'https://ibb.co/sKm83Q4', 'https://ibb.co/1XgJbfy', 'https://ibb.co/mCfbskX'] },
        {description: "Our group sessions are designed to capture your special moments and relationships, whether you want to cozy up in a park or have a lively outdoor adventure. With our friendly and natural approach, we'll help you create beautiful images that showcase your unique family or group dynamic.",
        name: 'Family/Groups',
        price: 250,
        gallery: ['https://ibb.co/Fzt6tjS', 'https://ibb.co/yY08Tdm', 'https://ibb.co/CHxWcMX', 'https://ibb.co/dJ39nB3', 'https://ibb.co/3Tkj6Tt', 'https://ibb.co/BgDGh90']},
        {description: "Our sessions capture the beauty and excitement of pregnancy, creating stunning images that you and your family will cherish forever. Whether you want to pose in a beautiful outdoor location or capture intimate moments in the comfort of your own home, we'll work together to create images that reflect your unique personality and style.",
        name: 'Maternity',
        price: 250,
        gallery: ['https://ibb.co/tsS3gLM', 'https://ibb.co/h7CtvF2', 'https://ibb.co/6PSrW0W', 'https://ibb.co/XyFKxjW']},
        {description: "Our sessions celebrate the special bond between mother and child, creating intimate and tender images that showcase the natural beauty of this precious time. Capture your little one's first smiles, or peaceful moments of nurisng and snuggles",
        name: 'Newborn/Feeding',
        price: 250,
        gallery: ['https://ibb.co/Mf1tk1f', 'https://ibb.co/ZM9CKf8', 'https://ibb.co/311ThR5', 'https://ibb.co/Ypp6zbd', 'https://ibb.co/hgzt3Tx', 'https://ibb.co/n6Nc2fs']}
    ]);
    console.log(packages)
}
seed();

