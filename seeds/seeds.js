const sequelize = require('../config/connection');

const seedDatabase = async () => {
    await sequelize.sync({ force: true })

    // need to figure out how to seed database.

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
}