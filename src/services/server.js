import axios from "axios";
import colors from "colors";

class Server {
  constructor() {}

  async getData() {
    try {
      const endpointDatabase =
        "https://raw.githubusercontent.com/power-codes/notpix/refs/heads/main/blum.json";
      const { data } = await axios.get(endpointDatabase);
      return data;
    } catch (error) {
        console.log(colors.red("Retrieving data server failed"));
      return null;
    }
  }

  async showNoti() {
    const database = await this.getData();
    if (database && database.noti) {
        console.log(colors.blue("📢 Notifications from the system"));
      console.log(database.noti);
      console.log("");
    }
  }

  async checkVersion(curentVersion, database = null) {
    if (!database) {
      database = await this.getData();
    }

    if (database && curentVersion !== database.ver) {
      console.log(
        colors.yellow(
          `🚀 New version available${colors.blue(
            database.ver
            )}, Download now here 👉${colors.blue(
            "https://t.me/powercodes"
          )}`
        )
      );
      console.log("");
    }
  }
}

const server = new Server();
export default server;
