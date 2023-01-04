import { createServer, Model } from "miragejs";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.namespace = ""; // necessário quando estamos trabalhando com o nextjs para não afetar o comportamento das nossas apis do next
      this.passthrough(); // todas as requisições para '/api' passam pelo miraje
    },
  });

  return server;
}
