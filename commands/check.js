const KeyManager = require("../lib/KeyManager");
const CryptoAPI = require("../lib/CryptoApi");

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      const api = new CryptoAPI(key);
      const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

      console.log(priceOutputData);
    } catch (e) {
      console.log(e.message.red);
    }
  },
};

module.exports = check;
