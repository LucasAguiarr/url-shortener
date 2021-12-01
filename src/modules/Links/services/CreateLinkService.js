const { prismaClient } = require('../../../shared/prisma');

const makeCode = (size) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (var i = 0; i < size; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

class CreateLinkService {
  async execute({ url, size = 8 }) {
    let alreadyExistCode, code;

    while (!code) {
      code = makeCode(size);
      alreadyExistCode = await prismaClient.link.findFirst({ where: { code } });

      if (alreadyExistCode) {
        code = '';
      }
    }

    const link = await prismaClient.link.create({
      data: {
        url,
        code,
      },
    });

    return `${process.env.API_URL}/${link.code}`;
  }
}

module.exports = { CreateLinkService };
