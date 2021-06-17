import { getUser } from './dataSource.js';
import { getUser as getUserMock } from './dataSourceMock.js';
describe("dataSource", function () {
    it("dataSource returns a user with an unpredicatable name depending on the REST resource", async function () {
        const userProfile = await getUser();
        expect(userProfile.name).toBeDefined();
    });
});

describe("dataSourceMock", function () {
    it("dataSource returns a user named Mock", async function () {
        const userProfile = await getUserMock();
        expect(userProfile.name).toBe('Mock');
    });
});