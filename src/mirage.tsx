import { createServer, Model, Server, Registry } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import Schema from "miragejs/orm/schema";

// Define the employee type
type Employee = {
  id: number;
  name: string;
  role: string;
};

// Define Mirage server with TypeScript
export function makeServer(): Server {
  return createServer({
    models: {
      employee: Model as ModelDefinition<Employee>, // Define the model type for Employee
    },

    seeds(server) {
      server.create("employee", { id: 1, name: "John Doe", role: "Developer" });
      server.create("employee", { id: 2, name: "Nancy Smith", role: "Designer" });
      server.create("employee", { id: 3, name: "Nikita Smith", role: "IT" });
      server.create("employee", { id: 4, name: "John Smith", role: "HR" });
      server.create("employee", { id: 5, name: "Anshul Smith", role: "SDET" });
      server.create("employee", { id: 6, name: "Ankit Smith", role: "React Developer" });
      server.create("employee", { id: 7, name: "yogesh Smith", role: "Angular Dev" });
      server.create("employee", { id: 8, name: "yash Smith", role: "Designer" });
      server.create("employee", { id: 9, name: "Radhe Smith", role: "Designer" });
      server.create("employee", { id: 10, name: "Anjali Smith", role: "Customer Support" });

    },

    routes() {
      this.namespace = "api";

      // Fetch all employees
      this.get("/employees", (schema: Schema<unknown>) => {
        return schema.all("employee");
      });

      // Create new employee
      this.post("/employees", (schema: Schema<any>, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.create("employee", attrs);
      });

      // Update existing employee by ID
      this.put("/employees/:id", (schema: Schema<any>, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody);
        const employee = schema.find("employee", id);
        return employee?.update(attrs);
      });

      // Delete employee by ID
      this.delete("/employees/:id", (schema: Schema<any>, request) => {
        const id = request.params.id;
        const employee = schema.find("employee", id);
        return employee?.destroy();
      });
    },
  });
}
