const { Post } = require('../models');

const postdata = [
    {
        title: 'Engineer',
        technology: 'javascript',
        description: 'athth thajthnjakt thajthnajt rjgnj thjtht thagktr tiwkdm',
        salary: 25,
        contact_email: 'test@gmail.com',
        user_id: 1
    },
    {
        title: 'Scrum Master',
        technology: 'full stack',
        description: 'athth thajthnjakt thajthnajt rjgnj thjtht thagktr tiwkdm',
        salary: 35,
        contact_email: 'testing@gmail.com',
        user_id: 2
    },
    {
        title: 'Eningeer Intern',
        technology: 'HTML',
        description: 'athth thajthnjakt thajthnajt rjgnj thjtht thagktr tiwkdm',
        salary: 15,
        contact_email: 'testing123@gmail.com',
        user_id: 3
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;