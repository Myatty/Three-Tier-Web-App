const request = require("supertest");
const app = require("./index"); 

describe("Health checks", () => {

    it('should get all tasks (empty or real)', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.status).toBe(200);
      });
    
    it("should return Healthy", async () => {
        const res = await request(app).get("/healthz");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe("Healthy");
    });

    it("should return Started", async () => {
        const res = await request(app).get("/started");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe("Started");
    });

    it("should return Ready or Not Ready", async () => {
        const res = await request(app).get("/ready");
        expect([200, 503]).toContain(res.statusCode);
    });

    afterAll(async () => {
        await mongoose.connection.close();
      });
});

