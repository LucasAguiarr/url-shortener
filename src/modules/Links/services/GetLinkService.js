const { prismaClient } = require('../../../shared/prisma');

class GetLinkService {
  async execute(code) {
    let link = await prismaClient.link.findFirst({
      where: {
        code,
      },
    });

    if (!link) {
      throw new Error('Link not found');
    }

    return link;
  }
}

module.exports = { GetLinkService };
