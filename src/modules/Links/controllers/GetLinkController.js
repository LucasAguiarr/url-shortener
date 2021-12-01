const { GetLinkService } = require('../services/GetLinkService');

class GetLinkController {
  async handle(req, res) {
    const service = new GetLinkService();

    const result = await service.execute(req.params.code);

    return res.redirect(result.url);
  }
}

module.exports = { GetLinkController };
