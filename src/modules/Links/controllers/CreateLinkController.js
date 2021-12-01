const { CreateLinkService } = require('../services/CreateLinkService');

class CreateLinkController {
  async handle(req, res) {
    const { url } = req.body;

    const service = new CreateLinkService();
    const result = await service.execute({
      url,
    });

    return res.json(result);
  }
}

module.exports = { CreateLinkController };
